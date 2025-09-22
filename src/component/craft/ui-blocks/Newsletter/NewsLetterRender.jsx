import React from "react";
import { useNode, Element } from "@craftjs/core";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Text } from "../../user/Text/Text";
// import { Button } from "../../user/Button";
import { useViewport } from "@/Context/ViewportContext";
import { NewsletterSettings } from "./NewsLetterSettings";
import { NewsletterSettings_2 } from "./NewsLetterSettings_2";
import { InputField } from "../../user/InputField";
import { Button } from "../../user/Button";
import { Container_2 } from "../../user/Container_2";

export const NewsLetterContainer = ({
  children,
  background = "#ffffff",
  mobilePaddingX = 20,
  desktopPaddingX = 40,
  mobilePaddingY = 20,
  desktopPaddingY = 60,
  desktopHeight = 450,
  mobileHeight = 500,
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
        height: isDesktop ? `${desktopHeight}px` : `${mobileHeight}px`,
        paddingLeft: isDesktop ? `${desktopPaddingX}px` : `${mobilePaddingX}px`,
        paddingRight: isDesktop
          ? `${desktopPaddingX}px`
          : `${mobilePaddingX}px`,
        paddingTop: isDesktop ? `${desktopPaddingY}px` : `${mobilePaddingY}px`,
        paddingBottom: isDesktop
          ? `${desktopPaddingY}px`
          : `${mobilePaddingY}px`,
      }}
      className={"w-full overflow-hidden"}
    >
      {children}
    </div>
  );
};

NewsLetterContainer.craft = {
  displayName: "Newsletter Container",
  props: {
    background: "#d9d9d9",
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
    desktopHeight: 302,
    mobileHeight: 302,
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
    settings: NewsletterSettings,
  },
};

export const NewsLetterContainer_2 = ({
  children,
  background = "#ffffff",
  backgroundType = "color",
  backgroundSrc = "", // `image` or video src
  mobilePaddingX = 16,
  desktopPaddingX = 16,
  mobilePaddingY = 0,
  desktopPaddingY = 0,
  gapDesktop = 16,
  gapMobile = 34,
  desktopHeight = 182,
  mobileHeight = 250,
  desktopDirection = "horizontal",
  mobileDirection = "vertical",
  desktopAlignment = "center",
  mobileAlignment = "center",
  desktopPosition = "space-between",
  mobilePosition = "center",
  backgroundSize = "cover",
  backgroundPosition = "center",
  overlayOpacity = 40, // default 40% opacity
}) => {
  const { isDesktop } = useViewport();

  const {
    connectors: { connect, drag },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

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
        borderRadius: isDesktop
          ? `${props?.borderRadiusDesktop}px`
          : `${props?.borderRadiusMobile}px`,
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
          gap: isDesktop ? `${gapDesktop}px` : `${gapMobile}px`,
        }}
        className={cn(
          "flex transition-all duration-300 ease-in-out h-full w-full relative z-20", // <-- z-10 ensures it’s above the video
          direction === "vertical" ? "flex-col" : "flex-row",
          alignment === "left" && "items-start text-left",
          alignment === "center" && "items-center text-center",
          alignment === "right" && "items-end text-right",
          position === "top" && "justify-start",
          position === "center" && "justify-center",
          position === "bottom" && "justify-end",
          position === "space-between" && "justify-between"
        )}
      >
        {children}
      </div>
    </div>
  );
};

NewsLetterContainer_2.craft = {
  displayName: "Newsletter Container",
  props: {
    background: "#FF4D00",
    backgroundType: "color",
    backgroundSrc: "",
    desktopDirection: "horizontal",
    mobileDirection: "vertical",
    desktopAlignment: "center",
    mobileAlignment: "center",
    desktopPosition: "space-between",
    mobilePosition: "center",
    mobilePaddingX: 10,
    desktopPaddingX: 40,
    mobilePaddingY: 0,
    desktopPaddingY: 0,
    gapDesktop: 16,
    gapMobile: 34,
    desktopHeight: 182,
    mobileHeight: 252,
    backgroundSize: "cover",
    backgroundPosition: "center",
    overlayOpacity: 40, // default 40% opacity
    borderRadiusDesktop: 20,
    borderRadiusMobile: 20,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canDrop: () => false,
    canMoveOut: () => false,
  },
  related: {
    settings: NewsletterSettings_2,
  },
};

export const NewsLetterRender = () => {
  const {
    connectors: { connect, drag },
  } = useNode();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("data", data);
    alert("Subscribed successfully!");
  };

  return (
    <Element
      is="div"
      id="Hero-Content-1"
      canvas
      ref={(ref) => connect(drag(ref))}
    >
      <Element
        id="NewsLetterContainer"
        is={NewsLetterContainer}
        canvas
        custom={{
          displayName: "NewsLetter",
        }}
      >
        <Element
          id="NewsLetterContainer"
          is={NewsLetterContainer_2}
          canvas
          custom={{
            displayName: "NewsLetter Container",
          }}
        >
          <Element
            id="NewsLetterContainer"
            is={Container_2}
            canvas
            className=" p-2"
            custom={{
              displayName: "Text Container",
            }}
          >
            <Element
              is={Text}
              id="NewsLetter-Heading"
              text="Stay up to date about our latest offers"
              fontSizeDesktop={36}
              fontSizeMobile={24}
              fontWeight="700"
              color="#ffffff"
              widthDesktop={80}
              canvas={false}
            />
          </Element>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-full max-w-[349px] px-4 md:px-0"
          >
            <InputField
              placeholder="Enter your email"
              iconColor="#444444"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-black text-sm">{errors.email.message}</p>
            )}

            <Element
              is={Button}
              id="NewsletterButton"
              children="Subscribe to Newsletter"
              backgroundColor="#ffffff"
              borderRadius={100}
              padding={14}
              alignment="fill"
              canvas={false} // it's a single component, not a container
              type="submit" // important for RHF
            />
          </form>
        </Element>
      </Element>
    </Element>
  );
};
