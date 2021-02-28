export const apiConfig: IApiConfig<"support" | "user"> = {
  post: {},
  get: {
    fetchRegionInfo: { host: "support", path: "/area/list" },
  },
};
