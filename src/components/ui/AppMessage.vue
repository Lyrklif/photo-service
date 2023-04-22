<script lang="ts" setup>
import type { PropType } from "vue";

type TMessage = "info" | "error";

defineProps({
  text: {
    type: String,
    default: "",
  },
  type: {
    type: String as PropType<TMessage>,
    default: "info",
  },
  offset: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="message" :class="[type, offset ? 'offset' : '']">
    <strong>
      <slot>{{ text }}</slot>
    </strong>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/styles/colors";

.message {
  display: block;
  text-align: center;
  font-size: 1.5rem;

  &.offset {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  &.error {
    color: $error;
  }
}
</style>
