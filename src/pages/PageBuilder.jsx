import React, { useState, useEffect } from "react";
import { Editor, Frame, Element, useEditor } from "@craftjs/core";
import lz from "lzutf8";

import {
  ContentSect,
  ContentSectionSect,
} from "../component/craft/ContentSect";
import { loadGoogleFonts } from '@/utils/loadGoogleFonts';
import { useTheme } from "@/Context/ThemeContext";

import EditorSideBar from "../component/craft/EditorSideBar";
import EditorRightBar from "../component/craft/EditorRightBar";

import { Button } from "../component/craft/user/Button";
import { ButtonX } from "../component/craft/user/ButtonX";
import { Image } from "../component/craft/user/Image";
import { Column } from "../component/craft/user/TwoColumn";
import { Container } from "../component/craft/user/Container";
import { Card, CardTop, CardBottom } from "../component/craft/user/Card";
import { Text } from "../component/craft/user/Text";
import { TextX } from "../component/craft/user/TextX";
import { Grid } from "../component/craft/user/Grid";


// import { ViewportProvider } from "../Context/ViewportContext";
import { usePreview } from "../Context/PreviewContext";
import { AnnouncementBar } from "../component/craft/ui-blocks/AnnouncementBar";
import { NavigationBar } from "../component/craft/ui-blocks/NavigationBar";
import { Header } from "../component/craft/templates/Header";

import {  useSection } from "../Context/SectionContext";
import { motion, AnimatePresence } from "framer-motion";
import EditorTopBar from "@/component/craft/EditorTopBar";
import { Sidebar } from "@/component/editor/viewport/Sidebar";

export default function PageBuilder() {
const { theme, fonts } = useTheme();

  //load all fonts
  useEffect(() => {
    const fontNames = fonts.map((font) => font.name);
    loadGoogleFonts(fontNames);
  }, []);


  const { isPreview } = usePreview();
  const { isSection, setIsSection } = useSection();
  const [stateToLoad, setStateToLoad] = useState(null);
  const [zoom, setZoom] = useState("100%");
  const [showRightSidebar, setShowRightSidebar] = useState("section");
  // const jsonDecrypt = "fff"
  // const json = lz.decompress(lz.decodeBase64(jsonDecrypt));

  // console.log("isSection:", isSection, "isPreview:", isPreview); // Debug

  return (
    <>
      <Editor
        enabled={!isPreview}
        resolver={{
          Card,
          Button,
          Text,
          Container,
          CardTop,
          CardBottom,
          Image,
          Column,
          AnnouncementBar,
          NavigationBar,
          Grid,
          Header,
          TextX,
          ButtonX
        }}
      >
          <div className="flex flex-col h-screen bg-[#f2f2f2]">
            {/* Top Bar */}
            <EditorTopBar zoom={zoom} setZoom={setZoom} />

            {/* <div className={`hidden ${isPreview === false ? "": "hidden" }`} >
              <ContentSectionSect />
            </div> */}

            {/* Main Content Area */}
            <div className={`flex flex-1 justify-between overflow-hidden`}>
              {/* Sidebar Left */}
              <AnimatePresence mode="wait">
                {!isPreview && (
                  <motion.div
                    key="left-sidebar"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.25 }}
                  >
                    <EditorSideBar
                      setShowRightSidebar={setShowRightSidebar}
                      showRightSidebar={showRightSidebar}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Main Content */}

              <motion.div
                className="w-full min-h-screen overflow-auto"
                animate={{
                  scale: isPreview
                    ? (parseInt(zoom) / 100) * 0.95
                    : parseInt(zoom) / 100,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                }}
                style={{
                  transformOrigin: "top center",
                  width: `${100 / (parseInt(zoom) / 100)}%`,
                }}
              >
                <ContentSectionSect />
              </motion.div>

              {/* Sidebar Right */}
              <AnimatePresence mode="wait">
                {!isPreview && showRightSidebar && (
                  <motion.div
                    key="right-sidebar"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.25 }}
                    className=" flex h-full"
                  >
                    <EditorRightBar
                    // hidden={showRightSidebar ? "false" : "true"}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
      </Editor>
    </>
  );
}
//   return (
//     <>
//       <Editor enabled={false} resolver={{ Card, Button, Text, Container, CardTop, CardBottom, Image, Column, AnnouncementBar, NavigationBar, Grid }}>
//           {/* <Frame data={json}   style={{ width: "80%", overflow: "hidden" , boxSizing: 'border-box'}}/> */}
//          <ViewportProvider>
//          < ContentSect data={json} />
//          </ViewportProvider>
//       </Editor>
//     </>
//   );
// }
