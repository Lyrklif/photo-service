import { defineStore } from "pinia";
import { ref, Ref } from "vue";
import { fetchToken, getAuthCodeUrl } from "../api/auth";
import instance from "../api/instance";

export interface StoreInterface {
  token: Ref<string>;
  startAuth: () => void;
  redirectAuthCode: () => void;
  setToken: (code: string) => Promise<void>;
}

export const useAuthStore = defineStore("auth", (): StoreInterface => {
  const token = ref<string>("");

  const redirectAuthCode = (): void => {
    const link = getAuthCodeUrl();
    window.location.href = link;
  };

  const setToken = async (code: string): Promise<void> => {
    try {
      const res = await fetchToken(code);
      token.value = res.access_token;
      instance.defaults.headers.common.Authorization = `${res.token_type} ${res.access_token}`;
    } catch (e: any) {
      console.error(e.response);
    }
  };

  const startAuth = () => {
    if (token.value) return;

    const params = new Proxy(new URLSearchParams(window.location.search), {
      // @ts-ignore
      get: (searchParams, prop) => searchParams.get(prop),
    });
    // @ts-ignore
    const code = params.code;

    if (code) setToken(code);
    else redirectAuthCode();
  };

  return {
    token,
    redirectAuthCode,
    setToken,
    startAuth,
  };
});
