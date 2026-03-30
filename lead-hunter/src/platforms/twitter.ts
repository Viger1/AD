import {
  launchWithSession,
  saveSession,
  randomDelay,
  takeScreenshot,
} from "../browser.js";
import type { Post } from "../db.js";

const PLATFORM = "twitter";

/**
 * Post a tweet on X/Twitter.
 */
export async function publish(post: Post): Promise<{
  success: boolean;
  message: string;
  screenshot?: string;
}> {
  const { browser, context } = await launchWithSession(PLATFORM, true);

  try {
    const page = await context.newPage();
    await page.goto("https://x.com/compose/post", {
      waitUntil: "networkidle",
    });
    await randomDelay(3000, 5000);

    // Focus the tweet editor
    const editor = page.locator(
      '[data-testid="tweetTextarea_0"], [role="textbox"][data-testid]',
    );
    await editor.waitFor({ timeout: 10000 });
    await editor.click();
    await randomDelay(500, 1000);

    // Type tweet content
    await page.keyboard.type(post.content, { delay: 35 });
    await randomDelay(2000, 4000);

    const screenshot = await takeScreenshot(page, `twitter-post-${post.id}`);

    // Click post button
    const postBtn = page.locator(
      '[data-testid="tweetButton"], [data-testid="tweetButtonInline"]',
    );
    await postBtn.click();
    await randomDelay(3000, 5000);

    await saveSession(context, PLATFORM);
    return { success: true, message: "Tweet posted", screenshot };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { success: false, message };
  } finally {
    await browser.close();
  }
}
