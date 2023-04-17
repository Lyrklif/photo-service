<script lang="ts" setup>
import AppIcon from "./AppIcon.vue";
</script>

<template>
  <div class="loader">
    <AppIcon name="loader" class="icon" />
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/styles/animations";

.loader {
  margin: 30px auto;
  height: 30px;
  width: 30px;
  display: block;
}

.icon {
  animation-name: loading;
  animation-duration: 700ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
