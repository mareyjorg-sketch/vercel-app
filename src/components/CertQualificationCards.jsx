const gridStyle = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
  maxWidth: "860px",
  margin: "0 auto",
};

const cardStyle = {
  flex: 1,
  minWidth: "300px",
  background: "rgba(255,255,255,0.12)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.22)",
  borderRadius: "16px",
  padding: "28px 32px",
  display: "flex",
  alignItems: "flex-start",
  gap: "18px",
};

const tuvBadgeStyle = {
  width: "68px",
  height: "68px",
  flexShrink: 0,
  border: "2.5px solid rgba(255,255,255,0.55)",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const ihkBadgeStyle = {
  width: "68px",
  height: "68px",
  flexShrink: 0,
  background: "rgba(255,255,255,0.15)",
  border: "1px solid rgba(255,255,255,0.3)",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const titleStyle = {
  fontSize: "17px",
  fontWeight: 700,
  color: "white",
  marginBottom: "14px",
};

const checkRowStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "9px",
};

const checkMarkStyle = {
  color: "#7fff00",
  fontWeight: 900,
  fontSize: "17px",
};

const checkTextStyle = {
  color: "rgba(255,255,255,0.85)",
  fontSize: "14px",
};

function CheckLine({ children, isLast = false }) {
  return (
    <div style={isLast ? { ...checkRowStyle, marginBottom: 0 } : checkRowStyle}>
      <span style={checkMarkStyle}>✓</span>
      <span style={checkTextStyle}>{children}</span>
    </div>
  );
}

export default function CertQualificationCards() {
  return (
    <div style={gridStyle} className="cert-glass-grid">
      <div style={cardStyle} className="cert-glass-card">
        <div style={tuvBadgeStyle} role="img" aria-label="TÜV SÜD">
          <span
            style={{
              fontFamily: "Arial Black, sans-serif",
              fontSize: "19px",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.1,
            }}
          >
            TÜV
          </span>
          <span
            style={{
              fontSize: "9px",
              fontWeight: 700,
              color: "rgba(255,255,255,0.65)",
              letterSpacing: "1.5px",
            }}
          >
            SÜD
          </span>
        </div>
        <div>
          <div style={titleStyle}>TÜV Süd – Zertifizierung</div>
          <CheckLine>Zertifizierter Fachbetrieb</CheckLine>
          <CheckLine>Regelmäßige Qualitätsprüfung</CheckLine>
          <CheckLine isLast>Geprüfte Arbeitsstandards</CheckLine>
        </div>
      </div>

      <div style={cardStyle} className="cert-glass-card">
        <div style={ihkBadgeStyle} role="img" aria-label="IHK">
          <span
            style={{
              fontFamily: "Arial Black, sans-serif",
              fontSize: "21px",
              fontWeight: 900,
              color: "white",
              letterSpacing: "1px",
            }}
          >
            IHK
          </span>
        </div>
        <div>
          <div style={titleStyle}>Industrie- und Handelskammer</div>
          <CheckLine>IHK-Mitgliedsbetrieb</CheckLine>
          <CheckLine>Sachkunde § 18 IfSG</CheckLine>
          <CheckLine isLast>Behördlich anerkannte Qualifikation</CheckLine>
        </div>
      </div>
    </div>
  );
}
