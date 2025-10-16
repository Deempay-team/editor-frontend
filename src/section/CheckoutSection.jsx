import { useEditor } from "@craftjs/core";
import Image from "next/image";
import CheckoutImg from "../assets/img/Checkout.png"
import {CheckoutRender} from "../component/craft/ui-blocks/Checkout/Checkout.jsx";

const CheckoutSection = () => {
    const { connectors } = useEditor();

    return (
        <div className="">
            <div
                ref={(ref) => connectors.create(ref, <CheckoutRender />)}
                className="overflow-hidden cursor-pointer"
            >
                <Image
                    src={CheckoutImg}
                    alt="Order Section"
                    width={302}
                    height={126.75}
                    className="rounded-lg border-[0.5px]"
                />
            </div>
        </div>
    );
};

export default CheckoutSection;
