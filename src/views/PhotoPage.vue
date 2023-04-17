<script lang="ts" setup>
import PhotoHeader from "../components/photo/header/PhotoHeader.vue";
import PhotoFull from "../components/photo/PhotoFull.vue";
import PhotoBackground from "../components/photo/PhotoBackground.vue";
import AppLoader from "../components/ui/AppLoader.vue";
import { useRoute } from "vue-router";
import { usePhotoStore } from "../stores/photo";

const route = useRoute();
const store = usePhotoStore();

store.loadPhotoData(`${route.params.id}`);
</script>

<template>
  <AppLoader v-if="store.loading" />
  <main v-else-if="store.photo">
    <PhotoHeader
      :title="store.photo.alt_description"
      :name="store.photo.user.name"
      :username="store.photo.user.username"
      :image="store.photo.user.profile_image.medium"
      :imageLarge="store.photo.user.profile_image.large"
      :download="store.photo.links.download"
      :liked="store.isLiked"
    />

    <div class="container">
      <PhotoFull
        :src-large="store.photo.urls.full"
        :src-medium="store.photo.urls.regular"
        :src="store.photo.urls.small"
        :alt="store.photo.alt_description"
      />
    </div>

    <PhotoBackground
      :alt="store.photo.alt_description"
      :image="store.photo.urls.regular"
      :imageLarge="store.photo.urls.full"
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
    margin-bottom: 40px;
  }
}
</style>
