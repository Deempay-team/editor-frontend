import React, { useState } from "react";
import Tooltip from "../Tooltip";

// import { Element, useEditor } from "@craftjs/core";
import { Container } from "./user/Container";
import { Button } from "./user/Button";

import OutLineIcon from "@/assets/icons/OutLineIcon";
import AddIcon from "@/assets/icons/AddIcon";
import FolderIcon from "@/assets/icons/FolderIcon";
import WaterDropIcon from "@/assets/icons/WaterDropIcon";
import ImageIcons from "@/assets/icons/ImageIcon";

import SectionContent from "./left-bar/SectionContent";
import ElementContent from "./left-bar/ElementContent";
import PageContent from "./left-bar/PageContent";
import SiteThemeContent from "./left-bar/SiteThemeContent"

const EditorSideBar = ({ hidden, showRightSidebar, setShowRightSidebar }) => {
  // const { connectors } = useEditor();
  // const [showRightSidebar, setShowRightSidebar] = useState("section");

  const handleToggle = (panel) => {
    setShowRightSidebar((prev) => (prev === panel ? "" : panel));
  };

  return (
    <div className={`flex ${hidden === "true" ? "hidden" : ""}`}>
      <aside>
        <div className="flex flex-col items-center w-[52px] h-[calc(100vh-4.5em)] bg-white shadow-xl/30 border-r border-[#F1F1F1]">
          <nav className="flex flex-1 flex-col gap-7 mt-[16px]">
            <Tooltip text="Add Section">
              <button
                className={`group relative rounded-xl p-2 transition-colors animate-glow duration-500 delay-200 ${
                  showRightSidebar === "section"
                    ? "bg-blue-50 text-blue-500"
                    : "text-black hover:bg-blue-50"
                }`}
                onClick={() => handleToggle("section")}
              >
                <OutLineIcon />
              </button>
            </Tooltip>

            <Tooltip text="Add Element">
              <button
                className={`group relative rounded-xl p-2 transition-colors  ${
                  showRightSidebar === "element"
                    ? "bg-blue-50 text-blue-500"
                    : "text-black hover:bg-blue-50"
                }`}
                onClick={() => handleToggle("element")}
              >
                <AddIcon />
              </button>
            </Tooltip>

            <Tooltip text="Pages">
              <button
                className={`group relative rounded-xl p-2 transition-colors ${
                  showRightSidebar === "page"
                    ? "bg-blue-50 text-blue-500"
                    : "text-black hover:bg-blue-50"
                }`}
                onClick={() => handleToggle("page")}
              >
                <FolderIcon />
              </button>
            </Tooltip>

            <Tooltip text="Media">
              <button
                className={`group relative rounded-xl p-2 transition-colors ${
                  showRightSidebar === "media"
                    ? "bg-blue-50 text-blue-500"
                    : "text-black hover:bg-blue-50"
                }`}
                onClick={() => handleToggle("media")}
              >
                <ImageIcons />
              </button>
            </Tooltip>

            <Tooltip text="Theme">
              <button
                className={`group relative rounded-xl p-1 transition-colors ${
                  showRightSidebar === "theme"
                    ? "bg-blue-50 text-primary"
                    : "text-black hover:bg-blue-50"
                }`}
                onClick={() => handleToggle("theme")}
              >
                <WaterDropIcon />
              </button>
            </Tooltip>
          </nav>
        </div>
      </aside>

      <SectionContent showRightSidebar={showRightSidebar} />
      <ElementContent
        showRightSidebar={showRightSidebar}
        setShowRightSidebar={setShowRightSidebar}
      />
      <PageContent showRightSidebar={showRightSidebar} />

      <SiteThemeContent showRightSidebar={showRightSidebar} />

      <aside
        className={`w-80 h-[calc(100vh-4.5em)] bg-white border-r border-gray-200 flex flex-col items-center justify-center ${
          showRightSidebar === "media" ? "" : "hidden"
        }`}
      >
        <p className="text-gray-500 text-sm">Media Panel</p>
      </aside>
    </div>
  );
};

export default EditorSideBar;
