import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, Award, Star, Users, Shield } from 'lucide-react';

const Team: React.FC = () => {
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

  const teamMembers = [
    {
      key: 'florinMotoi',
      image: '/WhatsApp Image 2025-09-15 at 15.00.25_e2a1c871.jpg',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      key: 'florinDavid',
      image: '/WhatsApp Image 2025-09-15 at 18.20.58_5a61e249.jpg',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      key: 'cristianBuceanu',
      image: '/WhatsApp Image 2025-09-15 at 18.29.57_cc9775a0.jpg',
      gradient: 'from-purple-500 to-violet-500',
    },
    {
      key: 'robertoZatreanu',
      image: '/WhatsApp Image 2025-09-16 at 22.42.35_ca2df9ab.jpg',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const features = [
    {
      key: 'certifications',
      icon: <Award size={48} />,
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
    },
    {
      key: 'availability',
      icon: <Phone size={48} />,
      gradient: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-green-100',
    },
    {
      key: 'confidentiality',
      icon: <Shield size={48} />,
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100',
    },
  ];

  const stats = [
    { key: 'cases' },
    { key: 'success' },
    { key: 'availability' },
    { key: 'experience' },
  ];

  return (
    <section
      ref={sectionRef}
      id="team"
      className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            {t('team.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('team.intro')}
          </p>
        </div>

        {/* Team members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="scroll-animate interactive-card bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl border border-gray-100 group"
            >
              <div className="relative mb-6">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                ></div>
                <img
                  src={member.image}
                  alt={t(`team.members.${member.key}.name`)}
                  className="relative w-32 h-32 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 p-2 rounded-full">
                  <Star className="text-white" size={16} />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t(`team.members.${member.key}.name`)}
              </h3>
              <p
                className={`bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent font-bold text-lg mb-3`}
              >
                {t(`team.members.${member.key}.role`)}
              </p>
              <p className="text-gray-600 mb-2 font-medium">
                {t(`team.members.${member.key}.experience`)}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t(`team.members.${member.key}.specialization`)}
              </p>

              <div
                className={`mt-6 p-4 bg-gradient-to-r ${member.gradient
                  .replace('500', '50')
                  .replace('600', '100')} rounded-xl`}
              >
                <p className="text-gray-700 text-sm font-medium">
                  {t(`team.members.${member.key}.education`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 scroll-animate">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`interactive-card bg-gradient-to-br ${feature.bgGradient} p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl border border-white/50`}
            >
              <div
                className={`bg-gradient-to-r ${feature.gradient} text-white p-4 rounded-2xl mx-auto mb-6 w-fit shadow-lg`}
              >
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t(`team.features.${feature.key}.title`)}
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t(`team.features.${feature.key}.description`)}
              </p>
            </div>
          ))}
        </div>

        {/* Results / stats */}
        <div className="mt-20 scroll-animate">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white p-12 rounded-3xl shadow-2xl animate-gradient">
            <h3 className="text-4xl font-bold text-center mb-12">
              {t('team.results.title')}
            </h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                    {t(`team.results.stats.${stat.key}.value`)}
                  </div>
                  <p className="text-xl opacity-90">
                    {t(`team.results.stats.${stat.key}.label`)}
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

export default Team;
