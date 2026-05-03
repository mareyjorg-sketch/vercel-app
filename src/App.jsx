import React, { useState } from "react";

const primary = "#005b8c";
const primaryDark = "#004670";
const slate800 = "#1e293b";
const slate600 = "#475569";
const slate100 = "#f1f5f9";
const slate50 = "#f8fafc";

const wrap = { maxWidth: 1120, margin: "0 auto", padding: "0 20px" };

const btnPrimary = {
  display: "inline-block",
  padding: "14px 22px",
  fontSize: 16,
  fontWeight: 600,
  background: primary,
  color: "#fff",
  border: "none",
  borderRadius: 10,
  cursor: "pointer",
  textDecoration: "none",
  textAlign: "center",
};

const btnSecondary = {
  ...btnPrimary,
  background: "#fff",
  color: primary,
  border: `2px solid ${primary}`,
};

const card = {
  background: "#fff",
  borderRadius: 14,
  border: "1px solid #e2e8f0",
  boxShadow: "0 1px 3px rgba(15,23,42,.06)",
  padding: 22,
};

const TEL_DISPLAY = "0208 123 456 78";
const TEL_HREF = "tel:+4920812345678";
const EMAIL = "info@ruhr-protect.de";

const services = [
  {
    icon: "🐝",
    title: "Wespen & Hornissen",
    text: "Nestentfernung und Abwehr unter Beachtung von Naturschutz und Vorschriften.",
  },
  {
    icon: "🐀",
    title: "Ratten",
    text: "Integrierte Bekämpfung in Gebäuden, Kanalisation und Außenanlagen.",
  },
  {
    icon: "🐭",
    title: "Mäuse",
    text: "Köderkonzepte, Eintrittsstellen, Dokumentation.",
  },
  {
    icon: "🪳",
    title: "Kakerlaken & Schaben",
    text: "Küche, Gastronomie, Wohnobjekte – diskret und nach Plan.",
  },
  {
    icon: "🦋",
    title: "Motten",
    text: "Lebensmittel- und Textilmotten: Analyse, Behandlung, Vorbeugung.",
  },
  {
    icon: "🛏️",
    title: "Wanzen",
    text: "u. a. Bettwanzen – Verfahren nach Befallsbild.",
  },
  {
    icon: "🦡",
    title: "Marderabwehr",
    text: "Gebäude & Kfz: Sicherung, Geruch, technischer Schutz.",
  },
  {
    icon: "🐟",
    title: "Silberfische",
    text: "Feuchte, Hygiene, langfristige Reduktion.",
  },
  {
    icon: "🐜",
    title: "Ameisen",
    text: "Nestortung, Barrieren, nachhaltige Reduktion.",
  },
  {
    icon: "✨",
    title: "Fliegen, Flöhe & mehr",
    text: "Weitere Arten – Analyse vor Ort, passendes Konzept.",
  },
];

const marderCards = [
  {
    icon: "🏠",
    title: "Dachboden-Check",
    text: "Inspektion, Verschluss von Zugängen, Abdichtung.",
  },
  {
    icon: "🌿",
    title: "Geruchsneutralisierung",
    text: "Reduktion von Markierungsduften.",
  },
  {
    icon: "🚗",
    title: "Kfz-Schutz",
    text: "Beratung und Montage von Marderschutz.",
  },
  {
    icon: "⏱️",
    title: "Notdienst",
    text: "Kurzfristige Termine nach Absprache.",
  },
];

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "12px 14px",
  borderRadius: 8,
  border: "1px solid #cbd5e1",
  fontSize: 15,
  fontFamily: "inherit",
};

const faqItems = [
  {
    q: "Wie lange dauert eine Schädlingsbekämpfung?",
    a: "Das hängt von Art und Ausmaß des Befalls ab. Nach der Besichtigung nennen wir Ihnen eine realistische Einschätzung.",
  },
  {
    q: "Was tun im Notfall?",
    a: "Rufen Sie uns an – wir klären die Dringlichkeit und vereinbaren einen Termin oder Notdienst nach Absprache.",
  },
  {
    q: "Können Schädlinge zurückkehren?",
    a: "Ohne Ursachenbeseitigung möglich. Wir beraten zu Nachkontrolle und Vorbeugung.",
  },
  {
    q: "Ist die Behandlung sicher für Kinder und Haustiere?",
    a: "Wir wählen Mittel und Vorgehen nach Lage und informieren Sie über erforderliche Vorsichtsmaßnahmen.",
  },
  {
    q: "Muss ich die Wohnung verlassen?",
    a: "Nur wenn es für das gewählte Verfahren erforderlich ist – das besprechen wir vorab transparent.",
  },
];

