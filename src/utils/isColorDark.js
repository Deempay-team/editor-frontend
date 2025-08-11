// utils/isColorDark.js


/**
 * Determines if a given hex color is considered dark based on its luminance.
 *
 * @param {string} hex - The hex color string (e.g., "#RRGGBB" or "RRGGBB").
 * @returns {boolean} Returns true if the color is dark, false otherwise.
 */
export const isColorDark = (hex) => {
  const cleanedHex = hex.replace('#', '');

  const r = parseInt(cleanedHex.slice(0, 2), 16);
  const g = parseInt(cleanedHex.slice(2, 4), 16);
  const b = parseInt(cleanedHex.slice(4, 6), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance < 0.5; // true if dark
};

