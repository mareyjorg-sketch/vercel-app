import { TEL_DISPLAY, EMAIL, SITE_NAME, SITE_ORIGIN } from "../siteInfo.js";

export const SEO_KEYWORDS =
  "Kammerjäger NRW, Schädlingsbekämpfung Bottrop, Kammerjäger Bottrop, Schädlingsbekämpfung Ruhrgebiet, Kammerjäger Essen, Kammerjäger Düsseldorf, Kammerjäger Dortmund, Bettwanzen bekämpfen NRW, Ratten bekämpfen NRW, Wespen entfernen NRW";

export const GEO = {
  region: "DE-NW",
  placename: "Bottrop, Nordrhein-Westfalen",
  position: "51.5236;6.9228",
  icbm: "51.5236, 6.9228",
  lat: 51.5236,
  lng: 6.9228,
};

const OG_IMAGE = `${SITE_ORIGIN}/og-image.jpg`;
const LOGO_IMAGE = `${SITE_ORIGIN}/assets/logo.png`;

export const HOME_SEO = {
  title: `Kammerjäger Bottrop | Schädlingsbekämpfung NRW – Bergmann ☎ ${TEL_DISPLAY}`,
  description:
    "Kammerjäger Bergmann ✓ Schädlingsbekämpfung in ganz NRW ✓ Bottrop, Essen, Duisburg, Düsseldorf, Dortmund, Köln ✓ TÜV-zertifiziert ✓ IHK-geprüft ✓ 24/7 Notdienst ☎ 0163 5276870",
  keywords: SEO_KEYWORDS,
  canonical: `${SITE_ORIGIN}/`,
  og: {
    type: "website",
    title: "Kammerjäger Bergmann – Schädlingsbekämpfung NRW",
    description: `Professionelle Schädlingsbekämpfung in ganz NRW. TÜV-zertifiziert, 24/7 Notdienst. ☎ ${TEL_DISPLAY}`,
    url: `${SITE_ORIGIN}/`,
    locale: "de_DE",
    image: OG_IMAGE,
  },
};

const AREA_SERVED_CITIES = [
  "Bottrop",
  "Essen",
  "Duisburg",
  "Oberhausen",
  "Düsseldorf",
  "Dortmund",
  "Bochum",
  "Gelsenkirchen",
  "Herne",
  "Gladbeck",
  "Marl",
  "Recklinghausen",
  "Dorsten",
  "Dinslaken",
  "Mülheim an der Ruhr",
  "Krefeld",
  "Wuppertal",
  "Köln",
  "Münster",
  "Mönchengladbach",
];

const FAQ_ENTITIES = [
  {
    "@type": "Question",
    name: "Wie schnell kommt Kammerjäger Bergmann?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Wir sind oft noch am selben Tag bei Ihnen vor Ort – im gesamten Ruhrgebiet und NRW.",
    },
  },
  {
    "@type": "Question",
    name: "In welchen Städten ist Kammerjäger Bergmann tätig?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Wir sind in ganz NRW tätig: Bottrop, Essen, Duisburg, Düsseldorf, Dortmund, Bochum, Gelsenkirchen, Oberhausen, Köln, Münster und über 100 weiteren Städten im 100km Umkreis.",
    },
  },
  {
    "@type": "Question",
    name: "Ist Kammerjäger Bergmann zertifiziert?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Ja. Wir sind TÜV Rheinland zertifizierter Fachbetrieb und IHK-geprüft nach § 18 IfSG.",
    },
  },
  {
    "@type": "Question",
    name: "Gibt es einen Notdienst?",
    acceptedAnswer: {
      "@type": "Answer",
      text: `Ja, unser Notdienst ist 24 Stunden am Tag, 7 Tage die Woche erreichbar: ${TEL_DISPLAY}.`,
    },
  },
];

function openingHours() {
  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ];
}

function localBusinessBase(overrides = {}) {
  return {
    "@type": "LocalBusiness",
    "@id": `${SITE_ORIGIN}/#business`,
    name: SITE_NAME,
    legalName: "Kammerjäger Bergmann Schädlingsbekämpfung",
    description:
      "Professionelle Schädlingsbekämpfung in Bottrop und ganz NRW. TÜV-zertifiziert und IHK-geprüft.",
    url: SITE_ORIGIN,
    telephone: "+4916352768700",
    email: EMAIL,
    image: LOGO_IMAGE,
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Bank Transfer",
    openingHoursSpecification: openingHours(),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bottrop",
      addressRegion: "Nordrhein-Westfalen",
      addressCountry: "DE",
      postalCode: "46236",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.lat,
      longitude: GEO.lng,
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "TÜV Rheinland Zertifizierung",
        credentialCategory: "Zertifizierter Fachbetrieb",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "IHK Sachkunde § 18 IfSG",
        credentialCategory: "Sachkundeprüfung",
      },
    ],
    serviceType: [
      "Schädlingsbekämpfung",
      "Kammerjäger",
      "Rattenbekämpfung",
      "Mäusebekämpfung",
      "Bettwanzenbekämpfung",
      "Wespenbekämpfung",
      "Kakerlakenbekämpfung",
      "Ameisenbekämpfung",
      "Mardervergrämung",
      "Schädlingsprävention",
    ],
    sameAs: [
      "https://www.google.com/maps?cid=DEINE_GOOGLE_MAPS_CID",
      "https://www.facebook.com/kammerjager-bergmann",
    ],
    ...overrides,
  };
}

