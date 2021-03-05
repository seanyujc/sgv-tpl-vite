import path from "path";
import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";

require(path.resolve(__dirname,"./public/site.config"))

const siteConfigInfo = global.getSiteConfig();
const siteInfo = siteConfigInfo[siteConfigInfo.runtimes];

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [createVuePlugin()],
});
