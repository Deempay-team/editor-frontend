import { useEditor } from "@craftjs/core";
import React from "react";
import { AnnouncementBarRender } from "@/component/craft/ui-blocks/AnnouncementBar/AnnouncementBarRender.jsx";
import { Megaphone } from "lucide-react";
import { AnnouncementBarThumbnail_1 } from "@/assets/img";
import Image from "next/image";

const AnnouncementBar = ({ text = "Announcement Bar" }) => {
  const { connectors } = useEditor();
  return (
    // <div
    //   ref={(ref) => connectors.create(ref, <AnnouncementBarRender />)}
    //   className="bg-gray-800 text-white text-center flex items-center justify-center h-10 rounded-sm"
    // >
    //   <Megaphone size={18} className="opacity-90 mr-4" />
    //   {text}
    // </div>

    <div
      ref={(ref) => connectors.create(ref, <AnnouncementBarRender />)}
      className="overflow-hidden cursor-pointer"
    >
      <Image
        src={AnnouncementBarThumbnail_1}
        alt="Hero Section"
        width={302}
        height={126.75}
        className="rounded-lg  "
      />
    </div>
  );
};

export default AnnouncementBar;
