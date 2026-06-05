"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/lib/LanguageContext";
import { t, tours } from "@/lib/content";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const featured = tours[0]; // Sithujaya Green Mirissa (Panoee)

// Non-standard vendor attributes required by the Panoee embed (not in React's iframe types)
const vendorAttrs = {
  allowvr: "yes",
  webkitallowfullscreen: "true",
  mozallowfullscreen: "true",
} as Record<string, string>;

export default function LiveTour() {
  const { lang } = useLang();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Device-motion bridge for gyroscope look-around (Panoee)
  useEffect(() => {
    const handler = (e: DeviceMotionEvent) => {
      const iframe = iframeRef.current;
      if (!iframe?.contentWindow) return;
      iframe.contentWindow.postMessage(
        {
          type: "devicemotion",
          deviceMotionEvent: {
            acceleration: e.acceleration,
            accelerationIncludingGravity: e.accelerationIncludingGravity,
            rotationRate: e.rotationRate,
            interval: e.interval,
            timeStamp: e.timeStamp,
          },
        },
        "*"
      );
    };
    window.addEventListener("devicemotion", handler);
    return () => window.removeEventListener("devicemotion", handler);
  }, []);

  return (
    <section className="relative -mt-24 -mb-24 md:-mt-40 md:-mb-40">
      <ContainerScroll
        titleComponent={
          <div className="px-4 pb-2">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.18em] text-gradient">
              {t.tour.tag[lang]}
            </span>
            <h2 className="font-display text-[clamp(1.9rem,3.6vw,3rem)] font-semibold leading-tight tracking-tight text-white">
              {t.tour.heading[lang]}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400">
              {t.tour.sub[lang]}
            </p>
          </div>
        }
      >
        <iframe
          ref={iframeRef}
          id="tour-embeded"
          name={featured.name}
          title={featured.name}
          src={featured.embed}
          className="h-full w-full rounded-2xl"
          frameBorder={0}
          scrolling="no"
          loading="lazy"
          allow="vr; xr; accelerometer; gyroscope; autoplay;"
          allowFullScreen
          {...vendorAttrs}
        />
      </ContainerScroll>
    </section>
  );
}
