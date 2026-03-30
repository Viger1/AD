import {
  launchWithSession,
  saveSession,
  randomDelay,
  takeScreenshot,
} from "../browser.js";
import type { Post } from "../db.js";

const PLATFORM = "xiaohongshu";

/**
 * Publish a note on Xiaohongshu Creator Center.
 */
export async function publish(post: Post): Promise<{
  success: boolean;
  message: string;
  screenshot?: string;
}> {
  const { browser, context } = await launchWithSession(PLATFORM, true);

  try {
    const page = await context.newPage();
    await page.goto("https://creator.xiaohongshu.com/publish/publish", {
      waitUntil: "networkidle",
    });
    await randomDelay(3000, 5000);

    // Click "图文" tab if needed
    const textTab = page.locator('div:has-text("图文")').first();
    if (await textTab.isVisible()) {
      await textTab.click();
      await randomDelay(1000, 2000);
    }

    // Set title
    if (post.title) {
      const titleInput = page.locator(
        'input[placeholder*="标题"], input[placeholder*="title"]',
      );
      await titleInput.click();
      await page.keyboard.type(post.title, { delay: 30 });
      await randomDelay(500, 1000);
    }

    // Set content
    const editor = page.locator(
      '[contenteditable="true"], .ql-editor, [data-placeholder]',
    );
    await editor.first().click();
    await randomDelay(500, 1000);
    await page.keyboard.type(post.content, { delay: 20 });
    await randomDelay(2000, 4000);

    const screenshot = await takeScreenshot(page, `xhs-note-${post.id}`);

    // Click publish
    const publishBtn = page.locator(
      'button:has-text("发布"), button:has-text("Publish")',
    );
    await publishBtn.click();
    await randomDelay(3000, 5000);

    await saveSession(context, PLATFORM);
    return { success: true, message: "Note published", screenshot };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { success: false, message };
  } finally {
    await browser.close();
  }
}
