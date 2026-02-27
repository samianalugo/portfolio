# 🚀 Deployment Guide

This portfolio uses GitHub Actions for automated CI/CD and deploys to GitHub Pages.

## Prerequisites

- A GitHub repository
- Node.js v18+ locally installed

## Setup Instructions

### 1. Initialize Git Repository (if not already done)

```bash
cd d:\Portfolio\portfolio
git init
git add .
git commit -m "Initial commit: Developer portfolio"
```

### 2. Remote Repository Setup

Create a new repository on GitHub named `portfolio` (or your preferred name).

Then link your local repo:

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### 3. Configure GitHub Pages

1. Go to your GitHub repository settings
2. Navigate to **Settings → Pages**
3. Under "Build and deployment":
   - **Source:** Select "GitHub Actions"
   - (The workflow file will auto-deploy from now on)

### 4. Update Vite Config Base URL

In `vite.config.js`, the `base` is set to `/portfolio/` by default.

**If your repo name differs**, update it:

```javascript
base: '/your-repo-name/',
```

**If deploying to a user/org site** (e.g., `username.github.io`), use:

```javascript
base: '/',
```

### 5. Push Changes

Every push to the `main` branch will trigger the CI/CD pipeline:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

### 6. Monitor Deployment

1. Go to your GitHub repository
2. Click the **Actions** tab
3. Watch the workflow run in real-time
4. Once complete (green checkmark), your site is live at:
   - `https://YOUR_USERNAME.github.io/portfolio`

## Local Development

```bash
npm install
npm run dev
```

## Build & Deploy Manually (optional)

```bash
npm run build
```

The `dist/` folder is ready to deploy.

## Troubleshooting

**Pages not showing?**
- Verify Settings → Pages → Source is "GitHub Actions"
- Check the base URL in `vite.config.js` matches your repo structure

**Workflow failing?**
- Check Actions tab for error logs
- Ensure `package.json` has `build` script
- Verify all assets paths are correct

---

Happy deploying! 🎉
