<script lang="ts" setup>
import AppIcon from "../../ui/AppIcon.vue";
import { computed } from "vue";
import { PAGE_NAMES } from "../../../common/constants/router";

const props = defineProps({
  isStatic: {
    type: Boolean,
    default: false,
  },
  big: {
    type: Boolean,
    default: false,
  },
});

const logo = computed(() => {
  return {
    tag: props.isStatic ? "div" : "router-link",
    to: props.isStatic ? undefined : { name: PAGE_NAMES.main },
  };
});
</script>

<template>
  <component :is="logo.tag" :to="logo.to" class="logo" :class="{ big: big }">
    <AppIcon name="logo" class="logo-icon" />
  </component>
</template>

<style lang="scss" scoped>
@import "../../../assets/styles/breakpoints";

.logo {
  display: block;
  width: 84px;
  height: 33px;

  @include md-up {
    width: 112px;
    height: 44px;
  }

  &.big {
    @include lg-up {
      width: 204px;
      height: 73px;
    }
  }
}
</style>
