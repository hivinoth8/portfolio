# Vinoth Veliappan — Portfolio

Personal portfolio website built with **React + Vite**, deployed on **GitHub Pages** with **CI/CD via GitHub Actions**.

🌐 **Live:** https://vinotht.github.io/portfolio/

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── 404.html               # GitHub Pages SPA redirect
│   ├── profile.jpg            # ← ADD YOUR PHOTO HERE
│   └── Vinoth_Veliappan_Resume.pdf  # ← ADD YOUR RESUME PDF HERE
├── src/
│   ├── colors.js              # 🎨 Two-color theme system
│   ├── fonts.js               # 🔤 Font names, weights, sizes
│   ├── constants/
│   │   └── data.js            # 📝 ALL static content (edit here)
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   └── main.jsx
├── .github/
│   └── workflows/
│       └── deploy.yml         # 🚀 CI/CD pipeline
├── vite.config.js             # ⚙️ Base path config
├── package.json
└── index.html
```

---

## ⚡ Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🔧 Configuration (Required Before Deploy)

### 1. Update `vite.config.js`
```js
base: "/YOUR-REPO-NAME/",
```

### 2. Update `package.json` homepage
```json
"homepage": "https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPO-NAME"
```

### 3. Add your assets to `/public/`
- `profile.jpg` — Your profile photo (recommended: 400×400px square)
- `Vinoth_Veliappan_Resume.pdf` — Your resume PDF

### 4. Update content in `src/constants/data.js`
- Personal info, links, skills, projects, education, certifications

### 5. Customize theme (optional)
- **Colors** → `src/colors.js` (change the two hex values)
- **Fonts** → `src/fonts.js` (change font names + update `index.html` Google Fonts link)

---

## 🚀 GitHub Pages Deployment

### Method A — GitHub Actions (Recommended / Auto CI/CD)

1. Push code to GitHub:
```bash
git init
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git add .
git commit -m "Initial portfolio commit"
git push -u origin main
```

2. Enable GitHub Pages:
   - Go to **Settings → Pages**
   - Source: **GitHub Actions**

3. Every `git push` to `main` will automatically build & deploy! ✅

### Method B — Manual Deploy (gh-pages npm package)

```bash
npm run deploy
```
Then set GitHub Pages source to `gh-pages` branch.

---

## 🔄 CI/CD Pipeline (`.github/workflows/deploy.yml`)

| Trigger | Action |
|---------|--------|
| Push to `main` | Build → Deploy to GitHub Pages |
| Pull Request to `main` | Build only (no deploy) — acts as CI check |
| Manual trigger | Available via GitHub Actions UI |

---

## 🎨 Customization Guide

### Change Color Scheme
Edit `src/colors.js`:
```js
primary: "#0A1628",   // Deep Navy → change to any dark color
accent:  "#00D4FF",   // Cyan      → change to any accent color
```
All other colors are derived automatically.

### Change Fonts
Edit `src/fonts.js` and update the Google Fonts URL in `index.html`.

---

## 📦 Tech Stack

- **React 18** — UI framework
- **Vite** — Build tool
- **gh-pages** — Manual deploy helper
- **GitHub Actions** — CI/CD pipeline
- **GitHub Pages** — Hosting

No CSS frameworks, no UI libraries — pure React with inline styles using CSS variables.
