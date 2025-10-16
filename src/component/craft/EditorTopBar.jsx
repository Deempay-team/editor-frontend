"use client";

import React, { useContext, useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import Exit from "../../assets/icons/Exit";
import Undo from "../../assets/icons/Undo";
import Redo from "../../assets/icons/Redo";
import Mobile from "../../assets/icons/Mobile";
import Desktop from "../../assets/icons/Desktop";
import Preview from "../../assets/icons/Preview";

import { useEditor } from "@craftjs/core";
import { useViewport } from "../../Context/ViewportContext";
import { usePreview } from "../../Context/PreviewContext";
import { useSection } from "../../Context/SectionContext";
// import { pasteNodeTree } from "@/utils/craftUtils";
import { ShopContext } from "@/Context/ShopContext";
import {
  compress,
  decompress,
  // getFromLocalStorage,
  // setToLocalStorage,
} from "@/utils/storage";

// import { PageLoader } from "../PageLoader";

const EditorTopBar = ({ zoom, setZoom }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const { viewport, setViewport } = useViewport();
  const { isPreview, setIsPreview } = usePreview();
  const { isSection, setIsSection } = useSection();
  const { currentPage, setCurrentPage, pages, setPages, setPageProgress } =
    useContext(ShopContext);
  const [isClient, setIsClient] = useState(false);

  const { actions, canUndo, canRedo, query } = useEditor((state, query) => ({
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }));

  useEffect(() => {
    setIsClient(true);
  }, []);

  const switchPage = (newPage) => {
    try {
      const currentJson = query.serialize();
      const compressed = compress(currentJson);
      // console.log("currentJson", currentJson);
      // console.log("Compressed", compressed);

      // Save current page
      setPages((prev) => ({ ...prev, [currentPage]: compressed }));

      // Start staged loader
      setPageProgress(10);
      // Fake progressive load to ~80%
      const step1 = setTimeout(() => setPageProgress(40), 150);
      const step2 = setTimeout(() => setPageProgress(70), 300);
      const step3 = setTimeout(() => setPageProgress(80), 600);

      // 👇 Trickling interval (80 → 95) if it's slow
      let trickle;
      const startTrickle = () => {
        trickle = setInterval(() => {
          setPageProgress((prev) => {
            if (prev < 95) return prev + 1; // creep slowly
            return prev;
          });
        }, 300); // every 300ms increase by 1%
      };

      // Switch after staged steps have run
      setTimeout(() => {
        try {
          startTrickle();

          const pageJson = pages[newPage];
          if (pageJson) {
            const json = decompress(pageJson);
            if (json) {
              actions.deserialize(json);
              // window.location.reload(); // reload page

              // ✅ preserve pathname and update query param
              if (newPage === "home") {
                router.push(pathname);
              } else {
                // add your custom previewPath
                params.set("previewPath", `/${newPage}`);
                // push the new url, encoding automatically
                router.push(`${pathname}?${params.toString()}`);
              }
            }
          } else {
            actions.deserialize(currentJson); // fallback
          }

          setCurrentPage(newPage);

          // Finalize loader
          setPageProgress(99.9);
          setTimeout(() => setPageProgress(0), 400);
        } catch (err) {
          console.error("Failed to switch page:", err);
          setPageProgress(0);
        } finally {
          clearTimeout(step1);
          clearTimeout(step2);
          clearTimeout(step3);
          if (trickle) clearInterval(trickle);
        }
      }, 700); // let staged run before switching
    } catch (err) {
      console.error("Failed to switch page:", err);
      setPageProgress(0);
    }
  };

  return (
    <div
      className="flex justify-between h-[70px] pr-4 border-b bg-white border-[#F1F1F1] w-full
    z-20 sticky top-0 text-[#464646]"
    >
      {/* Page Selector and URL */}
      <div className="flex gap-2 min-w-0 flex-1">
        {/* Exit Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex border-r items-center justify-center border-[#F1F1F1] w-[52px] cursor-pointer">
              <span className="text-[#464646] hover:text-primary transition-colors duration-300">
                <Exit className="w-[18px] h-[18px]" />
              </span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Exit</p>
          </TooltipContent>
        </Tooltip>

        <div className="flex items-center gap-4 min-w-0 flex-1 ml-8 text_12_light text-[#464646]">
          {!isClient ? (
            <div className="text_12_400 text-[#464646] mr-12">
              <Skeleton width={80} height={15} />
            </div>
          ) : (
            <Select value={currentPage} onValueChange={switchPage}>
              <SelectTrigger className="max-w-[130px] bg-[#F6F6F6] rounded-[8px] border-none">
                <>
                  <p className="text_12_400 text-[#464646]">Page:</p>
                  <p className="text_12_400 text-[#464646] capitalize truncate">
                    {currentPage}
                  </p>
                </>
                {/* <SelectValue placeholder="Page" className="truncate" /> */}
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="home">Home</SelectItem>
                <SelectItem value="product">Product</SelectItem>
                <SelectItem value="cart">Cart</SelectItem>
                <SelectItem value="checkout">Checkout</SelectItem>
              </SelectContent>
            </Select>
          )}

          {/* <Select value={currentPage} onValueChange={switchPage}>
            <SelectItem value="home">Home</SelectItem>
            <SelectItem value="about">About</SelectItem>
            <SelectItem value="contact">Contact</SelectItem>
          </Select> */}
          {!isClient ? (
            <div className="text_12_400 text-[#464646]">
              <Skeleton width={300} height={15} />
            </div>
          ) : (
            <Input
              readOnly
              value={`https://www.tadra.com/${currentPage}`}
              className="max-w-[200px] md:max-w-[200px] lg:max-w-[300px] xl:max-w-[550px]  bg-[#F6F6F6] rounded-[8px] border-none
             flex-1"
            />
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-4 flex-shrink-0">
        <div className="flex items-center gap-4 text_12_light text-[#464646]">
          {/* Zoom Selector */}
          {!isClient ? (
            <div className="text_12_400 text-[#464646]">
              <Skeleton width={80} height={15} />
            </div>
          ) : (
            <Select
              value={zoom}
              onValueChange={viewport === "desktop" ? setZoom : null}
            >
              <SelectTrigger className="w-[85px] bg-[#F6F6F6] rounded-[8px] border-none text_12_light text-[#464646] cursor-pointer">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {["50%", "100%"].map((value) => (
                  <SelectItem
                    key={value}
                    value={value}
                    className="text_12_light text-[#464646]"
                  >
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          {/* Zooming Button */}
          {/* <Button
            onClick={() => setZoom(zoom === "100%" ? "50%" : "100%")}
            className="w-[85px] bg-[#F6F6F6] rounded-[8px] border-none text_12_light text-[#464646] cursor-pointer"
          >
            {zoom === "100%" ? "50%" : "100%"}
          </Button> */}

          <div className="flex items-center justify-between gap-2 w-[90px] bg-[#F6F6F6] rounded-[8px] border-none">
            {/* Undo Button */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="cursor-pointer disabled:cursor-not-allowed"
                  disabled={!canUndo}
                  onClick={() => {
                    if (canUndo) actions.history.undo();
                  }}
                >
                  <span className=" text-[rgba(219, 219, 219, 0.5)] hover:text-primary transition-colors duration-300">
                    <Undo className="w-[13.62px] h-[12.27px]" />
                  </span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Undo</TooltipContent>
            </Tooltip>
            <div className="w-[0.5px] h-[18px] bg-[#DBDBDB]" />

            {/* Redo Button */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="cursor-pointer disabled:cursor-not-allowed"
                  disabled={!canRedo}
                  onClick={() => {
                    if (canRedo) actions.history.redo();
                  }}
                >
                  <span className=" text-[rgba(219, 219, 219, 0.5)] hover:text-primary transition-colors duration-300">
                    <Redo className="w-[13.62px] h-[12.27px]" />
                  </span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Redo</TooltipContent>
            </Tooltip>
          </div>

          <div className="flex items-center justify-between gap-2 w-[90px] bg-[#F6F6F6] h-[35px] rounded-[8px] border-none">
            {/* Device Toggle  */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => {
                    setZoom("100%");
                    setViewport("mobile");
                  }}
                  className={`cursor-pointer w-6 h-6 ml-2 ${
                    viewport === "mobile" && "bg-primary-foreground"
                  } `}
                >
                  <span
                    className={`"text-[#DBDBDB] hover:text-primary transition-colors duration-300 ${
                      viewport === "mobile" && "text-primary"
                    } `}
                  >
                    <Mobile className="w-[12.4px] h-[19.39px] " />
                  </span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Mobile View</TooltipContent>
            </Tooltip>
            <div className="w-[0.5px] h-[18px] bg-[#DBDBDB]" />
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setViewport("desktop")}
                  className={`cursor-pointer w-6 h-6 mr-2 ${
                    viewport === "desktop" && "bg-primary-foreground"
                  } `}
                >
                  <span
                    className={`text-[#000000] hover:text-primary transition-colors duration-300 ${
                      viewport === "desktop" && "text-primary"
                    }`}
                  >
                    <Desktop className="w-[14px] h-[12.39px]" />
                  </span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Desktop View</TooltipContent>
            </Tooltip>
          </div>
        </div>

        <div className=" w-[0.5px]  bg-[#F1F1F1]" />
        <div className="flex items-center justify-end w-[137px] gap-2 pl-0 -ml-4">
          {/* Preview Button */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setIsPreview((prev) => !prev)}
                className={`bg-[#F6F6F6] rounded-[8px] border-none cursor-pointer ${
                  isPreview && "bg-primary-foreground"
                }`}
              >
                <span
                  className={`text-[#E3E3E3] hover:text-primary transition-colors duration-300 ${
                    isPreview && "text-primary"
                  }`}
                >
                  <Preview className="w-[9.38px] h-[10.73px]" />
                </span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              {isPreview ? "Design Mode" : "Preview"}
            </TooltipContent>
          </Tooltip>

          {/* Publish Button */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                className={`text_12_light w-[81px] bg-primary text-primary-foreground rounded-[8px] border-none cursor-pointer hover:bg-primary/70
             hover:text-primary-foreground transition-colors duration-300 ${
               isSection ? "hidden" : ""
             }`}
                onClick={() => setIsSection(true)}
              >
                Publish
              </Button>
            </TooltipTrigger>
            <TooltipContent>Publish</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                onClick={() => {
                  const currentJson = query.serialize();
                  const compressed = compress(currentJson);
                  console.log("Compressed", compressed);
                  setIsSection(false);
                  // pasteNodeTree(query, copiedNodeTree)
                }}
                className={`text_12_light w-[81px] bg-primary text-primary-foreground rounded-[8px] border-none cursor-pointer hover:bg-primary/70
             hover:text-primary-foreground transition-colors duration-300 ${
               isSection ? "" : "hidden"
             }`}
              >
                Save
              </Button>
            </TooltipTrigger>
            <TooltipContent> Save Section</TooltipContent>
          </Tooltip>
        </div>
      </div>
      {/* <PageLoader progress={pageProgress} /> */}
    </div>
  );
};

export default EditorTopBar;
