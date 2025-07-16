import React, { useState, useEffect } from "react";
import { Editor, Frame, Element, useEditor } from "@craftjs/core";
import lz from "lzutf8";

import {
  ContentSect,
  ContentSectionSect,
} from "../component/craft/ContentSect";
import EditorSideBar from "../component/craft/EditorSideBar";
import EditorRightBar from "../component/craft/EditorRightBar";

import { Button } from "../component/craft/user/Button";
import { Image } from "../component/craft/user/Image";
import { Column } from "../component/craft/user/TwoColumn";
import { Container } from "../component/craft/user/Container";
import { Card, CardTop, CardBottom } from "../component/craft/user/Card";
import { Text } from "../component/craft/user/Text";
import { Grid } from "../component/craft/user/Grid";

import { ViewportProvider } from "../Context/ViewportContext";
import { usePreview } from "../Context/PreviewContext";
import { AnnouncementBar } from "../component/craft/ui-blocks/AnnouncementBar";
import { NavigationBar } from "../component/craft/ui-blocks/NavigationBar";

import { SectionProvider, useSection } from "../Context/SectionContext";
import { motion, AnimatePresence } from "framer-motion";
import EditorTopBar from "@/component/craft/EditorTopBar";

export default function PageBuilder() {
  const { isPreview } = usePreview();
  const { isSection, setIsSection } = useSection();
  const [stateToLoad, setStateToLoad] = useState(null);
  const [zoom, setZoom] = useState("100%");
  // const jsonDecrypt = "eyJST09UIjp7InR5cGXECHJlc29sdmVkTmFtZSI6IkNvbnRhaW5lciJ9LCJpc0NhbnZhcyI6dHJ1ZSwicHJvcHPENWJhY2tncm91bmQiOiIjZWVlIiwicGFkZGluZ1giOjDJDVnFDW1hcmdpbsV1b3DFEnJpZ2h0xQpib3R0b23FC2xlZsQUfcQVcmRlclJhZGl1c8cmxBFXaWR0aMsQQ29sb3LkAIEwxQEixBh4U2hhZG93Ijoibm9u5ACXd8Y1IjEwMCUiLCJoZcZ7yBBmbGV4RGlyZWN0aW9uIjoiY29sdW1uxBlpbGxTcGFjZSI6ZmFsc2UsImFsaWduSXRlbXMiOsU4LXN0YXJ0IiwianVzdGlmeeQBPGVuxF3NHmnkASVtYWluLWZy5AFlfSwiZGlzcGxhefEBdCwiY3Vz5QEQe30sImhpZGRlbukAgG5vZGVzIjpbIldvWG5MZE5vZUsiLCIxRnJDc1ZfUXNpIiwibU85dnY2ZWU2QyIsIm5zTXR2bnpvdV8iXSwibGlua2VkTsZEe319LMxH/wIQ/wIQ8AIQZsUB5AGPyRdNb2JpbMRQyh3qAjAx7QIxxA7/AjL/AjL/AjL/AjL5AjJhdXRv8wIycm930BbpAO7/Ak7pAk5jZW505QH//gJK5wElIjoy5AD0/wJF5wJFcGFyxkrlA/n6AlVNQ2RQbWJNNUlwIiwiSXpydTBJUW54MvYCO8st/wI7/wI7+QI7+AIe/wId/wId/wId/wId7AIdM+UCHMUO6QHu/wIx/wRj/wRj/wIZ/wIZ/AIZ7QRP+AIfQURNWjRKZWhmbPYCEssg/wIS/wIS/wRN/wRN/wIv/wIv/wIv9wIv6gCi/wRM/wIb6gRM/wQt+QQtyRr/AhD+AhDtBAr4AhBLZ0J5d2xZekkt9gIQyyD6AhBUZXh07gILx2fpAgx0xCLkALRDYWNvbGHkAR1vbnRTaXpl5ADcyg7oAhMzMCzFNEHkATHsARLJFcgqyhvERFfoAZk35QP5yhPJLzbFGWPoAfViOOcEJGxpbmVIxz4xLCJjaGFy5AG85QF+6wJ+6gKWxQznAhg5OfEBn+UBFPcBmusDZfkBmvUBjusF0P8Dnv8Dnv8FsO4J/ljoAT3kAar/A5T/A5TGMchQe8klMf8DsP8F3/kDsDX/Bd/kAY7JDMki/wgi9Agi+APyyRLIKv0ECsoW8gLf+gQmzhrSOv8ERv8GVv8GVuUERlJVZEN6UW5mR+QBN2xPT3pvV1BOQUYiLCI4eVZxelh0b0fkAw1YU1ZvdnptSnVV9gRty0f/BG3/BG3lBG1Ib23kAgvqBGkxN/IEaTE47gRp5QKr7wRMNO4EM+kCeP8EM/4EMzH/BDPvAYfrA/r/BDPvAVTrAY7/AVT/AVTlAVRQcm9kdWPoASL/AVf/AVf/AVf/AVf3AVcyM/8BV/8BV/8BV+kBV+sC2P8BV/8BV+cHGG50Yf8BV/8BV/8BV/8BV/8BV/8BV/8BV/8BV+wBV+sEIv8BV/8BV+UBV0xlYWRlcnNoaeQJAv8BWv8BWv8BWv8BWvwBWjb/AVr/AVr/AVrpAVrrEGD/CDv/CDvxEjYzxALtCDs08wg87gvQOf8IPP8L0P8IIP8IIPsL0DYwMHB4/wgR/wgR/xAz/wgU/w42/w42/wfg/xBP9AfaSkwwS0Z0R3VIOCIsIk9wLXZBOGJielD2B8DLLf8CZP8CZPkCZPQOPWUxxAL/AoHwCr00yg3IIcQ1/wKV/wKV/wKV/wKV/wq1/xT3/xCU/wJe/w6A/wJa9gJa7RTS+AJgOEV5UUhWemdNTuQVYkNuamJXd0doRfYCYMst/wYe/wYe5QYeQnJvd3NlIE91ciBMYXRlc3QgcOYI3nPtBi40Of8GGukObv8GGv8GGvEGGuYEdv8GHu4Bc+0Drv8GHu0BWusBevoBWkJ1dHRvbv4BXHPlATQic21hbOQO3XZhcmlh5gJU5wIvZOQAvGhpbGRy5ACcIlNob3AgTuUFSOQAluYNj29wZW5Jbk5ld1RhYslj6wfANu8Bf25vcm1hxG/sAXDkA/D5EENEZWNvcmHnAzXnA3/FYXR55QNvyVLqBHHyEijpAbQxMfAECTPIEcpf5QOAbeYBqOcCROgJ/mxpY2sg9BhS5wFy/wHu/wHu8gHu6wXI/wWo/wWo/wgM7xPI6QWL6wWf5xgp/wWM/wWM/wWM/wWM/wWM/wWM+gWM/xQF/wWJ/wfn/wWN/wWN/wIs7AIs6xqL/wIs/wIs8hJzNmQ25AQO/xpB/wIE/wIE/wIE/wIE+AolOfQKJUH/GCf/Agr/Agr/Agr/Agr/CfHrB5FVZ3Y2aXNQc23kAMw1VlNLZVV2X2Zv9geRyy3/Ah3/Ah3/FJDkAh01/xR8/wIb/wIb/wIb/wIb6gQLN/8Jlv8YEv8cP/8B//8B/8VK7R5b+AIFWVFTRE95YS1UNiIsIkg2QWh0ZGZ4Smv2AgXLLf8Jlv8JluUHDeQIEXBpbmcgbWFkZSBlYXN5Ie4YLjb3B9f/F//nA6X/Car1CaoxLjX/Caw6MTDyAYv8CantA2b/BY/tAW3rAY3/AW3/AW3lAW1Ob3cgc+QJgmF0IG91ciBzdG9yZSB3aXRoIGNvbXBsZXRlIGNvbnZlbmllbmPvFU41/wGJ/xE0/wsa/Rlv/wFt/wFt/wFt6gFt6wT//wTf/wTf8QTfY8QC7QTf5Bry8QkoyRNZxiH/BPT/BPT/BPT/BPT5BPQ3yw/rA2j7CRP/ETH/Byj/Byj/BSn/BSn/BSnwBSk5aGtjNF9PMGdNIiwiVnJxazFKRDFf5BCNWWNtcVR3d2JTUfYFNss6/wJc/wJc8QJcZf8fTP0JWMQd/wJK/wJK/wJK/yXM/wc//wIa/wIa/wIa/wIa6QIa6wQX+gIaazhZZllOR25F5BZ8aUZic0ZlX0RSaCIsIlRYVHdhRW5MeUv2AhrLOvoCGkltYWflDjH7D4tyYyI6Imh0dHBzOi8vZmlyZWJhc2XkBeNhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9rc3dvcmtzLTU1ZmU5LmFwcHNwb3TFH28vbG92ZS5qcGc/YWx0PW1lZGlhJnRva2VuPTIyMjk4ODliLTUyYWEtNDk5Yy04OGFmLTgyYzg4MWZhNmblKFdhbOQBO1BsYWNlaG9sZGVyIOYAw+oHQzUw6gILMjbpAlLrAnPsD0PkAgzlAhPEDWNvduYSsG9zaegCNekdVHNwZWN0UuQP7eUGa/0QZ/ECDegApfUCCe0D/v8GWe4Rb+oCEP8Hxv8HxuUHxkZhc3QgZGVsaXZlcnnuB6TvGNb2B6TvIRP/B6T/B6T/CRL5B6X/AUz6AUzrA0//AUz/AUzyAUwgbuUSI3dpZO8I+zTzGkE0/yKy/yKy8AkqNzjEAv8Bhv8Bhv8Bhv8Bhv8Bhu4BhusG/P8Gz/8Gz/8JK/8Gz/8Gz/8Gz/8Gz/8Gz/8Gz/8Gz/8Gz/8Gz/8Gz/8Gz/8Gz+UoODNwLXYtMEtr5CW8dmZ6UXpSSUFpROQCoDNZSUZmbEp39yHVyzr/Bs//Bs//Bs//Bs//Bs//Bs//Bs//Bs//Bs//Bs//Bs//Bs//Bs/sAgntCsD/A/3tAePrAhD/BYP/BYPmEAJlY3VyZWQgIHBheeQBHiBvcOQBBe4Zlv8G2v8G2v8FVP8FVP8FVP8BV/8BV+wju+oDWv8BV/8BV+UBV1dlIGFyZSBub3cgYWNjZXB05BFl6AFjdGhyb3VnaGNhc2gsIGNhcmQgb3IgYmFuayB0cmFuc2bpAVv/BwH/BwH/BwH/BwH/Aa3/Aa3/Aa3/Aa3/Aa3tDfD/BwH/BwHxBwFkxAL/BwH/EBn/BwD/BwD/BwD/BwD/BwD/BwD/BwD/BwD/BwD/BwDsBwBQWF9hSnFEcELkBwB6WmFjcUdyS1I55ADGdDlRM3NTa05j9gcAyzr/BwD/BwD/BwD/BwD/BwD/BwD/BwD/BwD/BwD/BwD/BwD/BwD/BwDsAgnrA8P/A/zvAePrAhD/Ban/BanrHg9hbmQgY29sbGXwKBf/Bvn/Bvn/BUz/BUz/BUz/AVD/AVDqAVDrA1P/AVD/AVDlAVBP5AJ36SHcIGZyb23lFu13ZWJzaXRl5QFqcmVjZWl2ZSB0aGVt5BcNaPEsPP8G8v8G8v8G8v8G8v8Bpv8Bpv8Bpv8BpvoBpus4mP8G8v8G8vAG8mRjxAL/BvL/BvL/BvL/BvL/BvL5BvI0M/8oP/8HCf8HCf8HCf8HCf8HCf8eGlsiUEUzZmwyTC0w5BJkMHY4YU1wdm1yUvcG9sot/wId/wId/wId/wId/wId/wId/wId/wId8AIdOP8ZE/8ZE/8CIf8CIf8CIf8CIecCIesD8voCJ2NqalVkUnpRNXoiLCI0ZWFfby16anP3EB3LLf8CJ/8CJ/ECJ2LEAu4CJ+0gQsQO/wIn/wIn/wIn/wIn/ws2/wQt/wIM/wIM/wIM/wIMxkrtBA75PI1CdzAtWERNS+Q0C1lpUTVKQmVsS/c4a8st/wf2/wf25jKqaGFybWFj7hcQMjL/Kcz/CTv/B5X/Kcz/KczvAWHtA0j/B5juDorqAWj/AUj/AUjoEDdicuQQK2NvbWZvcnQgdG8geeQJP2Rvb3JzdGVwcy79IBf/MUn6AWMuMv8BZfEBZTQ3/wFh/wFh/wFh6QFh6wTV/wS1/wS1/wbc/wbc/wS1/wS1/wS1/wS1/wS1/ykD/wSy/wSy/wSy/wSy/wSyeU9RaVRJdWFJ5AVrVEtfQ1lOZmVLRPYEssst/wIJ/wIJ/wIJ/wIJ/wIJ/wIJ/wIJ/wIJ/wIJ/wa+/wIM/wIM/wIM/AIM6wPD+yHdMkZFcTVycG5XIiwiU2dzN1VYWFlpQSIsImtySUhaUmU0NEXkIfd5dEFuNUs4T2H3IerKR/8FkP8FkOUFkEluZm9t5i66/wba/wba/wba/wV1/wba/QV57QNk/wV57QFK6wGE/wFK/wFK+jwg/wFE/wa7/wFE/wFE/wFE/wFE/wFE6SJe6gK7/wFE/wFE/TwQ/wFH/wFH/wFH/wFH/wFH/wFH/wFH6R7w6gP1/wFH/wFH/TwA/wFH/wFH/wFH/wFH/wFH/wFH/wFH6SG96gdi/wdC/wdC/wdC/wdC/wdC/wdC/wdC/wdC/wdC/wdC/wdC/wdC/wdC/wdC/wdCOlsickp1WDN5V1RU5AcoVFBIV3ZtRjY05DQhd1B3eTRHUU1NYvYHNcs6/wNg/wNg5QNgR2V0IGluIFRvcmPkJ4L/Bzf/Bzf/A2X/A2X/A2X7A2XrAyz/A2XwA2XqAXn/AUz/AUzlAUwrMjM0LTgxMy00OTAyLTM1NP8Etv8Etv8BUf8BUf8W9/8BTv8BTvYBTusCuv8BTv8BTuUBTm9iaW1rcHVzdGFubGV5YWls5Bug/wFS/wFS/wFS/wFS/wFS/wFS/wFS9gFS6xZM/wYF/wYF/wYF8xQF/wYF/wYF/wYF/wYF/zRI/w9P/zRF/wX9/wX9/wX9/xYJ5wX9cUNKcm1jN0V5NfYF48sg/wNJ/wNJ5QNJwqkgMjAyNSDoE/guJm5ic3A7IEFsbCDlAdFzIHJlc2VydmVkLiBQb3dl5CRjYnkgU+Qy82Ny7kyTMTP/A3T/A3TqEsU1/wN2/wYZ/wN55gGO6wNA/wN57QGCfQ=="
  // const json = lz.decompress(lz.decodeBase64(jsonDecrypt));

  console.log("isSection:", isSection, "isPreview:", isPreview); // Debug

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
        }}
      >
        <ViewportProvider>
          <div className="flex flex-col h-screen">
            {/* Top Bar */}
            <EditorTopBar zoom={zoom} setZoom={setZoom} />

            {/* <div className={`hidden ${isPreview === false ? "": "hidden" }`} >
              <ContentSectionSect />
            </div> */}

            {/* Main Content Area */}
            <div className={`flex flex-1 justify-between overflow-hidden `}>
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
                    <EditorSideBar />
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
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.25 }}
                  >
                    <EditorRightBar />
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
