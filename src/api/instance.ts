import axios from "axios";
import type { AxiosInstance } from "axios";
import { useAuthStore } from "../stores/auth";
import { INVALID_ACCESS_TOKEN } from "../common/constants/errors";
import { useProcessStore } from "../stores/process";
import { useUserStore } from "../stores/user";

const DEFAULT_AUTH_HEADER = `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`;

const instance: AxiosInstance = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    // token for public api
    Authorization: DEFAULT_AUTH_HEADER,
  },
});

instance.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore();
    const processStore = useProcessStore();

    if (authStore.accessToken) {
      config.headers.Authorization = `Bearer ${authStore.accessToken}`;
    }
    processStore.setLoading(true);
    processStore.setError(false);
    return config;
  },
  (error) => {
    const processStore = useProcessStore();
    processStore.setLoading(false);
    processStore.setError(error.response.data);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    const processStore = useProcessStore();
    processStore.setLoading(false);
    processStore.setError(false);
    return response;
  },
  async function (error) {
    const processStore = useProcessStore();
    const userStore = useUserStore();
    const authStore = useAuthStore();
    processStore.setLoading(false);
    processStore.setError(error.response.data);

    if (error.response.status === INVALID_ACCESS_TOKEN) {
      userStore.username = "";
      authStore.accessToken = "";
      instance.defaults.headers.post["Authorization"] = DEFAULT_AUTH_HEADER;
    }
    return Promise.reject(error);
  }
);

export default instance;
