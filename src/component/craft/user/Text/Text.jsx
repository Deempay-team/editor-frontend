import React from "react";
import { useNode } from "@craftjs/core";
import { TextSettings } from "@/component/craft/user/Text/TextSettings.jsx";
import { useViewport } from "@/Context/ViewportContext";

export const Text = ({
  text,
  link,
  font,
  fontSizeDesktop,
  fontSizeMobile,
  fontWeight,
  charSpacing,
  case: textCase,
  color,
  widthDesktop = 100,
  widthMobile = 100,
}) => {
  const { isDesktop } = useViewport(); // your custom hook

  const {
    connectors: { connect, drag },
  } = useNode();

  const getLetterSpacing = () => {
    switch (charSpacing) {
      case "Tight":
        return "-0.5px";
      case "Loose":
        return "1px";
      default:
        return "0px";
    }
  };

  const getTextTransform = () => {
    return textCase === "Uppercase" ? "uppercase" : "none";
  };

  const fontSize = isDesktop ? fontSizeDesktop : fontSizeMobile;

  return (
    <>
      <style>
        {`
          .responsive-text {
            font-family: var(--font, 'Arial');
            font-size: var(--font-size, 16px);
            font-weight: var(--font-weight, 400);
             line-height: 1;
            letter-spacing: var(--letter-spacing, 0px);
            text-transform: var(--text-transform, none);
            color: var(--color, #000000);
            
          }
        `}
      </style>
      <div
        ref={(ref) => connect(drag(ref))}
        className="responsive-text"
        style={{
          "--font":
            font === "Heading"
              ? "'Helvetica', sans-serif"
              : "'Arial', sans-serif",
          "--font-size": `${fontSize}px`,
          "--font-weight": fontWeight,
          "--letter-spacing": getLetterSpacing(),
          "--text-transform": getTextTransform(),
          "--color": color,
          width: isDesktop ? `${widthDesktop}%` : `${widthMobile}%`,
        }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </>
  );
};
Text.craft = {
  displayName: "Text Block",
  props: {
    text: <p>Special Announcement! Check out our new features!</p>,
    link: "",
    font: "Heading",
    fontSizeDesktop: 16,
    fontSizeMobile: 14,
    fontWeight: "400",
    charSpacing: "Normal",
    case: "Default",
    color: "#000000",
    widthDesktop: 100,
    widthMobile: 100,
  },
  related: {
    settings: TextSettings,
  },
};
export default Text;
