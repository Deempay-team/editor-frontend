import React from 'react';
import { ChevronRight, Info } from 'lucide-react';
import { isColorDark } from '../../../../utils/isColorDark';
import { CustomColorPicker } from "@/component/color-picker/CustomColorPicker";
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

const ThemePreview = () => {
  const { theme } = useTheme();


  return (
    <div className="rounded-[8px] bg-white  px-4 py-4 w-full  space-y-4"
      style={{
        backgroundColor: theme.colors.background.hex,
        color: isColorDark(theme.colors.background.hex) ? "#fff" : "#000"
      }}
    >
      <div className='flex flex-row justify-between'>
        <h1
          className="text-2xl font-bold"
          style={{ color: theme.colors.primary.hex }}
        >
          Title
        </h1>
        <button
          className="w-[40%] py-2 rounded-[8px] h-[30spx] tesxt-[12px] font-normal"
          style={{
            backgroundColor: theme.colors.primary.hex,
            // color: isColorDark(theme.colors.primary.hex) ? "white" : "black"
            color: isColorDark(theme.colors.primary.hex) ? "#fff" : "#000"
          }}
        >
          Primary
        </button>

      </div>

      <div className='flex flex-row items-center justify-between'>
        <p className="text-sm" style={{ color: theme.colors.secondary.hex }}>
          Subtitle
        </p>

        <button
          className="w-[40%] py-2 rounded-[8px] h-s[30px] tesxt-[12px] font-normal"
          style={{
            backgroundColor: theme.colors.secondary.hex,
            color: isColorDark(theme.colors.secondary.hex) ? "#fff" : "#000"
          }}
        >
          Secondary
        </button>

      </div>

      <div className='flex flex-row items-center justify-between hidden'>
        <a
          href="#"
          className="underlinse text-sm block mt-2"
        // style={{ color: theme.linkColor }}
        >
          Link
        </a>

        <button
          className="w-[40%] py-2 rounded-md font-medium"
          style={{
            backgroundColor: theme.colors.primary.hex,
            color: theme.colors.primary.hex
          }}
        >
          Primary
        </button>

      </div>



      <div className=" text-gray-500 flex justify-between border-t pt-3 text-sm">
        <span style={{ color: theme.colors.secondary.hex }}>Body text</span>
        <span style={{ color: theme.colors.secondary.hex }}>
          Secondary text
        </span>
      </div>
    </div>
  );
};

function ColorDesignPanel() {
  const { theme, updateTheme } = useTheme();


  return (
    <>
      <div className="w-full">
        {/* Base Colors Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-[12px]">
            <h3 className="text-sm font-medium text-gray-700">Base colors</h3>
            <Info className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
          </div>

          <div className="space-y-2">
            <div className="flex space-x-3">
              <CustomColorPicker
                color={theme.colors.primary.hex}
                onChange={(newColor) =>
                  updateTheme({
                    colors: { primary: { hex: newColor } }
                  })
                }
              />
              <CustomColorPicker
                color={theme.colors.secondary.hex}
                onChange={(newColor) =>
                  updateTheme({
                    colors: { secondary: { hex: newColor } }
                  })
                }
              />
            </div>


          </div>
        </div>

        {/* Accent Colors Section */}
        <div className='mb-8'>
          <div className="flex items-center justify-between mb-[12px]">
            <h3 className="text-sm font-medium text-gray-700">Accent colors</h3>
            <Info className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <CustomColorPicker
              color={theme.colors.accent1.hex}
              onChange={(newColor) =>
                updateTheme({
                  colors: { accent1: { hex: newColor } }
                })
              }
            />

            <CustomColorPicker
              color={theme.colors.accent2.hex}
              onChange={(newColor) =>
                updateTheme({
                  colors: { accent2: { hex: newColor } }
                })
              }
            />

            <CustomColorPicker
              color={theme.colors.accent3.hex}
              onChange={(newColor) =>
                updateTheme({
                  colors: { accent3: { hex: newColor } }
                })
              }
            />

            <CustomColorPicker
              color={theme.colors.accent4.hex}
              onChange={(newColor) =>
                updateTheme({
                  colors: { accent4: { hex: newColor } }
                })
              }
            />
          </div>
        </div>

        {/* Background Colors Section */}
        <div className="mb-0">
          <div className="flex items-center justify-between mb-[12px]">
            <h3 className="text-sm font-medium text-gray-700">Background color</h3>
            <Info className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
          </div>

          <div className="space-y-2">
            <div className="flex">
              <CustomColorPicker
                color={theme.colors.background.hex}
                onChange={(newColor) =>
                  updateTheme({
                    colors: { background: { hex: newColor } }
                  })
                }
              />
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

function ColorThemePanel({ setActiveTab, setSelectedColorTheme }) {

  const handleToggle = (panel, themeName) => {
    setActiveTab(panel);
    setSelectedColorTheme(themeName);
  };


  return (
    <div className="text-gray-500 text-sm flex flex-col space-y-[18px]">

      <div className='mbs-[18px]'>
        <h1 className='mb-[8px] text-[16px] font-semibold text-gray-700 '>
          Customize color Theme
        </h1>
        <p>
          These Colors are used across your site.<br />
          Edit Color or Change your team
        </p>
      </div>

      <ThemePreview />

      <div className='text-center flex flex-col space-y-[10px]'>
        <ColorThemeBar />
        <button
          onClick={() => {
            handleToggle("Color palette", "Color theme")
          }}
          className='cursor-pointer text-blue-500 flex items-center justify-center '
        >
          Change color <ChevronRight className='ml-2 h-4 w-4' />
        </button>
      </div>

      <ColorDesignPanel />

      <div>

      </div>


    </div>
  );
}

export default ColorThemePanel;