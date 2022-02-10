import path from "path";
import { defineConfig } from "vite";
import vuePlugin from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import checker from "vite-plugin-checker";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [vuePlugin(), vueJsx(), checker({ typescript: true })],
  build: {
    minify: true,
  },
});
