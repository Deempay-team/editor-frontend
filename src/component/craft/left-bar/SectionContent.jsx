import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import HeaderSection from "@/section/HeaderSection";
import HeroSection from "@/section/HeroSection";
import ProductionsSection from "@/section/ProductionsSection";
import CollectionsSection from "@/section/CollectionsSection";
import FormSection from "@/section/FormSection";
import LayoutSection from "@/section/LayoutSection";
import StorytellingSection from "@/section/StorytellingSection";

const SectionContent = ({ showRightSidebar }) => {
  const [activeTab, setActiveTab] = useState("Header");

  const sections = [
    "Header",
    "Hero",
    "Productions",
    "Collections",
    "Form",
    "Layout",
    "Storytelling",
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Header":
        return <HeaderSection />;
      case "Hero":
        return <HeroSection />;
      case "Productions":
        return <ProductionsSection />;
      case "Collections":
        return <CollectionsSection />;
      case "Form":
        return <FormSection />;
      case "Layout":
        return <LayoutSection />;
      case "Storytelling":
        return <StorytellingSection />;
      default:
        return null;
    }
  };

  if (showRightSidebar !== "section") return null;

  return (
    <aside className="h-[calc(100vh-4.5em)] w-full flex border-gray-200">
      <div className="w-[145px] bg-white">
        <div className="mb-5 border-b">
          <p className="text-xs text-[#6B6B6B] font-medium mb-5 mt-5 ml-3">
            Add Section
          </p>
        </div>
        <ul className="space-y-2">
          {sections.map((tab) => (
            <li key={tab}>
              <div className="px-1">
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left py-2 px-3 rounded-md text-sm transition ${
                    activeTab === tab
                      ? "bg-[#F6F6F6] text-[#464646] font-medium"
                      : "text-[#464646] hover:bg-gray-50 font-light"
                  }`}
                >
                  {tab}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`flex-1 flex flex-col ${
          activeTab === "Header" ? "bg-[#F6F6F6]" : "bg-white"
        }`}
      >
        <div
          className={`flex justify-between items-center  py-3.5 border-b border-[#8D9091] mx-4 ${
            activeTab === "Header" ? "bg-[#F6F6F6]" : "bg-white"
          }`}
        >
          <h2 className="text-sm font-bold text-[#464646]">{activeTab}</h2>
          <button className="text-sm px-3 py-1 bg-gray-50 hover:bg-gray-200 text-[#6B6B6B] rounded-md">
            Add Section
          </button>
        </div>
        <ScrollArea className="p-4 h-full overflow-y-auto">
          <div className="grid grid-cols-1 gap-4">{renderContent()}</div>
        </ScrollArea>
      </div>
    </aside>
  );
};

export default SectionContent;
