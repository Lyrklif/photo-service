<script lang="ts" setup>
import { ref } from "vue";
import AppInput from "../atoms/AppInput.vue";
import IconButton from "./IconButton.vue";

const search = ref("");
const emits = defineEmits(["submit"]);

const setValue = (value: string) => {
  search.value = value;
};

const submitHandler = () => {
  emits("submit", search.value.trim());
};
</script>

<template>
  <form class="form" @submit.prevent="submitHandler">
    <AppInput @input="setValue">
      <template #before>
        <span class="visually-hidden">Image Search</span>
      </template>
    </AppInput>
    <IconButton icon="search" class="submit" type="submit" title="Search" />
  </form>
</template>

<style lang="scss" scoped>
@import "../../assets/styles/colors";
@import "../../assets/styles/breakpoints";

.form {
  display: flex;
  align-items: center;
}

.submit {
  background-color: $white;
  height: 70px;
  width: 90px;
  color: $dark;

  @include lg-up {
    width: 110px;
  }
}
</style>
