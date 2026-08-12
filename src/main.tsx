import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

/**
 * THE REDUX STORE AND THE GLOBAL CONTEXT WERE BOTH REMOVED FROM HERE, and both
 * were pure cost.
 *
 * The store held an auth slice — login, register, logout, profile — that no
 * component ever read: nothing in `src/` called `useAppSelector`,
 * `useAppDispatch`, `useSelector` or `useDispatch`. This site makes no API
 * calls. But because the store was constructed at boot, it dragged
 * `@reduxjs/toolkit`, `redux`, `react-redux`, `immer` and (through the auth
 * slice) the HTTP client into the eager chunk — roughly 70 KB of JavaScript
 * parsed before first paint, on every visit, to populate state nobody asked
 * for.
 *
 * `GlobalProvider` was the same shape of nothing: a context whose value was a
 * literal `{}`, with a `useGlobalContext` hook that no file imported.
 *
 * If a real store is ever needed, add it back at that moment. A provider kept
 * "in case" costs every visitor now for a feature that does not exist yet.
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
