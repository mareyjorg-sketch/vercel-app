export const TEL = "tel:+491635276870";
export const TEL_DISPLAY = "0163 5276870";
export const EMAIL = "info@kammerjaeger-bergmann.de";
export const SITE_NAME = "Kammerjäger Bergmann";

/** Öffentliche Website (Canonical, Footer, Drucksachen) */
export const SITE_DOMAIN = "kammerjaeger-bergmann.com";
export const SITE_ORIGIN = `https://${SITE_DOMAIN}`;

/** wa.me – eine zentrale URL für alle WhatsApp-Buttons */
const WA_E164 = "491635276870";
const waPrefill = encodeURIComponent("Hallo, ich habe ein Problem mit Schädlingen und brauche Hilfe.");
export const WHATSAPP_URL = `https://wa.me/${WA_E164}?text=${waPrefill}`;
