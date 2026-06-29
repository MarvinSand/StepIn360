"use client";

import { useLang } from "@/lib/LanguageContext";
import { natrajPage, tours } from "@/lib/content";

// Non-standard vendor attributes required by the Panoee embed (not in React's iframe types)
const vendorAttrs = {
  allowvr: "yes",
  webkitallowfullscreen: "true",
  mozallowfullscreen: "true",
} as Record<string, string>;

const tour = tours.find((t) => t.id === natrajPage.tourId)!;

export default function NatrajView() {
  const { lang, toggle } = useLang();
  const bookings = natrajPage.bookings.filter((b) => b.url);

  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col px-6 py-10 sm:py-16">
      {/* Header */}
      <header className="mb-8 flex items-start justify-between gap-4">
        <div>
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.18em] text-gradient">
            {natrajPage.ui.eyebrow[lang]}
          </span>
          <h1 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-tight tracking-tight text-white">
            {tour.name}
          </h1>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-400">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {tour.location[lang]}
          </p>
        </div>
        <button
          onClick={toggle}
          aria-label="Toggle language"
          className="shrink-0 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-300 transition-colors hover:border-cyan-sky/40 hover:text-white cursor-pointer"
        >
          {lang === "de" ? "EN" : "DE"}
        </button>
      </header>

      <p className="mb-6 max-w-2xl text-base leading-relaxed text-slate-400">
        {natrajPage.ui.sub[lang]}
      </p>

      {/* 360° tour */}
      <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-card sm:aspect-[16/9]">
        <iframe
          id="tour-embeded"
          name={tour.name}
          title={tour.name}
          src={tour.embed}
          className="h-full w-full"
          frameBorder={0}
          scrolling="no"
          loading="lazy"
          allow="vr; xr; accelerometer; gyroscope; autoplay; fullscreen"
          allowFullScreen
          {...vendorAttrs}
        />
      </div>

      {/* Booking links */}
      <section className="mt-10">
        <h2 className="mb-4 text-center font-display text-2xl font-semibold tracking-tight text-white">
          {natrajPage.ui.bookingHeading[lang]}
        </h2>
        <div className="mx-auto grid max-w-xl gap-3 sm:grid-cols-2">
          {bookings.map((b) => {
            const external = b.url.startsWith("http");
            return (
              <a
                key={b.id}
                href={b.url}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-sky/40 hover:shadow-glow cursor-pointer"
              >
                {b.label[lang]}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cyan-sky transition-transform group-hover:translate-x-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            );
          })}
        </div>
      </section>

      {/* Footer link back to the main site */}
      <footer className="mt-auto pt-12 text-center">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition-colors hover:text-white"
        >
          Step<span className="text-gradient">In</span>360 — {natrajPage.ui.backToSite[lang]}
        </a>
      </footer>
    </main>
  );
}
