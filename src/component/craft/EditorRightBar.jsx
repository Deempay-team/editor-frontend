import React from 'react';
import { useEditor } from "@craftjs/core";
import { Box, Chip, Grid, Typography, Button as MaterialButton, FormControl, FormLabel, Slider } from "@mui/material";

import Accordion from "../../component/Accordion"
import { Label } from "@/components/ui/label";
import { Button as ShadButton } from "@/components/ui/button";

import DeviceDesktopIcon from "../../assets/icons/device-desktop.svg?react"
import UsersIcon from "../../assets/icons/users.svg?react"
import ChevronDownIcon from "../../assets/icons/chevron-down.svg?react"
import AlignBottomIcon from "../../assets/icons/align-bottom.svg?react"
import AlignCenterIcon from "../../assets/icons/align-center.svg?react"
import AlignLeftIcon from "../../assets/icons/align-left.svg?react"
import AlignRightIcon from "../../assets/icons/align-right.svg?react"
import AlignTopIcon from "../../assets/icons/align-top.svg?react"
import AlignMiddleIcon from "../../assets/icons/align-middle.svg?react"
import EyeIcon from "../../assets/icons/eye.svg?react"


import lz from "lzutf8";
import copy from 'copy-to-clipboard';
import { copyNodeTree } from "@/utils/craftUtils";





