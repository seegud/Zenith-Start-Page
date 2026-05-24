<div align="center">
<img width="1200" height="475" alt="Zenith Start Page" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
<h3>A clean, customizable browser start page — your personal dashboard for every new tab.</h3>
</div>

---

## Zenith Start Page

Replace your browser's default new tab with a minimalist, feature-rich homepage. A single-screen dashboard that brings together search, time, weather, and stunning daily wallpapers — built for speed and simplicity.

### Features

- **Multi-Engine Search Bar** — Switch between Google, Bing, or add your own custom search engines. Real-time search suggestions with keyboard navigation and ARIA accessibility support.
- **Live Clock & Date** — Clock pauses when the tab is hidden to save CPU, resumes instantly when you come back.
- **Bing Daily Wallpaper** — Fetches Bing's image of the day on every load. Adjustable background blur with live preview.
- **Local Weather Widget** — Powered by [wttr.in](https://wttr.in), with geolocation support and a full set of weather condition icons.
- **Dark / Light Theme** — Manual toggle with system preference detection, persisted across sessions.
- **Custom Search Engine Manager** — Add, remove, and reorder your favorite search providers. Templates support `%s` placeholder for query injection.
- **Offline Ready** — Service Worker with smart caching ensures the page loads even without a network connection. Automatic cache updates when new content is available.
- **Local Wallpaper Upload** — Drag or select your own image; stored efficiently with size limits to protect localStorage quota.
- **Search History** — Recent queries saved locally with a one-click clear option, capped to prevent storage bloat.

### Tech Stack

| Layer | Choice |
|---|---|
| Bundler | [Vite 6](https://vite.dev) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Runtime | Vanilla JavaScript (zero framework overhead) |
| Offline | Service Worker API |
| Weather | [wttr.in](https://wttr.in) |
| Wallpaper | Bing HPImageArchive via proxy |

### Getting Started

**Prerequisites:** Node.js 18+

```bash
# 1. Install dependencies
npm install

# 2. Set your Gemini API key (optional, for AI features)
cp .env.local.example .env.local
# Edit .env.local with your key

# 3. Start the dev server
npm run dev
```

Open `http://localhost:3000` — that's your new start page.

### Production Build

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

The `dist/` folder is a fully static site — deploy it anywhere: GitHub Pages, Netlify, Vercel, or your own server.

### Browser Setup

Set this as your new tab page:

- **Chrome / Edge** — Install [New Tab Redirect](https://chromewebstore.google.com/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna) and point it to your deployed URL.
- **Firefox** — Not natively supported (Firefox restricts custom new tab URLs). Use the page as your homepage instead.

### Project Structure

```
├── index.html          # Entry point
├── index.js            # All application logic
├── sw.js               # Service Worker
├── vite.config.ts      # Vite config with dev proxy
├── src/
│   └── style.css       # Tailwind imports + custom variants
├── docs/
│   └── 代码审查与优化方案.md
└── dist/               # Production output (gitignored)
```

### License

MIT