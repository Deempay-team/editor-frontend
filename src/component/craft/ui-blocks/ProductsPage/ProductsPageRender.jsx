import { Element, useEditor, useNode } from "@craftjs/core";
import { useViewport } from "@/Context/ViewportContext";
import { Text } from "../../user/Text";
import { Button } from "../../user/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useContext, useRef, useState } from "react";
// import { ProductCard } from "../ProductCard/ProductCard";
import { ProductCard2 } from "../ProductCard/ProductCard-2";
import { Image } from "../../user/Image";
import Link from "next/link";
import { SpacerRender } from "../../ui-blocks/SpacerRender";
// import { ShopContext } from "@/Context/ShopContext";
import { getPercentageOff } from "@/utils/functions";
import { StarIcon } from "../../ui-blocks/StarIcon";
import { Button as ShadButton } from "@/components/ui/button";
import { ProductCollectionSettings } from "../ProductCollection/ProductCollectionSettings";
// import { ScrollToTopButton } from "@/component/ScrollToTopButton";

const categories = [
  "Babies & Maternity",
  "Body & Personal care",
  "Face & Skin care",
  "First aid & Emergency",
  "Hair Care",
  "Health & Medicines",
  "Vitamins & Supplements",
];

export const ProductsPageContainer = ({
  children,
  background = "#F8F8F8",
  mobilePaddingX = 20,
  desktopPaddingX = 40,
  mobilePaddingY = 20,
  desktopPaddingY = 60,
  desktopHeight,
  mobileHeight,
}) => {
  const { isDesktop } = useViewport();
  const [selected, setSelected] = useState([]);

  const {
    connectors: { connect, drag },
  } = useNode();

  const toggleCategory = (category) => {
    setSelected((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      style={{
        backgroundColor: "#ffffff",
        height: "auto",
        paddingLeft: isDesktop ? `${desktopPaddingX}px` : `${mobilePaddingX}px`,
        paddingRight: isDesktop
          ? `${desktopPaddingX}px`
          : `${mobilePaddingX}px`,
        paddingTop: isDesktop ? `${desktopPaddingY}px` : `${mobilePaddingY}px`,
        paddingBottom: isDesktop
          ? `${desktopPaddingY}px`
          : `${mobilePaddingY}px`,
      }}
      className={"container mx-auto w-full px-4 md:px-8 py-10 "}
    >
      <div className="grid md:grid-cols-5 gap-4 ">
        <div
          className="md:col-span-1"
          style={{ display: !isDesktop ? "none" : "block" }}
        >
          <div className="w-full max-w-xs border-b pb-4 border-[#E5E7EB]">
            <h3 className="font-semibold text-gray-800 mb-3">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category} className="flex items-center space-x-2">
                  <input
                    id={category}
                    type="checkbox"
                    checked={selected.includes(category)}
                    onChange={() => toggleCategory(category)}
                    className="h-4 w-4 rounded border-gray-300 accent-[#FF4D00] focus:ring-[#FF4D00]"
                  />
                  <label
                    htmlFor={category}
                    className="text-sm text-gray-700 cursor-pointer select-none"
                  >
                    {category}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isDesktop
              ? "repeat(3, 1fr)"
              : "repeat(2, 1fr)",
            columnGap: "10px",
            rowGap: "1.25rem",
          }}
          className="md:col-span-4"
          // className="md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-y-13"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

ProductsPageContainer.craft = {
  displayName: "Products Container",
  props: {
    background: "#F8F8F8",
    backgroundType: "color",
    backgroundSrc: "",
    desktopDirection: "vertical",
    mobileDirection: "vertical",
    desktopAlignment: "center",
    mobileAlignment: "center",
    desktopPosition: "center",
    mobilePosition: "center",
    mobilePaddingX: 16,
    desktopPaddingX: 32,
    mobilePaddingY: 16,
    desktopPaddingY: 25,
    gap: 16,
    desktopHeight: 450,
    mobileHeight: 450,
    backgroundSize: "cover",
    backgroundPosition: "center",
    overlayOpacity: 40, // default 40% opacity
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canDrop: () => false,
    canMoveOut: () => false,
  },
  related: {
    // settings: ProductCollectionSettings,
  },
};

export const ProductsPageRender = () => {
  const { isDesktop } = useViewport();

  //  Always call hooks, even if isDesktop is null
  const {
    connectors: { connect, drag },
  } = useNode();

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <Element
      is="div"
      id="ProductsPageCollection-1"
      canvas
      ref={(ref) => connect(drag(ref))}
      //   className="relative"
    >
      <Element id="Product Collection" is={ProductsPageContainer} canvas>
        {[1, 2, 3, 4].map((_, index) => (
          <Element
            key={index}
            is={ProductCard2}
            id={`Product-${index}`}
            canvas={false}
            // className="flex-shrink-0" // 🚀 Prevents shrinking so scroll works
          >
            {/* Product Image */}
            <div>
              {enabled ? (
                <div className="relative bg-white">
                  {/* disabled click in editor */}
                  <Element
                    is={Image}
                    id="footer-text-logo"
                    src="/img/product1.webp"
                    alt="Product Image"
                    width={309}
                    widthMobile={200}
                    height={250}
                    heightMobile={180}
                    borderRadius={6}
                    canvas={false}
                  />
                </div>
              ) : (
                <Link href="/products/detail" className="relative bg-white">
                  {/* clickable in runtime */}
                  <Element
                    is={Image}
                    id="footer-text-logo"
                    src="/img/product1.webp"
                    alt="Product Image"
                    width={309}
                    widthMobile={200}
                    height={250}
                    heightMobile={180}
                    borderRadius={6}
                    canvas={false}
                  />
                </Link>
              )}
            </div>

            {/* Product Details */}
            <div className="p-3">
              {/* Brand */}
              <Element
                is={Text}
                id="Emzor"
                text="Emzor"
                fontSizeDesktop={14}
                fontSizeMobile={14}
                fontWeight={400}
                color="#4a5565"
                canvas={false}
              />
              <Element
                is={SpacerRender}
                id="BrandSpacer"
                height={8}
                canvas={false}
              />

              {/* Product Name */}
              {/* <h3 className="truncate max-w-[180px] md:max-w-[260px]"> */}
              <Element
                is={Text}
                id="Product-Name"
                className="truncate"
                text="feroglobin liquid plus ferric chloride feroglobin liquid plus ferric chloride "
                fontSizeDesktop={16}
                fontSizeMobile={16}
                fontWeight={600}
                color="#111111"
                case={"capitalize"}
                canvas={false}
              />
              {/* </h3> */}
              <Element
                is={SpacerRender}
                id="Product NameSpacer"
                height={8}
                canvas={false}
              />

              {/* variants */}
              <Element
                is={Text}
                id="variants"
                text="280ML"
                fontSizeDesktop={14}
                fontSizeMobile={14}
                color="#111111"
                case={"capitalize"}
                canvas={false}
              />
              <Element
                is={SpacerRender}
                id="variantsSpacer"
                height={12}
                canvas={false}
              />

              {/* Price */}
              <div
                className="flex flex-col items-start gap-2 group-hover:opacity-0
                        transition-opacity duration-300"
              >
                <Element
                  is={Text}
                  id="price"
                  text={"# 1000".toLocaleString("en-NG")}
                  fontSizeDesktop={18}
                  fontSizeMobile={18}
                  fontWeight={700}
                  color="#212121"
                  case={"capitalize"}
                  canvas={false}
                />

                <div
                  className="flex flex-col lg:flex-row items-center gap-2 group-hover:opacity-0
                        transition-opacity duration-300"
                >
                  <Element
                    is={Text}
                    id="compare-price"
                    text={"# 1800".toLocaleString("en-NG")}
                    fontSizeDesktop={14}
                    fontSizeMobile={14}
                    fontWeight={400}
                    color="#212121B2"
                    className={"line-through"}
                    canvas={false}
                  />
                  <Element
                    is={Text}
                    id="PercentageOff"
                    text={`(${getPercentageOff(1000, 1800)}% off)`}
                    fontSizeDesktop={14}
                    fontSizeMobile={14}
                    fontWeight={400}
                    color="#212121B2"
                    canvas={false}
                  />
                </div>
              </div>
              <Element
                is={SpacerRender}
                id="PriceSpacer"
                height={4}
                canvas={false}
              />

              {/* Rating */}
              <div className="flex items-center gap-1 group-hover:opacity-0 transition-opacity duration-300">
                <Element
                  is={StarIcon}
                  id="StarIcon"
                  iconSize={17}
                  iconColor="#FF4D00"
                  canvas={false}
                />
                <Element
                  is={Text}
                  id="rating-number"
                  text="3.5"
                  fontSizeDesktop={14}
                  fontSizeMobile={14}
                  fontWeight={400}
                  color="#4B5563"
                  canvas={false}
                />
                <Element
                  is={Text}
                  id="reviews"
                  text="(40)"
                  fontSizeDesktop={14}
                  fontSizeMobile={14}
                  fontWeight={400}
                  color="#4B5563"
                  canvas={false}
                />
              </div>
              <Element
                is={SpacerRender}
                id="RatingSpacer"
                height={16}
                canvas={false}
              />
            </div>

            {/* Action Buttons - Only visible on hover */}
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex justify-center gap-2">
                <Element
                  is={Button}
                  id="Add-to-cart-btn"
                  children="Add to cart"
                  paddingX={10}
                  paddingY={10}
                  backgroundColor="#FF4D00"
                  textColor="#ffffff"
                  fontSize={16}
                  fontWeight={600}
                  fontWeightMobile={300}
                  borderRadius={4}
                  disabled={false}
                  height={40}
                  heightMobile={35}
                  canvas={false}
                />
                <Link href={`/products/detail/`} className="hidden">
                  <Element
                    is={Button}
                    id="MyButton"
                    variant="outline"
                    children="See Details"
                    fontSize={16}
                    fontWeight={600}
                    fontWeightMobile={300}
                    backgroundColor="#FF4D00"
                    paddingX={10}
                    paddingY={10}
                    borderRadius={4}
                    height={40}
                    heightMobile={35}
                    canvas={false}
                  />
                </Link>
              </div>
            </div>
          </Element>
        ))}
        {/* <ScrollToTopButton /> */}
      </Element>
    </Element>
  );
};
