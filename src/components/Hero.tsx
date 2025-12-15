import React, { useEffect, useState } from "react";
import { Scale, Users, Heart, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          <div
            className={`flex justify-center mb-8 ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
          >
            <div className="relative">
              <img
                src="/WhatsApp Image 2025-09-13 at 23.18.21_b9f8716d.jpg"
                alt={t("header.logoAlt")}
                className="h-32 w-32 object-cover rounded-full shadow-2xl border-4 border-white/20 backdrop-blur-sm"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse-custom"></div>
            </div>
          </div>

          <h1
            className={`text-4xl lg:text-7xl font-bold text-white mb-6 ${
              isVisible ? "animate-slideInLeft" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              {t("hero.title.mediation")}
            </span>{" "}
            {t("hero.title.and")}{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent animate-gradient">
              {t("hero.title.reconciliation")}
            </span>
          </h1>

          <p
            className={`text-xl lg:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed ${
              isVisible ? "animate-slideInRight" : "opacity-0"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            {t("hero.description")}
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="#services"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 btn-animated"
            >
              <span className="relative z-10">
                {t("hero.cta.services")}
              </span>
            </a>
            <a
              href="#contact"
              className="group bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-full font-semibold border-2 border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 btn-animated"
            >
              <span className="relative z-10">
                {t("hero.cta.request")}
              </span>
            </a>
          </div>

          <div
            className={`grid md:grid-cols-3 gap-8 mt-20 ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
            style={{ animationDelay: "0.8s" }}
          >
            {/* Card 1 */}
            <div className="text-center group interactive-card bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                <Scale className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-glow">
                {t("hero.cards.justice.title")}
              </h3>
              <p className="text-blue-100 leading-relaxed">
                {t("hero.cards.justice.text")}
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center group interactive-card bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
                <Users className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-glow">
                {t("hero.cards.community.title")}
              </h3>
              <p className="text-blue-100 leading-relaxed">
                {t("hero.cards.community.text")}
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center group interactive-card bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-pink-500/25 transition-all duration-300">
                <Heart className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-glow">
                {t("hero.cards.respect.title")}
              </h3>
              <p className="text-blue-100 leading-relaxed">
                {t("hero.cards.respect.text")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToNext}
      >
        <ChevronDown
          className="text-white/60 hover:text-white transition-colors duration-300"
          size={32}
        />
      </div>
    </section>
  );
};

export default Hero;