import {
  launchWithSession,
  saveSession,
  randomDelay,
  takeScreenshot,
} from "../browser.js";
import type { Post } from "../db.js";

const PLATFORM = "reddit";

/**
 * Post a comment on a Reddit post.
 * post.target_url should be the full Reddit post URL.
 */
export async function publish(post: Post): Promise<{
  success: boolean;
  message: string;
  screenshot?: string;
}> {
  const { browser, context } = await launchWithSession(PLATFORM, true);

  try {
    const page = await context.newPage();

    if (!post.target_url) {
      return { success: false, message: "No target URL provided" };
    }

    // Navigate to the post
    await page.goto(post.target_url, { waitUntil: "networkidle" });
    await randomDelay(3000, 5000);

    // Find and click the comment box
    const commentBox = page.locator(
      '[contenteditable="true"][data-lexical-editor="true"], textarea[placeholder*="comment"], div[role="textbox"]',
    );
    await commentBox.first().waitFor({ timeout: 10000 });
    await commentBox.first().click();
    await randomDelay(500, 1500);

    // Type the comment
    await page.keyboard.type(post.content, { delay: 25 });
    await randomDelay(2000, 4000);

    const screenshot = await takeScreenshot(page, `reddit-comment-${post.id}`);

    // Submit
    const submitBtn = page.locator(
      'button:has-text("Comment"), button[type="submit"]:has-text("Comment")',
    );
    await submitBtn.click();
    await randomDelay(3000, 5000);

    await saveSession(context, PLATFORM);
    return { success: true, message: "Comment posted", screenshot };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { success: false, message };
  } finally {
    await browser.close();
  }
}
