"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-5 w-5 shrink-0 text-cyan-sky">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const TourIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const WebIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 9h20" />
    <circle cx="5.5" cy="6.5" r="0.6" fill="currentColor" />
    <circle cx="8" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);

function Pillar({
  icon,
  title,
  desc,
  points,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  points: string[];
  delay: number;
}) {
  return (
    <Reveal delay={delay} as="article">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 sm:p-10"
      >
        {/* top accent line */}
        <span className="absolute inset-x-0 top-0 h-px bg-cyan-grad opacity-70" />
        {/* hover glow */}
        <span className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-sky/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-sky/20 bg-gradient-to-br from-cyan-bright/10 to-cyan-sky/10 text-cyan-sky">
          {icon}
        </div>
        <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-400">{desc}</p>

        <ul className="mt-7 space-y-3.5">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-[15px] font-medium text-slate-200">
              <Check />
              {p}
            </li>
          ))}
        </ul>
      </motion.div>
    </Reveal>
  );
}

export default function Services() {
  const { lang } = useLang();

  return (
    <section id="services" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24 sm:py-32">
      <SectionHeading tag={t.pillars.tag[lang]} heading={t.pillars.heading[lang]} />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <Pillar
          icon={<TourIcon />}
          title={t.pillars.tours.title[lang]}
          desc={t.pillars.tours.desc[lang]}
          points={t.pillars.tours.points[lang]}
          delay={0}
        />
        <Pillar
          icon={<WebIcon />}
          title={t.pillars.websites.title[lang]}
          desc={t.pillars.websites.desc[lang]}
          points={t.pillars.websites.points[lang]}
          delay={1}
        />
      </div>
    </section>
  );
}
