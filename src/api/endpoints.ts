import { LIMIT_IMAGES } from "../common/constants/image";
import instance from "./instance";
import type { AxiosPromise } from "axios";
import type { IPhoto, IUser } from "./types";

export interface ApiInterface {
  getCurrentUser: () => AxiosPromise<IUser>;
  getRandom: (count?: number) => AxiosPromise<Array<IPhoto>>;
  searchPhoto: (query: string) => AxiosPromise<any>;
  getPhoto: (photoId: string) => AxiosPromise<any>;
  getLikedPhotos: (username: string) => AxiosPromise<any>;
  likePhoto: (id: string) => AxiosPromise;
  unlikePhoto: (id: string) => AxiosPromise;
}

const API: ApiInterface = {
  getCurrentUser() {
    return instance.get(`me`);
  },
  getRandom(count = LIMIT_IMAGES) {
    return instance.get("photos/random", { params: { count } });
  },
  searchPhoto(query) {
    return instance.get("search/photos", { params: { query } });
  },
  getPhoto(photoId) {
    return instance.get(`photos/${photoId}`);
  },
  getLikedPhotos(username) {
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
