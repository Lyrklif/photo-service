import { LIMIT_IMAGES } from "../common/constants/image";
import instance from "./instance";
import type { AxiosPromise } from "axios";
import type { IPhoto } from "./types";

export interface ApiInterface {
  getRandom: (count?: number) => AxiosPromise<Array<IPhoto>>;
  searchPhoto: (query: string) => AxiosPromise<Array<IPhoto>>;
  getPhoto: (photoId: string) => AxiosPromise<IPhoto>;
  getLikedPhotos: (username?: string) => AxiosPromise<Array<IPhoto>>;
  likePhoto: (id: string) => AxiosPromise;
  unlikePhoto: (id: string) => AxiosPromise;
}

const API: ApiInterface = {
  getRandom(count = LIMIT_IMAGES) {
    return instance.get("photos/random", { params: { count } });
  },
  searchPhoto(query) {
    return instance.get("search/photos", { params: { query } });
  },
  getPhoto(photoId) {
    return instance.get(`photos/${photoId}`);
  },
  getLikedPhotos(username = import.meta.env.VITE_USER_NAME) {
    return instance.get(`users/${username}/likes`);
  },
  likePhoto(id) {
    return instance.post(`photos/${id}/like`);
  },
  unlikePhoto(id) {
    return instance.delete(`photos/${id}/like`);
  },
};

export default API;
