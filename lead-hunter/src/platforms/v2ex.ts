import {
  launchWithSession,
  saveSession,
  randomDelay,
  takeScreenshot,
} from "../browser.js";
import type { Post } from "../db.js";

const PLATFORM = "v2ex";

/**
 * Post a topic on V2EX.
 * Uses "分享创造" node by default.
 */
export async function publish(post: Post): Promise<{
  success: boolean;
  message: string;
  screenshot?: string;
}> {
  const { browser, context } = await launchWithSession(PLATFORM, true);

  try {
    const page = await context.newPage();

    // Go to create topic page (default: "分享创造" node)
    const nodeUrl = post.target_url ?? "https://www.v2ex.com/new/create";
    await page.goto(nodeUrl, { waitUntil: "networkidle" });
    await randomDelay(2000, 4000);

    // Set title
    if (post.title) {
      const titleInput = page.locator(
        'input[name="title"], #topic_title',
      );
      await titleInput.click();
      await page.keyboard.type(post.title, { delay: 30 });
      await randomDelay(500, 1000);
    }

    // Set content
    const editor = page.locator(
      'textarea[name="content"], #editor, .CodeMirror textarea',
    );
    await editor.first().click();
    await randomDelay(500, 1000);
    await page.keyboard.type(post.content, { delay: 15 });
    await randomDelay(2000, 4000);

    // Select node if needed
    const nodeSelect = page.locator('select[name="node_name"]');
    if (await nodeSelect.isVisible()) {
      await nodeSelect.selectOption("create");
      await randomDelay(500, 1000);
    }

    const screenshot = await takeScreenshot(page, `v2ex-topic-${post.id}`);

    // Submit
    const submitBtn = page.locator(
      'input[type="submit"], button[type="submit"]',
    );
    await submitBtn.click();
    await randomDelay(3000, 5000);

    await saveSession(context, PLATFORM);
    return { success: true, message: "Topic posted", screenshot };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { success: false, message };
  } finally {
    await browser.close();
  }
}
