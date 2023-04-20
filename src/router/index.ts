import { createRouter, createWebHashHistory } from "vue-router";
import { PAGE_NAMES } from "../common/constants/router";

import MainPage from "../views/MainPage.vue";
const PhotoPage = () => import("../views/PhotoPage.vue");
const FavoritesPage = () => import("../views/FavoritesPage.vue");

const routes = [
  { path: "/", name: PAGE_NAMES.main, component: MainPage },
  { path: "/photo/:id", name: PAGE_NAMES.photo, component: PhotoPage },
  { path: "/favorites", name: PAGE_NAMES.favorites, component: FavoritesPage },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
