import React from "react";
import { useNode } from "@craftjs/core";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, User, ShoppingCart } from "lucide-react";
import ColorPicker from "@/components/ui/ColorPicker.jsx";
import {Input} from "@/components/ui/input.jsx";

export const IconButtons = ({
                                showSearch,
                                showAccount,
                                showCart,
                                cartCount,
                                iconColor,
                                iconHoverColor,
                                iconSize,
                            }) => {
    const { connectors: { connect, drag } } = useNode();
    const iconBaseStyle = { color: iconColor, width: iconSize, height: iconSize };

    return (
        <div ref={ref => connect(drag(ref))} className="flex items-center space-x-4 ml-2">
            {showSearch && (
                <div
                    className="cursor-pointer transition-colors duration-200"
                    onMouseEnter={(e) => e.currentTarget.style.color = iconHoverColor}
                    onMouseLeave={(e) => e.currentTarget.style.color = iconColor}
                >
                    <Search className="w-5 h-5" style={iconBaseStyle} />
                </div>
            )}
            {showAccount && (
                <div
                    className="cursor-pointer transition-colors duration-200"
                    onMouseEnter={(e) => e.currentTarget.style.color = iconHoverColor}
                    onMouseLeave={(e) => e.currentTarget.style.color = iconColor}
                >
                    <User className="w-5 h-5" style={iconBaseStyle} />
                </div>
            )}
            {showCart && (
                <div
                    className="relative cursor-pointer transition-colors duration-200"
                    onMouseEnter={(e) => e.currentTarget.style.color = iconHoverColor}
                    onMouseLeave={(e) => e.currentTarget.style.color = iconColor}
                >
                    <ShoppingCart className="w-5 h-5" style={iconBaseStyle} />
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold leading-none">
                            {cartCount}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
};

export const IconButtonsSettings = () => {
    const {
        actions: { setProp },
        props,
    } = useNode((node) => ({
        props: node.data.props,
    }));

    return (
        <Card>
            <CardContent className="space-y-4 mt-4">
                <Tabs defaultValue="visibility" className="w-full">
                    <TabsList className="w-full grid grid-cols-2">
                        <TabsTrigger value="visibility">Visibility</TabsTrigger>
                        <TabsTrigger value="style">Style</TabsTrigger>
                    </TabsList>
                    <TabsContent value="visibility" className="space-y-4 mt-4">
                        <div className="flex items-center justify-between">
                            <Label>Show Search</Label>
                            <Switch
                                checked={props.showSearch}
                                onCheckedChange={(v) => setProp((p) => (p.showSearch = v))}
                            />
                        </div>
                        <div className="flex items-center justify-between ">
                            <Label>Show Account</Label>
                            <Switch
                                checked={props.showAccount}
                                onCheckedChange={(v) => setProp((p) => (p.showAccount = v))}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <Label>Show Cart</Label>
                            <Switch
                                checked={props.showCart}
                                onCheckedChange={(v) => setProp((p) => (p.showCart = v))}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Cart Count</Label>
                            <div className="flex items-center gap-2">
                                <Slider
                                    defaultValue={[props.cartCount]}
                                    min={0}
                                    max={50}
                                    step={1}
                                    onValueChange={(v) => setProp((p) => (p.cartCount = v[0]))}
                                />
                                <Input
                                    type="number"
                                    min=""
                                    max={50}
                                    className="w-20 h-8"
                                    value={props.cartCount}
                                    onChange={(e) => setProp((p) => (p.cartCount = parseInt(e.target.value)))}
                                />
                                <span className="text-sm text-gray-500">px</span>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="style" className="space-y-4 mt-4">
                        <ColorPicker
                            label="Icon Color"
                            value={props.iconColor}
                            onChange={(val) => setProp((p) => (p.iconColor = val))}
                        />
                        <ColorPicker
                            label="Hover Color"
                            value={props.iconHoverColor}
                            onChange={(val) => setProp((p) => (p.iconHoverColor = val))}
                        />
                        <div className="space-y-2">
                            <Label>Icon Size</Label>
                            <div className="flex items-center gap-2">
                                <Slider
                                    defaultValue={[props.iconSize]}
                                    min={0}
                                    max={30}
                                    step={1}
                                    onValueChange={(v) => setProp((p) => (p.iconSize = v[0]))}
                                />
                                <Input
                                    type="number"
                                    min={0}
                                    max={30}
                                    className="w-20 h-8"
                                    value={props.iconSize}
                                    onChange={(e) => setProp((p) => (p.iconSize = parseInt(e.target.value)))}
                                />
                                <span className="text-sm text-gray-500">px</span>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
};

IconButtons.craft = {
    props: {
        showSearch: true,
        showAccount: true,
        showCart: true,
        cartCount: 1,
        iconColor: "#4a5568",
        iconHoverColor: "#F56565",
        iconSize: "20px",
    },
    related: {
        settings: IconButtonsSettings,
    },
};