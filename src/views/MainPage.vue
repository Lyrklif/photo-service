<script lang="ts" setup>
import SearchPanel from "../components/search/SearchPanel.vue";
import PhotoList from "../components/photo/PhotoList.vue";
import AppLoader from "../components/ui/AppLoader.vue";
import { usePhotosStore } from "../stores/photos";

const store = usePhotosStore();

store.loadRandomPhotos();

const searchHandler = (text: string = "") => {
  if (!text) store.loadRandomPhotos();
  else store.searchByName(text);
};
</script>

<template>
  <main>
    <header class="visually-hidden">
      <h1>Art Galery. San Francisco</h1>
    </header>

    <SearchPanel @submit="searchHandler" />
    <div class="container">
      <AppLoader v-if="store.loading" />
      <PhotoList v-else :list="store.list" class="list" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "../assets/styles/breakpoints";

.list {
  margin-top: 50px;

  @include md-up {
    margin-top: 114px;
  }
}
</style>
