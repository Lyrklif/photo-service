import axios from "axios";
import type { AxiosInstance } from "axios";
import { useAuthStore } from "../stores/auth";

const instance: AxiosInstance = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`,
  },
  transformRequest: [
    function (data, headers) {
      const store = useAuthStore();
      if (store.token) headers.Authorization = `Bearer ${store.token}`;
      return data;
    },
  ],
});

export default instance;
