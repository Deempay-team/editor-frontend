"use client";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function SliderControl({
  value = 18,
  onChange,
  label = "Gap",
  min = 0,
  max = 100,
  step = 1,
  extension = "px",
  stack = false,
}) {
  const updateGap = (newValue) => {
    onChange?.(newValue);
  };

  return (
    <div
      className={cn(
        "flex items-center gap-4 w-full",
        stack && "flex-col items-start"
      )}
    >
      {/* Label */}
      <Label className="">{label}</Label>

      <div className="flex1 flex items-center gap-4 w-full">
        {/* Slider */}
        <div className="flex-1">
          <Slider
            value={[value]}
            min={min}
            max={max}
            step={step}
            onValueChange={(val) => updateGap(val[0])}
          />
        </div>

        {/* Numeric Input */}
        <div className="relative w-18 ">
          <Input
            className="pr-2 h-8" // space for px
            value={value}
            onChange={(e) => updateGap(Number(e.target.value))}
          />
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500">
            {extension}
          </span>
        </div>
      </div>
    </div>
  );
}
