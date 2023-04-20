const getUrlParam = (key: string): string | null => {
  const urlParams: URLSearchParams = new URLSearchParams(
    window.location.search
  );
  return urlParams.get(key);
};

export { getUrlParam };
