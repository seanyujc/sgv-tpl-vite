import { inject, onMounted, onBeforeUnmount, onUnmounted } from "vue";
import type { ComponentInternalInstance } from "vue";
import { onBeforeRouteLeave } from "vue-router";

export function useBasePage(target: ComponentInternalInstance | null) {
  onMounted(() => {
    //
  }, target);

  onBeforeRouteLeave((to, from) => {
    //
  });

  onBeforeUnmount(() => {
    //
  }, target);

  return {};
}
