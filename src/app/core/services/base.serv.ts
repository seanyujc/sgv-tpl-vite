import { apiConfig } from "../../config/api.conf";
import { ensureInitialized } from "sg-resource";
import { ResultInfo } from "../domain/ResultInfo";
import { HEADER_TOKEN } from "../constants";

export class BaseService {
  constructor(
    protected proxyHttp = ensureInitialized<string, any>(
      apiConfig,
      {
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
          return Promise.resolve(config);
        },
      }
    )
  ) {}
}
