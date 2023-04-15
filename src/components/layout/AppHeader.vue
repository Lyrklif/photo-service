<script lang="ts" setup>
import AppIcon from "../ui/AppIcon.vue";
</script>

<template>
  <header class="header">
    <AppIcon name="logo" class="logo-icon" />
  </header>
</template>

<style lang="scss" scoped>
@import "../../assets/styles/colors";

.header {
  background-color: $dark;
  color: $white;
}

.logo-icon {
  width: 84px;
}
</style>
