import { defineStore } from "pinia";
import { ref, Ref } from "vue";
import { API } from "../api";
import type { IPhoto } from "../api";

export interface StoreInterface {
  isLiked: Ref<boolean>;
  likeProcess: Ref<boolean>;
  photo: Ref<IPhoto | null>;
  loadPhotoData: (id: string) => void;
  likePhoto: () => void;
}

export const usePhotoStore = defineStore("photo", (): StoreInterface => {
  const photo = ref<IPhoto | null>(null);
  const isLiked = ref<boolean>(false);
  const likeProcess = ref<boolean>(false);

  const loadPhotoData = async (id: string): Promise<void> => {
    try {
      isLiked.value = false;
      photo.value = null;

      const res = await API.getPhoto(id);
      photo.value = res.data;
      isLiked.value = res.data.liked_by_user;
    } catch (e: any) {
      console.error(e.response);
    }
  };

  const likePhoto = async (): Promise<void> => {
    if (!photo.value) return;

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
    likeProcess,
    loadPhotoData,
    likePhoto,
  };
});
