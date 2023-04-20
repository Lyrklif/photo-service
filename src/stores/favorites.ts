import { defineStore } from "pinia";
import { ref, Ref } from "vue";
import { API } from "../api";
import type { IPhoto } from "../api";

export interface StoreInterface {
  loading: Ref<boolean>;
  list: Ref<Array<IPhoto>>;
  loadFavorites: () => void;
}

export const useFavoritesStore = defineStore(
  "favorites",
  (): StoreInterface => {
    const list = ref<Array<IPhoto>>([]);
    const loading = ref<boolean>(false);

    const loadFavorites = async (): Promise<void> => {
      try {
        loading.value = true;
        const res = await API.getLikedPhotos();
        list.value = res.data;
      } catch (e: any) {
        console.error(e.response);
      } finally {
        loading.value = false;
      }
    };

    return {
      loadFavorites,
      loading,
      list,
    };
  }
);
