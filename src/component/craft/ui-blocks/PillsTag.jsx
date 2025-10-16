
import React from "react";
import { useNode } from "@craftjs/core";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import ColorPicker from "@/components/ui/ColorPicker";

export const PillsTag = ({
                             text = "Tag",
                             backgroundColor = "#e5e7eb",
                             textColor = "#374151",
                             fontSize = 12,
                             fontWeight = "500",
                             borderRadius = 9999,
                             paddingX = 12,
                             paddingY = 4,
                             width,
                             height,
                         }) => {
    const {
        connectors: { connect, drag },
    } = useNode();

    return (
        <div
            ref={(ref) => connect(drag(ref))}
            className="inline-block"
        >
      <span
          style={{
              backgroundColor,
              color: textColor,
              fontSize: `${fontSize}px`,
              fontWeight,
              borderRadius: `${borderRadius}px`,
              padding: `${paddingY}px ${paddingX}px`,
              width: width ? `${width}px` : "auto",
              height: height ? `${height}px` : "auto",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
          }}
          className="transition-colors duration-200"
      >
        {text}
      </span>
        </div>
    );
};

export const PillsTagSettings = () => {
    const {
        props,
        actions: { setProp },
    } = useNode((node) => ({
        props: node.data.props,
    }));

    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <Label>Text</Label>
                <Input
                    value={props.text}
                    onChange={(e) => setProp((p) => (p.text = e.target.value))}
                />
            </div>

            <ColorPicker
                label="Background Color"
                value={props.backgroundColor}
                onChange={(val) => setProp((p) => (p.backgroundColor = val))}
            />

            <ColorPicker
                label="Text Color"
                value={props.textColor}
                onChange={(val) => setProp((p) => (p.textColor = val))}
            />

            <div className="space-y-2">
                <Label>Font Size</Label>
                <Slider
                    value={[props.fontSize]}
                    min={8}
                    max={32}
                    onValueChange={(val) => setProp((p) => (p.fontSize = val[0]))}
                />
            </div>

            <div className="space-y-2">
                <Label>Font Weight</Label>
                <Select
                    value={props.fontWeight}
                    onValueChange={(val) => setProp((p) => (p.fontWeight = val))}
                >
                    <SelectTrigger>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="400">Regular</SelectItem>
                        <SelectItem value="500">Medium</SelectItem>
                        <SelectItem value="600">Semibold</SelectItem>
                        <SelectItem value="700">Bold</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2">
                <Label>Border Radius</Label>
                <Slider
                    value={[props.borderRadius]}
                    min={0}
                    max={50}
                    onValueChange={(val) => setProp((p) => (p.borderRadius = val[0]))}
                />
            </div>

            <div className="space-y-2">
                <Label>Padding X</Label>
                <Slider
                    value={[props.paddingX]}
                    min={0}
                    max={50}
                    onValueChange={(val) => setProp((p) => (p.paddingX = val[0]))}
                />
            </div>

            <div className="space-y-2">
                <Label>Padding Y</Label>
                <Slider
                    value={[props.paddingY]}
                    min={0}
                    max={50}
                    onValueChange={(val) => setProp((p) => (p.paddingY = val[0]))}
                />
            </div>

            <div className="space-y-2">
                <Label>Width (px)</Label>
                <Input
                    type="number"
                    value={props.width}
                    onChange={(e) =>
                        setProp((p) => (p.width = parseInt(e.target.value) || undefined))
                    }
                />
            </div>

            <div className="space-y-2">
                <Label>Height (px)</Label>
                <Input
                    type="number"
                    value={props.height}
                    onChange={(e) =>
                        setProp((p) => (p.height = parseInt(e.target.value) || undefined))
                    }
                />
            </div>
        </div>
    );
};

PillsTag.craft = {
    displayName: "New arrival badge",
    props: {
        text: "Tag",
        backgroundColor: "#e5e7eb",
        textColor: "#374151",
        fontSize: 12,
        fontWeight: "500",
        borderRadius: 9999,
        paddingX: 12,
        paddingY: 4,
        width: null,
        height: null,
    },
    related: {
        settings: PillsTagSettings,
    },
    rules: {
        canDrag: () => true,
    },
};