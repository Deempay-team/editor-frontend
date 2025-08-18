import React, { useState } from "react";
import { useNode, Canvas } from "@craftjs/core";
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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ColorPicker from "@/components/ui/ColorPicker.jsx";


export const NavigationBar = ({ backgroundColor, paddingY, paddingX, logoPosition, showBorder }) => {
    const {
        connectors: { connect, drag },
    } = useNode();
    const { viewport } = useViewport();
    const isMobile = viewport === "mobile";
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div
            ref={(ref) => connect(drag(ref))}
            className={cn("w-full relative", showBorder && "border-b")}
            style={{
                backgroundColor,
                padding: `${paddingY}px ${paddingX}px`,
            }}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between relative">
                {isMobile && (
                    <button onClick={() => setMenuOpen(!menuOpen)} className="mr-2">
                        <Menu className="w-6 h-6" />
                    </button>
                )}

                {logoPosition === "left" && (
                    <>
                        <Canvas id="logo_area" is={Logo}>
                            <Logo />
                        </Canvas>
                        {!isMobile && (
                            <Canvas id="menu_area" is={MenuItems}>
                                <MenuItems />
                            </Canvas>
                        )}
                        <Canvas id="icons_area" is={IconButtons}>
                            <IconButtons />
                        </Canvas>
                    </>
                )}
                {logoPosition === "center" && (
                    <>
                        <div className="flex items-start justify-start">
                            {!isMobile && (
                                <Canvas id="menu_area" is={MenuItems}>
                                    <MenuItems />
                                </Canvas>
                            )}
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2">
                            <Canvas id="logo_area" is={Logo}>
                                <Logo />
                            </Canvas>
                        </div>
                        <div className="flex items-center">
                            <Canvas id="icons_area" is={IconButtons}>
                                <IconButtons />
                            </Canvas>
                        </div>
                    </>
                )}

                {logoPosition === "right" && (
                    <>
                        {!isMobile && (
                            <Canvas id="menu_area" is={MenuItems}>
                                <MenuItems />
                            </Canvas>
                        )}
                        <Canvas id="logo_area" is={Logo}>
                            <Logo />
                        </Canvas>
                        <Canvas id="icons_area" is={IconButtons}>
                            <IconButtons />
                        </Canvas>

                    </>
                )}
            </div>

            {isMobile && menuOpen && (
                <div className="mt-4 flex flex-col space-y-3 border-t pt-3">
                    <Canvas id="mobile_menu_area" is={MenuItems}>
                        <MenuItems />
                    </Canvas>
                </div>
            )}
        </div>
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
                </div>

                <div className="space-y-4 p-3 rounded-md border bg-gray-50">
                    <Label className="block mb-2 font-medium">Logo Position</Label>
                    <Tabs value={props.logoPosition} onValueChange={(val) => setProp((p) => (p.logoPosition = val))}>
                        <TabsList className="w-full grid grid-cols-3">
                            <TabsTrigger value="left">Left</TabsTrigger>
                            <TabsTrigger value="center">Center</TabsTrigger>
                            <TabsTrigger value="right">Right</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
            </CardContent>
        </Card>
    );
 
};

NavigationBar.craft = {
    props: {
        backgroundColor: "#ffffff",
        paddingX: 20,
        paddingY: 10,
        logoPosition: "left",
        showBorder: true,
    },
    related: {
        settings: NavigationBarSettings,
    },
};
