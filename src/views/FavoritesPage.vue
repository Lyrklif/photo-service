<script lang="ts" setup>
import AppLoader from "../components/ui/AppLoader.vue";
import AppMessage from "../components/ui/AppMessage.vue";
import FavoriteHeader from "../components/page-content/favorite/FavoriteHeader.vue";
import { useFavoritesStore } from "../stores/favorites";
import { storeToRefs } from "pinia";
import { useProcessStore } from "../stores/process";
import { defineAsyncComponent, onBeforeUnmount } from "vue";

const store = useFavoritesStore();
const processStore = useProcessStore();
const { loading, error } = storeToRefs(processStore);
const { list } = storeToRefs(store);

const controller = new AbortController();
store.loadFavorites();
onBeforeUnmount(() => controller.abort());

const AsyncPhotoList = defineAsyncComponent(
  () => import("../components/photo/PhotoList.vue")
);
</script>

<template>
  <div>
    <FavoriteHeader />

    <main class="page">
      <header class="favorite-header">
        <h1 class="title">Избранное</h1>
      </header>

      <div class="container">
        <AppLoader v-if="loading" />
        <AppMessage v-else-if="error" :text="error" type="error" offset />
        <component v-else :is="AsyncPhotoList" :list="list"></component>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/breakpoints";
@import "../assets/styles/colors";

.page {
  @include md-up {
    border-top: 16px solid $dark-grey;
  }
}

.favorite-header {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 55px;

  @include md-up {
    margin-top: 94px;
    margin-bottom: 100px;
  }
}

.title {
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  margin-top: 0;
  margin-bottom: 0;

  @include md-up {
    font-size: 72px;
    line-height: 84px;
  }
}
</style>
