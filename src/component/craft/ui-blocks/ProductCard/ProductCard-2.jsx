import { useNode } from "@craftjs/core";
import { useViewport } from "@/Context/ViewportContext";
import { cn } from "@/lib/utils";

export const ProductCard2 = ({
  children,
  background = "#ffffff",
  mobilePaddingX = 8,
  desktopPaddingX = 8,
  mobilePaddingY = 8,
  desktopPaddingY = 8,
  // desktopWidth = 260,
  // mobileWidth = 180,
  height = 330,
  heightMobile = 290,
  borderRadius = 4,
}) => {
  const { isDesktop } = useViewport();

  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={cn(
        {
          "group relative shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300": true,
        },
        isDesktop ? "w-full" : "w-[165px]"
      )}
      style={{
        backgroundColor: background,
        // width: isDesktop
        //   ? `${desktopWidth}px`
        //   : `${mobileWidth}px` || `${desktopWidth}px`,
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
    </div>
  );
};

ProductCard2.craft = {
  displayName: "Product Card",
  props: {
    background: "#ffffff",
    mobilePaddingX: 8,
    desktopPaddingX: 8,
    mobilePaddingY: 8,
    desktopPaddingY: 8,
    borderRadius: 4,
    // desktopWidth: 260,
    // mobileWidth: 180,
    height: 425,
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
