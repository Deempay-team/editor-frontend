import { useEditor } from "@craftjs/core";
import Image from "next/image";
import AboutImg from "../assets/img/About.png"
import {AboutPageRender} from "../component/craft/ui-blocks/About/AboutRender.jsx";

const AboutSection = () => {
    const { connectors } = useEditor();

    return (
        <div className="">
            <div
                ref={(ref) => connectors.create(ref, <AboutPageRender />)}
                className="overflow-hidden cursor-pointer"
            >
                <Image
                    src={AboutImg}
                    alt="About Section"
                    width={302}
                    height={126.75}
                    className="rounded-lg border-[0.5px]"
                />
            </div>
        </div>
    );
};

export default AboutSection;
