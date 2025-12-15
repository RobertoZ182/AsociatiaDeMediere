import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Target, Award, Globe } from 'lucide-react';

const About: React.FC = () => {
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
              }, index * 200);
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

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('about.intro')}
          </p>
        </div>

        {/* Mission + Objectives / Certifications */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="scroll-animate">
            <h3 className="text-4xl font-bold text-gray-900 mb-8 text-glow">
              {t('about.missionTitle')}
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              {t('about.missionP1')}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              {t('about.missionP2')}
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                <span className="font-semibold">
                  {t('about.badges.founded')}
                </span>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                <span className="font-semibold">
                  {t('about.badges.casesResolved')}
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-8 scroll-animate">
            {/* Objectives Card */}
            <div className="interactive-card bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg border border-blue-200">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-full mr-4">
                  <Target className="text-white" size={28} />
                </div>
                <h4 className="text-2xl font-semibold text-gray-900">
                  {t('about.objectives.title')}
                </h4>
              </div>
              <ul className="text-gray-700 space-y-3 text-lg">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  {t('about.objectives.items.dialogue')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  {t('about.objectives.items.mediation')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  {t('about.objectives.items.humanRights')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  {t('about.objectives.items.communityIntegration')}
                </li>
              </ul>
            </div>

            {/* Certifications Card */}
            <div className="interactive-card bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg border border-green-200">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-full mr-4">
                  <Award className="text-white" size={28} />
                </div>
                <h4 className="text-2xl font-semibold text-gray-900">
                  {t('about.certifications.title')}
                </h4>
              </div>
              <ul className="text-gray-700 space-y-3 text-lg">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                  {t('about.certifications.items.ministry')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                  {t('about.certifications.items.european')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                  {t('about.certifications.items.partners')}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Photo gallery */}
        <div className="mb-20 scroll-animate">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">
            {t('about.activities.title')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="interactive-card image-hover bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/IMG-20250916-WA0002.jpg"
                alt={t('about.activities.cards.consultations.alt')}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {t('about.activities.cards.consultations.title')}
                </h4>
                <p className="text-gray-600">
                  {t('about.activities.cards.consultations.description')}
                </p>
              </div>
            </div>

            <div className="interactive-card image-hover bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/IMG-20250916-WA0003.jpg"
                alt={t('about.activities.cards.conferences.alt')}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {t('about.activities.cards.conferences.title')}
                </h4>
                <p className="text-gray-600">
                  {t('about.activities.cards.conferences.description')}
                </p>
              </div>
            </div>

            <div className="interactive-card image-hover bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/IMG-20250916-WA0010.jpg"
                alt={t('about.activities.cards.presentations.alt')}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {t('about.activities.cards.presentations.title')}
                </h4>
                <p className="text-gray-600">
                  {t('about.activities.cards.presentations.description')}
                </p>
              </div>
            </div>

            <div className="interactive-card image-hover bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/IMG-20250916-WA0017.jpg"
                alt={t('about.activities.cards.dialogue.alt')}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {t('about.activities.cards.dialogue.title')}
                </h4>
                <p className="text-gray-600">
                  {t('about.activities.cards.dialogue.description')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="scroll-animate">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white p-12 rounded-3xl shadow-2xl animate-gradient">
            <div className="flex items-center justify-center mb-8">
              <Globe size={64} className="animate-float" />
            </div>
            <h3 className="text-4xl font-bold text-center mb-6">
              {t('about.vision.title')}
            </h3>
            <p className="text-center max-w-5xl mx-auto text-xl leading-relaxed">
              {t('about.vision.text')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
