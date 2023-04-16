import { LIMIT_IMAGES } from "../constants/image";
import instance from "./instance";
import type { AxiosPromise } from "axios";
// import type { Response } from "./types";

export interface ApiInterface {
  getRandom: (count?: number) => AxiosPromise<any>;
  searchPhoto: (query: string) => AxiosPromise<any>;
  getPhoto: (photoId: string) => AxiosPromise<any>;
  getLikedPhotos: (username?: string) => AxiosPromise<any>;
  likePhoto: (id: string) => AxiosPromise;
  unlikePhoto: (id: string) => AxiosPromise;
  getPhotoDownloadLink: (id: string) => AxiosPromise<any>;
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
  getPhotoDownloadLink(id) {
    return instance.get(`photos/${id}/download`);
  },
};

export default API;
