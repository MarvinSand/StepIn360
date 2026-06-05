"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { t, tours } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Tour = (typeof tours)[number];

export default function Work() {
  const { lang } = useLang();
  const [active, setActive] = useState<Tour | null>(null);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [active]);

  return (
    <section id="work" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24 sm:py-28">
      <SectionHeading tag={t.showcase.tag[lang]} heading={t.showcase.heading[lang]} sub={t.showcase.sub[lang]} />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour, i) => (
          <Reveal key={tour.id} delay={i} as="article">
            <button
              onClick={() => setActive(tour)}
              className="group relative block w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] text-left transition-all duration-300 hover:-translate-y-2 hover:border-cyan-sky/30 hover:shadow-glow-lg cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                {/* play badge */}
                <span className="absolute right-4 top-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-cyan-grad text-ink opacity-0 shadow-glow transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </div>
              <div className="relative -mt-12 px-6 pb-6">
                <h3 className="text-xl font-bold tracking-tight">{tour.name}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-400">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {tour.location[lang]}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gradient">
                  {t.showcase.open[lang]}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-sky transition-transform group-hover:translate-x-1">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-md sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-ink-800 shadow-card"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <div>
                  <h3 className="font-semibold">{active.name}</h3>
                  <p className="text-xs text-slate-400">{active.location[lang]}</p>
                </div>
                <button
                  onClick={() => setActive(null)}
                  aria-label="Close"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-white/30 hover:text-white cursor-pointer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              <div className="aspect-[16/10] w-full bg-black sm:aspect-[16/9]">
                <iframe
                  title={active.name}
                  src={active.embed}
                  className="h-full w-full"
                  frameBorder={0}
                  scrolling="no"
                  allow="vr; xr; accelerometer; gyroscope; autoplay; fullscreen"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
