import React from "react";
import { useNode, Element } from "@craftjs/core";
import { cn } from "@/lib/utils";
import { Text } from "../../user/Text/Text";
import { Button } from "../../user/Button";
import { HeroSectionSettings } from "./HeroSectionSettings";
import { useViewport } from "@/Context/ViewportContext";

export const HeroSectionRender = ({
  background = "#ffffff",
  direction = "vertical",
  alignment = "left",
  position = "bottom",
  mobilePaddingX = 20,
  desktopPaddingX = 40,
  mobilePaddingY = 20,
  desktopPaddingY = 60,
  gap = 16,
  desktopHeight = 450,
  mobileHeight = 500,
  borderRadius = 0,
  shadow = true,
  children,
}) => {
  const { isDesktop } = useViewport();

  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      style={{
        backgroundColor: background,
        borderRadius: `${borderRadius}px`,
        boxShadow: shadow ? "0 2px 12px rgba(0,0,0,0.1)" : "none",
        height: isDesktop ? `${desktopHeight}px` : `${mobileHeight}px`,
      }}
      className={`
        transition-all duration-300 ease-in-out w-full overflow-hidden container mx-auto
      `}
    >
      <div
        className={cn(
          "flex transition-all h-full w-full",
          direction === "vertical" ? "flex-col" : "flex-row",
          alignment === "left" && "items-start text-left",
          alignment === "center" && "items-center text-center",
          alignment === "right" && "items-end text-right",
          position === "top" && "justify-start",
          position === "center" && "justify-center",
          position === "bottom" && "justify-end"
        )}
        style={{
          paddingLeft: isDesktop
            ? `${desktopPaddingX}px`
            : `${mobilePaddingX}px`,
          paddingRight: isDesktop
            ? `${desktopPaddingX}px`
            : `${mobilePaddingX}px`,
          paddingTop: isDesktop
            ? `${desktopPaddingY}px`
            : `${mobilePaddingY}px`,
          paddingBottom: isDesktop
            ? `${desktopPaddingY}px`
            : `${mobilePaddingY}px`,
          gap: `${gap}px`,
        }}
      >
        <Element
          is={Text}
          id="heroHeading"
          text="Browse our latest products"
          fontSize={48}
          fontWeight="700"
        />

        <Element
          is={Button}
          id="heroButton"
          children="Shop Now"
          canvas={false} // it's a single component, not a container
        />
      </div>
      {children}
    </div>
  );
};

HeroSectionRender.craft = {
  displayName: "Hero Section",
  props: {
    background: "#dcdcdc",
    direction: "vertical",
    direction: "vertical",
    alignment: "left",
    position: "bottom",
    mobilePaddingX: 20,
    desktopPaddingX: 40,
    mobilePaddingY: 20,
    desktopPaddingY: 60,
    gap: 16,
    desktopHeight: 450,
    mobileHeight: 500,
    borderRadius: 0,
    shadow: true,
  },
  related: {
    settings: HeroSectionSettings,
  },
};
