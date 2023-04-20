<script lang="ts" setup>
import AppHeader from "../../layout/AppHeader/AppHeader.vue";
import LikeButton from "../../photo/like-button/LikeButton.vue";
import { LIKE_BUTTON_VARIANTS } from "../../photo/like-button/types";
</script>

<template>
  <AppHeader static-logo big>
    <LikeButton
      :type="LIKE_BUTTON_VARIANTS.link"
      text="Избранное"
      class="like"
    />
  </AppHeader>
</template>

<style lang="scss" scoped>
@import "../../../assets/styles/breakpoints";

.like {
  @include lg-up {
    font-size: 18px;
  }
}
</style>
