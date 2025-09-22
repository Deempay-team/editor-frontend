import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import { Label } from "@/components/ui/label";
import { SliderControl } from "../SliderControl";
import { useViewport } from "@/Context/ViewportContext";
import { cn } from "@/lib/utils";
import { CustomColorPicker } from "@/component/CustomColorPicker";

const Section = ({ title, children, className }) => (
  <div className="space-y-3 mt-4">
    <h3 className="text-xs font-semibold text-gray-800 uppercase tracking-wide">
      {title}
    </h3>
    <div className={cn("space-y-5", className)}>{children}</div>
  </div>
);

export const ProductCollectionSettings = () => {
  const { isDesktop } = useViewport();
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
            style={{ backgroundColor: props.background }}
            onClick={() => setOpen(true)}
          />

          {/* Color Picker Dialog */}
          <CustomColorPicker
            value={props.background}
            onValueChange={(val) => setProp((p) => (p.background = val))}
            open={open}
            onClose={setOpen}
          />
        </div>
      </div>

      <Section title="Layout" className=" border-b border-gray-200 pb-5">
        {/* <SliderControl
          value={isDesktop ? props.desktopHeight : props.mobileHeight}
          label="Height"
          min={50}
          max={400}
          onChange={(val) =>
            setProp((p) =>
              isDesktop ? (p.desktopHeight = val) : (p.mobileHeight = val)
            )
          }
        /> */}

        {/* Desktop Padding Y */}
        <SliderControl
          value={isDesktop ? props.desktopPaddingY : props.mobilePaddingY}
          label="Padding Vertical"
          stack={true}
          onChange={(val) =>
            setProp((p) =>
              isDesktop ? (p.desktopPaddingY = val) : (p.mobilePaddingY = val)
            )
          }
        />

        {/* Desktop Padding X */}
        <SliderControl
          value={isDesktop ? props.desktopPaddingX : props.mobilePaddingX}
          label="Padding Horizontal"
          stack={true}
          onChange={(val) =>
            setProp((p) =>
              isDesktop ? (p.desktopPaddingX = val) : (p.mobilePaddingX = val)
            )
          }
        />
      </Section>
    </div>
  );
};
