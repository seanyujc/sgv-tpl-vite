import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
} from "vue-router";
import * as PageFactory from "./pages";
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      name: "home",
      component: PageFactory.homePagePreloading,
      children: [],
    },
    {
      path: "/login",
      name: "login",
      component: PageFactory.loginPagePreloading,
    },
    {
      path: "/login/:return",
      name: "loginReturn",
      component: PageFactory.loginPagePreloading,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});
