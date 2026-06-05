"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/content";

export default function Hero() {
  const { lang } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  const words = t.hero.titleTop[lang].split(" ");

  return (
    <section ref={ref} id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background — animated cinematic aurora.
          To use a video later, drop your file into /public/images/ and uncomment
          the <video> block below (swap the src), then remove the aurora orbs. */}
      <motion.div style={{ scale }} className="absolute inset-0 z-0">
        {/*
        <video className="h-full w-full object-cover" autoPlay muted loop playsInline poster="/images/hero-poster.jpg">
          <source src="/images/hero.mp4" type="video/mp4" />
        </video>
        */}

        {/* Aurora glow orbs (GPU-friendly: transform/opacity only) */}
        <motion.span
          aria-hidden
          animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[8%] top-[18%] h-[42rem] w-[42rem] rounded-full bg-cyan-bright/15 blur-[140px]"
        />
        <motion.span
          aria-hidden
          animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[4%] top-[8%] h-[38rem] w-[38rem] rounded-full bg-cyan-sky/12 blur-[150px]"
        />
        <motion.span
          aria-hidden
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[2%] left-[36%] h-[30rem] w-[30rem] rounded-full bg-indigo-500/10 blur-[150px]"
        />

        {/* Subtle dot grid + vignette for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.10)_1px,transparent_0)] [background-size:38px_38px] opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_50%_-10%,transparent,rgba(5,7,13,0.6))]" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-28 pb-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-bright opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-grad" />
          </span>
          {t.hero.eyebrow[lang]}
        </motion.div>

        <h1 className="max-w-3xl font-display text-[clamp(2.6rem,6.2vw,5rem)] font-semibold leading-[1.04] tracking-tight">
          <span className="block">
            {words.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="mr-[0.25em] inline-block"
              >
                {w}
              </motion.span>
            ))}
          </span>
          <motion.span
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 + words.length * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-gradient-anim block"
          >
            {t.hero.titleAccent[lang]}
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-xl text-[clamp(1rem,1.5vw,1.2rem)] leading-relaxed text-slate-300"
        >
          {t.hero.sub[lang]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-cyan-grad px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_10px_30px_rgba(0,242,254,0.3)] transition-transform hover:scale-[1.04] cursor-pointer"
          >
            {t.hero.ctaPrimary[lang]}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-cyan-sky/40 hover:bg-white/10 cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
            {t.hero.ctaSecondary[lang]}
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-7"
        >
          {t.stats.map((s) => (
            <div key={s.value}>
              <div className="font-display text-3xl font-semibold text-gradient">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-slate-400">{s.label[lang]}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400">{t.hero.scroll[lang]}</span>
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1.5">
          <span className="h-1.5 w-1.5 animate-scroll-hint rounded-full bg-cyan-grad" />
        </div>
      </motion.div>
    </section>
  );
}
