"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/content";

const Logo = () => (
  <a href="#top" className="flex items-center gap-2.5 text-lg font-bold tracking-tight">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="url(#logo-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00f2fe" />
          <stop offset="100%" stopColor="#4facfe" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
    <span>
      Step<span className="text-gradient">In</span>360
    </span>
  </a>
);

export default function Navbar() {
  const { lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: t.nav.services[lang] },
    { href: "#work", label: t.nav.work[lang] },
    { href: "#process", label: t.nav.process[lang] },
    { href: "#contact", label: t.nav.contact[lang] },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
          scrolled ? "glass shadow-card" : "border border-transparent bg-transparent"
        }`}
      >
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-grad transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={toggle}
            aria-label="Switch language"
            className="flex items-center gap-1 rounded-full border border-white/10 px-3 py-1.5 text-xs font-semibold text-slate-300 transition-colors hover:border-cyan-sky/40 hover:text-white cursor-pointer"
          >
            <span className={lang === "de" ? "text-gradient" : ""}>DE</span>
            <span className="text-white/20">/</span>
            <span className={lang === "en" ? "text-gradient" : ""}>EN</span>
          </button>

          <a
            href="#contact"
            className="hidden rounded-full bg-cyan-grad px-4 py-2 text-sm font-semibold text-ink shadow-[0_6px_20px_rgba(0,242,254,0.25)] transition-transform hover:scale-[1.03] sm:inline-flex cursor-pointer"
          >
            {t.nav.cta[lang]}
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white md:hidden cursor-pointer"
          >
            <div className="space-y-1.5">
              <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }} className="block h-0.5 w-5 bg-white" />
              <motion.span animate={{ opacity: open ? 0 : 1 }} className="block h-0.5 w-5 bg-white" />
              <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }} className="block h-0.5 w-5 bg-white" />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="glass mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl p-2 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-xl bg-cyan-grad px-4 py-3 text-center text-base font-semibold text-ink"
            >
              {t.nav.cta[lang]}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
