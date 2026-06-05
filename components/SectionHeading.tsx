"use client";

import Reveal from "./Reveal";

export default function SectionHeading({
  tag,
  heading,
  sub,
  center = true,
}: {
  tag: string;
  heading: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.18em] text-gradient">
          {tag}
        </span>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="font-display text-[clamp(1.9rem,3.6vw,3rem)] font-semibold leading-tight tracking-tight">
          {heading}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={2}>
          <p className={`mt-4 text-base leading-relaxed text-slate-400 ${center ? "mx-auto max-w-xl" : ""}`}>
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}
