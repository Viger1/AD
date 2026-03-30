import { execSync } from "child_process";
import { addPost } from "../db.js";

/**
 * Use Claude Code CLI (MAX subscription) to generate platform-specific content.
 * Falls back to a simple template if claude is not available.
 */
function callClaude(prompt: string): string {
  try {
    const result = execSync(
      `claude -p ${JSON.stringify(prompt)} --output-format text`,
      {
        encoding: "utf-8",
        timeout: 120_000,
        maxBuffer: 1024 * 1024,
      },
    );
    return result.trim();
  } catch (error) {
    console.error("[Claude] Failed to call Claude CLI:", error);
    throw new Error("Claude CLI not available");
  }
}

/** Blog articles as source material */
const ARTICLES = [
  {
    slug: "payment-setup-guide",
    title: "独立站支付从0到1完全指南",
    topic: "独立站支付方案选择与配置",
  },
  {
    slug: "chargeback-prevention",
    title: "独立站拒付防控全攻略",
    topic: "跨境电商拒付预防和处理",
  },
  {
    slug: "payment-success-rate",
    title: "支付成功率诊断手册",
    topic: "提升独立站支付成功率",
  },
  {
    slug: "payment-localization",
    title: "目标市场支付本地化实战",
    topic: "东南亚拉美中东支付方式",
  },
  {
    slug: "compliance-guide",
    title: "支付合规生存指南",
    topic: "跨境电商支付合规",
  },
];

interface ContentSpec {
  platform: string;
  style: string;
  maxLength: number;
  targetUrl?: string;
}

const PLATFORM_SPECS: ContentSpec[] = [
  {
    platform: "zhihu",
    style:
      "知乎回答风格：以'我做跨境支付对接3年'的从业者视角，口语化但专业，开头直接给结论，中间用分点列举干货，结尾自然提一句'我们团队做的GGBANG也在解决这个问题'。不要像广告，要像真诚分享经验。",
    maxLength: 2500,
  },
  {
    platform: "reddit",
    style:
      "Reddit comment style for r/shopify or r/ecommerce: Casual, helpful English. Start with a direct answer. Share practical tips as bullet points. Mention 'We built GGBANG (ggbang-portal.xyz) to solve exactly this' naturally near the end. No marketing speak.",
    maxLength: 1500,
  },
  {
    platform: "twitter",
    style:
      "Twitter/X thread style: 3-5 short punchy tweets connected as a thread. Mix Chinese and English naturally. Include 1-2 data points. Last tweet mentions GGBANG with link. Use line breaks between tweets marked with [1/5] etc.",
    maxLength: 1200,
  },
  {
    platform: "xiaohongshu",
    style:
      "小红书笔记风格：标题要有吸引力带数字（如'独立站支付避坑指南｜省下30%手续费的5个方法'），正文用短段落+emoji分隔，口语化，像是在和闺蜜分享经验，结尾带话题标签。提到GGBANG要自然。",
    maxLength: 1000,
  },
  {
    platform: "v2ex",
    style:
      "V2EX 技术分享风格：理性、克制、技术导向。像是写给程序员同行看的经验分享。可以提到技术实现细节（API对接、SDK集成）。结尾可以说'我们在做一个支付聚合工具 GGBANG，欢迎交流'。",
    maxLength: 2000,
  },
];

/** Generate content for all platforms based on a randomly picked article */
export function generateAllPlatforms(): number[] {
  const article = ARTICLES[Math.floor(Math.random() * ARTICLES.length)];
  const ids: number[] = [];

  console.log(`\nGenerating content based on: ${article.title}`);

  for (const spec of PLATFORM_SPECS) {
    console.log(`  Generating for ${spec.platform}...`);

    const prompt = `你是一个跨境电商支付领域的内容创作者。基于以下主题生成一篇适合发布到${spec.platform}的内容。

主题：${article.topic}
标题参考：${article.title}
品牌：GGBANG（官网 https://www.ggbang-portal.xyz）

风格要求：${spec.style}

字数限制：不超过${spec.maxLength}字

重要：
- 内容必须是原创的、有价值的干货
- 不要复制粘贴，要用自己的话重新组织
- 自然提到GGBANG，不要硬广
- 确保内容真实准确，不虚构数据

直接输出内容，不要加任何前缀说明。`;

    try {
      const content = callClaude(prompt);

      // Extract title for platforms that need it
      let title: string | undefined;
      if (
        spec.platform === "zhihu" ||
        spec.platform === "v2ex" ||
        spec.platform === "xiaohongshu"
      ) {
        const firstLine = content.split("\n")[0];
        if (firstLine.length < 50) {
          title = firstLine.replace(/^[#\s]+/, "");
        } else {
          title = article.title;
        }
      }

      const id = addPost(spec.platform, content, title, spec.targetUrl);
      ids.push(id);
      console.log(`    -> Saved as post #${id}`);
    } catch (error) {
      console.error(`    -> Failed: ${error}`);
    }
  }

  return ids;
}
