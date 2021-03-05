(function () {
  var SITE_CONFIG = {
    DEV: {
      remote: {
        hosts: {
          user: { url: "//10.0.0.1:8080/user-api", cors: true },
          support: "https://10.0.0.1:8080/support-api",
        },
        protocol: "http:",
      },
      local: {
        hostname: "127.0.0.1",
        port: 7080,
        publicPath: "/",
        assetsPath: "/",
      },
    },
    TEST: {
      remote: {
        hosts: {
          user: "//10.0.0.1:8080/user-api",
          support: "https://10.0.0.1:8080/support-api",
        },
        protocol: "http:",
      },
      local: {
        hostname: "127.0.0.1",
        port: 7080,
        publicPath: "/",
        assetsPath: "/",
      },
    },
    UAT: {
      remote: {
        hosts: {
          user: "//10.0.0.1:8080/user-api",
          support: "https://10.0.0.1:8080/support-api",
        },
        protocol: "http:",
      },
      local: {
        hostname: "127.0.0.1",
        port: 7080,
        publicPath: "/",
        assetsPath: "/",
      },
    },
    PROD: {
      remote: {
        hosts: {
          user: "//10.0.0.1:8080/user-api",
          support: "//10.0.0.1:8080/support-api",
        },
        protocol: "https:",
      },
      local: {
        hostname: "127.0.0.1",
        port: 7080,
        publicPath: "/",
        assetsPath: "/",
      },
    },
    runtimes: "DEV",
  };
  if (typeof window === "object") {
    window.getSiteConfig = () => SITE_CONFIG;
  }
  if (typeof global == "object") {
    global.getSiteConfig = () => SITE_CONFIG;
  }
})();
