// import React from "react";
// import { useNode } from "@craftjs/core";
// import { Card, CardContent } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Switch } from "@/components/ui/switch";
// import { Button } from "@/components/ui/button";
// import { Plus, Trash2 } from "lucide-react";
//
// export const MenuItems = ({ menuItems, menuItemColor, menuItemHoverColor, activeItemColor, itemSpacing }) => {
//     const { connectors: { connect, drag } } = useNode();
//
//     return (
//         <nav ref={ref => connect(drag(ref))} className="flex">
//             {menuItems.map((item, i) => (
//                 <a
//                     key={i}
//                     href={item.link}
//                     className="text-sm"
//                     style={{
//                         color: item.active ? activeItemColor : menuItemColor,
//                         fontWeight: item.active ? "600" : "normal",
//                         marginRight: `${itemSpacing}px`,
//                     }}
//                     onMouseEnter={(e) => e.target.style.color = menuItemHoverColor}
//                     onMouseLeave={(e) => e.target.style.color = item.active ? activeItemColor : menuItemColor}
//                 >
//                     {item.label}
//                 </a>
//             ))}
//         </nav>
//     );
// };
//
// export const MenuItemsSettings = () => {
//     const {
//         actions: { setProp },
//         props,
//     } = useNode((node) => ({
//         props: node.data.props,
//     }));
//
//     const addMenuItem = () => {
//         setProp((p) => {
//             p.menuItems = [
//                 ...p.menuItems,
//                 { label: "New Item", link: "#", active: false },
//             ];
//         });
//     };
//
//     const updateMenuItem = (index, field, value) => {
//         setProp((p) => {
//             const newMenuItems = [...p.menuItems];
//             newMenuItems[index] = { ...newMenuItems[index], [field]: value };
//             p.menuItems = newMenuItems;
//         });
//     };
//
//     const removeMenuItem = (index) => {
//         setProp((p) => {
//             p.menuItems = p.menuItems.filter((_, i) => i !== index);
//         });
//     };
//
//     return (
//         <Card>
//             <CardContent className="space-y-4 mt-4">
//                 <div className="flex items-center justify-between">
//                     <Label>Menu Item Color</Label>
//                     <Input
//                         type="color"
//                         className="w-24"
//                         value={props.menuItemColor}
//                         onChange={(e) => setProp((p) => (p.menuItemColor = e.target.value))}
//                     />
//                 </div>
//                 <div className="flex items-center justify-between">
//                     <Label>Hover Color</Label>
//                     <Input
//                         type="color"
//                         className="w-24"
//                         value={props.menuItemHoverColor}
//                         onChange={(e) => setProp((p) => (p.menuItemHoverColor = e.target.value))}
//                     />
//                 </div>
//                 <div className="flex items-center justify-between">
//                     <Label>Active Item Color</Label>
//                     <Input
//                         type="color"
//                         className="w-24"
//                         value={props.activeItemColor}
//                         onChange={(e) => setProp((p) => (p.activeItemColor = e.target.value))}
//                     />
//                 </div>
//                 <div className="flex items-center justify-between">
//                     <Label>Item Spacing</Label>
//                     <Input
//                         type="number"
//                         className="w-24"
//                         value={props.itemSpacing}
//                         onChange={(e) => setProp((p) => (p.itemSpacing = Number(e.target.value)))}
//                     />
//                 </div>
//                 <div className="space-y-2">
//                     <div className="flex justify-between items-center">
//                         <Label>Menu Items</Label>
//                         <Button size="sm" onClick={addMenuItem}>
//                             <Plus className="w-4 h-4 mr-1" /> Add
//                         </Button>
//                     </div>
//                     {props.menuItems.map((item, index) => (
//                         <div key={index} className="border p-3 rounded-md space-y-2">
//                             <div className="flex justify-between items-center">
//                                 <Label>Item {index + 1}</Label>
//                                 <Button variant="ghost" size="sm" onClick={() => removeMenuItem(index)}>
//                                     <Trash2 className="w-4 h-4 text-red-500" />
//                                 </Button>
//                             </div>
//                             <Label>Label</Label>
//                             <Input
//                                 value={item.label}
//                                 onChange={(e) => updateMenuItem(index, "label", e.target.value)}
//                             />
//                             <Label>Link</Label>
//                             <Input
//                                 value={item.link}
//                                 onChange={(e) => updateMenuItem(index, "link", e.target.value)}
//                             />
//                             <div className="flex items-center justify-between">
//                                 <Label>Active</Label>
//                                 <Switch
//                                     checked={item.active}
//                                     onCheckedChange={(v) => updateMenuItem(index, "active", v)}
//                                 />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </CardContent>
//         </Card>
//     );
// };
//
// MenuItems.craft = {
//     props: {
//         menuItems: [
//             { label: "Home", link: "#", active: true },
//             { label: "Products", link: "#", active: false },
//             { label: "Contacts", link: "#", active: false },
//
//         ],
//         menuItemColor: "#4a5568",
//         menuItemHoverColor: "#F56565",
//         activeItemColor: "#F56565",
//         itemSpacing: 24,
//     },
//     related: {
//         settings: MenuItemsSettings,
//     },
// };


