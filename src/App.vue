<script lang="ts" setup>
import { useAuthStore } from "./stores/auth";

const store = useAuthStore();
const { detectAuthCode } = store;

detectAuthCode();
</script>

<template>
  <router-view />
</template>
