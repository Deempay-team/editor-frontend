// import React, { useState } from 'react';
// import Tooltip  from '../Tooltip';
// import { TextIcon, ButtonIcon, ContainerIcon, ImageIcon, SunIcon } from "@radix-ui/react-icons"

// import Logo from "../../assets/icons/logo.svg?react"
// import SquarePlusIcon from "../../assets/icons/square-plus.svg?react"
// import LayoutIcon from "../../assets/icons/layout.svg?react"
// import PalatteIcon from "../../assets/icons/palette.svg?react"
// import FileIcon from "../../assets/icons/file.svg?react"
// //import ImageIcon from "../../assets/icons/image.svg?react"
// import SettingsIcon from "../../assets/icons/settings.svg?react"
// import AlertCircleIcon from "../../assets/icons/alert-circle.svg?react"


// import { Box, Typography, Grid, Button as MaterialButton } from "@mui/material";
// import { Element, useEditor } from "@craftjs/core";
// import { Container } from "./user/Container";
// import { Card } from "./user/Card";
// import { Button } from "./user/Button";
// import { Text } from "./user/Text";
// import { Image } from './user/Image';
// import { Column } from  "./user/Column";

// import { Button as ShardButton } from "@/components/ui/button"


// const EditorSideBar = ({hidden}) => {
//   const { connectors, query } = useEditor();


//   return (
//     <>
//         <aside>
//         <div className={`${hidden == "true" ? 'hidden' : '' } `} >
//             <div className='flex flex-col items-center w-18 h-[calc(100vh-4.5em)] bg-white border-r border-gray-200'>
//                 {/* <div className='flex h-18 w-full items-center justify-center border-b border-gray-200'>
//                     <Logo />
//                 </div> */}
//                 <div>
                    
//                 </div>
//                 <nav className='flex flex-1 flex-col gap-y-4 pt-10'>

//                     {/* add button */}
//                     <button className='group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100  '  ref={ref=> connectors.create(ref, <Button text="Click me" size="small" >Click me</Button>)} >
//                         <ButtonIcon className='h-6 w-6 stroke-current' />
//                         <Tooltip>Add Button <span className='text-gray-400'>  (A) </span></Tooltip>
//                     </button>

//                     {/* add text  */}
//                     <button className='group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100 ' href='' ref={ref=> connectors.create(ref, <Text text="Hi world" />)}>
//                         {/* <LayoutIcon className="w-6 h-6 stroke-current" /> */}
//                         <TextIcon className="w-6 h-6 stroke-current" />
//                         {/* <Tooltip>Layout <span className='text-gray-400'>  (Y) </span></Tooltip> */}
//                         <Tooltip>Add Text <span className='text-gray-400'>  (Y) </span></Tooltip>
//                     </button>

//                     {/* add container */}
//                     <button className='group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100 ' href='' ref={ref=> connectors.create(ref, <Element is={Container} padding={20} canvas />)}>
//                         {/* <PalatteIcon className="w-6 h-6 stroke-current" /> */}
//                         <ContainerIcon className="w-6 h-6 stroke-current" />
//                         {/* <Tooltip>Themes <span className='text-gray-400'>  (T) </span></Tooltip> */}
//                         <Tooltip>Add Container <span className='text-gray-400'>  (T) </span></Tooltip> 
//                     </button>

//                     {/* add card */}
//                     {/* <button className='group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100 '  href='' ref={ref=> connectors.create(ref, <Card />)}>
//                         <FileIcon className="w-6 h-6 stroke-current" />
//                         <Tooltip>Add Card <span className='text-gray-400'>  (S) </span></Tooltip>
//                     </button> */}

//                     <button className='group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100' href='' ref={ref=> connectors.create(ref, <Image />)} >
//                         <ImageIcon className="w-6 h-6 stroke-current" />
//                         <Tooltip>Images <span className='text-gray-400'>  (I) </span></Tooltip>
//                     </button>
                    

//                     {/* <button className='group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100' href='' ref={ref=> connectors.create(ref, <Column />)} >
//                         <ImageIcon className="w-6 h-6 fill-current" />
//                         <Tooltip>Add column <span className='text-gray-400'>  (I) </span></Tooltip>
//                     </button> */}
                    
//                 </nav>
//                 <div className='flex flex-col items-center gap-y-4 pb-10'>
//                     <button className='group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100' href='#'>
//                         <AlertCircleIcon className="w-6 h-6 stroke-current" />
//                         <Tooltip> Help <span className='text-gray-400'>  (I) </span></Tooltip>

//                     </button>
//                     <button className='group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100' href='#'>
//                         <SettingsIcon className="w-6 h-6 stroke-current" />
//                         <Tooltip> Settings <span className='text-gray-400'>  (I) </span></Tooltip>

//                     </button>
//                     <button className='pt-2 rounded-full overflow-hidden'>
//                         <img className='h-10 w-10 object-cover' src='/img/avatar.png' alt="" />
//                     </button>
//                 </div>
//              </div>
//         </div>
//         </aside>
//     </>
//   );
// };

// export default EditorSideBar;


import React, { useState } from 'react';
import Tooltip  from '../Tooltip';
import { TextIcon, ButtonIcon, ContainerIcon, ImageIcon, SunIcon, SectionIcon, PlusCircledIcon, LayersIcon, StackIcon, BlendingModeIcon, FilePlusIcon } from "@radix-ui/react-icons"

