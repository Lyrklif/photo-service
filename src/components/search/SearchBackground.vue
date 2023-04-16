<script lang="ts" setup>
import AppPicture from "../ui/AppPicture.vue";

const source = [
  {
    srcset: `src/assets/images/background-desktop@2x.png 2x,
      src/assets/images/background-desktop.png`,
    media: "(min-width: 768px)",
  },
];
</script>

<template>
  <AppPicture
    class="bg-image"
    :source="source"
    srcset="src/assets/images/background@2x.png 2x"
    src="src/assets/images/background.png"
    alt="'Звездная ночь' Винсента Ван Гога"
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
