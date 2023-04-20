<script lang="ts" setup>
import PhotoHeader from "../components/photo/header/PhotoHeader.vue";
import PhotoFull from "../components/photo/PhotoFull.vue";
import PhotoBackground from "../components/photo/PhotoBackground.vue";
import AppLoader from "../components/ui/AppLoader.vue";
import { useRoute } from "vue-router";
import { usePhotoStore } from "../stores/photo";
import { storeToRefs } from "pinia";

const route = useRoute();
const store = usePhotoStore();
const { loading, photo, isLiked } = storeToRefs(store);

store.loadPhotoData(`${route.params.id}`);
</script>

<template>
  <AppLoader v-if="loading" />
  <main v-else-if="photo">
    <PhotoHeader
      :title="photo.alt_description"
      :name="photo.user.name"
      :username="photo.user.username"
      :image="photo.user.profile_image.medium"
      :imageLarge="photo.user.profile_image.large"
      :download="photo.links.download"
      :liked="isLiked"
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
      :alt="photo.alt_description"
      :image="photo.urls.regular"
      :imageLarge="photo.urls.full"
    />
  </main>
</template>

<style lang="scss" scoped>
@import "../assets/styles/breakpoints";
@import "../assets/styles/colors";
@import "../assets/styles/decarations";
@import "../assets/styles/shadow";

.header {
  margin-top: 40px;
  margin-bottom: 32px;

  @include md-up {
    margin-top: 44px;
    margin-bottom: 40px;
  }
}
</style>
