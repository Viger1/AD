export type Locale = "zh" | "en";

export const translations = {
  nav: {
    payment: { zh: "支付方式", en: "Payments" },
    features: { zh: "功能特性", en: "Features" },
    howItWorks: { zh: "接入流程", en: "How It Works" },
    pricing: { zh: "定价", en: "Pricing" },
    faq: { zh: "常见问题", en: "FAQ" },
    cta: { zh: "免费接入", en: "Get Started" },
  },

  hero: {
    badge: {
      zh: "为跨境电商和独立站量身打造",
      en: "Built for Cross-Border E-Commerce & DTC Brands",
    },
    titleLine1: { zh: "全球支付，", en: "Global Payments," },
    titleHighlight: { zh: "一键接入", en: "One Click Away" },
    description: {
      zh: "GGBANG 为独立站和跨境电商提供一站式支付解决方案。支持全球 200+ 支付方式，5 分钟完成集成，让你专注于业务增长。",
      en: "GGBANG provides an all-in-one payment solution for DTC brands and cross-border merchants. 200+ payment methods, 5-minute integration, so you can focus on growth.",
    },
    ctaPrimary: { zh: "免费开始接入", en: "Start for Free" },
    ctaSecondary: { zh: "查看接入流程", en: "See How It Works" },
    stats: {
      methods: { value: "200+", zh: "支付方式", en: "Payment Methods" },
      countries: { value: "50+", zh: "覆盖国家", en: "Countries" },
      uptime: { value: "99.99%", zh: "系统可用性", en: "Uptime" },
      integration: { value: "5min", zh: "快速集成", en: "Integration" },
    },
  },

  paymentMethods: {
    title: {
      zh: "支持全球主流支付方式",
      en: "Every Payment Method Your Customers Use",
    },
    description: {
      zh: "一次对接，覆盖全球消费者偏好的支付方式，提升结账转化率",
      en: "One integration covers every payment preference worldwide, boosting checkout conversion",
    },
    categories: {
      cards: { zh: "国际信用卡", en: "Credit & Debit Cards" },
      wallets: { zh: "数字钱包", en: "Digital Wallets" },
      local: { zh: "本地支付", en: "Local Payments" },
      bnpl: { zh: "先买后付", en: "Buy Now Pay Later" },
    },
  },

  features: {
    title: { zh: "为什么选择 GGBANG", en: "Why GGBANG" },
    description: {
      zh: "专为跨境电商场景设计，解决独立站支付的每一个痛点",
      en: "Purpose-built for cross-border commerce, solving every payment pain point",
    },
    items: [
      {
        title: { zh: "5 分钟快速集成", en: "5-Minute Integration" },
        description: {
          zh: "提供 RESTful API、SDK 和主流建站平台插件，Shopify / WooCommerce / 自建站均可快速接入。",
          en: "RESTful API, SDK, and plugins for Shopify, WooCommerce, and custom-built stores. Get up and running in minutes.",
        },
      },
      {
        title: { zh: "安全合规", en: "Secure & Compliant" },
        description: {
          zh: "PCI DSS Level 1 认证，3D Secure 验证，实时风控反欺诈系统，保障每一笔交易安全。",
          en: "PCI DSS Level 1 certified, 3D Secure authentication, real-time fraud prevention protecting every transaction.",
        },
      },
      {
        title: { zh: "多币种自动结算", en: "Multi-Currency Settlement" },
        description: {
          zh: "支持 30+ 币种自动换汇结算，实时汇率，减少汇损，资金直达你的账户。",
          en: "Auto-convert and settle in 30+ currencies with real-time rates, minimal FX loss, funds straight to your account.",
        },
      },
      {
        title: { zh: "实时数据看板", en: "Real-Time Dashboard" },
        description: {
          zh: "交易数据实时可视化，转化漏斗分析，收入报表一目了然，数据驱动增长决策。",
          en: "Live transaction analytics, conversion funnels, and revenue reports at a glance. Data-driven growth decisions.",
        },
      },
      {
        title: { zh: "智能路由", en: "Smart Routing" },
        description: {
          zh: "自动选择最优支付通道，提升支付成功率，降低拒付率，交易成功率高达 98%+。",
          en: "Automatically routes to the optimal payment channel, boosting success rates to 98%+ and reducing chargebacks.",
        },
      },
      {
        title: { zh: "7x24 技术支持", en: "24/7 Support" },
        description: {
          zh: "专属技术对接群，工程师 1 对 1 协助集成，遇到问题随时响应，不让支付问题影响你的生意。",
          en: "Dedicated integration support with 1-on-1 engineering assistance. We respond fast so payments never slow you down.",
        },
      },
    ],
  },

  howItWorks: {
    title: { zh: "接入流程", en: "How It Works" },
    description: {
      zh: "简单 4 步，从注册到收款",
      en: "4 simple steps from sign-up to getting paid",
    },
    steps: [
      {
        title: { zh: "注册账户", en: "Create Account" },
        description: {
          zh: "填写基本信息，完成企业认证，获取 API 密钥。全程在线，最快 10 分钟完成。",
          en: "Fill in your details, verify your business, and get your API keys. Fully online, as fast as 10 minutes.",
        },
      },
      {
        title: { zh: "选择集成方式", en: "Choose Integration" },
        description: {
          zh: "Shopify / WooCommerce 一键安装插件；自建站使用 RESTful API 或 SDK（支持 Node.js、Python、PHP、Java）。",
          en: "One-click plugins for Shopify & WooCommerce. RESTful API and SDKs (Node.js, Python, PHP, Java) for custom stores.",
        },
      },
      {
        title: { zh: "配置支付方式", en: "Configure Payments" },
        description: {
          zh: "在控制台选择目标市场和支付方式，系统自动推荐最优支付组合，一键开通。",
          en: "Select target markets and methods in your dashboard. We recommend the optimal mix — enable with one click.",
        },
      },
      {
        title: { zh: "上线收款", en: "Go Live" },
        description: {
          zh: "测试环境验证通过后，一键切换到生产环境，即刻开始全球收款。",
          en: "After sandbox testing, switch to production with one click and start accepting payments worldwide.",
        },
      },
    ],
  },

  pricing: {
    title: { zh: "透明定价，按量付费", en: "Transparent, Pay-As-You-Go Pricing" },
    description: {
      zh: "零接入费，零月费，只在产生交易时收费",
      en: "No setup fees, no monthly fees — you only pay when you get paid",
    },
    popular: { zh: "最受欢迎", en: "Most Popular" },
    plans: [
      {
        name: { zh: "起步版", en: "Starter" },
        price: { zh: "免费接入", en: "Free to Start" },
        rate: "2.9% + $0.30",
        rateLabel: { zh: "每笔交易", en: "per transaction" },
        cta: { zh: "立即开始", en: "Get Started" },
        features: {
          zh: [
            "全球主流支付方式",
            "标准 API & SDK",
            "基础数据看板",
            "邮件技术支持",
            "测试沙箱环境",
          ],
          en: [
            "Global payment methods",
            "Standard API & SDK",
            "Basic dashboard",
            "Email support",
            "Sandbox testing",
          ],
        },
      },
      {
        name: { zh: "增长版", en: "Growth" },
        price: { zh: "联系销售", en: "Contact Sales" },
        rate: { zh: "阶梯费率", en: "Volume pricing" },
        rateLabel: {
          zh: "月交易量越大费率越低",
          en: "Lower rates at higher volume",
        },
        cta: { zh: "联系我们", en: "Contact Us" },
        highlight: true,
        features: {
          zh: [
            "起步版全部功能",
            "智能支付路由",
            "高级风控系统",
            "多币种自动结算",
            "专属技术对接群",
            "自定义结账页面",
          ],
          en: [
            "Everything in Starter",
            "Smart payment routing",
            "Advanced fraud protection",
            "Multi-currency settlement",
            "Dedicated support channel",
            "Custom checkout pages",
          ],
        },
      },
      {
        name: { zh: "企业版", en: "Enterprise" },
        price: { zh: "定制方案", en: "Custom" },
        rate: { zh: "专属费率", en: "Custom rates" },
        rateLabel: { zh: "量身定制", en: "Tailored to you" },
        cta: { zh: "预约咨询", en: "Book a Call" },
        features: {
          zh: [
            "增长版全部功能",
            "私有化部署可选",
            "专属客户成功经理",
            "SLA 保障",
            "定制开发支持",
            "优先技术响应",
          ],
          en: [
            "Everything in Growth",
            "Self-hosted deployment option",
            "Dedicated success manager",
            "SLA guarantee",
            "Custom development",
            "Priority response",
          ],
        },
      },
    ],
  },

  faq: {
    title: { zh: "常见问题", en: "Frequently Asked Questions" },
    description: {
      zh: "关于 GGBANG 支付服务的常见疑问",
      en: "Common questions about GGBANG payment services",
    },
    items: [
      {
        question: {
          zh: "GGBANG 支持哪些支付方式？",
          en: "What payment methods does GGBANG support?",
        },
        answer: {
          zh: "GGBANG 支持 Visa、Mastercard、American Express、PayPal、Apple Pay、Google Pay、支付宝、微信支付等全球 200+ 种支付方式，覆盖 50+ 国家和地区的本地支付渠道。",
          en: "GGBANG supports 200+ payment methods worldwide including Visa, Mastercard, American Express, PayPal, Apple Pay, Google Pay, Alipay, WeChat Pay, and local payment channels across 50+ countries.",
        },
      },
      {
        question: {
          zh: "接入 GGBANG 需要多长时间？",
          en: "How long does it take to integrate GGBANG?",
        },
        answer: {
          zh: "Shopify、WooCommerce 等主流建站平台可通过插件一键接入，最快 5 分钟完成。自建站通过 API/SDK 集成，通常 1-2 小时内完成。我们提供完善的文档和沙箱测试环境。",
          en: "Shopify and WooCommerce stores can integrate via plugin in as little as 5 minutes. Custom stores using our API/SDK typically complete integration within 1-2 hours. Full documentation and sandbox included.",
        },
      },
      {
        question: {
          zh: "GGBANG 的费率是多少？有隐藏费用吗？",
          en: "What are GGBANG's fees? Are there hidden costs?",
        },
        answer: {
          zh: "GGBANG 采用透明定价，起步版费率为每笔交易 2.9% + $0.30，无接入费、无月费、无隐藏费用。交易量大的商户可享受阶梯费率优惠，欢迎联系我们获取定制方案。",
          en: "GGBANG uses transparent pricing. Starter plan is 2.9% + $0.30 per transaction with zero setup fees, no monthly fees, and no hidden costs. High-volume merchants enjoy volume discounts — contact us for a custom quote.",
        },
      },
      {
        question: {
          zh: "结算周期是多久？支持哪些币种？",
          en: "What's the settlement period? Which currencies are supported?",
        },
        answer: {
          zh: "标准结算周期为 T+2（交易后 2 个工作日），支持 30+ 币种自动换汇结算。可选择以美元、欧元、英镑、人民币等主要货币入账。",
          en: "Standard settlement is T+2 (2 business days after transaction). We support auto-conversion for 30+ currencies. Settle in USD, EUR, GBP, CNY, and other major currencies.",
        },
      },
      {
        question: {
          zh: "GGBANG 如何保障支付安全？",
          en: "How does GGBANG ensure payment security?",
        },
        answer: {
          zh: "我们通过 PCI DSS Level 1 认证（支付行业最高安全标准），支持 3D Secure 2.0 验证，内置实时风控反欺诈系统，采用 AES-256 加密传输。每一笔交易都受到多层安全保护。",
          en: "We hold PCI DSS Level 1 certification (the highest security standard), support 3D Secure 2.0, run real-time fraud prevention, and use AES-256 encryption. Every transaction is protected by multiple security layers.",
        },
      },
      {
        question: {
          zh: "遇到问题如何获取技术支持？",
          en: "How do I get technical support?",
        },
        answer: {
          zh: "起步版提供邮件支持，增长版及以上享有专属技术对接群和工程师 1 对 1 协助。我们提供完善的 API 文档、集成指南和示例代码，帮助你快速解决集成中的任何问题。",
          en: "Starter includes email support. Growth and above get a dedicated support channel with 1-on-1 engineering help. We also provide comprehensive API docs, integration guides, and sample code.",
        },
      },
    ],
  },

  cta: {
    title: {
      zh: "准备好开始全球收款了吗？",
      en: "Ready to Accept Payments Worldwide?",
    },
    description: {
      zh: "留下联系方式，我们的团队将在 24 小时内与你联系，为你定制最优支付方案。",
      en: "Leave your details and our team will reach out within 24 hours with a tailored payment solution.",
    },
    form: {
      name: { zh: "姓名", en: "Name" },
      namePlaceholder: { zh: "你的姓名", en: "Your name" },
      company: { zh: "公司名称", en: "Company" },
      companyPlaceholder: { zh: "公司或店铺名称", en: "Company or store name" },
      email: { zh: "邮箱", en: "Email" },
      emailPlaceholder: { zh: "your@email.com", en: "your@email.com" },
      contact: { zh: "微信 / WhatsApp", en: "WeChat / WhatsApp" },
      contactPlaceholder: {
        zh: "方便联系的即时通讯号",
        en: "Your preferred messaging handle",
      },
      platform: { zh: "建站平台", en: "Platform" },
      platformPlaceholder: { zh: "请选择你的建站平台", en: "Select your platform" },
      platformOptions: {
        shopify: "Shopify",
        woocommerce: "WooCommerce",
        magento: "Magento",
        custom: { zh: "自建站", en: "Custom Built" },
        other: { zh: "其他", en: "Other" },
      },
      notes: { zh: "补充说明", en: "Additional Notes" },
      notesPlaceholder: {
        zh: "你的业务场景、月交易量、特殊需求等",
        en: "Your use case, monthly volume, special requirements, etc.",
      },
      submit: { zh: "提交，获取定制方案", en: "Submit & Get Your Custom Plan" },
    },
    success: {
      title: { zh: "提交成功！", en: "Submitted!" },
      message: {
        zh: "我们已收到你的信息，将在 24 小时内联系你。",
        en: "We've received your details and will reach out within 24 hours.",
      },
    },
  },

  footer: {
    tagline: {
      zh: "跨境电商一站式支付解决方案，让全球收款变得简单。",
      en: "All-in-one cross-border payment solution. Global payments made simple.",
    },
    product: { zh: "产品", en: "Product" },
    resources: { zh: "资源", en: "Resources" },
    contactUs: { zh: "联系我们", en: "Contact" },
    apiDocs: { zh: "API 文档", en: "API Docs" },
    integrationGuide: { zh: "集成指南", en: "Integration Guide" },
    devDocs: { zh: "开发者文档", en: "Developer Docs" },
    blog: { zh: "博客", en: "Blog" },
    privacy: { zh: "隐私政策", en: "Privacy" },
    terms: { zh: "服务条款", en: "Terms" },
  },
} as const;
