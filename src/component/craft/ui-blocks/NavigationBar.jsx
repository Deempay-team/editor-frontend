import React, { useState } from "react";
import { useNode, Canvas } from "@craftjs/core";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import { Menu } from "lucide-react";
import { Logo } from "./Logo";
import { MenuItems } from "./MenuItems";
import { IconButtons } from "./IconButtons";
import { useViewport } from "@/Context/ViewportContext.jsx";

export const NavigationBar = ({ backgroundColor, paddingY, paddingX, logoPosition }) => {
    const {
        connectors: { connect, drag },
    } = useNode();
    const { viewport } = useViewport();
    const isMobile = viewport === "mobile";
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div
            ref={(ref) => connect(drag(ref))}
            className="w-full border-b relative"
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

                {/* LEFT SECTION */}
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

                {/* CENTER SECTION */}
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

                {/* RIGHT SECTION */}
                {logoPosition === "right" && (
                    <>
                        {!isMobile && (
                            // <div className="flex items-end justify-end">

                            <Canvas id="menu_area" is={MenuItems}>
                                <MenuItems />
                            </Canvas>
                            // </div>
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
            <CardContent className="space-y-4 mt-4">
                <Label>Background Color</Label>
                <Input
                    type="color"
                    value={props.backgroundColor}
                    onChange={(e) => setProp((p) => (p.backgroundColor = e.target.value))}
                />

                <div className="space-y-2">
                    <Label>Padding X</Label>
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
                        value={props.paddingX}
                        onChange={(e) =>
                            setProp((p) => (p.paddingX = parseInt(e.target.value)))
                        }
                    />
                </div>


                <div className="space-y-2">
                    <Label>Logo Position</Label>
                    <Select
                        value={props.logoPosition}
                        onValueChange={(val) => setProp((p) => (p.logoPosition = val))}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem  value="left">Left</SelectItem>
                            <SelectItem value="center">Center</SelectItem>
                            <SelectItem value="right">Right</SelectItem>
                        </SelectContent>
                    </Select>
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
        logoPosition: "left", // Default
    },
    related: {
        settings: NavigationBarSettings,
    },
};

