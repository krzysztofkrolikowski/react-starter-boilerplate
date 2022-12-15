interface ImportMetaEnv {
  readonly VITE_APP_DEFAULT_LOCALE: string;
  readonly VITE_APP_API_URL: string;
  readonly VITE_APP_SENTRY_DSN: string;
  readonly VITE_APP_CI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
