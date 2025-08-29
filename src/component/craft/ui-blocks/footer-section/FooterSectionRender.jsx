import { Element, useNode } from "@craftjs/core";
import { cn } from "@/lib/utils.js";
import { TextX } from "../../user/TextX";
import { Logo } from "../Logo";
import { Text } from "../../user/Text";
import { SocialIcons } from "../SocialIcons";
import { useViewport } from "@/Context/ViewportContext";
import { SliderControl } from "../SliderControl";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import ColorPicker from "@/components/ui/ColorPicker";
import { Copyright } from "../../user/Copyright";

export const FooterContent = ({ children }) => {
  const {
    connectors: { connect, drag },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  const { isDesktop } = useViewport();

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className="w-full"
      style={{
        paddingLeft: `${props.paddingX}px`,
        paddingRight: `${props.paddingX}px`,
        paddingTop: `${props.paddingY}px`,
        paddingBottom: `${props.paddingY}px`,
        display: "grid",
        gridTemplateColumns: isDesktop
          ? "repeat(4, minmax(0, 1fr))"
          : "repeat(1, minmax(0, 1fr))",
        gap: isDesktop ? `${props.gap}px` : `${props.gap + 24}px`,
        backgroundColor: props.backgroundColor,
        borderBottom: props.showBorder ? "1px dashed #000000" : "none",
      }}
    >
      {children}
    </div>
  );
};

export const FooterSectionRender = () => {
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
            is={Text}
            id="footer-aboutus-text"
            text="We bring comfort to your doorsteps."
            fontSizeDesktop={16}
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

      {/* Bottom Note */}
      <Element id="Footer Section" is={Copyright} />
    </Element>
  );
};

const Section = ({ title, children, className }) => (
  <div className="space-y-3 mt-4">
    <h3 className="text-xs font-semibold text-gray-800 uppercase tracking-wide">
      {title}
    </h3>
    <div className={cn("space-y-5", className)}>{children}</div>
  </div>
);

export const FooterSectionSettings = () => {
  const {
    props,
    actions: { setProp },
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="bg-white space-y-6">
      <Section title="Background" className=" border-b border-gray-200 pb-5">
        <ColorPicker
          label="Color"
          value={props.backgroundColor}
          onChange={(val) => setProp((p) => (p.backgroundColor = val))}
        />
      </Section>
      <Section title="Layout" className="pb-5">
        <div className="flex items-center justify-between py-2 rounded-md hover:bg-gray-50">
          <Label>Show Bottom Border</Label>
          <Switch
            checked={props.showBorder}
            onCheckedChange={(v) => setProp((p) => (p.showBorder = v))}
          />
        </div>

        <SliderControl
          value={props.gap}
          label="Gap"
          stack={true}
          onChange={(val) => setProp((p) => (p.gap = val))}
        />

        {/* Padding Y */}
        <SliderControl
          value={props.paddingY}
          label="Padding Vertical"
          stack={true}
          onChange={(val) => setProp((p) => (p.paddingY = val))}
        />

        {/* Padding X */}
        <SliderControl
          value={props.paddingX}
          label="Padding Horizontal"
          stack={true}
          onChange={(val) => setProp((p) => (p.paddingX = val))}
        />
      </Section>
    </div>
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
