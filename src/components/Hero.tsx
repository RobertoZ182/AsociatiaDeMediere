import React, { useEffect, useState } from "react";
import { Scale, Users, Heart, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => setIsVisible(true), []);

  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black"
    >
      {/* Classic/aristocratic background: vignette + subtle gold glow + faint “ornament” lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,128,0.10)_0%,rgba(0,0,0,0.90)_55%,rgba(0,0,0,1)_100%)]" />
        {/* Subtle vertical sheen */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,rgba(212,175,55,0.00)_0%,rgba(212,175,55,0.10)_20%,rgba(212,175,55,0.00)_50%,rgba(212,175,55,0.08)_70%,rgba(212,175,55,0.00)_100%)]" />
        {/* Thin ornamental lines */}
        <div className="absolute inset-0 opacity-[0.10] bg-[repeating-linear-gradient(135deg,rgba(212,175,55,0.12)_0px,rgba(212,175,55,0.12)_1px,transparent_1px,transparent_14px)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Logo */}
          <div
            className={`flex justify-center mb-10 ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
          >
            <div className="relative">
              <img
                src="/WhatsApp Image 2025-12-08 at 21.47.38_0f240e2f.jpg"
                alt={t("header.logoAlt")}
                className="h-32 w-32 object-cover rounded-full shadow-2xl border border-amber-400/40 bg-black"
              />
              {/* Gold ring + soft glow */}
              <div className="absolute -inset-2 rounded-full border border-amber-300/20" />
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.25)_0%,rgba(0,0,0,0)_60%)]" />
            </div>
          </div>

          {/* Title */}
          <h1
            className={`text-4xl lg:text-7xl font-serif font-semibold tracking-wide text-amber-50 mb-6 ${
              isVisible ? "animate-slideInLeft" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <span className="bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-300 bg-clip-text text-transparent">
              {t("header.title")}
            </span>{" "}
            <span className="text-amber-100/90">{t("hero.title.and")}</span>{" "}
            <span className="bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-300 bg-clip-text text-transparent">
              {t("header.subtitle")}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg lg:text-2xl text-amber-100/80 mb-10 max-w-4xl mx-auto leading-relaxed ${
              isVisible ? "animate-slideInRight" : "opacity-0"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            {t("hero.description")}
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="#services"
              className="group relative px-10 py-4 rounded-full font-semibold font-serif tracking-wide
                         bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 text-black
                         shadow-lg shadow-black/40 hover:shadow-2xl hover:shadow-black/60
                         transition-all duration-300 transform hover:scale-[1.03]
                         border border-amber-200/30"
            >
              <span className="relative z-10">{t("hero.cta.services")}</span>
              {/* subtle inner highlight */}
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0)_55%)]" />
            </a>

            <a
              href="#contact"
              className="group relative px-10 py-4 rounded-full font-semibold font-serif tracking-wide
                         bg-black/40 text-amber-100
                         border border-amber-400/35 hover:border-amber-300/55
                         hover:bg-black/55
                         shadow-lg shadow-black/40 hover:shadow-2xl hover:shadow-black/60
                         transition-all duration-300 transform hover:scale-[1.03]"
            >
              <span className="relative z-10">{t("hero.cta.request")}</span>
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(90deg,rgba(212,175,55,0)_0%,rgba(212,175,55,0.10)_50%,rgba(212,175,55,0)_100%)]" />
            </a>
          </div>

          {/* Cards */}
          <div
            className={`grid md:grid-cols-3 gap-8 mt-20 ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
            style={{ animationDelay: "0.8s" }}
          >
            {/* Card 1 */}
            <div className="text-center bg-black/40 backdrop-blur-[2px] p-8 rounded-2xl border border-amber-400/25 hover:border-amber-300/45 transition-colors duration-300 shadow-xl shadow-black/40">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-300/35 bg-[radial-gradient(circle,rgba(212,175,55,0.25)_0%,rgba(0,0,0,0.7)_70%)]">
                <Scale className="text-amber-200" size={36} />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-amber-100 mb-4 tracking-wide">
                {t("hero.cards.justice.title")}
              </h3>
              <p className="text-amber-100/75 leading-relaxed">
                {t("hero.cards.justice.text")}
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center bg-black/40 backdrop-blur-[2px] p-8 rounded-2xl border border-amber-400/25 hover:border-amber-300/45 transition-colors duration-300 shadow-xl shadow-black/40">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-300/35 bg-[radial-gradient(circle,rgba(212,175,55,0.25)_0%,rgba(0,0,0,0.7)_70%)]">
                <Users className="text-amber-200" size={36} />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-amber-100 mb-4 tracking-wide">
                {t("hero.cards.community.title")}
              </h3>
              <p className="text-amber-100/75 leading-relaxed">
                {t("hero.cards.community.text")}
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center bg-black/40 backdrop-blur-[2px] p-8 rounded-2xl border border-amber-400/25 hover:border-amber-300/45 transition-colors duration-300 shadow-xl shadow-black/40">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-300/35 bg-[radial-gradient(circle,rgba(212,175,55,0.25)_0%,rgba(0,0,0,0.7)_70%)]">
                <Heart className="text-amber-200" size={36} />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-amber-100 mb-4 tracking-wide">
                {t("hero.cards.respect.title")}
              </h3>
              <p className="text-amber-100/75 leading-relaxed">
                {t("hero.cards.respect.text")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
      >
        <ChevronDown
          className="text-amber-200/60 hover:text-amber-200 transition-colors duration-300 animate-bounce"
          size={32}
        />
      </div>
    </section>
  );
};

export default Hero;
