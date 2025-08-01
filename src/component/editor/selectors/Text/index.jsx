import React from "react";
import { useNode, useEditor } from "@craftjs/core";
import ContentEditable from "react-contenteditable";
import { TextSettings } from "./TextSettings";

export const Text = ({
  fontSize = "15",
  textAlign = "left",
  fontWeight = "500",
  color = { r: 92, g: 90, b: 90, a: 1 },
  shadow = 0,
  text = "Text",
  margin = [0, 0, 0, 0],
}) => {
  const {
    connectors: { connect },
    setProp,
  } = useNode();

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const textColor = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
  const textShadow = `0px 0px 2px rgba(0,0,0,${shadow / 100})`;
  const marginStyle = {
    marginTop: `${margin[0]}px`,
    marginRight: `${margin[1]}px`,
    marginBottom: `${margin[2]}px`,
    marginLeft: `${margin[3]}px`,
  };

  return (
    <ContentEditable
      innerRef={connect}
      html={text}
      disabled={!enabled}
      onChange={(e) => {
        setProp((prop) => (prop.text = e.target.value), 500);
      }}
      tagName="h2"
      className={`w-full outline-none font-${fontWeight} text-[${fontSize}px] text-${textAlign}`}
      style={{
        ...marginStyle,
        color: textColor,
        fontSize: `${fontSize}px`,
        textShadow,
        textAlign,
        fontWeight,
      }}
    />
  );
};

Text.craft = {
  displayName: "Text",
  props: {
    fontSize: "15",
    textAlign: "left",
    fontWeight: "500",
    color: { r: 92, g: 90, b: 90, a: 1 },
    margin: [0, 0, 0, 0],
    shadow: 0,
    text: "Text",
  },
  related: {
    toolbar: TextSettings,
  },
};
