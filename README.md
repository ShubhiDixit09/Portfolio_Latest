# Shubhi Dixit — Modern Developer Portfolio

A sleek, fast, and minimalist personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Designed specifically for showcasing software engineering projects, technical skills, academic coursework, and contact channels.

---

## 🚀 Features

- **Clean & Minimalist Aesthetic**: High-contrast typography with Plus Jakarta Sans and subtle micro-interactions.
- **Light & Dark Mode**: Persistent toggle with `localStorage` and system preference detection.
- **Featured Projects Grid**: Filter projects by categories (Full Stack, Frontend, AI/ML) with direct GitHub and live demo links.
- **Categorized Technical Skills**: Visual proficiency breakdown across Languages, Frontend, Backend & DBs, and Developer Tools.
- **Academic & Experience Timeline**: Highlight internships, leadership initiatives, coursework, and verified certifications.
- **Interactive Contact Section**: Instant email copy tooltip, verified social links, and built-in contact form.
- **Centralized Data**: Edit **all** profile text, projects, and skills in a single file (`src/data/portfolioData.js`).
- **Production-Ready**: Fast build times (< 1.2s) and optimized bundle footprint.

---

## 🛠️ Quick Start

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Build for Production
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Customize Your Content

All data is decoupled from the UI components. Simply open **[`src/data/portfolioData.js`](src/data/portfolioData.js)** to edit:

1. **Personal Information**: Your name, bio, email, location, GitHub and LinkedIn links.
2. **Projects**: Add, remove, or modify project titles, descriptions, tags, screenshots, and URLs.
3. **Skills**: Add or adjust technologies in each category.
4. **Experience & Education**: Update your degree, university name, internships, and certifications.
5. **Resume**: Place your resume PDF in the `public/` directory (e.g. `public/resume.pdf`) and update `resumeUrl` in `src/data/portfolioData.js`.

---

## 🌐 Free 1-Click Deployment Options

### Deploy on Vercel (Recommended)
1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Keep the default settings (Framework preset: `Vite`) and click **Deploy**.

### Deploy on Netlify
1. Connect your repository on [netlify.com](https://netlify.com).
2. Set Build Command to `npm run build` and Publish Directory to `dist`.
3. Click **Deploy Site**.
