import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import HeaderSection from "@/section/HeaderSection";
import HeroSection from "@/section/HeroSection";
import ProductionsSection from "@/section/ProductionsSection";
import CollectionsSection from "@/section/CollectionsSection";
import FormSection from "@/section/FormSection";
import LayoutSection from "@/section/LayoutSection";
import StorytellingSection from "@/section/StorytellingSection";

import { ChevronLeft } from 'lucide-react';

import SiteThemePanel from "../sidebar-sections/theme/SiteThemePanel"
import ColorThemePanel from "../sidebar-sections/theme/ColorThemePanel"
import ColorPalettePanel from "../sidebar-sections/theme/ColorPalettePanel"
import TextThemePanel from "../sidebar-sections/theme/TextThemePanel"

const SiteThemeContent = ({ showRightSidebar }) => {
  const [activeTab, setActiveTab] = useState("Site theme");
  const [selectedColorTheme, setSelectedColorTheme] = useState("Site theme");

  const sections = [
    "Site theme",
    "Color theme",
    "Text theme",
    // "Page background",
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Site theme":
        return <SiteThemePanel />;
      case "Color theme":
        return <ColorThemePanel 
        setActiveTab={setActiveTab}
        setSelectedColorTheme={setSelectedColorTheme} 
        />;
      case "Text theme":
        return <TextThemePanel />;
      case "Page background":
        return <CollectionsSection />;
      case "Color palette":
        return <ColorPalettePanel />;
      default:
        return null;
    }
  };

  if (showRightSidebar !== "theme") return null;

  // h-[calc(100vh-4.5em)] 

  return (
    <aside className=" h-[calc(100vh-4.5em)] bg-yellow-500 w-full flex border-gray-200 shadow-lg z-10">
      <div className="w-[145px] bg-white mb-[16px] h-full">
        <div className="mb-[16px] border-b-[0.3px] border-b-[#DBDBDB]">
          <h1 className="text-[14px] text-[#6B6B6B] font-[500] leading-[20px]  py-[14px] pl-[12px]">
            Site Theme
          </h1>
        </div>

        <ul className="space-y-[10px]">
          {sections.map((tab) => (
            <li key={tab}>
              <div className="px-[5px]">
                <button
                  onClick={() => {
                    setActiveTab(tab)
                    setSelectedColorTheme(tab)
                  }}
                  className={`w-full text-left py-[7px] px-[12px] rounded-[8px] cursor-pointer text-[14px] leading-[18px] text-[#464646] transition ${selectedColorTheme === tab
                    ? "bg-[#F6F6F6]  font-medium"
                    : "hover:bg-gray-50 font-light"
                    }`}
                >
                  {tab}
                </button>
              </div>
            </li>
          ))}
        </ul>

      </div>
      <div className="flex-1 flex flex-col bg-[#F1F1F1] w-[350px] h-full overflow-hidden">
        <div className="flex justify-between items-center py-[14px] border-b border-b-[0.2px] border-gray-300 mx-[16px]">
          {activeTab === "Color palette" && (
            <button
              onClick={() => {
                setActiveTab("Color theme")
              }}
              className="cursor-pointer "
            >
              <ChevronLeft className="w-5 h-5 text-black" />
            </button>
          )}

          <h2 className="text-[14px] leading-[20px] font-[700] text-gray-700">{activeTab}</h2>
        </div>


        <ScrollArea className="flex-1 overflow-y-auto p-[16px] w-full ">
          {/* <div className="grid grid-cols-1 gap-4">{renderContent()}</div> */}
          {renderContent()}
        </ScrollArea>
      </div>

    </aside>
  );
};

export default SiteThemeContent;
