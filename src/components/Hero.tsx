import React from 'react';
import { Scale, Users, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <img 
              src="/WhatsApp Image 2025-09-13 at 23.18.21_b9f8716d.jpg" 
              alt="Logo AMCER" 
              className="h-32 w-32 object-contain"
            />
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-blue-800">Mediere</span> și{' '}
            <span className="text-green-600">Reconciliere</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Asociația de Mediere Comunitară Europeană a Romilor oferă servicii profesionale 
            de mediere pentru rezolvarea conflictelor și promovarea înțelegerii în comunitate.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#services"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Serviciile Noastre
            </a>
            <a
              href="#contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-200"
            >
              Solicită Medierea
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-200">
                <Scale className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Justiție Echitabilă</h3>
              <p className="text-gray-600">
                Promovăm soluții juste și echitabile pentru toate părțile implicate în conflict.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-200">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Comunitate Unită</h3>
              <p className="text-gray-600">
                Construim punți de comunicare și înțelegere între diferite grupuri comunitare.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-200">
                <Heart className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Respect & Demnitate</h3>
              <p className="text-gray-600">
                Respectăm diversitatea culturală și promovăm demnitatea umană în toate acțiunile noastre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;