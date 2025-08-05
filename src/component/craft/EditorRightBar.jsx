import React from "react";
import { useEditor } from "@craftjs/core";
import { Label } from "@/components/ui/label";
import { Button as ShadButton } from "@/components/ui/button";
import { copyNodeTree } from "@/utils/craftUtils";

function EditorRightBar({ hidden }) {
  const { actions, selected, query } = useEditor((state, query) => {
    const [currentNodeId] = state.events.selected;
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return { selected };
  });

  const handleExport = (id, query) => {
    const copyTree = copyNodeTree(id, query);
    console.log(copyTree.jsonString);
  };

  return (
    selected && (
      <div className={`flex ${hidden === "true" ? "hidden" : ""}`}>
        <aside className="w-[280px] h-[calc(100vh-4.5em)] border-l border-gray-200 bg-white flex flex-col">
          <div className="flex flex-col h-full overflow-y-auto p-4">
            {selected && (
              <div className="space-y-4">
                <div className="flex justify-between items-center space-y-2">
                  <Label className="text-sm text-muted-foreground">
                    Selected
                  </Label>
                  <div className="bg-blue-500 text-white rounded-lg px-3 py-1 text-sm font-medium inline-block">
                    {selected.name}
                  </div>
                </div>

                {/* Render component-specific settings */}
                {selected.settings && React.createElement(selected.settings)}

                {/* Delete button */}
                {/* {selected.isDeletable && (
                  <ShadButton
                    variant="destructive"
                    className="w-full mt-4"
                    onClick={() => actions.delete(selected.id)}
                  >
                    Delete
                  </ShadButton>
                )} */}

                {/* Copy button */}
                {/* {selected.id && (
                  <ShadButton
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white mt-2"
                    onClick={() => {
                      console.log("Selected ID:", selected.id);
                      handleExport(selected.id, query);
                    }}
                  >
                    Copy Component
                  </ShadButton>
                )} */}
              </div>
            )}
          </div>
        </aside>
      </div>
    )
  );
}

export default EditorRightBar;
