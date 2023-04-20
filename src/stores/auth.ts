import { defineStore } from "pinia";
import { fetchToken, getAuthCodeUrl } from "../api";
import { getUrlParam } from "../common/url";
import cookiesStorage from "../common/cookiesStorage";

export interface StateInterface {
  accessToken: string;
  refreshToken: string;
}

export const useAuthStore = defineStore("auth", {
  state: (): StateInterface => {
    return {
      accessToken: "",
      refreshToken: "",
    };
  },
  actions: {
    redirectAuth(): void {
      window.location.href = getAuthCodeUrl();
    },
    async setToken(code: string): Promise<void> {
      try {
        const res = await fetchToken(code);
        this.accessToken = res.access_token;
        this.refreshToken = res.refresh_token;
      } catch (e: any) {
        console.error(e.response);
      }
    },
    startAuth(): void {
      if (this.accessToken) return;

      const code = getUrlParam("code");

      if (code) this.setToken(code);
      else this.redirectAuth();
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: cookiesStorage,
        paths: ["accessToken", "refreshToken"],
      },
    ],
  },
});
