# GGBANG - AI Content Marketing Service

## Project Overview
GGBANG is an AI content marketing service that helps brands get discovered by AI search engines and real users. We create genuine content and distribute it across 8+ platforms.

- **Website**: https://ggbangco.com (also https://www.ggbang-portal.xyz)
- **GitHub**: https://github.com/Viger1/AD.git
- **Server**: Ubuntu, IP 18.136.212.12, PEM key needed for SSH
- **Domain**: ggbangco.com (primary), ggbang-portal.xyz (legacy)

## Architecture

```
Cloud Server (18.136.212.12):
  ├── ggbang-site/        ← Next.js website (PM2: ggbang-site, port 3000)
  ├── lead-hunter/        ← Auto-publishing system (Playwright + Telegram Bot)
  │   ├── nurture-xhs.mjs    ← Xiaohongshu nurture script (cron 3x/day)
  │   ├── data/browser-sessions/  ← Saved platform cookies
  │   └── data/lead-hunter.db    ← SQLite database
  └── Nginx + SSL (certbot auto-renew)

Local Machine:
  └── opencli             ← For manual platform operations
```

## Server Access
```bash
ssh -i "PATH_TO/GGBANG.pem" ubuntu@18.136.212.12
```

## Key Decisions Made
- Brand pivoted from fake payment company → real AI marketing service (ethical/legal reasons)
- White-hat GEO only — no fake content, no data poisoning (315 compliance)
- Self-hosted on Ubuntu server (not Vercel) with SQLite
- Playwright for server-side browser automation (opencli only works locally)
- Each platform: 1-2 quality accounts, no mass registration

## Services Offered
1. Multi-platform content distribution (Zhihu, Reddit, Twitter/X, Xiaohongshu, V2EX, Medium, Dev.to, HN)
2. White-hat GEO optimization (get cited by ChatGPT/Perplexity)
3. AI-powered content creation

## Current Status
- Website: Live with About section, blog (5 bilingual articles), pricing, FAQ
- Telegram Bot: Connected (token in server .env)
- Xiaohongshu: Account logged in, nurture script running 3x/day via cron
- Reddit/Twitter/V2EX: Accounts exist but not logged in on server yet
- Zhihu: New account, needs 3-5 days nurturing before posting
- Claude Code CLI: Not yet installed on server (needed for content generation)

## Tech Stack
- Next.js 15 + Tailwind CSS 4 + TypeScript
- PM2 process manager
- Nginx reverse proxy + Let's Encrypt SSL
- Playwright for browser automation
- SQLite (better-sqlite3) for data storage
- Telegram Bot API for notifications

## Deploy Workflow
```bash
# Push code
cd D:/Project/AD && git add . && git commit -m "msg" && git push origin main

# Deploy to server
ssh -i "GGBANG.pem" ubuntu@18.136.212.12 "cd /var/www/AD && git pull && cd ggbang-site && npm run build && cp -r .next/static .next/standalone/.next/static && pm2 restart ggbang-site"
```

## User Profile
- Solo founder, 1-person team + AI agents (Claude Code, Codex, OpenClaw)
- Technical capability: can build/deploy independently
- Stage: Early exploration, small budget
- Goal: Build AI content marketing business
