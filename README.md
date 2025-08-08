# Data Scientist Portfolio (React + Vite + Tailwind)

A modern, responsive, animated portfolio site with sections for About, Education, Experience, Projects, Skills, Certifications, Blog, Testimonials, and Contact. Dark mode, SEO, accessibility, analytics-ready, and a downloadable vCard included.

## Quick start

1) Install Node.js (LTS) from https://nodejs.org/
2) In a terminal:  
```bash
cd ds-portfolio
npm install
npm run dev
```
Open the URL printed in the terminal (usually http://localhost:5173).

## Customize

- Edit content in `src/data/content.js`  
- Replace `src/assets/avatar.png` with your photo (same filename)  
- Update email/phone/socials in `content.js`  
- Swap images in the Projects section or use local files.

## Build & Deploy

```bash
npm run build
```
The production files land in `dist/`.

### Deploy to GitHub Pages (static hosting)

1. Create a new repo on GitHub (e.g., `datascience-portfolio`).
2. Commit & push this project (`ds-portfolio`) to that repo.
3. In GitHub, go to **Settings → Pages**, choose the `gh-pages` branch (or `main` with `/docs`) based on how you publish.
   - Simplest: use [Vercel] or [Netlify] below.

### Deploy to Vercel (recommended)

1. Go to https://vercel.com and sign in with GitHub.
2. Click **New Project**, select your repo, keep defaults, and Deploy.
3. Add a custom domain if you have one.

### Deploy to Netlify (nice for Netlify Forms)

1. Create an account at https://netlify.com
2. Click **Add new site → Import an existing project** and connect your GitHub repo.
3. Build command: `npm run build`  
   Publish directory: `dist`
4. Deploy. The contact form will work automatically.

### Analytics

- Replace `GA_MEASUREMENT_ID` in `index.html` with your Google Analytics ID or paste your Plausible / PostHog snippet.

### Accessibility & SEO

- Semantic landmarks, keyboard focus, skip-to-content, alt text, and ARIA where appropriate.
- Add a real `og-image.png` and `favicon.ico` in `/public`.

## License

MIT — do whatever, just don’t be evil.
