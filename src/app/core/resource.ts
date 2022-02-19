import { ensureInitialized } from "sg-resource";
import { apiConfig } from "./config/api.conf";
import { ACCESS_TOKEN_KEY } from "./constants";
import type { RespDataShellInfo } from "./domain/RespDataShellInfo";

export const { post, get, _delete } = ensureInitialized<
  "default",
  RespDataShellInfo
>(apiConfig, {
  headers: () => {
    const accessToken = sessionStorage.getItem(ACCESS_TOKEN_KEY);
    return { "access-token": accessToken };
  },
  diagnoseResponse: (config) => {
    return new Promise((resolve, reject) => {
      if (config && config.status === 200) {
        if (config.data && config.data.status === 0) {
          config.data = config.data.data;
          resolve(config);
        } else {
          reject(config);
        }
      } else {
        resolve(config);
      }
    });
  },
});
