

import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

const defaultTheme = {
  id: "defaultTheme",
  name: "Default Theme",
  colors: {
    primary: { "r": 13, "g": 71, "b": 161, "a": 1, hex: "#0D47A1" },
    secondary: { "r": 255, "g": 191, "b": 0, "a": 1, hex: "#FFBF00" },
    accent1: { "r": 25, "g": 135, "b": 84, "a": 1, hex: "#198754" },
    accent2: { "r": 220, "g": 53, "b": 69, "a": 1, hex: "#DC3545" },
    accent3: { "r": 33, "g": 37, "b": 41, "a": 1, hex: "#212529" },
    accent4: { "r": 108, "g": 117, "b": 125, "a": 1, hex: "#6C757D" },
    background: { "r": 248, "g": 249, "b": 250, "a": 1, hex: "#F8F9FA" },
  },
  font: {
    heading: { name: "Space Grotesk", family: "'Space Grotesk', sans-serif" },
    paragraph: { name: "Open Sans", family: "'Open Sans', sans-serif" }
  }
};

const defaultFontPairs = [
  {
    label: "Space Grotesk + Open Sans",
    heading: { name: "Space Grotesk", family: "'Space Grotesk', sans-serif" },
    paragraph: { name: "Open Sans", family: "'Open Sans', sans-serif" },
  },
  {
    label: "Playfair Display + Roboto",
    heading: { name: "Playfair Display", family: "'Playfair Display', serif" },
    paragraph: { name: "Roboto", family: "'Roboto', sans-serif" },
  },
  {
    label: "Oswald + Inter",
    heading: { name: "Oswald", family: "'Oswald', sans-serif" },
    paragraph: { name: "Inter", family: "'Inter', sans-serif" },
  },
  {
    label: "Abril Fatface + Source Sans Pro",
    heading: { name: "Abril Fatface", family: "'Abril Fatface', cursive" },
    paragraph: { name: "Source Sans Pro", family: "'Source Sans Pro', sans-serif" },
  },
  {
    label: "DM Serif Display + Muli",
    heading: { name: "DM Serif Display", family: "'DM Serif Display', serif" },
    paragraph: { name: "Muli", family: "'Muli', sans-serif" },
  },
  {
    label: "Anton + Open Sans",
    heading: { name: "Anton", family: "'Anton', sans-serif" },
    paragraph: { name: "Open Sans", family: "'Open Sans', sans-serif" },
  },
];

