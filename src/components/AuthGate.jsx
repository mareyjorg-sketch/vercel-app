import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "kbg_auth_v1";
const USERNAME = "bergmann";
const PASSWORD = "PIN!PIN!";

function safeEqual(a, b) {
  return String(a ?? "") === String(b ?? "");
}

export default function AuthGate({ children }) {
  const [ready, setReady] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw === "1") setAuthed(true);
    } catch {
      // ignore
    } finally {
      setReady(true);
    }
  }, []);

  const canSubmit = useMemo(() => username.trim().length > 0 && password.length > 0, [username, password]);

  function onSubmit(e) {
    e.preventDefault();
    setError("");

    const ok = safeEqual(username.trim().toLowerCase(), USERNAME) && safeEqual(password, PASSWORD);
    if (!ok) {
      setError("Falscher Nutzername oder Passwort.");
      return;
    }

    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
    setAuthed(true);
  }

  function onLogout() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setAuthed(false);
    setUsername("");
    setPassword("");
    setError("");
  }

  if (!ready) return null;

  if (authed) {
    return (
      <div className="auth-shell">
        <button type="button" className="auth-logout" onClick={onLogout}>
          Abmelden
        </button>
        {children}
      </div>
    );
  }

  return (
    <div className="auth-gate" role="dialog" aria-label="Login erforderlich">
      <div className="auth-card">
        <div className="auth-card__brand">
          <img src="/favicon.svg" alt="" width={44} height={44} aria-hidden="true" />
          <div>
            <div className="auth-card__title">Zugriff geschützt</div>
            <div className="auth-card__sub">Bitte anmelden, um die Seite zu öffnen.</div>
          </div>
        </div>

        <form className="auth-form" onSubmit={onSubmit}>
          <label className="auth-field">
            <span>Nutzername</span>
            <input
              autoFocus
              inputMode="text"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nutzername"
            />
          </label>

          <label className="auth-field">
            <span>Passwort</span>
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Passwort"
            />
          </label>

          {error ? (
            <div className="auth-error" role="alert">
              {error}
            </div>
          ) : null}

          <button className="auth-submit" type="submit" disabled={!canSubmit}>
            Anmelden
          </button>
        </form>

        <div className="auth-hint">
          Hinweis: Das ist ein einfacher Frontend-Zugangsschutz (kein Server-Login).
        </div>
      </div>
    </div>
  );
}

