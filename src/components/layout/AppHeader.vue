<script lang="ts" setup>
import AppIcon from "../ui/AppIcon.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { PAGE_NAMES } from "../../constants/router";
const route = useRoute();

const logo = computed(() => {
  const isStatic = route.name === PAGE_NAMES.main;

  return {
    tag: isStatic ? "div" : "router-link",
    to: isStatic ? null : { name: PAGE_NAMES.main },
  };
});
</script>

<template>
  <header class="header">
    <div class="container">
      <component :is="logo.tag" :to="logo.to" class="logo">
        <AppIcon name="logo" class="logo-icon" />
      </component>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../../assets/styles/colors";
@import "../../assets/styles/grid-system";

.header {
  background-color: $dark;
  color: $white;
  padding-top: 20px;
  padding-bottom: 20px;
}

.logo {
  display: block;
  width: 84px;
  height: 33px;

  @include md-up {
    width: 112px;
    height: 44px;
  }

  @include lg-up {
    width: 184px;
    height: 73px;
  }
}
</style>
