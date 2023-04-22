<script lang="ts" setup>
import PhotoHeader from "../../photo/header/PhotoHeader.vue";
import PhotoFull from "../../photo/PhotoFull.vue";
import PhotoBackground from "../../photo/PhotoBackground.vue";
import { usePhotoStore } from "../../../stores/photo";
import { storeToRefs } from "pinia";
import useDeviceDetect from "../../../mixins/useDeviceDetect.vue";

const store = usePhotoStore();
const { photo, isLiked } = storeToRefs(store);
const { device } = useDeviceDetect();
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
      :liked="isLiked"
      class="photo-header"
    />

    <div class="container">
      <PhotoFull
        :src-large="photo.urls.full"
        :src-medium="photo.urls.regular"
        :src="photo.urls.small"
        :alt="photo.alt_description"
      />
    </div>

    <PhotoBackground
      v-if="device.isDesktop"
      :alt="photo.alt_description"
      :image="photo.urls.regular"
      :imageLarge="photo.urls.full"
    />
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
