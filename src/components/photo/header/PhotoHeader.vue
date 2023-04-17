<script lang="ts" setup>
import PhotoAuthor from "./PhotoAuthor.vue";
import PhotoButtons from "./PhotoButtons.vue";

defineProps({
  title: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true },
  image: { type: String, required: true },
  imageLarge: { type: String, required: true },
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
    <PhotoButtons />
  </header>
</template>

<style lang="scss" scoped>
@import "../../../assets/styles/breakpoints";
@import "../../../assets/styles/colors";
@import "../../../assets/styles/decarations";

.header {
  display: flex;
  justify-content: space-between;
}
</style>
