import { ElForm } from "element-ui/types/form";
import Component, { mixins } from "vue-class-component";
import { createSingletonObject } from "sg-resource/src/decorator";
import { ComBaseComp } from "../../core/ComBaseComp";
import Common from "../../core/common";
import { CommonService } from "../../core/services/common.serv";
import { SET_ACCOUNT_INFO } from "../../core/store/mutationTypes";

@Component({
  components: {},
  name: "login",
})
export default class LoginPage extends mixins(ComBaseComp) {
  commonService = createSingletonObject<CommonService>(CommonService);
  form: any = {};
  rules: any = {
    password: [{ required: true, message: "请输入您的密码", trigger: "blur" }],
    userName: [
      {
        message: "请输入您的用户名/手机/邮箱",
        required: true,
        trigger: "blur",
      },
    ],
  };
  title: string = "登录";
  dialogSignupVisible: boolean = false;
  role: number = 0;

  get loginForm() {
    return this.$refs.loginForm as ElForm;
  }

  async submitForm() {
    const valid = await this.loginForm.validate();
    try {
      if (valid) {
        const data = await this.commonService.login(
          this.form.userName,
          this.form.password
        );
        this.$store.commit(SET_ACCOUNT_INFO, data);
        this.$router.replace("/");
      }
    } catch (error) {
      this.messageError(error);
    }
  }
  signup() {
    this.dialogSignupVisible = true;
  }
  confirmSignup() {
    this.dialogSignupVisible = false;
  }

  fetchData() {
    //
  }
  /* Lifecycle Hooks */
  created() {
    Common.addClass(document.querySelector("html"), "login-page");
  }
  mounted() {
    //
  }
  destroyed() {
    Common.removeClass(document.querySelector("html"), "login-page");
  }
  /* Lifecycle Hooks END*/
}
