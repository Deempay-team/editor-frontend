import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Plus, Trash2, GripVertical, MoreHorizontal, Pencil } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import ColorPicker from "@/components/ui/ColorPicker.jsx";

export const MenuItems = ({
                              menuItems,
                              menuItemColor,
                              menuItemHoverColor,
                              activeItemColor,
                              itemSpacing,
                              textTransform,
                              textAlign,
                              fontWeight,
                              verticalAlign,
                              fontSize,
                          }) => {
    const {
        connectors: { connect, drag },
    } = useNode();

    return (
        <nav
            ref={(ref) => connect(drag(ref))}
            className="flex  ml-2"
            style={{
                flexWrap: "wrap",
                height: "50px",
                width: "100%",
                justifyContent:
                    textAlign === "left"
                        ? "flex-start"
                        : textAlign === "center"
                            ? "center"
                            : "flex-end",
                alignItems:
                    verticalAlign === "top"
                        ? "flex-start"
                        : verticalAlign === "middle"
                            ? "center"
                            : "flex-end",
            }}
        >
            {menuItems.map((item, i) => item.visible && (
                <a
                    key={i}
                    href={item.link}
                    className="text-sm"
                    style={{
                        color: item.active ? activeItemColor : menuItemColor,
                        fontWeight:
                            fontWeight === "normal"
                                ? "400"
                                : fontWeight === "medium"
                                    ? "500"
                                    : "700",
                        fontSize: fontSize,
                        marginRight: i === menuItems.length - 1 ? "0px" : `${itemSpacing}px`,
                        textTransform:
                            textTransform === "default" ? "none" : textTransform,
                    }}
                    onMouseEnter={(e) =>
                        (e.target.style.color = menuItemHoverColor)
                    }
                    onMouseLeave={(e) =>
                        (e.target.style.color = item.active
                            ? activeItemColor
                            : menuItemColor)
                    }
                >
                    {item.label}
                </a>
            ))}
        </nav>
    );
};

