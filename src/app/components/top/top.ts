import { mixins } from "vue-class-component";
import { BaseComp } from "@/app/components/BaseComp";
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
  name: "top",
})
export default class TopComp extends mixins(BaseComp) {
  /* Lifecycle Hooks */
  mounted() {
    //
  }
  /* Lifecycle Hooks END */
}
