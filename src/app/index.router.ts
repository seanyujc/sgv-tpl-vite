import Vue from "vue";
import VueRouter, { Route, RouteConfig } from "vue-router";
import * as PageFactory from "./pages";
Vue.use(VueRouter);
const routes = [
  {
    path: "/home",
    name: "home",
    component: PageFactory.homePagePreloading,
    children: [],
  },
  { path: "*", redirect: "login" },
  { path: "/login", name: "login", component: PageFactory.loginPagePreloading },
  {
    path: "/login/:return",
    name: "loginReturn",
    component: PageFactory.loginPagePreloading,
  },
  {
    path: "*",
    redirect: "login",
  },
];
const scrollBehavior = (to: Route, from: Route, savedPosition: any) => {
  return savedPosition || { x: 0, y: 0 };
};
const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior,
});
export default router;
