import React from 'react';
import { Target, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Despre Asociația Noastră</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Suntem o organizație dedicată promovării dialogului intercultural și rezolvării
            conflictelor prin metode alternative de mediere.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Misiunea Noastră</h3>
            <p className='text-gray-600 mb-6 leading-relaxed'>
              Scopul M.C.E.R. îl reprezintă desfășurarea de activități de rezolvare a conflictelor dintre cetățeni de etnie romă prin mediere comunitară extrajudiciară. Prin mediere pot fi soluționate dispute din orice domeniu: familie, afaceri, relația consumatori–agenți economici, comunitare, organizaționale, educație, mediu, intercultural, interconfesional etc.
              De asemenea, scopul M.C.E.R. îl reprezintă organizarea, dezvoltarea integrată și durabilă, modernizarea și reprezentarea publică a comunităților de romi, prin exercitarea deplină a drepturilor civile, economice, sociale, culturale și politice prevăzute de Constituția României, de legislația în vigoare, precum și de pactele și tratatele internaționale la care România este parte, precum și prin păstrarea, exprimarea, cultivarea și reconstrucția identității etno-culturale rome. </p>
              
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 text-white px-6 py-2 rounded-full">
                <span className="font-semibold">Înființată în 2020</span>
              </div>
              <div className="bg-green-600 text-white px-6 py-2 rounded-full">
                <span className="font-semibold">500+ Cazuri Rezolvate</span>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Target className="text-blue-600 mr-3" size={24} />
                <h4 className="text-xl font-semibold text-gray-900">Obiectivele Noastre</h4>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Facilitarea dialogului intercultural</li>
                <li>• Rezolvarea conflictelor prin mediere</li>
                <li>• Promovarea drepturilor omului</li>
                <li>• Sprijinirea integrării comunitare</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Award className="text-green-600 mr-3" size={24} />
                <h4 className="text-xl font-semibold text-gray-900">Certificări</h4>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Mediatori autorizați de Ministerul Justiției</li>
                <li>• Acreditare europeană pentru mediere</li>
                <li>• Parteneri cu organizații internaționale</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-xl">
          <div className="flex items-center justify-center mb-6">
            <Globe size={48} />
          </div>
          <h3 className="text-2xl font-bold text-center mb-4">Viziunea Europeană</h3>
          <p className="text-center max-w-4xl mx-auto text-lg leading-relaxed">
            Ne propunem să contribuim la construirea unei Europe unite în diversitate,
            unde fiecare comunitate își poate păstra identitatea culturală în același timp
            cu participarea activă la viața socială și economică europeană.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;