<script lang="ts" setup>
import AppLoader from "../components/molecules/AppLoader.vue";
import FavoritePageHeader from "../components/molecules/page-headers/FavoritePageHeader.vue";
import { useFavoritesStore } from "../stores/favorites";
import { storeToRefs } from "pinia";
import { useProcessStore } from "../stores/process";
import { defineAsyncComponent, onBeforeUnmount } from "vue";
import { useUserStore } from "../stores/user";

const store = useFavoritesStore();
const { list } = storeToRefs(store);

const userStore = useUserStore();
const { username } = storeToRefs(userStore);

const processStore = useProcessStore();
const { loading, error } = storeToRefs(processStore);

const controller = new AbortController();
if (username.value) store.loadFavorites(username.value);
onBeforeUnmount(() => controller.abort());

const AsyncPhotoList = defineAsyncComponent(
  () => import("../components/molecules/PhotoList.vue")
);
const AsyncAppMessage = defineAsyncComponent(
  () => import("../components/atoms/AppMessage.vue")
);
</script>

<template>
  <div>
    <FavoritePageHeader />

    <main class="page">
      <header class="favorite-header">
        <h1 class="title">Favorites</h1>
      </header>

      <div class="container">
        <AppLoader v-if="loading" />
        <component
          v-else-if="error"
          :text="error"
          type="error"
          :is="AsyncAppMessage"
          offset
        ></component>
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
