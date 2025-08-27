import React, { useState } from "react";
import { useNode, Element } from "@craftjs/core";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Menu } from "lucide-react";
import { Logo } from "./Logo";
import { MenuItems } from "./MenuItems";
import { IconButtons } from "./IconButtons";
import { useViewport } from "@/Context/ViewportContext.jsx";
import { cn } from "@/lib/utils.js";
import { Switch } from "@/components/ui/switch";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ColorPicker from "@/components/ui/ColorPicker.jsx";

export const NavbarContent = ({
  children,
  backgroundColor,
  paddingY,
  paddingX,
  logoPosition,
  showBorder,
  gap = 16,
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={cn(
        "max-w-7xl mx-auto flex items-center justify-between relative",
        showBorder && "border-b"
      )}
      style={{
        backgroundColor,
        padding: `${paddingY}px ${paddingX}px`,
        gap: `${gap}px`,
      }}
    >
      {children}
    </div>
  );
};

export const NavigationBar = () => {
  const {
    connectors: { connect, drag },
  } = useNode();

  const { viewport } = useViewport();
  const isMobile = viewport === "mobile";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Element
      is="div"
      id="Hero-Content-1"
      canvas
      ref={(ref) => connect(drag(ref))}
      className={cn("w-full relative ")}
    >
      <Element
        id="Navbar-Content"
        is={NavbarContent}
        canvas
        custom={{
          displayName: "Navigation Bar",
        }}
      >
        {isMobile && (
          <button onClick={() => setMenuOpen(!menuOpen)} className="mr-2">
            <Menu className="w-6 h-6" />
          </button>
        )}

        <Element is={Logo} id="logo_area" />
        {!isMobile && <Element id="menu_area" is={MenuItems} />}
        <Element id="icons_area" is={IconButtons} />

        {isMobile && menuOpen && (
          <div className="mt-4 flex flex-col space-y-3 border-t pt-3">
            <Element id="mobile_menu_area" is={MenuItems} />
          </div>
        )}
      </Element>
    </Element>
  );
};

export const NavigationBarSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <Card>
      <CardContent className="space-y-6 mt-4">
        <div className="space-y-4 p-3 rounded-md border bg-gray-50">
          <div className="flex items-center justify-between">
            <Label>Show Bottom Border</Label>
            <Switch
              checked={props.showBorder}
              onCheckedChange={(v) => setProp((p) => (p.showBorder = v))}
            />
          </div>
          <Label>Background Color</Label>
          <ColorPicker
            label="Background Color"
            value={props.backgroundColor}
            onChange={(val) => setProp((p) => (p.backgroundColor = val))}
          />
        </div>
        <div className="space-y-4 p-3 rounded-md border bg-gray-50">
          <Label className="block mb-2 font-medium">Padding</Label>
          <div className="space-y-2">
            <Label>Horizontal</Label>
            <div className="flex items-center gap-2">
              <Slider
                defaultValue={[props.paddingX]}
                min={0}
                max={50}
                step={1}
                onValueChange={(v) => setProp((p) => (p.paddingX = v[0]))}
              />
              <Input
                type="number"
                min={0}
                max={50}
                className="w-20 h-8 text-right"
                value={props.paddingX}
                onChange={(e) =>
                  setProp((p) => (p.paddingX = parseInt(e.target.value)))
                }
              />
              <span className="text-sm text-gray-500">px</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Vertical</Label>
            <div className="flex items-center gap-2">
              <Slider
                defaultValue={[props.paddingY]}
                min={0}
                max={50}
                step={1}
                onValueChange={(v) => setProp((p) => (p.paddingY = v[0]))}
              />
              <Input
                type="number"
                min={0}
                max={50}
                className="w-20 h-8 text-right"
                value={props.paddingY}
                onChange={(e) =>
                  setProp((p) => (p.paddingY = parseInt(e.target.value)))
                }
              />
              <span className="text-sm text-gray-500">px</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Gap</Label>
            <div className="flex items-center gap-2">
              <Slider
                defaultValue={[props.gap]}
                min={0}
                max={50}
                step={1}
                onValueChange={(v) => setProp((p) => (p.gap = v[0]))}
              />
              <Input
                type="number"
                min={0}
                max={50}
                className="w-20 h-8 text-right"
                value={props.gap}
                onChange={(e) =>
                  setProp((p) => (p.gap = parseInt(e.target.value)))
                }
              />
              <span className="text-sm text-gray-500">px</span>
            </div>
          </div>
        </div>

        {/* <div className="space-y-4 p-3 rounded-md border bg-gray-50">
          <Label className="block mb-2 font-medium">Logo Position</Label>
          <Tabs
            value={props.logoPosition}
            onValueChange={(val) => setProp((p) => (p.logoPosition = val))}
          >
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="left">Left</TabsTrigger>
              <TabsTrigger value="center">Center</TabsTrigger>
              <TabsTrigger value="right">Right</TabsTrigger>
            </TabsList>
          </Tabs>
        </div> */}
      </CardContent>
    </Card>
  );
};

NavbarContent.craft = {
  props: {
    backgroundColor: "#ffffff",
    paddingX: 20,
    paddingY: 10,
    logoPosition: "left",
    showBorder: true,
    gap: 16,
  },
  related: {
    settings: NavigationBarSettings,
  },
};
