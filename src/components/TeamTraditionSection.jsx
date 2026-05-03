import { Link } from "react-router-dom";

function SealIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="20" cy="20" r="17.5" stroke="#2d7a2d" strokeOpacity="0.35" strokeWidth="1.5" />
      <path d="M12 14h16v14H12V14z" stroke="#1e4d1e" strokeWidth="1.5" strokeLinejoin="round" fill="#f0f7f0" />
      <path d="M15 18h10M15 22h8M15 26h6" stroke="#2d7a2d" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M20 9v4M20 27v4M9 20h4M27 20h4" stroke="#2d7a2d" strokeOpacity="0.45" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export default function TeamTraditionSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-14 sm:py-20 px-4 sm:px-6" aria-labelledby="team-tradition-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(45,122,45,0.08),transparent_55%)]" aria-hidden />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] lg:grid-cols-2 lg:gap-0">
          <div className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-[420px]">
            <img
              src="/assets/team-bergmann-flotte.png"
              alt="Team und Fahrzeugflotte Kammerjäger Bergmann in Bottrop"
              className="absolute inset-0 h-full w-full object-cover object-center"
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/25 lg:via-transparent lg:to-transparent" aria-hidden />
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12 xl:p-14">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-[#1e4d1e] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-sm sm:text-xs">
                Seit 1999 in Bottrop
              </span>
              <SealIcon className="h-11 w-11 shrink-0 opacity-90 sm:h-12 sm:w-12" />
            </div>

            <h2 id="team-tradition-heading" className="font-['Oswald',sans-serif] text-3xl font-bold uppercase tracking-tight text-slate-900 sm:text-4xl lg:text-[2.35rem] lg:leading-tight">
              25 Jahre Familienbetrieb
            </h2>

            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Seit über zwei Jahrzehnten steht der Name Bergmann für zuverlässige Schädlingsbekämpfung im Herzen des Ruhrgebiets. Als inhabergeführter Familienbetrieb setzen wir nicht auf Massenabfertigung, sondern auf individuelle Beratung und nachhaltige Lösungen.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Ulrich Bergmann und sein Team verbinden traditionelles Handwerk mit moderner Monitoring-Technik. Vertrauen Sie auf 25 Jahre Expertise – direkt aus Bottrop, für die Region.
            </p>

            <div className="mt-8 sm:mt-10">
              <Link
                to="/#ueber-uns"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#2d7a2d] bg-transparent px-7 py-3 text-sm font-semibold uppercase tracking-wide text-[#2d7a2d] shadow-sm transition hover:bg-[#2d7a2d] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d7a2d] sm:text-base"
              >
                Mehr über uns erfahren
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
