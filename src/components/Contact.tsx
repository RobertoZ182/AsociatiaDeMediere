import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".scroll-animate");
            elements.forEach((el, index) => {
              setTimeout(() => el.classList.add("animate"), index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const resp = await fetch(`${import.meta.env.VITE_API_URL}/cerere`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!resp.ok) throw new Error(`Server error: ${resp.status}`);

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Submission failed:", error);
      alert(t("contact.form.error"));
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // unified palette: black + gold (no rainbow gradients)
  const contactInfo = [
    { key: "address", icon: <MapPin size={24} /> },
    { key: "phone", icon: <Phone size={24} /> },
    { key: "email", icon: <Mail size={24} /> },
    { key: "schedule", icon: <Clock size={24} /> },
  ];

  const subjectOptions = [
    { value: "civila", key: "civil" },
    { value: "familiala", key: "family" },
    { value: "comerciala", key: "commercial" },
    { value: "comunitara", key: "community" },
    { value: "scolara", key: "school" },
    { value: "consultanta", key: "legal" },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black"
    >
      {/* Classic background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,128,0.10)_0%,rgba(0,0,0,0.92)_55%,rgba(0,0,0,1)_100%)]" />
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(90deg,rgba(212,175,55,0)_0%,rgba(212,175,55,0.10)_25%,rgba(212,175,55,0)_50%,rgba(212,175,55,0.08)_75%,rgba(212,175,55,0)_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[repeating-linear-gradient(135deg,rgba(212,175,55,0.14)_0px,rgba(212,175,55,0.14)_1px,transparent_1px,transparent_16px)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold tracking-wide mb-6">
            <span className="bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-300 bg-clip-text text-transparent">
              {t("contact.title")}
            </span>
          </h2>

          <div className="mx-auto mb-8 h-px w-44 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

          <p className="text-lg sm:text-xl text-amber-100/75 max-w-4xl mx-auto leading-relaxed">
            {t("contact.intro")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="scroll-animate rounded-3xl border border-amber-400/15 bg-black/40 backdrop-blur-[2px] p-8 shadow-2xl shadow-black/70">
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold tracking-wide mb-6">
                <span className="bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-300 bg-clip-text text-transparent">
                  {t("contact.info.title")}
                </span>
              </h3>

              <div className="mt-6 h-px w-40 bg-gradient-to-r from-transparent via-amber-400/35 to-transparent" />

              <div className="mt-8 space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="interactive-card flex items-start space-x-4 p-6 rounded-2xl
                               border border-amber-400/15 bg-black/35
                               hover:bg-black/45 hover:border-amber-300/35
                               shadow-lg shadow-black/50 transition-all duration-300"
                  >
                    <div
                      className="p-3 rounded-xl border border-amber-300/30 text-amber-200
                                 bg-[radial-gradient(circle,rgba(212,175,55,0.28)_0%,rgba(0,0,0,0.75)_70%)]
                                 shadow-lg shadow-black/40"
                    >
                      {info.icon}
                    </div>

                    <div>
                      <h4 className="font-serif font-semibold tracking-wide text-amber-100 text-xl mb-2">
                        {t(`contact.info.items.${info.key}.title`)}
                      </h4>
                      <p className="text-amber-100/70 whitespace-pre-line leading-relaxed">
                        {t(`contact.info.items.${info.key}.content`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Free consultation banner */}
            <div className="scroll-animate rounded-3xl border border-amber-400/20 bg-black/45 backdrop-blur-[2px] p-8 shadow-2xl shadow-black/70">
              <h3 className="text-2xl font-serif font-semibold tracking-wide mb-4">
                <span className="bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-300 bg-clip-text text-transparent">
                  {t("contact.freeConsult.title")}
                </span>
              </h3>
              <p className="mb-6 text-lg leading-relaxed text-amber-100/75">
                {t("contact.freeConsult.text")}
              </p>

              <a
                href="tel:+40725693521"
                className="inline-block rounded-2xl px-8 py-4 font-serif font-semibold tracking-wide
                           bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 text-black
                           border border-amber-200/30 shadow-lg shadow-black/40
                           hover:shadow-xl hover:shadow-black/60 transform hover:scale-[1.03]
                           transition-all duration-300 btn-animated"
              >
                {t("contact.freeConsult.button")}
              </a>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-amber-400/25 to-transparent" />
            </div>
          </div>

          {/* Form */}
          <div className="scroll-animate rounded-3xl border border-amber-400/15 bg-black/40 backdrop-blur-[2px] p-10 shadow-2xl shadow-black/70">
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold tracking-wide mb-6">
              <span className="bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-300 bg-clip-text text-transparent">
                {t("contact.form.title")}
              </span>
            </h3>

            <div className="mt-4 h-px w-44 bg-gradient-to-r from-transparent via-amber-400/35 to-transparent" />

            {isSubmitted && (
              <div className="mt-8 mb-6 p-4 rounded-2xl flex items-center space-x-3 animate-fadeInUp
                              border border-amber-400/20 bg-amber-300/10">
                <CheckCircle className="text-amber-200" size={24} />
                <p className="text-amber-100/80 font-semibold">
                  {t("contact.form.success")}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-serif font-semibold tracking-wide text-amber-100/80 mb-3"
                  >
                    {t("contact.form.nameLabel")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl text-lg
                               border border-amber-400/15 bg-black/35 text-amber-50 placeholder:text-amber-100/35
                               focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-300/35
                               transition-all duration-300"
                    placeholder={t("contact.form.namePlaceholder")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-serif font-semibold tracking-wide text-amber-100/80 mb-3"
                  >
                    {t("contact.form.emailLabel")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl text-lg
                               border border-amber-400/15 bg-black/35 text-amber-50 placeholder:text-amber-100/35
                               focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-300/35
                               transition-all duration-300"
                    placeholder={t("contact.form.emailPlaceholder")}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-serif font-semibold tracking-wide text-amber-100/80 mb-3"
                  >
                    {t("contact.form.phoneLabel")}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl text-lg
                               border border-amber-400/15 bg-black/35 text-amber-50 placeholder:text-amber-100/35
                               focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-300/35
                               transition-all duration-300"
                    placeholder={t("contact.form.phonePlaceholder")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-serif font-semibold tracking-wide text-amber-100/80 mb-3"
                  >
                    {t("contact.form.subjectLabel")}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl text-lg
                               border border-amber-400/15 bg-black/35 text-amber-50
                               focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-300/35
                               transition-all duration-300"
                  >
                    <option value="">{t("contact.form.subjectPlaceholder")}</option>
                    {subjectOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-black">
                        {t(`contact.form.subjectOptions.${opt.key}`)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-serif font-semibold tracking-wide text-amber-100/80 mb-3"
                >
                  {t("contact.form.messageLabel")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 rounded-2xl text-lg resize-none
                             border border-amber-400/15 bg-black/35 text-amber-50 placeholder:text-amber-100/35
                             focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-300/35
                             transition-all duration-300"
                  placeholder={t("contact.form.messagePlaceholder")}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 px-8 rounded-2xl text-lg font-serif font-semibold tracking-wide
                           bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 text-black
                           border border-amber-200/30 shadow-lg shadow-black/50
                           hover:shadow-2xl hover:shadow-black/70 transform hover:scale-[1.02]
                           transition-all duration-300 flex items-center justify-center space-x-3
                           disabled:opacity-50 disabled:cursor-not-allowed btn-animated"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black/70" />
                    <span>{t("contact.form.submitting")}</span>
                  </>
                ) : (
                  <>
                    <Send size={24} />
                    <span>{t("contact.form.submit")}</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-amber-400/25 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
