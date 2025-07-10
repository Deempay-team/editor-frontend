import React, { useState, useEffect } from "react";
import { Box, FormControlLabel, Grid, Switch as Kswitch, Button as MaterialButton, TextField, Snackbar } from "@mui/material";
import { useEditor } from "@craftjs/core";
import lz from "lzutf8";

import copy from 'copy-to-clipboard';

//import ChevronLeftIcon from "../../assets/icons/chevron-left.svg?react"
import ChevronDownIcon from "../../assets/icons/chevron-down.svg?react"
import EyeIcon from "../../assets/icons/eye.svg?react"
import DeviceDesktopIcon from "../../assets/icons/device-desktop.svg?react"
import DeviceMobileRotatedIcon from "../../assets/icons/device-mobile-rotated.svg?react"
import DeviceMobileIcon from "../../assets/icons/device-mobile.svg?react"
import DeviceTabletIcon from "../../assets/icons/device-tablet.svg?react"
import PackageIcon from "../../assets/icons/package.svg?react"
import Logo from "../../assets/icons/logo.svg?react"
import UsersIcon from "../../assets/icons/users.svg?react"



import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"



import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { useForm } from "react-hook-form"

  import { useViewport } from "../../Context/ViewportContext";
  import { usePreview } from "../../Context/PreviewContext";
  import { useSection } from "../../Context/SectionContext";
  


  import { ChevronRightIcon, ChevronLeftIcon, } from "@radix-ui/react-icons"
  import { pasteNodeTree } from "@/utils/craftUtils";
  
  


