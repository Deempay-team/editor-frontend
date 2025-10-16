import { useEditor } from "@craftjs/core";
import { ProductDetailsRender } from "../component/craft/ui-blocks/ProductDetails/ProductDetailsRender.jsx";
import Image from "next/image.js";
import React from "react";
import {ProductDetails} from "../assets/img/index.js";

const ProductDetailsSection = () => {
    const { connectors } = useEditor();

    return (
        <div>
            <button
                ref={(ref) => connectors.create(ref, <ProductDetailsRender />)}
                className="rounded-md border p-1 border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition bg-white flex items-center justify-center w-full h-full"
            >
                <Image
                    src={ProductDetails}
                    alt="Product Details"
                    width={800}
                    height={126.75}
                    className="rounded-lg"
                />
            </button>
        </div>
    );
};

export default ProductDetailsSection;
