import { defineStore } from "pinia";
import { API } from "../api";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      username: "",
    };
  },
  actions: {
    async loadCurrentUser(): Promise<void> {
      try {
        const res = await API.getCurrentUser();
        this.username = res.data.username;
      } catch (e: any) {
        console.error(e.response);
      }
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
        paths: ["username"],
      },
    ],
  },
});
