import React from "react";
import Link from "next/link";
import { useNode, Element } from "@craftjs/core";
import { Text } from "../../user/Text/Text.jsx";
import { Button } from "../../user/Button";
import { Image } from "../../user/Image.jsx";
import { QuantitySelector } from "../QuantitySelector.jsx";
import { Container_2 } from "../../user/Container_2.jsx";
import { PillsTag } from "../PillsTag.jsx";
import { StarIcon } from "../StarIcon.jsx";
import { TagIcon } from "../TagIcon.jsx";
import {useViewport} from "../../../../Context/ViewportContext.jsx";
import {ProductDetailsSettings} from "./ProductDetailsSettings.jsx";

export const ProductDetailsRender = ({
                                         backgroundColor = "#ffffff",
                                         borderColor = "#e5e7eb",
                                         borderRadius = 0,
                                         padding = 16,
                                         productTitle = "Feroglobin Liquid Plus...",
                                         price = "₦120,000",
                                         originalPrice = "₦220,000",
                                         discount = "25% off",
                                         rating = 4.9,
                                         reviews = 98,
                                         description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.",
                                         productImages = [
                                             "/assets/Img.png",
                                             "/assets/Img2.png",
                                             "/assets/Img3.png",
                                             "/assets/Img4.png",
                                         ],
                                         thumbnailCount = 4,
                                         showNewArrival = true,
                                         thumbnailBorderWidth = 1,
                                         thumbnailBorderRadius = 4,
                                         thumbnailBorderColor = "#e5e7eb",
                                         thumbnailActiveBorderColor = "#FF4D00",
                                         children,
                                     }) => {
    const {
        connectors: { connect, drag },
    } = useNode();
    const { viewport } = useViewport();
    const [activeThumbnail, setActiveThumbnail] = React.useState(0);


    const currentImageSrc =
        productImages[activeThumbnail] || productImages[0] || "/assets/Img.png";

    React.useEffect(() => { }, [activeThumbnail]);

    return (
        <div
            ref={(ref) => connect(drag(ref))}
            style={{
                backgroundColor,
                borderRadius: `${borderRadius}px`,
                padding: `${padding}px`,
            }}
            className="p-4 sm:p-6"
        >
            <div
                className={`flex ${viewport === "mobile" ? "flex-col gap-4" : "flex-col lg:flex-row gap-6 mr-2 justify-end lg:items-start"
                }`}
            >
                {viewport !== "mobile" && (
                    <div className="flex flex-row lg:flex-col gap-4 justify-center items-center">
                        {[...Array(thumbnailCount)].map((_, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveThumbnail(index)}
                                className="flex items-center justify-center w-[80px] h-[100px] min-h-[60px] sm:w-[100px] sm:h-[120px] md:w-[120px] md:h-[160px] lg:w-[150px] lg:h-[150px] p-[2px]  cursor-pointer"

                                style={{
                                    borderWidth: `${thumbnailBorderWidth}px`,
                                    borderStyle: "solid",
                                    borderColor:
                                        activeThumbnail === index
                                            ? thumbnailActiveBorderColor
                                            : thumbnailBorderColor,
                                    borderRadius: `${thumbnailBorderRadius}px`,
                                }}
                            >
                                <Element
                                    is={Container_2}
                                    id={`product-thumbnail-container-${index}`}
                                    canvas
                                    className="w-full h-full"
                                >
                                    <Element
                                        is={Image}
                                        id={`thumbnail-image-${index}`}
                                        src={productImages[index] || "/assets/Img.png"}
                                        alt={`Product Thumbnail ${index + 1}`}
                                        objectFit="cover"
                                        widthMode="full"
                                        heightMode="full"
                                        height="100%"
                                        className="w-full h-full rounded-[inherit]"
                                        canvas
                                    />
                                </Element>
                            </div>
                        ))}
                    </div>
                )}

                <div
                    className="relative bg-white rounded-lg p-4"
                    style={{ borderColor, backgroundColor }}
                >
                    {showNewArrival && (
                        <div className="flex items-center mb-4">
                            <Element is={Container_2} id="product-pills-tag-container" canvas>
                                <Element
                                    is={PillsTag}
                                    id="product-pills-tag"
                                    backgroundColor="#FF4D00"
                                    textColor="#FFFFFF"
                                    text="New Arrival"
                                    canvas
                                />
                            </Element>
                        </div>
                    )}
                    <div>
                        <img
                            src={currentImageSrc}
                            alt={`Product Image ${activeThumbnail + 1}`}
                            className={`w-full h-auto object-cover rounded-lg ${viewport === "mobile" ? "max-w-[300px] mx-auto" : "md:max-w-[640px]"
                            }`}
                            key={activeThumbnail}
                        />
                    </div>
                </div>

                {viewport === "mobile" && (
                    <div className="flex flex-row overflow-x-auto gap-2 pb-2 justify-center">
                        {[...Array(thumbnailCount)].map((_, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveThumbnail(index)}
                                className="flex items-center justify-center w-[80px] h-[80px] min-w-[60px] p-[2px] cursor-pointer"
                                style={{
                                    borderWidth: `${thumbnailBorderWidth}px`,
                                    borderStyle: "solid",
                                    borderColor:
                                        activeThumbnail === index
                                            ? thumbnailActiveBorderColor
                                            : thumbnailBorderColor,
                                    borderRadius: `${thumbnailBorderRadius}px`,
                                }}
                            >
                                <Element
                                    is={Container_2}
                                    id={`product-thumbnail-container-${index}`}
                                    canvas
                                    className="w-full h-full"
                                >
                                    <Element
                                        is={Image}
                                        id={`thumbnail-image-${index}`}
                                        src={productImages[index] || "/assets/Img.png"}
                                        alt={`Product Thumbnail ${index + 1}`}
                                        objectFit="cover"
                                        widthMode="full"
                                        heightMode="full"
                                        className="w-full h-full rounded-[inherit]"
                                        canvas
                                    />
                                </Element>
                            </div>
                        ))}
                    </div>
                )}

                <div
                    className={`flex flex-col ${viewport === "mobile"
                        ? "gap-4 p-4"
                        : "w-full md:w-[460px] md:min-h-[497px] gap-6 md:gap-[24px] p-4 md:p-[19px]"
                    } border rounded-[16px] bg-white`}
                    style={{ borderColor, backgroundColor }}
                >
                    <div>
                        <h2
                            className={`font-semibold ${viewport === "mobile"
                                ? "text-xl"
                                : "text-2xl sm:text-3xl md:text-4xl"
                            } text-gray-900 mb-2 mt-5`}
                        >
                            <Element is={Container_2} id="product-title-container" canvas>
                                <Element
                                    is={Text}
                                    id="producttitle"
                                    text={productTitle}
                                    fontWeight="600"
                                    color="#000000"
                                    fontSizeDesktop={viewport === "mobile" ? 24 : 40}
                                    fontSizeMobile={24}
                                    lineHeight={1.4}
                                    charSpacing={0}
                                    canvas
                                />
                            </Element>
                        </h2>
                        <div className="flex items-center gap-1 mb-4">
                            <Element is={Container_2} id="product-star-container" canvas>
                                <Element
                                    is={StarIcon}
                                    id="StarIcon"
                                    iconSize={viewport === "mobile" ? 14 : 17}
                                    iconColor="#FF4D00"
                                    canvas
                                />
                            </Element>
                            <span className="text-gray-800 font-medium">
                <Element is={Container_2} id="product-ratings-container" canvas>
                  <Element
                      is={Text}
                      id="producratings"
                      text={rating.toString()}
                      fontWeight="400"
                      color="#4B5563"
                      fontSizeDesktop={viewport === "mobile" ? 14 : 16}
                      fontSizeMobile={14}
                      charSpacing={0}
                      canvas
                  />
                </Element>
              </span>
                            <span className="text-gray-400">
                <Element is={Container_2} id="product-reviews-container" canvas>
                  <Element
                      is={Text}
                      id="producreviews"
                      text={`(${reviews} reviews)`}
                      fontWeight="400"
                      color="#4B5563"
                      fontSizeDesktop={viewport === "mobile" ? 14 : 16}
                      fontSizeMobile={14}
                      canvas
                  />
                </Element>
              </span>
                        </div>
                        <div className="mb-4">
                            <div
                                className={`text-gray-900 font-bold ${viewport === "mobile" ? "text-xl" : "text-2xl md:text-[56px]"
                                }`}
                            >
                                <Element is={Container_2} id="product-price-container" canvas>
                                    <Element
                                        is={Text}
                                        id="productprice"
                                        text={price}
                                        fontWeight="600"
                                        color="#000000"
                                        fontSizeDesktop={viewport === "mobile" ? 24 : 56}
                                        fontSizeMobile={24}
                                        canvas
                                    />
                                </Element>
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                                <Element is={Container_2} id="product-tag-container" canvas>
                                    <Element
                                        is={TagIcon}
                                        id="TagIcon"
                                        iconSize={viewport === "mobile" ? 14 : 17}
                                        iconColor="#FF4D00"
                                        canvas
                                    />
                                </Element>
                                <div
                                    className={`text-gray-400 ${viewport === "mobile" ? "text-xs" : "text-sm"
                                    } line-through`}
                                >
                                    <Element is={Container_2} id="product-discount-container" canvas>
                                        <Element
                                            is={Text}
                                            id="productDiscountPrice"
                                            text={originalPrice}
                                            fontWeight="400"
                                            color="#212121B2"
                                            fontSizeDesktop={viewport === "mobile" ? 12 : 14}
                                            fontSizeMobile={12}
                                            canvas
                                        />
                                    </Element>
                                </div>
                                <div
                                    className={`text-gray-400 ${viewport === "mobile" ? "text-xs" : "text-sm"
                                    }`}
                                >
                                    <Element is={Container_2} id="product-discount-off-container" canvas>
                                        <Element
                                            is={Text}
                                            id="productdiscount"
                                            text={discount}
                                            fontWeight="400"
                                            color="#212121B2"
                                            fontSizeDesktop={viewport === "mobile" ? 12 : 14}
                                            fontSizeMobile={12}
                                            canvas
                                        />
                                    </Element>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`text-gray-700 font-light font-[Poppins] ${viewport === "mobile" ? "text-sm" : "text-sm md:text-[17px]"
                            } mb-6`}
                        >
                            <Element is={Container_2} id="product-description-container" canvas>
                                <Element
                                    is={Text}
                                    id="productdescription"
                                    text={description}
                                    fontWeight="400"
                                    color="#7E7E7E"
                                    fontSizeDesktop={viewport === "mobile" ? 14 : 17}
                                    fontSizeMobile={14}
                                    canvas
                                />
                            </Element>
                        </div>
                        <div className="mt-6">
                            <Element is={Container_2} id="volume-container" canvas>
                                <Element
                                    is={Text}
                                    id="volume"
                                    text="Choose volume"
                                    fontWeight="600"
                                    color="#1f1e1e"
                                    fontSizeDesktop={viewport === "mobile" ? 12 : 14}
                                    fontSizeMobile={12}
                                    canvas
                                />
                            </Element>
                        </div>
                        <span className="flex flex-row gap-2 mt-2">
              <Element
                  is={Container_2}
                  id="volume-buttons-container"
                  canvas
                  className="flex flex-row gap-2"
              >
                <Element
                    is={Button}
                    id="ML"
                    children="200ML"
                    backgroundColor="#FF4D00"
                    fontWeight="400"
                    textColor="#FFFFFF"
                    fontSizeDesktop={viewport === "mobile" ? 10 : 12}
                    fontSizeMobile={10}
                    canvas
                />
                <Element
                    is={Button}
                    id="chsvolume"
                    children="250ML"
                    backgroundColor="#F0F0F0"
                    textColor="#00000099"
                    fontWeight="400"
                    fontSizeDesktop={viewport === "mobile" ? 10 : 12}
                    fontSizeMobile={10}
                    canvas
                />
              </Element>
            </span>
                        <div className="mt-4">
                            <Element is={Container_2} id="from-container" canvas>
                                <Element
                                    is={Text}
                                    id="from"
                                    text="Choose From"
                                    fontWeight="600"
                                    color="#1f1e1e"
                                    fontSizeDesktop={viewport === "mobile" ? 12 : 14}
                                    fontSizeMobile={12}
                                    canvas
                                />
                            </Element>
                        </div>
                        <span className="flex flex-row gap-2 mt-2">
              <Element
                  is={Container_2}
                  id="form-buttons-container"
                  canvas
                  className="flex flex-row gap-2"
              >
                <Element
                    is={Button}
                    id="liquid"
                    children="Liquid"
                    backgroundColor="#FF4D00"
                    textColor="#FFFFFF"
                    fontSizeDesktop={viewport === "mobile" ? 10 : 12}
                    fontSizeMobile={10}
                    fontWeight="400"
                    canvas
                />
                <Element
                    is={Button}
                    id="solid"
                    children="Solid"
                    backgroundColor="#F0F0F0"
                    textColor="#00000099"
                    fontWeight="400"
                    fontSizeDesktop={viewport === "mobile" ? 10 : 12}
                    fontSizeMobile={10}
                    canvas
                />
              </Element>
            </span>
                    </div>

                    <div
                        className={`flex ${viewport === "mobile" ? "flex-col gap-3" : "flex-col sm:flex-row gap-4"
                        } items-center mt-auto`}
                    >
                        <Element is={Container_2} id="product-quantity-selector-container" canvas>
                            <Element
                                is={QuantitySelector}
                                id="quantity-selector"
                                backgroundColor="#F8F8F8"
                                textColor="#4B5563"
                                height={viewport === "mobile" ? "32" : "40"}
                                width={viewport === "mobile" ? "90" : "110"}
                                borderRadius="4"
                                canvas
                            />
                        </Element>

                        <div className={`flex  gap-2 ${viewport === "mobile" ? "flex-col" : ""}`}>
                            <Link href="" className="w-full">
                                <Element is={Container_2} id="product-buynow-container" canvas>
                                    <Element
                                        is={Button}
                                        id="buynow"
                                        children="Buy Now"
                                        backgroundColor="#FF4D00"
                                        fontSizeDesktop={14}
                                        fontSizeMobile={12}
                                        // paddingX={50}
                                        paddingXMobile={128}
                                        canvas
                                    />
                                </Element>
                            </Link>
                            <Link href="" className="w-full">
                                <Element is={Container_2} id="product-addtocart-container" canvas>
                                    <Element
                                        is={Button}
                                        id="addtocart"
                                        children="Add to Cart"
                                        backgroundColor="#FF4D00"
                                        textColor="#FF4D00"
                                        borderWidth={1}
                                        borderStyle="solid"
                                        variant="outline"
                                        fontSizeDesktop={14}
                                        fontSizeMobile={12}
                                        // paddingX={50}
                                        paddingXMobile={120}
                                        canvas
                                    />
                                </Element>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
};

ProductDetailsRender.craft = {
    displayName: "Product Details",
    props: {
        backgroundColor: "#ffffff",
        borderColor: "#e5e7eb",
        borderRadius: 0,
        padding: 16,
        productTitle: "Feroglobin Liquid Plus...",
        price: "₦120,000",
        originalPrice: "₦220,000",
        discount: "25% off",
        rating: 4.9,
        reviews: 98,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.",
        productImages: [
            "/img/feroglobin-liquid-supplement-bottle.jpg",
            "/img/feroglobin-liquid-supplement-bottle-ingredients.jpg",
            "/img/feroglobin-liquid-supplement-bottle-back-view.jpg",
            "/img/product1.webp",
        ],
        thumbnailCount: 4,
        showNewArrival: true,
        thumbnailBorderWidth: 1,
        thumbnailBorderRadius: 4,
        thumbnailBorderColor: "#e5e7eb",
        thumbnailActiveBorderColor: "#FF4D00",
    },
    rules: {
        canDrag: () => true,
        canMoveIn: () => true,
        canDelete: () => true,
    },
    related: {
        settings: ProductDetailsSettings,
    },
};
