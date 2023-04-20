import axios from "axios";
import type { AxiosInstance } from "axios";
import { useAuthStore } from "../stores/auth";
import { getAuthCodeUrl } from "./auth";
import { INVALID_ACCESS_TOKEN } from "../common/constants/errors";

const instance: AxiosInstance = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    // token for public api
    Authorization: `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`,
  },
});

instance.interceptors.request.use((config) => {
  const store = useAuthStore();
  if (store.accessToken) {
    config.headers.Authorization = `Bearer ${store.accessToken}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    if (error.response.status === INVALID_ACCESS_TOKEN) {
      // Set a new Access Token
      window.location.href = getAuthCodeUrl();
    }
    return Promise.reject(error);
  }
);

export default instance;
