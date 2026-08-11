/// <reference types="vite/client" />

/**
 * Typed environment. Without this `import.meta.env.VITE_API_URL` is `any`, so a
 * typo in the variable name typechecks perfectly and silently reads undefined —
 * which is the exact failure this variable was introduced to stop.
 */
interface ImportMetaEnv {
  /** Absolute URL of the API, including the /api prefix. Set at BUILD time. */
  readonly VITE_API_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
