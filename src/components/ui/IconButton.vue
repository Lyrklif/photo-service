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

const emits = defineEmits(["click"]);

const clickHandler = () => {
  emits("click");
};
</script>

<template>
  <AppButton class="icon-btn" @click="clickHandler">
    <span class="icon">
      <AppIcon :name="icon" />
    </span>
    <span v-if="text" class="text">{{ text }}</span>
  </AppButton>
</template>

<style lang="scss" scoped>
@import "../../assets/styles/breakpoints";

.icon-btn {
  min-height: 45px;
  min-width: 45px;
  padding: 10px;
}

.text {
  display: none;

  @include md-up {
    display: block;
    margin-left: 10px;
  }
}

.icon {
  width: 25px;
  height: 25px;
  max-height: 100%;
  max-width: 100%;
  flex-shrink: 0;
  display: block;
}
</style>
