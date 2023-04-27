<script lang="ts" setup>
import AppLoader from "../components/molecules/AppLoader.vue";
import PhotoPageHeader from "../components/molecules/page-headers/PhotoPageHeader.vue";
import { useRoute } from "vue-router";
import { usePhotoStore } from "../stores/photo";
import { storeToRefs } from "pinia";
import { useProcessStore } from "../stores/process";
import { defineAsyncComponent, onBeforeUnmount } from "vue";

const route = useRoute();
const store = usePhotoStore();
const processStore = useProcessStore();
const { loading, error } = storeToRefs(processStore);
const { photo } = storeToRefs(store);

const controller = new AbortController();
store.loadPhotoData(`${route.params.id}`);
onBeforeUnmount(() => controller.abort());

const AsyncPhotoContend = defineAsyncComponent(
  () => import("../components/organisms/photo-details/PhotoDetails.vue")
);
const AsyncAppMessage = defineAsyncComponent(
  () => import("../components/atoms/AppMessage.vue")
);
</script>

<template>
  <div>
    <PhotoPageHeader />

    <AppLoader v-if="loading && !photo" />
    <component
      v-else-if="error"
      :text="error"
      type="error"
      :is="AsyncAppMessage"
      offset
    ></component>
    <component v-else-if="photo" :is="AsyncPhotoContend"></component>
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
