import React from "react";
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

const colorSchemes = [
  { label: "Dark", value: "#1f2937" },
  { label: "Light", value: "#f9fafb" },
  { label: "Primary", value: "#3b82f6" },
  { label: "Secondary", value: "#6b7280" },
  { label: "Muted", value: "#9ca3af" },
  { label: "Accent", value: "#f472b6" },
  { label: "Info", value: "#2563eb" },
  { label: "Success", value: "#10b981" },
  { label: "Warning", value: "#f59e0b" },
  { label: "Danger", value: "#ef4444" },
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

export const AnnouncementBarSettings = () => {
  const {
    props,
    actions: { setProp },
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="bg-white space-y-4">
      <Section title="Background">
        <div className="space-y-2">
          <Label className="text-sm font-medium">Background Color</Label>
          <Select
            value={props.background}
            onValueChange={(color) => setProp((p) => (p.background = color))}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose a color" />
            </SelectTrigger>
            <SelectContent>
              {colorSchemes.map((scheme) => (
                <SelectItem key={scheme.value} value={scheme.value}>
                  <div className="flex items-center space-x-2">
                    <span
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: scheme.value }}
                    />
                    <span>{scheme.label}</span>
                  </div>
                </SelectItem>
              ))}
              <div className="border-t mt-2 pt-2 space-y-2">
                <Label className="text-xs text-gray-500">Custom Color</Label>
                <Input
                  type="color"
                  value={props.background}
                  onChange={(e) =>
                    setProp((p) => (p.background = e.target.value))
                  }
                  className="mt-1 h-8 w-full border rounded"
                />
              </div>
            </SelectContent>
          </Select>
        </div>
      </Section>
      <Section title="Typography">
        <div className="space-y-2">
          <Label>Text Alignment</Label>
          <Select
            value={props.textAlign}
            onValueChange={(align) => setProp((p) => (p.textAlign = align))}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select alignment" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="left">Left</SelectItem>
              <SelectItem value="center">Center</SelectItem>
              <SelectItem value="right">Right</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Section>
      <Section title="Layout">
        <div className="space-y-2">
          <Label>Padding Y</Label>
          <Slider
            min={0}
            max={30}
            value={[props.paddingy]}
            onValueChange={(val) => setProp((p) => (p.paddingy = val[0]))}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label>Padding X</Label>
          <Slider
            min={0}
            max={50}
            value={[props.paddingx]}
            onValueChange={(val) => setProp((p) => (p.paddingx = val[0]))}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label>Border Radius</Label>
          <Slider
            min={0}
            max={50}
            value={[props.borderRadius || 0]}
            onValueChange={(val) => setProp((p) => (p.borderRadius = val[0]))}
            className="w-full"
          />
        </div>
      </Section>
      <Section title="Height">
        <div className="space-y-2">
          <Label>Auto Height</Label>
          <Switch
            checked={props.height === "auto"}
            onCheckedChange={(isAuto) =>
              setProp((p) => {
                p.height = isAuto ? "auto" : "20";
              })
            }
          />
        </div>
        {props.height !== "auto" && (
          <div className="space-y-2">
            <Label>Height (px)</Label>
            <div className="flex items-center space-x-3">
              <Slider
                min={20}
                max={300}
                step={1}
                value={[Number(props.height) || 20]}
                onValueChange={(val) =>
                  setProp((p) => (p.height = String(val[0])))
                }
                className="flex-1"
              />
              <Input
                type="number"
                min={20}
                max={300}
                value={props.height === "" ? "" : Number(props.height)}
                placeholder="20"
                onChange={(e) => {
                  const val = e.target.value;
                  setProp((p) => {
                    p.height =
                      val === ""
                        ? ""
                        : String(
                            Math.max(20, Math.min(300, parseInt(val, 10)))
                          );
                  });
                }}
                className="w-20"
              />
            </div>
          </div>
        )}
      </Section>
      <Section title="Extras">
        <div className="space-y-2">
          <Label>Enable Shadow</Label>
          <Switch
            checked={props.shadow || false}
            onCheckedChange={(val) => setProp((p) => (p.shadow = val))}
          />
        </div>

        <div className="space-y-2">
          <Label>Show Icon</Label>
          <Switch
            checked={props.showIcon}
            onCheckedChange={(val) => setProp((p) => (p.showIcon = val))}
          />
        </div>
      </Section>
    </div>
  );
};
