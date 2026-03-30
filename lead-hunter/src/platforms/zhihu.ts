import {
  launchWithSession,
  saveSession,
  randomDelay,
  humanType,
  takeScreenshot,
} from "../browser.js";
import type { Post } from "../db.js";

const PLATFORM = "zhihu";

/**
 * Publish a Zhihu answer or article.
 * - If target_url is a question URL, answer that question.
 * - Otherwise, publish as a zhuanlan article.
 */
export async function publish(post: Post): Promise<{
  success: boolean;
  message: string;
  screenshot?: string;
}> {
  const { browser, context } = await launchWithSession(PLATFORM, true);

  try {
    const page = await context.newPage();

    if (post.target_url?.includes("zhihu.com/question/")) {
      // Answer a question
      await page.goto(post.target_url, { waitUntil: "networkidle" });
      await randomDelay(2000, 4000);

      // Click "写回答" button
      const answerBtn = page.locator(
        'button:has-text("写回答"), a:has-text("写回答")',
      );
      if (await answerBtn.isVisible()) {
        await answerBtn.click();
        await randomDelay(1500, 3000);
      }

      // Focus the editor
      const editor = page.locator(
        '.AnswerForm .RichContent-inner, [contenteditable="true"]',
      );
      await editor.waitFor({ timeout: 10000 });
      await editor.click();
      await randomDelay(500, 1000);

      // Type content
      await page.keyboard.type(post.content, { delay: 20 });
      await randomDelay(2000, 4000);

      // Take screenshot before submit
      const screenshot = await takeScreenshot(page, `zhihu-answer-${post.id}`);

      // Click submit
      const submitBtn = page.locator(
        'button:has-text("提交回答"), button:has-text("发布回答")',
      );
      await submitBtn.click();
      await randomDelay(3000, 5000);

      await saveSession(context, PLATFORM);
      return { success: true, message: "Answer published", screenshot };
    } else {
      // Publish as zhuanlan article
      await page.goto("https://zhuanlan.zhihu.com/write", {
        waitUntil: "networkidle",
      });
      await randomDelay(2000, 4000);

      // Set title
      if (post.title) {
        const titleInput = page.locator(
          'textarea[placeholder*="标题"], input[placeholder*="标题"]',
        );
        await titleInput.click();
        await page.keyboard.type(post.title, { delay: 30 });
        await randomDelay(500, 1000);
      }

      // Set content in editor
      const editor = page.locator('[contenteditable="true"]').first();
      await editor.click();
      await randomDelay(500, 1000);
      await page.keyboard.type(post.content, { delay: 15 });
      await randomDelay(2000, 4000);

      const screenshot = await takeScreenshot(
        page,
        `zhihu-article-${post.id}`,
      );

      // Click publish
      const publishBtn = page.locator('button:has-text("发布")');
      await publishBtn.click();
      await randomDelay(3000, 5000);

      await saveSession(context, PLATFORM);
      return { success: true, message: "Article published", screenshot };
    }
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error";
    return { success: false, message };
  } finally {
    await browser.close();
  }
}
