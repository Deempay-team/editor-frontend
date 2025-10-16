import { useEditor } from "@craftjs/core";
import Image from "next/image";
import {OrderRender} from "../component/craft/ui-blocks/Orders/OrderRender.jsx";
import OrderImg from "../assets/img/Order.png"

const OrderSection = () => {
    const { connectors } = useEditor();

    return (
        <div className="">
            <div
                ref={(ref) => connectors.create(ref, <OrderRender />)}
                className="overflow-hidden cursor-pointer"
            >
                <Image
                    src={OrderImg}
                    alt="Order Section"
                    width={302}
                    height={126.75}
                    className="rounded-lg border-[0.5px] "
                />
            </div>
        </div>
    );
};

export default OrderSection;
