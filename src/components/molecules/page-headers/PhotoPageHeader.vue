<script lang="ts" setup>
import AppHeader from "../../../layout/AppHeader.vue";
import IconButton from "../IconButton.vue";
import LikeButton from "../like-button/LikeButton.vue";
import { PAGE_NAMES } from "../../../common/constants/router";
</script>

<template>
  <AppHeader>
    <IconButton
      :to="{ name: PAGE_NAMES.main }"
      text="Search"
      icon="search"
      class="search"
    />
    <LikeButton show-text />
  </AppHeader>
</template>
