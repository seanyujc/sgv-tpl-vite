<template>
  <router-view></router-view>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

Component.registerHooks([
  "beforeRouteEnter",
  "beforeRouteLeave",
  "beforeRouteUpdate",
]);

@Component({
  components: {},
  computed: {},
})
export default class App extends Vue {
  /* Lifecycle Hooks */
  mounted() {
    //
  }
  /* Lifecycle Hooks END */
}
</script>
<style lang="scss" scoped>
</style>