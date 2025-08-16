import { useEditor } from "@craftjs/core";
import { HeroSectionRender } from "../component/craft/ui-blocks/HeroSection/HeroSectionRender";
import Image from "next/image";
import { heroSectionThumbnail_1 } from "@/assets/img";

const HeroSection = () => {
  const { connectors } = useEditor();

  return (
    <div className="">
      <div
        ref={(ref) => connectors.create(ref, <HeroSectionRender />)}
        className="overflow-hidden cursor-pointer"
      >
        <Image
          src={heroSectionThumbnail_1}
          alt="Hero Section"
          width={302}
          height={126.75}
          className="rounded-lg border-[0.5px] border-[rgba(107,107,107,1)] "
        />
      </div>
    </div>
  );
};

export default HeroSection;
