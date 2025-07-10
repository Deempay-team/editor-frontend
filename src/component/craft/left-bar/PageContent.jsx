import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const PageContent = ({ showRightSidebar }) => {
    return (
        <aside
            className={`w-80 h-[calc(100vh-4.5em)] bg-white border-r border-gray-200   ${
                showRightSidebar === "page" ? '' : 'hidden'
            }`}
        >

       <div className='flex flex-col h-full w-full overflow-y-auto'>
            <div className='h-12 flex items-center border-b border-gray-200 px-3'>
                <p className="text-black text-sm font-medium">Insert Element </p>
            </div>
            
      {/* Sidebar Tabs */}
      <Tabs defaultValue="tab1" className="flex flex-row w-full h-full">
        <div className="w-[35%] bg-grany-400 h-full items-center text-center pt-4 border-r">
          <TabsList className="flex-col space-y-4 bg-transparent">
            <TabsTrigger value="tab1" className="cursor-pointer">PAge 1</TabsTrigger>
            <TabsTrigger value="tab2" className="cursor-pointer">Page 2</TabsTrigger>
            <TabsTrigger value="tab3" className="cursor-pointer">Page 3</TabsTrigger>
          </TabsList>
        </div>
        
        {/* Content Section */}
        <div className="w-[65%] bg-ered-500 py-4 pl-2">
          <TabsContent value="tab1">
          <div className="grid grid-cols-4 gap-4">
            <div>01</div>
            <div>02</div>
            <div>03</div>
            <div>04</div>
            <div>05</div>
            <div>06</div>
            <div>07</div>
            <div>08</div>
            <div>09</div>
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
        </div>
      </Tabs>
      </div>
   
        </aside>
    );
};

export default PageContent;