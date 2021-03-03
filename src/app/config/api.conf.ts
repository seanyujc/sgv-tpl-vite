export const apiConfig: IApiConfig<"support" | "user"> = {
  post: {
    login: { host: "user", path: "/login" },
  },
  get: {},
};
