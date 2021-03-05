interface Window {
  getSiteConfig: () => ISiteConfig;
}

declare namespace NodeJS {
  interface Global {
    getSiteConfig: () => ISiteConfig;
  }
}
