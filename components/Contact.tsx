"use client";

import { useLang } from "@/lib/LanguageContext";
import { t, contact } from "@/lib/content";
import Reveal from "./Reveal";

export default function Contact() {
  const { lang } = useLang();
  const f = t.cta.form;

  return (
    <section id="contact" className="relative scroll-mt-24 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] px-6 py-14 sm:px-12 sm:py-16">
          {/* glow */}
          <span className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-cyan-sky/15 blur-[120px]" />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: copy + methods */}
            <div>
              <Reveal>
                <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.18em] text-gradient">
                  {t.cta.tag[lang]}
                </span>
              </Reveal>
              <Reveal delay={1}>
                <h2 className="font-display text-[clamp(2rem,3.8vw,3.2rem)] font-semibold leading-tight tracking-tight">
                  {t.cta.heading[lang]}
                </h2>
              </Reveal>
              <Reveal delay={2}>
                <p className="mt-4 max-w-md text-base leading-relaxed text-slate-400">{t.cta.sub[lang]}</p>
              </Reveal>

              <Reveal delay={3}>
                <div className="mt-8 flex flex-col gap-3">
                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-cyan-sky/40 hover:bg-white/[0.06] cursor-pointer"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-sky/10 text-cyan-sky">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-white">{t.cta.whatsapp[lang]}</div>
                      <div className="text-sm text-slate-400">{contact.phoneDisplay}</div>
                    </div>
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-cyan-sky/40 hover:bg-white/[0.06] cursor-pointer"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-sky/10 text-cyan-sky">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-white">{t.cta.email[lang]}</div>
                      <div className="text-sm text-slate-400">{contact.email}</div>
                    </div>
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right: form */}
            <Reveal delay={2}>
              <form
                action={contact.formAction}
                method="POST"
                className="rounded-2xl border border-white/10 bg-ink-800/60 p-6 sm:p-8"
              >
                <div className="grid gap-5">
                  <Field id="name" label={f.name[lang]} placeholder={f.namePh[lang]} required />
                  <Field id="email" label={f.email[lang]} placeholder={f.emailPh[lang]} type="email" required />
                  <Field id="business" label={f.business[lang]} placeholder={f.businessPh[lang]} />
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                      {f.message[lang]}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder={f.messagePh[lang]}
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder:text-slate-500 transition-colors focus:border-cyan-sky/50 focus:outline-none focus:ring-2 focus:ring-cyan-sky/15"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-grad px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_10px_30px_rgba(0,242,254,0.3)] transition-transform hover:scale-[1.02] cursor-pointer"
                  >
                    {f.submit[lang]}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder:text-slate-500 transition-colors focus:border-cyan-sky/50 focus:outline-none focus:ring-2 focus:ring-cyan-sky/15"
      />
    </div>
  );
}
