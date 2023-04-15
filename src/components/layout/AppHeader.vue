<script lang="ts" setup>
import AppIcon from "../ui/AppIcon.vue";
import AppButton from "../ui/AppButton.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { PAGE_NAMES } from "../../constants/router";
const route = useRoute();

const isMainPage = computed(() => {
  return route.name === PAGE_NAMES.main;
});

const logo = computed(() => {
  return {
    tag: isMainPage.value ? "div" : "router-link",
    to: isMainPage.value ? null : { name: PAGE_NAMES.main },
  };
});

const isShowSearch = computed(() => {
  return !isMainPage.value;
});

const favorite = computed(() => {
  switch (route.name) {
    case PAGE_NAMES.favorites:
      return {
        disabled: true,
        customTag: "div",
        to: undefined,
        button: false,
      };
    case PAGE_NAMES.photo:
      return {
        disabled: false,
        customTag: undefined,
        to: undefined,
        button: true,
      };
    default:
      return {
        disabled: false,
        customTag: undefined,
        to: { name: PAGE_NAMES.favorites },
        button: false,
      };
  }
});
</script>

<template>
  <header class="header">
    <div class="container">
      <component :is="logo.tag" :to="logo.to" class="logo">
        <AppIcon name="logo" class="logo-icon" />
      </component>

      <AppButton v-if="isShowSearch" :to="{ name: PAGE_NAMES.main }">
        <AppIcon name="search" class="icon" />
        <span>Поиск</span>
      </AppButton>

      <AppButton
        :customTag="favorite.customTag"
        :disabled="favorite.disabled"
        :to="favorite.to"
      >
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
