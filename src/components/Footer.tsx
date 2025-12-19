import React from "react";
import { useTranslation } from "react-i18next";
import { Facebook, Twitter, Linkedin, Mail, Phone, Heart } from "lucide-react";

const Footer: React.FC = () => {
  const { t } = useTranslation();



  const legalLinks = [{ key: "privacy" }, { key: "terms" }, { key: "gdpr" }];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-400" },
    { icon: Twitter, href: "#", color: "hover:text-sky-400" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-500" },
    {
      icon: Mail,
      href: "mailto:medierecomunitara2025@gmail.com",
      color: "hover:text-green-400",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      {/* background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-6 top-8 h-28 w-28 rounded-full bg-blue-500/20 blur-2xl md:left-10 md:top-10 md:h-32 md:w-32" />
        <div className="absolute bottom-8 right-6 h-28 w-28 rounded-full bg-purple-500/20 blur-2xl md:bottom-10 md:right-10 md:h-32 md:w-32" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* top grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* brand (full width on mobile, 2 cols on md) */}
          <div className="md:col-span-2">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-4">
              <div className="relative shrink-0">
                <img
                  src="/WhatsApp Image 2025-09-13 at 23.18.21_b9f8716d.jpg"
                  alt={t("header.logoAlt")}
                  className="h-14 w-14 rounded-full border-2 border-white/20 object-contain sm:h-16 sm:w-16"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 transition-opacity duration-300 hover:opacity-100" />
              </div>

              <div>
                <h3 className="text-xl font-bold sm:text-2xl">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {t("header.title")}
                  </span>
                </h3>
                <p className="text-base font-medium text-blue-300 sm:text-lg">
                  {t("header.subtitle")}
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
              {t("footer.description")}
            </p>

            {/* socials wrap nicely on small screens */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`inline-flex items-center justify-center rounded-full bg-white/5 p-3 text-gray-300 transition-all duration-300 hover:bg-white/10 ${social.color} active:scale-95`}
                  aria-label={`social-${index}`}
                >
                  <social.icon size={24} className="sm:h-7 sm:w-7" />
                </a>
              ))}
            </div>
          </div>

          {/* contact */}
          <div>
            <h4 className="text-xl font-bold sm:text-2xl">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t("footer.contact.title")}
              </span>
            </h4>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 sm:bg-transparent sm:p-0">
                <Phone size={20} className="mt-1 text-blue-400" />
                <div>
                  <p className="text-base font-semibold text-gray-200 sm:text-lg">
                    +40 725 693 521
                  </p>
                  <p className="text-sm text-gray-400 sm:text-base">
                    {t("footer.contact.schedule")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 sm:bg-transparent sm:p-0">
                <Mail size={20} className="mt-1 text-blue-400" />
                <div>
                  <p className="break-all text-base font-semibold text-gray-200 sm:break-normal sm:text-lg">
                    medierecomunitara2025@gmail.com
                  </p>
                  <p className="text-sm text-gray-400 sm:text-base">
                    {t("footer.contact.responseTime")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-7 md:flex-row md:items-center md:justify-between">
          <p className="text-center text-sm text-gray-400 sm:text-base md:text-left">
            <span className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 md:justify-start">
              <span>{t("footer.bottom.copyright")}</span>
              <span>{t("footer.bottom.madeWith")}</span>
              <Heart className="mx-1 animate-pulse text-red-400" size={16} />
              <span>{t("footer.bottom.forCommunity")}</span>
            </span>
          </p>

          {/* legal links wrap + bigger tap area on mobile */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="rounded-xl px-2 py-2 text-sm text-gray-400 transition-colors duration-300 hover:bg-white/5 hover:text-white sm:text-base"
              >
                {t(`footer.legal.${link.key}`)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