const defaultColorPairs = [
  {
    name: "Vibrant Blue & Green",
    primary: { r: 66, g: 133, b: 244, a: 1, hex: "#4285F4" },
    secondary: { r: 0, g: 200, b: 83, a: 1, hex: "#00C853" },
    accent1: { r: 255, g: 87, b: 34, a: 1, hex: "#FF5722" },
    accent2: { r: 255, g: 235, b: 59, a: 1, hex: "#FFEB3B" },
    accent3: { r: 156, g: 39, b: 176, a: 1, hex: "#9C27B0" },
    accent4: { r: 33, g: 150, b: 243, a: 1, hex: "#2196F3" },
    background: { r: 250, g: 250, b: 250, a: 1, hex: "#FAFAFA" }
  },
  {
    name: "Warm Sunset",
    primary: { r: 244, g: 67, b: 54, a: 1, hex: "#F44336" },
    secondary: { r: 255, g: 152, b: 0, a: 1, hex: "#FF9800" },
    accent1: { r: 255, g: 235, b: 59, a: 1, hex: "#FFEB3B" },
    accent2: { r: 255, g: 193, b: 7, a: 1, hex: "#FFC107" },
    accent3: { r: 255, g: 87, b: 34, a: 1, hex: "#FF5722" },
    accent4: { r: 233, g: 30, b: 99, a: 1, hex: "#E91E63" },
    background: { r: 250, g: 250, b: 250, a: 1, hex: "#FAFAFA" }
  },
  {
    name: "Cool Ocean",
    primary: { r: 0, g: 121, b: 107, a: 1, hex: "#00796B" },
    secondary: { r: 3, g: 169, b: 244, a: 1, hex: "#03A9F4" },
    accent1: { r: 0, g: 188, b: 212, a: 1, hex: "#00BCD4" },
    accent2: { r: 100, g: 181, b: 246, a: 1, hex: "#64B5F6" },
    accent3: { r: 77, g: 182, b: 172, a: 1, hex: "#4DB6AC" },
    accent4: { r: 38, g: 166, b: 154, a: 1, hex: "#26A69A" },
    background: { r: 250, g: 250, b: 250, a: 1, hex: "#FAFAFA" }
  },
  {
    name: "Purple Dream",
    primary: { r: 103, g: 58, b: 183, a: 1, hex: "#673AB7" },
    secondary: { r: 156, g: 39, b: 176, a: 1, hex: "#9C27B0" },
    accent1: { r: 233, g: 30, b: 99, a: 1, hex: "#E91E63" },
    accent2: { r: 244, g: 143, b: 177, a: 1, hex: "#F48FB1" },
    accent3: { r: 206, g: 147, b: 216, a: 1, hex: "#CE93D8" },
    accent4: { r: 171, g: 71, b: 188, a: 1, hex: "#AB47BC" },
    background: { r: 250, g: 250, b: 250, a: 1, hex: "#FAFAFA" }
  },
  {
    name: "Earthy Tones",
    primary: { r: 121, g: 85, b: 72, a: 1, hex: "#795548" },
    secondary: { r: 76, g: 175, b: 80, a: 1, hex: "#4CAF50" },
    accent1: { r: 205, g: 220, b: 57, a: 1, hex: "#CDDC39" },
    accent2: { r: 255, g: 193, b: 7, a: 1, hex: "#FFC107" },
    accent3: { r: 255, g: 152, b: 0, a: 1, hex: "#FF9800" },
    accent4: { r: 121, g: 85, b: 72, a: 1, hex: "#795548" },
    background: { r: 250, g: 250, b: 250, a: 1, hex: "#FAFAFA" }
  },
  {
    name: "Fresh Mint",
    primary: { r: 76, g: 175, b: 80, a: 1, hex: "#4CAF50" },
    secondary: { r: 0, g: 150, b: 136, a: 1, hex: "#009688" },
    accent1: { r: 255, g: 202, b: 40, a: 1, hex: "#FFCA28" },
    accent2: { r: 255, g: 138, b: 101, a: 1, hex: "#FF8A65" },
    accent3: { r: 129, g: 199, b: 132, a: 1, hex: "#81C784" },
    accent4: { r: 38, g: 166, b: 154, a: 1, hex: "#26A69A" },
    background: { r: 236, g: 239, b: 241, a: 1, hex: "#ECEFF1" }
  },
  {
    name: "Royal Gold",
    primary: { r: 255, g: 193, b: 7, a: 1, hex: "#FFC107" },
    secondary: { r: 121, g: 85, b: 72, a: 1, hex: "#795548" },
    accent1: { r: 244, g: 67, b: 54, a: 1, hex: "#F44336" },
    accent2: { r: 156, g: 39, b: 176, a: 1, hex: "#9C27B0" },
    accent3: { r: 33, g: 150, b: 243, a: 1, hex: "#2196F3" },
    accent4: { r: 76, g: 175, b: 80, a: 1, hex: "#4CAF50" },
    background: { r: 255, g: 248, b: 225, a: 1, hex: "#FFF8E1" }
  },
  {
    name: "Berry Blast",
    primary: { r: 233, g: 30, b: 99, a: 1, hex: "#E91E63" },
    secondary: { r: 156, g: 39, b: 176, a: 1, hex: "#9C27B0" },
    accent1: { r: 255, g: 87, b: 34, a: 1, hex: "#FF5722" },
    accent2: { r: 255, g: 193, b: 7, a: 1, hex: "#FFC107" },
    accent3: { r: 244, g: 143, b: 177, a: 1, hex: "#F48FB1" },
    accent4: { r: 103, g: 58, b: 183, a: 1, hex: "#673AB7" },
    background: { r: 252, g: 228, b: 236, a: 1, hex: "#FCE4EC" }
  },
  {
    name: "Deep Forest",
    primary: { r: 27, g: 94, b: 32, a: 1, hex: "#1B5E20" },
    secondary: { r: 46, g: 125, b: 50, a: 1, hex: "#2E7D32" },
    accent1: { r: 102, g: 187, b: 106, a: 1, hex: "#66BB6A" },
    accent2: { r: 255, g: 241, b: 118, a: 1, hex: "#FFF176" },
    accent3: { r: 255, g: 183, b: 77, a: 1, hex: "#FFB74D" },
    accent4: { r: 56, g: 142, b: 60, a: 1, hex: "#388E3C" },
    background: { r: 232, g: 245, b: 233, a: 1, hex: "#E8F5E9" }
  },
  {
    name: "Neon Pop",
    primary: { r: 255, g: 61, b: 0, a: 1, hex: "#FF3D00" },
    secondary: { r: 0, g: 229, b: 255, a: 1, hex: "#00E5FF" },
    accent1: { r: 255, g: 234, b: 0, a: 1, hex: "#FFEA00" },
    accent2: { r: 213, g: 0, b: 249, a: 1, hex: "#D500F9" },
    accent3: { r: 118, g: 255, b: 3, a: 1, hex: "#76FF03" },
    accent4: { r: 255, g: 64, b: 129, a: 1, hex: "#FF4081" },
    background: { r: 19, g: 19, b: 19, a: 1, hex: "#131313" }
  },
  {
    name: "Autumn Harvest",
    primary: { r: 198, g: 40, b: 40, a: 1, hex: "#C62828" },
    secondary: { r: 255, g: 143, b: 0, a: 1, hex: "#FF8F00" },
    accent1: { r: 255, g: 202, b: 40, a: 1, hex: "#FFCA28" },
    accent2: { r: 255, g: 224, b: 178, a: 1, hex: "#FFE0B2" },
    accent3: { r: 239, g: 154, b: 154, a: 1, hex: "#EF9A9A" },
    accent4: { r: 230, g: 81, b: 0, a: 1, hex: "#E65100" },
    background: { r: 255, g: 248, b: 240, a: 1, hex: "#FFF8F0" }
  },
  {
    name: "Ice & Fire",
    primary: { r: 33, g: 150, b: 243, a: 1, hex: "#2196F3" },
    secondary: { r: 244, g: 67, b: 54, a: 1, hex: "#F44336" },
    accent1: { r: 255, g: 235, b: 59, a: 1, hex: "#FFEB3B" },
    accent2: { r: 0, g: 188, b: 212, a: 1, hex: "#00BCD4" },
    accent3: { r: 255, g: 138, b: 101, a: 1, hex: "#FF8A65" },
    accent4: { r: 255, g: 87, b: 34, a: 1, hex: "#FF5722" },
    background: { r: 240, g: 248, b: 255, a: 1, hex: "#F0F8FF" }
  }
];


