import React from "react";
import { useTranslation } from "react-i18next";

export default function JoinAssociationPage() {
  const { t } = useTranslation();

  const reasons = [
    {
      key: "join.reasons.localDecision.title",
      body: "join.reasons.localDecision.body",
      icon: "🏛️",
    },
    {
      key: "join.reasons.domainStructures.title",
      body: "join.reasons.domainStructures.body",
      icon: "🧩",
    },
    {
      key: "join.reasons.helpCommunity.title",
      body: "join.reasons.helpCommunity.body",
      icon: "🤝",
    },
    {
      key: "join.reasons.referenceGroup.title",
      body: "join.reasons.referenceGroup.body",
      icon: "🧑‍🤝‍🧑",
    },
  ] as const;

  const steps = [
    {
      title: "join.steps.step1.title",
      body: "join.steps.step1.body",
    },
    {
      title: "join.steps.step2.title",
      body: "join.steps.step2.body",
    },
    {
      title: "join.steps.step3.title",
      body: "join.steps.step3.body",
    },
  ] as const;

  return (
    <main className="w-full bg-gradient-to-b from-black via-zinc-950 to-black text-amber-50">
      {/* Hero (matched to Hero component palette) */}
      <section className="relative overflow-hidden">
        {/* Same classic/aristocratic background layers */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          {/* Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,128,0.10)_0%,rgba(0,0,0,0.90)_55%,rgba(0,0,0,1)_100%)]" />
          {/* Subtle vertical sheen */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,rgba(212,175,55,0.00)_0%,rgba(212,175,55,0.10)_20%,rgba(212,175,55,0.00)_50%,rgba(212,175,55,0.08)_70%,rgba(212,175,55,0.00)_100%)]" />
          {/* Thin ornamental lines */}
          <div className="absolute inset-0 opacity-[0.10] bg-[repeating-linear-gradient(135deg,rgba(212,175,55,0.12)_0px,rgba(212,175,55,0.12)_1px,transparent_1px,transparent_14px)]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr] md:items-center">
            <div>
              <p className="text-sm font-semibold tracking-wide text-amber-100/70">
                {t("join.hero.kicker")}
              </p>

              <h1 className="mt-3 text-3xl font-serif font-semibold tracking-wide md:text-4xl">
                <span className="bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-300 bg-clip-text text-transparent">
                  {t("join.hero.title")}
                </span>
              </h1>

              <p className="mt-4 max-w-prose text-base leading-relaxed text-amber-100/80">
                {t("join.hero.subtitle")}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={t("join.cta.emailDocuments.href")}
                  className="group relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold font-serif tracking-wide
                             bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 text-black
                             shadow-lg shadow-black/40 hover:shadow-2xl hover:shadow-black/60
                             transition-all duration-300 transform hover:scale-[1.03]
                             border border-amber-200/30"
                >
                  <span className="relative z-10">
                    {t("join.cta.emailDocuments.label")}
                  </span>
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0)_55%)]" />
                </a>
              </div>

              <dl className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-amber-400/25 bg-black/40 backdrop-blur-[2px] p-4 shadow-xl shadow-black/40">
                  <dt className="text-xs font-semibold text-amber-100/70">
                    {t("join.hero.stats.stat1.label")}
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-amber-50">
                    {t("join.hero.stats.stat1.value")}
                  </dd>
                </div>
                <div className="rounded-2xl border border-amber-400/25 bg-black/40 backdrop-blur-[2px] p-4 shadow-xl shadow-black/40">
                  <dt className="text-xs font-semibold text-amber-100/70">
                    {t("join.hero.stats.stat2.label")}
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-amber-50">
                    {t("join.hero.stats.stat2.value")}
                  </dd>
                </div>
                <div className="rounded-2xl border border-amber-400/25 bg-black/40 backdrop-blur-[2px] p-4 shadow-xl shadow-black/40">
                  <dt className="text-xs font-semibold text-amber-100/70">
                    {t("join.hero.stats.stat3.label")}
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-amber-50">
                    {t("join.hero.stats.stat3.value")}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Trust / card */}
            <aside className="rounded-3xl border border-amber-400/25 bg-black/40 backdrop-blur-[2px] p-6 shadow-xl shadow-black/40">
              <h2 className="text-base font-semibold text-amber-50">
                {t("join.aside.title")}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-amber-100/80">
                {t("join.aside.body")}
              </p>

              <ul className="mt-5 space-y-3 text-sm text-amber-100/90">
                <li className="flex gap-3">
                  <span className="mt-0.5">✅</span>
                  <span>{t("join.aside.bullets.b1")}</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5">✅</span>
                  <span>{t("join.aside.bullets.b2")}</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5">✅</span>
                  <span>{t("join.aside.bullets.b3")}</span>
                </li>
              </ul>

              <div className="mt-6 rounded-2xl border border-amber-400/20 bg-black/35 p-4">
                <p className="text-xs font-semibold text-amber-100/70">
                  {t("join.aside.note.title")}
                </p>
                <p className="mt-1 text-sm text-amber-100/80">
                  {t("join.aside.note.body")}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-serif font-semibold tracking-wide text-amber-50">
            {t("join.reasons.title")}
          </h2>
          <p className="max-w-prose text-sm leading-relaxed text-amber-100/80">
            {t("join.reasons.subtitle")}
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {reasons.map((r) => (
            <div
              key={r.key}
              className="rounded-3xl border border-amber-400/25 bg-black/40 backdrop-blur-[2px] p-6 shadow-xl shadow-black/40 hover:border-amber-300/45 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-300/35 bg-[radial-gradient(circle,rgba(212,175,55,0.25)_0%,rgba(0,0,0,0.7)_70%)] text-xl">
                  {r.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-amber-50">
                    {t(r.key)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-amber-100/80">
                    {t(r.body)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="relative overflow-hidden">
        {/* keep it in the same palette (no neutral-50 block) */}
        <div className="absolute inset-0 pointer-events-none -z-10 opacity-70">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.10)_0%,rgba(0,0,0,0)_60%)]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-serif font-semibold tracking-wide text-amber-50">
              {t("join.steps.title")}
            </h2>
            <p className="max-w-prose text-sm leading-relaxed text-amber-100/80">
              {t("join.steps.subtitle")}
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {steps.map((s, idx) => (
              <div
                key={s.title}
                className="rounded-3xl border border-amber-400/25 bg-black/40 backdrop-blur-[2px] p-6 shadow-xl shadow-black/40 hover:border-amber-300/45 transition-colors duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold text-amber-100/70">
                    {t("join.steps.stepLabel", { step: idx + 1 })}
                  </div>
                  <div className="h-8 w-8 rounded-2xl border border-amber-300/35 bg-[radial-gradient(circle,rgba(212,175,55,0.25)_0%,rgba(0,0,0,0.7)_70%)]" />
                </div>

                <h3 className="mt-3 text-base font-semibold text-amber-50">
                  {t(s.title)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-amber-100/80">
                  {t(s.body)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-serif font-semibold tracking-wide text-amber-50">
            {t("join.faq.title")}
          </h2>
          <p className="max-w-prose text-sm leading-relaxed text-amber-100/80">
            {t("join.faq.subtitle")}
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {Array.from({ length: 4 }, (_, i) => (
            <details
              key={i}
              className="group rounded-3xl border border-amber-400/25 bg-black/40 backdrop-blur-[2px] p-6 shadow-xl shadow-black/40 hover:border-amber-300/45 transition-colors duration-300"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold text-amber-50">
                <span>{t(`join.faq.q${i + 1}`)}</span>
                <span className="float-right select-none text-amber-200/60 group-open:rotate-180 transition-transform">
                  ▾
                </span>
              </summary>

              <p className="mt-3 text-sm leading-relaxed text-amber-100/80">
                {t(`join.faq.a${i + 1}`)}
              </p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
