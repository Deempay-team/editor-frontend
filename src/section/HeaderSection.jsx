import React from "react";
import { useEditor } from "@craftjs/core";
import { AnnouncementBar } from "@/component/craft/ui-blocks/AnnouncementBar";
import Image from 'next/image';
import preview from 'src/assets/icons/Image.png';

const HeaderSection = () => {
  const { connectors } = useEditor();

  return (
    <div className="grid grid-cols-1 gap-4">
      {[...Array(4)].map((_, i) => (
        <button
          key={i}
          ref={(ref) => connectors.create(ref, <AnnouncementBar />)}
          className="rounded-md border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition bg-white"
        >
          <Image src={preview} alt="Preview" width={600} height={0}   className="object-cover"
 />
        </button>
      ))}
    </div>
  );
};

export default HeaderSection;
