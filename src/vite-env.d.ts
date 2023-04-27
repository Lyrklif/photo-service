/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  readonly VITE_ACCESS_KEY: string;
  readonly VITE_SECRET_KEY: string;
}