export const MenuItemsSettings = () => {
    const { actions: { setProp }, props } = useNode((node) => ({
        props: node.data.props,
    }));

    const [editingItemIndex, setEditingItemIndex] = useState(null);

    const addMenuItem = () => {
        setProp((p) => {
            p.menuItems = [...p.menuItems, { label: "New Item", link: "#", active: false, visible: true }];
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

    const handleRename = (index, newLabel) => {
        updateMenuItem(index, 'label', newLabel);
        setEditingItemIndex(null);
    };

    return (
        <Card>
            <CardContent className="space-y-4">
                <Tabs defaultValue="content" className="w-full">
                    <TabsList className="w-full grid grid-cols-2">
                        <TabsTrigger value="content">Content</TabsTrigger>
                        <TabsTrigger value="style">Style</TabsTrigger>
                    </TabsList>

                    <TabsContent value="content" className="space-y-4 mt-4">
                        <div className="space-y-2">
                            <div className="flex justify-between items-center mb-4">
                                <Label className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                                    Menu Items
                                </Label>
                                <Button
                                    size="sm"
                                    className="flex items-center gap-1"
                                    onClick={addMenuItem}
                                >
                                    <Plus className="w-4 h-4" /> Add Item
                                </Button>
                            </div>
                            {props.menuItems.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center gap-3 p-3 rounded-md transition-colors duration-200 cursor-pointer ${item.active ? 'bg-blue-100 border border-blue-400' : 'bg-gray-100 border border-gray-200 hover:bg-gray-50'}`}
                                    onClick={() => setProp((p) => {
                                        p.menuItems = p.menuItems.map((mi, i) => ({
                                            ...mi,
                                            active: i === index,
                                        }));
                                    })}
                                >
                                    <div className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                                        <GripVertical className="w-4 h-4" />
                                    </div>
                                    {editingItemIndex === index ? (
                                        <Input
                                            value={item.label}
                                            onChange={(e) => updateMenuItem(index, 'label', e.target.value)}
                                            onBlur={(e) => handleRename(index, e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    handleRename(index, e.target.value);
                                                }
                                            }}
                                            className="flex-1 bg-transparent border-none p-0 text-sm focus-visible:ring-0"
                                            autoFocus
                                        />
                                    ) : (
                                        <span className={`flex-1 text-sm ${item.active ? 'font-medium text-blue-600' : 'text-gray-800'}`}>
                                            {item.label}
                                        </span>
                                    )}
                                    <div className="flex items-center gap-2">
                                        <Switch
                                            checked={item.visible}
                                            onCheckedChange={(v) => updateMenuItem(index, 'visible', v)}
                                            onClick={(e) => e.stopPropagation()}
                                            title={item.visible ? "Hide" : "Show"}
                                        />
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className={`rounded-full ${item.active ? 'text-blue-600' : 'text-gray-500'}`}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <MoreHorizontal className="w-4 h-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuItem onClick={() => setEditingItemIndex(index)}>
                                                    <Pencil className="w-4 h-4 mr-2" />
                                                    Edit
                                                </DropdownMenuItem>
                                                <DropdownMenuItem
                                                    className="text-red-500"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        removeMenuItem(index);
                                                    }}
                                                >
                                                    <Trash2 className="w-4 h-4 mr-2" />
                                                    Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="style" className="space-y-4 mt-4">
                        <ColorPicker
                            label="Menu Item Color"
                            value={props.menuItemColor}
                            onChange={(val) => setProp((p) => (p.menuItemColor = val))}
                        />
                        <ColorPicker
                            label="Hover Color"
                            value={props.menuItemHoverColor}
                            onChange={(val) => setProp((p) => (p.menuItemHoverColor = val))}
                        />
                        <ColorPicker
                            label="Active Item Color"
                            value={props.activeItemColor}
                            onChange={(val) => setProp((p) => (p.activeItemColor = val))}
                        />
                        <div className="space-y-2">
                            <Label>Item Spacing</Label>
                            <div className="flex items-center gap-2">
                                <Slider
                                    defaultValue={[props.itemSpacing]}
                                    min={0}
                                    max={50}
                                    step={1}
                                    onValueChange={(v) => setProp((p) => (p.itemSpacing = v[0]))}
                                />
                                <Input
                                    type="number"
                                    min={0}
                                    max={50}
                                    className="w-20 h-8"
                                    value={props.itemSpacing}
                                    onChange={(e) => setProp((p) => (p.itemSpacing = parseInt(e.target.value)))}
                                />
                                <span className="text-sm text-gray-500">px</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label>Font Size</Label>
                            <Select
                                value={props.fontSize}
                                onValueChange={(val) => setProp((p) => (p.fontSize = val))}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="12px">12px</SelectItem>
                                    <SelectItem value="14px">14px</SelectItem>
                                    <SelectItem value="16px">16px</SelectItem>
                                    <SelectItem value="18px">18px</SelectItem>
                                    <SelectItem value="20px">20px</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label className="block mb-2">Text Case</Label>
                            <div className="flex space-x-1 p-1 bg-gray-100 rounded-md">
                                {["default", "uppercase"].map((textCase) => (
                                    <Button
                                        key={textCase}
                                        variant={props.textTransform === textCase ? "default" : "ghost"}
                                        onClick={() => setProp((p) => (p.textTransform = textCase))}
                                        className="flex-1"
                                    >
                                        {textCase.charAt(0).toUpperCase() + textCase.slice(1)}
                                    </Button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <Label className="block mb-2">Horizontal Alignment</Label>
                            <div className="flex space-x-1 p-1 bg-gray-100 rounded-md">
                                {["left", "center", "right"].map((align) => (
                                    <Button
                                        key={align}
                                        variant={props.textAlign === align ? "default" : "ghost"}
                                        onClick={() => setProp((p) => (p.textAlign = align))}
                                        className="flex-1"
                                    >
                                        {align.charAt(0).toUpperCase() + align.slice(1)}
                                    </Button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <Label className="block mb-2">Vertical Alignment</Label>
                            <div className="flex space-x-1 p-1 bg-gray-100 rounded-md">
                                {["top", "middle", "bottom"].map((align) => (
                                    <Button
                                        key={align}
                                        variant={props.verticalAlign === align ? "default" : "ghost"}
                                        onClick={() => setProp((p) => (p.verticalAlign = align))}
                                        className="flex-1"
                                    >
                                        {align.charAt(0).toUpperCase() + align.slice(1)}
                                    </Button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <Label className="block mb-2">Font Weight</Label>
                            <div className="flex space-x-1 p-1 bg-gray-100 rounded-md">
                                {["normal", "medium", "bold"].map((weight) => (
                                    <Button
                                        key={weight}
                                        variant={props.fontWeight === weight ? "default" : "ghost"}
                                        onClick={() => setProp((p) => (p.fontWeight = weight))}
                                        className="flex-1"
                                    >
                                        {weight.charAt(0).toUpperCase() + weight.slice(1)}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
};

MenuItems.craft = {
    props: {
        menuItems: [
            { label: "Home", link: "#", active: true, visible: true },
            { label: "Product", link: "#", active: false, visible: true },
            { label: "Contact", link: "#", active: false, visible: true },
            { label: "About Us", link: "#", active: false, visible: true },
        ],
        menuItemColor: "#4a5568",
        menuItemHoverColor: "#F56565",
        activeItemColor: "#F56565",
        itemSpacing: 24,
        textTransform: "default",
        textAlign: "left",
        fontWeight: "normal",
        verticalAlign: "middle",
        fontSize: "14px",
    },
    related: {
        settings: MenuItemsSettings,
    },
};

