import React from "react";
import { useEditor } from "@craftjs/core";
import { NavigationBar } from "@/component/craft/ui-blocks/NavigationBar.jsx";
import { Menu } from "lucide-react";

const HeaderSection = ({ text = "Header" }) => {
  const { connectors } = useEditor();

  return (
    <div
      className="bg-gray-800 text-white text-center flex items-center justify-center h-10 rounded-sm"
      ref={(ref) => connectors.create(ref, <NavigationBar />)}
    >
      <Menu size={18} className="opacity-90 mr-4" />
      {text}
    </div>
  );
};

export default HeaderSection;
