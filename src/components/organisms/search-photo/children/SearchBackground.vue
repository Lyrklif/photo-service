<script lang="ts" setup>
import AppPicture from "../../../atoms/AppPicture.vue";

const source = [
  {
    srcset: `images/background-desktop.webp`,
    media: "(min-width: 768px)",
  },
];
</script>

<template>
  <AppPicture
    class="bg-image"
    :source="source"
    src="images/background.webp"
    alt="Vincent van Gogh's 'The Starry Night'"
  />
</template>

<style lang="scss" scoped>
.bg-image {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  user-select: none;
}
</style>
