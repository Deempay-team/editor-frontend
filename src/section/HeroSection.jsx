import { useEditor } from "@craftjs/core";
import { HeroSectionRender } from "../component/craft/ui-blocks/HeroSection/HeroSectionRender";

const HeroSection = () => {
  const { connectors } = useEditor();

  return (
    <div
      ref={(ref) => connectors.create(ref, <HeroSectionRender />)}
      className="bg-gray-800 text-white text-center flex items-center justify-center h-10 rounded-sm"
    >
      {/* <Megaphone size={18} className="opacity-90 mr-4" /> */}
      Hero Section
    </div>
  );
};

export default HeroSection;
