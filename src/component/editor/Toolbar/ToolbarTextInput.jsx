import { useState, useEffect } from "react";
import { ChromePicker } from "react-color";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const ToolbarTextInput = ({
  onChange,
  value,
  prefix,
  label,
  type,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(value);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let val = value;
    if (type === "color" || type === "bg") {
      val = `rgba(${Object.values(value)})`;
    }
    setInternalValue(val);
  }, [value, type]);

  return (
    <div
      className="relative w-full"
      onClick={() => {
        setActive(true);
      }}
    >
      {label && (
        <Label className="text-xs text-muted-foreground mb-1 block">
          {label}
        </Label>
      )}

      {(type === "color" || type === "bg") && active && (
        <div className="absolute z-[99999] top-full left-0 mt-2">
          <div
            className="fixed inset-0 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setActive(false);
            }}
          ></div>
          <ChromePicker
            color={value}
            onChange={(color) => {
              onChange(color.rgb);
            }}
          />
        </div>
      )}

      <div className="relative">
        {["color", "bg"].includes(type) && (
          <span
            className="absolute top-1/2 left-3 transform -translate-y-1/2 w-3 h-3 rounded-full z-10"
            style={{ background: internalValue }}
          />
        )}

        <Input
          type={type}
          value={internalValue || ""}
          onChange={(e) => setInternalValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onChange(e.target.value);
            }
          }}
          className={`pl-${
            ["color", "bg"].includes(type) ? "8" : "3"
          } text-sm bg-muted rounded-full focus-visible:ring-0 focus-visible:ring-offset-0`}
          {...props}
        />
      </div>
    </div>
  );
};
