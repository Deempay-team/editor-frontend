import React from "react";
import { useNode } from "@craftjs/core";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { IncreaseButton } from "./IncreaseButton";
import { DecreaseButton } from "./DecreaseButton";
import ColorPicker from "../../../components/ui/ColorPicker.jsx";

export const QuantitySelector = ({
                                     initialQuantity = 1,
                                     textColor = "#000000",
                                     iconWidth = 24,
                                     iconHeight = 24,
                                     backgroundColor = "transparent",
                                     buttonColor = "#000000",
                                     buttonBg = "transparent",
                                     buttonRadius = 4,
                                     width = 120,
                                     height = 40,
                                     borderRadius = 0,
                                 }) => {
    const {
        actions: { setProp },
        connectors: { connect, drag },
    } = useNode();

    const [quantity, setQuantity] = React.useState(initialQuantity);

    React.useEffect(() => {
        setQuantity(initialQuantity);
    }, [initialQuantity]);

    const handleIncrement = () => {
        const newQuantity = quantity + 1;
        setProp((props) => (props.initialQuantity = newQuantity));
    };
    const handleDecrement = () => {
        const newQuantity = quantity > 1 ? quantity - 1 : 1;
        setProp((props) => (props.initialQuantity = newQuantity));
    };
    const buttonStyle = {
        color: buttonColor,
        backgroundColor: buttonBg,
        borderRadius: `${buttonRadius}px`,
    };

    return (
        <div
            ref={(ref) => connect(drag(ref))}
            className="flex items-center justify-between px-2"
            style={{
                backgroundColor,
                width: `${width}px`,
                height: `${height}px`,
                borderRadius: `${borderRadius}px`,
            }}
        >
            <DecreaseButton
                iconSize={iconWidth}
                style={buttonStyle}
                onClick={handleDecrement}
            />

            <span className="font-medium" style={{ color: textColor }}>
        {quantity}
      </span>

            <IncreaseButton
                iconSize={iconWidth}
                style={buttonStyle}
                onClick={handleIncrement}
            />
        </div>
    );
};


export const QuantitySelectorSettings = () => {
    const {
        props,
        actions: { setProp },
    } = useNode((node) => ({
        props: node.data.props,
    }));

    return (
        <div className="bg-white space-y-4">
            {/* Size */}
            <div className="space-y-2">
                <Label className="text-sm font-medium">Width (px)</Label>
                <Input
                    type="number"
                    min="40"
                    value={props.width}
                    onChange={(e) =>
                        setProp((p) => (p.width = parseInt(e.target.value) || 120))
                    }
                />
            </div>
            <div className="space-y-2">
                <Label className="text-sm font-medium">Height (px)</Label>
                <Input
                    type="number"
                    min="20"
                    value={props.height}
                    onChange={(e) =>
                        setProp((p) => (p.height = parseInt(e.target.value) || 40))
                    }
                />
            </div>

            {/* Initial Quantity */}
            <div className="space-y-2">
                <Label className="text-sm font-medium">Initial Quantity</Label>
                <Input
                    type="number"
                    min="1"
                    value={props.initialQuantity}
                    onChange={(e) =>
                        setProp((p) => (p.initialQuantity = parseInt(e.target.value) || 1))
                    }
                />
            </div>

            {/* Text & Background */}
            <div className="space-y-2">
                <ColorPicker
                    label="Text Color"
                    value={props.textColor}
                    onChange={(val) => setProp((p) => (p.textColor = val))}
                />
            </div>
            <div className="space-y-2">
                <ColorPicker
                    label="Background Color"
                    value={props.backgroundColor}
                    onChange={(val) => setProp((p) => (p.backgroundColor = val))}
                />
            </div>

            <div className="space-y-2">
                <Label className="text-sm font-medium">Border Radius (px)</Label>
                <Input
                    type="number"
                    min="0"
                    max="50"
                    value={props.borderRadius}
                    onChange={(e) =>
                        setProp((p) => (p.borderRadius = parseInt(e.target.value) || 0))
                    }
                />
            </div>
            {/* Button Styles */}
            <div className="space-y-2">
                <ColorPicker
                    label="Button Text Color"
                    value={props.buttonColor}
                    onChange={(val) => setProp((p) => (p.buttonColor = val))}
                />
            </div>
            <div className="space-y-2">
                <ColorPicker
                    label="Button Background"
                    value={props.buttonBg}
                    onChange={(val) => setProp((p) => (p.buttonBg = val))}
                />
            </div>
            <div className="space-y-2">
                <Label className="text-sm font-medium">Button Radius</Label>
                <Input
                    type="number"
                    min="0"
                    max="50"
                    value={props.buttonRadius}
                    onChange={(e) =>
                        setProp((p) => (p.buttonRadius = parseInt(e.target.value) || 4))
                    }
                />
            </div>

            {/* Icon size */}
            <div className="space-y-2">
                <Label className="text-sm font-medium">Icon Width</Label>
                <Input
                    type="number"
                    min="1"
                    value={props.iconWidth}
                    onChange={(e) =>
                        setProp((p) => (p.iconWidth = parseInt(e.target.value) || 24))
                    }
                />
            </div>
            <div className="space-y-2">
                <Label className="text-sm font-medium">Icon Height</Label>
                <Input
                    type="number"
                    min="1"
                    value={props.iconHeight}
                    onChange={(e) =>
                        setProp((p) => (p.iconHeight = parseInt(e.target.value) || 24))
                    }
                />
            </div>
        </div>
    );
};


QuantitySelector.craft = {
    displayName: "Quantity Selector",
    props: {
        initialQuantity: 1,
        textColor: "#000000",
        backgroundColor: "transparent",
        iconWidth: 24,
        iconHeight: 24,
        buttonColor: "#000000",
        buttonBg: "transparent",
        buttonRadius: 4,
        width: 120,
        height: 40,
        borderRadius: 0,
    },
    rules: {
        canDrag: () => true,
        canMoveIn: () => false,
        canDelete: () => true,
    },
    related: {
        settings: QuantitySelectorSettings,
    },
};