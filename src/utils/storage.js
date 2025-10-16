// utils/storage.ts
import lz from "lzutf8";

export const compress = (json) => {
  return lz.encodeBase64(lz.compress(json));
};

export const decompress = (compressed) => {
  return compressed ? lz.decompress(lz.decodeBase64(compressed)) : null;
};

export const getFromLocalStorage = (key, defaultValue = null) => {
  if (typeof window === "undefined") return defaultValue;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (err) {
    console.error("Failed to parse localStorage", err);
    return defaultValue;
  }
};

export const getFromLocalStorageCurrentPage = (key, defaultValue = null) => {
  if (typeof window === "undefined") return defaultValue;
  try {
    const item = localStorage.getItem(key);
    return item ? item : defaultValue;
  } catch (err) {
    console.error("Failed to parse localStorage", err);
    return defaultValue;
  }
};

export const setToLocalStorage = (key, value) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error("Failed to set localStorage", err);
  }
};
