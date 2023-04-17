<script lang="ts" setup>
import { ref } from "vue";
import API from "../api/endpoints";
import PhotoList from "../components/photo/PhotoList.vue";
import type { IPhoto } from "../api/types";

const loading = ref<boolean>(false);
const error = ref<boolean>(false);
const errorText = ref<string>("");
const list = ref<Array<IPhoto>>([]);

async function load() {
  try {
    loading.value = true;
    error.value = false;
    errorText.value = "";

    const response = await API.getLikedPhotos();
    list.value = response.data;
  } catch (e: any) {
    error.value = true;
    errorText.value = e.response.statusText;
  } finally {
    loading.value = false;
  }
}

load();
</script>

<template>
  <main class="page">
    <header class="header">
      <h1>Избранное</h1>
    </header>

    <div class="container">
      <PhotoList :list="list" class="list" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "../assets/styles/breakpoints";
@import "../assets/styles/colors";

.page {
  @include md-up {
    border-top: 16px solid $grey;
  }
}

.header {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;

  @include md-up {
    margin-top: 94px;
    margin-bottom: 94px;
    font-size: 72px;
    line-height: 84px;
  }
}
</style>
