<script lang="ts" setup>
import { ref } from "vue";
import API from "../api/endpoints";
import PhotoHeader from "../components/photo/header/PhotoHeader.vue";
import PhotoFull from "../components/photo/PhotoFull.vue";
import PhotoBackground from "../components/photo/PhotoBackground.vue";
import type { IPhoto } from "../api/types";
import { useRoute } from "vue-router";
import AppPicture from "../components/ui/AppPicture.vue";

const loading = ref<boolean>(false);
const error = ref<boolean>(false);
const errorText = ref<string>("");
const photo = ref<IPhoto>();
const route = useRoute();

async function load() {
  try {
    loading.value = true;
    error.value = false;
    errorText.value = "";

    const response = await API.getPhoto(`${route.params.id}`);
    photo.value = response.data;
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
  <main v-if="photo">
    <PhotoHeader
      :title="photo.alt_description"
      :name="photo.user.name"
      :username="photo.user.username"
      :image="photo.user.profile_image.medium"
      :imageLarge="photo.user.profile_image.large"
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
    margin-bottom: 40px;
  }
}
</style>
