import axios from "axios";
import type { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "https://api.unsplash.com/",
  params: {
    client_id: import.meta.env.VITE_ACCESS_KEY,
  },
});

export default instance;
