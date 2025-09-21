import React, { useEffect, useRef } from 'react';
import { Mail, Phone, Award, Star, Users, Shield } from 'lucide-react';

const Team = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
      name: 'Florin Motoi',
      role: 'Președinte',
      experience: '30 ani experiență',
      specialization: 'Mediere familială și civilă',
      education: 'Master în Drept, Certificat în Mediere',
      image: '/WhatsApp Image 2025-09-15 at 15.00.25_e2a1c871.jpg',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Florin David',
      role: 'Vicepreședinte',
      experience: '12 ani experiență',
      specialization: 'Mediere comercială și comunitară',
      education: 'Licență în Psihologie, Certificat CNMR',
      image: '/WhatsApp Image 2025-09-15 at 18.20.58_5a61e249.jpg',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Cristian Buceanu',
      role: 'Coordonator Echipa Tehnică',
      experience: '10 ani experiență',
      specialization: 'Drepturile omului și antidiscriminare',
      education: 'Master în Drepturile Omului',
      image: '/WhatsApp Image 2025-09-15 at 18.29.57_cc9775a0.jpg',
      gradient: 'from-purple-500 to-violet-500'
    },
    {
      name: 'Roberto Zătreanu',
      role: 'Mediator Comunitar',
      experience: '8 ani experiență',
      specialization: 'Dialog intercultural și integrare',
      education: 'Licență în Sociologie, Certificat în Mediere',
      image: '/WhatsApp Image 2025-09-16 at 22.42.35_ca2df9ab.jpg',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const features = [
    {
      icon: <Award size={48} />,
      title: 'Certificări',
      description: 'Toți mediatorii noștri sunt certificați de Consiliul de Mediere din România și au certificări europene recunoscute.',
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100'
    },
    {
      icon: <Phone size={48} />,
      title: 'Disponibilitate',
      description: 'Suntem disponibili 24/7 pentru situații urgente și oferim consultații inițiale gratuite.',
      gradient: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-green-100'
    },
    {
      icon: <Shield size={48} />,
      title: 'Confidențialitate',
      description: 'Respectăm strict confidențialitatea și neutralitatea în toate procesele de mediere.',
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100'
    }
  ];

  return (
    <section ref={sectionRef} id="team" className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Echipa Noastră
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Profesioniști dedicați cu experiență vastă în mediere și rezolvarea conflictelor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <div key={index} className="scroll-animate interactive-card bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl border border-gray-100 group">
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-32 h-32 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 p-2 rounded-full">
                  <Star className="text-white" size={16} />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className={`bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent font-bold text-lg mb-3`}>
                {member.role}
              </p>
              <p className="text-gray-600 mb-2 font-medium">{member.experience}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{member.specialization}</p>
              
              <div className={`mt-6 p-4 bg-gradient-to-r ${member.gradient.replace('500', '50').replace('600', '100')} rounded-xl`}>
                <p className="text-gray-700 text-sm font-medium">{member.education}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 scroll-animate">
          {features.map((feature, index) => (
            <div key={index} className={`interactive-card bg-gradient-to-br ${feature.bgGradient} p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl border border-white/50`}>
              <div className={`bg-gradient-to-r ${feature.gradient} text-white p-4 rounded-2xl mx-auto mb-6 w-fit shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed text-lg">{feature.description}</p>
            </div>
          ))}
        </div>

        
        <div className="mt-20 scroll-animate">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white p-12 rounded-3xl shadow-2xl animate-gradient">
            <h3 className="text-4xl font-bold text-center mb-12">Rezultatele Noastre</h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                <p className="text-xl opacity-90">Cazuri Rezolvate</p>
              </div>
              <div className="group">
                <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
                <p className="text-xl opacity-90">Rata de Succes</p>
              </div>
              <div className="group">
                <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <p className="text-xl opacity-90">Disponibilitate</p>
              </div>
              <div className="group">
                <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">20</div>
                <p className="text-xl opacity-90">Ani Experiență</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;