import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_PATH = path.join(__dirname, "..", "data", "lead-hunter.db");

let db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (!db) {
    db = new Database(DB_PATH);
    db.pragma("journal_mode = WAL");
    db.exec(`
      CREATE TABLE IF NOT EXISTS posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        platform TEXT NOT NULL,
        title TEXT,
        content TEXT NOT NULL,
        target_url TEXT,
        status TEXT NOT NULL DEFAULT 'pending',
        result TEXT,
        screenshot_path TEXT,
        created_at TEXT DEFAULT (datetime('now')),
        published_at TEXT
      )
    `);
  }
  return db;
}

export interface Post {
  id: number;
  platform: string;
  title: string | null;
  content: string;
  target_url: string | null;
  status: "pending" | "approved" | "published" | "failed" | "rejected";
  result: string | null;
  screenshot_path: string | null;
  created_at: string;
  published_at: string | null;
}

export function addPost(
  platform: string,
  content: string,
  title?: string,
  targetUrl?: string,
): number {
  const db = getDb();
  const result = db
    .prepare(
      "INSERT INTO posts (platform, title, content, target_url, status) VALUES (?, ?, ?, ?, 'pending')",
    )
    .run(platform, title ?? null, content, targetUrl ?? null);
  return result.lastInsertRowid as number;
}

export function getPendingPosts(): Post[] {
  return getDb()
    .prepare("SELECT * FROM posts WHERE status = 'pending' ORDER BY id")
    .all() as Post[];
}

export function getApprovedPosts(): Post[] {
  return getDb()
    .prepare("SELECT * FROM posts WHERE status = 'approved' ORDER BY id")
    .all() as Post[];
}

export function updatePostStatus(
  id: number,
  status: Post["status"],
  result?: string,
  screenshotPath?: string,
): void {
  const publishedAt = status === "published" ? new Date().toISOString() : null;
  getDb()
    .prepare(
      "UPDATE posts SET status = ?, result = ?, screenshot_path = ?, published_at = COALESCE(?, published_at) WHERE id = ?",
    )
    .run(status, result ?? null, screenshotPath ?? null, publishedAt, id);
}

export function approveAll(): number {
  const result = getDb()
    .prepare("UPDATE posts SET status = 'approved' WHERE status = 'pending'")
    .run();
  return result.changes;
}

export function approveByIds(ids: number[]): number {
  const placeholders = ids.map(() => "?").join(",");
  const result = getDb()
    .prepare(
      `UPDATE posts SET status = 'approved' WHERE status = 'pending' AND id IN (${placeholders})`,
    )
    .run(...ids);
  return result.changes;
}

export function rejectByIds(ids: number[]): number {
  const placeholders = ids.map(() => "?").join(",");
  const result = getDb()
    .prepare(
      `UPDATE posts SET status = 'rejected' WHERE status = 'pending' AND id IN (${placeholders})`,
    )
    .run(...ids);
  return result.changes;
}
