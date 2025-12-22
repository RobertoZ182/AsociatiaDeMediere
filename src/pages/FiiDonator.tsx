import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

type DonorType = "time" | "skills" | "financial" | "material";

const DonorTypeSelect: { value: DonorType; labelKey: string }[] = [
  { value: "time", labelKey: "donor.types.time" },
  { value: "skills", labelKey: "donor.types.skills" },
  { value: "financial", labelKey: "donor.types.financial" },
  { value: "material", labelKey: "donor.types.material" },
];

export default function FiiDonator() {
  const { t } = useTranslation();

  const [donorType, setDonorType] = useState<DonorType>("time");

  // Common fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Message fields (time/skills)
  const [message, setMessage] = useState("");

  // Financial/material fields
  const [amount, setAmount] = useState<number>(50);
  const [currency, setCurrency] = useState("EUR");
  const [materialDescription, setMaterialDescription] = useState("");

  // Card UI (placeholder)
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExp, setCardExp] = useState("");
  const [cardCvc, setCardCvc] = useState("");

  // Demo donation progress (replace with API data)
  const donatedSoFar = 8240; // ex: fetched from backend
  const goal = 20000; // ex: goal from backend
  const progressPct = useMemo(() => {
    const p = Math.round((donatedSoFar / goal) * 100);
    return Math.max(0, Math.min(100, p));
  }, [donatedSoFar, goal]);

  const isMessageForm = donorType === "time" || donorType === "skills";
  const isPaymentForm = donorType === "financial" || donorType === "material";

  const onSubmitMessage = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send to backend / email service (include donorType, email mandatory)
    alert(t("donor.form.common.successMessage"));
  };

  const onSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate real card payment (Stripe/Netopia/etc.)
    // - Create PaymentIntent / Checkout session on backend
    // - Confirm payment on client
    alert(t("donor.form.payment.successPaymentMock"));
  };

  return (
    <main className="w-full bg-gradient-to-b from-black via-zinc-950 to-black text-amber-50">
      {/* Background layers (same vibe as Hero) */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,128,0.10)_0%,rgba(0,0,0,0.90)_55%,rgba(0,0,0,1)_100%)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,rgba(212,175,55,0.00)_0%,rgba(212,175,55,0.10)_20%,rgba(212,175,55,0.00)_50%,rgba(212,175,55,0.08)_70%,rgba(212,175,55,0.00)_100%)]" />
        <div className="absolute inset-0 opacity-[0.10] bg-[repeating-linear-gradient(135deg,rgba(212,175,55,0.12)_0px,rgba(212,175,55,0.12)_1px,transparent_1px,transparent_14px)]" />
      </div>

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr] md:items-center">
            <div>
              <p className="text-sm font-semibold tracking-wide text-amber-100/70">
                {t("donor.hero.kicker")}
              </p>

              <h1 className="mt-3 text-3xl font-serif font-semibold tracking-wide md:text-5xl">
                <span className="bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-300 bg-clip-text text-transparent">
                  {t("donor.hero.title")}
                </span>
              </h1>

              <p className="mt-4 max-w-prose text-base leading-relaxed text-amber-100/80">
                {t("donor.hero.subtitle")}
              </p>

              {/* Donor type dropdown */}
              <div className="mt-6">
                <label className="block text-xs font-semibold text-amber-100/70 mb-2">
                  {t("donor.typePicker.label")}
                </label>

                <div className="relative">
                  <select
                    value={donorType}
                    onChange={(e) => setDonorType(e.target.value as DonorType)}
                    className="w-full appearance-none rounded-2xl border border-amber-400/25 bg-black/40 backdrop-blur-[2px]
                               px-4 py-3 text-sm text-amber-50 shadow-xl shadow-black/40
                               focus:outline-none focus:ring-2 focus:ring-amber-300/30"
                  >
                    {DonorTypeSelect.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-zinc-950">
                        {t(opt.labelKey)}
                      </option>
                    ))}
                  </select>

                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-amber-200/60">
                    ▾
                  </span>
                </div>

                <p className="mt-3 text-sm text-amber-100/75">
                  {t("donor.typePicker.helper", { type: t(`donor.types.${donorType}`) })}
                </p>
              </div>
            </div>

            {/* Right card: Rights */}
            <aside className="rounded-3xl border border-amber-400/25 bg-black/40 backdrop-blur-[2px] p-6 shadow-xl shadow-black/40">
              <h2 className="text-base font-semibold text-amber-50">
                {t("donor.rights.title")}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-amber-100/80">
                {t("donor.rights.subtitle")}
              </p>

              <ul className="mt-5 space-y-3 text-sm text-amber-100/90">
                {["r1", "r2", "r3", "r4"].map((k) => (
                  <li key={k} className="flex gap-3">
                    <span className="mt-0.5">✅</span>
                    <span>{t(`donor.rights.items.${k}`)}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl border border-amber-400/20 bg-black/35 p-4">
                <p className="text-xs font-semibold text-amber-100/70">
                  {t("donor.rights.emailNote.title")}
                </p>
                <p className="mt-1 text-sm text-amber-100/80">
                  {t("donor.rights.emailNote.body")}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-serif font-semibold tracking-wide text-amber-50">
            {t("donor.categories.title")}
          </h2>
          <p className="max-w-prose text-sm leading-relaxed text-amber-100/80">
            {t("donor.categories.subtitle")}
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            { k: "time", icon: "⏳" },
            { k: "skills", icon: "🧠" },
            { k: "financial", icon: "💳" },
            { k: "material", icon: "📦" },
          ].map((c) => (
            <div
              key={c.k}
              className="rounded-3xl border border-amber-400/25 bg-black/40 backdrop-blur-[2px] p-6 shadow-xl shadow-black/40 hover:border-amber-300/45 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-300/35 bg-[radial-gradient(circle,rgba(212,175,55,0.25)_0%,rgba(0,0,0,0.7)_70%)] text-xl">
                  {c.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-amber-50">
                    {t(`donor.categories.items.${c.k}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-amber-100/80">
                    {t(`donor.categories.items.${c.k}.body`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-6xl px-4 pb-14 md:pb-20">
        <div className="rounded-3xl border border-amber-400/25 bg-black/40 backdrop-blur-[2px] p-6 md:p-8 shadow-xl shadow-black/40">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-serif font-semibold tracking-wide text-amber-50">
              {t("donor.form.title")}
            </h2>
            <p className="text-sm leading-relaxed text-amber-100/80">
              {t("donor.form.subtitle")}
            </p>
          </div>

          {/* Common info */}
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div>
              <label className="block text-xs font-semibold text-amber-100/70 mb-2">
                {t("donor.form.common.fullName.label")}
              </label>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={t("donor.form.common.fullName.placeholder")}
                className="w-full rounded-2xl border border-amber-400/25 bg-black/35 px-4 py-3 text-sm text-amber-50
                           placeholder:text-amber-100/35 focus:outline-none focus:ring-2 focus:ring-amber-300/30"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-amber-100/70 mb-2">
                {t("donor.form.common.email.label")}{" "}
                <span className="text-amber-200/80">*</span>
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("donor.form.common.email.placeholder")}
                type="email"
                required
                className="w-full rounded-2xl border border-amber-400/25 bg-black/35 px-4 py-3 text-sm text-amber-50
                           placeholder:text-amber-100/35 focus:outline-none focus:ring-2 focus:ring-amber-300/30"
              />
              <p className="mt-2 text-xs text-amber-100/60">
                {t("donor.form.common.email.note")}
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-amber-100/70 mb-2">
                {t("donor.form.common.phone.label")}
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t("donor.form.common.phone.placeholder")}
                className="w-full rounded-2xl border border-amber-400/25 bg-black/35 px-4 py-3 text-sm text-amber-50
                           placeholder:text-amber-100/35 focus:outline-none focus:ring-2 focus:ring-amber-300/30"
              />
            </div>
          </div>

          {/* Conditional forms */}
          <div className="mt-8">
            {isMessageForm && (
              <form onSubmit={onSubmitMessage} className="space-y-4">
                <div className="rounded-2xl border border-amber-400/20 bg-black/30 p-4">
                  <p className="text-sm text-amber-100/80">
                    {t("donor.form.messageForm.info", {
                      type: t(`donor.types.${donorType}`),
                    })}
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-amber-100/70 mb-2">
                    {t("donor.form.messageForm.message.label")}
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t("donor.form.messageForm.message.placeholder")}
                    rows={5}
                    className="w-full rounded-2xl border border-amber-400/25 bg-black/35 px-4 py-3 text-sm text-amber-50
                               placeholder:text-amber-100/35 focus:outline-none focus:ring-2 focus:ring-amber-300/30"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold font-serif tracking-wide
                             bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 text-black
                             shadow-lg shadow-black/40 hover:shadow-2xl hover:shadow-black/60
                             transition-all duration-300 transform hover:scale-[1.03]
                             border border-amber-200/30"
                >
                  <span className="relative z-10">
                    {t("donor.form.messageForm.submit")}
                  </span>
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0)_55%)]" />
                </button>
              </form>
            )}

            {isPaymentForm && (
              <form onSubmit={onSubmitPayment} className="space-y-6">
                {/* Donation progress */}
                <div className="rounded-2xl border border-amber-400/20 bg-black/30 p-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold text-amber-100/70">
                        {t("donor.form.payment.progress.label")}
                      </p>
                      <p className="mt-1 text-sm text-amber-50">
                        {t("donor.form.payment.progress.value", {
                          donated: donatedSoFar.toLocaleString(),
                          goal: goal.toLocaleString(),
                        })}
                      </p>
                    </div>
                    <div className="text-xs font-semibold text-amber-200/80">
                      {t("donor.form.payment.progress.percent", {
                        percent: progressPct,
                      })}
                    </div>
                  </div>

                  <div className="mt-3 h-3 w-full rounded-full bg-black/40 border border-amber-400/20 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,rgba(212,175,55,0.00)_0%,rgba(212,175,55,0.45)_20%,rgba(255,215,128,0.75)_55%,rgba(212,175,55,0.35)_80%,rgba(212,175,55,0.00)_100%)]"
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>

                  <p className="mt-3 text-xs text-amber-100/60">
                    {t("donor.form.payment.progress.note")}
                  </p>
                </div>

                {/* Amount / material info */}
                <div className="grid gap-4 md:grid-cols-2">
                  {donorType === "financial" && (
                    <div>
                      <label className="block text-xs font-semibold text-amber-100/70 mb-2">
                        {t("donor.form.payment.amount.label")}
                      </label>
                      <div className="flex gap-3">
                        <input
                          value={amount}
                          onChange={(e) => setAmount(Number(e.target.value))}
                          type="number"
                          min={1}
                          className="w-full rounded-2xl border border-amber-400/25 bg-black/35 px-4 py-3 text-sm text-amber-50
                                     placeholder:text-amber-100/35 focus:outline-none focus:ring-2 focus:ring-amber-300/30"
                        />
                        <select
                          value={currency}
                          onChange={(e) => setCurrency(e.target.value)}
                          className="w-28 appearance-none rounded-2xl border border-amber-400/25 bg-black/35 px-4 py-3 text-sm text-amber-50
                                     focus:outline-none focus:ring-2 focus:ring-amber-300/30"
                        >
                          <option value="EUR" className="bg-zinc-950">
                            EUR
                          </option>
                          <option value="RON" className="bg-zinc-950">
                            RON
                          </option>
                          <option value="USD" className="bg-zinc-950">
                            USD
                          </option>
                        </select>
                      </div>
                      <p className="mt-2 text-xs text-amber-100/60">
                        {t("donor.form.payment.amount.note")}
                      </p>
                    </div>
                  )}

                  {donorType === "material" && (
                    <div>
                      <label className="block text-xs font-semibold text-amber-100/70 mb-2">
                        {t("donor.form.payment.material.label")}
                      </label>
                      <input
                        value={materialDescription}
                        onChange={(e) => setMaterialDescription(e.target.value)}
                        placeholder={t("donor.form.payment.material.placeholder")}
                        className="w-full rounded-2xl border border-amber-400/25 bg-black/35 px-4 py-3 text-sm text-amber-50
                                   placeholder:text-amber-100/35 focus:outline-none focus:ring-2 focus:ring-amber-300/30"
                      />
                      <p className="mt-2 text-xs text-amber-100/60">
                        {t("donor.form.payment.material.note")}
                      </p>
                    </div>
                  )}

                  <div className="rounded-2xl border border-amber-400/20 bg-black/30 p-4">
                    <p className="text-sm text-amber-100/80">
                      {t("donor.form.payment.info", {
                        type: t(`donor.types.${donorType}`),
                      })}
                    </p>
                  </div>
                </div>

                {/* Card UI (placeholder) */}
                <div className="rounded-2xl border border-amber-400/20 bg-black/30 p-4">
                  <p className="text-xs font-semibold text-amber-100/70">
                    {t("donor.form.payment.cardSection.title")}
                  </p>
                  <p className="mt-1 text-sm text-amber-100/75">
                    {t("donor.form.payment.cardSection.subtitle")}
                  </p>

                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-amber-100/70 mb-2">
                        {t("donor.form.payment.card.name")}
                      </label>
                      <input
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        placeholder={t("donor.form.payment.card.namePlaceholder")}
                        className="w-full rounded-2xl border border-amber-400/25 bg-black/35 px-4 py-3 text-sm text-amber-50
                                   placeholder:text-amber-100/35 focus:outline-none focus:ring-2 focus:ring-amber-300/30"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-amber-100/70 mb-2">
                        {t("donor.form.payment.card.number")}
                      </label>
                      <input
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder={t("donor.form.payment.card.numberPlaceholder")}
                        inputMode="numeric"
                        className="w-full rounded-2xl border border-amber-400/25 bg-black/35 px-4 py-3 text-sm text-amber-50
                                   placeholder:text-amber-100/35 focus:outline-none focus:ring-2 focus:ring-amber-300/30"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-amber-100/70 mb-2">
                        {t("donor.form.payment.card.exp")}
                      </label>
                      <input
                        value={cardExp}
                        onChange={(e) => setCardExp(e.target.value)}
                        placeholder={t("donor.form.payment.card.expPlaceholder")}
                        className="w-full rounded-2xl border border-amber-400/25 bg-black/35 px-4 py-3 text-sm text-amber-50
                                   placeholder:text-amber-100/35 focus:outline-none focus:ring-2 focus:ring-amber-300/30"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-amber-100/70 mb-2">
                        {t("donor.form.payment.card.cvc")}
                      </label>
                      <input
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value)}
                        placeholder={t("donor.form.payment.card.cvcPlaceholder")}
                        inputMode="numeric"
                        className="w-full rounded-2xl border border-amber-400/25 bg-black/35 px-4 py-3 text-sm text-amber-50
                                   placeholder:text-amber-100/35 focus:outline-none focus:ring-2 focus:ring-amber-300/30"
                      />
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-amber-100/60">
                    {t("donor.form.payment.cardSection.note")}
                  </p>
                </div>

                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold font-serif tracking-wide
                             bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 text-black
                             shadow-lg shadow-black/40 hover:shadow-2xl hover:shadow-black/60
                             transition-all duration-300 transform hover:scale-[1.03]
                             border border-amber-200/30"
                >
                  <span className="relative z-10">
                    {t("donor.form.payment.submit")}
                  </span>
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0)_55%)]" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
