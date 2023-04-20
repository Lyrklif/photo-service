<script lang="ts" setup>
import PhotoHeader from "../components/photo/header/PhotoHeader.vue";
import PhotoFull from "../components/photo/PhotoFull.vue";
import PhotoBackground from "../components/photo/PhotoBackground.vue";
import AppLoader from "../components/ui/AppLoader.vue";
import AppHeader from "../components/layout/AppHeader/AppHeader.vue";
import IconButton from "../components/ui/IconButton.vue";
import LikeButton from "../components/photo/like-button/LikeButton.vue";
import { LIKE_BUTTON_VARIANTS } from "../components/photo/like-button/types";
import { useRoute } from "vue-router";
import { usePhotoStore } from "../stores/photo";
import { storeToRefs } from "pinia";
import { PAGE_NAMES } from "../common/constants/router";

const route = useRoute();
const store = usePhotoStore();
const { loading, photo, isLiked } = storeToRefs(store);

store.loadPhotoData(`${route.params.id}`);
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
        :type="LIKE_BUTTON_VARIANTS.button"
        text="Избранное"
        class="like"
        :liked="isLiked"
        @click="store.likePhoto"
      />
    </AppHeader>

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
        :alt="photo.alt_description"
        :image="photo.urls.regular"
        :imageLarge="photo.urls.full"
      />
    </main>
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
