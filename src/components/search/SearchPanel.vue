<script lang="ts" setup>
import SearchBackground from "./SearchBackground.vue";
import SearchForm from "./SearchForm.vue";
</script>

<template>
  <div class="search-panel">
    <div class="container">
      <SearchForm class="form" />
    </div>
    <SearchBackground />
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/styles/colors";
@import "../../assets/styles/breakpoints";

.search-panel {
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: $dark-background;
  position: relative;

  @include md-up() {
    padding-top: 92px;
    padding-bottom: 92px;
    border-bottom: 16px solid $grey;
  }
}

.form {
  @include md-up() {
    max-width: 866px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
