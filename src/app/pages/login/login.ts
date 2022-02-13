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
import { CommonService } from "@/app/core/services/common.serv";

export default defineComponent({
  name: "LoginPage",
  components: {},
  setup() {
    useBasePage(getCurrentInstance());
    const commonService = createSingletonObject<CommonService>(CommonService)
    const form = reactive<any>({});
    const rules = reactive({
      password: [
        { required: true, message: "请输入您的密码", trigger: "blur" },
      ],
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
      commonService.login("XIAOMING", "xxxxx")
    }
    function signup() {}
    return {
      form,
      rules,
      dialogSignupVisible,
      confirmSignup,
      submitForm,
      signup,
    };
  },
  mounted() {
    // todo
  },
});
