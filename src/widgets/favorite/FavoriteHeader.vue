<script lang="ts" setup>
import AppHeader from "../../components/layout/AppHeader/AppHeader.vue";
import IconButton from "../../components/ui/IconButton.vue";
import LikeButton from "../../components/photo/like-button/LikeButton.vue";
import { LIKE_BUTTON_VARIANTS } from "../../components/photo/like-button/types";
import { PAGE_NAMES } from "../../common/constants/router";
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
