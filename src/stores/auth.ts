import { defineStore } from "pinia";
import { fetchToken, getAuthCodeUrl } from "../api";
import { getUrlParam, getURLWithoutParam } from "../common/url";
import cookiesStorage from "../common/cookiesStorage";
import { useUserStore } from "./user";

const URL_AUTH_PARAM = "code";

export interface StateInterface {
  accessToken: string;
}

export const useAuthStore = defineStore("auth", {
  state: (): StateInterface => {
    return {
      accessToken: "",
    };
  },
  getters: {
    isAuth: (state) => !!state.accessToken,
  },
  actions: {
    redirectAuth(): void {
      window.location.href = getAuthCodeUrl();
    },
    async setToken(code: string): Promise<void> {
      const userStore = useUserStore();
      const { loadCurrentUser } = userStore;

      try {
        const res = await fetchToken(code);
        this.accessToken = res.access_token;
        await loadCurrentUser();
      } catch (e: any) {
        console.error(e.response);
      }
    },
    async detectAuthCode(): Promise<void> {
      const code = getUrlParam(URL_AUTH_PARAM);
      if (!code) return;

      try {
        if (!this.accessToken) await this.setToken(code);
        window.location.href = getURLWithoutParam(URL_AUTH_PARAM);
      } catch (e: any) {
        console.error(e.response);
      }
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: cookiesStorage,
        paths: ["accessToken"],
      },
    ],
  },
});
