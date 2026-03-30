/**
 * Publish approved posts to their respective platforms.
 * Can also be used interactively to review + publish in one step.
 *
 * Usage: npm run publish
 */
import "dotenv/config";
import {
  getApprovedPosts,
  getPendingPosts,
  updatePostStatus,
  approveAll,
  approveByIds,
  rejectByIds,
} from "./db.js";
import { sendMessage, waitForReply } from "./telegram.js";
import * as zhihu from "./platforms/zhihu.js";
import * as reddit from "./platforms/reddit.js";
import * as twitter from "./platforms/twitter.js";
import * as xiaohongshu from "./platforms/xiaohongshu.js";
import * as v2ex from "./platforms/v2ex.js";
import { randomDelay } from "./browser.js";
import type { Post } from "./db.js";

const publishers: Record<
  string,
  (post: Post) => Promise<{ success: boolean; message: string; screenshot?: string }>
> = {
  zhihu: zhihu.publish,
  reddit: reddit.publish,
  twitter: twitter.publish,
  xiaohongshu: xiaohongshu.publish,
  v2ex: v2ex.publish,
};

/** Process review commands from Telegram */
async function handleReview(): Promise<void> {
  const pending = getPendingPosts();
  if (pending.length === 0) {
    console.log("No pending posts to review.");
    return;
  }

  console.log("Waiting for review reply from Telegram (5 min timeout)...");
  const reply = await waitForReply(300_000);

  if (!reply) {
    console.log("No reply received, skipping review.");
    return;
  }

  const cmd = reply.trim().toLowerCase();

  if (cmd === "全部通过" || cmd === "all") {
    const count = approveAll();
    await sendMessage(`✅ 已批准全部 ${count} 条内容，开始发布...`);
    console.log(`Approved all ${count} posts.`);
  } else if (cmd.startsWith("通过") || cmd.startsWith("approve")) {
    const ids = cmd
      .replace(/^(通过|approve)\s*/i, "")
      .split(/[,，\s]+/)
      .map(Number)
      .filter((n) => !isNaN(n));
    const count = approveByIds(ids);
    await sendMessage(`✅ 已批准 ${count} 条内容`);
  } else if (cmd.startsWith("拒绝") || cmd.startsWith("reject")) {
    const ids = cmd
      .replace(/^(拒绝|reject)\s*/i, "")
      .split(/[,，\s]+/)
      .map(Number)
      .filter((n) => !isNaN(n));
    const count = rejectByIds(ids);
    await sendMessage(`❌ 已拒绝 ${count} 条内容`);
  } else if (cmd.startsWith("查看") || cmd.startsWith("view")) {
    const id = parseInt(cmd.replace(/^(查看|view)\s*/i, ""));
    const post = pending.find((p) => p.id === id);
    if (post) {
      await sendMessage(
        `📄 *#${post.id} ${post.platform}*\n${post.title ?? ""}\n\n${post.content}`,
      );
    }
    // Re-enter review loop
    await handleReview();
  }
}

/** Publish all approved posts */
async function publishApproved(): Promise<void> {
  const approved = getApprovedPosts();

  if (approved.length === 0) {
    console.log("No approved posts to publish.");
    return;
  }

  console.log(`Publishing ${approved.length} approved posts...\n`);

  for (const post of approved) {
    const publisher = publishers[post.platform];
    if (!publisher) {
      console.log(`  [${post.id}] Unknown platform: ${post.platform}, skipping`);
      updatePostStatus(post.id, "failed", `Unknown platform: ${post.platform}`);
      continue;
    }

    console.log(`  [${post.id}] Publishing to ${post.platform}...`);

    const result = await publisher(post);

    if (result.success) {
      updatePostStatus(post.id, "published", result.message, result.screenshot);
      console.log(`    ✓ ${result.message}`);
      await sendMessage(
        `✅ #${post.id} ${post.platform} 发布成功\n${result.message}`,
      );
    } else {
      updatePostStatus(post.id, "failed", result.message);
      console.log(`    ✗ ${result.message}`);
      await sendMessage(
        `❌ #${post.id} ${post.platform} 发布失败\n${result.message}`,
      );
    }

    // Wait between platforms to avoid detection
    if (approved.indexOf(post) < approved.length - 1) {
      console.log("    Waiting before next platform...");
      await randomDelay(10000, 20000);
    }
  }

  console.log("\nPublishing complete.");
}

async function main() {
  console.log("=== Lead Hunter: Publish ===\n");

  // Step 1: Handle review if there are pending posts
  const pending = getPendingPosts();
  if (pending.length > 0) {
    console.log(`${pending.length} posts pending review.`);
    await handleReview();
  }

  // Step 2: Publish approved posts
  await publishApproved();
}

main().catch(console.error);
