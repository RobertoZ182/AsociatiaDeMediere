import React, { useMemo, useState } from "react";
import EuropeMapPage from "../components/RomaMap.tsx";

type Contact = {
  id: string;
  photo: string;
  tara: string;
  oras?: string;
  nume: string;
  telefon?: string;
};

const GOLD = "#D4AF37";

export default function InfoUtil() {
  const contacts: Contact[] = useMemo(
    () => [
      {
        id: "c1",
        photo: "/contacts/PHOTO-2025-12-20-17-38-52.jpg",
        tara: "România", 
        nume: "Macelaru Constantin",
      },
      {
        id: "c2",
        photo: "/contacts/PHOTO-2025-12-20-17-39-20.jpg",
        tara: "România", 
        oras: "Targu Mureș",
        nume: "Rudi Barksa",
        
      },
      {
        id: "c3",
        photo: "/contacts/PHOTO-2025-12-20-17-40-05.jpg",
        tara: "România",
        nume: "Marcel Caldaras",
        oras: "Timisoara",
      },
      {
        id: "c4",
        photo: "/contacts/PHOTO-2025-12-20-17-40-33.jpg",
        tara: "Italia", 
        nume: "Tudor Comis",
        oras: "Milano",
      },
      {
        id: "c5",
        photo: "/contacts/PHOTO-2025-12-20-17-42-01.jpg",
        tara: "România",
        oras: "Strehaia",
        nume: "Mihai Inel",
      },
      {
        id: "c6",
        photo: "/contacts/PHOTO-2025-12-20-17-45-14.jpg",
        tara: "România", 
        oras: "Galati",
        nume: "Matei Mircea",
      },
      {
        id: "c7",
        photo: "/contacts/PHOTO-2025-12-20-18-02-33.jpg",
        tara: "România", 
        nume: "Gagiu Cornel",
      },
      {
        id: "c8",
        photo: "/contacts/PHOTO-2025-12-20-18-16-16.jpg",
        tara: "România", 
        oras: "Targu Mures",
        nume: "Gabi Gabor",
      },
      {
        id: "c9",
        photo: "/contacts/PHOTO-2025-12-20-18-22-09.jpg",
        tara: "România", 
        oras: "Dolj",
        nume: "Miclescu Ionel",
      },
      {
        id: "c10",
        photo: "/contacts/PHOTO-2025-12-20-18-34-06.jpg",
        tara: "România", 
        oras: "Iasi",
        nume: "Foica Mihalache Berculica",

      },
      {
        id: "c11",
        photo: "/contacts/PHOTO-2025-12-20-18-34-42.jpg",
        tara: "România", 
        nume: "Stanescu Catalin",
      },
      {
        id: "c12",
        photo: "/contacts/PHOTO-2025-12-21-22-46-36.jpg",
        tara: "România", 
        oras: "Arges",
        nume: "Panica Ion",
      },
      {
        id: "c13",
        photo: "/contacts/PHOTO-2025-12-21-22-47-25.jpg",
        tara: "Italia", 
        nume: "Zamfir Oance"
      },
    ],
    []
  );

  const tari = useMemo(() => {
    const s = new Set<string>();
    contacts.forEach((c) => s.add(c.tara));
    return ["Toate", ...Array.from(s).sort((a, b) => a.localeCompare(b))];
  }, [contacts]);

  const [filtruTara, setFiltruTara] = useState<string>("Toate");

  const filteredContacts = useMemo(() => {
    if (filtruTara === "Toate") return contacts;
    return contacts.filter((c) => c.tara === filtruTara);
  }, [contacts, filtruTara]);

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="mx-auto max-w-6xl px-4 py-10 space-y-12">
        <Section
          title="Legături cu oameni"
          subtitle="Filtrează persoanele după țara în care se află. (Am păstrat spații libere pentru completare.)"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <div className="flex items-center gap-3">
              <span className="text-sm text-white/70">Țara:</span>
              <div className="relative">
                <select
                  value={filtruTara}
                  onChange={(e) => setFiltruTara(e.target.value)}
                  className="bg-black text-white px-4 py-2 rounded-xl border outline-none appearance-none pr-10"
                  style={{ borderColor: "rgba(212,175,55,0.35)" }}
                >
                  {tari.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/60">
                  ▾
                </span>
              </div>
            </div>

            <div className="md:ml-auto text-xs text-white/60">
              {filtruTara === "Toate" ? (
                <span>
                  Afișate: <span style={{ color: GOLD }}>{contacts.length}</span> contacte
                </span>
              ) : (
                <span>
                  Afișate în <span style={{ color: GOLD }}>{filtruTara}</span>:{" "}
                  <span style={{ color: GOLD }}>{filteredContacts.length}</span>
                </span>
              )}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredContacts.map((c) => (
              <ContactCard key={c.id} contact={c}  />
            ))}
          </div>
        </Section>

        <EuropeMapPage />

        <Section title="Chat & Întrebări / Răspunsuri" subtitle="Spațiu pentru întrebări și răspunsuri utile.">
          <MissionChat />
        </Section>
      </main>

      <div className="mt-12 border-t" style={{ borderColor: "rgba(212,175,55,0.2)" }}>
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-white/60 flex flex-col md:flex-row gap-3 md:items-center">
          <span>© {new Date().getFullYear()} • Info utile • MISIUNEA</span>
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

function ContactCard({ contact }: { contact: Contact }) {
  return (
    <div className="rounded-2xl border overflow-hidden bg-black" style={{ borderColor: "rgba(212,175,55,0.25)" }}>
      <div className="relative">
        <img src={contact.photo} alt="Persoană de contact" className="w-full h-52 object-cover" />

        {/* eticheta sus: ȚARA (nu specialitatea) */}
        <div
          className="absolute left-3 top-3 text-xs px-3 py-1 rounded-full border backdrop-blur"
          style={{ borderColor: "rgba(212,175,55,0.45)", color: GOLD, backgroundColor: "rgba(0,0,0,0.55)" }}
        >
          {contact.tara}
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          {contact.nume && (
            <div>
              <div className="text-xs text-white/70">Nume</div>
              <div className="text-sm font-medium">{contact.nume}</div>
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {contact.oras && (
            <div>
              <div className="text-xs text-white/70">Oras</div>
              <div className="text-sm font-medium">{contact.oras}</div>
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-3">
          
         </div>
      </div>
    </div>
  );
}


function MissionChat() {
  const [messages, setMessages] = useState<{ role: "user" | "mod"; text: string }[]>([
    { role: "mod", text: "Bine ai venit! Pune o întrebare care ajută MISIUNEA." },
    { role: "mod", text: "Ex: „Unde găsesc ajutor pentru acte?”, „Cine oferă transport în zona X?”" },
  ]);

  const [input, setInput] = useState("");

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <div className="lg:col-span-2 rounded-2xl border p-4 md:p-5" style={{ borderColor: "rgba(212,175,55,0.25)" }}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Chat</h3>
          <span className="text-xs px-3 py-1 rounded-full border" style={{ borderColor: "rgba(212,175,55,0.35)", color: GOLD }}>
            Q&A
          </span>
        </div>

        <div className="mt-4 h-[320px] overflow-auto rounded-xl border p-3 space-y-3" style={{ borderColor: "rgba(212,175,55,0.2)" }}>
          {messages.map((m, idx) => (
            <div key={idx} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className="max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed border"
                style={{
                  borderColor: m.role === "user" ? "rgba(212,175,55,0.55)" : "rgba(255,255,255,0.12)",
                  backgroundColor: m.role === "user" ? "rgba(212,175,55,0.08)" : "rgba(255,255,255,0.05)",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") send();
            }}
            placeholder="Scrie o întrebare…"
            className="flex-1 rounded-xl border bg-black px-4 py-3 text-sm outline-none"
            style={{ borderColor: "rgba(212,175,55,0.25)" }}
          />
          <button onClick={send} className="rounded-xl px-5 py-3 font-semibold border" style={{ borderColor: "rgba(212,175,55,0.55)", color: GOLD }}>
            Trimite
          </button>
        </div>
      </div>

      <div className="rounded-2xl border p-5" style={{ borderColor: "rgba(212,175,55,0.25)" }}>
        <h3 className="text-lg font-semibold">Reguli scurte</h3>
        <ul className="mt-3 space-y-2 text-sm text-white/70 list-disc pl-5">
          <li>Întrebări clare: țara/orașul + ce cauți.</li>
          <li>Răspunsuri utile: nume, contact, locație, program.</li>
          <li>Fără spam. Totul pentru MISIUNEA.</li>
        </ul>

        <div
          className="mt-6 rounded-xl border p-4"
          style={{ borderColor: "rgba(212,175,55,0.2)", backgroundColor: "rgba(212,175,55,0.06)" }}
        >
          <div className="text-sm font-semibold" style={{ color: GOLD }}>
            Exemplu întrebare
          </div>
          <div className="mt-2 text-sm text-white/80">
            „Caut un contact pentru acte în Italia, zona Milano. Unde mă pot întâlni cu un rOM aproape?”
          </div>
        </div>
      </div>
    </div>
  );
}
