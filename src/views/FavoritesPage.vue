<script lang="ts" setup>
import PhotoList from "../components/photo/PhotoList.vue";
import AppLoader from "../components/ui/AppLoader.vue";
import AppHeader from "../components/layout/AppHeader/AppHeader.vue";
import IconButton from "../components/ui/IconButton.vue";
import LikeButton from "../components/photo/like-button/LikeButton.vue";
import { LIKE_BUTTON_VARIANTS } from "../components/photo/like-button/types";
import { useFavoritesStore } from "../stores/favorites";
import { storeToRefs } from "pinia";
import { PAGE_NAMES } from "../common/constants/router";

const store = useFavoritesStore();
const { loading, list } = storeToRefs(store);

store.loadFavorites();
</script>

<template>
  <div>
    <AppHeader>
      <IconButton
        :to="{ name: PAGE_NAMES.main }"
        text="Поиск"
        icon="search"
        class="search"
      />
      <LikeButton
        :type="LIKE_BUTTON_VARIANTS.static"
        text="Избранное"
        class="like"
      />
    </AppHeader>

    <main class="page">
      <header class="favorite-header">
        <h1 class="title">Избранное</h1>
      </header>

      <div class="container">
        <AppLoader v-if="loading" />
        <PhotoList v-else :list="list" class="list" />
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