const defaultFonts = [
  { name: "Instrument Serif", family: "'Instrument Serif', serif" },
  { name: "Space Grotesk", family: "'Space Grotesk', sans-serif" },
  { name: "Inter", family: "'Inter', sans-serif" },
  { name: "Roboto", family: "'Roboto', sans-serif" },
  { name: "Open Sans", family: "'Open Sans', sans-serif" },
  { name: "Lato", family: "'Lato', sans-serif" },
  { name: "Montserrat", family: "'Montserrat', sans-serif" },
  { name: "Poppins", family: "'Poppins', sans-serif" },
  { name: "Source Sans Pro", family: "'Source Sans Pro', sans-serif" },
  { name: "Playfair Display", family: "'Playfair Display', serif" },
  { name: "Oswald", family: "'Oswald', sans-serif" },
  { name: "Merriweather", family: "'Merriweather', serif" },
  { name: "Abril Fatface", family: "'Abril Fatface', cursive" },
  { name: "Bebas Neue", family: "'Bebas Neue', sans-serif" },
  { name: "DM Serif Display", family: "'DM Serif Display', serif" },
  { name: "Anton", family: "'Anton', sans-serif" },
  { name: "Rajdhani", family: "'Rajdhani', sans-serif" },
  { name: "Cormorant Garamond", family: "'Cormorant Garamond', serif" },
  { name: "Archivo Black", family: "'Archivo Black', sans-serif" },
  { name: "Nunito", family: "'Nunito', sans-serif" }
];

