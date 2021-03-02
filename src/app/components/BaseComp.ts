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
import { mapState } from "vuex";
import { ComBaseComp } from "../core/ComBaseComp";

@Component({})
export class BaseComp extends ComBaseComp {}
