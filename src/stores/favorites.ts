import { defineStore } from "pinia";
import { ref, Ref } from "vue";
import { API } from "../api";
import type { IPhoto } from "../api";

export interface StoreInterface {
  list: Ref<Array<IPhoto>>;
  loadFavorites: (userName: string) => void;
}

export const useFavoritesStore = defineStore(
  "favorites",
  (): StoreInterface => {
    const list = ref<Array<IPhoto>>([]);

    const loadFavorites = async (userName: string): Promise<void> => {
      try {
        const res = await API.getLikedPhotos(userName);
        list.value = res.data;
      } catch (e: any) {
        console.error(e.response);
      }
    };

    return {
      loadFavorites,
      list,
    };
  }
);
