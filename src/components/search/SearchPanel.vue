<script lang="ts" setup>
//
</script>

<template>
  <div class="search-panel">
    <div class="container">Search</div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/styles/colors";
@import "../../assets/styles/breakpoints";

.search-panel {
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: $dark-background;

  @include md-up() {
    padding-top: 92px;
    padding-bottom: 92px;
    border-bottom: 16px solid $grey;
  }
}
</style>
