import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Target, Award, Globe } from "lucide-react";

const About: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".scroll-animate");
            elements.forEach((el, index) => {
              setTimeout(() => el.classList.add("animate"), index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black"
    >
      {/* Classic background: vignette + gold sheen + faint ornamental lines */}
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
              {t("about.title")}
            </span>
          </h2>

          <div className="mx-auto mb-8 h-px w-44 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

          <p className="text-lg sm:text-xl text-amber-100/75 max-w-4xl mx-auto leading-relaxed">
            {t("about.intro")}
          </p>
        </div>

        {/* Mission + Objectives / Certifications */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Mission */}
          <div className="scroll-animate">
            <h3 className="text-3xl sm:text-4xl font-serif font-semibold tracking-wide text-amber-100 mb-8">
              {t("about.missionTitle")}
            </h3>

            <p className="text-amber-100/70 mb-8 leading-relaxed text-lg">
              {t("about.missionP1")}
            </p>
            <p className="text-amber-100/70 mb-10 leading-relaxed text-lg">
              {t("about.missionP2")}
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="border border-amber-300/25 bg-black/35 text-amber-100 px-8 py-3 rounded-full shadow-lg shadow-black/50 transform hover:scale-[1.03] transition-all duration-300">
                <span className="font-serif font-semibold tracking-wide">
                  {t("about.badges.founded")}
                </span>
              </div>
              <div className="border border-amber-300/25 bg-black/35 text-amber-100 px-8 py-3 rounded-full shadow-lg shadow-black/50 transform hover:scale-[1.03] transition-all duration-300">
                <span className="font-serif font-semibold tracking-wide">
                  {t("about.badges.casesResolved")}
                </span>
              </div>
            </div>
          </div>

          {/* Objectives + Certifications */}
          <div className="grid gap-8 scroll-animate">
            {/* Objectives Card */}
            <div className="rounded-2xl border border-amber-400/20 bg-black/45 backdrop-blur-[2px] p-8 shadow-xl shadow-black/60">
              <div className="flex items-center mb-6">
                <div className="mr-4 rounded-full border border-amber-300/30 bg-[radial-gradient(circle,rgba(212,175,55,0.28)_0%,rgba(0,0,0,0.75)_70%)] p-3">
                  <Target className="text-amber-200" size={28} />
                </div>
                <h4 className="text-2xl font-serif font-semibold tracking-wide text-amber-100">
                  {t("about.objectives.title")}
                </h4>
              </div>

              <ul className="text-amber-100/70 space-y-3 text-lg">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-300/90 rounded-full mr-4"></div>
                  {t("about.objectives.items.dialogue")}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-300/90 rounded-full mr-4"></div>
                  {t("about.objectives.items.mediation")}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-300/90 rounded-full mr-4"></div>
                  {t("about.objectives.items.humanRights")}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-300/90 rounded-full mr-4"></div>
                  {t("about.objectives.items.communityIntegration")}
                </li>
              </ul>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-amber-400/25 to-transparent" />
            </div>

            {/* Certifications Card */}
            <div className="rounded-2xl border border-amber-400/20 bg-black/45 backdrop-blur-[2px] p-8 shadow-xl shadow-black/60">
              <div className="flex items-center mb-6">
                <div className="mr-4 rounded-full border border-amber-300/30 bg-[radial-gradient(circle,rgba(212,175,55,0.28)_0%,rgba(0,0,0,0.75)_70%)] p-3">
                  <Award className="text-amber-200" size={28} />
                </div>
                <h4 className="text-2xl font-serif font-semibold tracking-wide text-amber-100">
                  {t("about.certifications.title")}
                </h4>
              </div>

              <ul className="text-amber-100/70 space-y-3 text-lg">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-300/90 rounded-full mr-4"></div>
                  {t("about.certifications.items.ministry")}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-300/90 rounded-full mr-4"></div>
                  {t("about.certifications.items.european")}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-300/90 rounded-full mr-4"></div>
                  {t("about.certifications.items.partners")}
                </li>
              </ul>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-amber-400/25 to-transparent" />
            </div>
          </div>
        </div>

        {/* Photo gallery */}
        <div className="mb-20 scroll-animate">
          <h3 className="text-3xl sm:text-4xl font-serif font-semibold tracking-wide text-center text-amber-100 mb-6">
            {t("about.activities.title")}
          </h3>

          <div className="mx-auto mb-10 h-px w-56 bg-gradient-to-r from-transparent via-amber-400/45 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                src: "/IMG-20250916-WA0002.jpg",
                alt: t("about.activities.cards.consultations.alt"),
                title: t("about.activities.cards.consultations.title"),
                desc: t("about.activities.cards.consultations.description"),
              },
              {
                src: "/IMG-20250916-WA0003.jpg",
                alt: t("about.activities.cards.conferences.alt"),
                title: t("about.activities.cards.conferences.title"),
                desc: t("about.activities.cards.conferences.description"),
              },
              {
                src: "/IMG-20250916-WA0010.jpg",
                alt: t("about.activities.cards.presentations.alt"),
                title: t("about.activities.cards.presentations.title"),
                desc: t("about.activities.cards.presentations.description"),
              },
              {
                src: "/IMG-20250916-WA0017.jpg",
                alt: t("about.activities.cards.dialogue.alt"),
                title: t("about.activities.cards.dialogue.title"),
                desc: t("about.activities.cards.dialogue.description"),
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden border border-amber-400/15 bg-black/35 shadow-xl shadow-black/60"
              >
                <div className="relative">
                  <img
                    src={card.src}
                    alt={card.alt}
                    className="w-full h-64 object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  {/* subtle top vignette */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.55),transparent_50%)]" />
                  {/* gold frame glow */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-amber-300/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-serif font-semibold tracking-wide text-amber-100 mb-2">
                    {card.title}
                  </h4>
                  <p className="text-amber-100/70">{card.desc}</p>
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision */}
        <div className="scroll-animate">
          <div className="rounded-3xl border border-amber-400/20 bg-black/45 backdrop-blur-[2px] text-amber-50 p-12 shadow-2xl shadow-black/70">
            <div className="flex items-center justify-center mb-8">
              <div className="rounded-full border border-amber-300/25 bg-[radial-gradient(circle,rgba(212,175,55,0.25)_0%,rgba(0,0,0,0.75)_70%)] p-6">
                <Globe size={64} className="text-amber-200 animate-float" />
              </div>
            </div>

            <h3 className="text-3xl sm:text-4xl font-serif font-semibold tracking-wide text-center mb-6">
              <span className="bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-300 bg-clip-text text-transparent">
                {t("about.vision.title")}
              </span>
            </h3>

            <div className="mx-auto mb-8 h-px w-56 bg-gradient-to-r from-transparent via-amber-400/45 to-transparent" />

            <p className="text-center max-w-5xl mx-auto text-lg sm:text-xl leading-relaxed text-amber-100/75">
              {t("about.vision.text")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
