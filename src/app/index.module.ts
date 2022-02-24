import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./index.router";
import ElementPlus from "element-plus";
import { messageError } from "./core/common";

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.config.errorHandler = (err, instance, info) => {
  console.error(err, instance, info);
  messageError(err);
};
app.mount("#app");
