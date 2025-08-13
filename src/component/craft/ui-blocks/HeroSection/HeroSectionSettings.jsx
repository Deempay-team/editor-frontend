import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SliderControl } from "./SliderControl";
import { useViewport } from "@/Context/ViewportContext";
import { ChevronDownIcon } from "lucide-react";
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

export const HeroSectionSettings = () => {
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
      <Section title="Media">
        {/* Type */}

        <Tabs
          defaultValue={props.backgroundType}
          onValueChange={(value) => setProp((p) => (p.backgroundType = value))}
        >
          <div className=" flex items-center justify-between w-full mb-2 transition-all duration-1000 ease-in-out">
            <Label className="">Type</Label>
            <TabsList className="w-[70%]">
              <TabsTrigger value="color" className="flex-1 px-0">
                Color
              </TabsTrigger>
              <TabsTrigger value="image" className="flex-1 px-0">
                Image
              </TabsTrigger>
              <TabsTrigger value="video" className="flex-1 px-0">
                Video
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="color">
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
          </TabsContent>

          {/* Image tab */}
          <TabsContent value="image">
            <div className="flex flex-col gap-4">
              {/* Image Upload */}
              <div className="flex items-center justify-between gap-2 w-full">
                <Label className="">Image</Label>
                <Input
                  type="file"
                  accept="image/*"
                  className=" w-[70%]"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const url = URL.createObjectURL(file);
                      setProp((p) => (p.backgroundSrc = url));
                    }
                  }}
                />
              </div>

              {/* Background Size */}
              <div className="flex items-center justify-between gap-2 w-full">
                <Label className="">Size</Label>
                <Tabs
                  defaultValue={props.backgroundSize || "cover"}
                  onValueChange={(value) =>
                    setProp((p) => (p.backgroundSize = value))
                  }
                  className=" w-[70%]"
                >
                  <TabsList className="w-full">
                    <TabsTrigger value="cover" className="flex-1">
                      Cover
                    </TabsTrigger>
                    <TabsTrigger value="contain" className="flex-1">
                      Contain
                    </TabsTrigger>
                    <TabsTrigger value="auto" className="flex-1">
                      Auto
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {/* Background Position */}
              <div className="flex items-center justify-between gap-2 w-full">
                <Label className="">Position</Label>
                <Select
                  value={props.backgroundPosition || "center"}
                  onValueChange={(value) =>
                    setProp((p) => (p.backgroundPosition = value))
                  }
                >
                  <SelectTrigger className="w-[70%]">
                    <SelectValue placeholder="Select position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="center">Center</SelectItem>
                    <SelectItem value="top">Top</SelectItem>
                    <SelectItem value="bottom">Bottom</SelectItem>
                    <SelectItem value="left">Left</SelectItem>
                    <SelectItem value="right">Right</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Overlay Opacity */}
              <div className="">
                <SliderControl
                  value={props.overlayOpacity}
                  label="Overlay Opacity"
                  min={10}
                  max={100}
                  step={10}
                  stack={true}
                  extension="%"
                  onChange={(val) => setProp((p) => (p.overlayOpacity = val))}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="video">
            <div className="flex flex-col gap-4">
              {/* File Upload */}
              <div className="flex items-center justify-between gap-2">
                <Label className="">Video</Label>
                <Input
                  type="file"
                  accept="video/*"
                  className=" w-[70%]"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const url = URL.createObjectURL(file);
                      setProp((p) => (p.backgroundSrc = url));
                    }
                  }}
                />
              </div>

              {/* YouTube / External Link */}
              <div className="flex items-center justify-between gap-2">
                <Label className="">Link</Label>
                <Input
                  type="text"
                  placeholder="https://youtube.com/..."
                  value={
                    props.backgroundSrc?.startsWith("http")
                      ? props.backgroundSrc
                      : ""
                  }
                  onChange={(e) => {
                    setProp((p) => (p.backgroundSrc = e.target.value));
                  }}
                  className="w-[70%]"
                />
              </div>

              {/* Overlay Opacity */}
              <SliderControl
                value={props.overlayOpacity}
                label="Overlay Opacity"
                min={10}
                max={100}
                step={10}
                stack={true}
                extension="%"
                onChange={(val) => setProp((p) => (p.overlayOpacity = val))}
              />
            </div>
          </TabsContent>
        </Tabs>
      </Section>

      {/* Desktop Settings */}
      <details className="group">
        <summary className="flex items-center justify-between border-b border-gray-200 py-2 px-0 cursor-pointer list-none ">
          <h3 className="text-xs font-semibold text-gray-800 uppercase tracking-wide">
            Desktop Settings
          </h3>
          <ChevronDownIcon className="h-4 w-4 stroke-current text-gray-400 rotate-0 group-open:rotate-180 transition-transform" />
        </summary>
        <div className=" px-0 py-0 mb-0">
          <Section title="Layout" className=" border-b border-gray-200 pb-5">
            {/* Direction */}
            <div className=" flex items-center justify-between w-full">
              <Label className="w-[30%]">Direction</Label>
              <Tabs
                defaultValue={props.desktopDirection}
                onValueChange={(val) =>
                  setProp((p) => (p.desktopDirection = val))
                }
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
                {props.desktopDirection === "vertical"
                  ? "Alignment"
                  : "Position"}
              </Label>
              <Tabs
                defaultValue={props.desktopAlignment}
                onValueChange={(value) =>
                  value && setProp((props) => (props.desktopAlignment = value))
                }
                className="w-[70%]"
              >
                <TabsList className="w-full">
                  {props.desktopDirection === "vertical" ? (
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
                {props.desktopDirection === "vertical"
                  ? "Position"
                  : "Alignment"}
              </Label>
              <Tabs
                defaultValue={props.desktopPosition}
                onValueChange={(value) =>
                  setProp((props) => (props.desktopPosition = value))
                }
                className="w-[70%]"
              >
                <TabsList className="w-full">
                  {props.desktopDirection === "vertical" ? (
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

      {/* Mobile Settings */}
      <details className="group">
        <summary className="flex items-center justify-between border-b border-gray-200 py-2 px-0 cursor-pointer list-none ">
          <h3 className="text-xs font-semibold text-gray-800 uppercase tracking-wide">
            Mobile Settings
          </h3>
          <ChevronDownIcon className="h-4 w-4 stroke-current text-gray-400 rotate-0 group-open:rotate-180 transition-transform" />
        </summary>
        <div className=" px-0 py-0 mb-0">
          <Section title="Layout" className=" border-b border-gray-200 pb-5">
            {/* Direction */}
            <div className=" flex items-center justify-between w-full">
              <Label className="w-[30%]">Direction</Label>
              <Tabs
                defaultValue={props.mobileDirection}
                onValueChange={(val) =>
                  setProp((p) => (p.mobileDirection = val))
                }
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
                {props.mobileDirection === "vertical"
                  ? "Alignment"
                  : "Position"}
              </Label>
              <Tabs
                defaultValue={props.mobileAlignment}
                onValueChange={(value) =>
                  value && setProp((props) => (props.mobileAlignment = value))
                }
                className="w-[70%]"
              >
                <TabsList className="w-full">
                  {props.mobileDirection === "vertical" ? (
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
                {props.mobileDirection === "vertical"
                  ? "Position"
                  : "Alignment"}
              </Label>
              <Tabs
                defaultValue={props.mobilePosition}
                onValueChange={(value) =>
                  setProp((props) => (props.mobilePosition = value))
                }
                className="w-[70%]"
              >
                <TabsList className="w-full">
                  {props.mobileDirection === "vertical" ? (
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
          </Section>

          <Section title="Padding" className="mb-4">
            {/* Desktop Padding Y */}
            <SliderControl
              value={isDesktop ? props.desktopPaddingY : props.mobilePaddingY}
              label="Padding Vertical"
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
              label="Padding Horizontal"
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
