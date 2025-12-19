import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
          ? "bg-black/85 backdrop-blur-md shadow-2xl shadow-black/50 border-b border-amber-400/15"
          : "bg-black/70 backdrop-blur-sm shadow-xl shadow-black/40 border-b border-amber-400/10"
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
                src="/WhatsApp Image 2025-12-08 at 21.47.38_0f240e2f.jpg"
                alt={t("header.logoAlt")}
                className="h-12 w-12 object-contain rounded-full bg-black
                           border border-amber-300/35 shadow-lg shadow-black/40
                           transition-transform duration-300 group-hover:scale-105"
              />
              {/* gold halo */}
              <div className="absolute -inset-2 rounded-full border border-amber-300/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.22)_0%,rgba(0,0,0,0)_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="flex flex-col">
              <h1 className="text-lg font-serif font-semibold tracking-wide leading-tight">
                <span className="bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-300 bg-clip-text text-transparent">
                  {t("header.title")}
                </span>
              </h1>
              <span className="text-sm text-amber-100/75 font-serif tracking-wide">
                {t("header.subtitle")}
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-1 rounded-2xl border border-amber-400/15 bg-black/30 px-2 py-1">
              {navigation.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  className="relative px-4 py-2 font-serif tracking-wide text-amber-100/80
                             hover:text-amber-100 transition-all duration-300 rounded-xl
                             hover:bg-amber-300/10"
                >
                  <span className="relative z-10">{t(item.key)}</span>
                  {/* underline flourish */}
                  <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 rounded-xl border border-amber-400/15 bg-black/30
                         text-amber-100/80 hover:text-amber-100 hover:bg-amber-300/10
                         transition-all duration-300"
              aria-label="Toggle menu"
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
          <div className="rounded-b-2xl border-t border-amber-400/15 bg-black/85 backdrop-blur-md">
            <div className="px-2 pt-3 pb-4 space-y-1">
              {navigation.map((item, index) => (
                <Link
                  key={item.key}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl font-serif tracking-wide
                             text-amber-100/80 hover:text-amber-100
                             hover:bg-amber-300/10 transition-all duration-300 transform border border-transparent
                             hover:border-amber-400/15 ${
                               isMenuOpen
                                 ? "translate-x-0 opacity-100"
                                 : "translate-x-4 opacity-0"
                             }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {t(item.key)}
                </Link>
              ))}

              <div className="pt-3">
                <div className="mx-4 h-px bg-gradient-to-r from-transparent via-amber-400/35 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