const initialThemes = [
  {
    id: "defaultTheme",
    name: "Default Theme",
    colors: {
      primary: { r: 13, g: 71, b: 161, a: 1, hex: "#0D47A1" },
      secondary: { r: 255, g: 191, b: 0, a: 1, hex: "#FFBF00" },
      accent1: { r: 25, g: 135, b: 84, a: 1, hex: "#198754" },
      accent2: { r: 220, g: 53, b: 69, a: 1, hex: "#DC3545" },
      accent3: { r: 33, g: 37, b: 41, a: 1, hex: "#212529" },
      accent4: { r: 108, g: 117, b: 125, a: 1, hex: "#6C757D" },
      background: { r: 248, g: 249, b: 250, a: 1, hex: "#F8F9FA" },
    },
    font: {
      heading: { name: "Space Grotesk", family: "'Space Grotesk', sans-serif" },
      paragraph: { name: "Open Sans", family: "'Open Sans', sans-serif" }
    }
  },
  {
    id: "sunsetTheme",
    name: "Sunset Glow",
    colors: {
      primary: { r: 255, g: 94, b: 77, a: 1, hex: "#FF5E4D" },
      secondary: { r: 255, g: 202, b: 58, a: 1, hex: "#FFCA3A" },
      accent1: { r: 0, g: 173, b: 181, a: 1, hex: "#00ADB5" },
      accent2: { r: 230, g: 57, b: 70, a: 1, hex: "#E63946" },
      accent3: { r: 38, g: 70, b: 83, a: 1, hex: "#264653" },
      accent4: { r: 233, g: 196, b: 106, a: 1, hex: "#E9C46A" },
      background: { r: 255, g: 244, b: 230, a: 1, hex: "#FFF4E6" },
    },
    font: {
      heading: { name: "Poppins", family: "'Poppins', sans-serif" },
      paragraph: { name: "Roboto", family: "'Roboto', sans-serif" }
    }
  },
  {
    id: "forestTheme",
    name: "Forest Breeze",
    colors: {
      primary: { r: 34, g: 139, b: 34, a: 1, hex: "#228B22" },
      secondary: { r: 60, g: 179, b: 113, a: 1, hex: "#3CB371" },
      accent1: { r: 46, g: 139, b: 87, a: 1, hex: "#2E8B57" },
      accent2: { r: 255, g: 140, b: 0, a: 1, hex: "#FF8C00" },
      accent3: { r: 85, g: 107, b: 47, a: 1, hex: "#556B2F" },
      accent4: { r: 189, g: 183, b: 107, a: 1, hex: "#BDB76B" },
      background: { r: 240, g: 255, b: 240, a: 1, hex: "#F0FFF0" },
    },
    font: {
      heading: { name: "Merriweather", family: "'Merriweather', serif" },
      paragraph: { name: "Lato", family: "'Lato', sans-serif" }
    }
  },
  {
    id: "oceanTheme",
    name: "Ocean Wave",
    colors: {
      primary: { r: 0, g: 123, b: 255, a: 1, hex: "#007BFF" },
      secondary: { r: 0, g: 200, b: 200, a: 1, hex: "#00C8C8" },
      accent1: { r: 72, g: 61, b: 139, a: 1, hex: "#483D8B" },
      accent2: { r: 255, g: 127, b: 80, a: 1, hex: "#FF7F50" },
      accent3: { r: 70, g: 130, b: 180, a: 1, hex: "#4682B4" },
      accent4: { r: 100, g: 149, b: 237, a: 1, hex: "#6495ED" },
      background: { r: 240, g: 248, b: 255, a: 1, hex: "#F0F8FF" },
    },
    font: {
      heading: { name: "Montserrat", family: "'Montserrat', sans-serif" },
      paragraph: { name: "Nunito", family: "'Nunito', sans-serif" }
    }
  }
];


// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) throw new Error("useTheme must be used within a ThemeProvider");
//   return context;
// };

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);
  const [fontPairs, setFontPairs] = useState(defaultFontPairs);
  const [colorPairs, setColorPairs] = useState(defaultColorPairs);
  const [themes, setThemes] = useState(initialThemes);
  const [fonts, setFonts] = useState(defaultFonts);

  const updateTheme = (partialTheme) => {
    setTheme((prev) => ({
      ...prev,
      ...partialTheme,
      colors: {
        ...prev.colors,
        ...(partialTheme.colors || {})
      }
    }));
  };

  // Convert hex to RGBA
  const hexToRgba = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        a: 1
      }
      : { r: 0, g: 0, b: 0, a: 1 };
  };

  // Convert RGBA to hex
  const rgbaToHex = ({ r, g, b }) => {
    const toHex = (c) => {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  const value = {
    theme,
    updateTheme,
    fontPairs,
    setFontPairs,
    colorPairs,
    setColorPairs,
    themes,
    setThemes,
    fonts,
    setFonts,
    hexToRgba,
    rgbaToHex
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};


export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    // Safe defaults if no provider wraps this component
    return {
      theme: defaultTheme,
      updateTheme: () => {},
      setTheme: () => {},
      fontPairs: defaultFontPairs,
      setFontPairs: () => {},
      colorPairs: defaultColorPairs,
      setColorPairs: () => {},
      themes: initialThemes,
      setThemes: () => {},
      fonts: defaultFonts,
      setFonts: () => {},
      hexToRgba: (hex) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
          ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
            a: 1
          }
          : { r: 0, g: 0, b: 0, a: 1 };
      },
      rgbaToHex: ({ r, g, b }) => {
        const toHex = (c) => {
          const hex = c.toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        };
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
      },
      isClient: false
    };
  }
  return context;
};