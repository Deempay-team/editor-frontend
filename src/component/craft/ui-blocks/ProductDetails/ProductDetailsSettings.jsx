import {useNode} from "@craftjs/core";
import {Label} from "../../../../components/ui/label.jsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "../../../../components/ui/select.jsx";
import {Input} from "../../../../components/ui/input.jsx";
import {Slider} from "../../../../components/ui/slider.jsx";
import {Switch} from "../../../../components/ui/switch.jsx";
import React from "react";

export const ProductDetailsSettings = () => {

    const Section = ({ title, children }) => (
        <div className="space-y-3">
            <h3 className="text-xs font-semibold text-gray-800 uppercase tracking-wide">
                {title}
            </h3>
            <div className="space-y-5">{children}</div>
        </div>
    );
    const colorSchemes = [
        { label: "White", value: "#ffffff" },
        { label: "Light Gray", value: "#f9fafb" },
        { label: "Gray", value: "#e5e7eb" },
        { label: "Dark Gray", value: "#6b7280" },
        { label: "Black", value: "#1f2937" },
        { label: "Custom", value: "#2e2727ff" },
    ];
    const {
        props,
        actions: { setProp },
    } = useNode((node) => ({
        props: node.data.props,
    }));

    return (
        <div className="bg-white space-y-4">
            <Section title="Appearance">
                <div className="space-y-2">
                    <Label className="text-sm font-medium">Background Color</Label>
                    <Select
                        value={props.backgroundColor}
                        onValueChange={(color) => setProp((p) => (p.backgroundColor = color))}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Choose a color" />
                        </SelectTrigger>
                        <SelectContent>
                            {colorSchemes.map((scheme) => (
                                <SelectItem key={scheme.value} value={scheme.value}>
                                    <div className="flex items-center space-x-2">
                    <span
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: scheme.value }}
                    />
                                        <span>{scheme.label}</span>
                                    </div>
                                </SelectItem>
                            ))}
                            <div className="border-t mt-2 pt-2 space-y-2">
                                <Label className="text-xs text-gray-500">Custom Color</Label>
                                <Input
                                    type="color"
                                    value={props.backgroundColor}
                                    onChange={(e) =>
                                        setProp((p) => (p.backgroundColor = e.target.value))
                                    }
                                    className="mt-1 h-8 w-full border rounded"
                                />
                            </div>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label className="text-sm font-medium">Border Color</Label>
                    <Select
                        value={props.borderColor}
                        onValueChange={(color) => setProp((p) => (p.borderColor = color))}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Choose a color" />
                        </SelectTrigger>
                        <SelectContent>
                            {colorSchemes.map((scheme) => (
                                <SelectItem key={scheme.value} value={scheme.value}>
                                    <div className="flex items-center space-x-2">
                    <span
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: scheme.value }}
                    />
                                        <span>{scheme.label}</span>
                                    </div>
                                </SelectItem>
                            ))}
                            <div className="border-t mt-2 pt-2 space-y-2">
                                <Label className="text-xs text-gray-500">Custom Color</Label>
                                <Input
                                    type="color"
                                    value={props.borderColor}
                                    onChange={(e) =>
                                        setProp((p) => (p.borderColor = e.target.value))
                                    }
                                    className="mt-1 h-8 w-full border rounded"
                                />
                            </div>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label>Border Radius</Label>
                    <Slider
                        min={0}
                        max={50}
                        value={[props.borderRadius || 0]}
                        onValueChange={(val) => setProp((p) => (p.borderRadius = val[0]))}
                        className="w-full"
                    />
                </div>

                <div className="space-y-2">
                    <Label>Padding</Label>
                    <Slider
                        min={0}
                        max={50}
                        value={[props.padding || 16]}
                        onValueChange={(val) => setProp((p) => (p.padding = val[0]))}
                        className="w-full"
                    />
                </div>

                <div className="space-y-2">
                    <Label>Thumbnail Border Width</Label>
                    <Slider
                        min={0}
                        max={10}
                        value={[props.thumbnailBorderWidth || 1]}
                        onValueChange={(val) =>
                            setProp((p) => (p.thumbnailBorderWidth = val[0]))
                        }
                        className="w-full"
                    />
                </div>

                <div className="space-y-2">
                    <Label>Thumbnail Border Radius</Label>
                    <Slider
                        min={0}
                        max={50}
                        value={[props.thumbnailBorderRadius || 4]}
                        onValueChange={(val) =>
                            setProp((p) => (p.thumbnailBorderRadius = val[0]))
                        }
                        className="w-full"
                    />
                </div>

                <div className="space-y-2">
                    <Label className="text-sm font-medium">Thumbnail Border Color</Label>
                    <Input
                        type="color"
                        value={props.thumbnailBorderColor}
                        onChange={(e) =>
                            setProp((p) => (p.thumbnailBorderColor = e.target.value))
                        }
                        className="mt-1 h-8 w-full border rounded"
                    />
                </div>

                <div className="space-y-2">
                    <Label className="text-sm font-medium">Active Thumbnail Border Color</Label>
                    <Input
                        type="color"
                        value={props.thumbnailActiveBorderColor}
                        onChange={(e) =>
                            setProp((p) => (p.thumbnailActiveBorderColor = e.target.value))
                        }
                        className="mt-1 h-8 w-full border rounded"
                    />
                </div>
            </Section>

            <Section title="Content">
                <div className="space-y-2">
                    <Label>Product Title</Label>
                    <Input
                        value={props.productTitle}
                        onChange={(e) => setProp((p) => (p.productTitle = e.target.value))}
                        placeholder="Enter product title"
                    />
                </div>

                <div className="space-y-2">
                    <Label>Price</Label>
                    <Input
                        value={props.price}
                        onChange={(e) => setProp((p) => (p.price = e.target.value))}
                        placeholder="Enter price"
                    />
                </div>

                <div className="space-y-2">
                    <Label>Original Price</Label>
                    <Input
                        value={props.originalPrice}
                        onChange={(e) => setProp((p) => (p.originalPrice = e.target.value))}
                        placeholder="Enter original price"
                    />
                </div>

                <div className="space-y-2">
                    <Label>Discount</Label>
                    <Input
                        value={props.discount}
                        onChange={(e) => setProp((p) => (p.discount = e.target.value))}
                        placeholder="Enter discount"
                    />
                </div>

                <div className="space-y-2">
                    <Label>Rating</Label>
                    <Input
                        type="number"
                        step="0.1"
                        min="0"
                        max="5"
                        value={props.rating}
                        onChange={(e) =>
                            setProp((p) => (p.rating = parseFloat(e.target.value)))
                        }
                        placeholder="Enter rating"
                    />
                </div>

                <div className="space-y-2">
                    <Label>Reviews Count</Label>
                    <Input
                        type="number"
                        min="0"
                        value={props.reviews}
                        onChange={(e) =>
                            setProp((p) => (p.reviews = parseInt(e.target.value)))
                        }
                        placeholder="Enter number of reviews"
                    />
                </div>

                <div className="space-y-2">
                    <Label>Description</Label>
                    <Input
                        value={props.description}
                        onChange={(e) => setProp((p) => (p.description = e.target.value))}
                        placeholder="Enter product description"
                    />
                </div>

                <div className="space-y-2">
                    <Label>Product Images (comma separated URLs)</Label>
                    <Input
                        value={props.productImages ? props.productImages.join(", ") : ""}
                        onChange={(e) => {
                            const images = e.target.value
                                .split(",")
                                .map((img) => img.trim())
                                .filter((img) => img);
                            setProp((p) => (p.productImages = images));
                        }}
                        placeholder="Enter image URLs separated by commas"
                    />
                </div>

                <div className="space-y-2">
                    <Label>Thumbnail Count</Label>
                    <Slider
                        min={1}
                        max={6}
                        value={[props.thumbnailCount || 4]}
                        onValueChange={(val) =>
                            setProp((p) => (p.thumbnailCount = val[0]))
                        }
                        className="w-full"
                    />
                </div>
            </Section>

            <Section title="Extras">
                <div className="space-y-2">
                    <Label>Show New Arrival Badge</Label>
                    <Switch
                        checked={props.showNewArrival}
                        onCheckedChange={(val) => setProp((p) => (p.showNewArrival = val))}
                    />
                </div>
            </Section>
        </div>
    );
};