import Logo from "../../assets/icons/logo.svg?react"
import SquarePlusIcon from "../../assets/icons/square-plus.svg?react"
import LayoutIcon from "../../assets/icons/layout.svg?react"
import PalatteIcon from "../../assets/icons/palette.svg?react"
import FileIcon from "../../assets/icons/file.svg?react"
//import ImageIcon from "../../assets/icons/image.svg?react"
import SettingsIcon from "../../assets/icons/settings.svg?react"
import AlertCircleIcon from "../../assets/icons/alert-circle.svg?react"


import { Box, Typography, Grid, Button as MaterialButton } from "@mui/material";
import { Element, useEditor } from "@craftjs/core";
import { Container } from "./user/Container";
import { Card } from "./user/Card";
import { Button } from "./user/Button";
import { Text } from "./user/Text";
import { Image } from './user/Image';
import { Column } from  "./user/TwoColumn";

import { Button as ShardButton } from "@/components/ui/button"
import SectionContent from './left-bar/SectionContent';
import ElementContent from './left-bar/ElementContent';
import PageContent from './left-bar/PageContent';


const EditorSideBar = ({ hidden }) => {
    const { connectors } = useEditor();
    const [showRightSidebar, setShowRightSidebar] = useState("section");
  
    return (
      <div className={`flex ${hidden === "true" ? 'hidden' : ''}`}>
        {/* Left Sidebar */}
        <aside>
            <div className='flex flex-col items-center w-18 h-[calc(100vh-4.5em)] bg-white border-r border-gray-200'>
              <nav className='flex flex-1 flex-col gap-y-4 pt-10'>

                <button className={`group relative rounded-xl p-2  ${showRightSidebar === "section"? 'text-blue-500' : 'text-gray-400'} hover:bg-gray-100`} onClick={() => {
                    if (showRightSidebar === "section") {
                      setShowRightSidebar("");
                    } else {
                        setShowRightSidebar("section");
                        }
                }}>
                  <SectionIcon className="w-6 h-6 stroke-current" />
                  
                </button>

                <button className={`group relative rounded-xl p-2  ${showRightSidebar === "element"? 'text-blue-500' : 'text-gray-400'} hover:bg-gray-100`} ref={ref => connectors.create(ref, <Element is={Container} padding={20} canvas />)}
                onClick={() => {
                    if (showRightSidebar === "element") {
                        setShowRightSidebar("");
                      } else {
                          setShowRightSidebar("element");
                          }
                  }}>
                  <PlusCircledIcon className="w-6 h-6 stroke-current" />
                </button>

                <button 
                  className={`group relative rounded-xl p-2  ${showRightSidebar === "page"? 'text-blue-500' : 'text-gray-400'} hover:bg-gray-100`}
                  ref={ref => connectors.create(ref, <Button text="Click me" size="small" />)}
                  onClick={() => {
                    if (showRightSidebar === "page") {
                        setShowRightSidebar("");
                      } else {
                          setShowRightSidebar("page");
                          }
                  }}
                >
                  <StackIcon className='h-6 w-6 stroke-current' />
                </button>


                <button className={`group relative rounded-xl p-2  ${showRightSidebar === "theme"? 'text-blue-500' : 'text-gray-400'} hover:bg-gray-100`}
                onClick={() => {
                    if (showRightSidebar === "theme") {
                        setShowRightSidebar("");
                      } else {
                          setShowRightSidebar("theme");
                          }
                  }}>
                  <BlendingModeIcon className="w-6 h-6 stroke-current" />
                </button>

                <button className={`group relative rounded-xl p-2  ${showRightSidebar === "media"? 'text-blue-500' : 'text-gray-400'} hover:bg-gray-100`}
                   onClick={() => {
                    if (showRightSidebar === "media") {
                        setShowRightSidebar("");
                      } else {
                          setShowRightSidebar("media");
                          }
                  }}>
                  <FilePlusIcon className="w-6 h-6 stroke-current" />
                </button>

              </nav>
            
            </div>
        </aside>
  
        {/* Right Sidebar */}
        <SectionContent showRightSidebar={showRightSidebar} />

        <ElementContent showRightSidebar={showRightSidebar} />

        <PageContent showRightSidebar={showRightSidebar} />

        

        <aside 
          className={`w-80 h-[calc(100vh-4.5em)] bg-white border-r border-gray-200 flex flex-col items-center  justify-center   ${showRightSidebar == "theme" ? '' : 'hidden'}`}
        >
          <p className="text-gray-500 text-sm">theme </p>
          <p className="text-gray-500 text-sm">theme n Panel</p>
          <p className="text-gray-500 text-sm">theme n Panel</p>
          <p className="text-gray-500 text-sm">theme n Panel</p>
          <p className="text-gray-500 text-sm">theme n Panel</p>
        </aside>

        <aside 
          className={`w-80 h-[calc(100vh-4.5em)] bg-white border-r border-gray-200 flex flex-col items-center  justify-center  ${showRightSidebar == "media" ? '' : 'hidden'}`}
        >
          <p className="text-gray-500 text-sm">  media Panel</p>
          <p className="text-gray-500 text-sm">s media ection Panel</p>
          <p className="text-gray-500 text-sm">s media ection Panel</p>
          <p className="text-gray-500 text-sm">s media ection Panel</p>
          <p className="text-gray-500 text-sm">s media ection Panel</p>
        </aside>

      </div>
    );
  };
  
  export default EditorSideBar;
  