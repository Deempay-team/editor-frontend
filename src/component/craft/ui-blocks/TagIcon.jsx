import { useNode } from "@craftjs/core";
import React, { useState } from "react";
import { SliderControl } from "./SliderControl";
import Tag from "../../../assets/icons/TagIcon";
import {Label} from "@radix-ui/react-label";
import {CustomColorPicker} from "../../CustomColorPicker.jsx";

export const TagIcon = ({ iconSize, iconColor }) => {
    const {
        connectors: { connect, drag },
    } = useNode();

    return (
        <div ref={(ref) => connect(drag(ref))}>
            <Tag
                width={iconSize}
                height={iconSize}
                className="transition-colors duration-300"
                style={{
                    color: iconColor,
                }}
            />
        </div>
    );
};

export const TagIconSettings = () => {
    const [open, setOpen] = useState(false);

    const {
        props,
        actions: { setProp },
    } = useNode((node) => ({
        props: node.data.props,
    }));

    return (
        <div className="bg-white space-y-6">
            <div className="flex items-center justify-between gap-2">
                <Label> Color</Label>
                <div className="">
                    {/* Small button to show current color */}
                    <button
                        className="w-[168px] h-8 rounded-md border cursor-pointer"
                        style={{ backgroundColor: props.iconColor }}
                        onClick={() => setOpen(true)}
                    />

                    {/* Color Picker Dialog */}
                    <CustomColorPicker
                        value={props.iconColor}
                        onValueChange={(val) => setProp((p) => (p.iconColor = val))}
                        open={open}
                        onClose={setOpen}
                    />
                </div>
            </div>

            <SliderControl
                value={props.iconSize}
                label="Icon Size"
                stack={true}
                onChange={(val) => setProp((p) => (p.iconSize = val))}
            />
        </div>
    );
};

TagIcon.craft = {
    displayName: "Tag Icon",
    props: {
        iconSize: 17,
        iconColor: "#FF4D00",
    },

    related: {
        settings: TagIconSettings,
    },
};