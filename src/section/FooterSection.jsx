import { useEditor } from "@craftjs/core";
import { FooterSectionRender } from "../component/craft/ui-blocks/footer-section/FooterSectionRender";
import Image from "next/image";
import { FooterThumbnail_1, FooterThumbnail_2 } from "@/assets/img";
import { FooterSectionRender_2 } from "@/component/craft/ui-blocks/footer-section/FooterSectionRender_2";

const FooterSection = () => {
  const { connectors } = useEditor();

  return (
    <div className=" flex flex-col items-center justify-center gap-4">
      <div
        ref={(ref) => connectors.create(ref, <FooterSectionRender />)}
        className="overflow-hidden cursor-pointer"
      >
        <Image
          src={FooterThumbnail_1}
          alt="Footer Section"
          width={302}
          height={126.75}
          className="rounded-lg border-[0.5px] border-[rgba(107,107,107,1)] "
        />
      </div>

      <div
        ref={(ref) => connectors.create(ref, <FooterSectionRender_2 />)}
        className="overflow-hidden cursor-pointer"
      >
        <Image
          src={FooterThumbnail_2}
          alt="Footer Section"
          width={302}
          height={126.75}
          className="rounded-lg border-[0.5px] border-[rgba(107,107,107,1)] "
        />
      </div>
    </div>
  );
};

export default FooterSection;
