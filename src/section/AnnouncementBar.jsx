import { useEditor } from "@craftjs/core";
import React from "react";
import { AnnouncementBarRender } from "@/component/craft/ui-blocks/AnnouncementBar/AnnouncementBarRender.jsx";
import { Megaphone } from "lucide-react";

const AnnouncementBar = ({ text = "Announcement Bar" }) => {
  const { connectors } = useEditor();
  return (
    <div
      ref={(ref) => connectors.create(ref, <AnnouncementBarRender />)}
      className="bg-gray-800 text-white text-center flex items-center justify-center h-10 rounded-sm"
    >
      <Megaphone size={18} className="opacity-90 mr-4" />
      {text}
    </div>
  );
};

export default AnnouncementBar;
