import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Phone, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-2">
            <div className="flex items-center space-x-4 mb-6 group">
              <div className="relative">
                <img 
                  src="/WhatsApp Image 2025-09-13 at 23.18.21_b9f8716d.jpg" 
                  alt="Logo AMCER" 
                  className="h-16 w-16 object-contain rounded-full border-2 border-white/20 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Asociația de Mediere Comunitară
                </h3>
                <p className="text-lg text-blue-300 font-medium">Europeană a Romilor</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Promovăm dialogul, reconcilierea și integrarea în spiritul valorilor europene. 
              Suntem dedicați construirii unei societăți mai juste și inclusive pentru toți.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: '#', color: 'hover:text-blue-400' },
                { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
                { icon: Linkedin, href: '#', color: 'hover:text-blue-500' },
                { icon: Mail, href: 'mailto:medierecomunitara2025@gmail.com', color: 'hover:text-green-400' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className={`text-gray-300 ${social.color} transition-all duration-300 p-3 rounded-full hover:bg-white/10 transform hover:scale-110`}
                >
                  <social.icon size={28} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Link-uri Rapide
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Acasă', href: '#home' },
                { name: 'Despre Noi', href: '#about' },
                { name: 'Servicii', href: '#services' },
                { name: 'Echipa', href: '#team' },
                { name: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-all duration-300 text-lg hover:translate-x-2 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <Phone size={20} className="mt-1 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                <div>
                  <p className="text-gray-300 text-lg font-medium">+40 725 693 521</p>
                  <p className="text-gray-400">Luni - Duminica: 24/24</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <Mail size={20} className="mt-1 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                <div>
                  <p className="text-gray-300 text-lg font-medium">medierecomunitara2025@gmail.com</p>
                  <p className="text-gray-400">Răspundem în 24h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-lg flex items-center">
            © 2024 Asociația de Mediere Comunitară Europeană a Romilor. 
            <span className="mx-2">Făcut cu</span>
            <Heart className="text-red-400 mx-1 animate-pulse" size={16} />
            <span>pentru comunitate.</span>
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            {[
              'Politica de Confidențialitate',
              'Termeni și Condiții',
              'GDPR'
            ].map((link, index) => (
              <a 
                key={index}
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;