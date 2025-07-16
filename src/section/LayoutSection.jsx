import React from "react";
import { useEditor } from "@craftjs/core";
import { Grid } from "@/component/craft/user/Grid";

const LayoutSection = () => {
  const { connectors } = useEditor();

  return (
    <div className="grid grid-cols-1 gap-4">
      <button
        ref={(ref) => connectors.create(ref, <Grid />)}
        className="rounded-md border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition bg-white"
      >
        <img
          src="https://via.placeholder.com/400x160?text=Grid+Layout"
          alt="Grid Layout"
          className="w-full object-cover"
        />
      </button>
    </div>
  );
};

export default LayoutSection;
