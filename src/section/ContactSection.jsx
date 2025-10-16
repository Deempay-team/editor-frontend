import { useEditor } from "@craftjs/core";
import Image from "next/image";
import AboutImg from "../assets/img/About.png"
import {ContactPageRender} from "../component/craft/ui-blocks/ContactPage/ContactPageRender.jsx";
import ContactImg from "../assets/img/Contact.png"

const ContactSection = () => {
    const { connectors } = useEditor();

    return (
        <div className="">
            <div
                ref={(ref) => connectors.create(ref, <ContactPageRender />)}
                className="overflow-hidden cursor-pointer"
            >
                <Image
                    src={ContactImg}
                    alt="Contact Section"
                    width={302}
                    height={126.75}
                    className="rounded-lg border-[0.5px]"
                />
            </div>
        </div>
    );
};

export default ContactSection;
