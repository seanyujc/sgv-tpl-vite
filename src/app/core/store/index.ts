import { createStore } from "@harlem/core";
import {
  ACCESS_TOKEN_KEY,
  USER_INFO,
} from "../constants";
import { UserInfo } from "../domain/UserInfo";

const STATE = {
  userInfo: null as UserInfo | null,
};

export const { state, getter, mutation, ...store } = createStore("user", STATE);

export const setUserInfo = mutation<UserInfo | null>(
  "userInfo",
  (state, payload) => {
    if (payload) {
      const userInfo = Object.assign(new UserInfo(), payload);
      sessionStorage.setItem(ACCESS_TOKEN_KEY, payload.accessToken);
      sessionStorage.setItem(USER_INFO, JSON.stringify(userInfo));
    } else {
      sessionStorage.removeItem(USER_INFO);
    }

    state.userInfo = payload;
  }
);
