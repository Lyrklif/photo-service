<script lang="ts" setup>
import PhotoHeader from "./children/PhotoHeader.vue";
import FullPhoto from "../../molecules/FullPhoto.vue";
import { usePhotoStore } from "../../../stores/photo";
import { storeToRefs } from "pinia";
import useDeviceDetect from "../../../mixins/useDeviceDetect.vue";
import { defineAsyncComponent } from "vue";

const store = usePhotoStore();
const { photo } = storeToRefs(store);
const { device } = useDeviceDetect();

const AsyncPhotoBackground = defineAsyncComponent(
  () => import("./children/PhotoBackground.vue")
);
</script>

<template>
  <main>
    <PhotoHeader
      :title="photo.alt_description"
      :name="photo.user.name"
      :username="photo.user.username"
      :image="photo.user.profile_image.medium"
      :imageLarge="photo.user.profile_image.large"
      :download="photo.links.download"
      class="photo-header"
    />

    <div class="container">
      <FullPhoto :src="photo.urls.raw" :alt="photo.alt_description" />
    </div>

    <component
      v-if="device.isDesktop"
      :is="AsyncPhotoBackground"
      :alt="photo.alt_description"
      :src="photo.urls.raw"
    ></component>
  </main>
</template>

<style lang="scss" scoped>
@import "../../../assets/styles/breakpoints";

.photo-header {
  margin-top: 40px;
  margin-bottom: 32px;

  @include md-up {
    margin-top: 44px;
    margin-bottom: 40px;
  }
}
</style>
