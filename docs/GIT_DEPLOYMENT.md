# Git Deployment Strategy (Tracking Build Artifacts)

This document outlines the workflow for deploying the built application directly from Git, which is highly effective for shared hosting environments like Hostinger where you can simply run `git pull` on the server.

## Overview

By default, Vite ignores the `dist/` directory (the production build folder) in `.gitignore`. However, to deploy via Git without needing a build step (like Node.js) on your production server, we have removed `dist/` from `.gitignore` so that the compiled files are tracked.

## Workflow: Local Development to Production

Follow these steps whenever you make changes to the code and want to deploy them:

### 1. Make Changes Locally
Edit your React components, CSS, and assets locally and test them using `npm run dev`.

### 2. Generate the Production Build
Once you are happy with the changes, generate the highly optimized production build:
```bash
npm run build
```
This updates the `dist/` folder with your latest compiled code.

### 3. Commit the Build to Git
Because `.gitignore` no longer ignores the `dist/` folder, you can commit it directly alongside your source code:
```bash
git add .
git commit -m "feat: your commit message (includes updated build)"
```

### 4. Push to GitHub
Push the changes to your remote repository:
```bash
git push origin main
```

### 5. Pull on the Server (Deployment)
SSH into your Hostinger server (or use their automated Git integration) and navigate to your project directory. Pull the latest code:
```bash
git pull origin main
```
Your server will instantly receive the fresh `dist/` folder containing the live website.

---

## Server Configuration Tip

When configuring your domain in Hostinger's control panel, make sure you point the website's **Document Root** specifically to the `public_html/dist` directory (or wherever your repo is cloned `repo-name/dist`). This ensures the web server directly serves the built `index.html` file to visitors!
