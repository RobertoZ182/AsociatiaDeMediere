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
    <main className="w-full bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-neutral-100" />
          <div className="absolute -right-28 top-20 h-96 w-96 rounded-full bg-neutral-100" />
        </div>
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr] md:items-center">
            <div>
              <p className="text-sm font-semibold tracking-wide text-neutral-600">
                {t("join.hero.kicker")}
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                {t("join.hero.title")}
              </h1>
              <p className="mt-4 max-w-prose text-base leading-relaxed text-neutral-700">
                {t("join.hero.subtitle")}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={t("join.cta.emailDocuments.href")}
                  className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                >
                  {t("join.cta.emailDocuments.label")}
                </a>
              </div>
              <dl className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                  <dt className="text-xs font-semibold text-neutral-600">
                    {t("join.hero.stats.stat1.label")}
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-neutral-900">
                    {t("join.hero.stats.stat1.value")}
                  </dd>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                  <dt className="text-xs font-semibold text-neutral-600">
                    {t("join.hero.stats.stat2.label")}
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-neutral-900">
                    {t("join.hero.stats.stat2.value")}
                  </dd>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                  <dt className="text-xs font-semibold text-neutral-600">
                    {t("join.hero.stats.stat3.label")}
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-neutral-900">
                    {t("join.hero.stats.stat3.value")}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Trust / card */}
            <aside className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h2 className="text-base font-semibold text-neutral-900">
                {t("join.aside.title")}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                {t("join.aside.body")}
              </p>

              <ul className="mt-5 space-y-3 text-sm text-neutral-800">
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

              <div className="mt-6 rounded-2xl bg-neutral-50 p-4">
                <p className="text-xs font-semibold text-neutral-600">
                  {t("join.aside.note.title")}
                </p>
                <p className="mt-1 text-sm text-neutral-700">
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
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
            {t("join.reasons.title")}
          </h2>
          <p className="max-w-prose text-sm leading-relaxed text-neutral-700">
            {t("join.reasons.subtitle")}
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {reasons.map((r) => (
            <div
              key={r.key}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-100 text-xl">
                  {r.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-neutral-900">
                    {t(r.key)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                    {t(r.body)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
              {t("join.steps.title")}
            </h2>
            <p className="max-w-prose text-sm leading-relaxed text-neutral-700">
              {t("join.steps.subtitle")}
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {steps.map((s, idx) => (
              <div
                key={s.title}
                className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold text-neutral-600">
                    {t("join.steps.stepLabel", { step: idx + 1 })}
                  </div>
                  <div className="h-8 w-8 rounded-2xl bg-neutral-100" />
                </div>
                <h3 className="mt-3 text-base font-semibold text-neutral-900">
                  {t(s.title)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">
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
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
            {t("join.faq.title")}
          </h2>
          <p className="max-w-prose text-sm leading-relaxed text-neutral-700">
            {t("join.faq.subtitle")}
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {Array.from({ length: 4 }, (_, i) => (
            <details
              key={i}
              className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold text-neutral-900">
                <span>{t(`join.faq.q${i + 1}`)}</span>
                <span className="float-right select-none text-neutral-400 group-open:rotate-180">
                  ▾
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                {t(`join.faq.a${i + 1}`)}
              </p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}

