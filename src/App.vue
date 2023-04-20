<script lang="ts" setup>
import { useAuthStore } from "./stores/auth";

const store = useAuthStore();
store.startAuth();
</script>

<template>
  <router-view />
</template>
