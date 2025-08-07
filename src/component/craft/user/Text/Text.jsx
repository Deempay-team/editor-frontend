import React from "react";
import {useNode} from "@craftjs/core";
import {TextSettings} from "@/component/craft/user/Text/TextSettings.jsx";


export const Text = ({
                         text,
                         link,
                         font,
                         fontSize,
                         fontWeight,
                         charSpacing,
                         case: textCase,
                         color
                     }) => {
    const {connectors: {connect, drag}} = useNode();

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
        switch (textCase) {
            case "Uppercase":
                return "uppercase";
            case "Lowercase":
                return "lowercase";
            case "Capitalize":
                return "capitalize";
            default:
                return "none";
        }
    };


    return (
        <>
            <style>
                {`
          .responsive-text {
            font-family: var(--font, 'Arial');
            font-size: var(--font-size, 16px);
            font-weight: var(--font-weight, 400);
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
                    "--font": font === "Heading" ? "'Helvetica', sans-serif" : "'Arial', sans-serif",
                    "--font-size": `${fontSize}px`,
                    "--font-weight": fontWeight,
                    "--letter-spacing": getLetterSpacing(),
                    "--text-transform": getTextTransform(),
                    "--color": color,
                }}
                dangerouslySetInnerHTML={{__html: text}}
            />
        </>
    );
};
Text.craft = {
    displayName: "Text Block",
    props: {
        text: "Special Announcement! Check out our new features!",
        link: "",
        font: "Heading",
        fontSize: 16,
        fontWeight: "400",
        charSpacing: "Normal",
        case: "Default",
        color: "#000000"
    },
    related: {
        settings: TextSettings,
    },
};
export default Text;