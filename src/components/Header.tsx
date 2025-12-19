import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { key: "nav.home", href: "/" },
    { key: "nav.infoUtil", href: "/infoUtil" },
    { key: "nav.programeSuport", href: "/programeSuport" },
    { key: "nav.transparenta", href: "/transparenta" },
    { key: "nav.fiiDonator", href: "/fiiDonator" },
    { key: "nav.inscrieTe", href: "/inscrieTe" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-white/80 backdrop-blur-sm shadow-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center space-x-4 group cursor-pointer"
          >
            <div className="relative">
              <img
                src="/WhatsApp Image 2025-09-13 at 23.18.21_b9f8716d.jpg"
                alt={t("header.logoAlt")}
                className="h-12 w-12 object-contain rounded-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="flex flex-col">
              <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                {t("header.title")}
              </h1>
              <span className="text-sm text-blue-700 font-medium">
                {t("header.subtitle")}
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-2">
              {navigation.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 rounded-xl hover:bg-blue-50 group"
                >
                  <span className="relative z-10">{t(item.key)}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 rounded-xl hover:bg-blue-50"
            >
              <div className="relative w-6 h-6">
                <Menu
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                  }`}
                />
                <X
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION DROPDOWN */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-gray-200 bg-white/95 backdrop-blur-md rounded-b-2xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item, index) => (
                <Link
                  key={item.key}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-all duration-300 transform ${
                    isMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
