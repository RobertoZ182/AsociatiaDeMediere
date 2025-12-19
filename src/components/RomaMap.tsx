// src/pages/EuropeMapPage.tsx
import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { useTranslation } from "react-i18next";
import europeTopo from "../maps/europe-topo.json";

interface CountryInfo {
  name: string; // topo NAME
  titleKey: string;
  descriptionKey: string;
  profilePic?: string;
}

const COUNTRY_INFO: Record<string, CountryInfo> = {
  Romania: {
    name: "Romania",
    titleKey: "europeMap.countries.romania.title",
    descriptionKey: "europeMap.countries.romania.description",
    profilePic: "/WhatsApp Image 2025-09-15 at 15.00.25_e2a1c871.jpg",
  },
  Germany: {
    name: "Germany",
    titleKey: "europeMap.countries.germany.title",
    descriptionKey: "europeMap.countries.germany.description",
    profilePic: "/WhatsApp Image 2025-09-16 at 22.42.35_ca2df9ab.jpg",
  },
  France: {
    name: "France",
    titleKey: "europeMap.countries.france.title",
    descriptionKey: "europeMap.countries.france.description",
    profilePic: "/WhatsApp Image 2025-09-15 at 15.00.25_e2a1c871.jpg",
  },
  Italy: {
    name: "Italy",
    titleKey: "europeMap.countries.italy.title",
    descriptionKey: "europeMap.countries.italy.description",
    profilePic: "/WhatsApp Image 2025-09-29 at 14.02.43_dcdf0a10.jpg",
  },
  "United Kingdom": {
    name: "United Kingdom",
    titleKey: "europeMap.countries.uk.title",
    descriptionKey: "europeMap.countries.uk.description",
    profilePic: "/WhatsApp Image 2025-09-15 at 18.29.57_cc9775a0.jpg",
  },
  Ireland: {
    name: "Ireland",
    titleKey: "europeMap.countries.ireland.title",
    descriptionKey: "europeMap.countries.ireland.description",
    profilePic: "/WhatsApp Image 2025-12-19 at 21.55.40.jpeg",
  },
};

const EuropeMapPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState<CountryInfo | null>(
    null
  );

  // Helper: always pass country name for interpolation (safe for non-fallback too)
  const renderDescription = () => {
    if (!selectedCountry) return t("europeMap.infoPane.bodyIdle");
    return t(selectedCountry.descriptionKey, { country: selectedCountry.name });
  };

  const renderTitle = () => {
    if (!selectedCountry) return t("europeMap.infoPane.titleIdle");
    return t(selectedCountry.titleKey, { country: selectedCountry.name });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black flex items-center justify-center py-10 px-4">
      {/* Classic background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,128,0.10)_0%,rgba(0,0,0,0.92)_55%,rgba(0,0,0,1)_100%)]" />
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(90deg,rgba(212,175,55,0)_0%,rgba(212,175,55,0.10)_25%,rgba(212,175,55,0)_50%,rgba(212,175,55,0.08)_75%,rgba(212,175,55,0)_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[repeating-linear-gradient(135deg,rgba(212,175,55,0.14)_0px,rgba(212,175,55,0.14)_1px,transparent_1px,transparent_16px)]" />
      </div>

      <div className="relative z-10 max-w-6xl w-full rounded-3xl overflow-hidden grid lg:grid-cols-3 gap-0 border border-amber-400/15 bg-black/40 backdrop-blur-[2px] shadow-2xl shadow-black/70">
        {/* Map side */}
        <div className="lg:col-span-2 relative p-6 lg:p-10 border-b lg:border-b-0 lg:border-r border-amber-400/10">
          <h1 className="text-2xl lg:text-3xl font-serif font-semibold tracking-wide text-amber-100 mb-3">
            <span className="bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-300 bg-clip-text text-transparent">
              {t("europeMap.title")}
            </span>
          </h1>

          <div className="h-px w-44 bg-gradient-to-r from-transparent via-amber-400/45 to-transparent mb-6" />

          <p className="text-amber-100/70 mb-8">{t("europeMap.subtitle")}</p>

          <div className="relative">
            <div
              className="
                rounded-3xl p-4 shadow-2xl shadow-black/70
                border border-amber-400/15 bg-black/50
                transform perspective-[1200px] rotateX-12
              "
            >
              <ComposableMap
                projection="geoAzimuthalEqualArea"
                projectionConfig={{
                  rotate: [-20.0, -52.0, 0],
                  scale: 650,
                }}
                width={800}
                height={600}
                style={{ width: "100%", height: "auto" }}
              >
                <ZoomableGroup>
                  <Geographies geography={europeTopo as any}>
                    {({ geographies }: { geographies: any[] }) =>
                      geographies.map((geo: any) => {
                        const name = geo.properties.NAME as string;
                        const isActive = selectedCountry?.name === name;

                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            onClick={() => {
                              if (selectedCountry?.name === name) {
                                setSelectedCountry(null);
                                return;
                              }

                              const info: CountryInfo =
                                COUNTRY_INFO[name] ?? {
                                  name,
                                  titleKey: "europeMap.fallback.title",
                                  descriptionKey: "europeMap.fallback.description",
                                };

                              setSelectedCountry(info);
                            }}
                            style={{
                              default: {
                                fill: isActive ? "#d4af37" : "#ffffff",
                                stroke: "#000000",
                                strokeWidth: 0.6,
                                outline: "none",
                                transition: "all 150ms ease-out",
                                cursor: "pointer",
                                opacity: isActive ? 0.95 : 0.9,
                              },
                              hover: {
                                fill: "#f5d77a",
                                stroke: "#000000",
                                strokeWidth: 0.8,
                                outline: "none",
                                cursor: "pointer",
                                opacity: 1,
                              },
                              pressed: {
                                fill: "#b8921f",
                                stroke: "#000000",
                                strokeWidth: 0.8,
                                outline: "none",
                                opacity: 1,
                              },
                            }}
                          />
                        );
                      })
                    }
                  </Geographies>
                </ZoomableGroup>
              </ComposableMap>
            </div>

            {/* gold glow under the map */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-8 bg-amber-400/25 blur-3xl opacity-50 pointer-events-none" />
          </div>
        </div>

        {/* Info pane */}
        <div className="p-6 lg:p-8 flex flex-col justify-between bg-black/45">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-semibold tracking-wide text-amber-100 mb-3">
              {renderTitle()}
            </h2>

            <div className="h-px w-28 bg-gradient-to-r from-transparent via-amber-400/45 to-transparent mb-5" />

            <p className="text-amber-100/70 text-sm lg:text-base leading-relaxed mb-6">
              {renderDescription()}
            </p>

            {selectedCountry?.profilePic && (
              <div className="rounded-2xl overflow-hidden border border-amber-400/15 bg-black/35 shadow-xl shadow-black/60">
                <img
                  src={selectedCountry.profilePic}
                  alt={selectedCountry.name}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4">
                  <p className="text-amber-100/70 text-sm">
                    {selectedCountry.name}
                  </p>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-amber-400/25 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default EuropeMapPage;
