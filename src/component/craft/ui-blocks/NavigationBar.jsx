import React, { useState, useEffect } from "react";
import { useNode } from "@craftjs/core";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Menu, Search, User, ShoppingCart, Trash2, Plus } from "lucide-react";

export const NavigationBar = ({
                                  logoSrc,
                                  logoLink,
                                  menuItems,
                                  showSearch,
                                  showAccount,
                                  showCart,
                                  cartCount,
                                  backgroundColor,
                                  paddingY,
                                  paddingX,
                              }) => {
    const {
        connectors: { connect, drag },
    } = useNode();
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <div
            ref={(ref) => connect(drag(ref))}
            className="w-full border-b"
            style={{
                backgroundColor,
                padding: `${paddingY}px ${paddingX}px`,
            }}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Mobile: Hamburger */}
                {isMobile && (
                    <button onClick={() => setMenuOpen(!menuOpen)} className="mr-2">
                        <Menu className="w-6 h-6" />
                    </button>
                )}

                {/* Logo */}
                <a href={logoLink} className="flex-shrink-0">
                    <img src={logoSrc} alt="Logo" className="h-8" />
                </a>

                {/* Desktop Menu */}
                {!isMobile && (
                    <nav className="flex space-x-6">
                        {menuItems.map((item, i) => (
                            <a
                                key={i}
                                href={item.link}
                                className={`text-sm hover:text-orange-500 ${
                                    item.active ? "text-orange-500 font-semibold" : ""
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                )}

                <div className="flex items-center space-x-4">
                    {showSearch && <Search className="w-5 h-5 cursor-pointer" />}
                    {showAccount && <User className="w-5 h-5 cursor-pointer" />}
                    {showCart && (
                        <div className="relative cursor-pointer">
                            <ShoppingCart className="w-5 h-5" />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-1.5 rounded-full">
                  {cartCount}
                </span>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {isMobile && menuOpen && (
                <div className="mt-4 flex flex-col space-y-3 border-t pt-3">
                    {menuItems.map((item, i) => (
                        <a
                            key={i}
                            href={item.link}
                            className={`text-sm hover:text-orange-500 ${
                                item.active ? "text-orange-500 font-semibold" : ""
                            }`}
                        >
                            {item.label}
                        </a>
                    ))}
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

    const addMenuItem = () => {
        setProp((p) => {
            p.menuItems = [
                ...p.menuItems,
                { label: "New Item", link: "#", active: false },
            ];
        });
    };

    const updateMenuItem = (index, field, value) => {
        setProp((p) => {
            const newMenuItems = [...p.menuItems];
            newMenuItems[index] = { ...newMenuItems[index], [field]: value };
            p.menuItems = newMenuItems;
        });
    };

    const removeMenuItem = (index) => {
        setProp((p) => {
            p.menuItems = p.menuItems.filter((_, i) => i !== index);
        });
    };

    return (
        <Card>
            <CardContent className="space-y-4 mt-4">
                <Label>Logo URL</Label>
                <Input
                    value={props.logoSrc}
                    onChange={(e) => setProp((p) => (p.logoSrc = e.target.value))}
                />

                <Label>Logo Link</Label>
                <Input
                    value={props.logoLink}
                    onChange={(e) => setProp((p) => (p.logoLink = e.target.value))}
                />

                <Label>Background Color</Label>
                <Input
                    type="color"
                    value={props.backgroundColor}
                    onChange={(e) => setProp((p) => (p.backgroundColor = e.target.value))}
                />

                <Label>Padding X</Label>
                <Slider
                    defaultValue={[props.paddingX]}
                    min={0}
                    max={50}
                    step={1}
                    onValueChange={(v) => setProp((p) => (p.paddingX = v[0]))}
                />

                <Label>Padding Y</Label>
                <Slider
                    defaultValue={[props.paddingY]}
                    min={0}
                    max={50}
                    step={1}
                    onValueChange={(v) => setProp((p) => (p.paddingY = v[0]))}
                />

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

                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <Label>Menu Items</Label>
                        <Button size="sm" onClick={addMenuItem}>
                            <Plus className="w-4 h-4 mr-1" /> Add Item
                        </Button>
                    </div>
                    {props.menuItems.map((item, index) => (
                        <div key={index} className="border p-3 rounded-md space-y-2">
                            <div className="flex justify-between items-center">
                                <Label>Menu Item {index + 1}</Label>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => removeMenuItem(index)}
                                >
                                    <Trash2 className="w-4 h-4 text-red-500" />
                                </Button>
                            </div>
                            <Label>Label</Label>
                            <Input
                                value={item.label}
                                onChange={(e) => updateMenuItem(index, "label", e.target.value)}
                            />
                            <Label>Link</Label>
                            <Input
                                value={item.link}
                                onChange={(e) => updateMenuItem(index, "link", e.target.value)}
                            />
                            <div className="flex items-center justify-between">
                                <Label>Active</Label>
                                <Switch
                                    checked={item.active}
                                    onCheckedChange={(v) => updateMenuItem(index, "active", v)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

NavigationBar.craft = {
    props: {
        logoSrc: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Coca-Cola_logo.svg",
        logoLink: "#",
        menuItems: [
            { label: "Home", link: "#", active: true },
            { label: "Products", link: "#", active: false },
            { label: "Contact", link: "#", active: false },
            { label: "About us", link: "#", active: false },
        ],
        showSearch: true,
        showAccount: true,
        showCart: true,
        cartCount: 1,
        backgroundColor: "#ffffff",
        paddingX: 20,
        paddingY: 10,
    },
    related: {
        settings: NavigationBarSettings,
    },
};