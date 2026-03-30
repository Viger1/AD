/**
 * Show status of all posts and platform sessions.
 *
 * Usage: npm run status
 */
import { getDb } from "./db.js";
import { hasSession } from "./browser.js";

const PLATFORMS = ["zhihu", "reddit", "twitter", "xiaohongshu", "v2ex"];

function main() {
  console.log("=== Lead Hunter: Status ===\n");

  // Platform sessions
  console.log("Platform Sessions:");
  for (const p of PLATFORMS) {
    const status = hasSession(p) ? "✓ logged in" : "✗ not logged in";
    console.log(`  ${p.padEnd(15)} ${status}`);
  }

  // Post stats
  const db = getDb();
  const stats = db
    .prepare(
      `SELECT status, COUNT(*) as count FROM posts GROUP BY status`,
    )
    .all() as Array<{ status: string; count: number }>;

  console.log("\nPost Statistics:");
  if (stats.length === 0) {
    console.log("  No posts yet.");
  } else {
    for (const s of stats) {
      console.log(`  ${s.status.padEnd(15)} ${s.count}`);
    }
  }

  // Recent posts
  const recent = db
    .prepare(
      "SELECT id, platform, title, status, created_at FROM posts ORDER BY id DESC LIMIT 10",
    )
    .all() as Array<{
    id: number;
    platform: string;
    title: string | null;
    status: string;
    created_at: string;
  }>;

  if (recent.length > 0) {
    console.log("\nRecent Posts:");
    for (const p of recent) {
      const title = p.title ? ` - ${p.title.slice(0, 30)}` : "";
      console.log(
        `  #${p.id} [${p.status}] ${p.platform}${title} (${p.created_at})`,
      );
    }
  }
}

main();
