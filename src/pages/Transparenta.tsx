import React, { useMemo, useState } from "react";
import Gantt2025Homepage from "../components/GanttDiagramm";

const GOLD = "#D4AF37";

type AssistItem = {
  id: string;
  tara: string;
  regiune: string;
  tip: string; // ex: Acte, Muncă, Sănătate, Juridic, Social
  descriere: string;
};

type AuthorityContact = {
  id: string;
  tara: string;
  oras: string;
  institutie: string; // ex: Primărie, Prefectură, Poliție, Ambasadă/Consulat
  rol: string; // ex: Contact general, Programări, Urgențe
  telefon?: string;
  email?: string;
  website?: string;
  note?: string;
};

export default function Transparenta() {
  const asistenta: AssistItem[] = useMemo(
    () => [
      {
        id: "a1",
        tara: "Italia",
        regiune: "Lombardia",
        tip: "Acte / Rezidență",
        descriere: "Ghid și sprijin pentru rezidență, cod fiscal, înscrieri. (de completat)",
      },
      {
        id: "a2",
        tara: "Germania",
        regiune: "Bayern",
        tip: "Muncă / Contracte",
        descriere: "Sprijin pentru căutare job, contract, drepturi. (de completat)",
      },
      {
        id: "a3",
        tara: "Franța",
        regiune: "Île-de-France",
        tip: "Social / Integrare",
        descriere: "Îndrumare pentru servicii sociale și integrare. (de completat)",
      },
    ],
    []
  );

  // 7.2 — Autorități locale & specialiști
  const autoritati: AuthorityContact[] = useMemo(
    () => [
      {
        id: "c1",
        tara: "Italia",
        oras: "Milano",
        institutie: "Primărie / Comune",
        rol: "Informații generale",
        telefon: "(de completat)",
        email: "(de completat)",
        website: "(de completat)",
        note: "Program / adresă / acte necesare. (de completat)",
      },
      {
        id: "c2",
        tara: "Germania",
        oras: "München",
        institutie: "Poliție / Urgențe",
        rol: "Urgențe",
        telefon: "(de completat)",
        note: "Număr urgență / secție locală. (de completat)",
      },
      {
        id: "c3",
        tara: "România",
        oras: "București",
        institutie: "Ambasadă / Consulat",
        rol: "Programări / Documente",
        telefon: "(de completat)",
        email: "(de completat)",
        website: "(de completat)",
        note: "Programări online / listă servicii. (de completat)",
      },
    ],
    []
  );

  const tariAsistenta = useMemo(() => {
    const s = new Set<string>();
    asistenta.forEach((a) => s.add(a.tara));
    return ["Toate", ...Array.from(s).sort((x, y) => x.localeCompare(y))];
  }, [asistenta]);

  const tariAutoritati = useMemo(() => {
    const s = new Set<string>();
    autoritati.forEach((a) => s.add(a.tara));
    return ["Toate", ...Array.from(s).sort((x, y) => x.localeCompare(y))];
  }, [autoritati]);

  const [filtruTaraAsist, setFiltruTaraAsist] = useState("Toate");
  const [filtruTaraAut, setFiltruTaraAut] = useState("Toate");

  const asistentaFiltrata = useMemo(() => {
    if (filtruTaraAsist === "Toate") return asistenta;
    return asistenta.filter((x) => x.tara === filtruTaraAsist);
  }, [asistenta, filtruTaraAsist]);

  const autoritatiFiltrate = useMemo(() => {
    if (filtruTaraAut === "Toate") return autoritati;
    return autoritati.filter((x) => x.tara === filtruTaraAut);
  }, [autoritati, filtruTaraAut]);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Transparență & Plan
          
        </h1>
        <p className="mt-2 text-white/70 max-w-3xl">
          Aici găsești planificarea + resurse utile pentru asistență pe țări/zone și contacte de autorități &
          specialiști.
        </p>
      </div>

      {/* Componenta existentă */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "rgba(212,175,55,0.25)" }}>
          <Gantt2025Homepage />
        </div>
      </div>

      {/* 7.1 */}
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-12">
        <Section
          title="Asistență specializată (în funcție de țară / zonă / regiune)"
          subtitle="Filtrează după țară și completează ulterior detaliile pentru fiecare regiune."
        >
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <div className="flex items-center gap-3">
              <span className="text-sm text-white/70">Țara:</span>
              <div className="relative">
                <select
                  value={filtruTaraAsist}
                  onChange={(e) => setFiltruTaraAsist(e.target.value)}
                  className="bg-black text-white px-4 py-2 rounded-xl border outline-none appearance-none pr-10"
                  style={{ borderColor: "rgba(212,175,55,0.35)" }}
                >
                  {tariAsistenta.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/60">▾</span>
              </div>
            </div>

            <div className="md:ml-auto text-xs text-white/60">
              Afișate: <span style={{ color: GOLD }}>{asistentaFiltrata.length}</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {asistentaFiltrata.map((a) => (
              <div
                key={a.id}
                className="rounded-2xl border p-5 bg-black"
                style={{ borderColor: "rgba(212,175,55,0.25)" }}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-semibold" style={{ color: GOLD }}>
                    {a.tara}
                  </div>
                  <span
                    className="text-[11px] px-3 py-1 rounded-full border"
                    style={{ borderColor: "rgba(255,255,255,0.16)", color: "rgba(255,255,255,0.8)" }}
                  >
                    {a.tip}
                  </span>
                </div>

                <div className="mt-3 text-sm text-white/80">
                  <div className="text-white/60 text-xs">Zonă / regiune</div>
                  <div className="mt-1">{a.regiune}</div>
                </div>

                <div className="mt-4">
                  <div className="text-white/60 text-xs">Descriere</div>
                  <div className="mt-1 text-sm text-white/80">{a.descriere}</div>
                </div>

                
              </div>
            ))}
          </div>
        </Section>

        <Section
          title=" Date de contact: autorități locale & specialiști"
          subtitle="Listă structurată pe țări și orașe. Completează câmpurile unde scrie (de completat)."
        >
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <div className="flex items-center gap-3">
              <span className="text-sm text-white/70">Țara:</span>
              <div className="relative">
                <select
                  value={filtruTaraAut}
                  onChange={(e) => setFiltruTaraAut(e.target.value)}
                  className="bg-black text-white px-4 py-2 rounded-xl border outline-none appearance-none pr-10"
                  style={{ borderColor: "rgba(212,175,55,0.35)" }}
                >
                  {tariAutoritati.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/60">▾</span>
              </div>
            </div>

            <div className="md:ml-auto text-xs text-white/60">
              Afișate: <span style={{ color: GOLD }}>{autoritatiFiltrate.length}</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
            {autoritatiFiltrate.map((c) => (
              <div
                key={c.id}
                className="rounded-2xl border p-5 bg-black"
                style={{ borderColor: "rgba(212,175,55,0.25)" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold" style={{ color: GOLD }}>
                      {c.institutie}
                    </div>
                    <div className="mt-1 text-sm text-white/70">
                      {c.tara} • {c.oras}
                    </div>
                  </div>
                  <span
                    className="text-[11px] px-3 py-1 rounded-full border"
                    style={{ borderColor: "rgba(255,255,255,0.16)", color: "rgba(255,255,255,0.8)" }}
                  >
                    {c.rol}
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                  
                </div>

                <button
                  className="mt-5 w-full rounded-xl py-3 font-semibold border"
                  style={{ borderColor: "rgba(212,175,55,0.55)", color: GOLD }}
                >
                  Deschide / Copiază contact
                </button>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <div className="mt-8 border-t" style={{ borderColor: "rgba(212,175,55,0.2)" }}>
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-white/60">
          © {new Date().getFullYear()} • Transparență • MISIUNEA
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
        {subtitle ? <p className="text-white/70 max-w-4xl">{subtitle}</p> : null}
        <div className="h-[2px] w-20 rounded-full" style={{ backgroundColor: "rgba(212,175,55,0.6)" }} />
      </div>

      <div className="rounded-2xl border p-5 md:p-6" style={{ borderColor: "rgba(212,175,55,0.25)" }}>
        {children}
      </div>
    </section>
  );
}

function PlaceholderField({ label }: { label: string }) {
  return (
    <div className="space-y-1">
      <div className="text-xs text-white/60">{label}</div>
      <div className="rounded-xl border px-3 py-2 text-sm text-white/80" style={{ borderColor: "rgba(212,175,55,0.25)" }}>
        (de completat)
      </div>
    </div>
  );
}

function ValueField({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <div className="text-xs text-white/60">{label}</div>
      <div className="rounded-xl border px-3 py-2 text-sm text-white/80" style={{ borderColor: "rgba(212,175,55,0.25)" }}>
        {value}
      </div>
    </div>
  );
}
