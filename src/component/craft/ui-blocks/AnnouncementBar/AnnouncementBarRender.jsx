import React from "react";
import { useNode, Element } from "@craftjs/core";
import { Text } from "../../user/Text/Text.jsx";
import { AnnouncementBarSettings } from "./AnnouncementBarSettings";
import { Megaphone } from "lucide-react";

export const AnnouncementBarContent = ({
  background = "#333333",
  textAlign = "center",
  paddingX = 15,
  paddingY = 8,
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
          height.toLowerCase() === "auto" ? "auto" : `${parseInt(width, 10)}px`,
      }}
    >
      {showIcon && (
        <span style={{ marginRight: "8px" }}>
          <Megaphone className=" w-5 h-5 text-white" />
        </span>
      )}
      {children}
    </div>
  );
};

export const AnnouncementBarRender = () => {
  // const {} = useNode();

  const {
    props,
    connectors: { connect, drag },
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <Element
      is="div"
      id="Announcement Bar 1"
      canvas
      ref={(ref) => connect(drag(ref))}
    >
      <Element
        id="Announcement Bar 2"
        is={AnnouncementBarContent}
        canvas
        custom={{
          displayName: "Announcement Bar",
        }}
      >
        <Element
          is={Text}
          id="announcementText"
          text="Special Announcement! Check out our new features!"
          fontSize={14}
          fontWeight={"400"}
          color={"#ffffff"}
          textAlign={props?.textAlign}
          lineHeight={1.4}
          charSpacing={0}
        />
      </Element>
    </Element>
  );
};

AnnouncementBarContent.craft = {
  displayName: "Announcement Bar",
  props: {
    background: "#333333",
    textAlign: "center",
    paddingX: 15,
    paddingY: 8,
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
