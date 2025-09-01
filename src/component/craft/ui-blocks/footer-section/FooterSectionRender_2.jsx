import { Element, useNode } from "@craftjs/core";
import { cn } from "@/lib/utils.js";
import { TextX } from "../../user/TextX";
import { Logo } from "../Logo";
import { Text } from "../../user/Text";
import { SocialIcons } from "../SocialIcons";
import { FooterContent, FooterSectionSettings } from "./FooterSectionRender";

export const FooterSectionRender_2 = () => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <Element
      is="div"
      id="Footer-Content-1"
      canvas
      ref={(ref) => connect(drag(ref))}
      className={cn("container mx-auto w-full bg-[#E5E7EB] overflow-hidden")}
    >
      <Element
        id="Footer-Content-1"
        is={FooterContent}
        canvas
        custom={{
          displayName: "Footer Section",
        }}
      >
        {/* Brand Info */}
        <Element
          id="Brand-info"
          is="div"
          className="flex flex-col items-start space-y-4 min-w-[200px]"
        >
          <Element
            is={Logo}
            id="footer-text-logo"
            logoText="Pharmacy"
            logoFontSize={20}
            logoTextColor={"#000000"}
            logoFontWeight="600"
            logoImageHeight={26}
            canvas={false}
          />

          <Element
            is={TextX}
            id="footer-aboutus-text"
            text="We bring comfort to your doorsteps."
            fontSize={16}
            color={"#000000"}
            canvas={false}
          />
        </Element>

        {/* Information Links */}
        <Element
          id="Information-Links"
          is="div"
          className="flex flex-col space-y-3 min-w-[150px]"
        >
          <Element
            is={Text}
            id="Information"
            text="Information"
            fontSizeDesktop={18}
            fontWeight={600}
            color={"#000000"}
            canvas={false}
          />
          <Element
            is={Text}
            id="Home"
            text="Home"
            fontSizeDesktop={16}
            color={"#000000"}
            canvas={false}
          />
          <Element
            is={Text}
            id="Products"
            text="Products"
            fontSizeDesktop={16}
            color={"#000000"}
            canvas={false}
          />

          <Element
            is={Text}
            id="Contact"
            text="Contact"
            fontSizeDesktop={16}
            color={"#000000"}
            canvas={false}
          />

          <Element
            is={Text}
            id="About"
            text="About Us"
            fontSizeDesktop={16}
            color={"#000000"}
            canvas={false}
          />
        </Element>

        {/* Terms */}
        <Element
          id="Terms"
          is="div"
          className="flex flex-col space-y-3 min-w-[200px]"
        >
          <Element
            is={Text}
            id="Terms"
            text="Terms"
            fontSizeDesktop={18}
            fontWeight={600}
            color={"#000000"}
            canvas={false}
          />
          <Element
            is={Text}
            id="Shipping-Delivery"
            text="Shipping & Delivery"
            fontSizeDesktop={16}
            color={"#000000"}
            canvas={false}
          />
          <Element
            is={Text}
            id="Return-Refund-Policy"
            text="Return & Refund Policy"
            fontSizeDesktop={16}
            color={"#000000"}
            canvas={false}
          />

          <Element
            is={Text}
            id="Terms"
            text="Terms & Conditions"
            fontSizeDesktop={16}
            color={"#000000"}
            canvas={false}
          />

          <Element
            is={TextX}
            id="Privacy-Policy"
            text="Privacy Policy"
            fontSize={16}
            color={"#000000"}
            canvas={false}
          />
        </Element>

        {/* Get in Touch */}
        <Element
          id="Get-in-Touch"
          is="div"
          className="flex flex-col space-y-3 min-w-[200px]"
        >
          <Element
            is={Text}
            id="Get-in-Touch"
            text="Get in Touch"
            fontSizeDesktop={18}
            fontWeight={600}
            color={"#000000"}
            canvas={false}
          />
          <Element
            is={TextX}
            id="phone-number"
            text="+234-813-4902-354"
            fontSize={16}
            color={"#000000"}
            canvas={false}
          />
          <Element
            is={TextX}
            id="phone-number"
            text="support@storecra.com"
            fontSize={16}
            color={"#000000"}
            canvas={false}
          />
          <Element id="SocialIcons" is={SocialIcons} />
        </Element>
      </Element>
    </Element>
  );
};

FooterContent.craft = {
  props: {
    backgroundColor: "#E5E7EB",
    paddingX: 24,
    paddingY: 40,
    gap: 24,
    showBorder: true,
  },
  related: {
    settings: FooterSectionSettings,
  },
};
