import React, { useEffect, useRef } from 'react';
import { Target, Award, Globe, Users, Heart, Shield } from 'lucide-react';

const About = () => {
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

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Despre Asociația Noastră
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Suntem o organizație dedicată promovării dialogului intercultural și rezolvării
            conflictelor prin metode alternative de mediere.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="scroll-animate">
            <h3 className="text-4xl font-bold text-gray-900 mb-8 text-glow">Misiunea Noastră</h3>
            <p className='text-gray-600 mb-8 leading-relaxed text-lg'>
              Scopul M.C.E.R. îl reprezintă desfășurarea de activități de rezolvare a conflictelor dintre cetățeni de etnie romă prin mediere comunitară extrajudiciară. Prin mediere pot fi soluționate dispute din orice domeniu: familie, afaceri, relația consumatori–agenți economici, comunitare, organizaționale, educație, mediu, intercultural, interconfesional etc.
            </p>
            <p className='text-gray-600 mb-8 leading-relaxed text-lg'>
              De asemenea, scopul M.C.E.R. îl reprezintă organizarea, dezvoltarea integrată și durabilă, modernizarea și reprezentarea publică a comunităților de romi, prin exercitarea deplină a drepturilor civile, economice, sociale, culturale și politice prevăzute de Constituția României, de legislația în vigoare, precum și de pactele și tratatele internaționale la care România este parte, precum și prin păstrarea, exprimarea, cultivarea și reconstrucția identității etno-culturale rome.
            </p>
              
            <div className="flex flex-wrap gap-4">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                <span className="font-semibold">Înființată în 2005</span>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                <span className="font-semibold">500+ Cazuri Rezolvate</span>
              </div>
            </div>
          </div>

          <div className="grid gap-8 scroll-animate">
            <div className="interactive-card bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg border border-blue-200">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-full mr-4">
                  <Target className="text-white" size={28} />
                </div>
                <h4 className="text-2xl font-semibold text-gray-900">Obiectivele Noastre</h4>
              </div>
              <ul className="text-gray-700 space-y-3 text-lg">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  Facilitarea dialogului intercultural
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  Rezolvarea conflictelor prin mediere
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  Promovarea drepturilor omului
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  Sprijinirea integrării comunitare
                </li>
              </ul>
            </div>

            <div className="interactive-card bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg border border-green-200">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-full mr-4">
                  <Award className="text-white" size={28} />
                </div>
                <h4 className="text-2xl font-semibold text-gray-900">Certificări</h4>
              </div>
              <ul className="text-gray-700 space-y-3 text-lg">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                  Mediatori autorizați de Ministerul Justiției
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                  Acreditare europeană pentru mediere
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                  Parteneri cu organizații internaționale
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* New photo gallery section */}
        <div className="mb-20 scroll-animate">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">Activitățile Noastre</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="interactive-card image-hover bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="/IMG-20250916-WA0002.jpg" 
                alt="Președintele în birou" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Consultații Profesionale</h4>
                <p className="text-gray-600">Oferim consultații specializate în mediere și rezolvarea conflictelor.</p>
              </div>
            </div>

            <div className="interactive-card image-hover bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="/IMG-20250916-WA0003.jpg" 
                alt="Conferință comunitară" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Conferințe Comunitare</h4>
                <p className="text-gray-600">Organizăm evenimente pentru educarea și informarea comunității.</p>
              </div>
            </div>

            <div className="interactive-card image-hover bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="/IMG-20250916-WA0010.jpg" 
                alt="Prezentare publică" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Prezentări Publice</h4>
                <p className="text-gray-600">Participăm activ la evenimente publice pentru promovarea medierii.</p>
              </div>
            </div>

            <div className="interactive-card image-hover bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="/IMG-20250916-WA0017.jpg" 
                alt="Dialog comunitar" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Dialog Comunitar</h4>
                <p className="text-gray-600">Facilităm dialogul între diferite grupuri din comunitate.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-animate">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white p-12 rounded-3xl shadow-2xl animate-gradient">
            <div className="flex items-center justify-center mb-8">
              <Globe size={64} className="animate-float" />
            </div>
            <h3 className="text-4xl font-bold text-center mb-6">Viziunea Europeană</h3>
            <p className="text-center max-w-5xl mx-auto text-xl leading-relaxed">
              Ne propunem să contribuim la construirea unei Europe unite în diversitate,
              unde fiecare comunitate își poate păstra identitatea culturală în același timp
              cu participarea activă la viața socială și economică europeană.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;