import React from "react";
import { useTheme } from "../../../../Context/ThemeContext";


const SiteTheme = ({ data, onClick, theme }) => {
  // Destructure the data for easier access
  const { headerText, paragraphText, headerFont, paragraphFont, accentColors, backgroundColor, PrimaryColor, SecondaryColor } = data;
  const { updateTheme } = useTheme();

  const handleClick = () => {
    updateTheme(theme)
  };
  

  return (
    <button
      onClick={handleClick}
      className=" px-[12px] py-[16px] rounded-[8px] shafdow-md flex items-center justify-between max-w-md cursor-pointer transition-all duration-200 ease-in-out focus:outline-noned border-2 border-gray-200 focus:shadow-[inset_0_0_0_2px_#3b82f6] "
      style={{ backgroundColor: backgroundColor }}
    >
      {/* Text Content Section */}
      <div className="bg-red-w500 text-left">
        <h2
          className="text-[18px] text-gray-800 font-semibold"
          style={{ color: PrimaryColor }}
        >
          {headerText}
        </h2>
        <p
          className="text-[12px] text-gray-600 mt-1"
          style={{ color: SecondaryColor }}
        >
          {paragraphText}
        </p>
      </div>

      {/* Color Swatches Section */}
      <div className="flex pl-2 space-x-1">
        {accentColors.map((color, index) => (
          <div
            key={index}
            className="w-7 h-7 rounded-sm"
            style={{ backgroundColor: color }}
            title={color} // Shows the hex code on hover
          ></div>
        ))}
      </div>

    </button>
  );
};

const SiteThemePanel = () => {
  const { theme, themes, updateTheme } = useTheme();

  const defaultValue = {
    font: "'Inter', sans-serif",
    background: '#FFFFFF',
    primary: '#000000',
    secondary: '#6c757d',
    accent: '#e9ecef'
  };

  const themeData = {
    headerText: "Site Theme",
    paragraphText: "This theme is used across your site.",
    headerFont: 'Georgia, serif',
    paragraphFont: defaultValue.font,
    backgroundColor: theme?.colors?.background?.hex ?? defaultValue.background,
    PrimaryColor: theme?.colors?.primary?.hex ?? defaultValue.primary,
    SecondaryColor: theme?.colors?.secondary?.hex ?? defaultValue.secondary,
    accentColors: [
      theme?.colors?.accent1?.hex ?? defaultValue.accent,
      theme?.colors?.accent2?.hex ?? defaultValue.accent,
      theme?.colors?.accent3?.hex ?? defaultValue.accent,
      theme?.colors?.accent4?.hex ?? defaultValue.accent,
    ]
  };

  return (
    <div className="text-gray-500 text-sm pst-10 flex flex-col space-y-4">
      <div>
        <p className="text-sm font-medium text-gray-700 mb-2"> Current Theme</p>
        <SiteTheme data={themeData} theme={theme} />
      </div>
      {themes && (
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2"> Featured Theme</p>
          <div className="space-y-1">
            {themes.map((themeData) => (
              <SiteTheme
                key={themeData.id}
                data={{
                  headerText: "Site Theme",
                  paragraphText: "This theme is used across your site.",
                  headerFont: 'Georgia, serif',
                  paragraphFont: defaultValue.font,

                  // Safely access nested color properties with fallbacks
                  backgroundColor: themeData?.colors?.background?.hex ?? defaultValue.background,
                  PrimaryColor: themeData?.colors?.primary?.hex ?? defaultValue.primary,
                  SecondaryColor: themeData?.colors?.secondary?.hex ?? defaultValue.secondary,

                  // Safely access each accent color in the array
                  accentColors: [
                    themeData?.colors?.accent1?.hex ?? defaultValue.accent,
                    themeData?.colors?.accent2?.hex ?? defaultValue.accent,
                    themeData?.colors?.accent3?.hex ?? defaultValue.accent,
                    themeData?.colors?.accent4?.hex ?? defaultValue.accent,
                  ]
                }} 
                theme={themeData}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SiteThemePanel;