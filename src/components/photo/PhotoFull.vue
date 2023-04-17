<script lang="ts" setup>
import AppPicture from "../ui/AppPicture.vue";

defineProps({
  alt: { type: String, required: true },
  src: { type: String, required: true },
  srcMedium: { type: String, required: true },
  srcLarge: { type: String, required: true },
});
</script>

<template>
  <AppPicture
    class="image"
    :alt="alt"
    :src="src"
    :srcset="`${srcMedium} 2x`"
    :source="[
      {
        srcset: `${srcLarge} 2x, ${srcMedium}`,
        media: '(min-width: 768px)',
      },
    ]"
  />
</template>

<style lang="scss" scoped>
@import "../../assets/styles/decarations";
@import "../../assets/styles/shadow";

.image {
  box-shadow: $box-shadow;
  border-radius: $border-radius;
  overflow: hidden;
  display: block;
}
</style>
