<template>
  <div class="component-top">
    <slot></slot>
  </div>
</template>

<script setup lang="ts" >
import { ref } from "vue";
const title = ref("");
</script>
<style lang="scss" scoped src="./top.scss">
</style>