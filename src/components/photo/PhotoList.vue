<script lang="ts" setup>
import { PropType } from "vue";
import type { IPhoto } from "../../api/types";
import AppPicture from "../ui/AppPicture.vue";
import { PAGE_NAMES } from "../../constants/router";

defineProps({
  list: { type: Array as PropType<Array<IPhoto>>, default: () => [] },
});
</script>

<template>
  <ul class="unstyled-list list">
    <li v-for="item in list" :key="item.id" class="list__item">
      <router-link
        :to="{ name: PAGE_NAMES.photo, params: { id: item.id } }"
        class="list__link"
      >
        <AppPicture
          :alt="item.alt_description"
          :src="item.urls.small"
          :srcset="`${item.urls.regular} 2x`"
          class="list__img"
        />
      </router-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import "../../assets/styles/colors";
@import "../../assets/styles/breakpoints";
@import "../../assets/styles/decarations";

.list {
  &__item {
    margin-bottom: 22px;

    &:last-of-type {
      margin-bottom: 0;
    }

    @include md-up {
      margin-bottom: 0;
    }
  }

  &__link {
    background-color: $dark-grey;
    display: block;
    width: 100%;
    border-radius: $border-radius;
    overflow: hidden;
    height: auto;
    position: relative;

    // 100 / (w / h)
    // 100 / (473 / 440)
    padding: 93.02% 0 0 0;
  }

  &__img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  @include md-up {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }

  @include lg-up {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
