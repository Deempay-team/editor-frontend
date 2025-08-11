import WebFont from 'webfontloader';

/**
 * Loads an array of font names using Google Fonts via WebFontLoader.
 * @param {string[]} fontNames - Array of font names like ["Roboto", "Lato"]
 */
export const loadGoogleFonts = (fontNames) => {
  WebFont.load({
    google: {
      families: fontNames,
    },
  });
};
