<script lang="ts" setup>
import IconButton from "../IconButton.vue";
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { usePhotoStore } from "../../../stores/photo";
import { useAuthStore } from "../../../stores/auth";

const props = defineProps({
  showText: { type: Boolean, default: false },
});

const store = usePhotoStore();
const { likePhoto } = store;
const { isLiked, likeProcess } = storeToRefs(store);

const storeAuth = useAuthStore();
const { redirectAuth } = storeAuth;
const { isAuth } = storeToRefs(storeAuth);

const iconHeart = computed(() => {
  return isLiked.value ? "heart-fill" : "heart";
});
const text = computed(() => {
  return props.showText ? "Избранное" : "";
});

const clickHandler = () => {
  if (likeProcess.value) return;

  if (isAuth.value) likePhoto();
  else redirectAuth();
};
</script>

<template>
  <IconButton
    :text="text"
    title="Избранное"
    :icon="iconHeart"
    :class="['like-button', isLiked ? 'fill' : '']"
    :disabled="likeProcess"
    @click="clickHandler"
  />
</template>

<style lang="scss" scoped>
@import "../../../assets/styles/colors";

.like-button {
  &.fill {
    color: $primary;
  }
}
</style>
