import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  MessageCircle,
  Users2,
  Home,
  Briefcase,
  GraduationCap,
  Shield,
} from "lucide-react";

const Services: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement | null>(null);

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

  // Unified aristocratic palette (black + gold), no rainbow gradients
  const services = [
    {
      icon: <MessageCircle size={36} />,
      title: t("services.cards.civil.title"),
      description: t("services.cards.civil.description"),
      features: [
        t("services.cards.civil.features.neighborhood"),
        t("services.cards.civil.features.contracts"),
        t("services.cards.civil.features.inheritance"),
      ],
    },
    {
      icon: <Home size={36} />,
      title: t("services.cards.family.title"),
      description: t("services.cards.family.description"),
      features: [
        t("services.cards.family.features.divorce"),
        t("services.cards.family.features.custody"),
        t("services.cards.family.features.intergenerational"),
      ],
    },
    {
      icon: <Briefcase size={36} />,
      title: t("services.cards.commercial.title"),
      description: t("services.cards.commercial.description"),
      features: [
        t("services.cards.commercial.features.partners"),
        t("services.cards.commercial.features.suppliers"),
        t("services.cards.commercial.features.litigation"),
      ],
    },
    {
      icon: <Users2 size={36} />,
      title: t("services.cards.community.title"),
      description: t("services.cards.community.description"),
      features: [
        t("services.cards.community.features.dialogue"),
        t("services.cards.community.features.ethnic"),
        t("services.cards.community.features.integration"),
      ],
    },
    {
      icon: <GraduationCap size={36} />,
      title: t("services.cards.school.title"),
      description: t("services.cards.school.description"),
      features: [
        t("services.cards.school.features.students"),
        t("services.cards.school.features.bullying"),
        t("services.cards.school.features.parentsSchool"),
      ],
    },
    {
      icon: <Shield size={36} />,
      title: t("services.cards.legal.title"),
      description: t("services.cards.legal.description"),
      features: [
        t("services.cards.legal.features.humanRights"),
        t("services.cards.legal.features.antiDiscrimination"),
        t("services.cards.legal.features.assistance"),
      ],
    },
  ];

  const processSteps = [
    {
      number: 1,
      titleKey: "services.process.steps.one.title",
      descriptionKey: "services.process.steps.one.description",
    },
    {
      number: 2,
      titleKey: "services.process.steps.two.title",
      descriptionKey: "services.process.steps.two.description",
    },
    {
      number: 3,
      titleKey: "services.process.steps.three.title",
      descriptionKey: "services.process.steps.three.description",
    },
    {
      number: 4,
      titleKey: "services.process.steps.four.title",
      descriptionKey: "services.process.steps.four.description",
    },
    {
      number: 5,
      titleKey: "services.process.steps.five.title",
      descriptionKey: "services.process.steps.five.description",
    },
    {
      number: 6,
      titleKey: "services.process.steps.six.title",
      descriptionKey: "services.process.steps.six.description",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black"
    >
      {/* Classic background: vignette + faint gold lines */}
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
              {t("services.title")}
            </span>
          </h2>

          <div className="mx-auto mb-8 h-px w-40 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

          <p className="text-lg sm:text-xl text-amber-100/75 max-w-4xl mx-auto leading-relaxed">
            {t("services.intro")}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="scroll-animate group rounded-2xl border border-amber-400/20 bg-black/45 backdrop-blur-[2px]
                         p-8 shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-black/70
                         hover:border-amber-300/40 transition-all duration-300"
            >
              {/* Icon badge */}
              <div className="mb-6 w-fit rounded-2xl border border-amber-300/30 bg-[radial-gradient(circle,rgba(212,175,55,0.25)_0%,rgba(0,0,0,0.75)_70%)] p-4">
                <div className="text-amber-200">{service.icon}</div>
              </div>

              <h3 className="text-2xl font-serif font-semibold tracking-wide text-amber-100 mb-4">
                {service.title}
              </h3>

              <p className="text-amber-100/70 mb-6 leading-relaxed text-lg">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="text-amber-100/70 flex items-start text-lg"
                  >
                    <span className="mt-2 w-2.5 h-2.5 rounded-full mr-4 flex-shrink-0 bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-300 shadow-[0_0_0_2px_rgba(212,175,55,0.15)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Subtle bottom flourish */}
              <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-amber-400/25 to-transparent" />
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="scroll-animate">
          <div className="rounded-3xl border border-amber-400/20 bg-black/40 backdrop-blur-[2px] p-10 shadow-2xl shadow-black/60">
            <h3 className="text-3xl sm:text-4xl font-serif font-semibold tracking-wide mb-6 text-center">
              <span className="bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-300 bg-clip-text text-transparent">
                {t("services.process.title")}
              </span>
            </h3>

            <div className="mx-auto mb-12 h-px w-56 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="text-center rounded-2xl border border-amber-400/15 bg-black/35 p-8
                             shadow-xl shadow-black/50 hover:border-amber-300/35 hover:bg-black/45
                             transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center
                                  border border-amber-300/30
                                  bg-[radial-gradient(circle,rgba(212,175,55,0.28)_0%,rgba(0,0,0,0.75)_70%)]
                                  text-amber-100 font-serif font-semibold text-2xl shadow-lg shadow-black/40">
                    {step.number}
                  </div>

                  <h4 className="font-serif font-semibold tracking-wide text-amber-100 mb-4 text-xl leading-tight">
                    {t(step.titleKey)}
                  </h4>

                  <p className="text-amber-100/70 leading-relaxed">
                    {t(step.descriptionKey)}
                  </p>

                  <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