export function buildHomeSchemaGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessBase({
        areaServed: [
          ...AREA_SERVED_CITIES.map((name) => ({ "@type": "City", name })),
          { "@type": "State", name: "Nordrhein-Westfalen" },
        ],
      }),
      {
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}/#website`,
        url: SITE_ORIGIN,
        name: SITE_NAME,
        inLanguage: "de-DE",
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ_ENTITIES,
      },
    ],
  };
}

/** @param {{ name: string, slugKey: string, distanceKm: string }} city */
export function buildCityMeta(city) {
  const path = `/${city.slugKey}/`;
  const distancePhrase =
    city.distanceKm === "0"
      ? "direkt aus Bottrop – schnell vor Ort"
      : `nur ${city.distanceKm} km entfernt`;

  return {
    title: `Kammerjäger ${city.name} | Schädlingsbekämpfung ☎ ${TEL_DISPLAY}`,
    description: `Kammerjäger in ${city.name} gesucht? Bergmann aus Bottrop – ${distancePhrase}. TÜV-zertifiziert ✓ Schnell vor Ort ✓ 24/7 Notdienst ☎ ${TEL_DISPLAY}`,
    keywords: `Kammerjäger ${city.name}, Schädlingsbekämpfung ${city.name}, Kammerjäger NRW, ${SEO_KEYWORDS}`,
    canonical: `${SITE_ORIGIN}${path}`,
    robots: "index, follow, max-snippet:-1, max-image-preview:large",
    og: {
      type: "website",
      title: `Kammerjäger Bergmann – ${city.name}`,
      description: `Schädlingsbekämpfung in ${city.name}. TÜV-zertifiziert, 24/7 Notdienst. ☎ ${TEL_DISPLAY}`,
      url: `${SITE_ORIGIN}${path}`,
      locale: "de_DE",
      image: OG_IMAGE,
    },
  };
}

/** @param {{ name: string, slugKey: string }} city */
export function buildCitySchemaGraph(city) {
  const pageUrl = `${SITE_ORIGIN}/${city.slugKey}/`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessBase({
        "@id": `${pageUrl}#business`,
        name: `Kammerjäger Bergmann – ${city.name}`,
        url: pageUrl,
        areaServed: [{ "@type": "City", name: city.name }],
      }),
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `Schädlingsbekämpfung ${city.name} | Kammerjäger Bergmann`,
        inLanguage: "de-DE",
        isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
      },
    ],
  };
}

export const SECTION_SEO = {
  leistungen: {
    title: `Leistungen | Schädlingsbekämpfung NRW – ${SITE_NAME} ☎ ${TEL_DISPLAY}`,
    description: `Ratten, Mäuse, Bettwanzen, Wespen & mehr – professionelle Schädlingsbekämpfung in NRW. TÜV-zertifiziert. ☎ ${TEL_DISPLAY}`,
    canonical: `${SITE_ORIGIN}/leistungen/`,
  },
  "ueber-uns": {
    title: "Über uns – Kammerjäger Bergmann Bottrop",
    description:
      "Jörg Bergmann und sein Team – 25 Jahre Familienbetrieb aus Bottrop. TÜV-zertifiziert, IHK-geprüft, persönlich & diskret.",
    canonical: `${SITE_ORIGIN}/ueber-uns/`,
  },
  zertifizierung: {
    title: "Zertifizierung – Kammerjäger Bergmann | TÜV & IHK geprüft",
    description:
      "Kammerjäger Bergmann ist TÜV Süd zertifizierter Fachbetrieb und IHK-geprüft nach § 18 IfSG. Nachweisbare Qualität für Privat, Gewerbe und Versicherungen.",
    canonical: `${SITE_ORIGIN}/zertifizierung/`,
  },
  kontakt: {
    title: `Kontakt | Kammerjäger Bergmann – 24/7 Notdienst NRW ☎ ${TEL_DISPLAY}`,
    description: `Kontaktieren Sie Kammerjäger Bergmann – 24/7 Notdienst für Schädlingsbekämpfung in Bottrop und ganz NRW. ☎ ${TEL_DISPLAY}`,
    canonical: `${SITE_ORIGIN}/kontakt/`,
  },
};
