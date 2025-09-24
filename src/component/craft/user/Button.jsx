import React, { useState } from "react";
import { useEditor, useNode } from "@craftjs/core";
import { Button as ShadButton } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { HexColorPicker as ColorPicker2 } from "react-colorful";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PropTypes from "prop-types";
import { CustomColorPicker } from "@/components/color-picker/CustomColorPicker";
import ColorPicker from "@/components/ui/ColorPicker";
import { getResponsiveProp, getResponsivePropSize } from "@/utils/responsive";
import { useViewport } from "@/Context/ViewportContext";
import { SliderControl } from "../ui-blocks/SliderControl";
import Link from "next/link";

const BREAKPOINT = 768; // Tailwind's md breakpoint

export const Button = ({
  size,
  variant = "contained", // contained | outline | ghost / text
  children = "Click me",
  link,
  openInNewTab,
  fontSize,
  fontSizeMobile,
  fontWeight,
  fontWeightMobile,
  lineHeight,
  textAlign,
  textAlignMobile,
  backgroundColor, // 👈 default
  paddingX,
  paddingXMobile,
  paddingY,
  paddingYMobile,
  borderRadius = 5,
  borderRadiusMobile,
  alignment,
  alignmentMobile,
  textColor,
  disabled,
  height,
  heightMobile,
}) => {
  const { isDesktop } = useViewport();
  const {
    connectors: { connect, drag },
  } = useNode();
  const isEditor = useEditor((state) => state.options.enabled);

  // ---- 🎨 Variant-specific styles ----
  const variantStyles = {
    contained: {
      backgroundColor,
      color: textColor,
      border: "none",
    },
    outline: {
      backgroundColor: "transparent",
      color: textColor || backgroundColor,
      border: `1px solid ${backgroundColor}`,
    },
    ghost: {
      backgroundColor: "transparent",
      color: textColor || backgroundColor,
      border: "none",
    },
    text: {
      backgroundColor: "transparent",
      color: textColor || backgroundColor,
      border: "none",
      outline: "none",
      boxShadow: "none", // 👈 just in case shadows sneak in
    },
  };

  const resolvedHeight = getResponsiveProp({
    isDesktop,
    propSize: height,
    propSizeMobile: heightMobile,
  });

  const resolvedFontSize = getResponsivePropSize(
    isDesktop,
    fontSize,
    fontSizeMobile
  );

  const resolvedFontWeight = getResponsivePropSize(
    isDesktop,
    fontWeight,
    fontWeightMobile
  );

  const resolvedPaddingX = getResponsivePropSize(
    isDesktop,
    paddingX,
    paddingXMobile
  );

  const resolvedPaddingY = getResponsivePropSize(
    isDesktop,
    paddingY,
    paddingYMobile
  );

  const activeVariant = variantStyles[variant] || variantStyles.contained;

  const buttonElement = (
    <>
      <style>
        {`
          .responsive-button {
            text-align: var(--text-align, center);
            border-radius: var(--border-radius, 5px);
            margin: var(--margin, 0);
            pointer-events: var(--pointer-events, auto);
            line-height: var(--line-height, normal);
            text-decoration: var(--text-decoration, none);
            // font-style: var(--font-style, normal);
            // transition: all 0.2s ease-in-out;
          }

          .responsive-button.ghost:hover {
            background-color: ${backgroundColor}1A; /* 👈 10% opacity */
          }

          @media (max-width: ${BREAKPOINT}px) {
            .responsive-button {
              text-align: var(--text-align-mobile, var(--text-align));
              border-radius: var(--border-radius-mobile, var(--border-radius));
              margin: var(--margin-mobile, var(--margin));
            }
          }
        `}
      </style>

      <ShadButton
        size={size}
        disabled={disabled}
        className={`responsive-button ${variant} cursor-pointer ${
          disabled ? "opacity-70 pointer-events-none" : "hover:opacity-90"
        }`}
        style={{
          // responsive typography
          fontSize: `${resolvedFontSize}px`,
          fontWeight: resolvedFontWeight,
          "--text-align": textAlign,
          "--text-align-mobile": textAlignMobile || undefined,
          paddingLeft: `${resolvedPaddingX}px`,
          paddingRight: `${resolvedPaddingX}px`,
          paddingTop: `${resolvedPaddingY}px`,
          paddingBottom: `${resolvedPaddingY}px`,
          "--border-radius": `${borderRadius}px`,
          "--border-radius-mobile": borderRadiusMobile
            ? `${borderRadiusMobile}px`
            : undefined,
          "--margin":
            alignment === "center"
              ? "0 auto"
              : alignment === "right"
              ? "0 0 0 auto"
              : "0",
          "--margin-mobile":
            alignmentMobile === "center"
              ? "0 auto"
              : alignmentMobile === "right"
              ? "0 0 0 auto"
              : "0",
          "--line-height": `${lineHeight}px`,
          // "--text-decoration": textDecoration,
          // "--font-style": fontStyle,
          height: resolvedHeight,
          width: alignment === "fill" ? "100%" : "auto",
          // variant-driven overrides
          ...activeVariant,
        }}
        aria-label={children}
        ref={(ref) => connect(drag(ref))}
      >
        {children}
      </ShadButton>
    </>
  );

  return link && !isEditor ? (
    <Link
      href={link}
      target={openInNewTab ? "_blank" : "_self"}
      ref={(ref) => connect(drag(ref))}
    >
      {buttonElement}
    </Link>
  ) : (
    <div ref={(ref) => connect(drag(ref))}>{buttonElement}</div>
  );
};

