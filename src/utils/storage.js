// utils/storage.js (or inline if you prefer)
// export const getFromLocalStorage = (key, defaultValue = null) => {
//   if (typeof window === "undefined") return defaultValue;
//   try {
//     const item = localStorage.getItem(key);
//     return item ? JSON.parse(item) : defaultValue;
//   } catch (err) {
//     console.error("Error reading localStorage", err);
//     return defaultValue;
//   }
// };

// export const setToLocalStorage = (key, value) => {
//   if (typeof window === "undefined") return;
//   try {
//     localStorage.setItem(key, JSON.stringify(value));
//   } catch (err) {
//     console.error("Error writing localStorage", err);
//   }
// };
