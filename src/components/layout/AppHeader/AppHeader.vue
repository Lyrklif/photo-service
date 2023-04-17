<script lang="ts" setup>
import LogoHeader from "./LogoHeader.vue";
import LikeButton from "../../photo/like-button/LikeButton.vue";
import IconButton from "../../ui/IconButton.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { PAGE_NAMES } from "../../../constants/router";
import { LIKE_BUTTON_VARIANTS } from "../../photo/like-button/types";
import { usePhotoStore } from "../../../stores/photo";

const route = useRoute();
const store = usePhotoStore();

const isMainPage = computed(() => {
  return route.name === PAGE_NAMES.main;
});

const likeButtonType = computed(() => {
  switch (route.name) {
    case PAGE_NAMES.favorites:
      return LIKE_BUTTON_VARIANTS.static;
    case PAGE_NAMES.photo:
      return LIKE_BUTTON_VARIANTS.button;
    default:
      return LIKE_BUTTON_VARIANTS.link;
  }
});
</script>

<template>
  <header class="header">
    <div class="container">
      <LogoHeader :is-static="isMainPage" :big="isMainPage" />

      <div>
        <IconButton
          v-if="!isMainPage"
          :to="{ name: PAGE_NAMES.main }"
          text="Поиск"
          icon="search"
          class="search"
        />

        <LikeButton
          :type="likeButtonType"
          text="Избранное"
          :liked="store.isLiked"
          @click="store.likePhoto"
        />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../../../assets/styles/colors";

.header {
  background-color: $dark;
  color: $white;
  padding-top: 20px;
  padding-bottom: 20px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search {
  margin-right: 20px;
}
</style>
