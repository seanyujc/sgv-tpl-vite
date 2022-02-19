import type { ApiConfigInfo } from "sg-resource/dist/es/lib/domain/ApiConfigInfo";

export const apiConfig: ApiConfigInfo<"default", any> = {
  post: {
    login: { host: "default", path: "/login" },
  },
  get: {},
};
