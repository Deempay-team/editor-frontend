import React from "react";
import { useNode } from "@craftjs/core";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";
import { SliderControl } from "../ui-blocks/SliderControl";
import Link from "next/link";
import {getResponsiveProp} from "../../../utils/responsive.js";
import {useViewport} from "../../../Context/ViewportContext.jsx";

const BREAKPOINT = 768; // Tailwind's md breakpoint

export const Image = ({
  src,
  alt,
  width,
  widthMobile,
  widthMode,
  widthModeMobile,
  height,
  heightMobile,
  heightMode,
  heightModeMobile,
  borderRadius,
  alignment,
  alignmentMobile,
  fit,
  fitMobile,
  position,
  positionMobile,
  aspectRatio,
  link,
  openInNewTab,
  className,
}) => {
  const { isDesktop } = useViewport();
  const {
    connectors: { connect, drag },
  } = useNode();

  const resolvedHeight = getResponsiveProp({
    isDesktop,
    propMode: heightMode,
    propSize: height,
    propModeMobile: heightModeMobile,
    propSizeMobile: heightMobile,
  });

  const resolvedWidth = getResponsiveProp({
    isDesktop,
    propMode: widthMode,
    propSize: width,
    propModeMobile: widthModeMobile,
    propSizeMobile: widthMobile,
  });

  const imageElement = (
    <>
      <style>
        {`
          .responsive-image {
            border-radius: var(--border-radius, 0px);
            object-fit: var(--fit, cover);
            object-position: var(--position, center);
            aspect-ratio: var(--aspect-ratio, 1);
            display: block;
            margin: var(--margin, 0);
          }

          @media (max-width: ${BREAKPOINT}px) {
            .responsive-image {
              border-radius: var(--border-radius-mobile, var(--border-radius));
              object-fit: var(--fit-mobile, var(--fit));
              object-position: var(--position-mobile, var(--position));
              margin: var(--margin-mobile, var(--margin));
            }
          }
        `}
      </style>
      <img
        // ref={(ref) => connect(drag(ref))}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={cn("responsive-image", className)}
        style={{
          width: resolvedWidth,
          height: resolvedHeight,
          "--border-radius": `${borderRadius}px`,
          "--fit": fit,
          "--fit-mobile": fitMobile || undefined,
          "--position": position,
          "--position-mobile": positionMobile || undefined,
          "--aspect-ratio": aspectRatio,
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
        }}
      />
    </>
  );

  const wrappedImage = link ? (
    <Link
      href={link || "#"}
      target={openInNewTab ? "_blank" : "_self"}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      aria-label={`Link to ${alt}`}
    >
      {imageElement}
    </Link>
  ) : (
    imageElement
  );

  return (
    <div ref={(ref) => connect(drag(ref))} className="inline-block">
      {wrappedImage}
    </div>
  );
};

