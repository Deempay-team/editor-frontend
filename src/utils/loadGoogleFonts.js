/**
 * Loads an array of font names using Google Fonts via WebFontLoader.
 * @param {string[]} fontNames - Array of font names like ["Roboto", "Lato"]
 */
export const loadGoogleFonts = async (fontNames) => {
  // Only load on the client side
  if (typeof window !== 'undefined') {
    // Dynamically import WebFont
    const WebFont = (await import('webfontloader')).default;
    WebFont.load({
      google: {
        families: fontNames,
      },
    });
  }
};