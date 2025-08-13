"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HexColorPicker } from "react-colorful";
import { cn } from "@/lib/utils";
import { Pipette } from "lucide-react";

// === Color format conversions ===
function hexToRgb(hex) {
  const bigint = parseInt(hex.replace("#", ""), 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}

function rgbToHex({ r, g, b }) {
  return (
    "#" +
    [r, g, b]
      .map((x) => Math.max(0, Math.min(255, x)).toString(16).padStart(2, "0"))
      .join("")
  );
}

function rgbToHsb({ r, g, b }) {
  r /= 255;
  g /= 255;
  b /= 255;
  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    v = max;
  let d = max - min;
  s = max === 0 ? 0 : d / max;
  if (max === min) h = 0;
  else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    b: Math.round(v * 100),
  };
}

function hsbToRgb({ h, s, b }) {
  s /= 100;
  b /= 100;
  let k = (n) => (n + h / 60) % 6;
  let f = (n) => b - b * s * Math.max(Math.min(k(n), 4 - k(n), 1), 0);
  return {
    r: Math.round(f(5) * 255),
    g: Math.round(f(3) * 255),
    b: Math.round(f(1) * 255),
  };
}

export function CustomColorPicker({ value, onValueChange, open, onClose }) {
  const [color, setColor] = useState(value || "#ffffff");
  const [tab, setTab] = useState("hex");
  const [tempColor, setTempColor] = useState(color);
  //   console.log("color", color);
  //   console.log("value", value);

  // Whenever the picker opens, snapshot the current value
  useEffect(() => {
    if (open) {
      setTempColor(value);
    }
  }, [open]);

  const rgb = hexToRgb(color);
  const hsb = rgbToHsb(rgb);

  const updateColor = (newColor) => {
    setColor(newColor);
    onValueChange?.(newColor);
  };

  const handleCancel = () => {
    onValueChange(tempColor);
    onClose();
  };

  const handleApply = () => {
    onValueChange(color);
    console.log("called");
    onClose();
  };

  const eyedropperPick = async () => {
    if ("EyeDropper" in window) {
      const eye = new window.EyeDropper();
      try {
        const result = await eye.open();
        updateColor(result.sRGBHex);
      } catch {
        console.warn("Eyedropper cancelled");
      }
    } else {
      alert("Your browser does not support the EyeDropper API.");
    }
  };

  if (!open) return null;

  return (
    <div
      className={cn(
        "fixed bg-white shadow-lg border rounded-t-lg p-4 space-y-4 z-50",
        "animate-in slide-in-from-bottom-2"
      )}
      style={{ width: 260, bottom: 0, right: 0 }}
    >
      <div className="font-medium">Custom Color</div>

      <HexColorPicker color={color} onChange={updateColor} />

      <Tabs value={tab} onValueChange={setTab} className="w-full">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="hex">HEX</TabsTrigger>
          <TabsTrigger value="rgb">RGB</TabsTrigger>
          <TabsTrigger value="hsb">HSB</TabsTrigger>
        </TabsList>

        {/* HEX */}
        <TabsContent value="hex" className="mt-3 flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={eyedropperPick}>
            <Pipette className="w-5 h-5 stroke-current text-primary" />
          </Button>
          <Input value={color} onChange={(e) => updateColor(e.target.value)} />
        </TabsContent>

        {/* RGB */}
        <TabsContent value="rgb" className="mt-3 flex gap-2">
          {["r", "g", "b"].map((key) => (
            <Input
              key={key}
              type="number"
              value={rgb[key]}
              onChange={(e) => {
                const updated = { ...rgb, [key]: Number(e.target.value) };
                updateColor(rgbToHex(updated));
              }}
            />
          ))}
        </TabsContent>

        {/* HSB */}
        <TabsContent value="hsb" className="mt-3 flex gap-2">
          {["h", "s", "b"].map((key) => (
            <Input
              key={key}
              type="number"
              value={hsb[key]}
              onChange={(e) => {
                const updated = { ...hsb, [key]: Number(e.target.value) };
                updateColor(rgbToHex(hsbToRgb(updated)));
              }}
            />
          ))}
        </TabsContent>
      </Tabs>

      <div className="flex justify-between pt-2 border-t">
        <Button variant="outline" size="sm" onClick={() => handleCancel()}>
          Cancel
        </Button>
        <Button size="sm" onClick={() => handleApply()}>
          Apply
        </Button>
      </div>
    </div>
  );
}
