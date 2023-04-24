<script lang="ts" setup>
import LogoHeader from "./LogoHeader.vue";

defineProps({
  staticLogo: {
    type: Boolean,
    default: false,
  },
  big: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <header class="header" :class="{ big: big }">
    <div class="container">
      <LogoHeader :is-static="staticLogo" :big="big" class="logo" />

      <div class="buttons-wrap">
        <slot> </slot>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../../../assets/styles/colors";
@import "../../../assets/styles/breakpoints";

.header {
  background-color: $dark;
  color: $white;
  padding-top: 18px;
  padding-bottom: 18px;
  height: 80px;

  @include md-up {
    height: 81px;
  }

  &.big {
    @include md-up {
      height: auto;
      padding-top: 33px;
      padding-bottom: 43px;
    }
  }
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  @include md-up {
    transform: translateY(4px);
  }
}

.buttons-wrap {
  transform: translateX(11px);

  @include md-up {
    font-size: 20px;
    transform: translateX(7px);
  }
}
</style>

<style scoped>
@media (min-width: 768px) {
  .buttons-wrap >>> .search {
    margin-right: 18px;
  }
}
</style>
