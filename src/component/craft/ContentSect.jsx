import React from "react";
import { Frame, Element, useEditor } from "@craftjs/core";
import cx from "classnames";

import { Container } from "./user/Container";
import { useViewport } from "../../Context/ViewportContext";
import { FooterSectionRender_2 } from "./ui-blocks/footer-section/FooterSectionRender_2";
import { NavigationBar } from "./ui-blocks/NavigationBar";
import { Copyright } from "./user/Copyright";
import { FooterSectionRender } from "./ui-blocks/footer-section/FooterSectionRender";

function ContentSectionSect() {
  const { viewport } = useViewport();

  const { enabled, connectors } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const getViewportWidth = () => {
    switch (viewport) {
      case "mobile":
        return "375px";
      case "tablet":
        return "768px";
      default:
        return "100%";
    }
  };

  return (
    <main className="viewport page-container bg-[#F6F6F6] flex justify-center pt-4 px-8 pb-30 min-h-screen">
      <div
        className={cx([
          "craftjs-renderer bg-white",
          {
            "bg-renderer-gray": enabled,
          },
        ])}
        ref={(ref) => {
          connectors.select(connectors.hover(ref), null);
        }}
        style={{
          width: getViewportWidth(),
          boxSizing: "border-box",
          // boxShadow: "0 10px 30px rgba(0, 0, 0, 0.10)",
        }}
      >
        <Frame>
          <Element
            is={Container}
            id="main-frame"
            background="transparent"
            width="100%"
            height="auto"
            flexDirection="column"
            fillSpace={false}
            alignItems="stretch"
            justifyContent="flex-start"
            canvas
            custom={{ displayName: "App" }}
          >
            {/* <Element id="Navigation Bar" is={NavigationBar} /> */}
{/*             <Element id="Footer Section" is={FooterSectionRender} /> */}
          </Element>
        </Frame>
      </div>
    </main>
  );
}

export { ContentSectionSect };
