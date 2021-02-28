import { Method } from "../../axios/axios";

export class Site implements ISite {
  remotes: Record<string, string> = {};
  publicPath = "";
  entrance?: string;
  sensor?: string;
  protocol?: string;
  hostname?: string;
  port?: number;
  assetsPath?: string;
}

export class ConfigAdapter {
  siteInfo: ISite | undefined;
  constructor(private apiConfig: IApiConfig, private siteConfig: ISiteConfig) {
    this.siteInfo = siteConfig[siteConfig.runtimes];
  }

  getRequestUrl(method: Method, apiKey: string, pathParams: string[] = []) {
    if (!this.siteInfo) {
      return apiKey;
    }

    let host = "";
    let path = "";
    let _apiKey = apiKey;
    const keys = apiKey.split("/");
    let module = this.apiConfig;
    if (keys.length > 1) {
      let _module: IApiConfig<string> | undefined = undefined;
      if (this.apiConfig.modules) {
        _module = this.apiConfig.modules[keys[0]];
      }
      if (_module) {
        _apiKey = keys[1];
        module = _module;
      } else {
        return apiKey;
      }
    }
    const methodKey = method.toLocaleLowerCase();
    const config: Record<string, IApi> | undefined = (module as any)[methodKey];
    if (config) {
      const apiPath: IApi | undefined = config[_apiKey];
      if (apiPath) {
        host = this.siteInfo.remotes[apiPath.host] || "";
        host = host.replace(/^http(s)*:/, "");
        path = apiPath.path;
      }
    }

    pathParams.unshift(path);

    return this.siteInfo.protocol + host + pathParams.join("/");
  }
}
