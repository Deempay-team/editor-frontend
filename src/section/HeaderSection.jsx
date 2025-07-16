import React from "react";
import { useEditor } from "@craftjs/core";
import { AnnouncementBar } from "@/component/craft/ui-blocks/AnnouncementBar";

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
            <img
             src="src\assets\icons\Screenshot 2025-07-05 at 12.57.36 1.png"
            alt=""
             />
          {/* <img
            src={`https://via.placeholder.com/400x160?text=Header+${i + 1}`}
            alt={`Header ${i + 1}`}
            className="w-full object-cover"
          /> */}
          
        </button>
      ))}
    </div>
  );
};

export default HeaderSection;
