<script lang="ts" setup>
import AppIcon from "../ui/AppIcon.vue";
import AppButton from "../ui/AppButton.vue";
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

      <AppButton>
        <AppIcon name="search" class="icon" />
        <span>Поиск</span>
      </AppButton>
      <AppButton customTag="div" disabled>
        <AppIcon name="heart" class="icon" />
        <span>Избранное</span>
      </AppButton>
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

.icon {
  width: 23px;
  height: 21px;
  margin-right: 10px;
}
</style>
