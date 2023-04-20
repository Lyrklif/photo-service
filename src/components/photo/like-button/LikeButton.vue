<script lang="ts" setup>
import IconButton from "../../ui/IconButton.vue";
import { computed, PropType, ref } from "vue";
import { PAGE_NAMES } from "../../../common/constants/router";
import type { TLikeButton } from "./types";
import { LIKE_BUTTON_VARIANTS } from "./types";

const props = defineProps({
  liked: { type: Boolean, default: false },
  text: { type: String, default: "" },
  type: {
    type: String as PropType<TLikeButton>,
    default: LIKE_BUTTON_VARIANTS.link,
  },
});

const favorite = computed(() => {
  switch (props.type) {
    case LIKE_BUTTON_VARIANTS.static:
      return {
        disabled: true,
        customTag: "div",
        to: undefined,
        button: false,
      };
    case LIKE_BUTTON_VARIANTS.button:
      return {
        disabled: false,
        customTag: undefined,
        to: undefined,
        button: true,
      };
    default:
      return {
        disabled: false,
        customTag: undefined,
        to: { name: PAGE_NAMES.favorites },
        button: false,
      };
  }
});

const iconHeart = computed(() => {
  return props.liked ? "heart-fill" : "heart";
});

const emits = defineEmits(["click"]);

const favoriteClickHandler = (event: PointerEvent | MouseEvent) => {
  if (favorite.value.disabled || !favorite.value.button) return;
  emits("click", event);
};
</script>

<template>
  <IconButton
    :customTag="favorite.customTag"
    :disabled="favorite.disabled"
    :to="favorite.to"
    :text="text"
    :icon="iconHeart"
    :class="{ fill: liked }"
    @click="favoriteClickHandler"
  />
</template>

<style lang="scss" scoped>
@import "../../../assets/styles/colors";

.like {
  &.fill {
    color: $primary;
  }
}
</style>
