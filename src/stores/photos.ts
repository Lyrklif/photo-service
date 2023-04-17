import { defineStore } from "pinia";
import { ref, Ref } from "vue";
import API from "../api/endpoints";
import type { IPhoto } from "../api/types";

export interface StoreInterface {
  loading: Ref<boolean>;
  list: Ref<Array<IPhoto>>;
  loadRandomPhotos: () => void;
  searchByName: (name: string) => void;
}

export const usePhotosStore = defineStore("photos", (): StoreInterface => {
  const list = ref<Array<IPhoto>>([]);
  const loading = ref<boolean>(false);

  const loadRandomPhotos = async (): Promise<void> => {
    try {
      loading.value = true;
      const res = await API.getRandom();
      list.value = res.data;
    } catch (e: any) {
      console.error(e.response);
    } finally {
      loading.value = false;
    }
  };
  const searchByName = async (name: string): Promise<void> => {
    try {
      loading.value = true;
      const res = await API.searchPhoto(name);
      list.value = res.data.results;
    } catch (e: any) {
      console.error(e.response);
    } finally {
      loading.value = false;
    }
  };

  return {
    loadRandomPhotos,
    searchByName,
    loading,
    list,
  };
});
