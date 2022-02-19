import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./index.router";
import ElementPlus from "element-plus";

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount("#app");
