import { useEditor } from "@craftjs/core";
import { NewsLetterRender } from "../component/craft/ui-blocks/Newsletter/NewsLetterRender";
import Image from "next/image";
import { NewsletterThumbnail } from "@/assets/img";

const Newsletter = () => {
  const { connectors } = useEditor();

  return (
    <div className="">
      <div
        ref={(ref) => connectors.create(ref, <NewsLetterRender />)}
        className="overflow-hidden cursor-pointer"
      >
        <Image
          src={NewsletterThumbnail}
          alt="Hero Section"
          width={302}
          height={126.75}
          className="rounded-lg border-[0.5px] border-[rgba(107,107,107,1)] "
        />
      </div>
    </div>
  );
};

export default Newsletter;
