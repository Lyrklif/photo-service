<script lang="ts" setup>
import AppHeader from "../../layout/AppHeader/AppHeader.vue";
import IconButton from "../../ui/IconButton.vue";
import LikeButton from "../../photo/like-button/LikeButton.vue";
import { LIKE_BUTTON_VARIANTS } from "../../photo/like-button/types";
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
