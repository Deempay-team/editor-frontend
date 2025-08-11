// import React, { useState } from 'react';
// import {Editor, Frame, Element} from "@craftjs/core";
// import ReactFrameComponent from 'react-frame-component';

// import { Container } from './user/Container';
// import { Button } from './user/Button';
// import { Card, CardTop, CardBottom } from './user/Card';
// import { Text } from './user/Text';
// import { Grid } from './user/Grid';
// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

// import { useViewport } from "../../Context/ViewportContext";
// import { useSection } from "../../Context/SectionContext";

// function ContentSect({ data }) {
//   const { viewport } = useViewport();
//   // const { isSection, setIsSection } = useSection();

//    // Define widths for different breakpoints
//    const getViewportWidth = () => {
//     switch (viewport) {
//       case "mobile":
//         return "375px"; // iPhone width
//       case "tablet":
//         return "768px"; // Tablet width
//       default:
//         return "100%"; // Full width for desktop
//     }
//   };

//    return(
//     <>
//       <main className=" bdg-[#f1f1f1] ">

//           {/* <div className={`${ isSection === true ? 'hidden' : ''} `}>   */}
//           <div className="">
//               <ReactFrameComponent className={` h-screen w-full `} style={{ boxSizing: 'border-box'  }}>
//                 <Frame data={data} >
//                 {/* <Frame > */}
//                 {/* <Element
//                 is={Container}
//                 id="main-frame"
//                 paddingX={0}
//                 paddingY={0}
//                 background="#eee"
//                 width="100%"
//                 height="100%"
//                 flexDirection="column"
//                 fillSpace={false}
//                 alignItems="flex-start"
//                 justifyContent="flex-start"
//                 canvas
//               /> */}
//                   {/* <Element is={Container} padding={0} background="#eee" canvas> */}
//                     {/* <Card /> */}
//                     {/* <Button>Click kosi</Button>
//                     <Text size="small" text="Hi world!" />
//                     <Element is={Container} canvas padding={6} background="#999">
//                       <Text size="small" text="It's me again!" />
//                     </Element> */}
//                   {/* </Element> */}
//                 </Frame>
//               </ReactFrameComponent>
//           </div>

//           {/* <ScrollArea className='bg-white h-150  mx-auto border pr-2 rounded-sm' style={{ width: getViewportWidth(), eminHeight: "600px" }}>
//                 <Frame >
//                   <Element is={Container} id='ks' padding={5} background="#eee" canvas>

//                   </Element>
//                 </Frame>

//               <ScrollBar orientation="vertical" className="bg-black  " />
//           </ScrollArea> */}

//           {/* <div className={`bg-white h-auto hid  mx-auto border pr-0 rounded-sm ${ isSection === true ? '' : 'hidden'} `} style={{ width: getViewportWidth(), eminHeight: "600px" , boxSizing: 'border-box' }}>
//                 <Frame >
//                   <Element is={Container} id='sectionframe' paddingX={25} paddingY={25} background="gray">
//                     <Element is={Container}  padding={5} background="blue" canvas/>
//                   </Element>
//                 </Frame>
//           </div> */}

//       </main>
//     </>
//    )
// }

// function ContentSectionSect() {
//   const { viewport } = useViewport();
//   const { isSection, setIsSection } = useSection();

//    // Define widths for different breakpoints
//    const getViewportWidth = () => {
//     switch (viewport) {
//       case "mobile":
//         return "375px"; // iPhone width
//       case "tablet":
//         return "768px"; // Tablet width
//       default:
//         return "100%"; // Full width for desktop
//     }
//   };

//    return(
//     <>
//       <main className="flex-1 overflow-y-scrwoll p-2 bg-[#f1f1f1] ">

