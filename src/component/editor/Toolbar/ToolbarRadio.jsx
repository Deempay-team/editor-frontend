import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export const ToolbarRadio = ({
  value,
  label,
  name = "toolbar-radio",
  onChange,
}) => {
  return (
    <RadioGroup
      defaultValue={value}
      onValueChange={onChange}
      className="flex items-center space-x-2"
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem value={value} id={value} />
        <Label htmlFor={value} className="text-sm font-medium text-gray-800">
          {label}
        </Label>
      </div>
    </RadioGroup>
  );
};