export const ButtonSettings = () => {
  const { isDesktop } = useViewport();
  // const [open, setOpen] = useState(false);

  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="space-y-4">
      <Label>Button Text</Label>
      <Input
        value={props.children ?? ""}
        onChange={(e) => setProp((props) => (props.children = e.target.value))}
      />

      <Label>Link</Label>
      <Input
        value={props.link ?? ""}
        onChange={(e) => setProp((props) => (props.link = e.target.value))}
      />

      <div className="flex items-center gap-2 justify-between">
        <Label>Open in New Tab</Label>
        <input
          type="checkbox"
          checked={props.openInNewTab}
          onChange={(e) =>
            setProp((props) => (props.openInNewTab = e.target.checked))
          }
        />
      </div>

      {/* 👇 Variant selection */}
      <Label>Variant</Label>
      <Select
        onValueChange={(value) => setProp((props) => (props.variant = value))}
        defaultValue={props.variant}
      >
        <SelectTrigger className={"w-full"}>
          <SelectValue placeholder="Contained" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="contained">Contained</SelectItem>
          <SelectItem value="outline">Outline</SelectItem>
          <SelectItem value="ghost">Ghost</SelectItem>
          <SelectItem value="text">Text</SelectItem>
        </SelectContent>
      </Select>

      <ColorPicker
        label="Background Color"
        value={props.backgroundColor ?? ""}
        onChange={(val) => setProp((p) => (p.backgroundColor = val))}
      />

      <ColorPicker
        label="Text Color"
        value={props.textColor ?? ""}
        onChange={(val) => setProp((p) => (p.textColor = val))}
      />

      <div className="space-y-4">
        {/* <div className="space-y-2">
          <Label>Width Mode</Label>
          <Select
            onValueChange={(value) =>
              setProp((props) =>
                isDesktop
                  ? (props.widthMode = value)
                  : (props.widthModeMobile = value)
              )
            }
            defaultValue={props.widthMode}
          >
            <SelectTrigger className={"w-full"}>
              <SelectValue placeholder="Auto (default)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="auto">Auto (default)</SelectItem>
              <SelectItem value="full">100% (fill container)</SelectItem>
              <SelectItem value="custom">Custom (px)</SelectItem>
            </SelectContent>
          </Select>

          {(props.widthMode === "custom" ||
            props.widthModeMobile === "custom") && (
            <SliderControl
              value={isDesktop ? props.width : props.widthMobile}
              label="Custom width"
              min={50}
              max={800}
              stack={true}
              onChange={(val) =>
                setProp((props) =>
                  isDesktop ? (props.width = val) : (props.widthMobile = val)
                )
              }
            />
          )}
        </div> */}

        <SliderControl
          value={isDesktop ? props.height : props.heightMobile}
          label="Height"
          min={0}
          max={100}
          stack={true}
          onChange={(val) =>
            setProp((props) =>
              isDesktop ? (props.height = val) : (props.heightMobile = val)
            )
          }
        />
        {/* Font Size */}
        <SliderControl
          value={isDesktop ? props.fontSize : props.fontSizeMobile}
          label="Font Size"
          min={10}
          max={100}
          step={1}
          stack={true}
          onChange={(val) =>
            setProp((props) =>
              isDesktop ? (props.fontSize = val) : (props.fontSizeMobile = val)
            )
          }
        />
        {/* Font Weight */}
        <Label>Font Weight</Label>
        <Select
          onValueChange={(value) =>
            setProp((props) => (props.fontWeight = value))
          }
          defaultValue={props.fontWeight}
        >
          <SelectTrigger className={"w-full"}>
            <SelectValue placeholder="Normal" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={300}>Lighter</SelectItem>
            <SelectItem value={400}>Normal</SelectItem>
            <SelectItem value={500}>Medium</SelectItem>
            <SelectItem value={600}>Semi Bold</SelectItem>
            <SelectItem value={700}>Bold</SelectItem>
          </SelectContent>
        </Select>
        {/* Text Align */}
        <Label>Text Align</Label>
        <Select
          onValueChange={(value) =>
            setProp((props) => (props.textAlign = value))
          }
          defaultValue={props.textAlign}
        >
          <SelectTrigger className={"w-full"}>
            <SelectValue placeholder="Center" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="left">Left</SelectItem>
            <SelectItem value="center">Center</SelectItem>
            <SelectItem value="right">Right</SelectItem>
          </SelectContent>
        </Select>
        {/* Padding Horizontal */}
        <SliderControl
          value={isDesktop ? props.paddingX : props.paddingXMobile}
          label="Padding Horizontal"
          stack={true}
          min={0}
          max={50}
          step={1}
          onChange={(val) =>
            setProp((props) =>
              isDesktop ? (props.paddingX = val) : (props.paddingXMobile = val)
            )
          }
        />
        {/* Padding Vertical */}
        <SliderControl
          value={isDesktop ? props.paddingY : props.paddingYMobile}
          label="Padding Vertical"
          stack={true}
          min={0}
          max={50}
          step={1}
          onChange={(val) =>
            setProp((props) =>
              isDesktop ? (props.paddingY = val) : (props.paddingYMobile = val)
            )
          }
        />

        {/* Border Radius */}
        <SliderControl
          value={props.borderRadius}
          label="Border Radius"
          stack={true}
          min={0}
          max={500}
          step={1}
          onChange={(val) => setProp((props) => (props.borderRadius = val))}
        />

        <Label>Alignment</Label>
        <Select
          onValueChange={(value) =>
            setProp((props) => (props.alignment = value))
          }
          defaultValue={props.alignment}
        >
          <SelectTrigger className={"w-full"}>
            <SelectValue placeholder="Left" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="left">Left</SelectItem>
            <SelectItem value="center">Center</SelectItem>
            <SelectItem value="right">Right</SelectItem>
            <SelectItem value="fill">Fill Width</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Line Height */}
      <SliderControl
        value={props.lineHeight}
        label="Line Height"
        min={10}
        max={50}
        step={1}
        stack={true}
        onChange={(val) => setProp((props) => (props.lineHeight = val))}
      />

      {/* <Label>Text Decoration</Label>
      <Select
        onValueChange={(value) =>
          setProp((props) => (props.textDecoration = value))
        }
        defaultValue={props.textDecoration}
      >
        <SelectTrigger>
          <SelectValue placeholder="None" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="none">None</SelectItem>
          <SelectItem value="underline">Underline</SelectItem>
          <SelectItem value="line-through">Line Through</SelectItem>
        </SelectContent>
      </Select> */}

      {/* <Label>Font Style</Label>
      <Select
        onValueChange={(value) => setProp((props) => (props.fontStyle = value))}
        defaultValue={props.fontStyle}
      >
        <SelectTrigger>
          <SelectValue placeholder="Normal" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="normal">Normal</SelectItem>
          <SelectItem value="italic">Italic</SelectItem>
        </SelectContent>
      </Select> */}
    </div>
  );
};

