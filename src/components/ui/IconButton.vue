<script lang="ts" setup>
import AppButton from "./AppButton.vue";
import AppIcon from "./AppIcon.vue";

defineProps({
  icon: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <AppButton>
    <AppIcon :name="icon" class="icon" />
    <span v-if="text" class="text">{{ text }}</span>
  </AppButton>
</template>

<style lang="scss" scoped>
@import "../../assets/styles/grid-system";

.text {
  display: none;

  @include md-up {
    display: block;
    margin-left: 10px;
  }
}

.icon {
  width: 23px;
  height: 21px;
  flex-shrink: 0;
}
</style>