function EditorTopBar(){
    const [ checked, setChecked ] = useState(true);
    const { viewport, setViewport } = useViewport();
    const { isPreview, setIsPreview } = usePreview();
    const { isSection, setIsSection } = useSection();

    const { actions, query, enabled } = useEditor((state) => ({
        enabled: state.options.enabled
      }));
    
      const [dialogOpen, setDialogOpen] = useState(false);
      const [snackbarMessage, setSnackbarMessage] = useState();
      const [stateToLoad, setStateToLoad] = useState(null);

    function handleChange() {
        setChecked(!checked);
    }

    useEffect(() => {
        actions.setOptions(options => options.enabled = checked);
        //console.log(checked);
    }, [checked]);

    function handleImport (data) {

      //const compressedJson = `eyJST09UIjp7InR5cGXECHJlc29sdmVkTmFtZSI6IkNvbnRhaW5lciJ9LCJpc0NhbnZhcyI6dHJ1ZSwicHJvcHPENWJhY2tncm91bmQiOiIjZWVlIiwicGFkZGluZyI6NckMWCI6MMkNWcUNbWFyZ2luxER0b3DFEnJpZ2h0xQpib3R0b23FC2xlZsQUfcQVcmRlclJhZGl1c8cmxBFXaWR0aMsQQ29sb3LkAI0wxQEixBh4U2hhZG93Ijoibm9u5ACjbWluSGXGbyIxMDBweMQUYXjHTMYmfSwiZGlzcGxhefEBEiwiY3Vz5QCie30sImhpZGRlbiI6ZmFsc2UsIm5vZGVzIjpbIlhUSzgzZDduZi0iXSwibGlua2VkTsYde319LMwg/wGH/wGH8QGHYTllOe0BijLqAX5YIjoy6gGZWSI6Mjn/AY3/AY3/AY3/AY3vAY1hdXRv/wGM/QGMcGFyZW7ESeUC3voBnE1oQTR2MGYyQnT2AZzLIPoBnEJ1dHRvbu4Bmcdp6QGac2l6xCtzbWFsbCIsInZhcmlh5QChY+cAwmTkAMLnASdwcmltYXJ5xBJoaWxkcuQAuiJUaGFuayB5b3Ui5gCpIjoiIiwib3BlbkluTmV3VGFiyXZmb250U8VxMTbGDlfoAVlub3JtYeQAgmxpbmXoAW/kAhd0ZXh0QWxpZ8RrY2VudOUBU8QVRGVjb3JhdGlvxBrnAavFYXR5bOQA08lS6gJ96wHvN2JmZuwCgjHpAhToAjU1yBHKX2HkAIht5gHBZmnlATHkAIrkAfBsaWNrIG3zAgrnAYX3AgfrA2T5Ag3zAgF9`
      //const json = lz.decompress(lz.decodeBase64(compressedJson));
      //console.log(json);

      //parse the JSON string into an object
      // const json = JSON.parse(jsonString);
      //const parsed = JSON.parse(json);
      console.log("++++++++++++++++++++++");
      console.log("++++++++++++++++++++++");
      console.log("++++++++++++++++++++++");
      //console.log(parsed);      
      console.log("++++++++++++++++++++++");
      console.log("++++++++++++++++++++++");
  
      const json = " ";
      const targetNodeId = 'ROOT'; // e.g., a div section you want to insert into
      try {
        // const parsede = JSON.parse(json);

        // const allNodes = query.getSerializedNodes();
        // console.log("all nodes",  allNodes);

        // const canvasNode = query.node("9lZNA6IVjJ").get();

        // if (!canvasNode || !canvasNode.data.isCanvas) {
        //   console.error(`Target node "${targetNodeId}" does not exist or is not a canvas.`);
        //   return;
        // }
  
      
        // console.log("canvasNode", canvasNode);
        // console.log("canvasNode", canvasNode.data.isCanvas);

        
        pasteNodeTree(targetNodeId, query, actions, null, data);
        console.log("json", json);
       

        //actions.add(parsede, targetNodeId);
      } catch (e) {
        console.error('Failed to import:', e);
      }
      
    };

    return(
        <>
        <div className="">
                <header className="flex h-18 items-cwenter justify-between ww-full bg-white gap-x-6  border-b border-gray-200 bg-whjite pkx-8">
                    {/* <button className="flex items-center justify-center rounded-xl bg-gray-100 p-2">
                        <ChevronLeftIcon className="h-6 w-6 stroke-current text-gray-400" />
                    </button> */}

                    <div className="flex h-18 items-center w-18 border-r border-gray-200 ">
                       <div className='flex h-full w-full  items-center justify-center '>
                            <Logo />
                       </div>
                    </div>
                    

                    <div className=" flex h-full items-center gap-x-4 font-semibold ">
                    <button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 p-2 cursor-pointer" onClick={() => {actions.history.undo(); console.log('redo')}} disabled={!query.history.canUndo()}>
                        <ChevronLeftIcon className="h-6 w-6 stroke-current text-gray-400" />
                        {/* <span className=" text-sm font-semibold leading-6"> Undo </span> */}
                    </button>
                    <button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 p-2 cursor-pointer" onClick={() => { actions.history.redo()} } disabled={!query.history.canRedo()}>
                       {/* <span className=" text-sm font-semibold leading-6"> Redo </span> */}
                        <ChevronRightIcon className="h-6 w-6 stroke-current text-gray-400" />
                        
                    </button>
                    <button className="flex flex-col  items-start border-gray-200 rounded-xl px-6 py-2 bg-gray-100">
                        <div className=" flex items-center gap-x-2">
                            <span className=" text-sm font-semibold"> Page: Homepage - Dipa </span>
                            <ChevronDownIcon className="h-5 w-5 stroke-current text-gray-400" />
                        </div>
                        <div className="text-xs text-gray-400">
                            https://dipaihouse.com/
                        </div>
                    </button>
                    <button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2 cursor-pointer" onClick={() => setIsPreview(!isPreview)}>
                        <EyeIcon className="w-6 h-6 stroke-current text-gray-400" />
                        <span className=" text-sm font-semibold leading-6"> {isPreview ? "Design Mode" : "Preview"} </span>
                    </button>

                    <div className="h-full w-px bg-gray-200 " />

                    <div className="flex items-center gap-x-3 ">
                        <button className={`cursor-pointer rounded-xl p-2 ${viewport == "desktop" ? 'text-blue-600' : 'text-gray-400'} hover:bg-gray-100`} onClick={
                            () => {
                                 setViewport("desktop")
                                 //console.log("desktop") 
                            }}>
                            <DeviceDesktopIcon className="h-6 w-6 stroke-current" />
                        </button>
                        <button className={`cursor-pointer rounded-xl p-2 ${viewport == "mobile" ? 'text-blue-600' : 'text-gray-400'} hover:bg-gray-100`}  onClick={
                            () => {
                                setViewport("mobile")
                                //console.log("mobile") 

                            }}>
                            
                            <DeviceMobileIcon className="h-6 w-6 stroke-current" />
                        </button>
                    </div>

                    <div className="h-full w-px bg-gray-200 " />

                    {/* <button className="flex items-center justify-center gap-x-3 rounded-xl bg-gray-100 px-4  py-2">
                        <span className="font-semibold text-sm leading-6">  960 PX / 100% </span>
                        <ChevronDownIcon className="h-6 w-6 stroke-current text-gray-400" />
                    </button> */}

                    {/* <button className="flex items-start justify-center rounded-xl bg-gray-100 p-2 ">
                            <PackageIcon className="h-6 w-6 stroke-current text-gray-400" />
                    </button> */}
                    
                    
                    {/* <div className="flex items-center space-x-2">
                      <Switch id="airplane-mode" checked={enabled}
                      onCheckedChange={(_, value) => actions.setOptions(options => options.enabled = value)} />
                      <Label htmlFor="airplane-mode">Enable</Label>
                    </div> */}

                    <div className="flex items-center space-x-2 ">
                      <Switch id="airplane-mode" checked={checked} className="cursor-pointer"
                      onCheckedChange={ handleChange } />
                      <Label htmlFor="airplane-mode">Enable</Label>
                    </div>


                    {/* button to copy state */}
                    <button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 p-2 cursor-pointer" onClick={() => {
                                  const json = query.serialize();
                                  copy(lz.encodeBase64(lz.compress(json)));
                                    toast.message('', {
                                        description: 'State copied to clipboard',
                                      })
                                }}>
                        {/* <ChevronLeftIcon className="h-6 w-6 stroke-current text-gray-400" /> */}
                        <span className=" text-sm font-semibold leading-6"> Copy state </span>
                    </button>
                    {/* <button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 p-2 cursor-pointer" onClick="">
                        {/* <ChevronLeftIcon className="h-6 w-6 stroke-current text-gray-400" /> */}
                        {/* <span className=" text-sm font-semibold leading-6"> add state </span>
                    </button> */}

                    
                    {/* <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} fullWidth maxWidth="md"> */}
                      <Dialog >
                      <DialogTrigger asChild>
                      <button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 p-2 cursor-pointer " >
                        {/* <ChevronLeftIcon className="h-6 w-6 stroke-current text-gray-400" /> */}
                        {/* <span className=" text-sm font-semibold leading-6  "> Load state </span> */}
                        <span className=" text-sm font-semibold leading-6  "> Paste component  </span>
                      </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Paste component</DialogTitle>
                          <DialogDescription>
                            Paste your copied component or section to import it to the editor
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex items-center space-x-2">
                          <div className="grid flex-1 gap-2">
                            <Label htmlFor="link" className="sr-only">
                              state
                            </Label>
                            <div className="grid w-full gap-1.5">
                            <Textarea 
                               placeholder="Paste the contents that was copied from the 'Copy Current State' button" 
                               value={stateToLoad || ""}
                               onChange={e => setStateToLoad(e.target.value)}
                               className="resize-none w-full max-h-40"
                            />
                            </div>
                            
                          </div>
                        </div>
                        <DialogFooter className="">  
                            <DialogClose asChild>
                              <Button type="button" variant="secondary">
                                Close
                              </Button>
                            </DialogClose>  
                            <DialogClose asChild>
                            <Button  onClick={() => {
                                setDialogOpen(false);
                                // const json = lz.decompress(lz.decodeBase64(stateToLoad));
                                // actions.deserialize(json);
                                handleImport(stateToLoad);
                                setSnackbarMessage("State loaded")
                            }}>
                                Load
                            </Button>
                            </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <Toaster 
                        position="bottom-right"
                        expand={false}
                    />

                    <Dialog >
                      <DialogTrigger asChild>
                      <button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 p-2 cursor-pointer " >
                        {/* <ChevronLeftIcon className="h-6 w-6 stroke-current text-gray-400" /> */}
                        <span className=" text-sm font-semibold leading-6  "> Load state </span>
                      </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Load state</DialogTitle>
                          <DialogDescription>
                            Paste your copied component or section to import it to the editor
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex items-center space-x-2">
                          <div className="grid flex-1 gap-2">
                            <Label htmlFor="link" className="sr-only">
                              state
                            </Label>
                            <div className="grid w-full gap-1.5">
                            <Textarea 
                               placeholder="Paste the contents that was copied from the 'Copy Current State' button" 
                               value={stateToLoad || ""}
                               onChange={e => setStateToLoad(e.target.value)}
                               className="resize-none w-full max-h-40"
                            />
                            </div>
                            
                          </div>
                        </div>
                        <DialogFooter className="">  
                            <DialogClose asChild>
                              <Button type="button" variant="secondary">
                                Close
                              </Button>
                            </DialogClose>  
                            <DialogClose asChild>
                            <Button  onClick={() => {
                                setDialogOpen(false);
                                const json = lz.decompress(lz.decodeBase64(stateToLoad));
                                actions.deserialize(json);
                                // handleImport(stateToLoad);
                                setSnackbarMessage("State loaded")
                            }}>
                                Load
                            </Button>
                            </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <Toaster 
                        position="bottom-right"
                        expand={false}
                    />
                    </div>
                    
                
                

                    <div className=" h-18 w-[300px]  border-l border-gray-200">
                        
                        <div className="flex h-18 items-center gap-x-4 font-semibold border-b border-gray-200 px-6">
                           {/* <div className="h-full w-px bg-gray-200 " /> */}
                                    <button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2 ">
                                         <UsersIcon className="h-5 w-5 stroke-current text-gray-400 " />
                                         <span className="text-sm leading-6">Invite</span> 
                                    </button>
                                    <button className={`flex flex-1 items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm leading-6 text-white ${isSection ? 'hidden' : ''}`} >
                                        Publish
                                    </button>

                                    <button className={`flex flex-1 items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm leading-6 cursor-pointer  text-white ${isSection ? '' : 'hidden'}`} >
                                        Save Section
                                    </button>
                        </div>
                    </div>
                </header>
        </div>
        </>
    );
}


export default EditorTopBar;