function EditorRightBar({ hidden }) {

  

    const { actions, selected, query } = useEditor((state, query) => {
      const [currentNodeId] = state.events.selected;
      let selected;
  
      if ( currentNodeId ) {
        selected = {
          id: currentNodeId,
          name: state.nodes[currentNodeId].data.name,
          settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings,
          isDeletable: query.node(currentNodeId).isDeletable()
        };
      }
  
      return {
        selected
      }
    });

    const fromEntries = (pairs) => {
      if (Object.fromEntries) {
        return Object.fromEntries(pairs);
      }
      return pairs.reduce(
        (accum, [id, value]) => ({
          ...accum,
          [id]: value,
        }),
        {}
      );
    };
    // Function to serialize a node and its descendants    
      const serializeWithDescendants = (id) => {
        // Get the main node
        const nodeId = id; // ID of the node you want to serialize
        const node = query.node(nodeId);
        if (!node) {
          console.error(`Node with ID ${nodeId} not found.`);
          return;
        }

        const serializedNode = query.node(nodeId).toSerializedNode();
        
        // Get descendant node IDs
        const descendantIds = query.node(nodeId).descendants(true); // true for deep descendants
        const serializedDescendants = descendantIds.map((id) => ({
          id,
          ...query.node(id).toSerializedNode()
        }));

        const nodeWithId = {
          id: nodeId,
          ...serializedNode
        }
    
        // Combine results
        const result = {
          node: nodeWithId,
          descendants: serializedDescendants
        };

        //console.log("Node and descendants:", result);
        return result;
      };

   function handleExport(id, query) {
    const nodeId = id; // ID of the node you want to export
    //const nodeTree = query.node(nodeId).descendants(true);

  //const nodeTree = query.node(id).toSerializedNode();
  //const noSer = query.serialize();
    //const json = query.node(nodeId).toSerializedNode();
    // const json = query.node(nodeId).toSerializedNode();
    // const json = query.node(nodeId).toNodeTree();

    // const json = query
    // .node(nodeId)
    // .toSerializedNode()
    // .custom?.linkedNodes
    // ? query.node(nodeId).toNodeTree()
    // : "js"; // fallback

    // const stringified = JSON.stringify(json);
    // const compressed = lz.encodeBase64(lz.compress(stringified));

    //const jsonString = JSON.stringify(nodeTree);

    // const tree = query.node(id).toNodeTree();
    // const nodePairs = Object.keys(tree.nodes).map((id) => [
    //   id,
    //   query.node(id).toSerializedNode(),
    // ]);
    // console.log(JSON.stringify(fromEntries(nodePairs)));

    //serializeWithDescendants(id);
   // const jsonString = JSON.stringify(serializeWithDescendants(id));
    // const nodePairs = Object.entries(nodeTree.nodes).map(([id, node]) => [
    //   id,
    //   node.toSerializedNode(),
    // ]);

    const copyTree = copyNodeTree(nodeId, query);

    // copy(copyTree.jsonString);
    console.log(copyTree.jsonString);

    //console.log("Exported node tree:", saveData);
    return "";

   

    //return compressed;
   }
  
    
  return (
    <div className={`flex ${hidden === "true" ? 'hidden' : ''}`}>
      <aside className="h-[calc(100vh-4.5em)] flex-col border-l border-gray-200 bg-white">

        {/* topbbar */}
        {/* <div className="flex h-18 items-center gap-x-4 font-semibold border-b border-gray-200 px-6">
            <button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2 ">
                 <UsersIcon className="h-5 w-5 stroke-current text-gray-400 " />
                 <span className="text-sm leading-6">Invite</span> 
            </button>
            <button className="flex flex-1 items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm leading-6 text-white "> 
                Publish
            </button>
        </div> */}

        <div className="flex flex-col h-full overflow-y-auto">
            {/* <div className="flex items-center justify-between py-4 px-6 border-b border-gray-200  ">
                <span className="text-sm font-semibold"> Selector </span>
                <span className="text-sm text-gray-400"> 
                    Inheriting{" "} 
                    <span className="font-medium text-gray-900">2 Selector </span> 
                </span>
            </div> */}
            {/* <div className=" border-b border-gray-200 px-6 py-4 ">
                <button className="flex w-full items-center rounded-xl border border-gray-200 bg-gray-50 px-3 py-1.5 justify-between ">
                    <div className="flex items-center gap-x-2">
                        <span className="rounded-lg bg-white p-1 shadow">
                            <DeviceDesktopIcon className="h-5 w-5 stroke-current text-blue-600" />
                        </span>
                        <span className="rounded-lg bg-blue-100 py-1 px-3 text-sm font-semibold text-blue-600">
                            H1 - hero title
                        </span>
                    </div>
                    <ChevronDownIcon className="h-5 w-5 stroke-current text-gray-400" />
                </button>
                <div className="mt-2 text-xs text-gray-400">
                    1 on this page, 7 on other pages
                </div>
            </div> */}
            {
                selected ? (    
                    <Box bgcolor="rgb(255, 255, 255)" mt={0} px={2} py={2}>
                      <Grid container direction="column" spacing={0}>
                        <Grid item>
                          <Box pb={2}>
                            <Grid container alignItems="center">
                              
                              <Grid item xs><Label> Selected </Label></Grid>
                               <Grid item> {/*<Chip size="small" color="primary" label={selected.name} /> */}
                               <Label className="bg-blue-500 text-white p-2 rounded-lg"> {selected.name} </Label>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>
                        { 
                          selected.settings && React.createElement(selected.settings)
                        }
                        {
                          selected.isDeletable ? (
                            <>
                            {/* <ShadButton
                                variant="contained"
                                color="default"
                                className="bg-blue-500 text-white hover:bg-blue-600 mt-5 mr-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                onClick={() => {
                              // add ability to duplicate selected node
                              
                            }
                            } 
                              >
                                Duplicate
                            </ShadButton> */}
                            <ShadButton
                              variant="contained"
                              color="default"
                              className="bg-red-500 text-white hover:bg-red-600 mt-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                              onClick={() => {
                                actions.delete(selected.id);
                              }}
                            >
                              Delete
                            </ShadButton>
                            </>
                          ) : null
                        }

                        {
                          selected.id ? (
                            <>
                            <ShadButton
                              variant="contained"
                              color="default"
                              className="bg-blue-500 text-white hover:bg-blue-600 mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                              onClick={() => {
                                console.log("selected id", selected.id)
                                handleExport(selected.id, query);
                                
                              }}
                            >
                              {/* node-id(export) */}
                              Copy Component
                            </ShadButton>
                            </>
                          ) : null
                        }
                      </Grid>
                    </Box>
                  ) : null
            }
        </div>
      </aside>
    </div>
  );
}

export default EditorRightBar;
