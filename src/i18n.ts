// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ['rom', 'ro', 'en', 'de', 'fr', 'it'],
    load: 'languageOnly',
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },

    resources: {
      // 🌿 ROMANI (Romani Chib)
      rom: {
        translation: {
          header: {
            title: "Asociatia le Medijarelpe Comunitară",
            subtitle: "Europake e Romengo",
            logoAlt: "Logo AMCER",
          },
          nav: {
            home: "Khere",
            about: "Pa ame",
            services: "Serviciura",
            team: "Ekipá",
            contact: "Kontaktos",
          },
          hero: {
            title: {
              mediation: "Medijacia",
              and: "thaj",
              reconciliation: "Rekonsiliacia",
            },
            description:
              "Asociatia le Medijarelpe Comunitară Europako e Romengo oferdel servicia profesionale le medijarelpe ando komuniteto, te phandel konflikti thaj te promovinel pajavipe ande komuniteto.",
            cta: {
              services: "Amare servicia",
              request: "Kerel cererea pe medijacia",
            },
            cards: {
              justice: {
                title: "Ravno Zakonimos",
                text: "Promovias amende solucii cino thaj pravoza sare părtilor ande konfliktos.",
              },
              community: {
                title: "Komuniteto Jekhto",
                text: "Keramas punți le komunikacias thaj pajavipes maśkar diferite gruppura ando komuniteto.",
              },
              respect: {
                title: "Respekt thaj Dignitate",
                text: "Respektisas e kulturane diversiteto thaj promovias e dignitate manuśikano ande sa amare akcione.",
              },
            },
          },
          about: {
            title: "Pa Amaro Asociația",
            intro:
              "S’amari organizacia si dedicimi te promovinel o dialogo interculturalo thaj te rezolvil pe konflikti pre alternativo metodura le medijacias.",
            missionTitle: "Amaro Misio",
            missionP1:
              "O skopos le M.C.E.R.-esko si te kerel aktivitate te rezolvil konflikti maśkar romane cetățenura prin komunitarutni, extrajudiciara medijacia. Pre medijacia shaj te soluciazhon konflikti ando sa domenura: familijako, bizniso, relacia maśkar konsumatorura thaj agenti ekonomiko, komunitarutne, organizacionalne, edukacia, mediul, interculturalo, interkonfesionalo, thaj aver.",
            missionP2:
              "Sa o skopos le M.C.E.R.-esko si te organizia, te razviel integrime thaj durabile, te moderniziel thaj te reprezentiel publiko romane komunitetura, zural te exersia pe shai full le civilne, ekonomiko, socialo, kulturale thaj politiko dreptura, sar si ande Constitucia le Romaniako, ande legia în vigoare thaj ande internacionale trataturi kaj Rumani si parte, sar thaj prin păstrarea, exprimarea thaj kulturane romane identiteto.",
            badges: {
              founded: "Inființime ando 2005",
              casesResolved: "500+ Konflikti rezolvimasa",
            },
            objectives: {
              title: "Amare Obiective",
              items: {
                dialogue: "Te fasilitel o dialogo interculturalo",
                mediation: "Te rezolvil konflikti prin medijacia",
                humanRights: "Te promovinel e drepta manuśikane",
                communityIntegration: "Te pomagel ande integracia komunitarutni",
              },
            },
            certifications: {
              title: "Certificaturi",
              items: {
                ministry: "Mediatori autorizime le Ministero le Justićiako",
                european: "Europako akreditacia ande medijacia",
                partners: "Partneria thaj organizaciura internacionale",
              },
            },
            activities: {
              title: "Amare Aktivitate",
              cards: {
                consultations: {
                  alt: "Presedinte ando birovo",
                  title: "Konsultacie Profesionale",
                  description:
                    "Deldas konsultacie specializime ande medijacia thaj rezolvime konflikti.",
                },
                conferences: {
                  alt: "Konferenca komunitarutni",
                  title: "Konference Komunitarutne",
                  description:
                    "Organiziamas eventura te edukia thaj te informia o komuniteto.",
                },
                presentations: {
                  alt: "Prezentacia publiko",
                  title: "Prezentacia Publiko",
                  description:
                    "Lavajas aktiv ande publiko evenimentura te promovinel o medijacia.",
                },
                dialogue: {
                  alt: "Dialogo komunitarutno",
                  title: "Dialogo Komunitarutno",
                  description:
                    "Fasilitilam dialogo maśkar diferite gruppura ando komuniteto.",
                },
              },
            },
            vision: {
              title: "Europako Vizie",
              text:
                "Amende si te den amari kontribucia te kerel jekh Europa jekhate ande diversiteto, kaj sa komunitetura den shai te păstrinel pe kulturane identiteto, ande sama vreme te partecipinel aktiv ande socialo thaj ekonomiko dživia Europako.",
            },
          },
          services: {
            title: "Amare Serviciura",
            intro:
              "Denam jekh kompleto gama le medijacia thaj konsultacia servicia, adaptime pe nevoia specifike le diferite komunitetura.",
            cards: {
              civil: {
                title: "Civilo Medijacia",
                description:
                  "Rezolvime civilo konflikti prin konstruktiv dialogo thaj solucii „win-win”.",
                features: {
                  neighborhood: "Konflikti maśkar amari vecinura",
                  contracts: "Dispute kontraktiale",
                  inheritance: "Probleme pe moștenire",
                },
              },
              family: {
                title: "Familialo Medijacia",
                description:
                  "Suporti specializime pe familije ande situacii de konflikt o kriza.",
                features: {
                  divorce: "Divorțuri amiabile",
                  custody: "Custodia e čhavende",
                  intergenerational: "Konflikti maśkar generaciura",
                },
              },
              commercial: {
                title: "Komerciale Medijacia",
                description:
                  "Solucii rapid thaj efikace pe dispute ando bizniso.",
                features: {
                  partners: "Konflikti maśkar parteneri",
                  suppliers: "Dispute le furnizorenca",
                  litigation: "Litigii komerciale",
                },
              },
              community: {
                title: "Komunitarutni Medijacia",
                description:
                  "Fasilitilam dialogo maśkar diferite gruppura ando komuniteto.",
                features: {
                  dialogue: "Dialogo interculturalo",
                  ethnic: "Konflikti etnice",
                  integration: "Integracia socialo",
                },
              },
              school: {
                title: "Skolako Medijacia",
                description:
                  "Programura le medijacias ande instituciura le edukaciasko.",
                features: {
                  students: "Konflikti maśkar elevura",
                  bullying: "Probleme le bullyingosko",
                  parentsSchool: "Dialogo maśkar romni thaj škola",
                },
              },
              legal: {
                title: "Konsultacia Juridiko",
                description:
                  "Informacia thaj konsultacia juridiko, mufol, pe romane komunitetura.",
                features: {
                  humanRights: "Dreptura manuśikane",
                  antiDiscrimination: "Legislatia antidiscriminacia",
                  assistance: "Asistenta juridiko",
                },
              },
            },
            process: {
              title: "Proceso le Medijacias",
              steps: {
                one: {
                  title: "Programe pe prevenicia le delinquenței juvenilo",
                  description:
                    "Ateliere ande șkoluri pe tineri rromura pe tema legia, drepta thaj responsabiliteta. Kampania „Tinerii thaj legia” ande vulnerabile komunitetura. Proiectura le mentoratos maśkar tineri rromura thaj jandarmi/polițiști rrom.",
                },
                two: {
                  title: "Komunitarutni medijacia ande lokale konflikti",
                  description:
                    "Formacia le medijarelpe komunitarutne rrome pe extrajudiciara intervenicia. Medijacia maśkar cetățenura thaj autoritetura ande tensionime zonura. Intervencie ande kazuri le abuzura va diskriminacia instituționalo.",
                },
                three: {
                  title: "Šukarrel pe relacia maśkar rromura thaj poliția",
                  description:
                    "Proiectura le vzaipepe pe vovipen: „Poliția thaj komunitetea rromă”. Direkt dialogura maśkar rromane liderura thaj reprezentante le IPJ va Jandarmerie. Promovicia le diversiteto ande strukture le MAI.",
                },
                four: {
                  title: "Kampania le edukacias civiko thaj legiko",
                  description:
                    "Dreptura le cetățenura vs obligațiura față de stat. Sesiuni informativas pe documentura de identitate, reședință, cazier etc. Combatea violenței domestice, trafiko le manuśenca thaj aver abuzura.",
                },
                five: {
                  title: "Intervencie ande urgentne situacii",
                  description:
                    "Kollaboracia ande interveniciura ISU ande romane komunitetura. Pregatita le komunitetura pe dezastre (incendia, inundații). Kampania de informare pe apelarea 112 thaj prim-ajutor.",
                },
                six: {
                  title: "Participacia ande locale plano le ordinea publiko",
                  description:
                    "Reprezentantura le asociațieshke shaj te konsultinen ande konsilii locale pe tema siguritate publiko. Monitoricia le interveniciura MAI ande sensibile zonura.",
                },
              },
            },
          },
          team: {
            title: "Amaro Ekipá",
            intro:
              "Profesionala dedicime, sashti but experiencia ande medijacia thaj rezolvime le konfliktenge.",
            members: {
              florinMotoi: {
                name: "Florin Motoi",
                role: "Prešedinto",
                experience: "30 bersa experiencia",
                specialization: "Familialo thaj civilo medijacia",
                education: "Master ande Zakonimos, Certifikat ande Medijacia",
              },
              florinDavid: {
                name: "Florin David",
                role: "Viceprešedinto",
                experience: "12 bersa experiencia",
                specialization: "Komerciale thaj komunitarutni medijacia",
                education: "Licența ande Psihologia, Certifikat CNMR",
              },
              cristianBuceanu: {
                name: "Cristian Buceanu",
                role: "Koordinatoro e ekipaki tehniki",
                experience: "10 bersa experiencia",
                specialization: "Dreptura manuśikane thaj antidiscriminacia",
                education: "Master ande Dreptura le Manuśikane",
              },
              robertoZatreanu: {
                name: "Roberto Zătreanu",
                role: "Komunitarutno Medijaro",
                experience: "8 bersa experiencia",
                specialization: "Dialogo interculturalo thaj integracia",
                education: "Licența ande Sociologia, Certifikat ande Medijacia",
              },
            },
            features: {
              certifications: {
                title: "Certificaturi",
                description:
                  "Sa amare medijarel si certificime le Konsiliako le Medijacias ande Romania thaj sostar si europeane certificaturi recunosar.",
              },
              availability: {
                title: "Disponibilitate",
                description:
                  "Sashti sam 24/7 pe urgentne situacii thaj denam mufol konsultacie initiale.",
              },
              confidentiality: {
                title: "Konfidențialitate",
                description:
                  "Respektilam stricto o tajnimos thaj neutralitate ande sa o procesos le medijacias.",
              },
            },
            results: {
              title: "Amare Rezultate",
              stats: {
                cases: {
                  value: "500+",
                  label: "Konflikti rezolvimasa",
                },
                success: {
                  value: "95%",
                  label: "Rata le suksesosko",
                },
                availability: {
                  value: "24/7",
                  label: "Disponibilitate",
                },
                experience: {
                  value: "20",
                  label: "Bersa experiencia kumulativa",
                },
              },
            },
          },
          contact: {
            title: "Kontactos the amare",
            intro:
              "Amende si akate te pomagias tuće. Kontaktil amende pe savo manđel tu, va te programel jekh mufol konsultacia.",
            info: {
              title: "Informacia pe Kontaktos",
              items: {
                address: {
                  title: "Adresa",
                  content: "str. Iezerului nr. 8,\nSector 1, București\nRomânia",
                },
                phone: {
                  title: "Telefonos",
                  content: "+40 725 693 521\n+40 737 776 845 (Urgente)",
                },
                email: {
                  title: "Email",
                  content: "medierecomunitara2025@gmail.com",
                },
                schedule: {
                  title: "Programo",
                  content: "Luni - Duminica: 24/24",
                },
              },
            },
            freeConsult: {
              title: "Mufol Konsultacia",
              text:
                "Piro konsultacia si mufol! Vovăres le jekh eksperto medijaro te šaj te džanes so mangavasa te kerel pe durum tari.",
              button: "Bicinel akana",
            },
            form: {
              title: "Bišinel amen jekh mesaj",
              success:
                "Mulumesc but pe mesaj! Ka kontaktilam tuće sigate.",
              error:
                "A apărut o eroare. Vă rugăm să încercați din nou.",
              nameLabel: "Anav Kompleto *",
              namePlaceholder: "Intraduis o nume",
              emailLabel: "Email *",
              emailPlaceholder: "exemplu@email.com",
              phoneLabel: "Telefonos",
              phonePlaceholder: "+40 xxx xxx xxx",
              subjectLabel: "Tipo le Medijacias *",
              subjectPlaceholder: "Alege tipe",
              messageLabel: "Tuvo Mesajo *",
              messagePlaceholder:
                "Descrivol tuja situacia va frša prašnia so san tu phenel...",
              submit: "Bišinel o Mesajo",
              submitting: "Bišindol o mesajo...",
              subjectOptions: {
                civil: "Civilo medijacia",
                family: "Familialo medijacia",
                commercial: "Komerciale medijacia",
                community: "Komunitarutni medijacia",
                school: "Skolako medijacia",
                legal: "Juridikani konsultacia",
              },
            },
          },
          footer: {
            description:
              "Promovias dialogo, rekonsiliacia thaj integracia ande spiritos le europanesqe valorura. S’amende dedicime te kerel jekh but cino thaj inkluzivo societate pe sa manuśa.",
            quickLinksTitle: "Link-uri Rapidura",
            contact: {
              title: "Kontaktos",
              schedule: "Luni - Duminica: 24/24",
              responseTime: "Phendem përgjigja ande 24 časa.",
            },
            bottom: {
              copyright:
                "© 2024 Asociatia le Medijarelpe Comunitară Europako e Romengo.",
              madeWith: "Kerdo le",
              forCommunity: "pe komunitete.",
            },
            legal: {
              privacy: "Politika le Konfidențialitatesko",
              terms: "Termeni thaj Kondiții",
              gdpr: "GDPR",
            },
          },
        },
      },

      // 🇷🇴 ROMANIAN
      ro: {
        translation: {
          header: {
            title: "Asociația de Mediere Comunitară",
            subtitle: "Europeană a Romilor",
            logoAlt: "Logo AMCER",
          },
          nav: {
            home: "Acasă",
            about: "Despre Noi",
            services: "Servicii",
            team: "Echipa",
            contact: "Contact",
          },
          hero: {
            title: {
              mediation: "Mediere",
              and: "și",
              reconciliation: "Reconciliere",
            },
            description:
              "Asociația de Mediere Comunitară Europeană a Romilor oferă servicii profesionale de mediere comunitară extrajudiciară pentru rezolvarea conflictelor și promovarea înțelegerii în comunitate.",
            cta: {
              services: "Serviciile Noastre",
              request: "Solicită Medierea",
            },
            cards: {
              justice: {
                title: "Justiție Echitabilă",
                text: "Promovăm soluții juste și echitabile pentru toate părțile implicate în conflict.",
              },
              community: {
                title: "Comunitate Unită",
                text: "Construim punți de comunicare și înțelegere între diferite grupuri comunitare.",
              },
              respect: {
                title: "Respect & Demnitate",
                text: "Respectăm diversitatea culturală și promovăm demnitatea umană în toate acțiunile noastre.",
              },
            },
          },
          about: {
            title: "Despre Asociația Noastră",
            intro:
              "Suntem o organizație dedicată promovării dialogului intercultural și rezolvării conflictelor prin metode alternative de mediere.",
            missionTitle: "Misiunea Noastră",
            missionP1:
              "Scopul M.C.E.R. îl reprezintă desfășurarea de activități de rezolvare a conflictelor dintre cetățeni de etnie romă prin mediere comunitară extrajudiciară. Prin mediere pot fi soluționate dispute din orice domeniu: familie, afaceri, relația consumatori–agenți economici, comunitare, organizaționale, educație, mediu, intercultural, interconfesional etc.",
            missionP2:
              "De asemenea, scopul M.C.E.R. îl reprezintă organizarea, dezvoltarea integrată și durabilă, modernizarea și reprezentarea publică a comunităților de romi, prin exercitarea deplină a drepturilor civile, economice, sociale, culturale și politice prevăzute de Constituția României, de legislația în vigoare, precum și de pactele și tratatele internaționale la care România este parte, precum și prin păstrarea, exprimarea, cultivarea și reconstrucția identității etno-culturale rome.",
            badges: {
              founded: "Înființată în 2005",
              casesResolved: "500+ Cazuri Rezolvate",
            },
            objectives: {
              title: "Obiectivele Noastre",
              items: {
                dialogue: "Facilitarea dialogului intercultural",
                mediation: "Rezolvarea conflictelor prin mediere",
                humanRights: "Promovarea drepturilor omului",
                communityIntegration: "Sprijinirea integrării comunitare",
              },
            },
            certifications: {
              title: "Certificări",
              items: {
                ministry: "Mediatori autorizați de Ministerul Justiției",
                european: "Acreditare europeană pentru mediere",
                partners: "Parteneri cu organizații internaționale",
              },
            },
            activities: {
              title: "Activitățile Noastre",
              cards: {
                consultations: {
                  alt: "Președintele în birou",
                  title: "Consultații Profesionale",
                  description:
                    "Oferim consultații specializate în mediere și rezolvarea conflictelor.",
                },
                conferences: {
                  alt: "Conferință comunitară",
                  title: "Conferințe Comunitare",
                  description:
                    "Organizăm evenimente pentru educarea și informarea comunității.",
                },
                presentations: {
                  alt: "Prezentare publică",
                  title: "Prezentări Publice",
                  description:
                    "Participăm activ la evenimente publice pentru promovarea medierii.",
                },
                dialogue: {
                  alt: "Dialog comunitar",
                  title: "Dialog Comunitar",
                  description:
                    "Facilităm dialogul între diferite grupuri din comunitate.",
                },
              },
            },
            vision: {
              title: "Viziunea Europeană",
              text:
                "Ne propunem să contribuim la construirea unei Europe unite în diversitate, unde fiecare comunitate își poate păstra identitatea culturală în același timp cu participarea activă la viața socială și economică europeană.",
            },
          },
          services: {
            title: "Serviciile Noastre",
            intro:
              "Oferim o gamă completă de servicii de mediere și consultanță, adaptate nevoilor specifice ale comunităților diverse.",
            cards: {
              civil: {
                title: "Mediere Civilă",
                description:
                  "Rezolvarea conflictelor civile prin dialog constructiv și soluții win-win.",
                features: {
                  neighborhood: "Conflicte de vecinătate",
                  contracts: "Dispute contractuale",
                  inheritance: "Probleme de moștenire",
                },
              },
              family: {
                title: "Mediere Familială",
                description:
                  "Suport specializat pentru familii în situații de conflict sau criză.",
                features: {
                  divorce: "Divorțuri amiabile",
                  custody: "Custodia copiilor",
                  intergenerational: "Conflicte intergeneraționale",
                },
              },
              commercial: {
                title: "Mediere Comercială",
                description:
                  "Soluții rapide și eficiente pentru disputele din mediul de afaceri.",
                features: {
                  partners: "Conflicte între parteneri",
                  suppliers: "Dispute cu furnizori",
                  litigation: "Litigii comerciale",
                },
              },
              community: {
                title: "Mediere Comunitară",
                description:
                  "Facilitarea dialogului între grupuri diferite din comunitate.",
                features: {
                  dialogue: "Dialog intercultural",
                  ethnic: "Conflicte etnice",
                  integration: "Integrare socială",
                },
              },
              school: {
                title: "Mediere Școlară",
                description:
                  "Programe de mediere în instituțiile de învățământ.",
                features: {
                  students: "Conflicte între elevi",
                  bullying: "Probleme de bullying",
                  parentsSchool: "Dialog părinți–școală",
                },
              },
              legal: {
                title: "Consultanță Juridică",
                description:
                  "Informare și consiliere juridică gratuită pentru comunitatea romă.",
                features: {
                  humanRights: "Drepturile omului",
                  antiDiscrimination: "Legislație antidiscriminare",
                  assistance: "Asistență juridică",
                },
              },
            },
            process: {
              title: "Procesul de Mediere",
              steps: {
                one: {
                  title: "Programe de prevenire a delincvenței juvenile",
                  description:
                    "Ateliere în școli pentru tineri romi pe tema legii, drepturilor și responsabilităților. Campanii „Tinerii și legea” în comunități vulnerabile. Proiecte de mentorat între tineri romi și jandarmi/polițiști romi.",
                },
                two: {
                  title: "Mediere comunitară în conflicte locale",
                  description:
                    "Formarea mediatorilor comunitari romi pentru intervenții extrajudiciare. Mediere între cetățeni și autorități în zone tensionate. Intervenții în cazuri de abuzuri sau discriminare instituțională.",
                },
                three: {
                  title: "Îmbunătățirea relației între romi și poliție",
                  description:
                    "Proiecte de încredere reciprocă: „Poliția și comunitatea romă”. Dialoguri directe între liderii romi și reprezentanții IPJ sau Jandarmerie. Promovarea diversității în structurile MAI.",
                },
                four: {
                  title: "Campanii de educație civică și legală",
                  description:
                    "Drepturile cetățenilor vs. obligațiile față de stat. Sesiuni de informare despre documente de identitate, reședință, cazier etc. Combaterea violenței domestice, traficului de persoane și abuzurilor.",
                },
                five: {
                  title: "Intervenții în situații de urgență",
                  description:
                    "Colaborare în intervențiile ISU în comunități rome. Pregătirea comunităților pentru dezastre (incendii, inundații). Campanii de informare despre apelarea 112 și prim-ajutor.",
                },
                six: {
                  title: "Participare la planuri locale de ordine publică",
                  description:
                    "Reprezentanți ai asociației pot fi consultați în consilii locale pe tema siguranței publice. Monitorizarea intervențiilor MAI în zone sensibile.",
                },
              },
            },
          },
          team: {
            title: "Echipa Noastră",
            intro:
              "Profesioniști dedicați, cu o experiență vastă în mediere și rezolvarea conflictelor.",
            members: {
              florinMotoi: {
                name: "Florin Motoi",
                role: "Președinte",
                experience: "30 ani experiență",
                specialization: "Mediere familială și civilă",
                education: "Master în Drept, Certificat în Mediere",
              },
              florinDavid: {
                name: "Florin David",
                role: "Vicepreședinte",
                experience: "12 ani experiență",
                specialization: "Mediere comercială și comunitară",
                education: "Licență în Psihologie, Certificat CNMR",
              },
              cristianBuceanu: {
                name: "Cristian Buceanu",
                role: "Coordonator Echipa Tehnică",
                experience: "10 ani experiență",
                specialization: "Drepturile omului și antidiscriminare",
                education: "Master în Drepturile Omului",
              },
              robertoZatreanu: {
                name: "Roberto Zătreanu",
                role: "Mediator Comunitar",
                experience: "8 ani experiență",
                specialization: "Dialog intercultural și integrare",
                education: "Licență în Sociologie, Certificat în Mediere",
              },
            },
            features: {
              certifications: {
                title: "Certificări",
                description:
                  "Toți mediatorii noștri sunt certificați de Consiliul de Mediere din România și au certificări europene recunoscute.",
              },
              availability: {
                title: "Disponibilitate",
                description:
                  "Suntem disponibili 24/7 pentru situații urgente și oferim consultații inițiale gratuite.",
              },
              confidentiality: {
                title: "Confidențialitate",
                description:
                  "Respectăm strict confidențialitatea și neutralitatea în toate procesele de mediere.",
              },
            },
            results: {
              title: "Rezultatele Noastre",
              stats: {
                cases: {
                  value: "500+",
                  label: "Cazuri rezolvate",
                },
                success: {
                  value: "95%",
                  label: "Rata de succes",
                },
                availability: {
                  value: "24/7",
                  label: "Disponibilitate",
                },
                experience: {
                  value: "20",
                  label: "Ani de experiență cumulată",
                },
              },
            },
          },
          contact: {
            title: "Contactează-ne",
            intro:
              "Suntem aici să te ajutăm. Contactează-ne pentru orice întrebare sau pentru a programa o consultație gratuită.",
            info: {
              title: "Informații de Contact",
              items: {
                address: {
                  title: "Adresa",
                  content: "str. Iezerului nr. 8,\nSector 1, București\nRomânia",
                },
                phone: {
                  title: "Telefon",
                  content: "+40 725 693 521\n+40 737 776 845 (Urgențe)",
                },
                email: {
                  title: "Email",
                  content: "medierecomunitara2025@gmail.com",
                },
                schedule: {
                  title: "Program",
                  content: "Luni - Duminica: 24/24",
                },
              },
            },
            freeConsult: {
              title: "Consultație Gratuită",
              text:
                "Prima consultație este gratuită! Vorbește cu un mediator experimentat pentru a înțelege cum te putem ajuta.",
              button: "Sună Acum",
            },
            form: {
              title: "Trimite-ne un Mesaj",
              success:
                "Mulțumim pentru mesaj! Vă vom contacta în curând.",
              error:
                "A apărut o eroare. Vă rugăm să încercați din nou.",
              nameLabel: "Numele Complet *",
              namePlaceholder: "Introduceți numele",
              emailLabel: "Email *",
              emailPlaceholder: "exemplu@email.com",
              phoneLabel: "Telefon",
              phonePlaceholder: "+40 xxx xxx xxx",
              subjectLabel: "Tipul Medierii *",
              subjectPlaceholder: "Selectează tipul",
              messageLabel: "Mesajul Tău *",
              messagePlaceholder:
                "Descrie situația ta sau întrebarea pe care o ai...",
              submit: "Trimite Mesajul",
              submitting: "Se trimite...",
              subjectOptions: {
                civil: "Mediere Civilă",
                family: "Mediere Familială",
                commercial: "Mediere Comercială",
                community: "Mediere Comunitară",
                school: "Mediere Școlară",
                legal: "Consultanță Juridică",
              },
            },
          },
          footer: {
            description:
              "Promovăm dialogul, reconcilierea și integrarea în spiritul valorilor europene. Suntem dedicați construirii unei societăți mai juste și incluzive pentru toți.",
            quickLinksTitle: "Link-uri Rapide",
            contact: {
              title: "Contact",
              schedule: "Luni - Duminica: 24/24",
              responseTime: "Răspundem în 24h",
            },
            bottom: {
              copyright:
                "© 2024 Asociația de Mediere Comunitară Europeană a Romilor.",
              madeWith: "Făcut cu",
              forCommunity: "pentru comunitate.",
            },
            legal: {
              privacy: "Politica de Confidențialitate",
              terms: "Termeni și Condiții",
              gdpr: "GDPR",
            },
          },

        },
      },

      // 🇬🇧 ENGLISH
      en: {
        translation: {
          header: {
            title: "Community Mediation Association",
            subtitle: "European Roma",
            logoAlt: "AMCER Logo",
          },
          nav: {
            home: "Home",
            about: "About Us",
            services: "Services",
            team: "Team",
            contact: "Contact",
          },
          hero: {
            title: {
              mediation: "Mediation",
              and: "and",
              reconciliation: "Reconciliation",
            },
            description:
              "The European Roma Community Mediation Association provides professional out-of-court community mediation services to resolve conflicts and promote understanding within the community.",
            cta: {
              services: "Our Services",
              request: "Request Mediation",
            },
            cards: {
              justice: {
                title: "Fair Justice",
                text: "We promote fair and just solutions for all parties involved in a conflict.",
              },
              community: {
                title: "United Community",
                text: "We build bridges of communication and understanding between different community groups.",
              },
              respect: {
                title: "Respect & Dignity",
                text: "We respect cultural diversity and promote human dignity in all our actions.",
              },
            },
          },
          about: {
            title: "About Our Association",
            intro:
              "We are an organization dedicated to promoting intercultural dialogue and resolving conflicts through alternative mediation methods.",
            missionTitle: "Our Mission",
            missionP1:
              "The purpose of M.C.E.R. is to carry out activities for resolving conflicts between Roma citizens through out-of-court community mediation. Through mediation, disputes from any field can be resolved: family, business, consumer–business relations, community, organizational, education, environment, intercultural, inter-confessional, and more.",
            missionP2:
              "Furthermore, the purpose of M.C.E.R. is to organize, develop in an integrated and sustainable way, modernize and publicly represent Roma communities by fully exercising their civil, economic, social, cultural and political rights, as provided by the Romanian Constitution, current legislation, and international treaties and covenants to which Romania is a party, as well as by preserving, expressing, cultivating and reconstructing Roma ethno-cultural identity.",
            badges: {
              founded: "Founded in 2005",
              casesResolved: "500+ Cases Resolved",
            },
            objectives: {
              title: "Our Objectives",
              items: {
                dialogue: "Facilitating intercultural dialogue",
                mediation: "Resolving conflicts through mediation",
                humanRights: "Promoting human rights",
                communityIntegration: "Supporting community integration",
              },
            },
            certifications: {
              title: "Certifications",
              items: {
                ministry: "Mediators authorized by the Ministry of Justice",
                european: "European accreditation for mediation",
                partners: "Partners with international organizations",
              },
            },
            activities: {
              title: "Our Activities",
              cards: {
                consultations: {
                  alt: "President in office",
                  title: "Professional Consultations",
                  description:
                    "We provide specialized consultations in mediation and conflict resolution.",
                },
                conferences: {
                  alt: "Community conference",
                  title: "Community Conferences",
                  description:
                    "We organize events to educate and inform the community.",
                },
                presentations: {
                  alt: "Public presentation",
                  title: "Public Presentations",
                  description:
                    "We actively participate in public events to promote mediation.",
                },
                dialogue: {
                  alt: "Community dialogue",
                  title: "Community Dialogue",
                  description:
                    "We facilitate dialogue between different groups in the community.",
                },
              },
            },
            vision: {
              title: "European Vision",
              text:
                "We aim to contribute to building a Europe united in diversity, where every community can preserve its cultural identity while actively participating in European social and economic life.",
            },
          },
          services: {
            title: "Our Services",
            intro:
              "We offer a complete range of mediation and consultancy services, tailored to the specific needs of diverse communities.",
            cards: {
              civil: {
                title: "Civil Mediation",
                description:
                  "Resolving civil conflicts through constructive dialogue and win–win solutions.",
                features: {
                  neighborhood: "Neighbourhood conflicts",
                  contracts: "Contract disputes",
                  inheritance: "Inheritance issues",
                },
              },
              family: {
                title: "Family Mediation",
                description:
                  "Specialised support for families in situations of conflict or crisis.",
                features: {
                  divorce: "Amicable divorces",
                  custody: "Child custody",
                  intergenerational: "Inter-generational conflicts",
                },
              },
              commercial: {
                title: "Commercial Mediation",
                description:
                  "Fast and effective solutions for disputes in the business environment.",
                features: {
                  partners: "Conflicts between partners",
                  suppliers: "Disputes with suppliers",
                  litigation: "Commercial litigation",
                },
              },
              community: {
                title: "Community Mediation",
                description:
                  "Facilitating dialogue between different groups in the community.",
                features: {
                  dialogue: "Intercultural dialogue",
                  ethnic: "Ethnic conflicts",
                  integration: "Social inclusion",
                },
              },
              school: {
                title: "School Mediation",
                description:
                  "Mediation programmes in educational institutions.",
                features: {
                  students: "Conflicts between students",
                  bullying: "Bullying issues",
                  parentsSchool: "Parent–school dialogue",
                },
              },
              legal: {
                title: "Legal Consultancy",
                description:
                  "Free legal information and counselling for the Roma community.",
                features: {
                  humanRights: "Human rights",
                  antiDiscrimination: "Anti-discrimination legislation",
                  assistance: "Legal assistance",
                },
              },
            },
            process: {
              title: "Mediation Process",
              steps: {
                one: {
                  title: "Juvenile delinquency prevention programmes",
                  description:
                    "Workshops in schools for Roma youth on law, rights and responsibilities. “Youth and the Law” campaigns in vulnerable communities. Mentoring projects between Roma youth and Roma gendarmes/police officers.",
                },
                two: {
                  title: "Community mediation in local conflicts",
                  description:
                    "Training Roma community mediators for out-of-court interventions. Mediation between citizens and authorities in tense areas. Interventions in cases of institutional abuse or discrimination.",
                },
                three: {
                  title: "Improving relations between Roma and the police",
                  description:
                    "Mutual trust projects such as “Police and the Roma community”. Direct dialogues between Roma leaders and representatives of county police or gendarmerie. Promoting diversity within the Ministry of Interior structures.",
                },
                four: {
                  title: "Civic and legal education campaigns",
                  description:
                    "Citizens’ rights vs. obligations towards the state. Information sessions on identity documents, residence, criminal record, etc. Combating domestic violence, human trafficking and abuse.",
                },
                five: {
                  title: "Interventions in emergency situations",
                  description:
                    "Collaboration in fire brigade/emergency inspectorate interventions in Roma communities. Preparing communities for disasters (fires, floods). Information campaigns about calling 112 and basic first aid.",
                },
                six: {
                  title: "Participation in local public order plans",
                  description:
                    "Association representatives can be consulted in local councils on public safety. Monitoring Ministry of Interior interventions in sensitive areas.",
                },
              },
            },
          },
          team: {
            title: "Our Team",
            intro:
              "Dedicated professionals with extensive experience in mediation and conflict resolution.",
            members: {
              florinMotoi: {
                name: "Florin Motoi",
                role: "President",
                experience: "30 years of experience",
                specialization: "Family and civil mediation",
                education: "Master in Law, Mediation Certificate",
              },
              florinDavid: {
                name: "Florin David",
                role: "Vice President",
                experience: "12 years of experience",
                specialization: "Commercial and community mediation",
                education: "Bachelor in Psychology, CNMR Certificate",
              },
              cristianBuceanu: {
                name: "Cristian Buceanu",
                role: "Technical Team Coordinator",
                experience: "10 years of experience",
                specialization: "Human rights and anti-discrimination",
                education: "Master in Human Rights",
              },
              robertoZatreanu: {
                name: "Roberto Zătreanu",
                role: "Community Mediator",
                experience: "8 years of experience",
                specialization: "Intercultural dialogue and integration",
                education: "Bachelor in Sociology, Mediation Certificate",
              },
            },
            features: {
              certifications: {
                title: "Certifications",
                description:
                  "All our mediators are certified by the Mediation Council of Romania and hold recognised European certifications.",
              },
              availability: {
                title: "Availability",
                description:
                  "We are available 24/7 for urgent situations and offer free initial consultations.",
              },
              confidentiality: {
                title: "Confidentiality",
                description:
                  "We strictly respect confidentiality and neutrality in all mediation processes.",
              },
            },
            results: {
              title: "Our Results",
              stats: {
                cases: {
                  value: "500+",
                  label: "Cases resolved",
                },
                success: {
                  value: "95%",
                  label: "Success rate",
                },
                availability: {
                  value: "24/7",
                  label: "Availability",
                },
                experience: {
                  value: "20",
                  label: "Years of cumulative experience",
                },
              },
            },
          },
          contact: {
            title: "Contact Us",
            intro:
              "We are here to help. Get in touch with us for any questions or to schedule a free consultation.",
            info: {
              title: "Contact Information",
              items: {
                address: {
                  title: "Address",
                  content: "str. Iezerului nr. 8,\nSector 1, Bucharest\nRomania",
                },
                phone: {
                  title: "Phone",
                  content: "+40 725 693 521\n+40 737 776 845 (Emergency)",
                },
                email: {
                  title: "Email",
                  content: "medierecomunitara2025@gmail.com",
                },
                schedule: {
                  title: "Schedule",
                  content: "Monday - Sunday: 24/24",
                },
              },
            },
            freeConsult: {
              title: "Free Consultation",
              text:
                "Your first consultation is free! Talk to an experienced mediator to understand how we can support you.",
              button: "Call Now",
            },
            form: {
              title: "Send Us a Message",
              success:
                "Thank you for your message! We will contact you shortly.",
              error:
                "An error occurred. Please try again.",
              nameLabel: "Full Name *",
              namePlaceholder: "Enter your name",
              emailLabel: "Email *",
              emailPlaceholder: "example@email.com",
              phoneLabel: "Phone",
              phonePlaceholder: "+40 xxx xxx xxx",
              subjectLabel: "Type of Mediation *",
              subjectPlaceholder: "Select type",
              messageLabel: "Your Message *",
              messagePlaceholder:
                "Describe your situation or the question you have...",
              submit: "Send Message",
              submitting: "Sending...",
              subjectOptions: {
                civil: "Civil Mediation",
                family: "Family Mediation",
                commercial: "Commercial Mediation",
                community: "Community Mediation",
                school: "School Mediation",
                legal: "Legal Consultancy",
              },
            },
          },
          footer: {
            description:
              "We promote dialogue, reconciliation and inclusion in the spirit of European values. We are dedicated to building a fairer and more inclusive society for everyone.",
            quickLinksTitle: "Quick Links",
            contact: {
              title: "Contact",
              schedule: "Monday - Sunday: 24/24",
              responseTime: "We reply within 24 hours",
            },
            bottom: {
              copyright:
                "© 2024 European Roma Community Mediation Association.",
              madeWith: "Made with",
              forCommunity: "for the community.",
            },
            legal: {
              privacy: "Privacy Policy",
              terms: "Terms & Conditions",
              gdpr: "GDPR",
            },
          },

        },
      },

      // 🇩🇪 GERMAN
      de: {
        translation: {
          header: {
            title: "Gemeinschaftliche Mediationsvereinigung",
            subtitle: "Europäische Roma",
            logoAlt: "AMCER Logo",
          },
          nav: {
            home: "Startseite",
            about: "Über uns",
            services: "Dienstleistungen",
            team: "Team",
            contact: "Kontakt",
          },
          hero: {
            title: {
              mediation: "Mediation",
              and: "und",
              reconciliation: "Versöhnung",
            },
            description:
              "Die Europäische Roma-Gemeinschaftsmediationsvereinigung bietet professionelle außergerichtliche Gemeindemediationsdienste zur Lösung von Konflikten und zur Förderung des Verständnisses in der Gemeinschaft an.",
            cta: {
              services: "Unsere Leistungen",
              request: "Mediation anfragen",
            },
            cards: {
              justice: {
                title: "Gerechte Justiz",
                text: "Wir fördern faire und gerechte Lösungen für alle Konfliktparteien.",
              },
              community: {
                title: "Vereinte Gemeinschaft",
                text: "Wir bauen Brücken der Kommunikation und des Verständnisses zwischen verschiedenen Gemeinschaftsgruppen.",
              },
              respect: {
                title: "Respekt & Würde",
                text: "Wir respektieren kulturelle Vielfalt und fördern die menschliche Würde in all unserem Handeln.",
              },
            },
          },
          about: {
            title: "Über Unsere Vereinigung",
            intro:
              "Wir sind eine Organisation, die dem interkulturellen Dialog und der Konfliktlösung durch alternative Mediationsmethoden gewidmet ist.",
            missionTitle: "Unsere Mission",
            missionP1:
              "Der Zweck von M.C.E.R. besteht darin, Konflikte zwischen Bürgern Roma-ethnischer Herkunft durch außergerichtliche Gemeinschaftsmediation zu lösen. Durch Mediation können Streitigkeiten aus allen Bereichen gelöst werden: Familie, Wirtschaft, Beziehungen zwischen Verbrauchern und Unternehmen, Gemeinschaft, Organisationen, Bildung, Umwelt, interkulturelle und interkonfessionelle Bereiche usw.",
            missionP2:
              "Außerdem hat M.C.E.R. den Zweck, Roma-Gemeinschaften zu organisieren, integriert und nachhaltig zu entwickeln, zu modernisieren und öffentlich zu vertreten, indem ihre zivilen, wirtschaftlichen, sozialen, kulturellen und politischen Rechte vollständig ausgeübt werden, wie sie in der Verfassung Rumäniens, der geltenden Gesetzgebung sowie in internationalen Pakten und Verträgen, denen Rumänien beigetreten ist, vorgesehen sind, und durch die Bewahrung, Ausdruck, Pflege und Wiederbelebung der roma-ethnokulturellen Identität.",
            badges: {
              founded: "Gegründet 2005",
              casesResolved: "500+ gelöste Fälle",
            },
            objectives: {
              title: "Unsere Ziele",
              items: {
                dialogue: "Förderung des interkulturellen Dialogs",
                mediation: "Konfliktlösung durch Mediation",
                humanRights: "Förderung der Menschenrechte",
                communityIntegration: "Unterstützung der Gemeinschaftsintegration",
              },
            },
            certifications: {
              title: "Zertifizierungen",
              items: {
                ministry: "Vom Justizministerium zugelassene Mediatoren",
                european: "Europäische Akkreditierung für Mediation",
                partners: "Partnerschaften mit internationalen Organisationen",
              },
            },
            activities: {
              title: "Unsere Aktivitäten",
              cards: {
                consultations: {
                  alt: "Präsident im Büro",
                  title: "Professionelle Beratungen",
                  description:
                    "Wir bieten spezialisierte Beratungen in Mediation und Konfliktlösung an.",
                },
                conferences: {
                  alt: "Gemeinschaftskonferenz",
                  title: "Gemeinschaftskonferenzen",
                  description:
                    "Wir organisieren Veranstaltungen zur Aufklärung und Information der Gemeinschaft.",
                },
                presentations: {
                  alt: "Öffentliche Präsentation",
                  title: "Öffentliche Präsentationen",
                  description:
                    "Wir nehmen aktiv an öffentlichen Veranstaltungen teil, um Mediation zu fördern.",
                },
                dialogue: {
                  alt: "Gemeinschaftsdialog",
                  title: "Gemeinschaftsdialog",
                  description:
                    "Wir erleichtern den Dialog zwischen verschiedenen Gruppen in der Gemeinschaft.",
                },
              },
            },
            vision: {
              title: "Europäische Vision",
              text:
                "Wir möchten zum Aufbau eines Europas beitragen, das in seiner Vielfalt geeint ist, in dem jede Gemeinschaft ihre kulturelle Identität bewahren und gleichzeitig aktiv am sozialen und wirtschaftlichen Leben Europas teilnehmen kann.",
            },
          },
          services: {
            title: "Unsere Dienstleistungen",
            intro:
              "Wir bieten ein umfassendes Angebot an Mediations- und Beratungsdiensten, die auf die spezifischen Bedürfnisse vielfältiger Gemeinschaften zugeschnitten sind.",
            cards: {
              civil: {
                title: "Zivile Mediation",
                description:
                  "Lösung zivilrechtlicher Konflikte durch konstruktiven Dialog und Win-win-Lösungen.",
                features: {
                  neighborhood: "Nachbarschaftskonflikte",
                  contracts: "Vertragsstreitigkeiten",
                  inheritance: "Erbschaftsfragen",
                },
              },
              family: {
                title: "Familienmediation",
                description:
                  "Fachspezifische Unterstützung für Familien in Konflikt- oder Krisensituationen.",
                features: {
                  divorce: "Einvernehmliche Scheidungen",
                  custody: "Sorgerechtsfragen",
                  intergenerational: "Generationenübergreifende Konflikte",
                },
              },
              commercial: {
                title: "Wirtschaftsmediation",
                description:
                  "Schnelle und effiziente Lösungen für Streitigkeiten in der Geschäftswelt.",
                features: {
                  partners: "Konflikte zwischen Geschäftspartnern",
                  suppliers: "Streitigkeiten mit Lieferanten",
                  litigation: "Handelsrechtliche Auseinandersetzungen",
                },
              },
              community: {
                title: "Gemeinschaftsmediation",
                description:
                  "Förderung des Dialogs zwischen verschiedenen Gruppen in der Gemeinschaft.",
                features: {
                  dialogue: "Interkultureller Dialog",
                  ethnic: "Ethnische Konflikte",
                  integration: "Soziale Integration",
                },
              },
              school: {
                title: "Schulmediation",
                description:
                  "Mediationsprogramme in Bildungseinrichtungen.",
                features: {
                  students: "Konflikte zwischen Schülern",
                  bullying: "Mobbing-Probleme",
                  parentsSchool: "Dialog zwischen Eltern und Schule",
                },
              },
              legal: {
                title: "Rechtsberatung",
                description:
                  "Kostenlose rechtliche Information und Beratung für die Roma-Gemeinschaft.",
                features: {
                  humanRights: "Menschenrechte",
                  antiDiscrimination: "Antidiskriminierungsrecht",
                  assistance: "Rechtliche Unterstützung",
                },
              },
            },
            process: {
              title: "Mediationsprozess",
              steps: {
                one: {
                  title: "Programme zur Prävention von Jugenddelinquenz",
                  description:
                    "Workshops in Schulen für Roma-Jugendliche zu Recht, Rechten und Pflichten. Kampagnen „Jugend und Gesetz“ in vulnerablen Gemeinschaften. Mentoring-Projekte zwischen Roma-Jugendlichen und Roma-Polizisten bzw. Gendarmen.",
                },
                two: {
                  title: "Gemeinschaftsmediation bei lokalen Konflikten",
                  description:
                    "Ausbildung von Roma-Gemeinschaftsmediatoren für außergerichtliche Interventionen. Mediation zwischen Bürgern und Behörden in Spannungsgebieten. Interventionen bei institutionellen Missbräuchen oder Diskriminierung.",
                },
                three: {
                  title: "Verbesserung der Beziehung zwischen Roma und Polizei",
                  description:
                    "Vertrauensbildende Projekte wie „Polizei und Roma-Gemeinschaft“. Direkte Dialoge zwischen Roma-Führungspersonen und Vertretern der Polizei oder Gendarmerie. Förderung von Diversität in den Strukturen des Innenministeriums.",
                },
                four: {
                  title: "Kampagnen für Bürger- und Rechtsbildung",
                  description:
                    "Bürgerrechte vs. Pflichten gegenüber dem Staat. Informationsveranstaltungen zu Ausweisdokumenten, Wohnsitz, Führungszeugnis usw. Bekämpfung häuslicher Gewalt, Menschenhandel und anderer Übergriffe.",
                },
                five: {
                  title: "Einsätze in Notsituationen",
                  description:
                    "Zusammenarbeit bei Einsätzen der Einsatz- und Rettungsdienste in Roma-Gemeinschaften. Vorbereitung der Gemeinschaften auf Katastrophen (Brände, Überschwemmungen). Informationskampagnen über den Notruf 112 und Erste Hilfe.",
                },
                six: {
                  title: "Mitwirkung an lokalen Ordnungskonzepten",
                  description:
                    "Vertreter der Vereinigung können in Gemeinderäten zu Fragen der öffentlichen Sicherheit konsultiert werden. Beobachtung von Einsätzen des Innenministeriums in sensiblen Gebieten.",
                },
              },
            },
          },
          team: {
            title: "Unser Team",
            intro:
              "Engagierte Fachleute mit umfassender Erfahrung in Mediation und Konfliktlösung.",
            members: {
              florinMotoi: {
                name: "Florin Motoi",
                role: "Präsident",
                experience: "30 Jahre Erfahrung",
                specialization: "Familien- und Zivilmediation",
                education: "Master in Rechtswissenschaften, Mediationszertifikat",
              },
              florinDavid: {
                name: "Florin David",
                role: "Vizepräsident",
                experience: "12 Jahre Erfahrung",
                specialization: "Wirtschafts- und Gemeinschaftsmediation",
                education: "Bachelor in Psychologie, CNMR-Zertifikat",
              },
              cristianBuceanu: {
                name: "Cristian Buceanu",
                role: "Koordinator des Technikteams",
                experience: "10 Jahre Erfahrung",
                specialization: "Menschenrechte und Antidiskriminierung",
                education: "Master in Menschenrechten",
              },
              robertoZatreanu: {
                name: "Roberto Zătreanu",
                role: "Gemeinschaftsmediator",
                experience: "8 Jahre Erfahrung",
                specialization: "Interkultureller Dialog und Integration",
                education: "Bachelor in Soziologie, Mediationszertifikat",
              },
            },
            features: {
              certifications: {
                title: "Zertifizierungen",
                description:
                  "Alle unsere Mediatoren sind vom Mediationsrat Rumäniens zertifiziert und verfügen über anerkannte europäische Zertifikate.",
              },
              availability: {
                title: "Verfügbarkeit",
                description:
                  "Wir sind 24/7 für dringende Situationen erreichbar und bieten ein erstes kostenloses Beratungsgespräch.",
              },
              confidentiality: {
                title: "Vertraulichkeit",
                description:
                  "Wir achten strikt auf Vertraulichkeit und Neutralität in allen Mediationsverfahren.",
              },
            },
            results: {
              title: "Unsere Ergebnisse",
              stats: {
                cases: {
                  value: "500+",
                  label: "Gelöste Fälle",
                },
                success: {
                  value: "95%",
                  label: "Erfolgsquote",
                },
                availability: {
                  value: "24/7",
                  label: "Verfügbarkeit",
                },
                experience: {
                  value: "20",
                  label: "Jahre gesammelte Erfahrung",
                },
              },
            },
          },
          contact: {
            title: "Kontakt",
            intro:
              "Wir sind für Sie da. Kontaktieren Sie uns bei Fragen oder um ein kostenloses Beratungsgespräch zu vereinbaren.",
            info: {
              title: "Kontaktinformationen",
              items: {
                address: {
                  title: "Adresse",
                  content: "str. Iezerului nr. 8,\nBezirk 1, Bukarest\nRumänien",
                },
                phone: {
                  title: "Telefon",
                  content: "+40 725 693 521\n+40 737 776 845 (Notfälle)",
                },
                email: {
                  title: "E-Mail",
                  content: "medierecomunitara2025@gmail.com",
                },
                schedule: {
                  title: "Öffnungszeiten",
                  content: "Montag - Sonntag: 24/24",
                },
              },
            },
            freeConsult: {
              title: "Kostenlose Beratung",
              text:
                "Das erste Beratungsgespräch ist kostenlos! Sprechen Sie mit einem erfahrenen Mediator, um zu verstehen, wie wir Ihnen helfen können.",
              button: "Jetzt anrufen",
            },
            form: {
              title: "Schreiben Sie uns",
              success:
                "Vielen Dank für Ihre Nachricht! Wir werden Sie in Kürze kontaktieren.",
              error:
                "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
              nameLabel: "Vollständiger Name *",
              namePlaceholder: "Geben Sie Ihren Namen ein",
              emailLabel: "E-Mail *",
              emailPlaceholder: "beispiel@email.com",
              phoneLabel: "Telefon",
              phonePlaceholder: "+40 xxx xxx xxx",
              subjectLabel: "Art der Mediation *",
              subjectPlaceholder: "Art auswählen",
              messageLabel: "Ihre Nachricht *",
              messagePlaceholder:
                "Beschreiben Sie Ihre Situation oder Ihre Frage...",
              submit: "Nachricht senden",
              submitting: "Wird gesendet...",
              subjectOptions: {
                civil: "Zivile Mediation",
                family: "Familienmediation",
                commercial: "Wirtschaftsmediation",
                community: "Gemeinschaftsmediation",
                school: "Schulmediation",
                legal: "Rechtsberatung",
              },
            },
          },
          footer: {
            description:
              "Wir fördern Dialog, Versöhnung und Integration im Geist der europäischen Werte. Wir engagieren uns für den Aufbau einer gerechteren und inklusiveren Gesellschaft für alle.",
            quickLinksTitle: "Schnellzugriff",
            contact: {
              title: "Kontakt",
              schedule: "Montag - Sonntag: 24/24",
              responseTime: "Wir antworten innerhalb von 24 Stunden",
            },
            bottom: {
              copyright:
                "© 2024 Gemeinschaftliche Mediationsvereinigung der europäischen Roma.",
              madeWith: "Mit",
              forCommunity: "für die Gemeinschaft erstellt.",
            },
            legal: {
              privacy: "Datenschutzerklärung",
              terms: "Allgemeine Geschäftsbedingungen",
              gdpr: "DSGVO",
            },
          },

        },
      },

      // 🇫🇷 FRENCH
      fr: {
        translation: {
          header: {
            title: "Association de Médiation Communautaire",
            subtitle: "Roms Européens",
            logoAlt: "Logo AMCER",
          },
          nav: {
            home: "Accueil",
            about: "À propos",
            services: "Services",
            team: "Équipe",
            contact: "Contact",
          },
          hero: {
            title: {
              mediation: "Médiation",
              and: "et",
              reconciliation: "Réconciliation",
            },
            description:
              "L’Association Européenne de Médiation Communautaire des Roms offre des services professionnels de médiation communautaire extrajudiciaire pour résoudre les conflits et promouvoir la compréhension au sein de la communauté.",
            cta: {
              services: "Nos services",
              request: "Demander une médiation",
            },
            cards: {
              justice: {
                title: "Justice Équitable",
                text: "Nous promouvons des solutions justes et équitables pour toutes les parties impliquées dans le conflit.",
              },
              community: {
                title: "Communauté Unie",
                text: "Nous construisons des ponts de communication et de compréhension entre différents groupes communautaires.",
              },
              respect: {
                title: "Respect & Dignité",
                text: "Nous respectons la diversité culturelle et promouvons la dignité humaine dans toutes nos actions.",
              },
            },
          },
          about: {
            title: "À Propos de Notre Association",
            intro:
              "Nous sommes une organisation dédiée à la promotion du dialogue interculturel et à la résolution des conflits par des méthodes alternatives de médiation.",
            missionTitle: "Notre Mission",
            missionP1:
              "L’objectif de M.C.E.R. est de mener des activités de résolution des conflits entre citoyens d’origine rom par la médiation communautaire extrajudiciaire. La médiation permet de résoudre des différends dans tous les domaines : famille, affaires, relations consommateurs–entreprises, communauté, organisations, éducation, environnement, interculturel, interconfessionnel, etc.",
            missionP2:
              "L’objectif de M.C.E.R. est également d’organiser, de développer de manière intégrée et durable, de moderniser et de représenter publiquement les communautés roms, par l’exercice plein de leurs droits civils, économiques, sociaux, culturels et politiques, tels que prévus par la Constitution roumaine, la législation en vigueur ainsi que par les pactes et traités internationaux auxquels la Roumanie est partie, ainsi que par la préservation, l’expression, la valorisation et la reconstruction de l’identité ethnoculturelle rom.",
            badges: {
              founded: "Fondée en 2005",
              casesResolved: "500+ cas résolus",
            },
            objectives: {
              title: "Nos Objectifs",
              items: {
                dialogue: "Faciliter le dialogue interculturel",
                mediation: "Résoudre les conflits par la médiation",
                humanRights: "Promouvoir les droits de l’homme",
                communityIntegration: "Soutenir l’intégration communautaire",
              },
            },
            certifications: {
              title: "Certifications",
              items: {
                ministry: "Médiateurs autorisés par le Ministère de la Justice",
                european: "Accréditation européenne pour la médiation",
                partners: "Partenariats avec des organisations internationales",
              },
            },
            activities: {
              title: "Nos Activités",
              cards: {
                consultations: {
                  alt: "Président dans le bureau",
                  title: "Consultations Professionnelles",
                  description:
                    "Nous offrons des consultations spécialisées en médiation et en résolution des conflits.",
                },
                conferences: {
                  alt: "Conférence communautaire",
                  title: "Conférences Communautaires",
                  description:
                    "Nous organisons des événements pour éduquer et informer la communauté.",
                },
                presentations: {
                  alt: "Présentation publique",
                  title: "Présentations Publiques",
                  description:
                    "Nous participons activement à des événements publics pour promouvoir la médiation.",
                },
                dialogue: {
                  alt: "Dialogue communautaire",
                  title: "Dialogue Communautaire",
                  description:
                    "Nous facilitons le dialogue entre différents groupes de la communauté.",
                },
              },
            },
            vision: {
              title: "Vision Européenne",
              text:
                "Nous souhaitons contribuer à la construction d’une Europe unie dans la diversité, où chaque communauté peut préserver son identité culturelle tout en participant activement à la vie sociale et économique européenne.",
            },
          },
          services: {
            title: "Nos Services",
            intro:
              "Nous offrons une gamme complète de services de médiation et de conseil, adaptés aux besoins spécifiques des communautés diverses.",
            cards: {
              civil: {
                title: "Médiation Civile",
                description:
                  "Résolution des conflits civils par un dialogue constructif et des solutions gagnant-gagnant.",
                features: {
                  neighborhood: "Conflits de voisinage",
                  contracts: "Litiges contractuels",
                  inheritance: "Problèmes de succession",
                },
              },
              family: {
                title: "Médiation Familiale",
                description:
                  "Soutien spécialisé pour les familles en situation de conflit ou de crise.",
                features: {
                  divorce: "Divorces à l’amiable",
                  custody: "Garde des enfants",
                  intergenerational: "Conflits intergénérationnels",
                },
              },
              commercial: {
                title: "Médiation Commerciale",
                description:
                  "Solutions rapides et efficaces pour les litiges dans le milieu des affaires.",
                features: {
                  partners: "Conflits entre partenaires",
                  suppliers: "Litiges avec les fournisseurs",
                  litigation: "Contentieux commerciaux",
                },
              },
              community: {
                title: "Médiation Communautaire",
                description:
                  "Facilitation du dialogue entre différents groupes de la communauté.",
                features: {
                  dialogue: "Dialogue interculturel",
                  ethnic: "Conflits ethniques",
                  integration: "Intégration sociale",
                },
              },
              school: {
                title: "Médiation Scolaire",
                description:
                  "Programmes de médiation au sein des établissements scolaires.",
                features: {
                  students: "Conflits entre élèves",
                  bullying: "Problèmes de harcèlement",
                  parentsSchool: "Dialogue parents–école",
                },
              },
              legal: {
                title: "Conseil Juridique",
                description:
                  "Information et conseil juridique gratuits pour la communauté rom.",
                features: {
                  humanRights: "Droits de l’homme",
                  antiDiscrimination: "Législation antidiscrimination",
                  assistance: "Assistance juridique",
                },
              },
            },
            process: {
              title: "Le Processus de Médiation",
              steps: {
                one: {
                  title: "Programmes de prévention de la délinquance juvénile",
                  description:
                    "Ateliers dans les écoles pour les jeunes Roms sur la loi, les droits et les responsabilités. Campagnes « Les jeunes et la loi » dans les communautés vulnérables. Projets de mentorat entre jeunes Roms et gendarmes/policiers roms.",
                },
                two: {
                  title: "Médiation communautaire dans les conflits locaux",
                  description:
                    "Formation de médiateurs communautaires roms pour des interventions extrajudiciaires. Médiation entre citoyens et autorités dans les zones tendues. Interventions en cas d’abus ou de discrimination institutionnelle.",
                },
                three: {
                  title: "Amélioration des relations entre Roms et police",
                  description:
                    "Projets de confiance mutuelle : « La police et la communauté rom ». Dialogues directs entre leaders roms et représentants de la police ou de la gendarmerie. Promotion de la diversité au sein des structures du Ministère de l’Intérieur.",
                },
                four: {
                  title: "Campagnes d’éducation civique et juridique",
                  description:
                    "Droits des citoyens vs obligations envers l’État. Séances d’information sur les documents d’identité, la résidence, le casier judiciaire, etc. Lutte contre la violence domestique, la traite des êtres humains et les abus.",
                },
                five: {
                  title: "Interventions en situation d’urgence",
                  description:
                    "Collaboration lors des interventions des services de secours dans les communautés roms. Préparation des communautés aux catastrophes (incendies, inondations). Campagnes d’information sur l’appel au 112 et les premiers secours.",
                },
                six: {
                  title: "Participation aux plans locaux de sécurité publique",
                  description:
                    "Les représentants de l’association peuvent être consultés dans les conseils locaux sur les questions de sécurité publique. Suivi des interventions du Ministère de l’Intérieur dans les zones sensibles.",
                },
              },
            },
          },
          team: {
            title: "Notre Équipe",
            intro:
              "Des professionnels engagés avec une vaste expérience en médiation et en résolution des conflits.",
            members: {
              florinMotoi: {
                name: "Florin Motoi",
                role: "Président",
                experience: "30 ans d’expérience",
                specialization: "Médiation familiale et civile",
                education: "Master en Droit, Certificat en médiation",
              },
              florinDavid: {
                name: "Florin David",
                role: "Vice-président",
                experience: "12 ans d’expérience",
                specialization: "Médiation commerciale et communautaire",
                education: "Licence en Psychologie, Certificat CNMR",
              },
              cristianBuceanu: {
                name: "Cristian Buceanu",
                role: "Coordinateur de l’équipe technique",
                experience: "10 ans d’expérience",
                specialization: "Droits de l’homme et antidiscrimination",
                education: "Master en Droits de l’Homme",
              },
              robertoZatreanu: {
                name: "Roberto Zătreanu",
                role: "Médiateur communautaire",
                experience: "8 ans d’expérience",
                specialization: "Dialogue interculturel et intégration",
                education: "Licence en Sociologie, Certificat en médiation",
              },
            },
            features: {
              certifications: {
                title: "Certifications",
                description:
                  "Tous nos médiateurs sont certifiés par le Conseil de Médiation de Roumanie et possèdent des certifications européennes reconnues.",
              },
              availability: {
                title: "Disponibilité",
                description:
                  "Nous sommes disponibles 24h/24 et 7j/7 pour les situations d’urgence et offrons des consultations initiales gratuites.",
              },
              confidentiality: {
                title: "Confidentialité",
                description:
                  "Nous respectons strictement la confidentialité et la neutralité dans tous les processus de médiation.",
              },
            },
            results: {
              title: "Nos Résultats",
              stats: {
                cases: {
                  value: "500+",
                  label: "Dossiers résolus",
                },
                success: {
                  value: "95%",
                  label: "Taux de réussite",
                },
                availability: {
                  value: "24/7",
                  label: "Disponibilité",
                },
                experience: {
                  value: "20",
                  label: "Années d’expérience cumulée",
                },
              },
            },
          },
          contact: {
            title: "Contactez-nous",
            intro:
              "Nous sommes là pour vous aider. Contactez-nous pour toute question ou pour fixer une consultation gratuite.",
            info: {
              title: "Informations de Contact",
              items: {
                address: {
                  title: "Adresse",
                  content: "str. Iezerului nr. 8,\nSecteur 1, Bucarest\nRoumanie",
                },
                phone: {
                  title: "Téléphone",
                  content: "+40 725 693 521\n+40 737 776 845 (Urgences)",
                },
                email: {
                  title: "Email",
                  content: "medierecomunitara2025@gmail.com",
                },
                schedule: {
                  title: "Horaires",
                  content: "Lundi - Dimanche : 24h/24",
                },
              },
            },
            freeConsult: {
              title: "Consultation Gratuite",
              text:
                "La première consultation est gratuite ! Parlez avec un médiateur expérimenté pour comprendre comment nous pouvons vous aider.",
              button: "Appeler Maintenant",
            },
            form: {
              title: "Envoyez-nous un Message",
              success:
                "Merci pour votre message ! Nous vous contacterons prochainement.",
              error:
                "Une erreur s’est produite. Veuillez réessayer.",
              nameLabel: "Nom Complet *",
              namePlaceholder: "Entrez votre nom",
              emailLabel: "Email *",
              emailPlaceholder: "exemple@email.com",
              phoneLabel: "Téléphone",
              phonePlaceholder: "+40 xxx xxx xxx",
              subjectLabel: "Type de Médiation *",
              subjectPlaceholder: "Sélectionnez le type",
              messageLabel: "Votre Message *",
              messagePlaceholder:
                "Décrivez votre situation ou la question que vous avez...",
              submit: "Envoyer le Message",
              submitting: "Envoi en cours...",
              subjectOptions: {
                civil: "Médiation civile",
                family: "Médiation familiale",
                commercial: "Médiation commerciale",
                community: "Médiation communautaire",
                school: "Médiation scolaire",
                legal: "Conseil juridique",
              },
            },
          },
          footer: {
            description:
              "Nous promouvons le dialogue, la réconciliation et l’intégration dans l’esprit des valeurs européennes. Nous sommes engagés dans la construction d’une société plus juste et plus inclusive pour tous.",
            quickLinksTitle: "Liens Rapides",
            contact: {
              title: "Contact",
              schedule: "Lundi - Dimanche : 24h/24",
              responseTime: "Nous répondons sous 24h",
            },
            bottom: {
              copyright:
                "© 2024 Association de Médiation Communautaire Européenne des Roms.",
              madeWith: "Fait avec",
              forCommunity: "pour la communauté.",
            },
            legal: {
              privacy: "Politique de Confidentialité",
              terms: "Termes et Conditions",
              gdpr: "RGPD",
            },
          },

        },
      },

      // 🇮🇹 ITALIAN
      it: {
        translation: {
          header: {
            title: "Associazione di Mediazione Comunitaria",
            subtitle: "Rom Europei",
            logoAlt: "Logo AMCER",
          },
          nav: {
            home: "Home",
            about: "Chi Siamo",
            services: "Servizi",
            team: "Team",
            contact: "Contatto",
          },
          hero: {
            title: {
              mediation: "Mediazione",
              and: "e",
              reconciliation: "Riconciliazione",
            },
            description:
              "L’Associazione Europea di Mediazione Comunitaria dei Rom offre servizi professionali di mediazione comunitaria extragiudiziale per risolvere i conflitti e promuovere la comprensione all’interno della comunità.",
            cta: {
              services: "I nostri servizi",
              request: "Richiedi una mediazione",
            },
            cards: {
              justice: {
                title: "Giustizia Equa",
                text: "Promuoviamo soluzioni giuste ed eque per tutte le parti coinvolte nel conflitto.",
              },
              community: {
                title: "Comunità Unita",
                text: "Costruiamo ponti di comunicazione e comprensione tra i diversi gruppi della comunità.",
              },
              respect: {
                title: "Rispetto & Dignità",
                text: "Rispettiamo la diversità culturale e promuoviamo la dignità umana in tutte le nostre azioni.",
              },
            },
          },
          about: {
            title: "Chi Siamo",
            intro:
              "Siamo un’organizzazione dedicata alla promozione del dialogo interculturale e alla risoluzione dei conflitti tramite metodi alternativi di mediazione.",
            missionTitle: "La Nostra Missione",
            missionP1:
              "Lo scopo di M.C.E.R. è svolgere attività di risoluzione dei conflitti tra cittadini di etnia rom attraverso la mediazione comunitaria extragiudiziale. Con la mediazione possono essere risolte controversie in qualsiasi ambito: famiglia, affari, rapporto consumatori–operatori economici, comunità, organizzazioni, istruzione, ambiente, ambito interculturale e interconfessionale, ecc.",
            missionP2:
              "Inoltre, lo scopo di M.C.E.R. è organizzare, sviluppare in modo integrato e sostenibile, modernizzare e rappresentare pubblicamente le comunità rom, attraverso il pieno esercizio dei diritti civili, economici, sociali, culturali e politici previsti dalla Costituzione rumena, dalla legislazione vigente e dai patti e trattati internazionali di cui la Romania è parte, nonché tramite la conservazione, l’espressione, la valorizzazione e la ricostruzione dell’identità etno-culturale rom.",
            badges: {
              founded: "Fondata nel 2005",
              casesResolved: "Oltre 500 casi risolti",
            },
            objectives: {
              title: "I Nostri Obiettivi",
              items: {
                dialogue: "Facilitare il dialogo interculturale",
                mediation: "Risolvere i conflitti tramite la mediazione",
                humanRights: "Promuovere i diritti umani",
                communityIntegration: "Sostenere l’integrazione comunitaria",
              },
            },
            certifications: {
              title: "Certificazioni",
              items: {
                ministry: "Mediatori autorizzati dal Ministero della Giustizia",
                european: "Accreditamento europeo per la mediazione",
                partners: "Partner di organizzazioni internazionali",
              },
            },
            activities: {
              title: "Le Nostre Attività",
              cards: {
                consultations: {
                  alt: "Presidente in ufficio",
                  title: "Consulenze Professionali",
                  description:
                    "Offriamo consulenze specializzate in mediazione e risoluzione dei conflitti.",
                },
                conferences: {
                  alt: "Conferenza comunitaria",
                  title: "Conferenze Comunitarie",
                  description:
                    "Organizziamo eventi per la formazione e l’informazione della comunità.",
                },
                presentations: {
                  alt: "Presentazione pubblica",
                  title: "Presentazioni Pubbliche",
                  description:
                    "Partecipiamo attivamente a eventi pubblici per promuovere la mediazione.",
                },
                dialogue: {
                  alt: "Dialogo comunitario",
                  title: "Dialogo Comunitario",
                  description:
                    "Facilitiamo il dialogo tra i diversi gruppi della comunità.",
                },
              },
            },
            vision: {
              title: "Visione Europea",
              text:
                "Vogliamo contribuire alla costruzione di un’Europa unita nella diversità, in cui ogni comunità possa preservare la propria identità culturale partecipando al tempo stesso in modo attivo alla vita sociale ed economica europea.",
            },
          },
          services: {
            title: "I Nostri Servizi",
            intro:
              "Offriamo una gamma completa di servizi di mediazione e consulenza, adattati alle esigenze specifiche delle diverse comunità.",
            cards: {
              civil: {
                title: "Mediazione Civile",
                description:
                  "Risoluzione dei conflitti civili attraverso un dialogo costruttivo e soluzioni win-win.",
                features: {
                  neighborhood: "Conflitti di vicinato",
                  contracts: "Controversie contrattuali",
                  inheritance: "Problemi di eredità",
                },
              },
              family: {
                title: "Mediazione Familiare",
                description:
                  "Supporto specializzato per le famiglie in situazioni di conflitto o crisi.",
                features: {
                  divorce: "Divorzi consensuali",
                  custody: "Affidamento dei figli",
                  intergenerational: "Conflitti tra generazioni",
                },
              },
              commercial: {
                title: "Mediazione Commerciale",
                description:
                  "Soluzioni rapide ed efficaci per le controversie nel mondo degli affari.",
                features: {
                  partners: "Conflitti tra partner",
                  suppliers: "Controversie con i fornitori",
                  litigation: "Contenziosi commerciali",
                },
              },
              community: {
                title: "Mediazione Comunitaria",
                description:
                  "Facilitazione del dialogo tra i diversi gruppi della comunità.",
                features: {
                  dialogue: "Dialogo interculturale",
                  ethnic: "Conflitti etnici",
                  integration: "Integrazione sociale",
                },
              },
              school: {
                title: "Mediazione Scolastica",
                description:
                  "Programmi di mediazione nelle istituzioni scolastiche.",
                features: {
                  students: "Conflitti tra studenti",
                  bullying: "Problemi di bullismo",
                  parentsSchool: "Dialogo tra genitori e scuola",
                },
              },
              legal: {
                title: "Consulenza Legale",
                description:
                  "Informazione e consulenza legale gratuita per la comunità rom.",
                features: {
                  humanRights: "Diritti umani",
                  antiDiscrimination: "Legislazione antidiscriminazione",
                  assistance: "Assistenza legale",
                },
              },
            },
            process: {
              title: "Il Processo di Mediazione",
              steps: {
                one: {
                  title: "Programmi di prevenzione della delinquenza minorile",
                  description:
                    "Laboratori nelle scuole per i giovani rom sul tema della legge, dei diritti e delle responsabilità. Campagne «I giovani e la legge» nelle comunità vulnerabili. Progetti di mentoring tra giovani rom e carabinieri/poliziotti rom.",
                },
                two: {
                  title: "Mediazione comunitaria nei conflitti locali",
                  description:
                    "Formazione di mediatori comunitari rom per interventi extragiudiziali. Mediazione tra cittadini e autorità nelle aree più tese. Interventi in casi di abusi o discriminazioni istituzionali.",
                },
                three: {
                  title: "Migliorare il rapporto tra rom e polizia",
                  description:
                    "Progetti di fiducia reciproca: «La polizia e la comunità rom». Dialoghi diretti tra i leader rom e i rappresentanti della polizia o della gendarmeria. Promozione della diversità nelle strutture del Ministero dell’Interno.",
                },
                four: {
                  title: "Campagne di educazione civica e legale",
                  description:
                    "Diritti dei cittadini vs obblighi verso lo Stato. Sessioni informative su documenti di identità, residenza, casellario giudiziale ecc. Contrasto alla violenza domestica, alla tratta di esseri umani e agli abusi.",
                },
                five: {
                  title: "Interventi in situazioni di emergenza",
                  description:
                    "Collaborazione agli interventi dei vigili del fuoco e della protezione civile nelle comunità rom. Preparazione delle comunità alle calamità (incendi, inondazioni). Campagne di informazione sul numero di emergenza 112 e sul primo soccorso.",
                },
                six: {
                  title: "Partecipazione ai piani locali di ordine pubblico",
                  description:
                    "I rappresentanti dell’associazione possono essere consultati nei consigli locali sui temi della sicurezza pubblica. Monitoraggio degli interventi del Ministero dell’Interno nelle aree sensibili.",
                },
              },
            },
          },
          team: {
            title: "Il Nostro Team",
            intro:
              "Professionisti dedicati con una vasta esperienza nella mediazione e nella risoluzione dei conflitti.",
            members: {
              florinMotoi: {
                name: "Florin Motoi",
                role: "Presidente",
                experience: "30 anni di esperienza",
                specialization: "Mediazione familiare e civile",
                education: "Master in Giurisprudenza, Certificato in mediazione",
              },
              florinDavid: {
                name: "Florin David",
                role: "Vicepresidente",
                experience: "12 anni di esperienza",
                specialization: "Mediazione commerciale e comunitaria",
                education: "Laurea in Psicologia, Certificato CNMR",
              },
              cristianBuceanu: {
                name: "Cristian Buceanu",
                role: "Coordinatore del team tecnico",
                experience: "10 anni di esperienza",
                specialization: "Diritti umani e antidiscriminazione",
                education: "Master in Diritti Umani",
              },
              robertoZatreanu: {
                name: "Roberto Zătreanu",
                role: "Mediatore comunitario",
                experience: "8 anni di esperienza",
                specialization: "Dialogo interculturale e integrazione",
                education: "Laurea in Sociologia, Certificato in mediazione",
              },
            },
            features: {
              certifications: {
                title: "Certificazioni",
                description:
                  "Tutti i nostri mediatori sono certificati dal Consiglio di Mediazione della Romania e possiedono certificazioni europee riconosciute.",
              },
              availability: {
                title: "Disponibilità",
                description:
                  "Siamo disponibili 24/7 per situazioni di emergenza e offriamo consulenze iniziali gratuite.",
              },
              confidentiality: {
                title: "Riservatezza",
                description:
                  "Rispettiamo rigorosamente la riservatezza e la neutralità in tutti i processi di mediazione.",
              },
            },
            results: {
              title: "I Nostri Risultati",
              stats: {
                cases: {
                  value: "500+",
                  label: "Casi risolti",
                },
                success: {
                  value: "95%",
                  label: "Tasso di successo",
                },
                availability: {
                  value: "24/7",
                  label: "Disponibilità",
                },
                experience: {
                  value: "20",
                  label: "Anni di esperienza cumulata",
                },
              },
            },
          },
          contact: {
            title: "Contattaci",
            intro:
              "Siamo qui per aiutarti. Contattaci per qualsiasi domanda o per fissare una consulenza gratuita.",
            info: {
              title: "Informazioni di Contatto",
              items: {
                address: {
                  title: "Indirizzo",
                  content: "str. Iezerului nr. 8,\nSettore 1, Bucarest\nRomania",
                },
                phone: {
                  title: "Telefono",
                  content: "+40 725 693 521\n+40 737 776 845 (Emergenze)",
                },
                email: {
                  title: "Email",
                  content: "medierecomunitara2025@gmail.com",
                },
                schedule: {
                  title: "Orari",
                  content: "Lunedì - Domenica: 24/24",
                },
              },
            },
            freeConsult: {
              title: "Consulenza Gratuita",
              text:
                "La prima consulenza è gratuita! Parla con un mediatore esperto per capire come possiamo aiutarti.",
              button: "Chiama Ora",
            },
            form: {
              title: "Inviaci un Messaggio",
              success:
                "Grazie per il tuo messaggio! Ti contatteremo al più presto.",
              error:
                "Si è verificato un errore. Ti preghiamo di riprovare.",
              nameLabel: "Nome Completo *",
              namePlaceholder: "Inserisci il tuo nome",
              emailLabel: "Email *",
              emailPlaceholder: "esempio@email.com",
              phoneLabel: "Telefono",
              phonePlaceholder: "+40 xxx xxx xxx",
              subjectLabel: "Tipo di Mediazione *",
              subjectPlaceholder: "Seleziona il tipo",
              messageLabel: "Il Tuo Messaggio *",
              messagePlaceholder:
                "Descrivi la tua situazione o la domanda che hai...",
              submit: "Invia Messaggio",
              submitting: "Invio in corso...",
              subjectOptions: {
                civil: "Mediazione civile",
                family: "Mediazione familiare",
                commercial: "Mediazione commerciale",
                community: "Mediazione comunitaria",
                school: "Mediazione scolastica",
                legal: "Consulenza legale",
              },
            },
          },
          footer: {
            description:
              "Promuoviamo il dialogo, la riconciliazione e l’integrazione nello spirito dei valori europei. Siamo impegnati a costruire una società più giusta e inclusiva per tutti.",
            quickLinksTitle: "Link Rapidi",
            contact: {
              title: "Contatti",
              schedule: "Lunedì - Domenica: 24/24",
              responseTime: "Rispondiamo entro 24 ore",
            },
            bottom: {
              copyright:
                "© 2024 Associazione di Mediazione Comunitaria Europea dei Rom.",
              madeWith: "Fatto con",
              forCommunity: "per la comunità.",
            },
            legal: {
              privacy: "Informativa sulla Privacy",
              terms: "Termini e Condizioni",
              gdpr: "GDPR",
            },
          },

        },
      },
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
