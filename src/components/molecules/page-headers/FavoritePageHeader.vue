<script lang="ts" setup>
import AppHeader from "../../../layout/AppHeader.vue";
import IconButton from "../IconButton.vue";
import LikeButton from "../like-button/LikeButton.vue";
import { LIKE_BUTTON_VARIANTS } from "../like-button/types";
import { PAGE_NAMES } from "../../../common/constants/router";
</script>

<template>
  <AppHeader>
    <IconButton
      :to="{ name: PAGE_NAMES.main }"
      text="Поиск"
      icon="search"
      class="search"
    />
    <LikeButton
      :type="LIKE_BUTTON_VARIANTS.static"
      text="Избранное"
      class="like"
    />
  </AppHeader>
</template>
