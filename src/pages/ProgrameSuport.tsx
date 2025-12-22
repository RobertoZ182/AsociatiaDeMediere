import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProgrameSuport() {
  const { t } = useTranslation();

  const photos = useMemo(
    () => [
      { src: "/support/PHOTO-2025-09-16-01-04-08.jpg", altKey: "support.gallery.photoAlt" },
      { src: "/support/PHOTO-2025-09-16-01-04-08_1.jpg", altKey: "support.gallery.photoAlt" },
      { src: "/support/PHOTO-2025-09-16-01-04-09.jpg", altKey: "support.gallery.photoAlt" },
      { src: "/support/PHOTO-2025-09-16-01-04-09_1.jpg", altKey: "support.gallery.photoAlt" },
      { src: "/support/PHOTO-2025-09-16-01-04-10.jpg", altKey: "support.gallery.photoAlt" },
      { src: "/support/PHOTO-2025-09-16-01-04-10_1.jpg", altKey: "support.gallery.photoAlt" },
      { src: "/support/PHOTO-2025-09-16-01-04-10_2.jpg", altKey: "support.gallery.photoAlt" },
    ],
    []
  );

  const programs = [
    { code: "7.1", titleKey: "support.programs.p71.title", bodyKey: "support.programs.p71.body", icon: "🧭" },
    { code: "7.2", titleKey: "support.programs.p72.title", bodyKey: "support.programs.p72.body", icon: "📞" },
    { code: "7.3", titleKey: "support.programs.p73.title", bodyKey: "support.programs.p73.body", icon: "🏠" },
    { code: "7.4", titleKey: "support.programs.p74.title", bodyKey: "support.programs.p74.body", icon: "🧰" },
    { code: "7.5", titleKey: "support.programs.p75.title", bodyKey: "support.programs.p75.body", icon: "🤝" },
  ] as const;

  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setActive((i) => (i + 1) % photos.length);

  // Keyboard support (optional): only works when carousel is focused
  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  return (
    <main className="w-full bg-gradient-to-b from-black via-zinc-950 to-black text-amber-50">
      {/* Background layers */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,128,0.10)_0%,rgba(0,0,0,0.90)_55%,rgba(0,0,0,1)_100%)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,rgba(212,175,55,0.00)_0%,rgba(212,175,55,0.10)_20%,rgba(212,175,55,0.00)_50%,rgba(212,175,55,0.08)_70%,rgba(212,175,55,0.00)_100%)]" />
        <div className="absolute inset-0 opacity-[0.10] bg-[repeating-linear-gradient(135deg,rgba(212,175,55,0.12)_0px,rgba(212,175,55,0.12)_1px,transparent_1px,transparent_14px)]" />
      </div>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr] md:items-center">
            <div>
              <p className="text-sm font-semibold tracking-wide text-amber-100/70">
                {t("support.hero.kicker")}
              </p>

              <h1 className="mt-3 text-3xl font-serif font-semibold tracking-wide md:text-5xl">
                <span className="bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-300 bg-clip-text text-transparent">
                  {t("support.hero.title")}
                </span>
              </h1>

              <p className="mt-4 max-w-prose text-base leading-relaxed text-amber-100/80">
                {t("support.hero.subtitle")}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#programs"
                  className="group relative inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold font-serif tracking-wide
                             bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 text-black
                             shadow-lg shadow-black/40 hover:shadow-2xl hover:shadow-black/60
                             transition-all duration-300 transform hover:scale-[1.03]
                             border border-amber-200/30"
                >
                  <span className="relative z-10">{t("support.hero.ctaPrograms")}</span>
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0)_55%)]" />
                </a>

                <a
                  href="#gallery"
                  className="group relative inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold font-serif tracking-wide
                             bg-black/40 text-amber-100
                             border border-amber-400/35 hover:border-amber-300/55
                             hover:bg-black/55
                             shadow-lg shadow-black/40 hover:shadow-2xl hover:shadow-black/60
                             transition-all duration-300 transform hover:scale-[1.03]"
                >
                  <span className="relative z-10">{t("support.hero.ctaGallery")}</span>
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(90deg,rgba(212,175,55,0)_0%,rgba(212,175,55,0.10)_50%,rgba(212,175,55,0)_100%)]" />
                </a>
              </div>
            </div>

            {/* Quick info card */}
            <aside className="rounded-3xl border border-amber-400/25 bg-black/40 backdrop-blur-[2px] p-6 shadow-xl shadow-black/40">
              <h2 className="text-base font-semibold text-amber-50">
                {t("support.aside.title")}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-amber-100/80">
                {t("support.aside.body")}
              </p>

              <ul className="mt-5 space-y-3 text-sm text-amber-100/90">
                <li className="flex gap-3">
                  <span className="mt-0.5">✅</span>
                  <span>{t("support.aside.b1")}</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5">✅</span>
                  <span>{t("support.aside.b2")}</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5">✅</span>
                  <span>{t("support.aside.b3")}</span>
                </li>
              </ul>

              <div className="mt-6 rounded-2xl border border-amber-400/20 bg-black/35 p-4">
                <p className="text-xs font-semibold text-amber-100/70">
                  {t("support.aside.noteTitle")}
                </p>
                <p className="mt-1 text-sm text-amber-100/80">
                  {t("support.aside.noteBody")}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Programs (7.1 - 7.5) */}
      <section id="programs" className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-serif font-semibold tracking-wide text-amber-50">
            {t("support.programs.title")}
          </h2>
          <p className="max-w-prose text-sm leading-relaxed text-amber-100/80">
            {t("support.programs.subtitle")}
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {programs.map((p) => (
            <div
              key={p.code}
              className="rounded-3xl border border-amber-400/25 bg-black/40 backdrop-blur-[2px] p-6 shadow-xl shadow-black/40 hover:border-amber-300/45 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-300/35 bg-[radial-gradient(circle,rgba(212,175,55,0.25)_0%,rgba(0,0,0,0.7)_70%)] text-xl">
                  {p.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-amber-200/80">
                      {p.code}
                    </span>
                    <h3 className="text-base font-semibold text-amber-50">
                      {t(p.titleKey)}
                    </h3>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-amber-100/80">
                    {t(p.bodyKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-8 rounded-3xl border border-amber-400/20 bg-black/30 p-6 shadow-xl shadow-black/40">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-amber-50">
                {t("support.cta.title")}
              </p>
              <p className="mt-1 text-sm text-amber-100/80">
                {t("support.cta.body")}
              </p>
            </div>

            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold font-serif tracking-wide
                         bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 text-black
                         shadow-lg shadow-black/40 hover:shadow-2xl hover:shadow-black/60
                         transition-all duration-300 transform hover:scale-[1.03]
                         border border-amber-200/30"
            >
              <span className="relative z-10">{t("support.cta.button")}</span>
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0)_55%)]" />
            </a>
          </div>
        </div>
      </section>

      {/* Gallery (Carousel) */}
      <section id="gallery" className="mx-auto max-w-6xl px-4 pb-14 md:pb-20">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-serif font-semibold tracking-wide text-amber-50">
            {t("support.gallery.title")}
          </h2>
          <p className="max-w-prose text-sm leading-relaxed text-amber-100/80">
            {t("support.gallery.subtitle")}
          </p>
        </div>

        <div
          className="mt-6 rounded-3xl border border-amber-400/25 bg-black/40 shadow-xl shadow-black/40 overflow-hidden"
          role="region"
          aria-label={t("support.gallery.ariaLabel")}
          tabIndex={0}
          onKeyDown={onKeyDown}
        >
          <div className="relative">
            {/* Image */}
            <div className="relative">
              <img
                src={photos[active].src}
                alt={t(photos[active].altKey)}
                className="h-[260px] w-full object-cover sm:h-[380px] md:h-[460px]"
                loading="lazy"
              />
              {/* gold glow */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18)_0%,rgba(0,0,0,0)_60%)]" />
              {/* top sheen */}
              <div className="pointer-events-none absolute inset-0 opacity-25 bg-[linear-gradient(180deg,rgba(255,215,128,0.16)_0%,rgba(0,0,0,0)_40%)]" />
            </div>

            {/* Arrows */}
            <button
              type="button"
              onClick={prev}
              aria-label={t("support.gallery.prev")}
              className="group absolute left-3 top-1/2 -translate-y-1/2 rounded-full
                         border border-amber-300/35 bg-black/55 p-3
                         shadow-lg shadow-black/40 backdrop-blur-[2px]
                         transition-all duration-300 hover:scale-[1.05]
                         hover:border-amber-300/60 hover:bg-black/70"
            >
              <ChevronLeft className="h-6 w-6 text-amber-200/80 group-hover:text-amber-200" />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label={t("support.gallery.next")}
              className="group absolute right-3 top-1/2 -translate-y-1/2 rounded-full
                         border border-amber-300/35 bg-black/55 p-3
                         shadow-lg shadow-black/40 backdrop-blur-[2px]
                         transition-all duration-300 hover:scale-[1.05]
                         hover:border-amber-300/60 hover:bg-black/70"
            >
              <ChevronRight className="h-6 w-6 text-amber-200/80 group-hover:text-amber-200" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-2 rounded-full border border-amber-400/20 bg-black/55 px-3 py-2 backdrop-blur-[2px]">
                {photos.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={t("support.gallery.goTo", { index: i + 1 })}
                    className={[
                      "h-2.5 w-2.5 rounded-full transition-all duration-300",
                      i === active
                        ? "bg-amber-300 shadow-[0_0_10px_rgba(212,175,55,0.45)]"
                        : "bg-amber-100/30 hover:bg-amber-100/50",
                    ].join(" ")}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Caption / counter */}
          <div className="flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-semibold text-amber-100/70">
              {t("support.gallery.caption")}
            </p>
            <p className="text-xs text-amber-100/60">
              {t("support.gallery.counter", { current: active + 1, total: photos.length })}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
