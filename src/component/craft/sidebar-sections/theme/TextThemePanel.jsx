import React, { useState, useEffect } from 'react';
import { Info } from 'lucide-react';
import { loadGoogleFonts } from '../../../../utils/loadGoogleFonts';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useTheme } from "../../../../Context/ThemeContext";


const FontSelector = ({ onFontChange }) => {
  const { theme, fonts, fontPairs, updateTheme } = useTheme();

  const [headingFont, setHeadingFont] = useState(theme.font.heading || { name: '', family: '' });
  const [paragraphFont, setParagraphFont] = useState(theme.font.paragraph || { name: '', family: '' });
  // console.log("theme", theme)
  // console.log(paragraphFont)

  useEffect(() => {
    const fontNames = fonts.map((font) => font.name);
    loadGoogleFonts(fontNames);
  }, []);

  const handleHeadingFontChange = (fontName) => {
    const font = fonts.find((f) => f.name === fontName);
    setHeadingFont(font);
    updateTheme({
      font: {
        heading: { name: font.name, family: font.family },
        paragraph: paragraphFont // <-- not paragraphFont: {}
      }
    })
    if (onFontChange) onFontChange({ headingFont: font, paragraphFont });
  };

  const handleParagraphFontChange = (fontName) => {
    const font = fonts.find((f) => f.name === fontName);
    setParagraphFont(font);
    updateTheme({
      font: {
        heading: headingFont,
        paragraph: { name: font.name, family: font.family },
      }
    })
    if (onFontChange) onFontChange({ headingFont, paragraphFont: font });
  };

  return (
    <div className="w-full space-y-6">
      {/* Unified Preview Container */}
      <div className="p-4 bg-white rounded-[8px] ">
        <h2
          className="text-xl font-semibold text-gray-800"
          style={{ fontFamily: headingFont.family }}
        >
          The quick brown fox jumps over the lazy dog
        </h2>
        <p
          className="text-[15px] text-gray-700 mt-2 line-clamp-3"
          style={{ fontFamily: paragraphFont.family }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          vitae nulla ac odio tempus vulputate.
        </p>
      </div>

      <div className='space-y-5'>
        {/* Heading Font Selector */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Heading font</span>
            <Info className="w-4 h-4 text-gray-400 cursor-help" />
          </div>

          <Select
            onValueChange={handleHeadingFontChange}
            defaultValue={headingFont.name}
          >
            <SelectTrigger
              className="w-full bg-white !h-[40px] shadow-none cursor-pointer"
            // style={{ fontFamily: headingFont.family }}
            >
              <SelectValue placeholder="Select font" />
            </SelectTrigger>

            <SelectContent className="max-h-60 overflow-auto">
              {fonts.map((font, index) => (
                <SelectItem
                  key={index}
                  value={font.name}
                  style={{ fontFamily: font.family }}
                  className="text-sm"
                >
                  {font.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Paragraph Font Selector */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Paragraph font
            </span>
            <Info className="w-4 h-4 text-gray-400 cursor-help" />
          </div>

          <Select
            onValueChange={handleParagraphFontChange}
            defaultValue={paragraphFont.name}
          >
            <SelectTrigger
              className="w-full bg-white !h-[40px] shadow-none cursor-pointer"
            // style={{ fontFamily: paragraphFont.family }}
            >
              <SelectValue placeholder="Select font" />
            </SelectTrigger>

            <SelectContent className="max-h-60 overflow-auto">
              {fonts.map((font, index) => (
                <SelectItem
                  key={index}
                  value={font.name}
                  style={{ fontFamily: font.family }}
                  className="text-sm"
                >
                  {font.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Featured Fonts Section */}
      <div className="mt-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Featured font pairs</h4>
        <div className="grid grid-cols-1 gap-3">
          {fontPairs.map((pair, index) => (
            <button
              key={index}
              onClick={() => {
                setHeadingFont(pair.heading);
                setParagraphFont(pair.paragraph);

                updateTheme({
                  font: {
                    heading: pair.heading,
                    paragraph: pair.paragraph
                  }
                })

                if (onFontChange) {
                  onFontChange({
                    headingFont: pair.heading,
                    paragraphFont: pair.paragraph,
                  });
                }
              }}
              className="w-full p-3 text-left rounded-[8px] cursor-pointer hover:bg-gray-50 border border-white hover:border-blue-500 bg-white transition"
            >
              <p
                className="text-xl font-semibold mb-1"
                style={{ fontFamily: pair.heading.family }}
              >
                {pair.heading.name}
              </p>
              <p
                className="text-sm text-gray-600"
                style={{ fontFamily: pair.paragraph.family }}
              >
                {pair.paragraph.name} for paragraphs pairs well with {pair.heading.name} for headings.
              </p>
            </button>
          ))}
        </div>
      </div>



    </div>
  );
};

function TextThemePanel() {
  const [currentFont, setCurrentFont] = useState();

  return (
    <div className="text-gray-500 text-sm flex flex-col space-y-[18px]">

      <div className='mbs-[18px] hidden'>
        <p>
          Choose a font for the heading and  one for paragraph
        </p>
      </div>

      <FontSelector onFontChange={setCurrentFont} />

    </div>
  );
}

export default TextThemePanel;
