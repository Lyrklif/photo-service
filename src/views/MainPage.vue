<script lang="ts" setup>
import SearchPanel from "../components/search/SearchPanel.vue";
import PhotoList from "../components/photo/PhotoList.vue";
import AppLoader from "../components/ui/AppLoader.vue";
import ScrollTop from "../components/ui/ScrollTop.vue";
import AppHeader from "../components/layout/AppHeader/AppHeader.vue";
import IconButton from "../components/ui/IconButton.vue";
import LikeButton from "../components/photo/like-button/LikeButton.vue";
import { usePhotosStore } from "../stores/photos";
import { storeToRefs } from "pinia";
import { PAGE_NAMES } from "../common/constants/router";
import { LIKE_BUTTON_VARIANTS } from "../components/photo/like-button/types";

const store = usePhotosStore();
const { loading, list } = storeToRefs(store);

store.loadRandomPhotos();

const searchHandler = (text: string = "") => {
  if (!text) store.loadRandomPhotos();
  else store.searchByName(text);
};
</script>

<template>
  <div>
    <AppHeader static-logo big>
      <LikeButton
        :type="LIKE_BUTTON_VARIANTS.link"
        text="Избранное"
        class="like"
      />
    </AppHeader>

    <main>
      <header class="visually-hidden">
        <h1>Art Galery. San Francisco</h1>
      </header>

      <SearchPanel @submit="searchHandler" />
      <div class="container">
        <AppLoader v-if="loading" />
        <PhotoList v-else :list="list" class="list" />
      </div>
    </main>
    <ScrollTop />
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/breakpoints";

.list {
  margin-top: 50px;

  @include md-up {
    margin-top: 114px;
  }
}

.like {
  @include lg-up {
    font-size: 18px;
  }
}
</style>
