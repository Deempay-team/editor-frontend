import React from "react";
import { useNode, Element } from "@craftjs/core";
import { Text } from "../../user/Text/Text.jsx";
import { AnnouncementBarSettings } from "./AnnouncementBarSettings";

export const AnnouncementBarRender = ({
  background = "#333333",
  textColor = "#ffffff",
  fontSize = 14,
  fontWeight = "400",
  textAlign = "center",
  letterSpacing = 0,
  lineHeight = 1.4,
  paddingX = 15,
  paddingY = 1,
  height = "auto",
  width = "auto",
  borderRadius = 0,
  shadow = false,
  showIcon = false,
  children,
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      style={{
        backgroundColor: background,
        padding: `${paddingY}px ${paddingX}px`,
        borderRadius: `${borderRadius}px`,
        boxShadow: shadow ? "0 2px 8px rgba(0,0,0,0.15)" : "none",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent:
            textAlign === "left"
              ? "flex-start"
              : textAlign === "right"
              ? "flex-end"
              : "center",
          height:
            height.toLowerCase() === "auto"
              ? "auto"
              : `${parseInt(height, 10)}px`,
          width:
            height.toLowerCase() === "auto"
              ? "auto"
              : `${parseInt(width, 10)}px`,
        }}
      >
        {showIcon && <span style={{ marginRight: "8px" }}>📢</span>}
        <Element
          is={Text}
          id="announcementText"
          text="Special Announcement! Check out our new features!"
          fontSize={fontSize}
          fontWeight={fontWeight}
          color={textColor}
          textAlign={textAlign}
          lineHeight={lineHeight}
          charSpacing={letterSpacing}
        />
      </div>
      {children}
    </div>
  );
};

AnnouncementBarRender.craft = {
  displayName: "Announcement Bar",
  props: {
    background: "#333333",
    textColor: "#ffffff",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    letterSpacing: 0,
    lineHeight: 1.4,
    paddingX: 15,
    paddingY: 1,
    height: "auto",
    width: "auto",
    borderRadius: 0,
    shadow: false,
    showIcon: false,
  },
  rules: {
    canMoveIn: () => false,
  },
  related: {
    settings: AnnouncementBarSettings,
  },
};
