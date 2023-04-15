<script>
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "SvgIcon",
  props: {
    prefix: {
      type: String,
      default: "icon",
    },
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`);
    return { symbolId };
  },
});
</script>

<template>
  <svg aria-hidden="true" class="svg">
    <use :href="symbolId" />
  </svg>
</template>

<style lang="scss" scoped>
.svg {
  --fill: currentColor;

  max-width: 100%;
}
</style>
