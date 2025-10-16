// src/component/craft/ContentSect.jsx
import React, { useContext, useEffect, useState } from "react";
import { Frame, Element, useEditor } from "@craftjs/core";
import cx from "classnames";

import { Container } from "./user/Container";
import { useViewport } from "../../Context/ViewportContext";
import { NavigationBar } from "./ui-blocks/NavigationBar";
import { FooterSectionRender } from "./ui-blocks/footer-section/FooterSectionRender";
import { ShopContext } from "@/Context/ShopContext";
import { compress, decompress } from "@/utils/storage";
import craftDefaultPages from "../../data/craftDefaultPages";
import { ProductsPageRender } from "./ui-blocks/ProductsPage/ProductsPageRender";
// import { getAllKeys } from "@/utils/functions";

function ContentSectionSect() {
  const { viewport } = useViewport();
  const { currentPage, pages } = useContext(ShopContext);
  const [frameData, setFrameData] = React.useState(null);
  const [isClient, setIsClient] = useState(false);
  // console.log("frameData", frameData ? true : false);

  const { enabled, connectors, actions } = useEditor((state) => ({
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

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && currentPage) {
      const raw = pages?.[currentPage] || craftDefaultPages[currentPage];
      try {
        const json = raw ? decompress(raw) : null;

        if (json) {
          setFrameData(json);
        } else {
          console.warn("Invalid frame data, falling back to default");
          setFrameData(decompress(craftDefaultPages[currentPage]));
        }
      } catch (err) {
        console.error("Failed to parse frame data", err);
        setFrameData(decompress(craftDefaultPages[currentPage]));
      }
    }
  }, [currentPage, isClient, pages]);
  // console.log("frameData?.ROOT", frameData ? true : false);

  return (
      <main className="viewport page-container bg-[#F6F6F6] flex justify-center pt-4 px-8 pb-25 min-h-screen"
            style={{
                height: "100vh",
                overflow: "hidden",
            }}>
      <div
          className={cx([
              "craftjs-renderer bg-white relative overflow-hidden",
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
            overflowY: "auto",
        }}
      >
        {/* {frameData && <Frame data={frameData} />} */}
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
            <Element id="NavigationBar" is={NavigationBar} />
            <Element id="ProductsPageRender" is={ProductsPageRender} />
            <Element id="FooterSectionRender" is={FooterSectionRender} />
          </Element>
        </Frame>
      </div>
    </main>
  );
}

export {ContentSectionSect};
