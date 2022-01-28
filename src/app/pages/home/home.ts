import { defineComponent, getCurrentInstance } from "vue";
import { useBasePage } from "@/app/pages/base-page";

export default defineComponent({
  name: "HomePage",
  components: {},
  setup() {
    useBasePage(getCurrentInstance());
    return {};
  },
  mounted() {
    // todo
  },
});