import React from "react";
import {useNode} from "@craftjs/core";
import {Card, CardContent} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Switch} from "@/components/ui/switch";
import {Button} from "@/components/ui/button";
import {
    Plus, Trash2, ArrowUp, ArrowDown, AlignLeft, AlignCenter, AlignRight,
    AlignVerticalJustifyStart,
    AlignVerticalJustifyCenter,
    AlignVerticalJustifyEnd
} from "lucide-react";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";

export const MenuItems = ({
                              menuItems,
                              menuItemColor,
                              menuItemHoverColor,
                              activeItemColor,
                              itemSpacing,
                              textTransform,
                              textAlign,
                              fontWeight,
                              verticalAlign, // New prop for vertical alignment
                          }) => {
    const {
        connectors: {connect, drag},
    } = useNode();

    return (
        <nav
            ref={(ref) => connect(drag(ref))}
            className="flex"
            style={{
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
            {menuItems.map((item, i) => (
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
    const {
        actions: {setProp},
        props,
    } = useNode((node) => ({
        props: node.data.props,
    }));

    const addMenuItem = () => {
        setProp((p) => {
            p.menuItems = [
                ...p.menuItems,
                {label: "New Item", link: "#", active: false},
            ];
        });
    };

    const updateMenuItem = (index, field, value) => {
        setProp((p) => {
            const newMenuItems = [...p.menuItems];
            newMenuItems[index] = {...newMenuItems[index], [field]: value};
            p.menuItems = newMenuItems;
        });
    };

    const removeMenuItem = (index) => {
        setProp((p) => {
            p.menuItems = p.menuItems.filter((_, i) => i !== index);
        });
    };

    const moveMenuItem = (index, direction) => {
        setProp((p) => {
            const newMenuItems = [...p.menuItems];
            const itemToMove = newMenuItems.splice(index, 1)[0];
            const newIndex = direction === "up" ? index - 1 : index + 1;
            newMenuItems.splice(newIndex, 0, itemToMove);
            p.menuItems = newMenuItems;
        });
    };

    return (
        <Card>
            <CardContent className="space-y-4 mt-4">
                {/* Color Pickers */}
                <div className="flex items-center justify-between">
                    <Label>Menu Item Color</Label>
                    <label className="inline-block">
    <span
        className="w-10 h-10 rounded-full  cursor-pointer"
        style={{backgroundColor: props.menuItemColor}}
    ></span>
                        <input
                            type="color"
                            className="hidden"
                            value={props.menuItemColor}
                            onChange={(e) =>
                                setProp((p) => (p.menuItemColor = e.target.value))
                            }
                        />
                    </label>

                </div>
                <div className="flex items-center justify-between">
                    <Label>Hover Color</Label>
                    <Input
                        type="color"
                        className="w-24 border-hidden"
                        value={props.menuItemHoverColor}
                        onChange={(e) =>
                            setProp((p) => (p.menuItemHoverColor = e.target.value))
                        }
                    />
                </div>
                <div className="flex items-center justify-between">
                    <Label>Active Item Color</Label>
                    <Input
                        type="color"
                        className="w-24"
                        value={props.activeItemColor}
                        onChange={(e) =>
                            setProp((p) => (p.activeItemColor = e.target.value))
                        }
                    />
                </div>

                {/* Spacing */}
                <div className="flex items-center justify-between">
                    <Label>Item Spacing</Label>
                    <Input
                        type="number"
                        className="w-24"
                        value={props.itemSpacing}
                        onChange={(e) =>
                            setProp((p) => (p.itemSpacing = Number(e.target.value)))
                        }
                    />
                </div>

                <div className="w-full">
                    <Select
                        value={props.textTransform}
                        onValueChange={(val) => setProp((p) => (p.textTransform = val))}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select text case"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="default">Default</SelectItem>
                            <SelectItem value="uppercase">Uppercase</SelectItem>
                            <SelectItem value="lowercase">Lowercase</SelectItem>
                            <SelectItem value="capitalize">Capitalize</SelectItem>
                        </SelectContent>
                    </Select>
                </div>


                {/* Text Align Buttons (Horizontal) */}
                <div className="w-full">
                    <Label className="block mb-2">Horizontal Align</Label>
                    <div className="flex space-x-2">
                        <Button
                            variant={props.textAlign === "left" ? "default" : "outline"}
                            onClick={() => setProp((p) => (p.textAlign = "left"))}
                            className="flex-1"
                        >
                            <AlignLeft className="w-4 h-4"/>
                        </Button>
                        <Button
                            variant={props.textAlign === "center" ? "default" : "outline"}
                            onClick={() => setProp((p) => (p.textAlign = "center"))}
                            className="flex-1"
                        >
                            <AlignCenter className="w-4 h-4"/>
                        </Button>
                        <Button
                            variant={props.textAlign === "right" ? "default" : "outline"}
                            onClick={() => setProp((p) => (p.textAlign = "right"))}
                            className="flex-1"
                        >
                            <AlignRight className="w-4 h-4"/>
                        </Button>
                    </div>
                </div>

                {/* Text Align Buttons (Vertical) - NEW! */}
                <div className="w-full">
                    <Label className="block mb-2">Vertical Align</Label>
                    <div className="flex space-x-2">
                        <Button
                            variant={props.verticalAlign === "top" ? "default" : "outline"}
                            onClick={() => setProp((p) => (p.verticalAlign = "top"))}
                            className="flex-1"
                        >
                            <AlignVerticalJustifyStart className="w-4 h-4"/>
                        </Button>
                        <Button
                            variant={props.verticalAlign === "middle" ? "default" : "outline"}
                            onClick={() => setProp((p) => (p.verticalAlign = "middle"))}
                            className="flex-1"
                        >
                            <AlignVerticalJustifyCenter className="w-4 h-4"/>
                        </Button>
                        <Button
                            variant={props.verticalAlign === "bottom" ? "default" : "outline"}
                            onClick={() => setProp((p) => (p.verticalAlign = "bottom"))}
                            className="flex-1"
                        >
                            <AlignVerticalJustifyEnd className="w-4 h-4"/>
                        </Button>
                    </div>
                </div>

                {/* Font Weight */}
                <div className="w-full">
                    <Label>Font Weight</Label>
                    <Select
                        value={props.fontWeight}
                        onValueChange={(val) =>
                            setProp((p) => (p.fontWeight = val))
                        }
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="normal">Normal</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="bold">Bold</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Menu Items */}
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <Label>Menu Items</Label>
                        <Button size="sm" onClick={addMenuItem}>
                            <Plus className="w-4 h-4 mr-1"/> Add
                        </Button>
                    </div>
                    {props.menuItems.map((item, index) => (
                        <div
                            key={index}
                            className="border p-3 rounded-md space-y-2"
                        >
                            <div className="flex justify-between items-center">
                                <Label>Item {index + 1}</Label>
                                <div className="flex space-x-2">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => moveMenuItem(index, "up")}
                                        disabled={index === 0}
                                    >
                                        <ArrowUp className="w-4 h-4"/>
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => moveMenuItem(index, "down")}
                                        disabled={index === props.menuItems.length - 1}
                                    >
                                        <ArrowDown className="w-4 h-4"/>
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => removeMenuItem(index)}
                                    >
                                        <Trash2 className="w-4 h-4 text-red-500"/>
                                    </Button>
                                </div>
                            </div>
                            <Label>Label</Label>
                            <Input
                                value={item.label}
                                onChange={(e) =>
                                    updateMenuItem(index, "label", e.target.value)
                                }
                            />
                            <Label>Link</Label>
                            <Input
                                value={item.link}
                                onChange={(e) =>
                                    updateMenuItem(index, "link", e.target.value)
                                }
                            />
                            <div className="flex items-center justify-between">
                                <Label>Active</Label>
                                <Switch
                                    checked={item.active}
                                    onCheckedChange={(v) =>
                                        updateMenuItem(index, "active", v)
                                    }
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

MenuItems.craft = {
    props: {
        menuItems: [
            {label: "Home", link: "#", active: true},
            {label: "Products", link: "#", active: false},
            {label: "Contacts", link: "#", active: false},
        ],
        menuItemColor: "#4a5568",
        menuItemHoverColor: "#F56565",
        activeItemColor: "#F56565",
        itemSpacing: 24,
        textTransform: "default",
        textAlign: "left",
        fontWeight: "normal",
        verticalAlign: "middle", // Default vertical alignment
    },
    related: {
        settings: MenuItemsSettings,
    },
};