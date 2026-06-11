import { Component } from '@/components';
import { Images } from '@/assets/images';
import { Caption } from '../components';

const statCards = [
  { n: '121', t: 'Entwicklerinnen und Entwickler nahmen an der Online-Befragung teil.' },
  { n: '8', t: 'Tools wurden in der Konkurrenzanalyse systematisch verglichen.' },
  { n: '2', t: 'Personas decken das Spektrum vom Junior bis zum Tech Lead ab.' },
];

const personas = [
  {
    name: 'Alex (28)', role: 'Junior Frontend Developer', img: Images.CodeScannerImages.Alex,
    quote: 'KI-Code spart mir Zeit – aber ich weiß oft nicht, ob ich ihm vertrauen kann.',
    desc: 'Nutzt KI als tägliches Werkzeug, hat aber Unsicherheiten beim Bewerten der Ausgaben. Braucht klare Erklärungen und Handlungsführung statt langer Findings-Listen.',
  },
  {
    name: 'Sarah (34)', role: 'Senior Frontend Developer & Tech Lead', img: Images.CodeScannerImages.Sarah,
    quote: 'KI-Output ist eine Diskussionsgrundlage – nicht die Antwort.',
    desc: 'Sieht KI-Code als Diskussionsgrundlage und braucht effiziente Risiko-Triage für ihr Team. Erwartet Severity-Stufen, Kontext und priorisierte nächste Schritte.',
  },
];

export const Research = () => (
  <section className="section-y container-x reveal">
    <Component.SectionHeading
      num="04" label="RESEARCH & ERKENNTNISSE"
      title="Was die Forschung ergeben hat"
      sub="121 befragte Entwicklerinnen und Entwickler, eine systematische Konkurrenzanalyse von acht Tools und zwei Personas, die das Spektrum der Zielgruppe aufspannen."
    />
    <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 mt-12">
      {statCards.map((s) => (
        <Component.Card key={s.n} className="flex flex-col gap-4 p-8">
          <span className="text-5xl sm:text-6xl font-bold tracking-tighter bg-linear-to-br from-primary to-security bg-clip-text text-transparent">{s.n}</span>
          <span className="text-text-2 text-[15px] leading-snug">{s.t}</span>
        </Component.Card>
      ))}
    </div>

    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-16 text-text-2 text-base leading-[1.7]">
      <p>
        Bevor das erste Wireframe entstand, stand die Forschung. In einer Online-Befragung mit 121 Teilnehmenden
        wurden Erfahrungen, Einstellungen und Bedürfnisse von Entwicklerinnen und Entwicklern im Umgang mit
        KI-generiertem Code erhoben. Die Stichprobe deckte ein breites Profil ab: Full-Stack-Entwickler (36 %),
        Studierende (24 %) sowie weitere Rollen, mit über der Hälfte der Befragten in 5+ Jahren Berufserfahrung.
      </p>
      <p>
        Parallel wurde eine Konkurrenzanalyse von acht bestehenden Code-Analyse- und Generierungswerkzeugen
        durchgeführt – darunter etablierte Tools wie SonarQube, Snyk und neuere KI-Assistenten wie GitHub
        Copilot Chat und Codex. Die Feature-Matrix zeigte deutlich: Kein bestehendes Tool adressiert die
        spezifische Schnittstelle zwischen KI-generiertem Code, strukturierter Risikoprüfung und nutzerzentrierter
        Vertrauenskalibrierung.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8 mt-16">
      {personas.map((p) => (
        <Component.Card key={p.name} className="flex flex-col gap-5 p-8">
          <header className="flex gap-5 items-center">
            <div className="flex-none w-24 h-24 sm:w-[120px] sm:h-[120px] xl:w-[144px] xl:h-[144px] rounded-full overflow-hidden border border-border-2">
              <Component.ResponsiveImg image={p.img} alt={p.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-1.5 sm:gap-2.5 min-w-0">
              <h3 className="text-2xl font-bold m-0 leading-tight">{p.name}</h3>
              <p className="text-text-3 text-sm sm:text-base m-0 leading-snug">{p.role}</p>
            </div>
          </header>
          <blockquote className="m-0 text-lg leading-snug border-l-2 border-primary pl-4 italic">„{p.quote}"</blockquote>
          <p className="text-text-3 text-base leading-snug m-0">{p.desc}</p>
        </Component.Card>
      ))}
    </div>
    <Caption center>
      Die zwei Personas spannen das Spektrum der Zielgruppe auf: vom Junior Developer mit täglichem KI-Einsatz bis zum Tech Lead mit Review-Verantwortung.
    </Caption>
  </section>
);
