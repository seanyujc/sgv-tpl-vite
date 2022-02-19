// @ts-check
/// <reference path="../node_modules/sg-resource/typings.d.ts" />
(function () {
  var /** @type {ISiteConfig<"DEV" | "SIT" | "UAT" | "PROD", "default">} */ SITE_CONFIG =
      {
        systems: [
          {
            env: "DEV",
            remote: {
              hosts: {
                default: "http://172.20.7.247:18081/api-gateway/user",
              },
            },
          },
          {
            env: "PROD",
            remote: {
              hosts: {
                default: "https://api.baidu.com/api-gateway/user",
              },
            },
          },
        ],
        runtimes: "DEV",
      };
  if (typeof window === "object") {
    window.getSiteConfig = () => SITE_CONFIG;
  }
  if (typeof global == "object") {
    global.getSiteConfig = () => SITE_CONFIG;
  }
})();
