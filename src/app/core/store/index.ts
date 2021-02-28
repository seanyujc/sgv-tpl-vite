import Vue from "vue";
import Vuex from "vuex";
import { AccountInfo } from "../domain/AccountInfo";
import { SET_ACCOUNT_INFO } from "./mutationTypes";
Vue.use(Vuex);
export class RootState {
  /**
   * 登录账户信息
   */
  accountInfo = new AccountInfo();
}
const store = new Vuex.Store({
  mutations: {
    [SET_ACCOUNT_INFO](store, val) {
      store.accountInfo = val;
    },
  },
  state: new RootState(),
});
export default store;
