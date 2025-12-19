import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Phone, Award, Star, Shield } from "lucide-react";

const Team: React.FC = () => {
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

  // unified palette (black + gold)
  const teamMembers = [
    {
      key: "florinMotoi",
      image: "/WhatsApp Image 2025-09-15 at 15.00.25_e2a1c871.jpg",
    },
    {
      key: "florinDavid",
      image: "/WhatsApp Image 2025-09-15 at 18.20.58_5a61e249.jpg",
    },
    {
      key: "cristianBuceanu",
      image: "/WhatsApp Image 2025-09-15 at 18.29.57_cc9775a0.jpg",
    },
    {
      key: "robertoZatreanu",
      image: "/WhatsApp Image 2025-09-16 at 22.42.35_ca2df9ab.jpg",
    },
  ];

  const features = [
    { key: "certifications", icon: <Award size={48} /> },
    { key: "availability", icon: <Phone size={48} /> },
    { key: "confidentiality", icon: <Shield size={48} /> },
  ];

  const stats = [
    { key: "cases" },
    { key: "success" },
    { key: "availability" },
    { key: "experience" },
  ];

  return (
    <section
      ref={sectionRef}
      id="team"
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
              {t("team.title")}
            </span>
          </h2>

          <div className="mx-auto mb-8 h-px w-44 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

          <p className="text-lg sm:text-xl text-amber-100/75 max-w-4xl mx-auto leading-relaxed">
            {t("team.intro")}
          </p>
        </div>

        {/* Team members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="scroll-animate group rounded-3xl p-8 text-center
                         border border-amber-400/15 bg-black/40 backdrop-blur-[2px]
                         shadow-xl shadow-black/60 hover:shadow-2xl hover:shadow-black/80
                         hover:border-amber-300/35 transition-all duration-300"
            >
              <div className="relative mb-6">
                {/* gold aura */}
                <div className="absolute inset-0 rounded-full blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-300 bg-[radial-gradient(circle,rgba(212,175,55,0.35)_0%,rgba(0,0,0,0)_60%)]" />
                <img
                  src={member.image}
                  alt={t(`team.members.${member.key}.name`)}
                  className="relative w-32 h-32 rounded-full object-cover mx-auto
                             border border-amber-300/35 shadow-lg shadow-black/50"
                />
                {/* small “seal” */}
                <div className="absolute -bottom-2 -right-2 rounded-full border border-amber-300/35 bg-black/70 p-2 shadow-lg shadow-black/60">
                  <Star className="text-amber-300/90" size={16} />
                </div>
              </div>

              <h3 className="text-2xl font-serif font-semibold tracking-wide text-amber-100 mb-2">
                {t(`team.members.${member.key}.name`)}
              </h3>

              <p className="font-serif tracking-wide text-lg mb-3 bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-300 bg-clip-text text-transparent">
                {t(`team.members.${member.key}.role`)}
              </p>

              {/* <p className="text-amber-100/70 mb-2 font-semibold">
                {t(`team.members.${member.key}.experience`)}
              </p>

              <p className="text-amber-100/60 text-sm leading-relaxed">
                {t(`team.members.${member.key}.specialization`)}
              </p> */}

              {/* <div className="mt-6 p-4 rounded-xl border border-amber-400/15 bg-black/35">
                <p className="text-amber-100/70 text-sm font-semibold">
                  {t(`team.members.${member.key}.education`)}
                </p>
              </div> */}

              <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 scroll-animate">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl text-center p-8
                         border border-amber-400/15 bg-black/40 backdrop-blur-[2px]
                         shadow-xl shadow-black/60 hover:shadow-2xl hover:shadow-black/80
                         hover:border-amber-300/35 transition-all duration-300"
            >
              <div className="mx-auto mb-6 w-fit rounded-2xl p-4
                              border border-amber-300/30
                              bg-[radial-gradient(circle,rgba(212,175,55,0.28)_0%,rgba(0,0,0,0.75)_70%)]
                              shadow-lg shadow-black/50 text-amber-200">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-serif font-semibold tracking-wide text-amber-100 mb-4">
                {t(`team.features.${feature.key}.title`)}
              </h3>

              <p className="text-amber-100/70 leading-relaxed text-lg">
                {t(`team.features.${feature.key}.description`)}
              </p>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
            </div>
          ))}
        </div>

        {/* Results / stats */}
        <div className="mt-20 scroll-animate">
          <div className="rounded-3xl border border-amber-400/20 bg-black/45 backdrop-blur-[2px] p-12 shadow-2xl shadow-black/80">
            <h3 className="text-3xl sm:text-4xl font-serif font-semibold tracking-wide text-center mb-6">
              <span className="bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-300 bg-clip-text text-transparent">
                {t("team.results.title")}
              </span>
            </h3>

            <div className="mx-auto mb-12 h-px w-56 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

            <div className="grid md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-5xl font-serif font-semibold mb-2 text-amber-100 group-hover:scale-105 transition-transform duration-300">
                    {t(`team.results.stats.${stat.key}.value`)}
                  </div>
                  <p className="text-lg sm:text-xl text-amber-100/70">
                    {t(`team.results.stats.${stat.key}.label`)}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-amber-400/25 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
