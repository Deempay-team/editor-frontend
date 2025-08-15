import React from "react";
import { useNode } from "@craftjs/core";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import ColorPicker from "@/components/ui/ColorPicker.jsx";

export const Logo = ({
                         logoSrc,
                         logoLink,
                         logoText,
                         logoTextColor,
                         logoFontWeight,
                     }) => {
    const {
        connectors: {connect, drag},
    } = useNode();

    const renderLogoContent = () => {
        if (logoSrc) {
            return <img src={logoSrc} alt="Logo" className="h-8"/>;
        } else if (logoText) {
            return (
                <span style={{color: logoTextColor, fontWeight: logoFontWeight}}>
          {logoText}
        </span>
            );
        }
        return <span style={{color: "#000000", fontWeight: 700}}>Logo</span>;
    };

    return (
        <a
            ref={(ref) => connect(drag(ref))}
            href={logoLink}
            className="flex-shrink-0"
        >
            {renderLogoContent()}
        </a>
    );
};

export const LogoSettings = () => {
    const {
        actions: { setProp },
        props,
    } = useNode((node) => ({
        props: node.data.props,
    }));

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProp((p) => {
                    p.logoSrc = reader.result;
                    p.logoText = "";
                });
            };
            reader.readAsDataURL(file);
        } else {
            alert("Please upload a valid image file.");
        }
    };

    const handleClearImage = () => {
        setProp((p) => {
            p.logoSrc = "";
        });
    };

    return (
        <Card>
            <CardContent className="space-y-4 mt-4">
                <Label>Logo Text</Label>
                <Input
                    value={props.logoText}
                    onChange={(e) => setProp((p) => (p.logoText = e.target.value))}
                    placeholder="Leave empty to use image"
                    disabled={!!props.logoSrc}
                />

                <ColorPicker
                    label="Logo Text Color"
                    value={props.logoTextColor}
                    onChange={(val) => setProp((p) => (p.logoTextColor = val))}
                />

                <div className="space-y-2">
                    <Label>Font Weight</Label>
                    <Select
                        value={props.logoFontWeight}
                        onValueChange={(val) => setProp((p) => (p.logoFontWeight = val))}
                        disabled={!!props.logoSrc}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="400">Normal</SelectItem>
                            <SelectItem value="500">Medium</SelectItem>
                            <SelectItem value="700">Bold</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <hr/>

                <Label>Upload Logo Image</Label>
                <Input type="file" accept="image/*" onChange={handleFileUpload}/>

                {props.logoSrc && (
                    <div className="space-y-2">
                        <img
                            src={props.logoSrc}
                            alt="Preview"
                            className="h-12 rounded border"
                        />
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleClearImage}
                            className="text-red-500 border-red-300"
                        >
                            Clear Image
                        </Button>
                    </div>
                )}

                <Label>Logo Link</Label>
                <Input
                    value={props.logoLink}
                    onChange={(e) => setProp((p) => (p.logoLink = e.target.value))}
                />
            </CardContent>
        </Card>
    );
};

Logo.craft = {
    props: {
        logoSrc: "",
        logoLink: "#",
        logoText: "My Brand",
        logoTextColor: "#000000",
        logoFontWeight: "700",
    },
    related: {
        settings: LogoSettings,
    },
};
