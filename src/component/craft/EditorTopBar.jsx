"use client";

import React, { useState, useEffect } from "react";
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
import { pasteNodeTree } from "@/utils/craftUtils";

// Helper function to safely access localStorage
const getFromLocalStorage = (key, defaultValue = null) => {};

// Helper function to safely set localStorage
const setToLocalStorage = (key, value) => {};

const EditorTopBar = ({ zoom, setZoom }) => {
  //   const [page, setPage] = useState("home");
  const [checked, setChecked] = useState(true);
  const { viewport, setViewport } = useViewport();
  const [isClient, setIsClient] = useState(false);
  const { isPreview, setIsPreview } = usePreview();
  const { isSection, setIsSection } = useSection();

  // inside your component
  const { actions, canUndo, canRedo, query } = useEditor((state, query) => ({
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }));

  //   const emptyPageJson = JSON.stringify({
  //     ROOT: {
  //       type: {
  //         resolvedName: "Container",
  //       },
  //       isCanvas: true,
  //       props: {
  //         background: "#ffffff",
  //         paddingX: 10,
  //         paddingY: 10,
  //         width: "100%",
  //         height: "auto",
  //         flexDirection: "column",
  //         fillSpace: false,
  //         alignItems: "flex-start",
  //         justifyContent: "flex-start",
  //         margin: { top: 0, right: 0, bottom: 0, left: 0 },
  //       },
  //       displayName: "Container",
  //       custom: {},
  //       hidden: false,
  //       nodes: [],
  //       linkedNodes: {},
  //     },
  //   });

  // const json = query.serialize();
  // //   console.log("json", json);

  // const savedPages = JSON.parse(localStorage.getItem("pages"));
  // const [pages, setPages] = useState(
  //   savedPages || {
  //     home: json,
  //     about: json,
  //     contact: json,
  //   }
  // );

  const defaultPages = {
    home: null,
    about: null,
    contact: null,
  };

  const [pages, setPages] = useState(defaultPages);
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    setIsClient(true);

    // Get the current serialized state
    const json = query?.serialize();

    // Load saved pages from localStorage or use current state as default
    const savedPages = getFromLocalStorage("pages");
    if (savedPages) {
      setPages(savedPages);
    } else {
      // Initialize with current state for all pages
      const initialPages = {
        home: json,
        about: json,
        contact: json,
      };
      setPages(initialPages);
    }
  }, []);

  const switchPage = (newPage) => {
    const pageJson = pages[newPage];

    if (!pageJson) return;

    try {
      const currentJson = query.serialize();
      setPages((prev) => ({
        ...prev,
        [currentPage]: currentJson,
      }));

      actions.deserialize(pageJson);
      setCurrentPage(newPage);
    } catch (err) {
      console.error("Failed to switch page:", err);
    }
  };

  // // Save all pages to localStorage
  // localStorage.setItem("pages", JSON.stringify(pages));

  // Save pages to localStorage whenever pages state changes (only on client)
  useEffect(() => {
    if (isClient && pages) {
      setToLocalStorage("pages", pages);
    }
  }, [pages, isClient]);

  // Load pages from localStorage on app load
  //   const savedPages = JSON.parse(localStorage.getItem("pages"));
  //   setPages(savedPages);

  //   const { actions, query, enabled } = useEditor((state) => ({
  //     enabled: state.options.enabled,
  //   }));

  // function handleChange() {
  //   setChecked(!checked);
  // }

  useEffect(() => {
    actions.setOptions((options) => (options.enabled = checked));
    //console.log(checked);
  }, [checked]);

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
          <Select value={currentPage} onValueChange={switchPage}>
            <SelectTrigger className="max-w-[130px] bg-[#F6F6F6] rounded-[8px] border-none">
              <p className="text_12_400 text-[#464646]">Page:</p>
              <p className="text_12_400 text-[#464646] capitalize truncate">
                {currentPage}
              </p>
              {/* <SelectValue placeholder="Page" className="truncate" /> */}
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="home">Home</SelectItem>
              <SelectItem value="about">About</SelectItem>
              <SelectItem value="contact">Contact</SelectItem>
            </SelectContent>
          </Select>

          {/* <Select value={currentPage} onValueChange={switchPage}>
            <SelectItem value="home">Home</SelectItem>
            <SelectItem value="about">About</SelectItem>
            <SelectItem value="contact">Contact</SelectItem>
          </Select> */}

          <Input
            readOnly
            value={`https://www.tadra.com/${currentPage}`}
            className="max-w-[200px] md:max-w-[200px] lg:max-w-[300px] xl:max-w-[550px]  bg-[#F6F6F6] rounded-[8px] border-none
             flex-1"
          />
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-4 flex-shrink-0">
        <div className="flex items-center gap-4 text_12_light text-[#464646]">
          {/* Zoom Selector */}
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
                onClick={() => setIsSection(false)}
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
    </div>
  );
};

export default EditorTopBar;
