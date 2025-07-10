import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Element, useEditor } from "@craftjs/core";
import { Text } from "../user/Text";
import { TextIcon, ButtonIcon, ContainerIcon, ImageIcon, SunIcon, SectionIcon, PlusCircledIcon, LayersIcon, StackIcon, BlendingModeIcon, FilePlusIcon } from "@radix-ui/react-icons"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Container } from "../user/Container";
import { Button } from "../user/Button";
import { Image } from '../user/Image';
import { Grid } from '../user/Grid';

import { Button as ShardButton } from "@/components/ui/button"

import { AnnouncementBar } from "../ui-blocks/AnnouncementBar"
import { Card } from "../user/Card";
import { NavigationBar } from "../ui-blocks/NavigationBar"




const ElementContent = ({ showRightSidebar }) => {
    const { connectors } = useEditor();
    return (
        <aside
            className={`w-85 h-[calc(100vh-4.5em)] bg-white border-r border-gray-200   ${
                showRightSidebar === "element" ? '' : 'hidden'
            }`}
        >

       <div className='flex flex-col h-[calc(100vh-4.5em)] w-full overwflow-y-hidden'>
            <div className='h-[7%] flex items-center border-b border-gray-200 px-4'>
                <p className="text-[#111529] text-[16px] font-bold"> Add Elements </p>
            </div>
            
      {/* Sidebar Tabs */}
      <Tabs defaultValue="tab1" className="flex flex-row w-full h-[93%]">
        <div className="w-[40%] bg-grasy-400 h-full  py-4 px-2 border-r">
          <TabsList className="flex-col space-y-1 bg-transparent w-full p-0 "> 
            <TabsTrigger value="tab1" className="cursor-pointer data-[state=active]:bg-blue-50 data-[state=active]:text-belue-500 data-[state=active]:shadow-none rounded-[3px] py-2" asChild>
                <button className="w-full h-10 flex items-center justify-start text-gray-600 hover:bg-gray-100 text-[13px] font-normal">
                    Basic
                </button>
            </TabsTrigger>
            <TabsTrigger value="tab2" className="cursor-pointer data-[state=active]:bg-blue-50 data-[state=active]:texqt-white data-[state=active]:shadow-none rounded-[3px] py-2" asChild>
                <button className="w-full h-10 flex items-center justify-start text-gray-500 hover:bg-gray-100 text-[13px] font-normal">
                    Component
                </button>
            </TabsTrigger>
            {/*
            <TabsTrigger value="tab3" className="cursor-pointer data-[state=active]:bg-blue-50 data-[state=active]:texqt-white data-[state=active]:shadow-none" asChild>
                <div className="w-full h-10flex items-center justify-start rounded-sm text-gray-500 hover:bg-gray-100 text-sm font-normal">
                    Sectiond
                </div>
            </TabsTrigger> */}
          </TabsList>
        </div>
        
        {/* Content Section */}
        {/* <ScrollArea className="w-[65%] h-full"> */}
        <ScrollArea className="w-[60%] -ml-2 py-2 pl-2 pr-2">
          <TabsContent value="tab1">
          <div className="grid grid-cols-1 gap-2">
            <button className="group bg-gray-100 text-gray-600 rounded-sm h-20 flex flex-col items-center justify-center hover:bg-gray-200  w-full text-center cursor-pointer" ref={ref => connectors.create(ref, <Text text="Hi world" />)} >
                  <TextIcon className="w-5 h-5 mb-1 stroke-current" />
                  <p className='text-[13px] font-normal '>Text</p>
            </button>

            <button className="group bg-gray-100 text-gray-600 rounded-sm h-20 flex flex-col items-center justify-center hover:bg-gray-200  w-full text-center cursor-pointer" ref={ref => connectors.create(ref, <Element is={Container} padding={20} canvas />)} >
                  <ContainerIcon className="w-5 h-5 mb-1 stroke-current" />
                  <p className='text-[13px] font-normal '>Container</p>
            </button>

            <button className="group bg-gray-100 text-gray-600 rounded-sm h-20 flex flex-col items-center justify-center hover:bg-gray-200  w-full text-center cursor-pointer" ref={ref => connectors.create(ref, <Button text="Click me" size="small" />)} >
                  <ButtonIcon className="w-5 h-5 mb-1 stroke-current" />
                  <p className='text-[13px] font-normal '>Button</p>
            </button>

            <button className="group bg-gray-100 text-gray-600 rounded-sm h-20 flex flex-col items-center justify-center hover:bg-gray-200 w-full text-center cursor-pointer" ref={ref => connectors.create(ref, <Image />) } >
                  <ImageIcon className="w-5 h-5 mb-1 stroke-current" />
                  <p className='text-[13px] font-normal '>Image</p>
            </button>

            
            {/* <button className="group bg-gray-100 text-gray-600 rounded-sm h-20 flex flex-col items-center justify-center hover:bg-gray-200 w-full text-center cursor-pointer" ref={ref => connectors.create(ref, <AnnouncementBar />) } >
                  <ImageIcon className="w-5 h-5 mb-1 stroke-current" />
                  <p className='text-[13px] font-normal '>AnnouncementBar</p>
            </button>

            <button className="group bg-gray-100 text-gray-600 rounded-sm h-20 flex flex-col items-center justify-center hover:bg-gray-200 w-full text-center cursor-pointer" ref={ref => connectors.create(ref, <NavigationBar />) } >
                  <ImageIcon className="w-5 h-5 mb-1 stroke-current" />
                  <p className='text-[13px] font-normal '>NavigationBar</p>
            </button>

            <button className="group bg-gray-100 text-gray-600 rounded-sm h-20 flex flex-col items-center justify-center hover:bg-gray-200 w-full text-center cursor-pointer" ref={ref => connectors.create(ref, <Grid />) } >
                  <ImageIcon className="w-5 h-5 mb-1 stroke-current" />
                  <p className='text-[13px] font-normal '>Grid</p>
            </button> */}

          </div>
          </TabsContent>
          <TabsContent value="tab2">
          <p className="text-gray-500 text-sm">page  Panel</p>
          <p className="text-gray-500 text-sm">page Panel</p>
          
          </TabsContent>
          <TabsContent value="tab3">
          <p className="text-gray-500 text-sm">page  Panel</p>
          <p className="text-gray-500 text-sm">page Panel</p>
          <p className="text-gray-500 text-sm">page Panel</p>
          
          </TabsContent>
        </ScrollArea>
        {/* </ScrollArea> */}
      </Tabs>
      </div>
   
        </aside>
    );
};

export default ElementContent;