import Database from "better-sqlite3";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import path from "path";

// --- validation ---

const VALID_PLATFORMS = [
  "shopify",
  "woocommerce",
  "magento",
  "custom",
  "other",
] as const;

interface ContactFormData {
  readonly name: string;
  readonly company?: string;
  readonly email: string;
  readonly contact?: string;
  readonly platform?: (typeof VALID_PLATFORMS)[number];
  readonly notes?: string;
}

function validateFormData(
  data: unknown,
): { valid: true; data: ContactFormData } | { valid: false; error: string } {
  if (!data || typeof data !== "object") {
    return { valid: false, error: "Invalid request body" };
  }

  const body = data as Record<string, unknown>;

  if (typeof body.name !== "string" || body.name.trim().length === 0) {
    return { valid: false, error: "Name is required" };
  }

  if (
    typeof body.email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)
  ) {
    return { valid: false, error: "Valid email is required" };
  }

  if (
    body.platform &&
    !VALID_PLATFORMS.includes(body.platform as (typeof VALID_PLATFORMS)[number])
  ) {
    return { valid: false, error: "Invalid platform" };
  }

  return {
    valid: true,
    data: {
      name: body.name as string,
      company: (body.company as string) || undefined,
      email: body.email as string,
      contact: (body.contact as string) || undefined,
      platform: body.platform as ContactFormData["platform"],
      notes: (body.notes as string) || undefined,
    },
  };
}

// --- rate limiting ---

const submissions = new Map<string, number[]>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 60 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissions.get(ip) ?? []).filter(
    (t) => now - t < RATE_WINDOW,
  );
  if (timestamps.length >= RATE_LIMIT) return true;
  submissions.set(ip, [...timestamps, now]);
  return false;
}

// --- SQLite database ---

const DB_PATH =
  process.env.SQLITE_DB_PATH ??
  path.join(process.cwd(), "data", "contacts.db");

let db: Database.Database | null = null;

function getDb(): Database.Database {
  if (!db) {
    db = new Database(DB_PATH);
    db.pragma("journal_mode = WAL");
    db.exec(`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        company TEXT,
        email TEXT NOT NULL,
        contact TEXT,
        platform TEXT,
        notes TEXT,
        created_at TEXT DEFAULT (datetime('now'))
      )
    `);
  }
  return db;
}

// --- HTML escaping ---

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

// --- route handler ---

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many submissions. Please try later." },
        { status: 429 },
      );
    }

    const body = await request.json();
    const validation = validateFormData(body);

    if (!validation.valid) {
      return NextResponse.json(
        { success: false, error: validation.error },
        { status: 400 },
      );
    }

    const { data } = validation;

    // 1. Insert into SQLite
    try {
      const database = getDb();
      const stmt = database.prepare(`
        INSERT INTO contact_submissions (name, company, email, contact, platform, notes)
        VALUES (?, ?, ?, ?, ?, ?)
      `);
      stmt.run(
        data.name,
        data.company ?? null,
        data.email,
        data.contact ?? null,
        data.platform ?? null,
        data.notes ?? null,
      );
    } catch (dbError) {
      console.error("SQLite insert error:", dbError);
      return NextResponse.json(
        { success: false, error: "Failed to save submission" },
        { status: 500 },
      );
    }

    // 2. Send email notification (optional — only if Resend is configured)
    const resendKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.NOTIFICATION_EMAIL;
    if (resendKey && notificationEmail) {
      try {
        const resend = new Resend(resendKey);
        await resend.emails.send({
          from: `GGBANG <${process.env.EMAIL_FROM ?? "onboarding@resend.dev"}>`,
          to: notificationEmail,
          subject: `New contact: ${data.name}${data.company ? ` (${data.company})` : ""}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <table style="border-collapse:collapse;width:100%;max-width:600px">
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(data.name)}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Company</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(data.company ?? "—")}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(data.email)}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">WeChat/WhatsApp</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(data.contact ?? "—")}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Platform</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(data.platform ?? "—")}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Notes</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(data.notes ?? "—")}</td></tr>
            </table>
          `,
        });
      } catch (emailError) {
        console.error("Resend email error:", emailError);
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
