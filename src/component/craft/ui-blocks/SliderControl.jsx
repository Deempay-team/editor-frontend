"use client";
import {Label} from "@/components/ui/label";
import {Slider} from "@/components/ui/slider";
import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";

export function SliderControl({
                                  value = 18,
                                  onChange,
                                  label = "",
                                  min = 0,
                                  max = 100,
                                  step = 1,
                                  extension = "px",
                                  stack = false,
                              }) {
    const updateGap = (newValue) => {
        onChange?.(newValue);
    };

    return (<div
        className={cn("flex items-center gap-4 w-full", stack && "flex-col items-start gap-1")}
    >
        {/* Label */}
        <Label className={cn("w-[30%]", stack && " w-full")}>{label}</Label>

        <div
            className={cn("flex1 flex items-center gap-4 w-[70%]", stack && " w-full")}
        >
            {/* Slider */}
            <div className="flex-1">
                <Slider
                    value={[value === '' ? min : Number(value)]}
                    min={min}
                    max={max}
                    step={step}
                    className="cursor-pointer"
                    onValueChange={(val) => updateGap(val[0])}
                />
            </div>

            {/* Numeric Input */}
            <div className="relative w-18 ">
                <Input
                    type="text"
                    className="pr-5 h-8 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    value={value ?? ''}
                    onChange={(e) => updateGap(e.target.value)}
                />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500">
                        {extension}
        </span>
            </div>
        </div>
    </div>);
}
