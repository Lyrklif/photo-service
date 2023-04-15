<script lang="ts" setup>
import { computed, ref } from "vue";

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true },
});

const loaded = ref<boolean>(false);

const source = computed(() => {
  // TODO add srcset
  return {
    src: new URL(`../../assets/images/${props.src}`, import.meta.url).href,
  };
});

const loadHandler = () => {
  loaded.value = true;
};
</script>

<template>
  <img
    :src="source.src"
    :alt="alt"
    class="image"
    :class="{ loaded }"
    @load="loadHandler"
  />
</template>

<style lang="scss" scoped>
@import "../../assets/styles/animations";

.image {
  opacity: 0;
  transition: opacity $transition-delay;
  max-width: 100%;
  height: auto;

  &.loaded {
    opacity: 1;
  }
}
</style>
