<script lang="ts" setup>
import AppPicture from "../ui/AppPicture.vue";

defineProps({
  name: { type: String, required: true },
  username: { type: String, required: true },
  image: { type: String, required: true },
  imageLarge: { type: String, required: true },
});
</script>

<template>
  <div class="author">
    <AppPicture
      :alt="name"
      :src="image"
      :srcset="`${imageLarge} 2x`"
      class="author__img"
    />
    <div class="author__text">
      <p class="author__name">{{ name }}</p>
      <p class="author__username">@{{ username }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/styles/breakpoints";
@import "../../assets/styles/colors";
@import "../../assets/styles/decarations";

.author {
  display: flex;
  align-items: center;

  &__img {
    height: 48px;
    width: 48px;
    border-radius: $border-radius;
    overflow: hidden;
    border: 1px solid $white;
    margin-right: 10px;

    @include md-up {
      height: 55px;
      width: 55px;
    }
  }

  &__name,
  &__username {
    margin-top: 0;
    margin-bottom: 0;
  }

  &__name {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;

    @include md-up {
      color: $light-grey;
    }
  }

  &__username {
    font-size: 14px;
    line-height: 16px;
    color: $grey;

    @include md-up {
      color: $light-grey;
    }
  }
}
</style>
