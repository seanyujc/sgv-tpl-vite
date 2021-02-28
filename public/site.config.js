(function () {
  var SITE_CONFIG = {
    DEV: {
      remotes: {
        user: "//192.168.31.234:3003/user-api",
        support: "//192.168.31.234:3003/support-api",
      },
      protocol: "http:",
      hostname: "localhost",
      port: 7080,
      publicPath: "/",
      assetsPath: "/",
      sensor: "https://apisink.shence.com:8106/sa?project=default",
    },
    TEST: {
      remotes: {
        user: "//test.qq.com:8080/user-api",
      },
      protocol: "http:",
      hostname: "127.0.0.1",
      port: 7080,
      publicPath: "/",
      assetsPath: "/",
      sensor: "https://apisink.shence.com:8106/sa?project=default",
    },
    UAT: {
      remotes: {
        user: "//test.qq.com:8080/user-api",
      },
      protocol: "http:",
      hostname: "127.0.0.1",
      port: 7080,
      publicPath: "/",
      assetsPath: "/",
      sensor: "https://apisink.shence.com:8106/sa?project=default",
    },
    PROD: {
      remotes: {
        user: "//test.qq.com:8080/user-api",
      },
      protocol: "https:",
      hostname: "127.0.0.1",
      port: 7080,
      publicPath: "/",
      assetsPath: "/",
      sensor: "https://apisink.shence.com:8106/sa?project=trial_lab",
    },
    runtimes: "DEV",
  };
  if (typeof window === "object") {
    window.getSiteConfig = () => SITE_CONFIG;
  }
})();