//           {/* <div className="">
//               <ReactFrameComponent className={`bg-white min-h-150  mx-auto border p-0 rounded-sm `} style={{ width: getViewportWidth(), lminHeight: "600px" , boxSizing: 'border-box' }}>
//                 <Frame >
//                 <Element
//                 is={Container}
//                 id="main-frame"
//                 paddingX={5}
//                 paddingY={5}
//                 background="#eee"
//                 width="100%"
//                 height="100%"
//                 flexDirection="row"
//                 fillSpace={false}
//                 alignItems="flex-start"
//                 justifyContent="flex-start"
//                 canvas
//               /> */}
//                   {/* <Element is={Container} padding={0} background="#eee" canvas> */}
//                     {/* <Card /> */}
//                     {/* <Button>Click kosi</Button>
//                     <Text size="small" text="Hi world!" />
//                     <Element is={Container} canvas padding={6} background="#999">
//                       <Text size="small" text="It's me again!" />
//                     </Element> */}
//                   {/* </Element> */}
//                 {/* </Frame>
//               </ReactFrameComponent>
//           </div> */}

//           <div className={`bg-white min-h-150  mx-auto border pr-0 rounded-sm `} style={{ width: getViewportWidth(), eminHeight: "600px" , boxSizing: 'border-box' }}>
//                 <Frame >
//                   <Element
//                 is={Container}
//                 id="main-frame"
//                 paddingX={10}
//                 paddingY={10}
//                 background="white"
//                 width="100%"
//                 height="auto"
//                 flexDirection="column"
//                 fillSpace={false}
//                 alignItems="flex-start"
//                 justifyContent="flex-start"
//                 >
//                   <Element
//                 is={Container}
//                 id="main-frame"
//                 paddingX={10}
//                 paddingY={10}
//                 background="#eee"
//                 width="100%"
//                 height="100px"
//                 flexDirection="column"
//                 fillSpace={false}
//                 alignItems="flex-start"
//                 justifyContent="flex-start"
//                 canvas
//               />
//                   </Element>
//                 </Frame>
//           </div>

//       </main>
//     </>
//    )
// }

// export  { ContentSect, ContentSectionSect};

import React from "react";
import { Frame, Element } from "@craftjs/core";
import ReactFrameComponent from "react-frame-component";

import { Container } from "./user/Container";
import { useViewport } from "../../Context/ViewportContext";
import { Header } from "./templates/Header";

function ContentSect({ data }) {
  const { viewport } = useViewport();

  const getViewportWidth = () => {
    switch (viewport) {
      case "mobile":
        return "375px";
      case "tablet":
        return "768px";
      default:
        return "100%";
    }
  };

  return (
    <main className="bg-[#f1f1f1] flex justify-center items-start p-4 min-h-screen">
      <div
        className="bg-white min-h-[600px] rounded-sm overflow-hidden"
        style={{
          width: getViewportWidth(),
          boxSizing: "border-box",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)", // Strong custom shadow
        }}
      >
        <ReactFrameComponent
          className="w-full h-full"
          style={{ boxSizing: "border-box" }}
        >
          <Frame data={data}>{/* Optional: Preload elements */}</Frame>
        </ReactFrameComponent>
      </div>
    </main>
  );
}

function ContentSectionSect() {
  const { viewport } = useViewport();

  const getViewportWidth = () => {
    switch (viewport) {
      case "mobile": return "375px";
      case "tablet": return "768px";
      default: return "100%";
    }
  };

  return (
   <main className="bg-[#F6F6F6] flex justify-center pt-4 px-8 pb-20 min-h-screen">
  <div
    className="bg-white rounded-sm"
    style={{
      width: getViewportWidth(),
      boxSizing: "border-box",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.10)",
    }}
  >
    <Frame>
      <Element
        is={Container}
        id="main-frame"
        paddingX={10}
        paddingY={10}
        background="transparent"
        width="100%"
        height="auto"
        flexDirection="column"
        fillSpace={false}
        alignItems="stretch"
        justifyContent="flex-start"
        canvas
      >
        <Header />
      </Element>
    </Frame>
  </div>
</main>

  );
}


export { ContentSect, ContentSectionSect };
