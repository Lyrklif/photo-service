<script lang="ts" setup>
import { ref } from "vue";
import API from "../api/endpoints";
import SearchPanel from "../components/search/SearchPanel.vue";
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

    const response = await API.getRandom();
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
  <main>
    <header class="visually-hidden">
      <h1>Art Galery. San Francisco</h1>
    </header>

    <SearchPanel />
    <div class="container">
      <PhotoList :list="list" class="list" />
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
