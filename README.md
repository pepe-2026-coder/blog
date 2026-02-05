# Pepe Blog

Personal blog and resume website built with VitePress.

## Features

- **Clean Design**: Professional blue color scheme with comfortable typography
- **Blog System**: Write posts in Markdown with tags support
- **Resume Page**: Interactive resume card with skills, experience, and education
- **Responsive**: Works on desktop, tablet, and mobile devices
- **Fast**: Built on Vite for lightning-fast performance

## Tech Stack

- [VitePress](https://vitepress.dev/) - Static site generator
- Vue 3 - Component framework
- SCSS - Styling with CSS variables

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
blog/
├── .github/workflows/    # GitHub Actions for deployment
├── .vitepress/
│   ├── config.ts         # VitePress configuration
│   └── theme/
│       ├── index.ts      # Theme entry point
│       ├── custom.css    # Global styles
│       └── components/   # Vue components
├── docs/
│   ├── index.md          # Home page
│   ├── about.md          # About page
│   ├── resume.md         # Resume page
│   └── posts/            # Blog posts
├── public/               # Static assets
└── package.json
```

## Adding a New Post

Create a new folder in `docs/posts/` with the format `YYYY-MM-DD-post-title/`:

```bash
mkdir -p docs/posts/2024-01-20-my-new-post
```

Add an `index.md` file with frontmatter:

```markdown
---
title: My New Post
date: 2024-01-20
author: Pepe
tags: ['Vue', 'JavaScript']
---

# My New Post

Content here...
```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when you push to the main branch.

1. Push to GitHub
2. Actions will build and deploy to `gh-pages` branch
3. Site available at: https://pepe-2026-coder.github.io/blog/

## Customization

### Colors and Styles

Edit `.vitepress/theme/custom.css` to customize:
- Primary color: `--color-primary`
- Spacing system: `--space-1` through `--space-16`
- Shadows and border radius

### Resume Content

Edit `.vitepress/theme/components/ResumeCard.vue` to update your resume information.

## License

MIT License
