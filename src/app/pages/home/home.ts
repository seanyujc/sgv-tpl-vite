import { mixins } from "vue-class-component";
import BasePage from "@/app/pages/BasePage";
import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Vue,
  Watch,
} from "vue-property-decorator";

@Component({
  components: {},
  name: "home",
})
export default class HomePage extends mixins(BasePage) {
  title: string = "Home";

  fetchData() {
    // todo
  }
  /* Lifecycle Hooks */
  mounted() {
    //
  }
  /* Lifecycle Hooks END */
}
