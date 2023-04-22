import { defineStore } from "pinia";
import { ref, Ref } from "vue";
import { API } from "../api";
import type { IPhoto } from "../api";

export interface StoreInterface {
  list: Ref<Array<IPhoto>>;
  loadRandomPhotos: () => void;
  searchByName: (name: string) => void;
}

export const usePhotosStore = defineStore("photos", (): StoreInterface => {
  const list = ref<Array<IPhoto>>([]);

  const loadRandomPhotos = async (): Promise<void> => {
    try {
      const res = await API.getRandom();
      list.value = res.data;
    } catch (e: any) {
      console.error(e.response);
    }
  };
  const searchByName = async (name: string): Promise<void> => {
    try {
      const res = await API.searchPhoto(name);
      list.value = res.data.results;
    } catch (e: any) {
      console.error(e.response);
    }
  };

  return {
    loadRandomPhotos,
    searchByName,
    list,
  };
});