function Pill({ children }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "8px 14px",
        borderRadius: 999,
        background: "#fff",
        border: "1px solid #e2e8f0",
        fontSize: 13,
        fontWeight: 600,
        color: primary,
        margin: "4px",
      }}
    >
      {children}
    </span>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const onSubmitForm = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") || "";
    const email = fd.get("email") || "";
    const phone = fd.get("phone") || "";
    const message = fd.get("message") || "";
    const body = `Name: ${name}\nE-Mail: ${email}\nTelefon: ${phone}\n\nNachricht:\n${message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Anfrage RUHR-PROTECT")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, Arial, sans-serif", color: slate800, lineHeight: 1.6 }}>
      {/* HEADER */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(255,255,255,.95)",
          borderBottom: "1px solid #e2e8f0",
          boxShadow: "0 1px 0 rgba(15,23,42,.04)",
        }}
      >
        <div style={{ ...wrap, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, paddingTop: 14, paddingBottom: 14 }}>
          <a href="#hero" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "inherit" }}>
            <img src="/assets/logo-mark.svg" width={44} height={44} alt="" />
            <span>
              <span style={{ display: "block", fontWeight: 800, letterSpacing: "0.06em", fontSize: 15, color: primaryDark }}>RUHR-PROTECT</span>
              <span style={{ fontSize: 11, color: slate600, textTransform: "uppercase", letterSpacing: "0.04em" }}>Schädlingsbekämpfung</span>
            </span>
          </a>
          <nav style={{ display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap" }} aria-label="Hauptnavigation" className="desktop-nav">
            <a href="#hero" style={{ color: slate600, textDecoration: "none", fontWeight: 500, fontSize: 14 }}>Home</a>
            <a href="#ueber-uns" style={{ color: slate600, textDecoration: "none", fontWeight: 500, fontSize: 14 }}>Über uns</a>
            <a href="#cert" style={{ color: slate600, textDecoration: "none", fontWeight: 500, fontSize: 14 }}>Qualifikation</a>
            <a href="#leistungen" style={{ color: slate600, textDecoration: "none", fontWeight: 500, fontSize: 14 }}>Leistungen</a>
            <a href="#marder-spezial" style={{ color: slate600, textDecoration: "none", fontWeight: 500, fontSize: 14 }}>Marder</a>
            <a href="#kontakt" style={{ color: slate600, textDecoration: "none", fontWeight: 500, fontSize: 14 }}>Kontakt</a>
            <a href="#faq" style={{ color: slate600, textDecoration: "none", fontWeight: 500, fontSize: 14 }}>FAQ</a>
            <a href={TEL_HREF} style={{ ...btnPrimary, padding: "10px 16px", fontSize: 14 }}>{TEL_DISPLAY}</a>
          </nav>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((o) => !o)}
            style={{
              display: "none",
              border: "1px solid #e2e8f0",
              background: "#fff",
              borderRadius: 8,
              padding: "10px 12px",
              cursor: "pointer",
              fontWeight: 700,
            }}
            className="mobile-menu-btn"
          >
            Menü
          </button>
        </div>
        <div
          id="mobile-nav"
          style={{
            display: menuOpen ? "block" : "none",
            borderTop: "1px solid #e2e8f0",
            padding: "12px 20px 16px",
            background: "#fff",
          }}
          className="mobile-nav-panel"
        >
          {[
            ["#hero", "Home"],
            ["#ueber-uns", "Über uns"],
            ["#cert", "Qualifikation"],
            ["#leistungen", "Leistungen"],
            ["#marder-spezial", "Marder"],
            ["#kontakt", "Kontakt"],
            ["#faq", "FAQ"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              style={{ display: "block", padding: "10px 0", color: slate800, textDecoration: "none", fontWeight: 600 }}
            >
              {label}
            </a>
          ))}
          <a href={TEL_HREF} onClick={closeMenu} style={{ ...btnPrimary, display: "block", marginTop: 8 }}>
            {TEL_DISPLAY} anrufen
          </a>
        </div>
      </header>

      <style>{`
        @media (max-width: 960px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: inline-block !important; }
        }
        @media (min-width: 961px) {
          .mobile-nav-panel { display: none !important; }
        }
      `}</style>

      {/* HERO */}
      <section id="hero" style={{ background: `linear-gradient(135deg, ${slate50} 0%, #fff 50%, #eef6fb 100%)`, borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ ...wrap, padding: "48px 20px 56px" }}>
          <img src="/assets/logo-full.svg" alt="RUHR-PROTECT" style={{ height: 44, width: "auto", marginBottom: 20 }} />
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", color: primary, textTransform: "uppercase", marginBottom: 8 }}>
            Zertifizierte Schädlingsbekämpfung · Ruhrgebiet
          </p>
          <p style={{ color: slate600, marginBottom: 16, fontSize: 15 }}>Jetzt erreichbar – Einsatz nach Vereinbarung · Notdienst möglich</p>
          <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 700, color: slate800, lineHeight: 1.25, margin: "0 0 16px", maxWidth: 820 }}>
            Ihr Schädlingsbekämpfer für Duisburg, Oberhausen, Düsseldorf &amp; Umgebung
          </h1>
          <p style={{ color: slate600, maxWidth: 720, marginBottom: 20 }}>
            <strong style={{ color: slate800 }}>RUHR-PROTECT</strong> – zertifizierter Fachbetrieb gegen Schädlinge aller Art: von Wespen und Nagetieren bis Kakerlaken, Bettwanzen und Marder. Professionell,
            nachhaltig und nach aktuellen Standards – für Privathaushalte und Gewerbe.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
            {["Kostenlose Erstberatung", "100 % diskret", "Direkt zum Experten"].map((t) => (
              <li key={t} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, color: slate800 }}>
                <span style={{ color: primary, fontWeight: 700 }}>✓</span> {t}
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
            <a href={TEL_HREF} style={btnPrimary}>
              Jetzt anrufen: {TEL_DISPLAY}
            </a>
            <a href="#kontakt" style={btnSecondary}>
              Termin anfragen
            </a>
            <a href="#cert" style={{ color: primary, fontWeight: 600, textDecoration: "none", padding: "8px 4px" }}>
              Qualifikation
            </a>
          </div>
        </div>
      </section>

      {/* ÜBER UNS */}
      <section id="ueber-uns" style={{ padding: "48px 0", borderBottom: "1px solid #e2e8f0" }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40, alignItems: "start" }}>
            <div>
              <h2 style={{ fontSize: 28, margin: "0 0 8px", color: slate800 }}>Hier sind wir zu Hause</h2>
              <p style={{ fontWeight: 700, color: primary, marginBottom: 16 }}>Fachbetrieb mit langjähriger Erfahrung</p>
              <p style={{ color: slate600, marginBottom: 16 }}>
                Qualität entsteht durch Fachwissen, Erfahrung und moderne Methoden. Unsere Teams sind mit aktuellen Technologien vertraut und arbeiten diskret – mit neutraler Kennzeichnung auf Wunsch, damit Ihre
                Privatsphäre oder Ihr Betrieb geschützt bleibt.
              </p>
              <p style={{ color: slate600 }}>
                <strong style={{ color: slate800 }}>TÜV- und IHK-geprüfte Qualifikation</strong> – dokumentiert und für Gewerbe sowie Versicherungen nachvollziehbar.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
              {["Innovatives Equipment", "Erfahrene Techniker", "100 % diskret", "Saubere Arbeitsweise", "Persönlicher Service", "Umweltbewusste Methoden"].map((t) => (
                <div key={t} style={{ ...card, padding: 16, fontWeight: 600, fontSize: 14 }}>
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <a href="#kontakt" style={btnPrimary}>
              Termin vereinbaren
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: slate100, padding: "28px 0", borderBottom: "1px solid #e2e8f0" }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 20, textAlign: "center" }}>
            {[
              { n: "90", l: "% Folgeschäden oft vermeidbar", s: "bei frühem Handeln*" },
              { n: "100", l: "% Diskretion", s: "" },
              { n: "10×", l: "teurer bei spätem Eingriff**", s: "" },
              { n: "99", l: "% zufriedene Kunden***", s: "" },
            ].map((x) => (
              <div key={x.l}>
                <p style={{ fontSize: 36, fontWeight: 800, color: primary, margin: 0 }}>{x.n}</p>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: slate600, margin: "6px 0 0" }}>{x.l}</p>
                {x.s ? <p style={{ fontSize: 11, color: "#94a3b8", margin: "4px 0 0" }}>{x.s}</p> : null}
              </div>
            ))}
          </div>
          <p style={{ fontSize: 11, color: "#94a3b8", textAlign: "center", marginTop: 20, maxWidth: 900, marginLeft: "auto", marginRight: "auto", lineHeight: 1.5 }}>
            * Orientierungswert aus der Schädlingsbekämpfungs-Praxis, kein Garantiewert. ** Im Vergleich zu frühzeitiger Beratung. *** Interne Rückmeldungen; keine wissenschaftliche Studie.
          </p>
        </div>
      </section>

      {/* FRÜH */}
      <section style={{ padding: "48px 0", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ ...wrap, maxWidth: 720 }}>
          <h2 style={{ fontSize: 26, marginTop: 0 }}>Frühe Bekämpfung beugt schweren Folgeschäden vor</h2>
          <p style={{ color: slate600 }}>
            Viele Probleme beginnen unauffällig: Geräusche in der Nacht, Spuren, einzelne Insekten. Je früher Sie handeln, desto geringer sind oft Kosten und Aufwand für Gebäude, Gesundheit und Betrieb.
          </p>
          <p style={{ color: slate600 }}>Rufen Sie uns an – wir helfen bei der ersten Einschätzung am Telefon und vereinbaren bei Bedarf einen Termin vor Ort.</p>
          <p style={{ marginTop: 16 }}>
            <a href={TEL_HREF} style={{ color: primary, fontWeight: 700, fontSize: 18, textDecoration: "none" }}>
              {TEL_DISPLAY}
            </a>
          </p>
        </div>
      </section>

      {/* ZIELGRUPPEN */}
      <section style={{ padding: "48px 0", background: slate50, borderBottom: "1px solid #e2e8f0" }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            <article style={card}>
              <h2 style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 20, marginTop: 0 }}>
                <span aria-hidden>🏠</span> Privatpersonen
              </h2>
              <p style={{ color: slate600, marginBottom: 0 }}>
                Ob Wohnung, Haus oder Grundstück – wir bekämpfen Wespen, Mäuse, Schaben, Wanzen und mehr. Einsätze auf Wunsch unauffällig: neutrale Fahrzeuge und dezente Kennzeichnung möglich. Nachhaltige Lösung
                statt kurzfristiger Symptombekämpfung.
              </p>
            </article>
            <article style={card}>
              <h2 style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 20, marginTop: 0 }}>
                <span aria-hidden>🏢</span> Unternehmen
              </h2>
              <p style={{ color: slate600, marginBottom: 0 }}>
                Gastronomie, Büro, Praxis, Handel oder Lager: wir handeln schnell und professionell, mit Dokumentation für Hygiene und Versicherung. Präventive Maßnahmen auf Anfrage – mit möglichst wenig Unterbrechung
                Ihres Betriebs.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* QUALIFIKATION */}
      <section id="cert" style={{ padding: "48px 0", borderBottom: "1px solid #e2e8f0" }}>
        <div style={wrap}>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 32px" }}>
            <h2 style={{ fontSize: 28, margin: "0 0 8px" }}>Qualifikation &amp; Zertifizierung</h2>
            <p style={{ color: slate600, margin: 0 }}>Transparenz und Nachweisbarkeit – gegenüber Gewerbe, Vermietung und Versicherungen.</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 40, marginBottom: 28, paddingBottom: 28, borderBottom: "1px solid #e2e8f0" }}>
            <figure style={{ margin: 0, textAlign: "center" }}>
              <img src="/assets/partners/tuev-rheinland.svg" alt="TÜV Rheinland – Zertifizierung" style={{ height: 52, width: "auto" }} />
              <figcaption style={{ fontSize: 12, color: slate600, marginTop: 8 }}>Zertifizierter Fachbetrieb</figcaption>
            </figure>
            <figure style={{ margin: 0, textAlign: "center" }}>
              <img src="/assets/partners/ihk.svg" alt="IHK – Sachkunde Schädlingsbekämpfung" style={{ height: 52, width: "auto" }} />
              <figcaption style={{ fontSize: 12, color: slate600, marginTop: 8 }}>IHK-geprüfte Qualifikation</figcaption>
            </figure>
          </div>
          <p style={{ fontSize: 11, color: "#94a3b8", textAlign: "center", maxWidth: 800, margin: "0 auto 32px", lineHeight: 1.5 }}>
            TÜV Rheinland und IHK sind eingetragene Marken. Das TÜV-Logo entspricht der üblichen Darstellung (Wikimedia Commons); verbindlich sind die Markenrichtlinien von TÜV Rheinland und Ihre Zertifizierungsvereinbarung.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {[
              { t: "TÜV-zertifizierter Fachbetrieb", d: "Extern geprüfte Qualitätssicherung und strukturierte Abläufe." },
              { t: "IHK · Sachkunde § 18 IfSG", d: "Nachgewiesene Fachkenntnis für Biozide und Schädlingsarten." },
              { t: "Gesetzeskonforme Bekämpfung", d: "Naturschutz, Anwendungsbestimmungen, Dokumentation." },
              { t: "Geschultes Fachpersonal", d: "Fortbildung zu Methoden, Sicherheit und Hygiene." },
              { t: "Dokumentation & Nachweise", d: "Protokolle für Gewerbe, Gastronomie und Versicherungen." },
              { t: "Notdienst & Erreichbarkeit", d: "Schnelle Reaktion: Duisburg, Mülheim, Oberhausen & Umgebung." },
            ].map((x) => (
              <div key={x.t} style={{ ...card, display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span style={{ fontSize: 22 }} aria-hidden>
                  ✓
                </span>
                <div>
                  <h3 style={{ margin: "0 0 6px", fontSize: 16 }}>{x.t}</h3>
                  <p style={{ margin: 0, color: slate600, fontSize: 14 }}>{x.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EINSATZGEBIET BAR */}
      <section style={{ background: slate100, padding: "16px 0", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ ...wrap, textAlign: "center" }}>
          <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.06em", color: primary, marginRight: 8 }}>Einsatzgebiet</span>
          {["Duisburg", "Mülheim", "Oberhausen", "Ruhrpott"].map((c) => (
            <Pill key={c}>{c}</Pill>
          ))}
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section id="leistungen" style={{ padding: "48px 0", background: slate50, borderBottom: "1px solid #e2e8f0" }}>
        <div style={wrap}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2 style={{ fontSize: 28, margin: "0 0 8px" }}>Leistungsspektrum</h2>
            <p style={{ color: slate600, margin: 0 }}>Fachgerechte Bekämpfung nach Befallsart – transparent kalkuliert.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
            {services.map((s) => (
              <article key={s.title} style={{ ...card, display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 26, marginBottom: 10 }} aria-hidden>
                  {s.icon}
                </div>
                <h3 style={{ margin: "0 0 10px", fontSize: 17 }}>{s.title}</h3>
                <p style={{ color: slate600, fontSize: 14, flex: 1 }}>{s.text}</p>
                <a href={TEL_HREF} style={{ ...btnPrimary, marginTop: 16, fontSize: 14 }}>
                  Beratung anfragen
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTIE */}
      <section style={{ padding: "48px 0", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ ...wrap, maxWidth: 720 }}>
          <h2 style={{ textAlign: "center", fontSize: 26, marginTop: 0 }}>Die RUHR-PROTECT Qualitätsgarantie</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: "24px 0 0" }}>
            {["Kostenlose Erstberatung am Telefon", "Transparente Kostenschätzung vor dem Einsatz", "Persönlicher Service von Anfrage bis Abrechnung"].map((t) => (
              <li key={t} style={{ ...card, display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 12 }}>
                <span style={{ color: primary, fontWeight: 800 }}>✓</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SCHÄDLING TAGS */}
      <section style={{ padding: "48px 0", background: slate50, borderBottom: "1px solid #e2e8f0" }}>
        <div style={wrap}>
          <h2 style={{ textAlign: "center", marginTop: 0 }}>Welchen Schädling sollen wir bekämpfen?</h2>
          <p style={{ textAlign: "center", color: slate600 }}>Wählen Sie ein Thema – Sie springen direkt zur passenden Leistung.</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: 20, gap: 8 }}>
            {["Ratten", "Mäuse", "Bettwanzen", "Wespen", "Schaben", "Silberfische", "Flöhe", "Ameisen", "Marder"].map((x) => (
              <a key={x} href="#leistungen" style={{ ...btnSecondary, padding: "10px 16px", fontSize: 14 }}>
                {x}
              </a>
            ))}
            <a href="#kontakt" style={{ ...btnSecondary, padding: "10px 16px", fontSize: 14 }}>
              Andere / unsicher
            </a>
          </div>
        </div>
      </section>

      {/* STÄDTE */}
      <section style={{ padding: "48px 0", borderBottom: "1px solid #e2e8f0" }}>
        <div style={wrap}>
          <h2 style={{ marginTop: 0 }}>Einsatzgebiete</h2>
          <p style={{ color: slate600 }}>Wir sind im Ruhrgebiet und angrenzend für Sie unterwegs, u. a. in:</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["Oberhausen", "Duisburg", "Mülheim", "Düsseldorf", "Essen", "Bottrop", "Bochum", "Dortmund", "Dinslaken", "Alpen", "Krefeld", "und Umgebung"].map((c) => (
              <span key={c} style={{ padding: "8px 12px", background: slate100, borderRadius: 8, fontSize: 14 }}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: "48px 0", background: slate50, borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ ...wrap, maxWidth: 720 }}>
          <h2 style={{ marginTop: 0 }}>Häufige Fragen (FAQ)</h2>
          <div style={{ marginTop: 20 }}>
            {faqItems.map((item) => (
              <details
                key={item.q}
                style={{ ...card, marginBottom: 10, cursor: "pointer" }}
              >
                <summary style={{ fontWeight: 700, listStyle: "none" }}>{item.q}</summary>
                <p style={{ color: slate600, margin: "12px 0 0", fontSize: 14 }}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* MARDER */}
      <section id="marder-spezial" style={{ padding: "48px 0", borderBottom: "1px solid #e2e8f0" }}>
        <div style={wrap}>
          <h2 style={{ marginTop: 0 }}>Schwerpunkt Marderabwehr – Gebäude &amp; Fahrzeug</h2>
          <p style={{ color: slate600, marginBottom: 28 }}>Bauliche Sicherung, Geruchsbeseitigung und Marderschutz am Fahrzeug.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
            {marderCards.map((m) => (
              <article key={m.title} style={card}>
                <div style={{ fontSize: 24, marginBottom: 8 }} aria-hidden>
                  {m.icon}
                </div>
                <h3 style={{ margin: "0 0 8px" }}>{m.title}</h3>
                <p style={{ color: slate600, fontSize: 14, flex: 1 }}>{m.text}</p>
                <a href={TEL_HREF} style={{ ...btnPrimary, marginTop: 14, display: "inline-block", fontSize: 14 }}>
                  Beratung anfragen
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" style={{ padding: "48px 0", background: slate50 }}>
        <div style={wrap}>
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <h2 style={{ margin: "0 0 8px" }}>Kontaktieren Sie uns</h2>
            <p style={{ color: slate600, margin: 0 }}>Unverbindliche Erstberatung – wir melden uns schnell zurück.</p>
            <p style={{ fontWeight: 700, color: primary, margin: "12px 0 0" }}>Jetzt telefonisch erreichbar</p>
            <p style={{ margin: "12px 0 0" }}>
              <a href={TEL_HREF} style={{ fontSize: 20, fontWeight: 700, color: slate800, textDecoration: "none" }}>
                {TEL_DISPLAY}
              </a>
            </p>
            <p style={{ margin: "8px 0 0" }}>
              <a href={`mailto:${EMAIL}`} style={{ color: primary, fontWeight: 600 }}>
                {EMAIL}
              </a>
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32, alignItems: "start" }}>
            <form onSubmit={onSubmitForm} style={{ ...card, margin: 0 }}>
              <label style={{ display: "block", marginBottom: 6, fontWeight: 600, fontSize: 14 }} htmlFor="name">
                Name
              </label>
              <input required id="name" name="name" autoComplete="name" style={inputStyle} />
              <label style={{ display: "block", marginBottom: 6, marginTop: 14, fontWeight: 600, fontSize: 14 }} htmlFor="email">
                E-Mail
              </label>
              <input required id="email" name="email" type="email" autoComplete="email" style={inputStyle} />
              <label style={{ display: "block", marginBottom: 6, marginTop: 14, fontWeight: 600, fontSize: 14 }} htmlFor="phone">
                Rückrufnummer
              </label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" style={inputStyle} />
              <label style={{ display: "block", marginBottom: 6, marginTop: 14, fontWeight: 600, fontSize: 14 }} htmlFor="message">
                Nachricht
              </label>
              <textarea required id="message" name="message" rows={4} placeholder="Art des Befalls, Ort, gewünschter Zeitraum …" style={{ ...inputStyle, resize: "vertical" }} />
              <p style={{ fontSize: 12, color: slate600, margin: "14px 0 16px", lineHeight: 1.5 }}>
                Mit dem Absenden willigen Sie in die Verarbeitung Ihrer Angaben zur Bearbeitung der Anfrage ein. Ein Backend für den Versand kann später ergänzt werden; aktuell öffnet sich Ihr E-Mail-Programm.
              </p>
              <button type="submit" style={{ ...btnPrimary, width: "100%", cursor: "pointer" }}>
                Anfrage senden
              </button>
            </form>
            <div style={{ width: "100%" }}>
              <iframe
                title="Einsatzgebiet Ruhrgebiet"
                src="https://www.google.com/maps?q=Ruhrgebiet,+Nordrhein-Westfalen&output=embed"
                width="100%"
                height={300}
                style={{ border: 0, borderRadius: 12 }}
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0f172a", color: "#e2e8f0", padding: "48px 0 28px" }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32 }}>
            <div>
              <img src="/assets/logo-full.svg" alt="RUHR-PROTECT" style={{ height: 32, width: "auto", filter: "brightness(0) invert(1)", opacity: 0.95 }} />
              <p style={{ fontSize: 14, marginTop: 12, color: "#cbd5e1" }}>Ihr Schädlingsbekämpfer im Ruhrgebiet.</p>
              <p style={{ fontSize: 14, marginTop: 8 }}>
                Tel.:{" "}
                <a href={TEL_HREF} style={{ color: "#fff", fontWeight: 600 }}>
                  {TEL_DISPLAY}
                </a>
                <br />
                <a href={`mailto:${EMAIL}`} style={{ color: "#7dd3fc" }}>
                  {EMAIL}
                </a>
              </p>
            </div>
            <nav aria-label="Footer Menü">
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", color: "#94a3b8", textTransform: "uppercase", marginTop: 0 }}>Menü</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 14 }}>
                <li style={{ marginBottom: 8 }}>
                  <a href="#hero" style={{ color: "#e2e8f0", textDecoration: "none" }}>
                    Startseite
                  </a>
                </li>
                <li style={{ marginBottom: 8 }}>
                  <a href="#ueber-uns" style={{ color: "#e2e8f0", textDecoration: "none" }}>
                    Über uns
                  </a>
                </li>
                <li style={{ marginBottom: 8 }}>
                  <a href="#leistungen" style={{ color: "#e2e8f0", textDecoration: "none" }}>
                    Leistungen
                  </a>
                </li>
                <li style={{ marginBottom: 8 }}>
                  <a href="#kontakt" style={{ color: "#e2e8f0", textDecoration: "none" }}>
                    Kontakt
                  </a>
                </li>
              </ul>
            </nav>
            <nav aria-label="Schädlinge">
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", color: "#94a3b8", textTransform: "uppercase", marginTop: 0 }}>Schädlinge</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 14 }}>
                <li style={{ marginBottom: 8 }}>
                  <a href="#leistungen" style={{ color: "#e2e8f0", textDecoration: "none" }}>
                    Bettwanzen
                  </a>
                </li>
                <li style={{ marginBottom: 8 }}>
                  <a href="#leistungen" style={{ color: "#e2e8f0", textDecoration: "none" }}>
                    Wespen
                  </a>
                </li>
                <li style={{ marginBottom: 8 }}>
                  <a href="#leistungen" style={{ color: "#e2e8f0", textDecoration: "none" }}>
                    Ameisen
                  </a>
                </li>
                <li style={{ marginBottom: 8 }}>
                  <a href="#marder-spezial" style={{ color: "#e2e8f0", textDecoration: "none" }}>
                    Marder
                  </a>
                </li>
              </ul>
            </nav>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", color: "#94a3b8", textTransform: "uppercase", marginTop: 0 }}>Rechtliches</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 14 }}>
                <li style={{ marginBottom: 8, color: "#94a3b8" }}>Impressum &amp; Datenschutz: bitte ergänzen</li>
                <li>
                  <a href="#faq" style={{ color: "#e2e8f0", textDecoration: "none" }}>
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p style={{ borderTop: "1px solid #334155", marginTop: 36, paddingTop: 20, textAlign: "center", fontSize: 12, color: "#94a3b8" }}>
            © {new Date().getFullYear()} RUHR-PROTECT · Ruhrgebiet
          </p>
        </div>
      </footer>
    </div>
  );
}
