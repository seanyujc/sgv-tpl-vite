import Vue from "vue";
import Component from "vue-class-component";
import { Route } from "vue-router";
import { ComBaseComp } from "../core/ComBaseComp";
import { HEADER_TOKEN } from "../core/constants";

@Component({})
export default class BasePage extends ComBaseComp {
  /* Lifecycle Hooks */
  beforeRouteEnter(to: Route, from: Route, next: any) {
    const headerToken = localStorage.getItem(HEADER_TOKEN);
    next((vm: Vue) => {
      // Check Login Status
      if (!headerToken) {
        // vm.$router.replace({
        //   name: "loginReturn",
        //   params: { return: encodeURIComponent(to.fullPath) },
        // });
      }
    });
  }
  /* Lifecycle Hooks END*/
}
