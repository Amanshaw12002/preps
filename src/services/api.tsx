import axios from 'axios';

/**
 * THE BASE URL WAS HARDCODED TO localhost:5000. Every build carried it, so the
 * quote form on the live site posted to a machine that is not there. It fails
 * in the worst possible way — the page looks fine, the visitor fills the form,
 * and the lead is lost with nothing logged anywhere.
 *
 * It comes from the environment now. `VITE_API_URL` is read at BUILD time (Vite
 * inlines it), so it must be set wherever the site is built, not on the server
 * that serves it. The localhost fallback is dev-only and deliberate: a missing
 * variable in development should just work, and in production it should be
 * loud, which is what the warning below is for.
 */
const baseURL = import.meta.env.VITE_API_URL ?? 'http://localhost:5000/api';

if (import.meta.env.PROD && !import.meta.env.VITE_API_URL) {
  // Not a thrown error: a broken form must not take the whole site down with
  // it. But this has to be visible to anyone who opens the console on a
  // deployed build, because the failure is otherwise completely silent.
  console.warn(
    '[api] VITE_API_URL is not set — this build points at localhost and no form submission will reach the server.',
  );
}

const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
