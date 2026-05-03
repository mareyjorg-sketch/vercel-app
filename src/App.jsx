export default function App() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", color: "#1a1a1a" }}>

      {/* HEADER */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        rowGap: "12px",
        padding: "20px clamp(16px, 4vw, 40px)",
        background: "#fff",
        borderBottom: "1px solid #eee",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", minWidth: 0 }}>
          <img
            src="/assets/logo.png"
            alt="Kammerjäger Bergmann – Schädlingsbekämpfung"
            style={{
              height: "clamp(40px, 10vw, 56px)",
              width: "auto",
              maxWidth: "min(100%, 340px)",
              objectFit: "contain",
            }}
          />
        </div>

        <a href="tel:+491635276870" style={{
          background: "#2e7d32",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "30px",
          textDecoration: "none",
          fontWeight: "bold",
        }}>
          📞 0163 5276870
        </a>
      </header>


      {/* HERO */}
      <section style={{
        padding: "80px clamp(16px, 4vw, 40px)",
        background: "linear-gradient(135deg, #2e7d32, #4caf50)",
        color: "#fff",
        textAlign: "center",
      }}>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", margin: 0, lineHeight: 1.2 }}>
          Schädlingsbekämpfung in Bottrop
        </h1>
        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          Schnell vor Ort – diskret &amp; zuverlässig
        </p>

        <a href="tel:+491635276870" style={{
          display: "inline-block",
          marginTop: "30px",
          padding: "14px 28px",
          background: "#fff",
          color: "#2e7d32",
          borderRadius: "30px",
          textDecoration: "none",
          fontWeight: "bold",
        }}>
          Jetzt anrufen
        </a>
      </section>


      {/* SERVICES GRID */}
      <section style={{ padding: "60px clamp(16px, 4vw, 40px)", background: "#f8f8f8" }}>
        <h2 style={{ textAlign: "center" }}>Unsere Leistungen</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          marginTop: "40px",
        }}>

          {[
            "Ratten & Mäuse",
            "Ameisen",
            "Wespen",
            "Bettwanzen",
            "Kakerlaken",
            "Marder",
            "Prävention",
            "Beratung",
          ].map((item) => (
            <div key={item} style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
            }}>
              <h3 style={{ marginTop: 0 }}>{item}</h3>
              <p style={{ marginBottom: 0, color: "#555" }}>Professionelle &amp; schnelle Lösung</p>
            </div>
          ))}

        </div>
      </section>


      {/* TÜV & IHK */}
      <section
        id="qualifikation"
        style={{
          padding: "48px clamp(16px, 4vw, 40px)",
          background: "#fff",
          borderTop: "1px solid #eee",
        }}
      >
        <h2 style={{ textAlign: "center", marginTop: 0, fontSize: "clamp(1.25rem, 3vw, 1.5rem)" }}>
          Qualifikation &amp; Zertifizierung
        </h2>
        <p style={{ textAlign: "center", color: "#555", maxWidth: 560, margin: "12px auto 0", lineHeight: 1.5 }}>
          Extern geprüfte Qualität – für Ihr Vertrauen und nachvollziehbare Standards bei Gewerbe &amp; Versicherung.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: 24,
            marginTop: 32,
            maxWidth: 920,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <figure
            style={{
              margin: 0,
              border: "1px solid #e5e5e5",
              borderRadius: 14,
              overflow: "hidden",
              background: "#fafafa",
              boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
            }}
          >
            <img
              src="/assets/tuev-badge.png"
              alt="TÜV Rheinland – Zertifizierung: zertifizierter Fachbetrieb, regelmäßige Überwachung der Qualitätsstandards"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </figure>
          <figure
            style={{
              margin: 0,
              border: "1px solid #e5e5e5",
              borderRadius: 14,
              overflow: "hidden",
              background: "#fafafa",
              boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
            }}
          >
            <img
              src="/assets/ihk-badge.png"
              alt="IHK: Sachkunde § 18 IfSG, geprüfte Qualifikation für professionelle Schädlingsbekämpfung"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </figure>
        </div>
        <p style={{ fontSize: 11, color: "#888", textAlign: "center", marginTop: 20, maxWidth: 640, marginLeft: "auto", marginRight: "auto", lineHeight: 1.45 }}>
          TÜV Rheinland und IHK sind eingetragene Marken. Die Darstellung erfolgt im Rahmen der jeweiligen Markenrichtlinien; verbindlich sind Ihre Zertifizierungsnachweise.
        </p>
      </section>


      {/* ABOUT */}
      <section style={{ padding: "60px clamp(16px, 4vw, 40px)" }}>
        <h2 style={{ marginTop: 0 }}>Familienbetrieb aus Bottrop</h2>

        <p style={{ maxWidth: "700px", marginTop: "20px", lineHeight: 1.65, color: "#444" }}>
          Kammerjäger Bergmann ist ein familiengeführter Betrieb mit Fokus
          auf schnelle Hilfe, diskrete Einsätze und langfristige Lösungen.
        </p>
      </section>


      {/* CTA */}
      <section style={{
        background: "#1f2937",
        color: "#fff",
        textAlign: "center",
        padding: "50px 24px",
      }}>
        <h2 style={{ marginTop: 0 }}>Jetzt anrufen und beraten lassen</h2>
        <a href="tel:+491635276870" style={{
          display: "inline-block",
          marginTop: "20px",
          fontSize: "24px",
          color: "#fff",
          textDecoration: "none",
          fontWeight: 700,
        }}>
          0163 5276870
        </a>
      </section>


      {/* FOOTER */}
      <footer style={{
        background: "#111",
        color: "#aaa",
        padding: "30px",
        textAlign: "center",
      }}>
        <p style={{ margin: 0 }}>© 2026 Kammerjäger Bergmann</p>
      </footer>

    </div>
  );
}
