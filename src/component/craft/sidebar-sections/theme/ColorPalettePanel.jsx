import React from 'react';
import { useTheme } from "../../../../Context/ThemeContext";



const ColorThemeBar = () => {
  const { theme } = useTheme();

  const arrangeColors = (colors) => {
    return [
      colors.primary.hex,
      colors.secondary.hex,
      colors.accent1.hex,
      colors.accent2.hex,
      colors.accent3.hex,
      colors.accent4.hex,
      colors.background.hex
    ];
  };

  const colorArray = arrangeColors(theme.colors);

  return (
    <div
      className="flex items-center rounded-md  hover:border-blue-500  border-2 border-gray-300 pd-1 relative overflow-hidden w-full cursor-pointer"
    >
      {colorArray.map((color, idx) => (
        <div
          key={idx}
          className="h-8 flex-1"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
};

const ColorPalette = ({ color }) => {
  const { theme, updateTheme } = useTheme();
  console.log("theme", theme)

  const arrangeColors = (color) => {
    return [
      color.primary.hex,
      color.secondary.hex,
      color.accent1.hex,
      color.accent2.hex,
      color.accent3.hex,
      color.accent4.hex,
      color.background.hex
    ];
  };

  const colorArray = arrangeColors(color);

  const handleClick = () => {
    updateTheme({
      colors: {
        primary: { hex: color.primary.hex, },
        secondary: { hex: color.secondary.hex, },
        accent1: { hex: color.accent1.hex, },
        accent2: { hex: color.accent2.hex, },
        accent3: { hex: color.accent3.hex, },
        accent4: { hex: color.accent4.hex, },
        background: { hex: color.background.hex, },
      }
    })
  };


  return (
    <div
      onClick={handleClick}
      className="flex items-center rounded-md  hover:border-blue-500  border-2 border-gray-300 pd-1 relative overflow-hidden w-full cursor-pointer"
    >
      {colorArray.map((color, idx) => (
        <div
          key={idx}
          className="h-8 flex-1"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
};


function ColorPalettePanel() {
  const { colorPairs } = useTheme();

  return (
    <div className="text-gray-500 text-sm flex flex-col space-y-[18px]">

      <div className=''>
        <p className='text-sm font-medium text-gray-700 mb-[8px]'>Current color theme</p>
        <ColorThemeBar />
      </div>

      <div className=''>
        <p className='text-sm font-medium text-gray-700 mb-[8px]'>Featured themes</p>
        <div className='flex flex-col space-y-2'>
          {colorPairs.map((color, idx) => (
            <ColorPalette key={idx} color={color} />
          ))}
        </div>

      </div>


    </div>
  );
}

export default ColorPalettePanel;