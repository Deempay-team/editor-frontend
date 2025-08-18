import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Droplet } from "lucide-react";
import { isColorDark } from '@/utils/isColorDark';


export function CustomColorPicker({ color, onChange, borderColor = "#3b82f6" }) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("hex");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className={`flex-1 rounded-[8px] flex items-center px-[10px] justify-end cursor-pointer border h-[40px] hover:shadow-[inset_0_0_0_2px_${borderColor}]`}
          style={{ backgroundColor: color }}
        >
          <Droplet
            className={`w-4 h-4 ${isColorDark(color) ? "text-white" : "text-black"}`}
          />
        </div>
      </PopoverTrigger>

      <PopoverContent className="w-64" align="start">
        <h3 className="text-sm font-semibold mb-2">Custom Color</h3>

        <div className="mb-4 w-full">
          <HexColorPicker color={color} onChange={onChange} style={{ width: '100%' }} />
        </div>

        <Tabs defaultValue="hex" value={mode} onValueChange={setMode}>
          <TabsList className="grid grid-cols-3 mb-3 w-full">
            <TabsTrigger value="hex">HEX</TabsTrigger>
            <TabsTrigger value="rgb">RGB</TabsTrigger>
            <TabsTrigger value="hsb">HSB</TabsTrigger>
          </TabsList>

          <TabsContent value="hex">
            <Input value={color.toUpperCase()} onChange={(e) => onChange(e.target.value)} />
          </TabsContent>

          <TabsContent value="rgb">
            <Input
              value={hexToRgbString(color)}
              onChange={(e) => onChange(rgbStringToHex(e.target.value))}
            />
          </TabsContent>

          <TabsContent value="hsb">
            <Input
              value={hexToHsbString(color)}
              onChange={(e) => onChange(hsbStringToHex(e.target.value))}
            />
          </TabsContent>
        </Tabs>

        <div className="flex justify-end gap-2 hidden mt-3">
          <Button variant="outline" size="sm" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button size="sm" onClick={() => setOpen(false)}>
            Apply
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

// --- Conversions ---
function hexToRgbString(hex) {
  const bigint = parseInt(hex.replace("#", ""), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}

function rgbStringToHex(rgb) {
  const [r, g, b] = rgb.split(",").map((n) => parseInt(n.trim(), 10));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

function hexToHsbString(hex) {
  let r = parseInt(hex.slice(1, 3), 16) / 255;
  let g = parseInt(hex.slice(3, 5), 16) / 255;
  let b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const delta = max - min;
  let h = 0, s = max === 0 ? 0 : delta / max, v = max;

  if (delta !== 0) {
    if (max === r) h = ((g - b) / delta) % 6;
    else if (max === g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;
    h = Math.round(h * 60);
    if (h < 0) h += 360;
  }
  return `${h}, ${Math.round(s * 100)}%, ${Math.round(v * 100)}%`;
}

function hsbStringToHex(hsb) {
  let [h, s, v] = hsb.split(",").map((n) => parseFloat(n));
  s /= 100;
  v /= 100;
  let c = v * s;
  let x = c * (1 - Math.abs((h / 60) % 2 - 1));
  let m = v - c;
  let r = 0, g = 0, b = 0;

  if (0 <= h && h < 60) [r, g, b] = [c, x, 0];
  else if (60 <= h && h < 120) [r, g, b] = [x, c, 0];
  else if (120 <= h && h < 180) [r, g, b] = [0, c, x];
  else if (180 <= h && h < 240) [r, g, b] = [0, x, c];
  else if (240 <= h && h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return rgbStringToHex(`${r}, ${g}, ${b}`);
}
