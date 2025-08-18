import React from "react";
import { useNode, Element } from "@craftjs/core";
import { cn } from "@/lib/utils";
import { Text } from "../../user/Text/Text";
import { Button } from "../../user/Button";
import { HeroSectionSettings } from "./HeroSectionSettings";
import { useViewport } from "@/Context/ViewportContext";

export const HeroContent = ({
  children,
  background = "#ffffff",
  backgroundType = "color",
  backgroundSrc = "", // image or video src
  mobilePaddingX = 20,
  desktopPaddingX = 40,
  mobilePaddingY = 20,
  desktopPaddingY = 60,
  gap = 16,
  desktopHeight = 450,
  mobileHeight = 500,
  desktopDirection = "vertical",
  mobileDirection = "vertical",
  desktopAlignment = "center",
  mobileAlignment = "center",
  desktopPosition = "center",
  mobilePosition = "center",
  backgroundSize = "cover",
  backgroundPosition = "center",
  overlayOpacity = 40, // default 40% opacity
}) => {
  const { isDesktop } = useViewport();

  const {
    connectors: { connect, drag },
  } = useNode();

  // Helper to get YouTube video ID
  function getYouTubeId(url) {
    try {
      const regExp =
        /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
      const match = url.match(regExp);
      return match ? match[1] : null;
    } catch {
      return null;
    }
  }

  // Pick values based on screen size
  const direction = isDesktop ? desktopDirection : mobileDirection;
  const alignment = isDesktop ? desktopAlignment : mobileAlignment;
  const position = isDesktop ? desktopPosition : mobilePosition;

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      style={{
        backgroundColor: background,
        height: isDesktop ? `${desktopHeight}px` : `${mobileHeight}px`,
        ...(backgroundType === "color" && { backgroundColor: background }),
        ...(backgroundType === "image" && {
          backgroundImage: `url(${backgroundSrc})`,
          backgroundSize: backgroundSize || "cover",
          backgroundPosition: backgroundPosition || "center",
          backgroundRepeat: "no-repeat",
        }),
      }}
      className={" relative w-full overflow-hidden"}
    >
      {backgroundType === "video" &&
        backgroundSrc &&
        (backgroundSrc.includes("youtube.com") ||
        backgroundSrc.includes("youtu.be") ? (
          (() => {
            const videoId = getYouTubeId(backgroundSrc);
            if (!videoId) return null; // invalid URL
            return (
              <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
                  frameBorder="0"
                  loading="lazy"
                  title="Background video"
                  aria-hidden="true"
                  tabIndex={-1}
                  allow="autoplay; fullscreen, picture-in-picture"
                  className="absolute top-1/2 left-1/2 w-[177.78vh] h-[100vh] -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            );
          })()
        ) : (
          <video
            src={backgroundSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          />
        ))}

      {/* Dark overlay */}
      {backgroundType !== "color" && (
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            backgroundColor: `rgba(0,0,0,${overlayOpacity / 100})`,
          }}
        />
      )}
      <div
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
        className={cn(
          "flex transition-all duration-300 ease-in-out h-full w-full relative z-20  ", // <-- z-10 ensures it’s above the video
          direction === "vertical" ? "flex-col" : "flex-row",
          alignment === "left" && "items-start text-left",
          alignment === "center" && "items-center text-center",
          alignment === "right" && "items-end text-right",
          position === "top" && "justify-start",
          position === "center" && "justify-center",
          position === "bottom" && "justify-end"
        )}
      >
        {children}
      </div>
    </div>
  );
};

HeroContent.craft = {
  displayName: "Hero Section",
  props: {
    background: "#dcdcdc",
    backgroundType: "color",
    backgroundSrc: "",
    desktopDirection: "vertical",
    mobileDirection: "vertical",
    desktopAlignment: "center",
    mobileAlignment: "center",
    desktopPosition: "center",
    mobilePosition: "center",
    mobilePaddingX: 20,
    desktopPaddingX: 40,
    mobilePaddingY: 20,
    desktopPaddingY: 60,
    gap: 16,
    desktopHeight: 450,
    mobileHeight: 500,
    backgroundSize: "cover",
    backgroundPosition: "center",
    overlayOpacity: 40, // default 40% opacity
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canDrop: () => false,
    canMoveOut: () => false,
  },
  related: {
    settings: HeroSectionSettings,
  },
};

export const HeroSectionRender = () => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <Element
      is="div"
      id="Hero-Content-1"
      canvas
      ref={(ref) => connect(drag(ref))}
    >
      <Element
        id="Hero-Content-2"
        is={HeroContent}
        canvas
        custom={{
          displayName: "Hero Content",
        }}
      >
        <Element
          is={Text}
          id="heroHeading"
          text="Browse our latest products"
          fontSize={32}
          fontWeight="700"
          canvas={false}
        />

        <Element
          is={Button}
          id="heroButton"
          children="Shop Now"
          canvas={false} // it's a single component, not a container
        />
      </Element>
    </Element>
  );
};

HeroSectionRender.craft = {
  displayName: "Hero Section",
  props: {
    background: "#dcdcdc",
    backgroundType: "color",
    backgroundSrc: "",
    desktopDirection: "vertical",
    mobileDirection: "vertical",
    desktopAlignment: "center",
    mobileAlignment: "center",
    desktopPosition: "center",
    mobilePosition: "center",
    mobilePaddingX: 20,
    desktopPaddingX: 40,
    mobilePaddingY: 20,
    desktopPaddingY: 60,
    gap: 16,
    desktopHeight: 450,
    mobileHeight: 500,
    backgroundSize: "cover",
    backgroundPosition: "center",
    overlayOpacity: 40, // default 40% opacity
  },
  related: {
    settings: HeroSectionSettings,
  },
};
