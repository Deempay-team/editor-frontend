import React, { useState, useEffect } from "react";
import { Editor } from "@craftjs/core";

import { ContentSectionSect } from "../component/craft/ContentSect";
import { loadGoogleFonts } from "@/utils/loadGoogleFonts";
import { useTheme } from "@/Context/ThemeContext";

import EditorSideBar from "../component/craft/EditorSideBar";
import EditorRightBar from "../component/craft/EditorRightBar";

import { Button } from "../component/craft/user/Button";
import { Image } from "../component/craft/user/Image";
import { Column } from "../component/craft/user/TwoColumn";
import { Container } from "../component/craft/user/Container";
import { Card, CardTop, CardBottom } from "../component/craft/user/Card";
import { Text } from "../component/craft/user/Text/Text";
import { Grid } from "../component/craft/user/Grid";

import { ViewportProvider } from "../Context/ViewportContext";
import { usePreview } from "../Context/PreviewContext";
import {
  AnnouncementBarContent,
  AnnouncementBarRender,
} from "../component/craft/ui-blocks/AnnouncementBar/AnnouncementBarRender.jsx";
import {
  NavbarContent,
  NavigationBar,
} from "../component/craft/ui-blocks/NavigationBar";
import {
  FooterContent,
  FooterSectionRender,
} from "../component/craft/ui-blocks/footer-section/FooterSectionRender";
import { useSection } from "../Context/SectionContext";
import { motion, AnimatePresence } from "framer-motion";
import EditorTopBar from "@/component/craft/EditorTopBar";
// import { Logo } from "@/component/craft/ui-blocks/Logo.jsx";
// import { MenuItems } from "@/component/craft/ui-blocks/MenuItems.jsx";
// import { IconButtons } from "@/component/craft/ui-blocks/IconButtons.jsx";
// import { Sidebar } from "@/component/editor/viewport/Sidebar";
import { RenderNode } from "@/component/editor/RenderNode";
import {
  HeroContent,
  HeroSectionRender,
} from "@/component/craft/ui-blocks/HeroSection/HeroSectionRender";
import { HeroSectionSettings } from "@/component/craft/ui-blocks/HeroSection/HeroSectionSettings";

import { ButtonX } from "../component/craft/user/ButtonX";
import { TextX } from "../component/craft/user/TextX";
import { Logo } from "@/component/craft/ui-blocks/Logo";
import { MenuItems } from "@/component/craft/ui-blocks/MenuItems";
import { IconButtons } from "@/component/craft/ui-blocks/IconButtons";
import { Menu } from "lucide-react";
import { SocialIcons } from "@/component/craft/ui-blocks/SocialIcons";
import { FooterSectionRender_2 } from "@/component/craft/ui-blocks/footer-section/FooterSectionRender_2";
import { Copyright } from "@/component/craft/user/Copyright";
import { Container_2 } from "@/component/craft/user/Container_2";
// import { Text } from "@/component/editor/selectors";

export default function PageBuilder() {
  const { fonts } = useTheme();

  //load all fonts, after you change to build only default font, for the build
  useEffect(() => {
    const fontNames = fonts.map((font) => font.name);
    loadGoogleFonts(fontNames);
  }, []);

  const { isPreview } = usePreview();

  const [zoom, setZoom] = useState("100%");
  const [showRightSidebar, setShowRightSidebar] = useState("");

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
          AnnouncementBarRender,
          AnnouncementBarContent,
          NavigationBar,
          Grid,
          HeroSectionRender,
          HeroContent,
          HeroSectionSettings,
          ButtonX,
          TextX,
          Logo,
          MenuItems,
          IconButtons,
          NavbarContent,
          FooterSectionRender,
          FooterSectionRender_2,
          FooterContent,
          Menu,
          SocialIcons,
          Copyright,
          Container_2,
        }}
        onRender={RenderNode}
      >
        <ViewportProvider>
          <div className="flex flex-col h-screen bg-[#f2f2f2]">
            {/* Top Bar */}
            <EditorTopBar zoom={zoom} setZoom={setZoom} />

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
                {!isPreview && (
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
        </ViewportProvider>
      </Editor>
    </>
  );
}
