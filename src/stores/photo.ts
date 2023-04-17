import { defineStore } from "pinia";
import { ref, Ref } from "vue";
import API from "../api/endpoints";
import type { IPhoto } from "../api/types";

export interface StoreInterface {
  loading: Ref<boolean>;
  isLiked: Ref<boolean>;
  likeProcess: Ref<boolean>;
  photo: Ref<IPhoto | undefined>;
  loadPhotoData: (id: string) => void;
  likePhoto: () => void;
}

export const usePhotoStore = defineStore("photo", (): StoreInterface => {
  const photo = ref<IPhoto>();
  const loading = ref<boolean>(false);
  const isLiked = ref<boolean>(false);
  const likeProcess = ref<boolean>(false);

  const loadPhotoData = async (id: string): Promise<void> => {
    try {
      loading.value = true;
      const res = await API.getPhoto(id);
      photo.value = res.data;
    } catch (e: any) {
      console.error(e.response);
    } finally {
      loading.value = false;
    }
  };

  const likePhoto = async (): Promise<void> => {
    if (!photo.value || loading.value) return;

    try {
      likeProcess.value = true;

      const method = isLiked.value ? API.unlikePhoto : API.likePhoto;
      await method(photo.value.id);
      isLiked.value = !isLiked.value;
    } catch (e: any) {
      console.error(e.response);
    } finally {
      likeProcess.value = false;
    }
  };

  return {
    photo,
    isLiked,
    loading,
    likeProcess,
    loadPhotoData,
    likePhoto,
  };
});
