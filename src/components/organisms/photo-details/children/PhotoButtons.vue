<script lang="ts" setup>
import IconButton from "../../../molecules/IconButton.vue";
import LikeButton from "../../../molecules/like-button/LikeButton.vue";
import { LIKE_BUTTON_VARIANTS } from "../../../molecules/like-button/types";
import { usePhotoStore } from "../../../../stores/photo";
import { storeToRefs } from "pinia";

defineProps({
  downloadName: { type: String, required: true },
  downloadUrl: { type: String, required: true },
  liked: { type: Boolean, default: false },
});

const store = usePhotoStore();
const { isLiked } = storeToRefs(store);
</script>

<template>
  <div class="buttons">
    <LikeButton
      class="button like"
      :liked="isLiked"
      :type="LIKE_BUTTON_VARIANTS.button"
      @click="store.likePhoto"
    />

    <IconButton
      class="button download"
      icon="download"
      text="Downloand"
      :download="downloadName"
      :href="downloadUrl"
      customTag="a"
      target="_blank"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "../../../../assets/styles/breakpoints";
@import "../../../../assets/styles/colors";
@import "../../../../assets/styles/decarations";
@import "../../../../assets/styles/shadow";

.button {
  box-shadow: $box-shadow-light;
  border-radius: $border-radius;
  margin-left: 16px;
  min-height: 40px;
  min-width: 40px;

  @include md-up {
    margin-left: 20px;
    height: 49px;
    min-width: 49px;
    width: auto;
  }
}

.like {
  color: $dark;
  background-color: $white;
}

.download {
  color: $dark;
  background-color: $primary;
  font-size: 20px;

  @include md-up {
    min-width: 206px;
    justify-content: flex-start;
    padding-left: 24px;
  }
}
</style>

<style scoped>
.download >>> .text {
  margin-left: 16px;
}
</style>
