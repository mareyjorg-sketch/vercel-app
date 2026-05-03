/**
 * Sicherheitsdatenblätter – PDFs unter public/assets/sicherheitsdatenblaetter/
 * Dateinamen: nur Kleinbuchstaben, Zahlen, Bindestriche (SEO-/URL-tauglich).
 */
export const sdbBasePath = "/assets/sicherheitsdatenblaetter";

/** @type {{ name: string, file: string, hasPdf: boolean }[]} */
export const sicherheitsdatenblaetter = [
  { name: "BCS – Sicherheitsdatenblatt (REACH)", file: "bcs-sds-reach.pdf", hasPdf: true },
  { name: "Contra Insect Universal", file: "contra-insect-universal.pdf", hasPdf: true },
  { name: "DK 10.2", file: "dk-10-2.pdf", hasPdf: true },
  { name: "Sicherheitsdatenblatt – Dokument 1", file: "dokument-1.pdf", hasPdf: true },
  { name: "Sicherheitsdatenblatt – Dokument 2", file: "dokument-2.pdf", hasPdf: true },
  { name: "EG – Sicherheitsdatenblatt", file: "eg-sicherheitsdatenblatt.pdf", hasPdf: true },
  { name: "Halo Klebefolien", file: "halo-klebefolien.pdf", hasPdf: true },
  { name: "Klebeboden Kleidermotten", file: "klebeboden-kleidermotten.pdf", hasPdf: true },
  { name: "Klebeboden Lebensmittelmotten", file: "klebeboden-lebensmittelmotten.pdf", hasPdf: true },
  { name: "Klebeflächen Schabendetektoren", file: "klebeflaechen-schabendetektoren.pdf", hasPdf: true },
  { name: "Sicherheitsdatenblatt (Allgemein)", file: "mittel-allgemein-sdb.pdf", hasPdf: true },
  { name: "Nagtag Dife Block", file: "nagtag-dife-block.pdf", hasPdf: true },
  { name: "Nagtag Dife Weizenköder", file: "nagtag-dife-weizenkoeder.pdf", hasPdf: true },
  { name: "Protect Sensation 2 in 1", file: "protect-sensation-2in1.pdf", hasPdf: true },
  { name: "Ratzia Bag", file: "ratzia-bag.pdf", hasPdf: true },
  { name: "Röhren Splittergeschützt", file: "roehren-splittergeschuetzt.pdf", hasPdf: true },
  { name: "SDS EU (REACH Anhang II)", file: "sds-eu-reach-anhang-ii.pdf", hasPdf: true },
];
