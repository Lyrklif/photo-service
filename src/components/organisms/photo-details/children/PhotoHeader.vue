<script lang="ts" setup>
import PhotoAuthor from "../../../molecules/PhotoAuthor.vue";
import PhotoButtons from "./PhotoButtons.vue";

defineProps({
  title: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true },
  image: { type: String, required: true },
  imageLarge: { type: String, required: true },
  download: { type: String, required: true },
  liked: { type: Boolean, required: true },
});
</script>

<template>
  <header class="container header">
    <h1 class="visually-hidden">{{ title }}</h1>

    <PhotoAuthor
      :name="name"
      :username="username"
      :image="image"
      :imageLarge="imageLarge"
    />
    <PhotoButtons
      class="buttons"
      :downloadName="title"
      :downloadUrl="download"
      :liked="liked"
    />
  </header>
</template>

<style lang="scss" scoped>
@import "../../../../assets/styles/breakpoints";

.header {
  display: flex;
  justify-content: space-between;
}

.buttons {
  margin-top: 4px;

  @include md-up {
    margin-top: 0;
  }
}
</style>
