<script lang="ts" setup>
import PhotoList from "../components/photo/PhotoList.vue";
import AppLoader from "../components/ui/AppLoader.vue";
import { useFavoritesStore } from "../stores/favorites";

const store = useFavoritesStore();
store.loadFavorites();
</script>

<template>
  <main class="page">
    <header class="header">
      <h1 class="title">Избранное</h1>
    </header>

    <div class="container">
      <AppLoader v-if="store.loading" />
      <PhotoList v-else :list="store.list" class="list" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "../assets/styles/breakpoints";
@import "../assets/styles/colors";

.page {
  @include md-up {
    border-top: 16px solid $dark-grey;
  }
}

.header {
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
