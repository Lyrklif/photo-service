<script setup lang="ts">
import type { PropType } from "vue";
import { ref } from "vue";

const emit = defineEmits(["input"]);

const props = defineProps({
  startValue: {
    type: [String, Number] as PropType<string | number>,
    default: null,
  },
  type: {
    type: String,
    default: "text",
  },
});

const model = ref<string | number>(props.startValue);

const changeHandler = () => {
  emit("input", model.value);
};
</script>

<template>
  <label class="input">
    <input
      v-model="model"
      @input="changeHandler"
      class="input__field"
      :type="type"
    />
  </label>
</template>

<style scoped lang="scss">
@import "../../assets/styles/colors";
@import "../../assets/styles/breakpoints";

.input {
  width: 100%;
  max-width: 100%;
  display: inline-block;
  position: relative;

  &__field {
    height: 70px;
    font-weight: 300;
    font-size: 24px;
    width: 100%;
    max-width: 100%;
    background-color: $white;
    padding-left: 25px;
    padding-right: 25px;
    border: none;

    @include md-up() {
      padding-left: 40px;
      padding-right: 40px;
    }
  }
}
</style>
