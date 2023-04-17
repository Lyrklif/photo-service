<script lang="ts" setup>
import AppPicture from "../ui/AppPicture.vue";

defineProps({
  alt: { type: String, required: true },
  image: { type: String, required: true },
  imageLarge: { type: String, required: true },
});
</script>

<template>
  <div class="bg-image-wp">
    <AppPicture
      :alt="alt"
      :src="image"
      :srcset="`${imageLarge} 2x`"
      class="bg-image"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/styles/breakpoints";
@import "../../assets/styles/colors";
@import "../../assets/styles/decarations";

.bg-image-wp {
  display: none;

  @include md-up {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    max-width: 100%;
    height: 1300px;
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
