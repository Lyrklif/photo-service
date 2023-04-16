<script lang="ts" setup>
import LogoHeader from "./LogoHeader.vue";
import LinksHeader from "./LinksHeader.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { PAGE_NAMES } from "../../../constants/router";

const route = useRoute();

const isMainPage = computed(() => {
  return route.name === PAGE_NAMES.main;
});
</script>

<template>
  <header class="header">
    <div class="container">
      <LogoHeader :is-static="isMainPage" :big="isMainPage" />
      <LinksHeader :show-search="!isMainPage" :route-name="route.name" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../../../assets/styles/colors";

.header {
  background-color: $dark;
  color: $white;
  padding-top: 20px;
  padding-bottom: 20px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
