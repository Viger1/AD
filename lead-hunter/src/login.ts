/**
 * Interactive login script.
 * Opens a visible browser for each platform so the user can log in manually.
 * After login, saves the session cookies for future headless use.
 *
 * Usage: npm run login
 *
 * On the server, first set up SSH port forwarding:
 *   ssh -L 9222:localhost:9222 ubuntu@18.136.212.12
 * Then run this script — it opens Chromium with remote debugging.
 */
import { chromium } from "playwright";
import { saveSession, hasSession } from "./browser.js";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const STORAGE_DIR = path.join(__dirname, "..", "data", "browser-sessions");

const PLATFORMS = [
  { name: "zhihu", url: "https://www.zhihu.com/signin" },
  { name: "reddit", url: "https://www.reddit.com/login" },
  { name: "twitter", url: "https://x.com/i/flow/login" },
  { name: "xiaohongshu", url: "https://creator.xiaohongshu.com" },
  { name: "v2ex", url: "https://www.v2ex.com/signin" },
];

async function main() {
  if (!fs.existsSync(STORAGE_DIR)) {
    fs.mkdirSync(STORAGE_DIR, { recursive: true });
  }

  const args = process.argv.slice(2);
  const targetPlatform = args[0];

  const platformsToLogin = targetPlatform
    ? PLATFORMS.filter((p) => p.name === targetPlatform)
    : PLATFORMS.filter((p) => !hasSession(p.name));

  if (platformsToLogin.length === 0) {
    if (targetPlatform) {
      console.log(`Unknown platform: ${targetPlatform}`);
      console.log(`Available: ${PLATFORMS.map((p) => p.name).join(", ")}`);
    } else {
      console.log("All platforms already have saved sessions.");
      console.log("To re-login a specific platform: npm run login -- zhihu");
    }
    return;
  }

  for (const platform of platformsToLogin) {
    console.log(`\n--- Login: ${platform.name} ---`);
    console.log(`Opening ${platform.url}`);
    console.log("Please log in manually in the browser window.");
    console.log('Press Enter here when done...\n');

    const browser = await chromium.launch({
      headless: false,
      args: ["--no-sandbox", "--remote-debugging-port=9222"],
    });

    const context = await browser.newContext({
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
      viewport: { width: 1280, height: 800 },
      locale: "zh-CN",
    });

    const page = await context.newPage();
    await page.goto(platform.url, { waitUntil: "domcontentloaded" });

    // Wait for user to press Enter
    await new Promise<void>((resolve) => {
      process.stdin.once("data", () => resolve());
    });

    // Save session
    await saveSession(context, platform.name);
    console.log(`Session saved for ${platform.name}`);

    await browser.close();
  }

  console.log("\nAll logins complete!");
}

main().catch(console.error);
