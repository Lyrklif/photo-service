<script lang="ts" setup>
import IconButton from "./IconButton.vue";
import { ref } from "vue";
import { debounce } from "lodash";

const SCROLL_LIMIT = 100;
const DEBOUNCE = 200;

const visible = ref<boolean>(false);

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const handleScroll = () => {
  visible.value = window.scrollY > SCROLL_LIMIT;
};

const handleScrollOptimised = debounce(() => handleScroll(), DEBOUNCE);

window.addEventListener("scroll", handleScrollOptimised);
</script>

<template>
  <div class="scroll" v-show="visible">
    <IconButton
      icon="arrow"
      class="icon-button"
      @click="scrollTop"
      title="Go to top"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/styles/colors";
@import "../../assets/styles/decarations";
@import "../../assets/styles/shadow";

.scroll {
  background-color: $white;
  border-radius: $border-radius;
  filter: drop-shadow($box-shadow-light);

  position: fixed;
  bottom: 3.6vw;
  right: 5.8vw;
}
</style>

<style scoped>
.icon-button >>> svg {
  width: 17px;
  height: 17px;
}

.icon-button >>> .icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
