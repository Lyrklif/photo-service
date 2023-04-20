import axios from "axios";
import type { AxiosInstance } from "axios";
import { useAuthStore } from "../stores/auth";

const instance: AxiosInstance = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    // token for public api
    Authorization: `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`,
  },
  transformRequest: [
    function (data, headers) {
      const store = useAuthStore();

      if (store.accessToken) {
        headers.Authorization = `Bearer ${store.accessToken}`;
      }

      return data;
    },
  ],
});

export default instance;
