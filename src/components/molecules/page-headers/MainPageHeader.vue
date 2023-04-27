<script lang="ts" setup>
import AppHeader from "../../../layout/AppHeader.vue";
import IconButton from "../IconButton.vue";
import { PAGE_NAMES } from "../../../common/constants/router";
</script>

<template>
  <AppHeader static-logo big>
    <IconButton
      :to="{ name: PAGE_NAMES.favorites }"
      text="Избранное"
      icon="heart"
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
