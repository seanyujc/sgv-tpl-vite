import { apiConfig } from "../../config/api.conf";
import { SGResource } from "../../../lib/sg-resource/src";
import { ProxyHttp } from "../../../lib/sg-resource/src/proxy-http";
import { ResultInfo } from "../domain/ResultInfo";
import { HEADER_TOKEN } from "../constants";

export class BaseService {
  proxyHttp: ProxyHttp;
  constructor() {
    this.proxyHttp = SGResource.ensureInitialized(apiConfig, window.getSiteConfig(), {
      headers: () => {
        const headers: any = {};
        const token = localStorage.getItem(HEADER_TOKEN) || "";
        if (token) {
          headers["access-token"] = token;
        }
        return headers;
      },
      diagnoseResponse: (config) => {
        if (config.data) {
          const result: ResultInfo = config.data;
          if (result.status === 0) {
            config.data = result.data;
          }
        }
        return config;
      },
    });
  }
}
