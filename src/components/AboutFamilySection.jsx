import { Link } from "react-router-dom";

function IconPerson({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.75" />
      <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconCalendar({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M4 9h16M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <circle cx="12" cy="14" r="1.5" fill="currentColor" />
    </svg>
  );
}

function IconDiscrete({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2 12s4-5 10-5 10 5 10 5-4 5-10 5-10-5-10-5z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
    </svg>
  );
}

function IconRegion({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s7-4.5 7-10a7 7 0 1 0-14 0c0 5.5 7 10 7 10z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <circle cx="12" cy="11" r="2.25" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IconShield({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l7 3v6c0 4-3 7.5-7 9-4-1.5-7-5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const POINTS = [
  { Icon: IconPerson, text: "Persönlicher Ansprechpartner vor Ort" },
  { Icon: IconCalendar, text: "Schnelle Terminvergabe, oft am gleichen Tag" },
  { Icon: IconDiscrete, text: "Diskret und ohne Aufsehen" },
  { Icon: IconRegion, text: "Langjährige Erfahrung im Ruhrgebiet" },
  { Icon: IconShield, text: "Geprüfte, zugelassene Bekämpfungsmittel" },
];

export default function AboutFamilySection() {
  return (
    <section id="ueber-uns" className="scroll-mt-[88px] bg-white py-14 sm:py-20 px-4 sm:px-6" aria-labelledby="about-family-heading">
      <div className="mx-auto max-w-6xl">
        <div className="grid overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_22px_50px_-18px_rgba(0,0,0,0.12)] lg:grid-cols-2 lg:gap-0">
          <div className="relative min-h-[240px] sm:min-h-[300px] lg:min-h-[380px]">
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,rgba(45,122,45,0.18),transparent_62%),linear-gradient(165deg,#142a1c_0%,#0f1f16_50%,#152820_100%)]"
              aria-hidden
            />
            <img
              src="/assets/team.jpg"
              alt="Team Kammerjäger Bergmann bei der Arbeit"
              className="absolute inset-0 h-full w-full object-contain object-center p-3 sm:p-5"
              width={960}
              height={640}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12 xl:p-14">
            <span className="mb-4 inline-flex w-fit items-center rounded-full bg-[#1e4d1e] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-sm sm:text-xs">
              Seit 1999 in Bottrop
            </span>

            <h2 id="about-family-heading" className="font-['Oswald',sans-serif] text-3xl font-bold uppercase tracking-tight text-slate-900 sm:text-4xl">
              Familienbetrieb aus Bottrop
            </h2>

            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Kammerjäger Bergmann ist ein familiengeführter Betrieb mit Fokus auf schnelle Hilfe, diskrete Einsätze und langfristige Lösungen.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Wir kennen die Region und sind schnell bei Ihnen – ob privat oder gewerblich. Unser Ziel ist nicht nur die kurzfristige Bekämpfung, sondern nachhaltige Prävention und zufriedene Kunden.
            </p>

            <ul className="mt-8 space-y-3.5" role="list">
              {POINTS.map(({ Icon, text }) => (
                <li key={text} className="flex gap-3 text-left">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#1e4d1e] ring-1 ring-[#2d7a2d]/25">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="pt-1 text-[15px] leading-snug text-slate-800 sm:text-base">{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 sm:mt-10">
              <Link
                to="/kontakt/"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#2d7a2d] bg-transparent px-7 py-3 text-sm font-semibold uppercase tracking-wide text-[#2d7a2d] shadow-sm transition hover:bg-[#2d7a2d] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d7a2d] sm:text-base"
              >
                Jetzt Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
