import React from "react";
import { useEditor } from "@craftjs/core";
import { Header } from "@/component/craft/templates/Header";
import { HeaderPreview } from "@/component/craft/templates/HeaderPreview";

const headerVariants = [
  { props: { logoText: "My Website", bgColor: "#ffffff", textColor: "#000000" } },
  { props: { logoText: "Creative Studio", bgColor: "#222222", textColor: "#ffffff" } },
];

const HeaderSection = () => {
  const { connectors } = useEditor();

  return (
    <div className="grid grid-cols-1 gap-4">
      {headerVariants.map((variant, i) => (
        <div
          key={i}
          ref={(ref) => connectors.create(ref, <Header {...variant.props} />)}
          className="rounded-md border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition bg-white cursor-move"
        >
          <HeaderPreview {...variant.props} />
        </div>
      ))}
    </div>
  );
};

export default HeaderSection;
