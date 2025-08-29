"use client";

import { useNode, Element } from "@craftjs/core";
import { cn } from "@/lib/utils";
import { TextX } from "./TextX";
import ColorPicker from "@/components/ui/ColorPicker";
import { SliderControl } from "../ui-blocks/SliderControl";
import { useViewport } from "@/Context/ViewportContext";
import { Container_2 } from "./Container_2";

export const Copyright = (props) => {
  const { isDesktop } = useViewport();
  const {
    connectors: { connect, drag },
  } = useNode();

  const year = new Date().getFullYear();

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className="flex items-center text-center md:text-left"
      style={{
        paddingLeft: isDesktop
          ? `${props?.paddingX + 24}px`
          : `${props?.paddingX}px`,
        paddingRight: isDesktop
          ? `${props?.paddingX + 24}px`
          : `${props?.paddingX}px`,
        paddingTop: `${props?.paddingY}px`,
        paddingBottom: `${props?.paddingY}px`,
        backgroundColor: props?.backgroundColor,
      }}
    >
      <Element
        id="Copyright-Content-1"
        is={Container_2}
        className=" w-full"
        canvas
      >
        <Element
          is={TextX}
          id="copyright-text"
          text={cn(
            "© ",
            year,
            " My Brand. All rights reserved. Powered by Storecra"
          )}
          fontSize={16}
          color={"#000000"}
          width={100}
          canvas={false}
        />
      </Element>
    </div>
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

export const CopyrightSettings = () => {
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

Copyright.craft = {
  displayName: "Copyright",
  props: {
    paddingX: 16,
    paddingY: 24,
    backgroundColor: "#E5E7EB",
  },
  related: {
    settings: CopyrightSettings,
  },
};
