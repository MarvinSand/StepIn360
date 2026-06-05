"use client";

import { useLang } from "@/lib/LanguageContext";
import { t, contact } from "@/lib/content";

export default function Footer() {
  const { lang } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <a href="#top" className="flex items-center justify-center gap-2.5 text-lg font-bold tracking-tight sm:justify-start">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#footer-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="footer-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00f2fe" />
                  <stop offset="100%" stopColor="#4facfe" />
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
            Step<span className="text-gradient">In</span>360
          </a>
          <p className="mt-2 text-sm text-slate-400">{t.footer.tagline[lang]}</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-cyan-sky/40 hover:text-white cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </a>
          <a
            href={`mailto:${contact.email}`}
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-cyan-sky/40 hover:text-white cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-white/[0.06] pt-6 text-center text-xs text-slate-500">
        © {year} StepIn360 — {t.footer.rights[lang]}
      </div>
    </footer>
  );
}
