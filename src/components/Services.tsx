import React from 'react';
import { MessageCircle, Users2, Home, Briefcase, GraduationCap, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <MessageCircle size={32} />,
      title: 'Mediere Civilă',
      description: 'Rezolvarea conflictelor civile prin dialog constructiv și soluții win-win.',
      features: ['Conflicte de vecinătate', 'Dispute contractuale', 'Probleme de moștenire']
    },
    {
      icon: <Home size={32} />,
      title: 'Mediere Familială',
      description: 'Suport specializat pentru familii în situații de conflict sau criză.',
      features: ['Divorțuri amiabile', 'Custodia copiilor', 'Conflicte intergeneraționale']
    },
    {
      icon: <Briefcase size={32} />,
      title: 'Mediere Comercială',
      description: 'Soluții rapide și eficiente pentru disputele din mediul de afaceri.',
      features: ['Conflicte între parteneri', 'Dispute cu furnizori', 'Litigii comerciale']
    },
    {
      icon: <Users2 size={32} />,
      title: 'Mediere Comunitară',
      description: 'Facilitarea dialogului între grupuri diferite din comunitate.',
      features: ['Dialog intercultural', 'Conflicte etnice', 'Integrare socială']
    },
    {
      icon: <GraduationCap size={32} />,
      title: 'Mediere Școlară',
      description: 'Programe de mediere în instituțiile de învățământ.',
      features: ['Conflicte între elevi', 'Probleme de bullying', 'Dialog părinți-școală']
    },
    {
      icon: <Shield size={32} />,
      title: 'Consultanță Juridică',
      description: 'Informare și consiliere juridică gratuită pentru comunitatea romă.',
      features: ['Drepturile omului', 'Legislație antidiscriminare', 'Asistență juridică']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Serviciile Noastre</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferim o gamă completă de servicii de mediere și consultanță, 
            adaptate nevoilor specifice ale comunităților diverse.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Procesul de Mediere</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold text-lg">
                1
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Solicitarea</h4>
              <p className="text-sm text-gray-600">Contactarea mediatorului și programarea primei întâlniri</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 font-bold text-lg">
                2
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Evaluarea</h4>
              <p className="text-sm text-gray-600">Analiza situației și identificarea problemelor principale</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-600 font-bold text-lg">
                3
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Medierea</h4>
              <p className="text-sm text-gray-600">Facilitarea dialogului între părțile implicate</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600 font-bold text-lg">
                4
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Acordul</h4>
              <p className="text-sm text-gray-600">Formalizarea soluției găsite de comun acord</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;