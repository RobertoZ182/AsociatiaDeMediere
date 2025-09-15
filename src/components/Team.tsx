import React from 'react';
import { Mail, Phone, Award } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Elena Popescu',
      role: 'Mediator Principal',
      experience: '15 ani experiență',
      specialization: 'Mediere familială și civilă',
      education: 'Master în Drept, Certificat în Mediere',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Marius Ionescu',
      role: 'Mediator Senior',
      experience: '12 ani experiență',
      specialization: 'Mediere comercială și comunitară',
      education: 'Licență în Psihologie, Certificat CNMR',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Ana Georgescu',
      role: 'Consilier Juridic',
      experience: '10 ani experiență',
      specialization: 'Drepturile omului și antidiscriminare',
      education: 'Master în Drepturile Omului',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b812b833?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Radu Stanciu',
      role: 'Mediator Comunitar',
      experience: '8 ani experiență',
      specialization: 'Dialog intercultural și integrare',
      education: 'Licență în Sociologie, Certificat în Mediere',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Echipa Noastră</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profesioniști dedicați cu experiență vastă în mediere și rezolvarea conflictelor, 
            angajați să ofere servicii de cea mai înaltă calitate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
              <p className="text-sm text-gray-600 mb-3">{member.experience}</p>
              <p className="text-sm text-gray-700 mb-3 font-medium">{member.specialization}</p>
              <div className="border-t border-gray-200 pt-3">
                <p className="text-xs text-gray-500">{member.education}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <Award className="text-blue-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Certificări</h3>
            <p className="text-gray-600">
              Toți mediatorii noștri sunt certificați de Consiliul de Mediere 
              din România și au certificări europene recunoscute.
            </p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <Phone className="text-green-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Disponibilitate</h3>
            <p className="text-gray-600">
              Suntem disponibili 24/7 pentru situații urgente și oferim 
              consultații inițiale gratuite.
            </p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <Mail className="text-purple-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Confidențialitate</h3>
            <p className="text-gray-600">
              Respectăm strict confidențialitatea și neutralitatea 
              în toate procesele de mediere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;