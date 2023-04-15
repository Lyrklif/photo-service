<script lang="ts" setup>
import IconButton from "../../ui/IconButton.vue";
import { computed, PropType } from "vue";
import type { RouteRecordName } from "vue-router";
import { PAGE_NAMES } from "../../../constants/router";

const props = defineProps({
  showSearch: {
    type: Boolean,
    default: false,
  },
  routeName: {
    type: String as PropType<RouteRecordName>,
    required: true,
  },
});

const favorite = computed(() => {
  switch (props.routeName) {
    case PAGE_NAMES.favorites:
      return {
        disabled: true,
        customTag: "div",
        to: undefined,
        button: false,
      };
    case PAGE_NAMES.photo:
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

const emits = defineEmits(["favorite:click"]);

const favoriteClickHandler = (event: PointerEvent | MouseEvent) => {
  if (favorite.value.disabled) return;
  emits("favorite:click", event);
};
</script>

<template>
  <div>
    <IconButton
      v-if="showSearch"
      :to="{ name: PAGE_NAMES.main }"
      text="Поиск"
      icon="search"
      class="search"
    />

    <IconButton
      :customTag="favorite.customTag"
      :disabled="favorite.disabled"
      :to="favorite.to"
      text="Избранное"
      icon="heart"
      @click="favorite.button ? favoriteClickHandler : null"
    />
  </div>
</template>

<style lang="scss" scoped>
.search {
  margin-right: 20px;
}
</style>
