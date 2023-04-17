<script lang="ts" setup>
import { ref } from "vue";
import IconButton from "../../ui/IconButton.vue";
import { computed } from "vue";
import API from "../../../api/endpoints";
import { useRoute } from "vue-router";

const props = defineProps({
  downloadName: { type: String, required: true },
  downloadUrl: { type: String, required: true },
  liked: { type: Boolean, default: false },
});

const route = useRoute();
const isLiked = ref<boolean>(props.liked);

const iconHeart = computed(() => {
  return isLiked.value ? "heart-fill" : "heart";
});

async function likeHandler() {
  try {
    const method = isLiked.value ? API.unlikePhoto : API.likePhoto;

    await method(`${route.params.id}`);
    isLiked.value = !isLiked.value;
  } finally {
    //
  }
}
</script>

<template>
  <div class="buttons">
    liked: {{ liked }}
    <IconButton
      class="button like"
      :class="{ fill: liked }"
      :icon="iconHeart"
      @click="likeHandler"
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
@import "../../../assets/styles/breakpoints";
@import "../../../assets/styles/colors";
@import "../../../assets/styles/decarations";
@import "../../../assets/styles/shadow";

.button {
  box-shadow: $box-shadow-light;
  border-radius: $border-radius;
  margin-left: 16px;

  @include md-up {
    margin-left: 20px;
  }
}

.like {
  color: $dark;
  background-color: $white;

  &.fill {
    color: $primary;
  }
}

.download {
  color: $dark;
  background-color: $primary;
  font-size: 20px;

  @include md-up {
    min-width: 206px;
  }
}
</style>
