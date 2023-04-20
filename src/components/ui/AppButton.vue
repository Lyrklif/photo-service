<script lang="ts" setup>
import { computed, PropType } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "button",
    validator: (value: string) => {
      return ["button", "submit"].includes(value);
    },
  },
  primary: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  customTag: {
    type: String,
  },
  to: {
    type: [String, Object] as PropType<string | { name: string }>,
    default: null,
  },
});

const emits = defineEmits(["click"]);

const tag = computed(() => {
  return props.customTag
    ? props.customTag
    : props.to
    ? "router-link"
    : "button";
});

const clickHandler = (event: MouseEvent) => {
  if (props.disabled) return;
  emits("click", event);
};
</script>

<template>
  <component
    :is="tag"
    class="base-btn btn"
    :type="type"
    :class="{ primary, disabled, interactive: !disabled }"
    :to="to"
    :disabled="disabled"
    @click="clickHandler"
  >
    <slot></slot>
  </component>
</template>

<style lang="scss" scoped>
@import "../../assets/styles/animations";

/**
 * 1. Each browser sets padding and margin in its own way - reset to zero.
 * 2. It should not be possible to highlight button content, including link buttons.
 * 3. The content of the link buttons should not have an underscore.
 * 4. The button should not have multi-line content.
 * 5. That FF under MacOS doesn't do blur after programmatically setting focus on mousedown.
 * Details: http://jsfiddle.net/mishaberezin/892yppts/10/.
 * 6. For link buttons.
 * 7. Removing native backlighting on iOS and Android.
 * 8. In IE by default hidden, in other browsers visible, normalization is required.
 * In favor of visible, as we use a shadow to show focus.
 * 9. This style reset is needed for all themes.
 * 10. Reset browser styles for buttons, especially for link.
 * 11. In IOS 15, button[type=submit] is set to bold
 */
.base-btn {
  position: relative;

  display: inline-flex; // 6
  align-items: center;
  justify-content: center;
  padding: 0; // 1
  margin: 0; // 1

  font-family: inherit;
  font-weight: inherit; // 11
  color: inherit;

  text-align: center; // 10
  overflow: visible; // 8

  -moz-user-focus: ignore; // 5

  user-select: none; // 2
  white-space: nowrap; // 4
  text-decoration: none; // 3

  border-width: 0;
  border-radius: inherit;
  background: transparent; // 9
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); // 7

  touch-action: manipulation;
}

.btn {
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: opacity $transition-delay;
  background-color: transparent;

  &.interactive {
    @media (hover: hover) {
      &:hover {
        opacity: 0.7;
      }
    }
  }

  &.disabled {
    cursor: default;
  }
}
</style>
