import { chromium, type Browser, type BrowserContext } from "playwright";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const STORAGE_DIR = path.join(__dirname, "..", "data", "browser-sessions");

/** Get the storage path for a platform's session cookies */
function getStoragePath(platform: string): string {
  return path.join(STORAGE_DIR, `${platform}.json`);
}

/** Check if a platform has a saved session */
export function hasSession(platform: string): boolean {
  return fs.existsSync(getStoragePath(platform));
}

/** Launch browser with saved session for a platform */
export async function launchWithSession(
  platform: string,
  headless = true,
): Promise<{ browser: Browser; context: BrowserContext }> {
  const storagePath = getStoragePath(platform);
  const browser = await chromium.launch({
    headless,
    args: [
      "--disable-blink-features=AutomationControlled",
      "--no-sandbox",
    ],
  });

  const contextOptions: Record<string, unknown> = {
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    viewport: { width: 1280, height: 800 },
    locale: "zh-CN",
  };

  if (fs.existsSync(storagePath)) {
    contextOptions.storageState = storagePath;
  }

  const context = await browser.newContext(contextOptions);
  return { browser, context };
}

/** Save session cookies for a platform */
export async function saveSession(
  context: BrowserContext,
  platform: string,
): Promise<void> {
  if (!fs.existsSync(STORAGE_DIR)) {
    fs.mkdirSync(STORAGE_DIR, { recursive: true });
  }
  await context.storageState({ path: getStoragePath(platform) });
}

/** Random delay to mimic human behavior */
export function randomDelay(min = 2000, max = 5000): Promise<void> {
  const ms = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Type text slowly like a human */
export async function humanType(
  page: import("playwright").Page,
  selector: string,
  text: string,
): Promise<void> {
  await page.click(selector);
  for (const char of text) {
    await page.keyboard.type(char, {
      delay: Math.floor(Math.random() * 80) + 30,
    });
  }
}

/** Take a screenshot and save it */
export async function takeScreenshot(
  page: import("playwright").Page,
  name: string,
): Promise<string> {
  const screenshotDir = path.join(__dirname, "..", "data", "screenshots");
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }
  const filepath = path.join(
    screenshotDir,
    `${name}-${Date.now()}.png`,
  );
  await page.screenshot({ path: filepath, fullPage: false });
  return filepath;
}
