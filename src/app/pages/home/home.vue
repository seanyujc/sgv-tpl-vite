<template>
  <div class="page-home">
    home
    <MyTop>Up</MyTop>
  </div>
</template>
<script setup lang="ts" >
import { getCurrentInstance } from "vue";
import { useBasePage } from "@/app/pages/base-page";
useBasePage(getCurrentInstance());
</script>
<style lang="scss" scoped src="./home.scss">
</style>
