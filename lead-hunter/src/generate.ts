/**
 * Generate content for all platforms and send to Telegram for review.
 *
 * Usage: npm run generate
 */
import "dotenv/config";
import { generateAllPlatforms } from "./content/generator.js";
import { getPendingPosts } from "./db.js";
import { sendMessage } from "./telegram.js";

async function main() {
  console.log("=== Lead Hunter: Content Generation ===\n");

  // Generate content
  const ids = generateAllPlatforms();

  if (ids.length === 0) {
    console.log("No content generated.");
    return;
  }

  // Get pending posts for review
  const pending = getPendingPosts();

  // Build review message
  let msg = "📝 *内容已生成，等待审核*\n\n";
  for (const post of pending) {
    const preview =
      post.content.slice(0, 80).replace(/\n/g, " ") + "...";
    msg += `[${post.id}] *${post.platform}*`;
    if (post.title) msg += ` - ${post.title}`;
    msg += `\n${preview}\n\n`;
  }
  msg += "回复以下指令：\n";
  msg += '• `全部通过` — 发布所有内容\n';
  msg += "• `通过 1,2,4` — 发布指定编号\n";
  msg += "• `拒绝 3,5` — 丢弃指定编号\n";
  msg += '• `查看 1` — 查看完整内容';

  await sendMessage(msg);
  console.log("\nReview notification sent to Telegram.");
  console.log(`${pending.length} posts pending review.`);
}

main().catch(console.error);
