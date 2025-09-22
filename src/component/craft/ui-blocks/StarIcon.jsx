import { useNode } from "@craftjs/core";
import { Star } from "@/assets/icons";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { CustomColorPicker } from "@/component/CustomColorPicker";
import { SliderControl } from "./SliderControl";

export const StarIcon = ({ iconSize, iconColor }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div ref={(ref) => connect(drag(ref))}>
      <Star
        width={iconSize}
        height={iconSize}
        className="transition-colors duration-300"
        style={{
          color: iconColor,
        }}
      />
    </div>
  );
};

export const StarIconSettings = () => {
  const [open, setOpen] = useState(false);

  const {
    props,
    actions: { setProp },
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="bg-white space-y-6">
      <div className="flex items-center justify-between gap-2">
        <Label> Color</Label>
        <div className="">
          {/* Small button to show current color */}
          <button
            className="w-[168px] h-8 rounded-md border cursor-pointer"
            style={{ backgroundColor: props.iconColor }}
            onClick={() => setOpen(true)}
          />

          {/* Color Picker Dialog */}
          <CustomColorPicker
            value={props.iconColor}
            onValueChange={(val) => setProp((p) => (p.iconColor = val))}
            open={open}
            onClose={setOpen}
          />
        </div>
      </div>

      <SliderControl
        value={props.iconSize}
        label="Icon Size"
        stack={true}
        onChange={(val) => setProp((p) => (p.iconSize = val))}
      />
    </div>
  );
};

StarIcon.craft = {
  displayName: "Star Icon",
  props: {
    iconSize: 17,
    iconColor: "#FF4D00",
  },

  related: {
    settings: StarIconSettings,
  },
};
