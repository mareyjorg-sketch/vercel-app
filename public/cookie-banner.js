/**
 * Kammerjäger Bergmann – schlanker Cookie-Hinweis (Tailwind Utility-Klassen).
 * Voraussetzung: Tailwind CDN auf der Seite laden, z. B.
 * <script src="https://cdn.tailwindcss.com"></script>
 * <script defer src="/cookie-banner.js"></script>
 */
(function () {
  "use strict";

  var STORAGE_KEY = "kbg_cookie_consent_v1";
  var BANNER_ID = "kbg-cookie-banner";

  function getConsent() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setConsent(value) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      /* ignore */
    }
    removeBanner();
    window.dispatchEvent(new CustomEvent("kbg:cookie-consent", { detail: { choice: value } }));
  }

  function removeBanner() {
    var el = document.getElementById(BANNER_ID);
    if (el && el.parentNode) el.parentNode.removeChild(el);
  }

  function mount() {
    if (document.getElementById(BANNER_ID)) return;
    if (getConsent()) return;

    var root = document.createElement("div");
    root.id = BANNER_ID;
    root.setAttribute("role", "dialog");
    root.setAttribute("aria-label", "Cookie-Einstellungen");
    root.className =
      "fixed bottom-0 left-0 right-0 z-[10000] border-t border-slate-200/80 bg-white/95 px-4 py-3 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md sm:px-6";

    root.innerHTML =
      '<div class="mx-auto flex max-w-4xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">' +
      '<div class="min-w-0 flex-1">' +
      '<p class="text-sm font-semibold text-slate-900">Cookies &amp; Datenschutz</p>' +
      '<p class="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">Wir verwenden nur technisch notwendige Cookies, solange Sie nicht in weitere Cookies einwilligen. Details finden Sie in unserer <a href="/datenschutz.html" class="font-medium text-emerald-700 underline decoration-emerald-600/30 underline-offset-2 hover:text-emerald-800">Datenschutzerklärung</a>.</p>' +
      "</div>" +
      '<div class="flex shrink-0 flex-wrap items-center gap-2 sm:justify-end">' +
      '<button type="button" data-kbg-cookie="necessary" class="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50 sm:px-4 sm:text-sm">Nur notwendige</button>' +
      '<button type="button" data-kbg-cookie="all" class="rounded-lg bg-emerald-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-700 sm:px-4 sm:text-sm">Alle akzeptieren</button>' +
      "</div>" +
      "</div>";

    root.addEventListener("click", function (ev) {
      var t = ev.target;
      if (!(t && t.getAttribute)) return;
      var action = t.getAttribute("data-kbg-cookie");
      if (action === "necessary") setConsent("necessary");
      if (action === "all") setConsent("all");
    });

    document.body.appendChild(root);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