export const ImageSettings = () => {
  const { isDesktop } = useViewport();
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <Card>
      <CardContent className="space-y-4">
        <Label>Image URL</Label>
        <Input
          value={props.src}
          onChange={(e) => setProp((props) => (props.src = e.target.value))}
        />

        <Label>Alt Text</Label>
        <Input
          value={props.alt}
          onChange={(e) => setProp((props) => (props.alt = e.target.value))}
        />

        <Label>Link URL</Label>
        <Input
          value={props.link}
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

        <div className="space-y-4">
          <div className="space-y-2">
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
          </div>

          <div className="space-y-2">
            <Label>Height Mode</Label>
            <Select
              onValueChange={(value) =>
                setProp((props) =>
                  isDesktop
                    ? (props.heightMode = value)
                    : (props.heightModeMobile = value)
                )
              }
              defaultValue={props.heightMode}
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

            {(props.heightMode === "custom" ||
              props.heightModeMobile === "custom") && (
              <SliderControl
                value={isDesktop ? props.height : props.heightMobile}
                label="Custom height"
                min={50}
                max={800}
                stack={true}
                onChange={(val) =>
                  setProp((props) =>
                    isDesktop ? (props.height = val) : (props.heightMobile = val)
                  )
                }
              />
            )}
          </div>

          <SliderControl
            value={props.borderRadius}
            label="Border Radius"
            stack={true}
            min={0}
            max={1000}
            step={1}
            onChange={(value) =>
              setProp((props) => (props.borderRadius = value))
            }
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
              {/* <SelectItem value="fill">Fill Width</SelectItem> */}
            </SelectContent>
          </Select>

          <Label>Image Fit</Label>
          <Select
            onValueChange={(value) => setProp((props) => (props.fit = value))}
            defaultValue={props.fit}
          >
            <SelectTrigger className={"w-full"}>
              <SelectValue placeholder="Cover" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cover">Cover</SelectItem>
              <SelectItem value="contain">Contain</SelectItem>
              <SelectItem value="fill">Fill</SelectItem>
              <SelectItem value="none">None</SelectItem>
            </SelectContent>
          </Select>

          <Label>Image Position</Label>
          <Select
            onValueChange={(value) =>
              setProp((props) => (props.position = value))
            }
            defaultValue={props.position}
          >
            <SelectTrigger className={"w-full"}>
              <SelectValue placeholder="Center" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="top left">Top Left</SelectItem>
              <SelectItem value="top center">Top Center</SelectItem>
              <SelectItem value="top right">Top Right</SelectItem>
              <SelectItem value="center left">Center Left</SelectItem>
              <SelectItem value="center">Center</SelectItem>
              <SelectItem value="center right">Center Right</SelectItem>
              <SelectItem value="bottom left">Bottom Left</SelectItem>
              <SelectItem value="bottom center">Bottom Center</SelectItem>
              <SelectItem value="bottom right">Bottom Right</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* <Label>Aspect Ratio</Label>
        <Slider
          defaultValue={[props.aspectRatio]}
          min={0.5}
          max={2}
          step={0.01}
          onValueChange={(value) =>
            setProp((props) => (props.aspectRatio = value[0]))
          }
        /> */}
      </CardContent>
    </Card>
  );
};

Image.craft = {
  props: {
    src: "https://images.unsplash.com/photo-1698750933119-ec30a3c63d33?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Placeholder Image",
    width: 150,
    widthMobile: null,
    widthMode: "custom", // "custom" | "auto" | "full"
    widthModeMobile: "custom",
    height: 150,
    heightMobile: 0,
    heightMode: "custom",
    heightModeMobile: "custom",
    borderRadius: 0,
    borderRadiusMobile: null,
    alignment: "left",
    alignmentMobile: null,
    fit: "cover",
    fitMobile: null,
    position: "center",
    positionMobile: null,
    aspectRatio: 1,
    link: "",
    openInNewTab: false,
  },
  related: {
    settings: ImageSettings,
  },
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  widthMobile: PropTypes.number,
  widthMode: PropTypes.oneOf(["custom", "auto", "full"]),
  widthModeMobile: PropTypes.oneOf(["custom", "auto", "full"]),
  height: PropTypes.number,
  heightMobile: PropTypes.number,
  heightMode: PropTypes.oneOf(["custom", "auto", "full"]),
  heightModeMobile: PropTypes.oneOf(["custom", "auto", "full"]),
  borderRadius: PropTypes.number,
  borderRadiusMobile: PropTypes.number,
  alignment: PropTypes.oneOf(["left", "center", "right", "fill"]),
  alignmentMobile: PropTypes.oneOf(["left", "center", "right", "fill"]),
  fit: PropTypes.oneOf(["cover", "contain", "fill", "none"]),
  fitMobile: PropTypes.oneOf(["cover", "contain", "fill", "none"]),
  position: PropTypes.oneOf([
    "top left",
    "top center",
    "top right",
    "center left",
    "center",
    "center right",
    "bottom left",
    "bottom center",
    "bottom right",
  ]),
  positionMobile: PropTypes.oneOf([
    "top left",
    "top center",
    "top right",
    "center left",
    "center",
    "center right",
    "bottom left",
    "bottom center",
    "bottom right",
  ]),
  aspectRatio: PropTypes.number,
  link: PropTypes.string,
  openInNewTab: PropTypes.bool,
};
