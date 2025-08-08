// components/IconButtons.js
import React from "react";
import { useNode } from "@craftjs/core";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Search, User, ShoppingCart } from "lucide-react";

export const IconButtons = ({ showSearch, showAccount, showCart, cartCount, iconColor }) => {
    const { connectors: { connect, drag } } = useNode();
    const iconStyle = { color: iconColor };

    return (
        <div ref={ref => connect(drag(ref))} className="flex items-center space-x-4">
            {showSearch && <Search className="w-5 h-5 cursor-pointer" style={iconStyle} />}
            {showAccount && <User className="w-5 h-5 cursor-pointer" style={iconStyle} />}
            {showCart && (
                <div className="relative cursor-pointer" style={iconStyle}>
                    <ShoppingCart className="w-5 h-5" />
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-1.5 rounded-full">
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
                <div className="flex items-center justify-between">
                    <Label>Icon Color</Label>
                    <Input
                        type="color"
                        className="w-24"
                        value={props.iconColor}
                        onChange={(e) => setProp((p) => (p.iconColor = e.target.value))}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <Label>Show Search</Label>
                    <Switch
                        checked={props.showSearch}
                        onCheckedChange={(v) => setProp((p) => (p.showSearch = v))}
                    />
                </div>
                <div className="flex items-center justify-between">
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
                <Label>Cart Count</Label>
                <Slider
                    defaultValue={[props.cartCount]}
                    min={0}
                    max={20}
                    step={1}
                    onValueChange={(v) => setProp((p) => (p.cartCount = v[0]))}
                />
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
    },
    related: {
        settings: IconButtonsSettings,
    },
};