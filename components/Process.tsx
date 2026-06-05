"use client";

import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons = [
  // camera
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>,
  // code
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>,
  // server/globe
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>,
  // rocket
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>,
];

export default function Process() {
  const { lang } = useLang();

  return (
    <section id="process" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24 sm:py-28">
      <SectionHeading tag={t.process.tag[lang]} heading={t.process.heading[lang]} />

      <div className="relative mt-16">
        {/* connecting line (desktop) */}
        <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-cyan-sky/30 to-transparent lg:block" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step, i) => (
            <Reveal key={i} delay={i}>
              <div className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-sky/30">
                <div className="mb-5 flex items-center gap-3">
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-grad text-ink shadow-[0_8px_24px_rgba(0,242,254,0.25)]">
                    {icons[i]}
                    <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-ink text-[11px] font-bold text-cyan-sky">
                      {i + 1}
                    </span>
                  </span>
                </div>
                <h3 className="text-lg font-bold tracking-tight">{step.title[lang]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.desc[lang]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
