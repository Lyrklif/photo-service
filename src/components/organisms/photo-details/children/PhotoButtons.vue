<script lang="ts" setup>
import IconButton from "../../../molecules/IconButton.vue";
import LikeButton from "../../../molecules/like-button/LikeButton.vue";

defineProps({
  downloadName: { type: String, required: true },
  downloadUrl: { type: String, required: true },
});
</script>

<template>
  <div class="buttons">
    <LikeButton class="button like" />

    <IconButton
      class="button download"
      icon="download"
      text="Download"
      :download="downloadName"
      :href="downloadUrl"
      title="Open the image in a new tab to download the original"
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
