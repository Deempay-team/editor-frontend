import React from "react";
import { useEditor } from "@craftjs/core";
import { NavigationBar } from "@/component/craft/ui-blocks/NavigationBar";

const StorytellingSection = () => {
  const { connectors } = useEditor();

  return (
    <div className="grid grid-cols-1 gap-4">
      <button
        ref={(ref) => connectors.create(ref, <NavigationBar />)}
        className="rounded-md border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition bg-white"
      >
        <img
          src="https://via.placeholder.com/400x160?text=Navigation+Bar"
          alt="Navigation Bar"
          className="w-full object-cover"
        />
      </button>
    </div>
  );
};

export default StorytellingSection;
