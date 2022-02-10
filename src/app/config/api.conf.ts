import { ApiConfigInfo } from "sg-resource/dist/es/lib/domain/ApiConfigInfo";

export const apiConfig: ApiConfigInfo<"support" | "user", any> = {
  post: {
    login: { host: "user", path: "/login" },
  },
  get: {},
};
