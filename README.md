# DiSidio Labs — Static Site

This is a minimal Vite + React static site for DiSidio Labs.

Quick start:

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

Files:
- src/: React source
- public/images/: placeholder project screenshots

Deploy (GitHub Pages):
- GitHub Actions workflow builds and publishes `dist/` on push to `main`.

Portfolio placeholders:
- Add real screenshots to `public/images/` using these filenames (recommended):
	- `fraapos.png`, `fraapos-2.png`
	- `loboprints.png`
	- `lobostore.png`, `lobostore-2.png`
- The site will use images listed in `src/pages/Portfolio.jsx`.

Next steps: replace placeholder images with real screenshots and Figma links, and add real contact handling (form backend or email service).
