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

const colorSchemes = [
  { label: "Light", value: "#ffffff" },
  { label: "Dark", value: "#111827" },
  { label: "Primary", value: "#3b82f6" },
  { label: "Secondary", value: "#6b7280" },
  { label: "Custom", value: "#FF4D00" },
];

const Section = ({ title, children }) => (
  <div className="space-y-3">
    <h3 className="text-xs font-semibold text-gray-800 uppercase tracking-wide">
      {title}
    </h3>
    <div className="space-y-5">{children}</div>
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

      <Section title="Layout">
        {/* Direction */}
        <div className=" flex items-center justify-between  w-full">
          <Label>Direction</Label>
          <Tabs
            defaultValue={props.direction}
            onValueChange={(val) => setProp((p) => (p.direction = val))}
          >
            <TabsList>
              <TabsTrigger value="vertical">Vertical</TabsTrigger>
              <TabsTrigger value="horizontal">Horizontal</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Alignment */}
        <div className=" flex items-center justify-between w-full transition-all duration-1000 ease-in-out">
          <Label>
            {props.direction === "vertical" ? "Alignment" : "Position"}
          </Label>
          <Tabs
            defaultValue={props.alignment}
            onValueChange={(value) =>
              value && setProp((props) => (props.alignment = value))
            }
          >
            <TabsList>
              {props.direction === "vertical" ? (
                <>
                  <TabsTrigger value="left">Left</TabsTrigger>
                  <TabsTrigger value="center">Center</TabsTrigger>
                  <TabsTrigger value="right">Right</TabsTrigger>
                </>
              ) : (
                <>
                  <TabsTrigger value="left">Top</TabsTrigger>
                  <TabsTrigger value="center">Center</TabsTrigger>
                  <TabsTrigger value="right">Bottom</TabsTrigger>
                </>
              )}
            </TabsList>
          </Tabs>
        </div>

        {/* Position */}
        <div className=" flex items-center justify-between w-full transition-all duration-1000 ease-in-out">
          <Label>
            {props.direction === "vertical" ? "Position" : "Alignment"}
          </Label>
          <Tabs
            defaultValue={props.position}
            onValueChange={(value) =>
              setProp((props) => (props.position = value))
            }
          >
            <TabsList>
              {props.direction === "vertical" ? (
                <>
                  <TabsTrigger value="top">Top</TabsTrigger>
                  <TabsTrigger value="center">Center</TabsTrigger>
                  <TabsTrigger value="bottom">Bottom</TabsTrigger>
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

        {/* <div className="space-y-2">
          <Label>Desktop Padding Y</Label>
          <Slider
            min={0}
            max={200}
            value={[props.desktopPaddingY]}
            onValueChange={(val) =>
              setProp((p) => (p.desktopPaddingY = val[0]))
            }
          />
        </div> */}
        <SliderControl
          value={isDesktop ? props.desktopPaddingY : props.mobilePaddingY}
          label="Desktop Padding Vertical"
          stack={true}
          onChange={(val) =>
            setProp((p) =>
              isDesktop ? (p.desktopPaddingY = val) : (p.mobilePaddingY = val)
            )
          }
        />

        <div className="space-y-2">
          <Label>Border Radius</Label>
          <Slider
            min={0}
            max={50}
            value={[props.borderRadius]}
            onValueChange={(val) => setProp((p) => (p.borderRadius = val[0]))}
          />
        </div>

        <div className="space-y-2">
          <Label>Enable Shadow</Label>
          <Switch
            checked={props.shadow}
            onCheckedChange={(val) => setProp((p) => (p.shadow = val))}
          />
        </div>
      </Section>
    </div>
  );
};
