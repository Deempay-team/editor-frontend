import { useEditor } from "@craftjs/core";
import Image from "next/image";
import {ProfileRender} from "../component/craft/ui-blocks/Profile/ProfileRender.jsx";
import ProfileImg from "../assets/img/profile.png"

const ProfileSection = () => {
    const { connectors } = useEditor();

    return (
        <div className="">
            <div
                ref={(ref) => connectors.create(ref, <ProfileRender />)}
                className="overflow-hidden cursor-pointer"
            >
                <Image
                    src={ProfileImg}
                    alt="Order Section"
                    width={302}
                    height={126.75}
                    className="rounded-lg border-[0.5px] "
                />
            </div>
        </div>
    );
};

export default ProfileSection;
