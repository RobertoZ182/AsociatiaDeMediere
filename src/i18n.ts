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
          donor: {
            hero: {
              kicker: "Aven Donatori",
              title: "Sastipe le Komunitateske",
              subtitle:
                "Alos sar te ajiutis. Savorre kontribuciya anel klaritet, suport thaj impact.",
            },
            types: {
              time: "Donis TIMP",
              skills: "Donis KOMPETENȚE",
              financial: "Donis resurse FINANCIARE",
              material: "Donis resurse MATERIALE",
            },
            typePicker: {
              label: "Alos o tipo le donatoresko",
              helper: "Tu aloses: {{type}}. O formularo avena adaptime.",
            },
            categories: {
              title: "9.1 – Kategorii le donatorenge",
              subtitle: "Alos o modo sar te des ajutor, sar so tu šaj.",
              items: {
                time: {
                  title: "Donis timp",
                  body: "Voluntariat ande aktivitetura, eventura, logistika, vai suport le komunitatesko.",
                },
                skills: {
                  title: "Donis kompetențe",
                  body: "Del profesionalo džanipen (juridiko, tech, komunikacia, training, mentoring).",
                },
                financial: {
                  title: "Donis resurse financiare",
                  body: "Suportirinis e projektura andar karta. Opral e drepta le donatoreske avena pe email.",
                },
                material: {
                  title: "Donis resurse materiale",
                  body: "Donis butya/materialura. Amen koordinisam e anglal thaj e distribuția.",
                },
              },
            },
            rights: {
              title: "9.2 – Dreptura so avel le DONATORESKE",
              subtitle: "Sar donator, tu avel tuqe drepta thaj transparența.",
              items: {
                r1: "Drept te avel tuqe akses la rapoarte thaj informații",
                r2: "Drept te directionis o ajutor",
                r3: "Drept te avel tuqe intrare ande structura lokală le deciziake",
                r4: "Drept te mangis suport specializat",
              },
              emailNote: {
                title: "Pe email",
                body: "Savorre donatora trubun te den email te primin e drepta thaj aktualizări.",
              },
            },
            form: {
              title: "Formularo le donatoresko",
              subtitle:
                "Pher o date thaj bičhal o formularo pala o tipo le donaciyako.",
              common: {
                fullName: { label: "Namo komplet", placeholder: "Tuqo namo" },
                email: {
                  label: "Email",
                  placeholder: "namo@email.com",
                  note: "Trubul te avel, te primis e drepta le donatoreske pe email.",
                },
                phone: { label: "Telefon (opțional)", placeholder: "+40 ..." },
                successMessage: "Nais tuke! Amen primdam tuqo mesaj.",
              },
              messageForm: {
                info: "Pala {{type}}, bičhal o mesaj thaj kontaktura. Amen phendas pe email.",
                message: {
                  label: "Mesaj",
                  placeholder:
                    "Phen amen sar tu šaj te ajiutis thaj so si tuqi disponibilitate.",
                },
                submit: "Biĉhal o mesaj",
              },
              payment: {
                info: "Pala {{type}}, del o email thaj e date le plăteske. E drepta avena pe email.",
                progress: {
                  label: "Progres le donaciyengo",
                  value: "Avri donime: {{donated}} / Țintă: {{goal}}",
                  percent: "{{percent}}%",
                  note: "Akava progres šaj te avel conectime la date live andar backend.",
                },
                amount: {
                  label: "Suma",
                  note: "Alos e suma so tu šaj.",
                },
                material: {
                  label: "So resurse materiale tu mangas te dones?",
                  placeholder: "ex: gadrura, xaben, echipamente, rechizite",
                  note: "Amen kontaktisam tut pe email te koordinisam.",
                },
                cardSection: {
                  title: "Plata andar karta",
                  subtitle:
                    "Demonstrativ UI. Trubul te avel conectime la procesator real (Stripe/Netopia/etc.).",
                  note: "Na procesin e date brute le kartake bi procesator certificat thaj backend sigur.",
                },
                card: {
                  name: "Namo pe karta",
                  namePlaceholder: "Namo Prenumo",
                  number: "Numero le kartako",
                  numberPlaceholder: "1234 5678 9012 3456",
                  exp: "Expiracia",
                  expPlaceholder: "LL/AA",
                  cvc: "CVC",
                  cvcPlaceholder: "123",
                },
                submit: "Plătește andar karta",
                successPaymentMock:
                  "Demonstrativ: conectis procesator real te finalizis.",
              },
            },
          },
          header: {
            title: "Asociatia le Medijarelpe Comunitară",
            subtitle: "Europake e Romengo",
            logoAlt: "Logo AMCER",
          },
          nav: {
            home: "Khere",
            infoUtil: "Utilo informatsia",
            programeSuport: "Programura pa suporta",
            transparenta: "Transparentia",
            fiiDonator: "Av donatori",
            inscrieTe: "Registrin tu"
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

          gantt: {
            title: "Aktivitetesqo plano 2025 – Jan 2026",
            legend: {
              activity: "Aktiviteti",
              milestone: "Cheio evento"
            },
            tag: {
              activity: "Aktiviteti",
              milestone: "Evento"
            },
            table: {
              nr: "Nr",
              description: "Deskripcija"
            },
            periodsLabel: "Periodura:",
            weekShort: "Sapt. {{week}}",
            weekSingle: "Sapt. {{week}}",
            weekRange: "Sapt. {{start}}–{{end}}",
            weekTooltip: "Saptamana {{week}}",
            a11y: {
              range: "{{id}}: sapt. {{start}}–{{end}}"
            },
            tasks: {
              A1: "Registracija domeno thaj keribe web-pagina",
              A2: "Vorbinimata e voluntarengo ekipasa",
              A3: "Dikhipen thaj distribuția sarcinengo la voluntari",
              A4: "Plano marketingosqo thaj resursengo kerdipen",
              A5: "Strategia pa jekharel romen ande savore Europaqe themura",
              A6: "Kerdipen 10 projektosqe fise pa europaqe programe",
              A7: "Keripen liderengo pa domenura thaj themura",
              A8: "Web-pagina kerdi e liderenca regionala",
              A9: "Dokumentura suportosqe pa sako EU them",
              A10: "Ajutor pa keripen projektura pa finansimasa",
              A11: "Arakhade manuša-resursura ande sako Europaqo them",
              A12: "Diagnoza dokumenti pa romengo situacija",
              A13: "Studii thaj analiza save pomaghen romen",
              A14: "Arakhade komunitatja problemosqe ande Europa",
              A15: "Solucii specifika thaj general pa Europa",
              A16: "Arakhade donatori pa initialo faza",
              A17: "Arakhade lokalne ONG-ura save aven amari misiasa",
              A18: "Preparacija Europaqo evento pa platformaqo lansaripen",
              A19: "Arakhade nevo suportosqe programe pa 2026",
              A20: "Kontinuo koordinacija thaj monitorisari"
            }
          },
          join: {
            hero: {
              kicker: "Aven andre",
              title: "Registrin tu thaj avela parta le AMCER-esko",
              subtitle:
                "Kana tu registrin tu, tu na san numa jekh anav ande lista — tu avel jekh lav, jekh buti, jekh reprezentacia. Keram jekhate decizia, buti thaj zoralipen le komunitetasko.",
              stats: {
                stat1: { label: "So kerel registracia", value: "Parta ande decizia" },
                stat2: { label: "So avel tuće", value: "Rolura & domenura" },
                stat3: { label: "So zoralel", value: "Komuniteto & dignitate" },
              },
            },
            cta: {
              primary: { label: "Registrin tu akana", href: "/inscrie-te" },
              secondary: { label: "Dikhipen so si AMCER", href: "/#about" },
              help: { label: "Mangen ajutor?", href: "/#contact" },
              emailDocuments: {
                label: "Bišinel email le dokumentenca pe registracia",
                href:
                  "mailto:medierecomunitara2025@gmail.com?subject=Registracia%20-%20DOKUMENTURA&body=Sastipe,%0D%0A%0D%0AMe/%20Amen%20mangav%20te%20registrin%20man%20ando%20asociatia.%0D%0AAv%20le%20dokumentura%20atasate%20and-o%20emailos.%0D%0A%0D%0AAnav:%20%0D%0ATelefonos:%20%0D%0AThemutni/%20Oraş:%20%0D%0ARola%20(membru/voluntaro/expert):%20%0D%0ADomeno:%20%0D%0A%0D%0AMulumesc!",
              },
            },
            aside: {
              title: "So te džanes maj angle",
              body:
                "Registracia si jekh paś te avela tu jekh aktivo membru. Jekhate keram planura, konsultacia thaj reprezentacia pe komuniteto.",
              bullets: {
                b1: "Aven informime pe akcione thaj planura",
                b2: "Aven shaj te del tuja ideja thaj te kerel tuja buti",
                b3: "Aven shaj te avel tu jekh reprezentanto ande struktura",
              },
              note: {
                title: "Noticia",
                body:
                  "Te manghes, shaj te registrin tu sar voluntaro, sar membru, va sar expert ande jekh domeno.",
              },
            },
            reasons: {
              title: "Sośke te registrin tu?",
              subtitle:
                "Avereske si but motivura. Avere si sa: te avela tu jekh lav ande decizia thaj te zoralel tuja komuniteto.",
              localDecision: {
                title: "Te avela tu ande lokale/regionalne struktura le deciziaske",
                body:
                  "Te del tuja opinia, te phandel nevoia thaj te kerel tuja kontribucia ande planura kaj trubul pe romane komunitetura.",
              },
              domainStructures: {
                title: "Te avela tu ande struktura le asociațieske pe domeno",
                body:
                  "Sostar jekh domeno trubul manuša save džanen — edukacia, medijacia, legia, socialo, kulturaki buti. Tu shaj te avel jekh.",
              },
              helpCommunity: {
                title: "Te tu simines tu rOM thaj shaj te pomages pe tuvo aproapelo",
                body:
                  "Kana tu avel membru, tu avel maj lačho la resursa, informacia thaj jekhate keribe te pomages pe manuša ande nevoia.",
              },
              referenceGroup: {
                title: "Te avela tu jekh apartenenca ande jekh GRUP de REFERINȚA ROM",
                body:
                  "Jekh grup zoralel identiteto, solidaritetos thaj respektos. Na sem isoleime — sem jekhate.",
              },
            },
            steps: {
              title: "Sar kerdol?",
              subtitle:
                "Trin paśa. Klaro. Lačho. Thaj tu avela maj lačhe informime pa so urmol.",
              stepLabel: "Paso {{step}}",
              step1: {
                title: "Phen amen so san",
                body:
                  "Kompletin formularo, alegen sar mangen te avel (membru/voluntaro/expert) thaj so domeno interesinel tu.",
              },
              step2: {
                title: "Kerdol jekh scurto kontaktos",
                body:
                  "Amaro ekip ka kontaktil tu te phandel detalia thaj te arakhel jekh lačhi rola tuće.",
              },
              step3: {
                title: "Aven ande buti",
                body:
                  "Aven ande konsultacia, grupura pe domeno thaj lokale/regionalne aktivitate. Te avel tu jekh lav, trubul tu te avel andre.",
              },
            },
            faq: {
              title: "Praśnia frekvente",
              subtitle: "Akate arakhes maj but respunsura. Te na, kontaktil amen.",
              q1: "So trubul te kerel te registrin man?",
              a1:
                "Kompletin formularo, phen tuvo interesos thaj amende ka kontaktil tu ande scurto vreme.",
              q2: "Trubul te avel man jekh experiență?",
              a2:
                "Na. Te avel tu jekh inima thaj mangipen te pomages, amende ka arakhas jekh rola tuće.",
              q3: "Sar shaj te kontribuisar?",
              a3:
                "Sostar mangen: konsultacia, voluntariat, informacia, organizacia, proiectura, medijacia, edukacia, komunitarutni buti.",
              q4: "So avela man andar registracia?",
              a4:
                "Aven jekh grup, jekh lav ande decizia, la informacia thaj shansa te zoralel tuja komuniteto ande Europa.",
            },
            final: {
              title: "Avela tu jekh parta le schimbimasko",
              subtitle:
                "Kana tu registrin tu, tu avel jekh glas ande jekhate. Aven te keram jekh Europa maj lačhi le romenge.",
              primary: { label: "Registrin tu akana" },
              secondary: { label: "Kontaktos" },
              disclaimer:
                "Registracia si jekh paś te avela tu membru. Informacia personala si protejime konfidențial.",
            },
          },
          europeMap: {
            title: "Roma Evropako Harta",
            subtitle: "Klikis pe jekh them te dikhes maj but informacia.",
            infoPane: {
              titleIdle: "Klikis pe jekh them",
              bodyIdle: "Klikis pe jekh them ando harta te dikhes detalya akate."
            },
            fallback: {
              title: "Informacia",
              description: "Nane informacia akana pala {{country}}."
            },
            countries: {
              romania: {
                title: "România",
                description:
                  "România si o them andar Europa kaj si o maj baro numaro Roma. O Roma lider akate si Florin Motoi."
              },
              germany: {
                title: "Germania",
                description:
                  "Germania si o maj baro ekonomia ando Europa thaj jekh baro membro ande UE. O Roma komuniteti akate si ledoro Roberto Zatreanu."
              },
              france: {
                title: "Francia",
                description:
                  "Francia si jekh fundatori andar e UE, barvalipe pe kultura, xaben thaj istorija."
              },
              italy: {
                title: "Italia",
                description:
                  "Ande Italia si but Roma komunitetya. O Roma komuniteti akate si ledoro Marius Cirpaci."
              },
              uk: {
                title: "Britania",
                description:
                  "Ando UK si jekh misto Roma populacia andar buter komunitetya. O Roma komuniteti akate si ledoro Cristian Buceanu."
              },
              ireland: {
                title: "Irlanda",
                description:
                  "Ande Irlanda si jekh misto Roma populacia andar buter komunitetya. O Roma komuniteti akate si ledoro Hajnal Servitory."
              }
            }
          }
        },
      },

      // 🇷🇴 ROMANIAN
      ro: {
        translation: {
          support: {
            hero: {
              kicker: "Programe de suport",
              title: "Programele de suport ale asociației",
              subtitle:
                "Sprijin practic, informații verificate și conectare cu oameni și organizații din zona ta.",
              ctaPrograms: "Vezi programele",
              ctaGallery: "Vezi activitatea",
            },
            aside: {
              title: "Cum te ajutăm",
              body:
                "Îți oferim îndrumare și conectare rapidă cu resurse locale: autorități, specialiști, comunități și ONG-uri.",
              b1: "Ghidare pe țară / zonă / regiune",
              b2: "Contacte utile și suport specializat",
              b3: "Conectare la resurse reale din teren",
              noteTitle: "Important",
              noteBody:
                "Recomandăm să ne trimiți locația (țară/oraș) pentru a direcționa suportul cât mai exact.",
            },
            programs: {
              title: "Programe de suport",
              subtitle:
                "Mai jos sunt principalele direcții de sprijin. Te putem orienta în funcție de situația ta.",
              p71: {
                title: "7.1 Asistență specializată în funcție de țară / zonă / regiune",
                body:
                  "Identificăm sprijinul potrivit în funcție de locație: instituții, servicii, proceduri și soluții aplicabile în arealul tău.",
              },
              p72: {
                title: "7.2 Date de contact: autorități locale și specialiști",
                body:
                  "Punem la dispoziție (sau te ghidăm către) contacte relevante: autorități, mediatori, servicii sociale, avocați, psihologi, consilieri.",
              },
              p73: {
                title: "7.3 Cazare și sprijin la alți romi din zonă / regiune",
                body:
                  "Facilităm conectarea la rețele de sprijin comunitar pentru cazare temporară și suport de integrare (în limita posibilităților locale).",
              },
              p74: {
                title: "7.4 Locuri de muncă imediate, sezoniere sau permanente",
                body:
                  "Te ajutăm să identifici oportunități de muncă potrivite: urgență, sezonier, sau angajare stabilă, în funcție de profil și regiune.",
              },
              p75: {
                title: "7.5 ONG-uri și voluntari din arealul de interes și locuire",
                body:
                  "Conectăm beneficiarii cu ONG-uri și voluntari relevanți, pentru sprijin practic, juridic, social sau logistic în zona de locuire.",
              },
            },
            cta: {
              title: "Ai nevoie de suport acum?",
              body:
                "Trimite-ne un mesaj cu țara/orașul și situația ta, iar echipa noastră îți răspunde cu pași concreți.",
              button: "Contactează-ne",
            },
            gallery: {
              title: "Galerie – activități și întâlniri",
              subtitle: "Imagini din întâlniri, sesiuni de informare și consultări comunitare.",
              caption: "Activitate din teren",
              note: "Poți naviga cu săgețile sau cu tastele stânga/dreapta când caruselul e selectat.",
              photoAlt: "Fotografie din activitatea asociației",
              ariaLabel: "Carusel cu fotografii din activitatea asociației",
              prev: "Imaginea anterioară",
              next: "Imaginea următoare",
              goTo: "Mergi la imaginea {{index}}",
              counter: "Imaginea {{current}} din {{total}}",
            },
          },

          donor: {
            hero: {
              kicker: "Fii Donator",
              title: "Susține Comunitatea",
              subtitle:
                "Alege cum vrei să ajuți. Fiecare contribuție aduce claritate, sprijin și impact.",
            },
            types: {
              time: "Donează TIMP",
              skills: "Donează COMPETENȚE",
              financial: "Donează resurse FINANCIARE",
              material: "Donează resurse MATERIALE",
            },
            typePicker: {
              label: "Alege tipul de donator",
              helper:
                "Ai ales: {{type}}. Formularul de mai jos se adaptează automat.",
            },
            categories: {
              title: "9.1 – Categorii de donatori",
              subtitle:
                "Alege forma de sprijin care se potrivește timpului și resurselor tale.",
              items: {
                time: {
                  title: "Donează timp",
                  body: "Voluntariat pentru activități, evenimente, logistică sau sprijin comunitar.",
                },
                skills: {
                  title: "Donează competențe",
                  body: "Oferă expertiză profesională (juridic, tech, comunicare, training, mentoring).",
                },
                financial: {
                  title: "Donează resurse financiare",
                  body: "Susține proiectele prin donație cu cardul. Vei primi drepturile de donator pe email.",
                },
                material: {
                  title: "Donează resurse materiale",
                  body: "Donează bunuri/materiale. Coordonăm preluarea și direcționarea ajutorului.",
                },
              },
            },
            rights: {
              title: "9.2 – Drepturi câștigate de DONATOR",
              subtitle:
                "Ca donator, ai acces la drepturi și instrumente de transparență.",
              items: {
                r1: "Drept de acces la rapoarte și informații",
                r2: "Dreptul de a direcționa ajutorul",
                r3: "Dreptul de a accede în structurile locale de decizie",
                r4: "Dreptul de a cere sprijin specializat",
              },
              emailNote: {
                title: "Transmitere pe email",
                body: "Toți donatorii trebuie să lase un email pentru a primi drepturile și actualizările.",
              },
            },
            form: {
              title: "Formular donator",
              subtitle:
                "Completează datele și trimite formularul potrivit tipului tău de donație.",
              common: {
                fullName: { label: "Nume complet", placeholder: "Numele tău" },
                email: {
                  label: "Email",
                  placeholder: "nume@email.com",
                  note: "Obligatoriu pentru a primi drepturile de donator pe email.",
                },
                phone: { label: "Telefon (opțional)", placeholder: "+40 ..." },
                successMessage: "Mulțumim! Am primit mesajul tău.",
              },
              messageForm: {
                info: "Pentru {{type}}, trimite un mesaj și date de contact. Îți răspundem pe email.",
                message: {
                  label: "Mesaj",
                  placeholder: "Spune-ne cum poți ajuta și disponibilitatea ta.",
                },
                submit: "Trimite mesajul",
              },
              payment: {
                info: "Pentru {{type}}, lasă email-ul și datele de plată. Vei primi drepturile de donator pe email.",
                progress: {
                  label: "Progres donații",
                  value: "S-a donat până acum: {{donated}} / Țintă: {{goal}}",
                  percent: "{{percent}}%",
                  note: "Acest progres poate fi conectat la date live din backend.",
                },
                amount: {
                  label: "Suma donată",
                  note: "Alege o sumă cu care te simți confortabil.",
                },
                material: {
                  label: "Ce resurse materiale vrei să donezi?",
                  placeholder: "ex: haine, alimente, echipamente, rechizite",
                  note: "Te contactăm pe email pentru detalii și coordonare.",
                },
                cardSection: {
                  title: "Plată cu cardul",
                  subtitle:
                    "UI demonstrativ. Conectează la un procesator real (Stripe/Netopia/etc.).",
                  note: "Nu procesa date brute de card fără un furnizor certificat și backend securizat.",
                },
                card: {
                  name: "Nume pe card",
                  namePlaceholder: "Nume Prenume",
                  number: "Număr card",
                  numberPlaceholder: "1234 5678 9012 3456",
                  exp: "Data expirării",
                  expPlaceholder: "LL/AA",
                  cvc: "CVC",
                  cvcPlaceholder: "123",
                },
                submit: "Plătește cu cardul",
                successPaymentMock:
                  "Flux de plată demonstrativ: conectează un procesator real pentru finalizare.",
              },
            },
          },

          header: {
            title: "Asociația de Mediere Comunitară",
            subtitle: "Europeană a Romilor",
            logoAlt: "Logo AMCER",
          },
          nav: {
            home: "Acasă",
            infoUtil: "Informații utile",
            programeSuport: "Programe de suport",
            transparenta: "Transparență",
            fiiDonator: "Fii donator",
            inscrieTe: "Înscrie-te"
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

          gantt: {
            title: "Plan de acțiuni 2025 – Ian 2026",
            legend: {
              activity: "Activitate",
              milestone: "Eveniment / etapă cheie"
            },
            tag: {
              activity: "Activitate",
              milestone: "Eveniment"
            },
            table: {
              nr: "Nr",
              description: "Descriere"
            },
            periodsLabel: "Perioade:",
            weekShort: "Săpt. {{week}}",
            weekSingle: "Săpt. {{week}}",
            weekRange: "Săpt. {{start}}–{{end}}",
            weekTooltip: "Săptămâna {{week}}",
            a11y: {
              range: "{{id}}: săptămâna {{start}}–{{end}}"
            },
            tasks: {
              A1: "Rezervare DOMENIU si Creare PAGINA WEB",
              A2: "Discutii cu ECHIPA de VOLUNTARI",
              A3: "Repartizare SARCINI la VOLUNTARI",
              A4: "Gandirea si implementare PLAN de marketing / atragere beneficiar / cofinantari",
              A5: "Gandirea unei strategii de conectare a romilor din fiecare tara si oras din Europa",
              A6: "Scrierea a 10 fise de proiecte specific care ar putea fi conectate unor programe europene care ne pot sustine pagina web si Misiunea.",
              A7: "Numirea LIDERILOR de DOMENIU si TARA Europeana dupa CONSULTARI",
              A8: "Dezvoltarea pagini web in accord cu Lideri de ZONA / Domenii",
              A9: "Redactarea documentelor suport specific per tara membra UE aduse pe pagina web",
              A10: "Sprijin pentru dezvoltarea fiselor de proiecte pentru obtinerea finantarilor din programe",
              A11: "Identificare de OAMENI RESURSA in fiecare tara Europeana",
              A12: "Redactarea unui document DIAGNOZA privind STAREA LA ZI A ROMILOR in LUME si in EUROPA",
              A13: "Identificarea de STUDII si ANALIZE specifice care pot ajuta romii din fiecare STAT EUROPEAN",
              A14: "Identificarea de comunitati problema in Europa pe fiecare TARA EUROPEANA",
              A15: "Identificarea de SOLUTIi SPECIFICE si GENERAL VALABLE in EUROPA",
              A16: "Identificarea de DONATORI pentru etapa de inceput care pregateste partea tehnica a proiectelor pana primim si primele granturi",
              A17: "Identificare de ONG-uri locale care se pot conecta cu MISIUNEA NOASTRA",
              A18: "Pregatirea unui EVENIMENT EUROPEAN de LANSARE a PLATFORMEI",
              A19: "Identificarea de alte programe suport care pot sustine viziunea de lucru in anul 2026",
              A20: "Coordonare si Monitorizare continua"
            }
          },
          // ✅ ADD THIS under: ro: { translation: { ... } }
          join: {
            hero: {
              kicker: "Devino parte din schimbare",
              title: "Înscrie-te și construiește alături de noi",
              subtitle:
                "Prin înscriere nu ești doar un nume pe o listă — devii o voce în comunitate. Împreună putem influența decizii, crea proiecte și consolida identitatea și demnitatea romilor în Europa.",
              stats: {
                stat1: { label: "Impact", value: "Voce în decizie" },
                stat2: { label: "Implicare", value: "Roluri pe domenii" },
                stat3: { label: "Apartenență", value: "Grup de referință" },
              },
            },
            cta: {
              primary: { label: "Înscrie-te acum", href: "/inscrie-te" },
              secondary: { label: "Află despre asociație", href: "/#about" },
              help: { label: "Ai nevoie de ajutor?", href: "/#contact" },
              emailDocuments: {
                label: "Trimite email cu documentele pentru înscriere",
                href:
                  "mailto:medierecomunitara2025@gmail.com?subject=Înscriere%20-%20Documente&body=Bună,%0D%0A%0D%0ADoresc%20să%20mă%20înscriu%20în%20asociație.%0D%0AAtașez%20documentele%20necesare%20în%20acest%20email.%0D%0A%0D%0ANume:%20%0D%0ATelefon:%20%0D%0AȚară/Oraș:%20%0D%0ARol%20(membru/voluntar/expert):%20%0D%0ADomeniu:%20%0D%0A%0D%0AMulțumesc!",
              },
            },
            aside: {
              title: "Ce primești ca membru",
              body:
                "Înscrierea îți deschide accesul la inițiative, grupuri de lucru și oportunități de reprezentare. Contribuția ta contează, indiferent de rol.",
              bullets: {
                b1: "Acces la informații și inițiative",
                b2: "Posibilitatea de implicare pe domenii",
                b3: "Reprezentare și colaborare în rețea",
              },
              note: {
                title: "Notă",
                body:
                  "Te poți înscrie ca membru, voluntar sau expert — alegi domeniul în care vrei să contribui.",
              },
            },
            reasons: {
              title: "De ce să te înscrii?",
              subtitle:
                "Dacă te regăsești în oricare dintre punctele de mai jos, locul tău e alături de noi.",
              localDecision: {
                title: "Dacă vrei să fii parte din structurile locale / regionale de decizie",
                body:
                  "Implică-te acolo unde se iau deciziile. Contribuie cu idei, soluții și reprezentare reală pentru comunitățile rome.",
              },
              domainStructures: {
                title: "Dacă vrei să faci parte din structurile asociației pe domeniu",
                body:
                  "Educație, mediere, drepturi, social, cultură — avem nevoie de oameni care construiesc. Alege domeniul și implică-te.",
              },
              helpCommunity: {
                title: "Dacă te simți rOM și capabil de a fi de ajutor aproapelui tău",
                body:
                  "Prin înscriere devii parte dintr-o rețea care sprijină, informează și acționează pentru binele celor din jur.",
              },
              referenceGroup: {
                title: "Dacă vrei apartenența ta la un GRUP de REFERINȚĂ ROM",
                body:
                  "Apartenența creează solidaritate, identitate și încredere. Împreună suntem mai puternici și mai vizibili.",
              },
            },
            steps: {
              title: "Cum funcționează înscrierea",
              subtitle: "În 3 pași simpli devii parte din asociație și din rețeaua noastră.",
              stepLabel: "Pasul {{step}}",
              step1: {
                title: "Completează înscrierea",
                body:
                  "Trimite formularul și spune-ne în ce rol vrei să te implici: membru, voluntar sau expert.",
              },
              step2: {
                title: "Stabilim împreună direcția",
                body:
                  "Un reprezentant te contactează pentru a clarifica domeniul, disponibilitatea și modalitatea de implicare.",
              },
              step3: {
                title: "Te alături grupurilor de lucru",
                body:
                  "Participi la structuri locale/regionale sau pe domenii și contribui activ la proiecte și inițiative.",
              },
            },
            faq: {
              title: "Întrebări frecvente",
              subtitle: "Dacă ai alte întrebări, scrie-ne și îți răspundem rapid.",
              q1: "Ce trebuie să fac pentru a mă înscrie?",
              a1:
                "Completează formularul de înscriere. După trimitere, te contactăm pentru pașii următori.",
              q2: "Trebuie să am experiență anterioară?",
              a2:
                "Nu. Avem roluri pentru diferite niveluri de experiență. Importantă este dorința de implicare.",
              q3: "Cum pot contribui concret?",
              a3:
                "Poți ajuta în proiecte, evenimente, comunicare, mediere, educație, suport comunitar sau reprezentare.",
              q4: "Ce beneficii am ca membru?",
              a4:
                "Apartenență, oportunități de implicare, acces la rețea și șansa de a influența decizii și inițiative.",
            },
            final: {
              title: "Hai să construim împreună",
              subtitle:
                "Înscrierea ta înseamnă încă o voce puternică pentru comunitate. Fă pasul acum.",
              primary: { label: "Înscrie-te acum" },
              secondary: { label: "Contactează-ne" },
              disclaimer:
                "Datele tale sunt tratate confidențial. Înscrierea confirmă interesul de a deveni membru/voluntar/expert.",
            },
          },
          europeMap: {
            title: "Harta Romilor din Europa",
            subtitle: "Apasă pe o țară pentru a vedea mai multe informații.",
            infoPane: {
              titleIdle: "Apasă pe o țară",
              bodyIdle: "Selectează o țară de pe hartă pentru a vedea detalii aici."
            },
            fallback: {
              title: "Informații",
              description: "Nu există încă informații disponibile pentru {{country}}."
            },
            countries: {
              romania: {
                title: "România",
                description:
                  "România este țara cu cea mai mare populație de romi din Europa. Liderul romilor aici este Florin Motoi."
              },
              germany: {
                title: "Germania",
                description:
                  "Germania este cea mai mare economie din Europa și un membru-cheie al Uniunii Europene. Comunitatea de romi de aici este condusă de Roberto Zatreanu."
              },
              france: {
                title: "Franța",
                description:
                  "Franța este membru fondator al UE, cunoscută pentru cultura, gastronomia și istoria sa."
              },
              italy: {
                title: "Italia",
                description:
                  "Italia are comunități rome semnificative. Comunitatea de romi de aici este condusă de Marius Cirpaci."
              },
              uk: {
                title: "Regatul Unit",
                description:
                  "Regatul Unit are o populație romă mixtă din comunități diferite. Comunitatea de romi de aici este condusă de Cristian Buceanu."
              },
              ireland: {
                title: "Irlanda",
                description:
                  "Irlanda are o populație romă mixtă din comunități diferite. Comunitatea de romi de aici este condusă de Hajnal Servitory."
              }
            }
          }
        },
      },

      // 🇬🇧 ENGLISH
      en: {
        translation: {
          donor: {
            hero: {
              kicker: "Be a Donor",
              title: "Support the Community",
              subtitle:
                "Choose how you want to help. Every contribution brings clarity, support, and impact.",
            },
            types: {
              time: "Donate Time",
              skills: "Donate Skills",
              financial: "Donate Financial Resources",
              material: "Donate Material Resources",
            },
            typePicker: {
              label: "Select donor type",
              helper:
                "You selected: {{type}}. The form below will adapt to your choice.",
            },
            categories: {
              title: "9.1 – Donor categories",
              subtitle:
                "Pick the kind of support that matches your availability and resources.",
              items: {
                time: {
                  title: "Donate Time",
                  body: "Volunteer time for activities, events, logistics, or community support.",
                },
                skills: {
                  title: "Donate Skills",
                  body: "Offer professional expertise (legal, tech, communication, training, mentoring).",
                },
                financial: {
                  title: "Donate Financial Resources",
                  body: "Support projects with a card donation. You will receive donor rights by email.",
                },
                material: {
                  title: "Donate Material Resources",
                  body: "Offer goods or materials. We can coordinate collection and allocation.",
                },
              },
            },
            rights: {
              title: "9.2 – Donor rights earned",
              subtitle:
                "As a donor, you gain access to specific rights and transparency tools.",
              items: {
                r1: "Right of access to reports and information",
                r2: "Right to direct the help where it is needed",
                r3: "Right to join local decision-making structures",
                r4: "Right to request specialized support",
              },
              emailNote: {
                title: "Email delivery",
                body: "All donors must provide an email address to receive these rights and updates.",
              },
            },
            form: {
              title: "Donor form",
              subtitle:
                "Fill in your details and submit the appropriate form based on your donor type.",
              common: {
                fullName: { label: "Full name", placeholder: "Your name" },
                email: {
                  label: "Email",
                  placeholder: "name@email.com",
                  note: "Required for receiving donor rights by email.",
                },
                phone: { label: "Phone (optional)", placeholder: "+40 ..." },
                successMessage: "Thank you! We received your message.",
              },
              messageForm: {
                info: "For {{type}}, please send a message and contact details. We will reply by email.",
                message: {
                  label: "Message",
                  placeholder: "Tell us how you can help and your availability.",
                },
                submit: "Send message",
              },
              payment: {
                info: "For {{type}}, please provide your email and payment details. You will receive donor rights by email.",
                progress: {
                  label: "Donation progress",
                  value: "Donated so far: {{donated}} / Goal: {{goal}}",
                  percent: "{{percent}}%",
                  note: "This progress can be connected to live data from your backend.",
                },
                amount: {
                  label: "Donation amount",
                  note: "Choose an amount you are comfortable with.",
                },
                material: {
                  label: "What materials do you want to donate?",
                  placeholder: "e.g., clothes, food, equipment, stationery",
                  note: "We will contact you by email to coordinate details.",
                },
                cardSection: {
                  title: "Card payment",
                  subtitle:
                    "This is a UI placeholder. Connect it to a real payment provider (Stripe/Netopia/etc.).",
                  note: "Do not process raw card data without a certified payment provider and secure backend.",
                },
                card: {
                  name: "Name on card",
                  namePlaceholder: "Name Surname",
                  number: "Card number",
                  numberPlaceholder: "1234 5678 9012 3456",
                  exp: "Expiry date",
                  expPlaceholder: "MM/YY",
                  cvc: "CVC",
                  cvcPlaceholder: "123",
                },
                submit: "Pay by card",
                successPaymentMock:
                  "Payment flow placeholder: connect a real payment provider to complete this action.",
              },
            },
          },
          header: {
            title: "Community Mediation Association",
            subtitle: "European Roma",
            logoAlt: "AMCER Logo",
          },
          nav: {
            home: "Home",
            infoUtil: "Useful Information",
            programeSuport: "Support Programs",
            transparenta: "Transparency",
            fiiDonator: "Become a Donor",
            inscrieTe: "Sign Up"
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

          gantt: {
            title: "Action Plan 2025 – Jan 2026",
            legend: {
              activity: "Activity",
              milestone: "Key event / milestone"
            },
            tag: {
              activity: "Activity",
              milestone: "Event"
            },
            table: {
              nr: "No.",
              description: "Description"
            },
            periodsLabel: "Periods:",
            weekShort: "Wk. {{week}}",
            weekSingle: "Wk. {{week}}",
            weekRange: "Wk. {{start}}–{{end}}",
            weekTooltip: "Week {{week}}",
            a11y: {
              range: "{{id}}: week {{start}}–{{end}}"
            },
            tasks: {
              A1: "Domain reservation and website creation",
              A2: "Discussions with the volunteer team",
              A3: "Task allocation to volunteers",
              A4: "Design and implementation of a marketing / outreach / co-funding plan",
              A5: "Designing a strategy to connect Roma communities in each European country and city",
              A6: "Drafting 10 specific project concept notes aligned with European funding programmes",
              A7: "Appointment of domain and country leaders following consultations",
              A8: "Website development in coordination with regional / domain leaders",
              A9: "Drafting country-specific support documents to be published on the website",
              A10: "Support for developing project proposals to access funding programmes",
              A11: "Identification of key resource persons in each European country",
              A12: "Drafting a diagnostic report on the current situation of Roma worldwide and in Europe",
              A13: "Identification of studies and analyses supporting Roma communities in each EU country",
              A14: "Identification of vulnerable communities in each European country",
              A15: "Identification of specific and generally applicable solutions across Europe",
              A16: "Identification of donors for the initial phase preparing technical project components",
              A17: "Identification of local NGOs aligned with our mission",
              A18: "Preparation of a European platform launch event",
              A19: "Identification of additional support programmes for the 2026 vision",
              A20: "Continuous coordination and monitoring"
            }
          },
          // ✅ ADD THIS under: en: { translation: { ... } }

          join: {
            hero: {
              kicker: "Be part of the change",
              title: "Join and build with us",
              subtitle:
                "Registration is more than a form — it’s your voice in the community. Together we can shape decisions, create projects, and strengthen Roma identity and dignity across Europe.",
              stats: {
                stat1: { label: "Impact", value: "A voice in decisions" },
                stat2: { label: "Involvement", value: "Domain-based roles" },
                stat3: { label: "Belonging", value: "A reference group" },
              },
            },
            cta: {
              primary: { label: "Register now", href: "/inscrie-te" },
              secondary: { label: "Learn about the association", href: "/#about" },
              help: { label: "Need help?", href: "/#contact" },
              emailDocuments: {
                label: "Send email with your registration documents",
                href:
                  "mailto:medierecomunitara2025@gmail.com?subject=Registration%20-%20Documents&body=Hello,%0D%0A%0D%0AI%20would%20like%20to%20register%20with%20the%20association.%0D%0AI%20have%20attached%20my%20documents%20to%20this%20email.%0D%0A%0D%0AName:%20%0D%0APhone:%20%0D%0ACountry/City:%20%0D%0ARole%20(member/volunteer/expert):%20%0D%0ADomain:%20%0D%0A%0D%0AThank%20you!",
              },

            },
            aside: {
              title: "What you get as a member",
              body:
                "Joining gives you access to initiatives, working groups, and opportunities for representation. Your contribution matters — whatever your role.",
              bullets: {
                b1: "Access to updates and initiatives",
                b2: "Ways to contribute by domain",
                b3: "Representation and network collaboration",
              },
              note: {
                title: "Note",
                body:
                  "You can join as a member, volunteer, or domain expert — choose how you want to contribute.",
              },
            },
            reasons: {
              title: "Why register?",
              subtitle:
                "If any of the points below resonate with you, your place is with us.",
              localDecision: {
                title: "If you want to be part of local / regional decision structures",
                body:
                  "Be present where decisions are made. Contribute ideas, solutions, and real representation for Roma communities.",
              },
              domainStructures: {
                title: "If you want to join the association’s domain structures",
                body:
                  "Education, mediation, rights, social work, culture — we need builders. Choose a domain and get involved.",
              },
              helpCommunity: {
                title: "If you feel Roma and able to help those around you",
                body:
                  "Joining connects you to a network that supports, informs, and acts for the well-being of others.",
              },
              referenceGroup: {
                title: "If you want to belong to a ROMA reference group",
                body:
                  "Belonging creates solidarity, identity, and trust. Together we are stronger and more visible.",
              },
            },
            steps: {
              title: "How registration works",
              subtitle: "In 3 simple steps you join the association and our network.",
              stepLabel: "Step {{step}}",
              step1: {
                title: "Submit your registration",
                body:
                  "Fill in the form and tell us how you want to contribute: member, volunteer, or expert.",
              },
              step2: {
                title: "We align on the best fit",
                body:
                  "A representative contacts you to confirm your domain, availability, and involvement path.",
              },
              step3: {
                title: "Join working groups",
                body:
                  "Take part in local/regional structures or domain groups and contribute to projects and initiatives.",
              },
            },
            faq: {
              title: "Frequently asked questions",
              subtitle: "If you have more questions, contact us and we’ll reply quickly.",
              q1: "What do I need to do to register?",
              a1:
                "Complete the registration form. After submission, we’ll contact you with the next steps.",
              q2: "Do I need previous experience?",
              a2:
                "No. We have roles for different experience levels. What matters most is willingness to contribute.",
              q3: "How can I contribute in practice?",
              a3:
                "You can help with projects, events, communication, mediation, education, community support, or representation.",
              q4: "What are the benefits of membership?",
              a4:
                "Belonging, opportunities to contribute, access to the network, and the chance to influence decisions and initiatives.",
            },
            final: {
              title: "Let’s build together",
              subtitle:
                "Your registration means one more strong voice for the community. Take the step today.",
              primary: { label: "Register now" },
              secondary: { label: "Contact us" },
              disclaimer:
                "Your data is handled confidentially. Registration confirms your interest to join as a member/volunteer/expert.",
            },
          },
          europeMap: {
            title: "Roma Europe Map",
            subtitle: "Click a country to see more information.",
            infoPane: {
              titleIdle: "Click a country",
              bodyIdle: "Click a country on the map to see details here."
            },
            fallback: {
              title: "Information",
              description: "No additional information available for {{country}} yet."
            },
            countries: {
              romania: {
                title: "Romania",
                description:
                  "Romania is the country with the largest Roma population in Europe. The Roma leader here is Florin Motoi."
              },
              germany: {
                title: "Germany",
                description:
                  "Germany has the largest economy in Europe and is a key member of the European Union. The Roma community here is led by Roberto Zatreanu."
              },
              france: {
                title: "France",
                description:
                  "A founding member of the EU, known for its culture, gastronomy, and history."
              },
              italy: {
                title: "Italy",
                description:
                  "Italy has significant Roma communities. The Roma community here is led by Marius Cirpaci."
              },
              uk: {
                title: "United Kingdom",
                description:
                  "The UK has a mixed Roma population from different communities. The Roma community here is led by Cristian Buceanu."
              },
              ireland: {
                title: "Ireland",
                description:
                  "Ireland has a mixed Roma population from different communities. The Roma community here is led by Hajnal Servitory."
              }
            }
          }
        },
      },

      // 🇩🇪 GERMAN
      de: {
        translation: {
          donor: {
            hero: {
              kicker: "Werde Spender:in",
              title: "Unterstütze die Gemeinschaft",
              subtitle:
                "Wähle, wie du helfen möchtest. Jeder Beitrag schafft Klarheit, Unterstützung und Wirkung.",
            },
            types: {
              time: "Zeit spenden",
              skills: "Kompetenzen spenden",
              financial: "Finanzielle Mittel spenden",
              material: "Sachspenden leisten",
            },
            typePicker: {
              label: "Spendertyp auswählen",
              helper:
                "Ausgewählt: {{type}}. Das Formular passt sich entsprechend an.",
            },
            categories: {
              title: "9.1 – Spenderkategorien",
              subtitle:
                "Wähle die Art der Unterstützung, die zu deinen Ressourcen passt.",
              items: {
                time: {
                  title: "Zeit spenden",
                  body: "Freiwillige Zeit für Aktivitäten, Events, Logistik oder Community-Support.",
                },
                skills: {
                  title: "Kompetenzen spenden",
                  body: "Fachwissen anbieten (Recht, Tech, Kommunikation, Training, Mentoring).",
                },
                financial: {
                  title: "Finanzielle Mittel spenden",
                  body: "Projekte per Kartenzahlung unterstützen. Spenderrechte kommen per E-Mail.",
                },
                material: {
                  title: "Sachspenden leisten",
                  body: "Güter oder Materialien spenden. Wir koordinieren Abholung und Verteilung.",
                },
              },
            },
            rights: {
              title: "9.2 – Erworbenen Spenderrechte",
              subtitle: "Als Spender:in erhältst du Rechte und Transparenz.",
              items: {
                r1: "Recht auf Zugang zu Berichten und Informationen",
                r2: "Recht, die Hilfe zu lenken",
                r3: "Recht, in lokale Entscheidungsstrukturen einzutreten",
                r4: "Recht, spezialisierte Unterstützung anzufordern",
              },
              emailNote: {
                title: "Zustellung per E-Mail",
                body: "Alle Spender:innen müssen eine E-Mail-Adresse angeben, um Rechte und Updates zu erhalten.",
              },
            },
            form: {
              title: "Spendenformular",
              subtitle:
                "Gib deine Daten ein und sende das passende Formular ab.",
              common: {
                fullName: { label: "Vollständiger Name", placeholder: "Dein Name" },
                email: {
                  label: "E-Mail",
                  placeholder: "name@email.com",
                  note: "Erforderlich, um Spenderrechte per E-Mail zu erhalten.",
                },
                phone: { label: "Telefon (optional)", placeholder: "+49 ..." },
                successMessage: "Danke! Wir haben deine Nachricht erhalten.",
              },
              messageForm: {
                info: "Für {{type}}: Bitte sende eine Nachricht und Kontaktdaten. Wir antworten per E-Mail.",
                message: {
                  label: "Nachricht",
                  placeholder: "Wie kannst du helfen? Verfügbarkeit etc.",
                },
                submit: "Nachricht senden",
              },
              payment: {
                info: "Für {{type}}: Bitte E-Mail und Zahlungsdetails angeben. Spenderrechte kommen per E-Mail.",
                progress: {
                  label: "Spendenfortschritt",
                  value: "Bisher gespendet: {{donated}} / Ziel: {{goal}}",
                  percent: "{{percent}}%",
                  note: "Der Fortschritt kann mit Live-Daten aus dem Backend verbunden werden.",
                },
                amount: {
                  label: "Spendenbetrag",
                  note: "Wähle einen Betrag, der für dich passt.",
                },
                material: {
                  label: "Welche Sachspenden möchtest du geben?",
                  placeholder: "z.B. Kleidung, Lebensmittel, Ausrüstung, Schulmaterial",
                  note: "Wir kontaktieren dich per E-Mail zur Abstimmung.",
                },
                cardSection: {
                  title: "Kartenzahlung",
                  subtitle:
                    "UI-Platzhalter. Bitte mit einem echten Zahlungsanbieter verbinden (Stripe/Netopia/etc.).",
                  note: "Keine Roh-Kartendaten ohne zertifizierten Anbieter und sicheren Backend-Prozess verarbeiten.",
                },
                card: {
                  name: "Name auf der Karte",
                  namePlaceholder: "Vorname Nachname",
                  number: "Kartennummer",
                  numberPlaceholder: "1234 5678 9012 3456",
                  exp: "Ablaufdatum",
                  expPlaceholder: "MM/JJ",
                  cvc: "CVC",
                  cvcPlaceholder: "123",
                },
                submit: "Mit Karte zahlen",
                successPaymentMock:
                  "Zahlungsablauf-Platzhalter: Bitte echten Zahlungsanbieter integrieren.",
              },
            },
          },

          header: {
            title: "Gemeinschaftliche Mediationsvereinigung",
            subtitle: "Europäische Roma",
            logoAlt: "AMCER Logo",
          },
          nav: {
            home: "Startseite",
            infoUtil: "Nützliche Informationen",
            programeSuport: "Förderprogramme",
            transparenta: "Transparenz",
            fiiDonator: "Spender werden",
            inscrieTe: "Registrieren"
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

          gantt: {
            title: "Aktionsplan 2025 – Jan 2026",
            legend: {
              activity: "Aktivität",
              milestone: "Schlüsselereignis"
            },
            tag: {
              activity: "Aktivität",
              milestone: "Ereignis"
            },
            table: {
              nr: "Nr.",
              description: "Beschreibung"
            },
            periodsLabel: "Zeiträume:",
            weekShort: "Kw. {{week}}",
            weekSingle: "Kw. {{week}}",
            weekRange: "Kw. {{start}}–{{end}}",
            weekTooltip: "Kalenderwoche {{week}}",
            a11y: {
              range: "{{id}}: Woche {{start}}–{{end}}"
            },
            tasks: {
              A1: "Domainreservierung und Website-Erstellung",
              A2: "Gespräche mit dem Freiwilligenteam",
              A3: "Aufgabenverteilung an Freiwillige",
              A4: "Entwicklung und Umsetzung eines Marketing- und Finanzierungsplans",
              A5: "Strategie zur Vernetzung von Roma-Gemeinschaften in Europa",
              A6: "Erstellung von 10 Projektkonzepten für EU-Programme",
              A7: "Benennung von Fach- und Länderkoordinatoren",
              A8: "Website-Entwicklung mit regionalen Fachleitern",
              A9: "Erstellung länderspezifischer Unterstützungsdokumente",
              A10: "Unterstützung bei der Entwicklung von Förderanträgen",
              A11: "Identifizierung von Schlüsselpersonen in jedem europäischen Land",
              A12: "Erstellung eines Diagnoseberichts zur Lage der Roma",
              A13: "Identifizierung relevanter Studien und Analysen",
              A14: "Identifizierung benachteiligter Gemeinschaften",
              A15: "Identifizierung spezifischer und allgemeiner Lösungen",
              A16: "Identifizierung von Spendern für die Anfangsphase",
              A17: "Identifizierung lokaler NGOs im Einklang mit unserer Mission",
              A18: "Vorbereitung einer europäischen Plattform-Auftaktveranstaltung",
              A19: "Identifizierung weiterer Förderprogramme für 2026",
              A20: "Laufende Koordination und Überwachung"
            }
          },

          // ✅ ADD THIS under: de: { translation: { ... } }
          join: {
            hero: {
              kicker: "Werde Teil des Wandels",
              title: "Registriere dich und gestalte mit",
              subtitle:
                "Die Registrierung ist mehr als ein Formular — sie ist deine Stimme in der Gemeinschaft. Gemeinsam können wir Entscheidungen mitprägen, Projekte aufbauen und Identität sowie Würde der Roma in Europa stärken.",
              stats: {
                stat1: { label: "Wirkung", value: "Stimme in Entscheidungen" },
                stat2: { label: "Engagement", value: "Rollen nach Bereichen" },
                stat3: { label: "Zugehörigkeit", value: "Referenzgruppe" },
              },
            },
            cta: {
              primary: { label: "Jetzt registrieren", href: "/inscrie-te" },
              secondary: { label: "Mehr über den Verein", href: "/#about" },
              help: { label: "Brauchst du Hilfe?", href: "/#contact" },
              emailDocuments: {
                label: "E-Mail mit Ihren Unterlagen zur Anmeldung senden",
                href:
                  "mailto:medierecomunitara2025@gmail.com?subject=Anmeldung%20-%20Unterlagen&body=Hallo,%0D%0A%0D%0AIch%20m%C3%B6chte%20mich%20bei%20der%20Vereinigung%20anmelden.%0D%0AIch%20habe%20meine%20Unterlagen%20an%20diese%20E-Mail%20angeh%C3%A4ngt.%0D%0A%0D%0AName:%20%0D%0ATelefon:%20%0D%0ALand/Stadt:%20%0D%0ARolle%20(Mitglied/Freiwillige*r/Expert*in):%20%0D%0ABereich:%20%0D%0A%0D%0AVielen%20Dank!",
              },

            },
            aside: {
              title: "Was du als Mitglied bekommst",
              body:
                "Mit deiner Anmeldung erhältst du Zugang zu Initiativen, Arbeitsgruppen und Möglichkeiten zur Vertretung. Dein Beitrag zählt — in jeder Rolle.",
              bullets: {
                b1: "Zugang zu Informationen und Initiativen",
                b2: "Mitwirkung nach Themenbereichen",
                b3: "Vertretung und Zusammenarbeit im Netzwerk",
              },
              note: {
                title: "Hinweis",
                body:
                  "Du kannst als Mitglied, freiwillige Person oder Expert*in beitreten — wähle deinen Weg der Mitwirkung.",
              },
            },
            reasons: {
              title: "Warum registrieren?",
              subtitle:
                "Wenn dich einer der folgenden Punkte anspricht, ist dein Platz bei uns.",
              localDecision: {
                title: "Wenn du Teil lokaler / regionaler Entscheidungsstrukturen sein willst",
                body:
                  "Sei dort, wo Entscheidungen getroffen werden. Bringe Ideen, Lösungen und echte Vertretung für Roma-Gemeinschaften ein.",
              },
              domainStructures: {
                title: "Wenn du in thematischen Strukturen des Vereins mitwirken willst",
                body:
                  "Bildung, Mediation, Rechte, Soziales, Kultur — wir brauchen Menschen, die aufbauen. Wähle einen Bereich und mach mit.",
              },
              helpCommunity: {
                title: "Wenn du dich als Roma fühlst und anderen helfen willst",
                body:
                  "Deine Anmeldung verbindet dich mit einem Netzwerk, das unterstützt, informiert und handelt — für die Menschen um dich herum.",
              },
              referenceGroup: {
                title: "Wenn du zu einer ROMA-Referenzgruppe gehören willst",
                body:
                  "Zugehörigkeit schafft Solidarität, Identität und Vertrauen. Gemeinsam sind wir stärker und sichtbarer.",
              },
            },
            steps: {
              title: "So funktioniert die Anmeldung",
              subtitle: "In 3 einfachen Schritten wirst du Teil des Vereins und Netzwerks.",
              stepLabel: "Schritt {{step}}",
              step1: {
                title: "Anmeldung absenden",
                body:
                  "Fülle das Formular aus und sag uns, wie du dich einbringen möchtest: Mitglied, freiwillig oder Expert*in.",
              },
              step2: {
                title: "Gemeinsam passend einordnen",
                body:
                  "Wir kontaktieren dich, um Bereich, Verfügbarkeit und Mitwirkung zu klären.",
              },
              step3: {
                title: "Arbeitsgruppen beitreten",
                body:
                  "Nimm an lokalen/regionalen Strukturen oder Fachgruppen teil und wirke an Projekten und Initiativen mit.",
              },
            },
            faq: {
              title: "Häufige Fragen",
              subtitle: "Weitere Fragen? Schreib uns — wir antworten schnell.",
              q1: "Was muss ich tun, um mich zu registrieren?",
              a1:
                "Fülle das Anmeldeformular aus. Danach melden wir uns mit den nächsten Schritten.",
              q2: "Brauche ich Vorerfahrung?",
              a2:
                "Nein. Es gibt Rollen für unterschiedliche Erfahrungsstufen. Wichtig ist die Bereitschaft mitzuwirken.",
              q3: "Wie kann ich konkret helfen?",
              a3:
                "Durch Projekte, Events, Kommunikation, Mediation, Bildung, Community-Support oder Vertretung.",
              q4: "Welche Vorteile habe ich als Mitglied?",
              a4:
                "Zugehörigkeit, Mitwirkungsmöglichkeiten, Zugang zum Netzwerk und Einfluss auf Entscheidungen und Initiativen.",
            },
            final: {
              title: "Lass uns gemeinsam gestalten",
              subtitle:
                "Deine Registrierung bedeutet eine starke Stimme mehr für die Gemeinschaft. Mach den Schritt heute.",
              primary: { label: "Jetzt registrieren" },
              secondary: { label: "Kontakt" },
              disclaimer:
                "Deine Daten werden vertraulich behandelt. Die Registrierung bestätigt dein Interesse als Mitglied/Freiwillige*r/Expert*in.",
            },
          },
          europeMap: {
            title: "Roma-Karte Europas",
            subtitle: "Klicke auf ein Land, um mehr Informationen zu sehen.",
            infoPane: {
              titleIdle: "Klicke auf ein Land",
              bodyIdle: "Wähle ein Land auf der Karte aus, um hier Details zu sehen."
            },
            fallback: {
              title: "Information",
              description:
                "Derzeit sind keine weiteren Informationen für {{country}} verfügbar."
            },
            countries: {
              romania: {
                title: "Rumänien",
                description:
                  "Rumänien ist das Land mit der größten Roma-Bevölkerung in Europa. Der Roma-Leiter hier ist Florin Motoi."
              },
              germany: {
                title: "Deutschland",
                description:
                  "Deutschland hat die größte Volkswirtschaft Europas und ist ein wichtiges Mitglied der Europäischen Union. Die Roma-Gemeinschaft hier wird von Roberto Zatreanu geleitet."
              },
              france: {
                title: "Frankreich",
                description:
                  "Ein Gründungsmitglied der EU, bekannt für Kultur, Gastronomie und Geschichte."
              },
              italy: {
                title: "Italien",
                description:
                  "Italien hat bedeutende Roma-Gemeinschaften. Die Roma-Gemeinschaft hier wird von Marius Cirpaci geleitet."
              },
              uk: {
                title: "Vereinigtes Königreich",
                description:
                  "Im Vereinigten Königreich gibt es eine gemischte Roma-Bevölkerung aus verschiedenen Gemeinschaften. Die Roma-Gemeinschaft hier wird von Cristian Buceanu geleitet."
              },
              ireland: {
                title: "Irland",
                description:
                  "In Irland gibt es eine gemischte Roma-Bevölkerung aus verschiedenen Gemeinschaften. Die Roma-Gemeinschaft hier wird von Hajnal Servitory geleitet."
              }
            }
          }
        },
      },

      // 🇫🇷 FRENCH
      fr: {
        translation: {
          donor: {
            hero: {
              kicker: "Devenir Donateur",
              title: "Soutenir la Communauté",
              subtitle:
                "Choisissez votre manière d’aider. Chaque contribution apporte clarté, soutien et impact.",
            },
            types: {
              time: "Donner du TEMPS",
              skills: "Donner des COMPÉTENCES",
              financial: "Donner des ressources FINANCIÈRES",
              material: "Donner des ressources MATÉRIELLES",
            },
            typePicker: {
              label: "Choisir le type de donateur",
              helper:
                "Vous avez choisi : {{type}}. Le formulaire s’adapte automatiquement.",
            },
            categories: {
              title: "9.1 – Catégories de donateurs",
              subtitle:
                "Choisissez le type de soutien qui correspond à vos possibilités.",
              items: {
                time: {
                  title: "Donner du temps",
                  body: "Bénévolat pour activités, événements, logistique ou soutien communautaire.",
                },
                skills: {
                  title: "Donner des compétences",
                  body: "Proposer une expertise (juridique, tech, communication, formation, mentorat).",
                },
                financial: {
                  title: "Donner des ressources financières",
                  body: "Soutenir les projets par don par carte. Vous recevrez vos droits par email.",
                },
                material: {
                  title: "Donner des ressources matérielles",
                  body: "Donner des biens/matériels. Nous coordonnons la collecte et l’affectation.",
                },
              },
            },
            rights: {
              title: "9.2 – Droits acquis du DONATEUR",
              subtitle:
                "En tant que donateur, vous obtenez des droits et des outils de transparence.",
              items: {
                r1: "Droit d’accès aux rapports et aux informations",
                r2: "Droit d’orienter l’aide",
                r3: "Droit d’intégrer les structures locales de décision",
                r4: "Droit de demander un soutien spécialisé",
              },
              emailNote: {
                title: "Envoi par email",
                body: "Tous les donateurs doivent fournir un email pour recevoir ces droits et mises à jour.",
              },
            },
            form: {
              title: "Formulaire donateur",
              subtitle:
                "Renseignez vos informations et envoyez le formulaire selon votre type de don.",
              common: {
                fullName: { label: "Nom complet", placeholder: "Votre nom" },
                email: {
                  label: "Email",
                  placeholder: "nom@email.com",
                  note: "Obligatoire pour recevoir les droits du donateur par email.",
                },
                phone: { label: "Téléphone (optionnel)", placeholder: "+33 ..." },
                successMessage: "Merci ! Nous avons reçu votre message.",
              },
              messageForm: {
                info: "Pour {{type}}, envoyez un message et vos coordonnées. Nous répondrons par email.",
                message: {
                  label: "Message",
                  placeholder:
                    "Expliquez comment vous pouvez aider et vos disponibilités.",
                },
                submit: "Envoyer le message",
              },
              payment: {
                info: "Pour {{type}}, indiquez votre email et vos informations de paiement. Les droits seront envoyés par email.",
                progress: {
                  label: "Progression des dons",
                  value: "Déjà donné : {{donated}} / Objectif : {{goal}}",
                  percent: "{{percent}}%",
                  note: "Cette progression peut être connectée à des données live du backend.",
                },
                amount: {
                  label: "Montant du don",
                  note: "Choisissez un montant qui vous convient.",
                },
                material: {
                  label: "Quels biens souhaitez-vous donner ?",
                  placeholder: "ex : vêtements, nourriture, équipement, fournitures",
                  note: "Nous vous contacterons par email pour coordonner.",
                },
                cardSection: {
                  title: "Paiement par carte",
                  subtitle:
                    "UI de démonstration. À connecter à un prestataire réel (Stripe/Netopia/etc.).",
                  note: "Ne traitez pas de données carte brutes sans prestataire certifié et backend sécurisé.",
                },
                card: {
                  name: "Nom sur la carte",
                  namePlaceholder: "Nom Prénom",
                  number: "Numéro de carte",
                  numberPlaceholder: "1234 5678 9012 3456",
                  exp: "Date d’expiration",
                  expPlaceholder: "MM/AA",
                  cvc: "CVC",
                  cvcPlaceholder: "123",
                },
                submit: "Payer par carte",
                successPaymentMock:
                  "Flux de paiement démo : intégrez un prestataire réel pour finaliser.",
              },
            },
          },
          header: {
            title: "Association de Médiation Communautaire",
            subtitle: "Roms Européens",
            logoAlt: "Logo AMCER",
          },
          nav: {
            home: "Accueil",
            infoUtil: "Informations utiles",
            programeSuport: "Programmes de soutien",
            transparenta: "Transparence",
            fiiDonator: "Devenir donateur",
            inscrieTe: "S’inscrire"
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

          gantt: {
            title: "Plan d’action 2025 – Jan 2026",
            legend: {
              activity: "Activité",
              milestone: "Événement clé"
            },
            tag: {
              activity: "Activité",
              milestone: "Événement"
            },
            table: {
              nr: "N°",
              description: "Description"
            },
            periodsLabel: "Périodes :",
            weekShort: "Sem. {{week}}",
            weekSingle: "Sem. {{week}}",
            weekRange: "Sem. {{start}}–{{end}}",
            weekTooltip: "Semaine {{week}}",
            a11y: {
              range: "{{id}} : semaine {{start}}–{{end}}"
            },
            tasks: {
              A1: "Réservation du domaine et création du site web",
              A2: "Discussions avec l’équipe de bénévoles",
              A3: "Répartition des tâches aux bénévoles",
              A4: "Élaboration et mise en œuvre d’un plan marketing et de financement",
              A5: "Stratégie de mise en réseau des communautés roms en Europe",
              A6: "Rédaction de 10 fiches projets pour programmes européens",
              A7: "Nomination des responsables de domaine et de pays",
              A8: "Développement du site web avec les responsables régionaux",
              A9: "Rédaction de documents de soutien par pays de l’UE",
              A10: "Soutien à l’élaboration de demandes de financement",
              A11: "Identification des personnes-ressources dans chaque pays",
              A12: "Rédaction d’un rapport de diagnostic sur la situation des Roms",
              A13: "Identification d’études et d’analyses pertinentes",
              A14: "Identification des communautés vulnérables",
              A15: "Identification de solutions spécifiques et générales",
              A16: "Identification de donateurs pour la phase initiale",
              A17: "Identification d’ONG locales alignées sur notre mission",
              A18: "Préparation d’un événement européen de lancement",
              A19: "Identification de programmes de soutien pour 2026",
              A20: "Coordination et suivi continus"
            }
          },
          join: {
            hero: {
              kicker: "Devenez acteur du changement",
              title: "Inscrivez-vous et construisons ensemble",
              subtitle:
                "S’inscrire, ce n’est pas seulement remplir un formulaire — c’est faire entendre votre voix. Ensemble, nous pouvons influencer les décisions, créer des projets et renforcer l’identité et la dignité des Roms en Europe.",
              stats: {
                stat1: { label: "Impact", value: "Une voix dans les décisions" },
                stat2: { label: "Engagement", value: "Rôles par domaine" },
                stat3: { label: "Appartenance", value: "Groupe de référence" },
              },
            },
            cta: {
              primary: { label: "S’inscrire maintenant", href: "/inscrie-te" },
              secondary: { label: "Découvrir l’association", href: "/#about" },
              help: { label: "Besoin d’aide ?", href: "/#contact" },
              emailDocuments: {
                label: "Envoyer un e-mail avec vos documents d’inscription",
                href:
                  "mailto:medierecomunitara2025@gmail.com?subject=Inscription%20-%20Documents&body=Bonjour,%0D%0A%0D%0AJe%20souhaite%20m%E2%80%99inscrire%20%C3%A0%20l%E2%80%99association.%0D%0AJe%20joins%20mes%20documents%20%C3%A0%20cet%20e-mail.%0D%0A%0D%0ANom:%20%0D%0AT%C3%A9l%C3%A9phone:%20%0D%0APays/Ville:%20%0D%0AR%C3%B4le%20(membre/b%C3%A9n%C3%A9vole/expert):%20%0D%0ADomaine:%20%0D%0A%0D%0AMerci!",
              },

            },
            aside: {
              title: "Ce que vous obtenez",
              body:
                "Votre inscription vous donne accès aux initiatives, groupes de travail et opportunités de représentation. Votre contribution compte — quel que soit votre rôle.",
              bullets: {
                b1: "Accès aux informations et initiatives",
                b2: "Participation par domaines",
                b3: "Représentation et réseau",
              },
              note: {
                title: "Note",
                body:
                  "Vous pouvez vous inscrire comme membre, bénévole ou expert — choisissez votre manière de contribuer.",
              },
            },
            reasons: {
              title: "Pourquoi s’inscrire ?",
              subtitle:
                "Si l’un de ces points vous parle, votre place est avec nous.",
              localDecision: {
                title: "Si vous voulez faire partie des structures locales / régionales de décision",
                body:
                  "Être présent là où les décisions se prennent. Apporter des idées, des solutions et une représentation réelle des communautés roms.",
              },
              domainStructures: {
                title: "Si vous voulez intégrer les structures de l’association par domaine",
                body:
                  "Éducation, médiation, droits, social, culture — nous avons besoin de bâtisseurs. Choisissez un domaine et impliquez-vous.",
              },
              helpCommunity: {
                title: "Si vous vous sentez Rom et capable d’aider les autres",
                body:
                  "Votre inscription vous relie à un réseau qui soutient, informe et agit pour le bien commun.",
              },
              referenceGroup: {
                title: "Si vous voulez appartenir à un GROUPE DE RÉFÉRENCE ROM",
                body:
                  "L’appartenance crée solidarité, identité et confiance. Ensemble, nous sommes plus forts et plus visibles.",
              },
            },
            steps: {
              title: "Comment ça marche",
              subtitle: "En 3 étapes simples, vous rejoignez l’association et notre réseau.",
              stepLabel: "Étape {{step}}",
              step1: {
                title: "Envoyer votre inscription",
                body:
                  "Remplissez le formulaire et indiquez votre rôle : membre, bénévole ou expert.",
              },
              step2: {
                title: "Aligner la meilleure implication",
                body:
                  "Un représentant vous contacte pour confirmer le domaine, la disponibilité et la manière de participer.",
              },
              step3: {
                title: "Rejoindre les groupes de travail",
                body:
                  "Participez aux structures locales/régionales ou aux groupes thématiques et contribuez aux projets.",
              },
            },
            faq: {
              title: "Questions fréquentes",
              subtitle: "Une question ? Contactez-nous — réponse rapide.",
              q1: "Que dois-je faire pour m’inscrire ?",
              a1:
                "Remplissez le formulaire d’inscription. Ensuite, nous vous contacterons pour la suite.",
              q2: "Faut-il avoir de l’expérience ?",
              a2:
                "Non. Il existe des rôles pour tous les niveaux. L’essentiel est l’envie de s’impliquer.",
              q3: "Comment puis-je contribuer concrètement ?",
              a3:
                "Projets, événements, communication, médiation, éducation, soutien communautaire ou représentation.",
              q4: "Quels sont les bénéfices de l’adhésion ?",
              a4:
                "Appartenance, opportunités d’engagement, accès au réseau et influence sur les décisions et initiatives.",
            },
            final: {
              title: "Construisons ensemble",
              subtitle:
                "Votre inscription, c’est une voix forte de plus pour la communauté. Faites le pas aujourd’hui.",
              primary: { label: "S’inscrire maintenant" },
              secondary: { label: "Nous contacter" },
              disclaimer:
                "Vos données sont traitées de manière confidentielle. L’inscription confirme votre intérêt à rejoindre l’association.",
            },
          },
          europeMap: {
            title: "Carte des Roms en Europe",
            subtitle: "Cliquez sur un pays pour voir plus d’informations.",
            infoPane: {
              titleIdle: "Cliquez sur un pays",
              bodyIdle: "Sélectionnez un pays sur la carte pour voir les détails ici."
            },
            fallback: {
              title: "Informations",
              description:
                "Aucune information supplémentaire n’est disponible pour {{country}} pour le moment."
            },
            countries: {
              romania: {
                title: "Roumanie",
                description:
                  "La Roumanie est le pays ayant la plus grande population rom en Europe. Le leader rom ici est Florin Motoi."
              },
              germany: {
                title: "Allemagne",
                description:
                  "L’Allemagne possède la plus grande économie d’Europe et est un membre clé de l’Union européenne. La communauté rom ici est dirigée par Roberto Zatreanu."
              },
              france: {
                title: "France",
                description:
                  "Membre fondateur de l’UE, connue pour sa culture, sa gastronomie et son histoire."
              },
              italy: {
                title: "Italie",
                description:
                  "L’Italie compte d’importantes communautés roms. La communauté rom ici est dirigée par Marius Cirpaci."
              },
              uk: {
                title: "Royaume-Uni",
                description:
                  "Le Royaume-Uni a une population rom mixte issue de différentes communautés. La communauté rom ici est dirigée par Cristian Buceanu."
              },
              ireland: {
                title: "Irlande",
                description:
                  "L’Irlande a une population rom mixte issue de différentes communautés. La communauté rom ici est dirigée par Hajnal Servitory."
              }
            }
          }


        },
      },

      // 🇮🇹 ITALIAN
      it: {
        translation: {
          donor: {
            hero: {
              kicker: "Diventa Donatore",
              title: "Sostieni la Comunità",
              subtitle:
                "Scegli come aiutare. Ogni contributo porta chiarezza, supporto e impatto.",
            },
            types: {
              time: "Dona TEMPO",
              skills: "Dona COMPETENZE",
              financial: "Dona risorse FINANZIARIE",
              material: "Dona risorse MATERIALI",
            },
            typePicker: {
              label: "Seleziona il tipo di donatore",
              helper:
                "Hai selezionato: {{type}}. Il modulo si adatta automaticamente.",
            },
            categories: {
              title: "9.1 – Categorie di donatori",
              subtitle:
                "Scegli il tipo di aiuto che si adatta alle tue possibilità.",
              items: {
                time: {
                  title: "Dona tempo",
                  body: "Volontariato per attività, eventi, logistica o supporto alla comunità.",
                },
                skills: {
                  title: "Dona competenze",
                  body: "Offri competenze professionali (legale, tech, comunicazione, formazione, mentoring).",
                },
                financial: {
                  title: "Dona risorse finanziarie",
                  body: "Sostieni i progetti con donazione via carta. Riceverai i diritti via email.",
                },
                material: {
                  title: "Dona risorse materiali",
                  body: "Dona beni/materiali. Coordiniamo ritiro e destinazione dell’aiuto.",
                },
              },
            },
            rights: {
              title: "9.2 – Diritti del DONATORE",
              subtitle:
                "Come donatore, ottieni diritti e strumenti di trasparenza.",
              items: {
                r1: "Diritto di accesso a report e informazioni",
                r2: "Diritto di indirizzare l’aiuto",
                r3: "Diritto di accedere alle strutture locali decisionali",
                r4: "Diritto di richiedere supporto specializzato",
              },
              emailNote: {
                title: "Invio via email",
                body: "Tutti i donatori devono fornire un’email per ricevere diritti e aggiornamenti.",
              },
            },
            form: {
              title: "Modulo donatore",
              subtitle:
                "Inserisci i dati e invia il modulo in base al tipo di donazione.",
              common: {
                fullName: { label: "Nome completo", placeholder: "Il tuo nome" },
                email: {
                  label: "Email",
                  placeholder: "nome@email.com",
                  note: "Obbligatoria per ricevere i diritti del donatore via email.",
                },
                phone: { label: "Telefono (opzionale)", placeholder: "+39 ..." },
                successMessage: "Grazie! Abbiamo ricevuto il tuo messaggio.",
              },
              messageForm: {
                info: "Per {{type}}, invia un messaggio e i contatti. Risponderemo via email.",
                message: {
                  label: "Messaggio",
                  placeholder: "Dicci come puoi aiutare e la tua disponibilità.",
                },
                submit: "Invia messaggio",
              },
              payment: {
                info: "Per {{type}}, inserisci email e dettagli di pagamento. Riceverai i diritti via email.",
                progress: {
                  label: "Progresso donazioni",
                  value: "Donato finora: {{donated}} / Obiettivo: {{goal}}",
                  percent: "{{percent}}%",
                  note: "Questo progresso può essere collegato a dati live dal backend.",
                },
                amount: {
                  label: "Importo della donazione",
                  note: "Scegli un importo con cui ti senti a tuo agio.",
                },
                material: {
                  label: "Che materiali vuoi donare?",
                  placeholder: "es: vestiti, cibo, attrezzature, cancelleria",
                  note: "Ti contatteremo via email per coordinare i dettagli.",
                },
                cardSection: {
                  title: "Pagamento con carta",
                  subtitle:
                    "UI dimostrativa. Collegala a un provider reale (Stripe/Netopia/etc.).",
                  note: "Non elaborare dati carta grezzi senza provider certificato e backend sicuro.",
                },
                card: {
                  name: "Nome sulla carta",
                  namePlaceholder: "Nome Cognome",
                  number: "Numero carta",
                  numberPlaceholder: "1234 5678 9012 3456",
                  exp: "Scadenza",
                  expPlaceholder: "MM/AA",
                  cvc: "CVC",
                  cvcPlaceholder: "123",
                },
                submit: "Paga con carta",
                successPaymentMock:
                  "Flusso pagamento dimostrativo: integra un provider reale per completare.",
              },
            },
          },

          header: {
            title: "Associazione di Mediazione Comunitaria",
            subtitle: "Rom Europei",
            logoAlt: "Logo AMCER",
          },
          nav: {
            home: "Pagina Principale",
            infoUtil: "Informazioni utili",
            programeSuport: "Programmi di supporto",
            transparenta: "Trasparenza",
            fiiDonator: "Diventa donatore",
            inscrieTe: "Registrati"

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

          gantt: {
            title: "Piano d’azione 2025 – Gen 2026",
            legend: {
              activity: "Attività",
              milestone: "Evento chiave"
            },
            tag: {
              activity: "Attività",
              milestone: "Evento"
            },
            table: {
              nr: "N.",
              description: "Descrizione"
            },
            periodsLabel: "Periodi:",
            weekShort: "Sett. {{week}}",
            weekSingle: "Sett. {{week}}",
            weekRange: "Sett. {{start}}–{{end}}",
            weekTooltip: "Settimana {{week}}",
            a11y: {
              range: "{{id}}: settimana {{start}}–{{end}}"
            },
            tasks: {
              A1: "Registrazione del dominio e creazione del sito web",
              A2: "Discussioni con il team di volontari",
              A3: "Assegnazione dei compiti ai volontari",
              A4: "Sviluppo e implementazione di un piano di marketing e finanziamento",
              A5: "Strategia di collegamento delle comunità rom in Europa",
              A6: "Redazione di 10 schede progetto per programmi europei",
              A7: "Nomina dei responsabili di settore e paese",
              A8: "Sviluppo del sito web con i responsabili regionali",
              A9: "Redazione di documenti di supporto specifici per paese UE",
              A10: "Supporto allo sviluppo di proposte di finanziamento",
              A11: "Identificazione delle persone chiave in ogni paese europeo",
              A12: "Redazione di un rapporto diagnostico sulla situazione dei rom",
              A13: "Identificazione di studi e analisi rilevanti",
              A14: "Identificazione delle comunità vulnerabili",
              A15: "Identificazione di soluzioni specifiche e generali",
              A16: "Identificazione di donatori per la fase iniziale",
              A17: "Identificazione di ONG locali allineate alla missione",
              A18: "Preparazione di un evento europeo di lancio della piattaforma",
              A19: "Identificazione di programmi di supporto per il 2026",
              A20: "Coordinamento e monitoraggio continui"
            }
          },
          join: {
            hero: {
              kicker: "Diventa parte del cambiamento",
              title: "Iscriviti e costruiamo insieme",
              subtitle:
                "Iscriversi non è solo compilare un modulo — è dare voce alla comunità. Insieme possiamo influenzare decisioni, creare progetti e rafforzare identità e dignità dei Rom in Europa.",
              stats: {
                stat1: { label: "Impatto", value: "Voce nelle decisioni" },
                stat2: { label: "Partecipazione", value: "Ruoli per settore" },
                stat3: { label: "Appartenenza", value: "Gruppo di riferimento" },
              },
            },
            cta: {
              primary: { label: "Iscriviti ora", href: "/inscrie-te" },
              secondary: { label: "Scopri l’associazione", href: "/#about" },
              help: { label: "Hai bisogno di aiuto?", href: "/#contact" },
              emailDocuments: {
                label: "Invia un’email con i documenti per l’iscrizione",
                href:
                  "mailto:medierecomunitara2025@gmail.com?subject=Iscrizione%20-%20Documenti&body=Ciao,%0D%0A%0D%0AVorrei%20iscrivermi%20all%E2%80%99associazione.%0D%0AHo%20allegato%20i%20miei%20documenti%20a%20questa%20email.%0D%0A%0D%0ANome:%20%0D%0ATelefono:%20%0D%0APaese/Citt%C3%A0:%20%0D%0ARuolo%20(membro/volontario/esperto):%20%0D%0ASettore:%20%0D%0A%0D%0AGrazie!",
              },

            },
            aside: {
              title: "Cosa ottieni",
              body:
                "L’iscrizione ti dà accesso a iniziative, gruppi di lavoro e opportunità di rappresentanza. Il tuo contributo conta — qualunque sia il tuo ruolo.",
              bullets: {
                b1: "Accesso a informazioni e iniziative",
                b2: "Partecipazione per settori",
                b3: "Rappresentanza e collaborazione in rete",
              },
              note: {
                title: "Nota",
                body:
                  "Puoi iscriverti come membro, volontario o esperto — scegli come contribuire.",
              },
            },
            reasons: {
              title: "Perché iscriversi?",
              subtitle:
                "Se ti riconosci in uno di questi punti, il tuo posto è con noi.",
              localDecision: {
                title: "Se vuoi far parte delle strutture locali / regionali decisionali",
                body:
                  "Essere presenti dove si prendono decisioni. Portare idee, soluzioni e rappresentanza reale per le comunità rom.",
              },
              domainStructures: {
                title: "Se vuoi far parte delle strutture dell’associazione per settore",
                body:
                  "Educazione, mediazione, diritti, sociale, cultura — abbiamo bisogno di persone che costruiscono. Scegli un settore e partecipa.",
              },
              helpCommunity: {
                title: "Se ti senti Rom e capace di aiutare il prossimo",
                body:
                  "Con l’iscrizione entri in una rete che sostiene, informa e agisce per il bene comune.",
              },
              referenceGroup: {
                title: "Se vuoi appartenere a un GRUPPO DI RIFERIMENTO ROM",
                body:
                  "L’appartenenza crea solidarietà, identità e fiducia. Insieme siamo più forti e più visibili.",
              },
            },
            steps: {
              title: "Come funziona l’iscrizione",
              subtitle: "In 3 semplici passi entri nell’associazione e nella rete.",
              stepLabel: "Passo {{step}}",
              step1: {
                title: "Invia l’iscrizione",
                body:
                  "Compila il modulo e indica il tuo ruolo: membro, volontario o esperto.",
              },
              step2: {
                title: "Allineiamo il percorso migliore",
                body:
                  "Un rappresentante ti contatta per confermare settore, disponibilità e modalità di partecipazione.",
              },
              step3: {
                title: "Entra nei gruppi di lavoro",
                body:
                  "Partecipa alle strutture locali/regionali o ai gruppi per settore e contribuisci a progetti e iniziative.",
              },
            },
            faq: {
              title: "Domande frequenti",
              subtitle: "Hai altre domande? Contattaci — rispondiamo velocemente.",
              q1: "Cosa devo fare per iscrivermi?",
              a1:
                "Compila il modulo di iscrizione. Dopo l’invio, ti contatteremo per i prossimi passi.",
              q2: "Serve esperienza precedente?",
              a2:
                "No. Ci sono ruoli per diversi livelli di esperienza. Conta soprattutto la voglia di contribuire.",
              q3: "Come posso contribuire concretamente?",
              a3:
                "Progetti, eventi, comunicazione, mediazione, educazione, supporto comunitario o rappresentanza.",
              q4: "Quali vantaggi ho come membro?",
              a4:
                "Appartenenza, opportunità di partecipazione, accesso alla rete e possibilità di influenzare decisioni e iniziative.",
            },
            final: {
              title: "Costruiamo insieme",
              subtitle:
                "La tua iscrizione significa una voce forte in più per la comunità. Fai il passo oggi.",
              primary: { label: "Iscriviti ora" },
              secondary: { label: "Contattaci" },
              disclaimer:
                "I tuoi dati sono trattati in modo riservato. L’iscrizione conferma l’interesse a partecipare come membro/volontario/esperto.",
            },
          },

          europeMap: {
            title: "Mappa dei Rom in Europa",
            subtitle: "Clicca su un paese per vedere maggiori informazioni.",
            infoPane: {
              titleIdle: "Clicca su un paese",
              bodyIdle: "Seleziona un paese sulla mappa per vedere i dettagli qui."
            },
            fallback: {
              title: "Informazioni",
              description: "Non sono ancora disponibili informazioni per {{country}}."
            },
            countries: {
              romania: {
                title: "Romania",
                description:
                  "La Romania è il paese con la più grande popolazione rom in Europa. Il leader rom qui è Florin Motoi."
              },
              germany: {
                title: "Germania",
                description:
                  "La Germania ha la più grande economia d’Europa ed è un membro chiave dell’Unione Europea. La comunità rom qui è guidata da Roberto Zatreanu."
              },
              france: {
                title: "Francia",
                description:
                  "Membro fondatore dell’UE, famosa per la sua cultura, gastronomia e storia."
              },
              italy: {
                title: "Italia",
                description:
                  "In Italia ci sono comunità rom significative. La comunità rom qui è guidata da Marius Cirpaci."
              },
              uk: {
                title: "Regno Unito",
                description:
                  "Nel Regno Unito c’è una popolazione rom mista proveniente da diverse comunità. La comunità rom qui è guidata da Cristian Buceanu."
              },
              ireland: {
                title: "Irlanda",
                description:
                  "In Irlanda c’è una popolazione rom mista proveniente da diverse comunità. La comunità rom qui è guidata da Hajnal Servitory."
              }
            }
          }

        },
      },
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
