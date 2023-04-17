<script lang="ts" setup>
import LogoHeader from "./LogoHeader.vue";
import LikeButton from "../../photo/like-button/LikeButton.vue";
import IconButton from "../../ui/IconButton.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { PAGE_NAMES } from "../../../constants/router";
import { LIKE_BUTTON_VARIANTS } from "../../photo/like-button/types";
import { usePhotoStore } from "../../../stores/photo";

const route = useRoute();
const store = usePhotoStore();

const isMainPage = computed(() => {
  return route.name === PAGE_NAMES.main;
});

const likeButtonType = computed(() => {
  switch (route.name) {
    case PAGE_NAMES.favorites:
      return LIKE_BUTTON_VARIANTS.static;
    case PAGE_NAMES.photo:
      return LIKE_BUTTON_VARIANTS.button;
    default:
      return LIKE_BUTTON_VARIANTS.link;
  }
});
</script>

<template>
  <header class="header" :class="{ main: isMainPage }">
    <div class="container">
      <LogoHeader :is-static="isMainPage" :big="isMainPage" class="logo" />

      <div class="buttons-wrap">
        <IconButton
          v-if="!isMainPage"
          :to="{ name: PAGE_NAMES.main }"
          text="Поиск"
          icon="search"
          class="search"
        />

        <LikeButton
          :type="likeButtonType"
          text="Избранное"
          :liked="store.isLiked"
          class="like"
          :class="{ main: isMainPage }"
          @click="store.likePhoto"
        />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../../../assets/styles/colors";
@import "../../../assets/styles/breakpoints";

.header {
  background-color: $dark;
  color: $white;
  padding-top: 18px;
  padding-bottom: 18px;
  height: 80px;

  @include md-up {
    height: 81px;
  }

  &.main {
    height: 70px;
    padding-top: 13px;
    padding-bottom: 13px;

    @include md-up {
      height: auto;
      padding-top: 33px;
      padding-bottom: 43px;
    }
  }
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search {
  @include md-up {
    margin-right: 18px;
  }
}
.logo {
  @include md-up {
    transform: translateY(4px);
  }
}

.buttons-wrap {
  transform: translateX(11px);

  @include md-up {
    font-size: 20px;
    transform: translateX(6px);
  }
}

.like {
  &.main {
    @include lg-up {
      font-size: 18px;
    }
  }
}
</style>
