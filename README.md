# tawaim.com

Personal portfolio and blog for Thomas Williams — software developer based in Atlanta, GA.

Live at [tawaim.com](https://tawaim.com)

---

## Stack

- **Framework** — Next.js 16 (App Router)
- **Language** — TypeScript
- **Styling** — Inline styles
- **Blog** — Markdown (MDX via next-mdx-remote)
- **Hosting** — Vercel
- **Domain** — Squarespace DNS → Vercel

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with matrix rain animation |
| `/projects` | GitHub projects pulled live from the GitHub API |
| `/resume` | Work experience, skills, and education |
| `/blog` | Blog post list |
| `/blog/[slug]` | Individual blog post |

---

## Project Structure
```
tawaim-site/
├── app/                  → Next.js pages
│   ├── page.tsx          → Homepage
│   ├── projects/         → GitHub projects page
│   ├── resume/           → Resume page
│   └── blog/             → Blog list + individual posts
├── components/
│   ├── Navbar.tsx        → Site navigation
│   └── ProjectCard.tsx   → GitHub repo card
├── lib/
│   ├── github.ts         → GitHub API fetching
│   └── posts.ts          → Blog post reading utilities
├── posts/                → Markdown blog posts
│   ├── template.md       → Copy this to write a new post
│   └── *.md              → Your blog posts
└── public/               → Static assets
```

---

## Writing a Blog Post

1. Copy `posts/template.md`
2. Rename it to `posts/your-post-title.md`
3. Fill in the frontmatter:
```markdown
---
title: "Your Post Title"
date: "2025-01-01"
description: "A short summary."
tags: ["tag1", "tag2"]
---

Your content here...
```

4. Push to GitHub — Vercel redeploys automatically

---

## Running Locally
```bash
git clone https://github.com/tawaim/tawaim-site.git
cd tawaim-site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deploying

Push to `main` — Vercel handles the rest.
```bash
git add .
git commit -m "your message"
git push
```
