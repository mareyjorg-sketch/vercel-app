export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>

      {/* HEADER */}
      <header style={{
        padding: "20px",
        background: "#111",
        color: "#fff"
      }}>
        <h2>Kammerjäger Bergmann</h2>
        <p>Bottrop & Umgebung</p>
      </header>

      {/* HERO */}
      <section style={{ padding: "40px", background: "#f5f5f5" }}>
        <h1>Schnelle Hilfe bei Schädlingsbefall</h1>
        <p>
          Professionelle Schädlingsbekämpfung in Bottrop.
          Diskret, zuverlässig und effektiv.
        </p>
        <p><strong>📍 Blumenstraße 6, 46236 Bottrop</strong></p>

        <button style={{
          marginTop: "20px",
          padding: "12px 24px",
          fontSize: "16px",
          background: "#111",
          color: "#fff",
          border: "none",
          cursor: "pointer"
        }}>
          Jetzt Kontakt aufnehmen
        </button>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "40px" }}>
        <h2>Unsere Leistungen</h2>

        <ul style={{ marginTop: "20px" }}>
          <li>🐭 Mäuse & Rattenbekämpfung</li>
          <li>🐜 Ameisenbekämpfung</li>
          <li>🪳 Kakerlakenbekämpfung</li>
          <li>🐝 Wespen & Hornissen</li>
          <li>🛏️ Bettwanzenbekämpfung</li>
          <li>🏠 Schädlingsprävention</li>
        </ul>
      </section>

      {/* WHY US */}
      <section style={{ padding: "40px", background: "#f5f5f5" }}>
        <h2>Warum wir?</h2>
        <ul>
          <li>✔ Schnelle Termine</li>
          <li>✔ Diskrete Einsätze</li>
          <li>✔ Faire Preise</li>
          <li>✔ Erfahrung & Fachwissen</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "40px" }}>
        <h2>Kontakt</h2>
        <p>Kammerjäger Bergmann</p>
        <p>📍 Blumenstraße 6, 46236 Bottrop</p>
        <p>📞 Telefon: 0123 456789</p>
        <p>✉️ E-Mail: info@kammerjaeger-bergmann.de</p>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "20px",
        background: "#111",
        color: "#fff",
        textAlign: "center"
      }}>
        <p>© 2026 Kammerjäger Bergmann</p>
      </footer>

    </div>
  );
}
