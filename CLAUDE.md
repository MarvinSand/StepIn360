# StepIn360 — Project Notes for Claude

Static site (HTML + CSS + small JS), deployed via GitHub Pages from `main` (CNAME → `www.stepin360.net`). Repo: `MarvinSand/StepIn360`. Author: Marvin Sand <marvinsand0607@gmail.com>.

## Structure
- `index.html`, `examples.html`, `contact.html` — main pages, share `styles.css` (CSS variables).
- `sithujaya-green/index.html` — brand-aligned subpage (Inter font, glass header, gradient accents, curved tour-box). **Use this as the template** when redesigning other hotel subpages.
- 5 legacy hotel subpages: `reggae-paradise/`, `new-ocean-vibes/`, `natraj-guest-house/`, `ivory-resort/`, `cest-la-vie-hostel/` — self-contained inline styles with hardcoded colors. Don't reorganise them unless asked.
- `theme.js` — site-wide light/dark mode toggle (default = system preference, fallback dark, persisted in `localStorage`).
- `styles.css` defines `:root` variables for dark theme and `:root[data-theme="light"]` overrides.

## Rules learned the hard way (do NOT repeat these mistakes)

### 1. Never wire a JS handler twice
**Don't** mix inline `onclick="fn()"` HTML attribute with a programmatic `addEventListener('click', fn)` on the same element. Both fire on every click — for a *toggle* function this means click-toggle-then-toggle-back, net zero. Symptom: button seems dead.
**Rule:** pick exactly one mechanism per event. For this project, the canonical pattern is:
- HTML: `<button class="theme-toggle" aria-label="Toggle theme"></button>` (no `onclick`)
- JS: `theme.js` attaches a single `addEventListener('click', …)` per `.theme-toggle` (guarded by `dataset.themeBound`).

### 2. Bump asset cache versions on every shared-asset change
GitHub Pages serves `*.css` / `*.js` with `Cache-Control: max-age=600` and browsers often cache longer via heuristics. After editing `styles.css` or `theme.js`, **bump the `?v=N` query string** on every `<link href="styles.css?v=N">` and `<script src="theme.js?v=N">` reference across all 9 HTML pages. Otherwise repeat visitors keep the old broken version.

### 3. A site-wide feature must be tested on every page
"Works on Sithujaya, must work everywhere" is wrong. After any site-wide change (toggle button, shared script, shared style), grep for the feature in all HTML files and open at least 2–3 representative pages locally before pushing. The pages fall into 3 categories with different setups:
- Main pages (share `styles.css`, full variable theming)
- Sithujaya (brand-aligned, full variable theming inline)
- 5 legacy subpages (hardcoded colors, light mode via scoped `:root[data-theme="light"] body { … }` overrides)

### 4. CSS specificity for theme overrides on legacy pages
The legacy hotel subpages have `body { background: #0f0f0f; }` (specificity 0,0,1). To override under light mode, the rule must be more specific, e.g.:
```css
:root[data-theme="light"] body { background: #f8f8f8; ... }   /* specificity 0,2,1 */
```
Plain `[data-theme="light"] body { … }` (0,1,1) is enough too, but using `:root[data-theme="light"]` is consistent with the main-page pattern.

### 5. Deploy + assets
- GitHub Pages auto-deploys `main` ~30–60 s after push.
- The local repo had no `.git` initially (we ran `git init` and added the `origin` HTTPS remote).
- Author identity is `local`-scoped: `git config user.name "Marvin Sand"`, `user.email "marvinsand0607@gmail.com"`.
- Push uses HTTPS (Git Credential Manager handles auth). SSH was attempted first but the local ed25519 key wasn't registered on the GitHub account.

## Brand tokens (for any future redesign)
- `--bg-color: #05070d` (dark) / `#ffffff` (light)
- `--surface-main: #111827` / `#f3f4f6`
- `--surface-secondary: #1e293b` / `#e5e7eb`
- `--text-main: #f8fafc` / `#0f172a`
- `--text-muted: #94a3b8` / `#475569`
- `--border-color: #1f2937` / `#d1d5db`
- `--primary-gradient: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)`
- `--glass-bg: rgba(11,15,25,0.7)` / `rgba(255,255,255,0.75)` (used by glassmorphism header with `backdrop-filter: blur(16px)`)
- Font: Inter 300–800 (Google Fonts).

## Don't touch
- `Images/index.html` — auto-generated directory index, not a brand page.
- The Panoee iframe `src` on Sithujaya: `https://tour.panoee.net/iframe/6a07df1e7732c728f7b90a70` (+ accompanying `devicemotion` postMessage bridge below the iframe).
- SEO meta tags (Open Graph / Twitter) on any subpage — leave intact when restyling.
