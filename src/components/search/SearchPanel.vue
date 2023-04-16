<script lang="ts" setup>
import AppImage from "../ui/AppImage.vue";
</script>

<template>
  <div class="search-panel">
    <div class="container">Search</div>

    <AppImage
      src="background.png"
      alt="'Звездная ночь' Винсента Ван Гога"
      class="bg-image"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/styles/colors";
@import "../../assets/styles/breakpoints";

.search-panel {
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: $dark-background;
  position: relative;

  @include md-up() {
    padding-top: 92px;
    padding-bottom: 92px;
    border-bottom: 16px solid $grey;
  }
}

.bg-image {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
</style>
