interface ISite {
  remotes: Record<string, string>;
  publicPath: string;
  entrance?: string;
  sensor?: string;
  protocol?: string;
  hostname?: string;
  port?: number;
  assetsPath?: string;
}
interface ISiteConfig {
  DEV: ISite;
  TEST: ISite;
  UAT: ISite;
  PROD: ISite;
  runtimes: "DEV" | "TEST" | "UAT" | "PROD";
}

interface IApi<T = string> {
  host: T;
  path: string;
}

interface IApiConfig<T = string> {
  post: Record<string, IApi<T>>;
  get: Record<string, IApi<T>>;
  put?: Record<string, IApi<T>>;
  delete?: Record<string, IApi<T>>;
  form?: Record<string, IApi<T>>;
  modules?: Record<string, IApiConfig>;
}
declare const __sg_site_config__: ISiteConfig;
