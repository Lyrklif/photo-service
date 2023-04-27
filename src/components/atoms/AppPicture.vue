<script lang="ts" setup>
import { computed, PropType, ref } from "vue";

type TSource = {
  media: string;
  srcset: string;
};

const props = defineProps({
  source: { type: Array as PropType<Array<TSource>>, default: () => [] },
  src: { type: String, required: true },
  srcset: { type: String },
  alt: { type: String, required: true },
  contain: { type: Boolean, default: false },
  lazy: { type: Boolean, default: false },
});

const loaded = ref<boolean>(false);

const loadingValue = computed(() => {
  return props.lazy ? "lazy" : null;
});

const alternativeText = computed(() => {
  return props.alt || "Image";
});

const loadHandler = () => {
  loaded.value = true;
};
</script>

<template>
  <picture class="picture" :class="{ loaded, contain }">
    <source
      v-for="(item, index) in source"
      :key="index"
      :srcset="item.srcset"
      :media="item.media"
      class="picture__source"
      :class="{ contain }"
    />
    <img
      :srcset="srcset"
      :src="src"
      :alt="alternativeText"
      :loading="loadingValue"
      class="picture__img"
      :class="{ contain }"
      @load="loadHandler"
    />
  </picture>
</template>

<style lang="scss" scoped>
@import "../../assets/styles/animations";

.picture {
  opacity: 0;
  transition: opacity $transition-delay;
  max-width: 100%;
  height: auto;
  overflow: hidden;

  &__source,
  &__img {
    max-width: 100%;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;

    &.contain {
      object-fit: contain;
    }
  }

  &__img {
    display: block;
  }

  &.loaded {
    opacity: 1;
  }
}
</style>
