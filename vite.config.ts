import path from "path";
import { defineConfig } from "vite";
import vuePlugin from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import checker from "vite-plugin-checker";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [vuePlugin(), vueJsx(), checker({ typescript: true }),AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        ElementPlusResolver({ importStyle: "sass" }),
        (name) => {
          if (name.startsWith("My")) {
            const partialName = name.slice(2);
            const mres = partialName.match(/[A-Z][^A-Z]*/g);
            if (mres != null) {
              const path = `@/app/components`;
              return {
                importName: name,
                path,
              };
            }
          }
        },
      ],
    }),],
  build: {
    minify: true,
  },
});
