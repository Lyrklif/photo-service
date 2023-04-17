<script lang="ts" setup>
import IconButton from "../../ui/IconButton.vue";

defineProps({
  name: { type: String, required: true },
  username: { type: String, required: true },
  image: { type: String, required: true },
  imageLarge: { type: String, required: true },
});
</script>

<template>
  <div class="buttons">
    <IconButton class="button like" icon="heart" />
    <IconButton class="button download" icon="download" text="Downloand" />
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
