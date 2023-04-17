<script lang="ts" setup>
import AppHeader from "./components/layout/AppHeader/AppHeader.vue";
import { useAuthStore } from "./stores/auth";

const store = useAuthStore();
store.startAuth();
</script>

<template>
  <AppHeader />
  <router-view />
</template>
