import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  MessageCircle,
  Users2,
  Home,
  Briefcase,
  GraduationCap,
  Shield,
} from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.scroll-animate');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <MessageCircle size={36} />,
      title: t('services.cards.civil.title'),
      description: t('services.cards.civil.description'),
      features: [
        t('services.cards.civil.features.neighborhood'),
        t('services.cards.civil.features.contracts'),
        t('services.cards.civil.features.inheritance'),
      ],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
      icon: <Home size={36} />,
      title: t('services.cards.family.title'),
      description: t('services.cards.family.description'),
      features: [
        t('services.cards.family.features.divorce'),
        t('services.cards.family.features.custody'),
        t('services.cards.family.features.intergenerational'),
      ],
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-50 to-rose-50',
    },
    {
      icon: <Briefcase size={36} />,
      title: t('services.cards.commercial.title'),
      description: t('services.cards.commercial.description'),
      features: [
        t('services.cards.commercial.features.partners'),
        t('services.cards.commercial.features.suppliers'),
        t('services.cards.commercial.features.litigation'),
      ],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
    },
    {
      icon: <Users2 size={36} />,
      title: t('services.cards.community.title'),
      description: t('services.cards.community.description'),
      features: [
        t('services.cards.community.features.dialogue'),
        t('services.cards.community.features.ethnic'),
        t('services.cards.community.features.integration'),
      ],
      gradient: 'from-purple-500 to-violet-500',
      bgGradient: 'from-purple-50 to-violet-50',
    },
    {
      icon: <GraduationCap size={36} />,
      title: t('services.cards.school.title'),
      description: t('services.cards.school.description'),
      features: [
        t('services.cards.school.features.students'),
        t('services.cards.school.features.bullying'),
        t('services.cards.school.features.parentsSchool'),
      ],
      gradient: 'from-orange-500 to-amber-500',
      bgGradient: 'from-orange-50 to-amber-50',
    },
    {
      icon: <Shield size={36} />,
      title: t('services.cards.legal.title'),
      description: t('services.cards.legal.description'),
      features: [
        t('services.cards.legal.features.humanRights'),
        t('services.cards.legal.features.antiDiscrimination'),
        t('services.cards.legal.features.assistance'),
      ],
      gradient: 'from-indigo-500 to-blue-500',
      bgGradient: 'from-indigo-50 to-blue-50',
    },
  ];

  const processSteps = [
    {
      number: 1,
      titleKey: 'services.process.steps.one.title',
      descriptionKey: 'services.process.steps.one.description',
      color: 'from-blue-500 to-blue-600',
    },
    {
      number: 2,
      titleKey: 'services.process.steps.two.title',
      descriptionKey: 'services.process.steps.two.description',
      color: 'from-green-500 to-green-600',
    },
    {
      number: 3,
      titleKey: 'services.process.steps.three.title',
      descriptionKey: 'services.process.steps.three.description',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      number: 4,
      titleKey: 'services.process.steps.four.title',
      descriptionKey: 'services.process.steps.four.description',
      color: 'from-purple-500 to-purple-600',
    },
    {
      number: 5,
      titleKey: 'services.process.steps.five.title',
      descriptionKey: 'services.process.steps.five.description',
      color: 'from-red-500 to-pink-500',
    },
    {
      number: 6,
      titleKey: 'services.process.steps.six.title',
      descriptionKey: 'services.process.steps.six.description',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('services.intro')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`scroll-animate interactive-card bg-gradient-to-br ${service.bgGradient} p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-white/50 backdrop-blur-sm`}
            >
              <div
                className={`bg-gradient-to-r ${service.gradient} text-white p-4 rounded-2xl mb-6 w-fit`}
              >
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="text-gray-600 flex items-center text-lg"
                  >
                    <span
                      className={`w-3 h-3 bg-gradient-to-r ${service.gradient} rounded-full mr-4 flex-shrink-0`}
                    ></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="scroll-animate">
          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
            <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('services.process.title')}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="text-center interactive-card bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100"
                >
                  <div
                    className={`bg-gradient-to-r ${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl shadow-lg`}
                  >
                    {step.number}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-4 text-xl leading-tight">
                    {t(step.titleKey)}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {t(step.descriptionKey)}
                  </p>
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