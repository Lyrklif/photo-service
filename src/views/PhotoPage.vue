<script lang="ts" setup>
import AppLoader from "../components/ui/AppLoader.vue";
import AppMessage from "../components/ui/AppMessage.vue";
import PhotoPageHeader from "../components/page-content/photo/PhotoPageHeader.vue";
import PhotoContend from "../components/page-content/photo/PhotoContend.vue";
import { useRoute } from "vue-router";
import { usePhotoStore } from "../stores/photo";
import { storeToRefs } from "pinia";
import { useProcessStore } from "../stores/process";

const route = useRoute();
const store = usePhotoStore();
const processStore = useProcessStore();
const { loading, error } = storeToRefs(processStore);
const { photo } = storeToRefs(store);

store.loadPhotoData(`${route.params.id}`);
</script>

<template>
  <div>
    <PhotoPageHeader />

    <AppLoader v-if="loading && !photo" />
    <AppMessage v-else-if="error" :text="error" type="error" offset />
    <PhotoContend v-else-if="photo" />
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/breakpoints";

.photo-header {
  margin-top: 40px;
  margin-bottom: 32px;

  @include md-up {
    margin-top: 44px;
    margin-bottom: 40px;
  }
}
</style>
