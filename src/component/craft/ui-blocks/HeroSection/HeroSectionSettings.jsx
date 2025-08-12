import React, { useEffect, useState } from "react";
import { useNode } from "@craftjs/core";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SliderControl } from "./SliderControl";
import { useViewport } from "@/Context/ViewportContext";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const colorSchemes = [
  { label: "Light", value: "#ffffff" },
  { label: "Dark", value: "#111827" },
  { label: "Primary", value: "#3b82f6" },
  { label: "Secondary", value: "#6b7280" },
  { label: "Custom", value: "#FF4D00" },
];

const Section = ({ title, children, className }) => (
  <div className="space-y-3 mt-4">
    <h3 className="text-xs font-semibold text-gray-800 uppercase tracking-wide">
      {title}
    </h3>
    <div className={cn("space-y-5", className)}>{children}</div>
  </div>
);

export const HeroSectionSettings = () => {
  const { isDesktop } = useViewport();
  const {
    props,
    actions: { setProp },
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="bg-white space-y-6">
      <Section title="Background">
        <Label>Background Color</Label>
        <Select
          value={props.background}
          onValueChange={(val) => setProp((p) => (p.background = val))}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose background" />
          </SelectTrigger>
          <SelectContent>
            {colorSchemes.map((color) => (
              <SelectItem key={color.value} value={color.value}>
                <div className="flex items-center space-x-2">
                  <span
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: color.value }}
                  />
                  <span>{color.label}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* <Label className="pt-4">Text Color</Label>
        <Input
          type="color"
          value={props.textColor}
          onChange={(e) => setProp((p) => (p.textColor = e.target.value))}
        /> */}
      </Section>

      <details className="group">
        <summary className="flex items-center justify-between border-b border-gray-200 py-2 px-0 cursor-pointer list-none ">
          <h3 className="text-xs font-semibold text-gray-800 uppercase tracking-wide">
            Desktop Settings
          </h3>
          <ChevronDownIcon className="h-5 w-5 stroke-current text-gray-400 rotate-0 group-open:rotate-180 transition-transform" />
        </summary>
        <div className=" px-0 py-0 mb-0">
          <Section title="Layout" className=" border-b border-gray-200 pb-5">
            {/* Direction */}
            <div className=" flex items-center justify-between w-full">
              <Label className="w-[30%]">Direction</Label>
              <Tabs
                defaultValue={props.direction}
                onValueChange={(val) => setProp((p) => (p.direction = val))}
                className="flex-1"
              >
                <TabsList className="w-full">
                  <TabsTrigger value="vertical" className="flex-1">
                    Vertical
                  </TabsTrigger>
                  <TabsTrigger value="horizontal" className="flex-1">
                    Horizontal
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Alignment */}
            <div className=" flex items-center justify-between w-full transition-all duration-1000 ease-in-out">
              <Label className="w-[30%]">
                {props.direction === "vertical" ? "Alignment" : "Position"}
              </Label>
              <Tabs
                defaultValue={props.alignment}
                onValueChange={(value) =>
                  value && setProp((props) => (props.alignment = value))
                }
                className="w-[70%]"
              >
                <TabsList className="w-full">
                  {props.direction === "vertical" ? (
                    <>
                      <TabsTrigger value="left" className="flex-1">
                        Left
                      </TabsTrigger>
                      <TabsTrigger value="center" className="flex-1">
                        Center
                      </TabsTrigger>
                      <TabsTrigger value="right" className="flex-1">
                        Right
                      </TabsTrigger>
                    </>
                  ) : (
                    <>
                      <TabsTrigger value="left" className="flex-1 px-0">
                        Top
                      </TabsTrigger>
                      <TabsTrigger value="center" className="flex-1 px-0">
                        Center
                      </TabsTrigger>
                      <TabsTrigger value="right" className="flex-1 px-0">
                        Bottom
                      </TabsTrigger>
                    </>
                  )}
                </TabsList>
              </Tabs>
            </div>

            {/* Position */}
            <div className=" flex items-center justify-between w-full transition-all duration-1000 ease-in-out">
              <Label className="w-[30%]">
                {props.direction === "vertical" ? "Position" : "Alignment"}
              </Label>
              <Tabs
                defaultValue={props.position}
                onValueChange={(value) =>
                  setProp((props) => (props.position = value))
                }
                className="w-[70%]"
              >
                <TabsList className="w-full">
                  {props.direction === "vertical" ? (
                    <>
                      <TabsTrigger value="top" className="px-0">
                        Top
                      </TabsTrigger>
                      <TabsTrigger value="center" className="px-0">
                        Center
                      </TabsTrigger>
                      <TabsTrigger value="bottom" className="px-0">
                        Bottom
                      </TabsTrigger>
                    </>
                  ) : (
                    <>
                      <TabsTrigger value="top">Left</TabsTrigger>
                      <TabsTrigger value="center">Center</TabsTrigger>
                      <TabsTrigger value="bottom">Right</TabsTrigger>
                    </>
                  )}
                </TabsList>
              </Tabs>
            </div>

            <SliderControl
              value={props.gap}
              label="Gap"
              onChange={(val) => setProp((p) => (p.gap = val))}
            />

            <SliderControl
              value={isDesktop ? props.desktopHeight : props.mobileHeight}
              label="Height"
              min={230}
              max={600}
              onChange={(val) =>
                setProp((p) =>
                  isDesktop ? (p.desktopHeight = val) : (p.mobileHeight = val)
                )
              }
            />

            {/* <div className="space-y-2">
          <Label>Mobile Padding Y</Label>
          <Slider
            min={0}
            max={100}
            value={[props.mobilePaddingY]}
            onValueChange={(val) => setProp((p) => (p.mobilePaddingY = val[0]))}
          />
        </div> */}
          </Section>

          <Section title="Padding" className="mb-4">
            {/* Desktop Padding Y */}
            <SliderControl
              value={isDesktop ? props.desktopPaddingY : props.mobilePaddingY}
              label="Desktop Padding Vertical"
              stack={true}
              onChange={(val) =>
                setProp((p) =>
                  isDesktop
                    ? (p.desktopPaddingY = val)
                    : (p.mobilePaddingY = val)
                )
              }
            />

            {/* Desktop Padding X */}
            <SliderControl
              value={isDesktop ? props.desktopPaddingX : props.mobilePaddingX}
              label="Desktop Padding Horizontal"
              stack={true}
              onChange={(val) =>
                setProp((p) =>
                  isDesktop
                    ? (p.desktopPaddingX = val)
                    : (p.desktopPaddingX = val)
                )
              }
            />
          </Section>
        </div>
      </details>

      <details className="group">
        <summary className="flex items-center justify-between border-b border-gray-200 py-2 px-0 cursor-pointer list-none ">
          <h3 className="text-xs font-semibold text-gray-800 uppercase tracking-wide">
            Mobile Settings
          </h3>
          <ChevronDownIcon className="h-5 w-5 stroke-current text-gray-400 rotate-0 group-open:rotate-180 transition-transform" />
        </summary>
        <div className=" px-0 py-0 mb-0">
          <Section title="Layout" className=" border-b border-gray-200 pb-5">
            {/* Direction */}
            <div className=" flex items-center justify-between w-full">
              <Label className="w-[30%]">Direction</Label>
              <Tabs
                defaultValue={props.direction}
                onValueChange={(val) => setProp((p) => (p.direction = val))}
                className="flex-1"
              >
                <TabsList className="w-full">
                  <TabsTrigger value="vertical" className="flex-1">
                    Vertical
                  </TabsTrigger>
                  <TabsTrigger value="horizontal" className="flex-1">
                    Horizontal
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Alignment */}
            <div className=" flex items-center justify-between w-full transition-all duration-1000 ease-in-out">
              <Label className="w-[30%]">
                {props.direction === "vertical" ? "Alignment" : "Position"}
              </Label>
              <Tabs
                defaultValue={props.alignment}
                onValueChange={(value) =>
                  value && setProp((props) => (props.alignment = value))
                }
                className="w-[70%]"
              >
                <TabsList className="w-full">
                  {props.direction === "vertical" ? (
                    <>
                      <TabsTrigger value="left" className="flex-1">
                        Left
                      </TabsTrigger>
                      <TabsTrigger value="center" className="flex-1">
                        Center
                      </TabsTrigger>
                      <TabsTrigger value="right" className="flex-1">
                        Right
                      </TabsTrigger>
                    </>
                  ) : (
                    <>
                      <TabsTrigger value="left" className="flex-1 px-0">
                        Top
                      </TabsTrigger>
                      <TabsTrigger value="center" className="flex-1 px-0">
                        Center
                      </TabsTrigger>
                      <TabsTrigger value="right" className="flex-1 px-0">
                        Bottom
                      </TabsTrigger>
                    </>
                  )}
                </TabsList>
              </Tabs>
            </div>

            {/* Position */}
            <div className=" flex items-center justify-between w-full transition-all duration-1000 ease-in-out">
              <Label className="w-[30%]">
                {props.direction === "vertical" ? "Position" : "Alignment"}
              </Label>
              <Tabs
                defaultValue={props.position}
                onValueChange={(value) =>
                  setProp((props) => (props.position = value))
                }
                className="w-[70%]"
              >
                <TabsList className="w-full">
                  {props.direction === "vertical" ? (
                    <>
                      <TabsTrigger value="top" className="px-0">
                        Top
                      </TabsTrigger>
                      <TabsTrigger value="center" className="px-0">
                        Center
                      </TabsTrigger>
                      <TabsTrigger value="bottom" className="px-0">
                        Bottom
                      </TabsTrigger>
                    </>
                  ) : (
                    <>
                      <TabsTrigger value="top">Left</TabsTrigger>
                      <TabsTrigger value="center">Center</TabsTrigger>
                      <TabsTrigger value="bottom">Right</TabsTrigger>
                    </>
                  )}
                </TabsList>
              </Tabs>
            </div>

            <SliderControl
              value={props.gap}
              label="Gap"
              onChange={(val) => setProp((p) => (p.gap = val))}
            />

            <SliderControl
              value={isDesktop ? props.desktopHeight : props.mobileHeight}
              label="Height"
              min={230}
              max={600}
              onChange={(val) =>
                setProp((p) =>
                  isDesktop ? (p.desktopHeight = val) : (p.mobileHeight = val)
                )
              }
            />

            {/* <div className="space-y-2">
          <Label>Mobile Padding Y</Label>
          <Slider
            min={0}
            max={100}
            value={[props.mobilePaddingY]}
            onValueChange={(val) => setProp((p) => (p.mobilePaddingY = val[0]))}
          />
        </div> */}
          </Section>

          <Section title="Padding" className="mb-4">
            {/* Desktop Padding Y */}
            <SliderControl
              value={isDesktop ? props.desktopPaddingY : props.mobilePaddingY}
              label="Desktop Padding Vertical"
              stack={true}
              onChange={(val) =>
                setProp((p) =>
                  isDesktop
                    ? (p.desktopPaddingY = val)
                    : (p.mobilePaddingY = val)
                )
              }
            />

            {/* Desktop Padding X */}
            <SliderControl
              value={isDesktop ? props.desktopPaddingX : props.mobilePaddingX}
              label="Desktop Padding Horizontal"
              stack={true}
              onChange={(val) =>
                setProp((p) =>
                  isDesktop
                    ? (p.desktopPaddingX = val)
                    : (p.desktopPaddingX = val)
                )
              }
            />
          </Section>
        </div>
      </details>
    </div>
  );
};
