import { defineStore } from "pinia";
import { ref, Ref } from "vue";

export interface StoreInterface {
  loading: Ref<boolean>;
  error: Ref<boolean | string>;
  setLoading: (value: boolean) => void;
  setError: (value: boolean | string) => void;
  reset: () => void;
}

export const useProcessStore = defineStore("process", (): StoreInterface => {
  const loading = ref<boolean>(false);
  const error = ref<boolean | string>(false);

  const setLoading = (value: boolean): void => {
    loading.value = value;
  };
  const setError = (value: boolean | string): void => {
    error.value = value;
  };
  const reset = (): void => {
    loading.value = false;
    error.value = false;
  };

  return {
    loading,
    error,
    setLoading,
    setError,
    reset,
  };
});
