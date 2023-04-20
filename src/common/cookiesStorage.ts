import Cookies from "js-cookie";

const cookiesStorage: Storage = {
  length: Object.keys(Cookies.get()).length,
  setItem(key: string, value: string): void {
    Cookies.set(key, value, { expires: 3 });
  },
  getItem(key): string | null {
    return Cookies.get(key) || null;
  },
  removeItem(key: string): void {
    Cookies.remove(key);
  },
  clear(): void {
    Object.keys(Cookies.get()).forEach(function (cookieName) {
      Cookies.remove(cookieName);
    });
  },
  key(index: number): string | null {
    return Object.keys(Cookies.get())[index] || null;
  },
};

export default cookiesStorage;
