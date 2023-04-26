const getUrlParam = (key: string): string | null => {
  const urlParams: URLSearchParams = new URLSearchParams(
    window.location.search
  );
  return urlParams.get(key);
};

const getURLWithoutParam = (key: string): string => {
  const urlObj = new URL(window.location.href);
  urlObj.searchParams.delete(key);
  return urlObj.toString();
};

export { getUrlParam, getURLWithoutParam };
