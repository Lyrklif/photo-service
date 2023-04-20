<script lang="ts" setup>
import SearchPanel from "../components/search/SearchPanel.vue";
import PhotoList from "../components/photo/PhotoList.vue";
import AppLoader from "../components/ui/AppLoader.vue";
import ScrollTop from "../components/ui/ScrollTop.vue";
import AppMessage from "../components/ui/AppMessage.vue";
import MainHeader from "../widgets/main/MainHeader.vue";
import { usePhotosStore } from "../stores/photos";
import { storeToRefs } from "pinia";
import { useProcessStore } from "../stores/process";

const store = usePhotosStore();
const processStore = useProcessStore();
const { loading, error } = storeToRefs(processStore);
const { list } = storeToRefs(store);

store.loadRandomPhotos();

const searchHandler = (text: string = "") => {
  if (!text) store.loadRandomPhotos();
  else store.searchByName(text);
};
</script>

<template>
  <div>
    <MainHeader />

    <main>
      <header class="visually-hidden">
        <h1>Art Galery. San Francisco</h1>
      </header>

      <SearchPanel @submit="searchHandler" />
      <div class="container">
        <AppLoader v-if="loading" />
        <AppMessage v-else-if="error" :text="error" type="error" offset />
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
</style>
