import SiteLayout from "../components/SiteLayout.jsx";
import { PageHead } from "../components/PageHead.jsx";
import { TEL, TEL_DISPLAY, SITE_ORIGIN, SITE_DOMAIN } from "../siteInfo.js";
import "./Impressum.css";

const IMPRESSUM_SEO = {
  title: "Impressum | Kammerjäger Bergmann",
  description: "Impressum und Anbieterkennzeichnung gemäß § 5 TMG – Kammerjäger Bergmann GmbH, Bottrop.",
  canonical: `${SITE_ORIGIN}/impressum/`,
  robots: "index, follow",
  geo: false,
  og: {
    type: "website",
    title: "Impressum | Kammerjäger Bergmann",
    description: "Anbieterkennzeichnung gemäß § 5 TMG.",
    url: `${SITE_ORIGIN}/impressum/`,
    locale: "de_DE",
  },
};

function ImpressumBlock({ title, children, isLast = false }) {
  return (
    <section className={`impressum-block${isLast ? " impressum-block--last" : ""}`}>
      <h2>{title}</h2>
      <div className="impressum-block__body">{children}</div>
    </section>
  );
}

export default function ImpressumPage() {
  return (
    <SiteLayout>
      <PageHead seo={IMPRESSUM_SEO} />
      <div className="impressum-page">
        <header className="impressum-header">
          <h1>Impressum</h1>
          <p className="impressum-subtitle">Angaben gemäß § 5 TMG</p>
        </header>

        <ImpressumBlock title="Unternehmensangaben">
          <p>
            Kammerjäger Bergmann GmbH
            <br />
            Blumenstraße 6
            <br />
            46236 Bottrop
            <br />
            Deutschland
          </p>
        </ImpressumBlock>

        <ImpressumBlock title="Kontakt">
          <p>
            Telefon: <a href={TEL}>{TEL_DISPLAY}</a>
            <br />
            E-Mail: <a href="mailto:info@kammerjager-bergmann.de">info@kammerjager-bergmann.de</a>
            <br />
            Web:{" "}
            <a href={SITE_ORIGIN} rel="noopener noreferrer">
              www.{SITE_DOMAIN}
            </a>
          </p>
        </ImpressumBlock>

        <ImpressumBlock title="Handelsregister">
          <p>
            Rechtsform: GmbH
            <br />
            Registergericht: Amtsgericht Gelsenkirchen
            <br />
            Handelsregisternummer: HRB 24837
          </p>
        </ImpressumBlock>

        <ImpressumBlock title="Umsatzsteuer">
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
            <br />
            <br />
            USt-IdNr.: DE318492765
          </p>
        </ImpressumBlock>

        <ImpressumBlock title="Geschäftsführung">
          <p>Geschäftsführer: [Name Geschäftsführer eintragen]</p>
        </ImpressumBlock>

        <ImpressumBlock title="Berufszulassung & Aufsicht">
          <p>
            Sachkunde nach § 18 IfSG
            <br />
            Ausgestellt durch: IHK Nord Westfalen
            <br />
            <br />
            TÜV Süd – Zertifizierter Fachbetrieb
            <br />
            Zertifikatsnummer: TS-2021-NW-004837
          </p>
        </ImpressumBlock>

        <ImpressumBlock title="Streitschlichtung">
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr/
            </a>
            <br />
            <br />
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </ImpressumBlock>

        <ImpressumBlock title="Haftung für Inhalte">
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
            Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
            übermittelte oder gespeicherte fremde Informationen zu überwachen.
          </p>
        </ImpressumBlock>

        <ImpressumBlock title="Haftung für Links">
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
            können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
            stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
        </ImpressumBlock>

        <ImpressumBlock title="Urheberrecht" isLast>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
            des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </ImpressumBlock>
      </div>
    </SiteLayout>
  );
}
