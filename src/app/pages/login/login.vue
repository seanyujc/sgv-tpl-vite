<template>
  <div class="page-module">
    <el-form ref="loginForm" class="login-form" :rules="rules" :model="form">
      <h3>欢迎登录</h3>
      <el-form-item prop="userName">
        <el-input
          v-model="form.userName"
          placeholder="请输入您的用户名/手机/邮箱"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="form.password"
          placeholder="请输入您的密码"
        ></el-input>
      </el-form-item>
      <el-form-item class="long-form-item">
        <el-button type="primary" @click="submitForm()">登录</el-button>
      </el-form-item>
      <ul class="forgot-sigup">
        <li>
          <router-link to="/forgot">忘记密码？</router-link>
        </li>
        <li>
          <a href="javascript:" @click="signup">注册新账号</a>
        </li>
      </ul>
    </el-form>
    <el-dialog title="注册新账号" v-model="dialogSignupVisible">
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="confirmSignup">确定</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  onMounted,
  onUnmounted,
  reactive,
  ref,
} from "vue";
import { useBasePage } from "@/app/pages/base-page";
import { createSingletonObject } from "sg-resource";

import Common from "@/app/core/common";
import { user } from "@/app/core/services/user";

useBasePage(getCurrentInstance());
const form = reactive<any>({});
const rules = reactive({
  password: [{ required: true, message: "请输入您的密码", trigger: "blur" }],
  userName: [
    {
      message: "请输入您的用户名/手机/邮箱",
      required: true,
      trigger: "blur",
    },
  ],
});
const dialogSignupVisible = ref(false);
Common.addClass(document.querySelector("html"), "login-page");
onUnmounted(() => {
  Common.removeClass(document.querySelector("html"), "login-page");
});
function confirmSignup() {}
function submitForm() {
  user.login("XIAOMING", "xxxxx");
}
function signup() {}
</script>
<style lang="scss" scoped src="./login.scss">
</style>
<style lang="scss">
.login-page {
  height: 100%;
  body {
    height: 100%;
    background: url(/images/bg.png) no-repeat;
    background-size: cover;
    #app {
      height: 100%;
    }
  }
}
</style>
