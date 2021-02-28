import Vue from "vue";
import app from "./app.vue";
import router from "./index.router";
import store from "./core/store";
import ElementUI from "element-ui";

Vue.use(ElementUI);

const main = new Vue({
  router,
  store,
  render: (h) => h(app),
}).$mount("#app");
