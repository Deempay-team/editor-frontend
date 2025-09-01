"use client";
import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import { MailIcon } from "@/assets/icons";
import { Label } from "@/components/ui/label";
import { CustomColorPicker } from "@/component/CustomColorPicker";
import { SliderControl } from "../ui-blocks/SliderControl";
import ColorPicker from "@/components/ui/ColorPicker";

export const InputField = ({
  placeholder,
  value,
  backgroundColor,
  paddingX,
  paddingY,
  borderRadius,
  height,
  iconColor,
  ...rest // RHF will pass register props here
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className="flex items-center w-full gap-2"
      style={{
        backgroundColor,
        paddingLeft: `${paddingX}px`,
        paddingRight: `${paddingX}px`,
        paddingTop: `${paddingY}px`,
        paddingBottom: `${paddingY}px`,
        borderRadius: `${borderRadius}px`,
        height: `${height}px`,
      }}
    >
      {/* <Mail size={20} color={iconColor} /> */}
      <MailIcon
        className="w-6 h-6"
        style={{
          color: iconColor,
        }}
      />
      <input
        type="email"
        placeholder={placeholder}
        className="w-full bg-transparent outline-none placeholder-gray-400"
        {...rest}
      />
    </div>
  );
};

export const InputFieldSettings = () => {
  const [open, setOpen] = useState(false);
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="space-y-3 p-3 text-sm">
      <div>
        <label className="block mb-1">Placeholder</label>
        <input
          type="text"
          className="w-full border px-2 py-1 rounded"
          value={props.placeholder}
          onChange={(e) => setProp((p) => (p.placeholder = e.target.value))}
        />
      </div>

      <ColorPicker
        label="Background Color"
        value={props.backgroundColor}
        onChange={(val) => setProp((p) => (p.backgroundColor = val))}
      />

      <ColorPicker
        label="Icon Color"
        value={props.iconColor}
        onChange={(val) => setProp((p) => (p.iconColor = val))}
      />

      {/* Desktop Border Radius */}
      <SliderControl
        value={props.borderRadius}
        label="Border Radius"
        min={10}
        max={100}
        step={10}
        extension="%"
        stack={true}
        onChange={(val) => setProp((p) => (p.borderRadius = val))}
      />

      {/* Desktop Height */}
      <SliderControl
        value={props.height}
        label="Height"
        stack={true}
        onChange={(val) => setProp((p) => (p.height = val))}
      />

      {/* Desktop Padding Y */}
      <SliderControl
        value={props.paddingY}
        label="Padding Vertical"
        stack={true}
        onChange={(val) => setProp((p) => (p.paddingY = val))}
      />

      {/* Desktop Padding Y */}
      <SliderControl
        value={props.paddingX}
        label="Padding Horizontal"
        stack={true}
        onChange={(val) => setProp((p) => (p.paddingX = val))}
      />
    </div>
  );
};

InputField.craft = {
  displayName: "Input Field",
  props: {
    placeholder: "Enter your email address",
    value: "",
    backgroundColor: "#ffffff",
    paddingX: 16,
    paddingY: 8,
    borderRadius: 100, // rounded-full default
    height: 48,
    iconColor: "#000000",
  },
  related: {
    settings: InputFieldSettings,
  },
};
