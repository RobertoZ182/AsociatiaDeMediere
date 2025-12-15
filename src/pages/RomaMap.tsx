// src/pages/EuropeMapPage.tsx
import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

import europeTopo from "../maps/europe-topo.json";

interface CountryInfo {
  name: string;
  title: string;
  description: string;
  stats?: string;
}

const COUNTRY_INFO: Record<string, CountryInfo> = {
  Romania: {
    name: "Romania",
    title: "Romania",
    description:
      "Member of the European Union since 2007. Known for its diverse culture and rich history.",
    stats: "Population ~19M",
  },
  Germany: {
    name: "Germany",
    title: "Germany",
    description: "Largest economy in Europe and a key member of the European Union.",
    stats: "Population ~84M",
  },
  France: {
    name: "France",
    title: "France",
    description:
      "A founding member of the EU, famous for its culture, gastronomy and history.",
    stats: "Population ~68M",
  },
  Italy: {
    name: "Italy",
    title: "Italy",
    description: "Mediterranean country known for its ancient history, art and cuisine.",
    stats: "Population ~59M",
  },
};

const EuropeMapPage: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<CountryInfo | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center py-10 px-4">
      <div className="max-w-6xl w-full bg-slate-900/80 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-3 gap-0">
        {/* Map side */}
        <div className="lg:col-span-2 relative p-6 lg:p-10">
          <h1 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Roma Europe Map
          </h1>
          <p className="text-slate-300 mb-6">
            Click a country to see more information.
          </p>

          <div className="relative">
            <div
              className="
                bg-slate-900 rounded-3xl p-4 shadow-3xl
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


                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            onClick={() => {
                              const name = geo.properties.NAME;

                             
                              // toggle off if clicking the same country
                              console.log("Clicked country:", name);
                              if (selectedCountry?.name === name) {
                                setSelectedCountry(null);
                                return;
                              }
                              const info: CountryInfo =
                                COUNTRY_INFO[name] ?? {
                                  name,
                                  title: name,
                                  description: "No additional information available yet.",
                                };

                              setSelectedCountry(info);
                            }}
                            style={{
                              default: {
                                fill:  "#1e293b",
                                stroke: "#0f172a",
                                strokeWidth: 0.5,
                                outline: "none",
                                transition: "all 150ms ease-out",
                                cursor: "pointer",
                               
                              },
                              hover: {
                                fill: "#38bdf8",
                                stroke: "#0f172a",
                                strokeWidth: 0.6,
                                outline: "none",
                                cursor: "pointer",
                              },
                              pressed: {
                                fill: "#0ea5e9",
                                stroke: "#0f172a",
                                strokeWidth: 0.6,
                                outline: "none",
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

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-8 bg-cyan-500/40 blur-3xl opacity-40 pointer-events-none" />
          </div>
        </div>

        {/* Info pane */}
        <div className="bg-slate-900/90 border-l border-slate-700 p-6 lg:p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              {selectedCountry?.title || "Click a country"}
            </h2>

            <p className="text-slate-300 text-sm lg:text-base leading-relaxed mb-4">
              {selectedCountry
                ? selectedCountry.description
                : "Click a country on the map to see details here."}
            </p>

            {selectedCountry?.stats && (
              <p className="inline-flex items-center text-sm font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/40">
                {selectedCountry.stats}
              </p>
            )}
          </div>

          <div className="mt-8 text-xs text-slate-500">
            <p>
              Tip: you can later hook this map to real data (GDP, population, projects,
              etc.) and show it here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EuropeMapPage;
