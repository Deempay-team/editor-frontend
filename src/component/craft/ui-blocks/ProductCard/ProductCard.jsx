import { useNode } from "@craftjs/core";
import { useViewport } from "@/Context/ViewportContext";
import Link from "next/link";
import { Image } from "../../user/Image";
// import { Product_img } from "@/assets/img";
import { Logo } from "../Logo";
// import Image from "next/image";

export const ProductCard = ({
  children,
  background = "#ffffff",
  mobilePaddingX = 8,
  desktopPaddingX = 8,
  mobilePaddingY = 8,
  desktopPaddingY = 8,
  desktopWidth = 260,
  mobileWidth = 180,
  height = 330,
  heightMobile = 300,
  borderRadius = 4,
}) => {
  const { isDesktop } = useViewport();

  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className="group relative shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      style={{
        backgroundColor: background,
        width: isDesktop
          ? `${desktopWidth}px`
          : `${mobileWidth}px` || `${desktopWidth}px`,
        height: isDesktop
          ? `${height}px`
          : `${heightMobile}px` || `${height}px`,
        paddingLeft: isDesktop
          ? `${desktopPaddingX}px`
          : `${mobilePaddingX}px` || `${desktopPaddingX}px`,
        paddingRight: isDesktop
          ? `${desktopPaddingX}px`
          : `${mobilePaddingX}px` || `${desktopPaddingX}px`,
        paddingTop: isDesktop
          ? `${desktopPaddingY}px`
          : `${mobilePaddingY}px` || `${desktopPaddingY}px`,
        paddingBottom: isDesktop
          ? `${desktopPaddingY}px`
          : `${mobilePaddingY}px` || `${desktopPaddingY}px`,
        borderRadius: borderRadius,
      }}
    >
      {children}
      {/* Product Image */}
      {/* <Link href={`/products/detail/`}>
        <div className="relative aspect-square bg-white p-4"> */}
      {/* <Element
        is={Logo}
        id="footer-text-logo"
        logoText="Pharmacy"
        logoFontSize={20}
        logoTextColor={"#000000"}
        logoFontWeight="600"
        logoImageHeight={26}
        canvas={false}
      /> */}

      {/* <Logo
        id="footer-text-logo"
        logoText="Pharmacy"
        logoSrc={"/img/avatar.png"}
        logoFontSize={20}
        logoTextColor="#000000"
        logoFontWeight="600"
        logoImageHeight={26}
      /> */}

      {/* <Element
        is={Logo}
        id="footer-text-logo"
        logoText="Pharmacy"
        logoSrc="/img/avatar.png"
        logoFontSize="20px" // string with px
        logoTextColor="#000000"
        logoFontWeight="600" // string
        logoImageHeight="26px" // string with px
        canvas={false}
      /> */}

      {/* <Image
            src={"/img/avatar.png"}
            alt="Product Image"
            width={260}
            height={150}
            className="object-contain transition-transform duration-300 hover:scale-105 rounded-t-md"
          /> */}

      {/* <Element
            is={Image}
            id="ProductCardImage"
            src={"/img/avatar.png"}
            alt={"Product Image"}
            // fill
            className="object-contain transition-transform duration-300 hover:scale-105 rounded-t-md"
            canvas={false} // it's a single component, not a container
          /> */}
      {/* </div>
      </Link> */}
    </div>
  );
};

ProductCard.craft = {
  displayName: "Product Card",
  props: {
    background: "#ffffff",
    mobilePaddingX: 8,
    desktopPaddingX: 8,
    mobilePaddingY: 8,
    desktopPaddingY: 8,
    borderRadius: 4,
    desktopWidth: 260,
    mobileWidth: 180,
    height: 415,
    heightMobile: 370,
  },
  // rules: {
  //   canDrag: () => true,
  //   canMoveIn: () => true,
  //   canDrop: () => false,
  //   canMoveOut: () => false,
  // },
  related: {
    // settings: ProductCollectionSettings,
  },
};
