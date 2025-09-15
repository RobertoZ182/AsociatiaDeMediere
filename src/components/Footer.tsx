import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <img 
                src="/WhatsApp Image 2025-09-13 at 23.18.21_b9f8716d.jpg" 
                alt="Logo AMCER" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold">Asociația de Mediere Comunitară</h3>
                <p className="text-sm text-gray-300">Europeană a Romilor</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Promovăm dialogul, reconcilierea și integrarea în spiritul valorilor europene. 
              Suntem dedicați construirii unei societăți mai juste și inclusive pentru toți.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                <Linkedin size={24} />
              </a>
              <a href="mailto:office@amcer.ro" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Link-uri Rapide</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Acasă
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Despre Noi
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Servicii
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Echipa
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Phone size={16} className="mt-1 text-blue-400" />
                <div>
                  <p className="text-gray-300">+40 21 123 4567</p>
                  <p className="text-gray-400 text-sm">Luni - Vineri: 09:00-18:00</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Mail size={16} className="mt-1 text-blue-400" />
                <div>
                  <p className="text-gray-300">office@amcer.ro</p>
                  <p className="text-gray-400 text-sm">Răspundem în 24h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Asociația de Mediere Comunitară Europeană a Romilor. Toate drepturile rezervate.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Politica de Confidențialitate
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Termeni și Condiții
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              GDPR
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;