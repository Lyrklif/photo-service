<script lang="ts" setup>
import AppPicture from "../../../atoms/AppPicture.vue";

defineProps({
  alt: { type: String, required: true },
  src: { type: String, required: true },
});
</script>

<template>
  <div class="bg-image-wp">
    <AppPicture
      :alt="alt"
      :src="`${src}&w=768&auto=compress,format`"
      :source="[
        {
          srcset: `${src}&w=1080&auto=compress,format`,
          media: '(min-width: 1080px)',
        },
        {
          srcset: `${src}&w=1280&auto=compress,format`,
          media: '(min-width: 1280px)',
        },
        {
          srcset: `${src}&w=1920&auto=compress,format`,
          media: '(min-width: 1920px)',
        },
      ]"
      class="bg-image"
      lazy
    />
  </div>
</template>

<style lang="scss" scoped>
@import "../../../../assets/styles/breakpoints";
@import "../../../../assets/styles/colors";
@import "../../../../assets/styles/decarations";

.bg-image-wp {
  display: none;

  @include md-up {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    max-width: 100%;
    max-height: 100vh;
    z-index: -1;
    user-select: none;
    background-color: $dark-background;
    overflow: hidden;

    &:after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      background-color: $dark-background;
      filter: $blur;
      display: block;
    }
  }
}
.bg-image {
  @include md-up {
    filter: grayscale(1);
  }
}
</style>
