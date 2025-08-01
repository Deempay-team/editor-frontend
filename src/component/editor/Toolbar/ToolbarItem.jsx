import React from "react";
import { useNode } from "@craftjs/core";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ToolbarDropdown } from "./ToolbarDropdown";
import { ToolbarTextInput } from "./ToolbarTextInput";

export const ToolbarItem = ({
  full = false,
  propKey,
  type,
  onChange,
  index,
  ...props
}) => {
  const {
    actions: { setProp },
    propValue,
  } = useNode((node) => ({
    propValue: node.data.props[propKey],
  }));

  const value = Array.isArray(propValue) ? propValue[index] : propValue;

  const handleSetProp = (newVal) => {
    setProp((props) => {
      if (Array.isArray(propValue)) {
        props[propKey][index] = onChange ? onChange(newVal) : newVal;
      } else {
        props[propKey] = onChange ? onChange(newVal) : newVal;
      }
    }, 500);
  };

  return (
    <div className={`w-full ${full ? "" : "md:w-1/2"}`}>
      <div className="mb-4">
        {["text", "color", "bg", "number"].includes(type) && (
          <ToolbarTextInput
            {...props}
            type={type}
            value={value}
            onChange={handleSetProp}
          />
        )}

        {type === "slider" && (
          <div>
            {props.label && (
              <Label className="mb-1 block text-muted-foreground">
                {props.label}
              </Label>
            )}
            <Slider
              value={[parseInt(value) || 0]}
              max={100}
              step={1}
              onValueChange={([val]) => handleSetProp(val)}
            />
          </div>
        )}

        {type === "radio" && (
          <div>
            {props.label && (
              <Label className="mb-1 block text-muted-foreground">
                {props.label}
              </Label>
            )}
            <RadioGroup
              value={value}
              onValueChange={(val) => handleSetProp(val)}
              className="flex flex-col gap-2"
            >
              {props.children}
            </RadioGroup>
          </div>
        )}

        {type === "select" && (
          <ToolbarDropdown
            value={value || ""}
            onChange={handleSetProp}
            {...props}
          />
        )}
      </div>
    </div>
  );
};
