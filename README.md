# StepIn360 — Premium Virtual Tours & Web Design

Cinematische, zweisprachige (DE/EN) One-Page-Website für die StepIn360 Agentur.
Gebaut mit **Next.js 14 (App Router)**, **Tailwind CSS** und **Framer Motion**.

## Features
- 🎬 Cinematischer Hero mit komprimiertem Video-Loop (163 MB → 3,1 MB) + Parallax
- 🌐 Sprachumschalter DE/EN (merkt sich die Wahl, erkennt Browser-Sprache)
- 🧭 Floating Glass-Navbar, Mobile-Menü
- 🏛️ Zwei Leistungs-Säulen (360°-Touren + Custom Websites)
- 🕹️ Live-360°-Tour mit Klick-zum-Laden-Fassade + Gyroskop-Bridge (Panoee)
- 🖼️ Touren-Galerie mit Lightbox-Modal (5 echte Touren: Panoee + TeliportMe)
- 🪜 4-Schritte-Prozess, Kontaktformular (FormSubmit), schwebender WhatsApp-Button
- ♿ Respektiert `prefers-reduced-motion`, semantisches HTML, Fokus-States

## Entwicklung
```bash
npm install
npm run dev      # http://localhost:3000
```

## Production-Build
```bash
npm run build
npm run start
```

## Deployment (empfohlen: Vercel)
1. Repo zu GitHub pushen
2. Auf [vercel.com](https://vercel.com) importieren → automatischer Next.js-Build
3. Custom Domain `stepin360.net` in den Vercel-Projekteinstellungen verbinden

Alternativ statischer Export möglich via `output: "export"` in `next.config.mjs`.

## Inhalte anpassen
- **Texte & Übersetzungen:** `lib/content.ts`
- **Touren/Bilder:** `lib/content.ts` (`tours`) + `public/images/`
- **Kontaktdaten:** `lib/content.ts` (`contact`)
- **Farben/Design-Tokens:** `tailwind.config.ts` + `app/globals.css`

## Hero-Video erneut komprimieren
Das Original liegt unter `Desktop/StepIn360-main/Images/website-video.mp4`.
```bash
ffmpeg -ss 0 -t 24 -i website-video.mp4 -an -vf "scale=1920:-2,fps=30" \
  -c:v libx264 -crf 30 -preset slow -pix_fmt yuv420p -movflags +faststart \
  public/images/hero.mp4
```
