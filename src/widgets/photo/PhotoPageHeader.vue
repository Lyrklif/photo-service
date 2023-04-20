<script lang="ts" setup>
import AppHeader from "../../components/layout/AppHeader/AppHeader.vue";
import IconButton from "../../components/ui/IconButton.vue";
import LikeButton from "../../components/photo/like-button/LikeButton.vue";
import { LIKE_BUTTON_VARIANTS } from "../../components/photo/like-button/types";
import { usePhotoStore } from "../../stores/photo";
import { storeToRefs } from "pinia";
import { PAGE_NAMES } from "../../common/constants/router";

const store = usePhotoStore();
const { isLiked, likeProcess } = storeToRefs(store);
</script>

<template>
  <AppHeader>
    <IconButton
      :to="{ name: PAGE_NAMES.main }"
      text="Поиск"
      icon="search"
      class="search"
    />
    <LikeButton
      :type="LIKE_BUTTON_VARIANTS.button"
      text="Избранное"
      class="like"
      :liked="isLiked"
      @click="store.likePhoto"
      :disabled="likeProcess"
    />
  </AppHeader>
</template>
