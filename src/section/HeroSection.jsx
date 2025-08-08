import React from "react";
import { useEditor } from "@craftjs/core";

const   HeroSection = () => {
  // const { connectors } = useEditor();

  return (
    <div className="grid grid-cols-1 gap-4">
      {[...Array(3)].map((_, i) => (
        <button
          key={i}
          // ref={(ref) => connectors.create(ref,)}
          className="rounded-md border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition bg-white"
        >
          <img
            src={`https://via.placeholder.com/400x160?text=Hero+${i + 1}`}
            alt={`Hero ${i + 1}`}
            className="w-full object-cover"
          />
        </button>
      ))}
    </div>
  );
};

export default HeroSection;