<script lang="ts" setup>
import { defineAsyncComponent, onBeforeUnmount } from "vue";
import SearchPanel from "../components/organisms/search-photo/SearchPhoto.vue";
import AppLoader from "../components/molecules/AppLoader.vue";
import MainPageHeader from "../components/molecules/page-headers/MainPageHeader.vue";
import { usePhotosStore } from "../stores/photos";
import { storeToRefs } from "pinia";
import { useProcessStore } from "../stores/process";

const store = usePhotosStore();
const processStore = useProcessStore();
const { loading, error } = storeToRefs(processStore);
const { list } = storeToRefs(store);

const controller = new AbortController();
store.loadRandomPhotos();
onBeforeUnmount(() => controller.abort());

const searchHandler = (text: string = "") => {
  if (!text) store.loadRandomPhotos();
  else store.searchByName(text);
};

const AsyncPhotoList = defineAsyncComponent(
  () => import("../components/molecules/PhotoList.vue")
);
const AsyncScrollTop = defineAsyncComponent(
  () => import("../components/molecules/ScrollTop.vue")
);
const AsyncAppMessage = defineAsyncComponent(
  () => import("../components/atoms/AppMessage.vue")
);
</script>

<template>
  <div>
    <MainPageHeader />

    <main>
      <header class="visually-hidden">
        <h1>Art Galery. San Francisco</h1>
      </header>

      <SearchPanel @submit="searchHandler" />

      <div class="container wrapper">
        <AppLoader v-if="loading" />
        <component
          v-else-if="error"
          :text="error"
          type="error"
          :is="AsyncAppMessage"
        ></component>
        <component v-else :is="AsyncPhotoList" :list="list"></component>
      </div>
    </main>
    <component :is="AsyncScrollTop"></component>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/breakpoints";

.wrapper {
  margin-top: 50px;

  @include md-up {
    margin-top: 114px;
  }
}
</style>
