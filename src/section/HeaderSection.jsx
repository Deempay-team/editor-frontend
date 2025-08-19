import React from "react";
import { useEditor } from "@craftjs/core";
import { NavigationBar } from "@/component/craft/ui-blocks/NavigationBar.jsx";
import { NavbarThumbnail_1 } from "@/assets/img";
import Image from "next/image";

const HeaderSection = ({ text = "Header" }) => {
  const { connectors } = useEditor();

  return (
    <div
      ref={(ref) => connectors.create(ref, <NavigationBar />)}
      className="overflow-hidden cursor-pointer"
    >
      <Image
        src={NavbarThumbnail_1}
        alt="Hero Section"
        width={302}
        height={126.75}
        className="rounded-lg border-[0.5px] border-[rgba(107,107,107,1)] "
      />
    </div>
  );
};

export default HeaderSection;
