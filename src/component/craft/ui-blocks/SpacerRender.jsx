import React from "react";
import { useNode } from "@craftjs/core";
import { SliderControl } from "./SliderControl";

export const SpacerRender = ({ height }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      style={{
        height: `${height}px`,
        width: "100%",
      }}
    />
  );
};

// Default props
SpacerRender.defaultProps = {
  height: 40,
};

// -------- Settings Panel ----------
export const SpacerSettings = () => {
  const {
    actions: { setProp },
    height,
  } = useNode((node) => ({
    height: node.data.props.height,
  }));

  return (
    <div className="p-2 space-y-2">
      <SliderControl
        value={height}
        label="Height"
        min={0}
        stack={true}
        onChange={(val) => setProp((p) => (p.height = val))}
      />
    </div>
  );
};

// Craft.js related metadata
SpacerRender.craft = {
  displayName: "Spacer",
  props: {
    height: 40,
  },
  related: {
    settings: SpacerSettings,
  },
};
