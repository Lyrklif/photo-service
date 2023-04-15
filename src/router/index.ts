import { createRouter, createWebHashHistory } from "vue-router";

import MainPage from "../views/MainPage.vue";
const PhotoPage = () => import("../views/PhotoPage.vue");
const FavoritesPage = () => import("../views/FavoritesPage.vue");

const routes = [
  { path: "/", name: "main", component: MainPage },
  { path: "/photo/:id", name: "photo", component: PhotoPage },
  { path: "/favorites", name: "favorites", component: FavoritesPage },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
