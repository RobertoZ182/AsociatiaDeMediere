import React from "react";
import { useTranslation } from "react-i18next";
import { Facebook, Twitter, Linkedin, Mail, Phone, Heart } from "lucide-react";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const legalLinks = [{ key: "privacy" }, { key: "terms" }, { key: "gdpr" }];

  // keep icons, but unify hover to gold (aristocratic palette)
  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Mail, href: "mailto:medierecomunitara2025@gmail.com" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black text-amber-50">
      {/* Classic background: vignette + subtle gold sheen + faint lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,128,0.10)_0%,rgba(0,0,0,0.92)_55%,rgba(0,0,0,1)_100%)]" />
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(90deg,rgba(212,175,55,0)_0%,rgba(212,175,55,0.10)_25%,rgba(212,175,55,0)_50%,rgba(212,175,55,0.08)_75%,rgba(212,175,55,0)_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[repeating-linear-gradient(135deg,rgba(212,175,55,0.14)_0px,rgba(212,175,55,0.14)_1px,transparent_1px,transparent_16px)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* top grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* brand */}
          <div className="md:col-span-2">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-4">
              <div className="relative shrink-0">
                <img
                  src="/WhatsApp Image 2025-09-13 at 23.18.21_b9f8716d.jpg"
                  alt={t("header.logoAlt")}
                  className="h-14 w-14 rounded-full bg-black object-contain sm:h-16 sm:w-16
                             border border-amber-300/35 shadow-lg shadow-black/50"
                />
                {/* gold halo */}
                <div className="absolute -inset-2 rounded-full border border-amber-300/15" />
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.22)_0%,rgba(0,0,0,0)_60%)]" />
              </div>

              <div>
                <h3 className="text-xl font-serif font-semibold tracking-wide sm:text-2xl">
                  <span className="bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-300 bg-clip-text text-transparent">
                    {t("header.title")}
                  </span>
                </h3>
                <p className="text-base font-serif tracking-wide text-amber-100/75 sm:text-lg">
                  {t("header.subtitle")}
                </p>
              </div>
            </div>

            <div className="mt-6 h-px w-40 bg-gradient-to-r from-transparent via-amber-400/45 to-transparent" />

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-amber-100/70 sm:text-lg">
              {t("footer.description")}
            </p>

            {/* socials */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="inline-flex items-center justify-center rounded-full
                             border border-amber-400/15 bg-black/35 p-3
                             text-amber-100/70 transition-all duration-300
                             hover:bg-amber-300/10 hover:text-amber-100 hover:border-amber-300/35
                             active:scale-95 shadow-lg shadow-black/40"
                  aria-label={`social-${index}`}
                >
                  <social.icon size={24} className="sm:h-7 sm:w-7" />
                </a>
              ))}
            </div>
          </div>

          {/* contact */}
          <div>
            <h4 className="text-xl font-serif font-semibold tracking-wide sm:text-2xl">
              <span className="bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-300 bg-clip-text text-transparent">
                {t("footer.contact.title")}
              </span>
            </h4>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3 rounded-2xl border border-amber-400/15 bg-black/35 p-4 shadow-lg shadow-black/40">
                <Phone size={20} className="mt-1 text-amber-200/80" />
                <div>
                  <p className="text-base font-semibold text-amber-100 sm:text-lg">
                    +40 725 693 521
                  </p>
                  <p className="text-sm text-amber-100/60 sm:text-base">
                    {t("footer.contact.schedule")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-amber-400/15 bg-black/35 p-4 shadow-lg shadow-black/40">
                <Mail size={20} className="mt-1 text-amber-200/80" />
                <div>
                  <p className="break-all text-base font-semibold text-amber-100 sm:break-normal sm:text-lg">
                    medierecomunitara2025@gmail.com
                  </p>
                  <p className="text-sm text-amber-100/60 sm:text-base">
                    {t("footer.contact.responseTime")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-10 flex flex-col gap-5 border-t border-amber-400/15 pt-7 md:flex-row md:items-center md:justify-between">
          <p className="text-center text-sm text-amber-100/60 sm:text-base md:text-left">
            <span className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 md:justify-start">
              <span>{t("footer.bottom.copyright")}</span>
              <span>{t("footer.bottom.madeWith")}</span>
              <Heart className="mx-1 animate-pulse text-amber-300/80" size={16} />
              <span>{t("footer.bottom.forCommunity")}</span>
            </span>
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="rounded-xl px-2 py-2 text-sm text-amber-100/60
                           transition-all duration-300
                           hover:bg-amber-300/10 hover:text-amber-100
                           border border-transparent hover:border-amber-400/15
                           sm:text-base"
              >
                {t(`footer.legal.${link.key}`)}
              </a>
            ))}
          </div>
        </div>

        {/* small flourish line */}
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-amber-400/25 to-transparent" />
      </div>
    </footer>
  );
};

export default Footer;