Button.craft = {
  displayName: "Button",
  props: {
    size: "small",
    variant: "contained",
    children: "Click me",
    link: "",
    openInNewTab: false,
    fontSize: 16,
    fontSizeMobile: null,
    fontWeight: 400,
    fontWeightMobile: null,
    lineHeight: 20,
    textAlign: "center",
    textAlignMobile: null,
    // textDecoration: "none",
    // fontStyle: "normal",
    backgroundColor: null,
    backgroundColorMobile: null,
    paddingX: 10,
    paddingXMobile: null,
    paddingY: 10,
    paddingYMobile: null,
    borderRadius: 5,
    borderRadiusMobile: null,
    border: "none",
    borderMobile: null,
    alignment: "left",
    alignmentMobile: null,
    textColor: null,
    disabled: false,
    height: null,
    heightMobile: null,
  },
  related: {
    settings: ButtonSettings,
  },
};

Button.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["contained", "outlined", "ghost", "text"]),
  children: PropTypes.string,
  link: PropTypes.string,
  openInNewTab: PropTypes.bool,
  fontSize: PropTypes.number,
  fontSizeMobile: PropTypes.number,
  fontWeight: PropTypes.number,
  fontWeightMobile: PropTypes.number,
  lineHeight: PropTypes.number,
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
  textAlignMobile: PropTypes.oneOf(["left", "center", "right"]),
  textDecoration: PropTypes.oneOf(["none", "underline", "line-through"]),
  fontStyle: PropTypes.oneOf(["normal", "italic"]),
  backgroundColor: PropTypes.string,
  backgroundColorMobile: PropTypes.string,
  padding: PropTypes.number,
  paddingMobile: PropTypes.number,
  borderRadius: PropTypes.number,
  borderRadiusMobile: PropTypes.number,
  border: PropTypes.string,
  borderMobile: PropTypes.string,
  alignment: PropTypes.oneOf(["left", "center", "right", "fill"]),
  alignmentMobile: PropTypes.oneOf(["left", "center", "right", "fill"]),
  disabled: PropTypes.bool,
  height: PropTypes.number,
};
