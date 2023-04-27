<script lang="ts" setup>
import AppPicture from "../atoms/AppPicture.vue";

defineProps({
  alt: { type: String, required: true },
  src: { type: String, required: true },
});
</script>

<template>
  <AppPicture
    class="image"
    :alt="alt"
    :src="`${src}&w=400&auto=compress,format`"
    :source="[
      {
        srcset: `${src}&w=576&auto=compress,format`,
        media: '(min-width: 576px)',
      },
      {
        srcset: `${src}&w=768&auto=compress,format`,
        media: '(min-width: 768px)',
      },
      {
        srcset: `${src}&w=1080&auto=compress,format`,
        media: '(min-width: 1080px)',
      },
      {
        srcset: `${src}&w=1280&auto=compress,format`,
        media: '(min-width: 1280px)',
      },
      {
        srcset: `${src}&w=1482&auto=compress,format`,
        media: '(min-width: 1920px)',
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
