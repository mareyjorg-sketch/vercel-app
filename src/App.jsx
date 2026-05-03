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
