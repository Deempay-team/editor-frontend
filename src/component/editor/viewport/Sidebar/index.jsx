import { useEditor } from "@craftjs/core";
import { Layers } from "@craftjs/layers";
import React, { useState } from "react";
import { styled } from "styled-components";
import { Layers2, Pencil } from "lucide-react";

import { SidebarItem } from "./SidebarItems";
import { Toolbar } from "../../Toolbar";

export const SidebarDiv = styled.div`
  width: 280px;
  opacity: ${(props) => (props.$enabled ? 1 : 0)};
  background: #fff;
  margin-right: ${(props) => (props.$enabled ? 0 : -280)}px;
`;

export const Sidebar = () => {
  // const [layersVisible, setLayerVisible] = useState(true);
  const [toolbarVisible, setToolbarVisible] = useState(true);
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <SidebarDiv $enabled={enabled} className="sidebar transition bg-white w-2">
      <div className="flex flex-col h-full">
        <SidebarItem
          icon={Pencil}
          title="Customize"
          height={"full"}
          visible={toolbarVisible}
          onChange={(val) => setToolbarVisible(val)}
          className="overflow-auto"
        >
          <Toolbar />
        </SidebarItem>
        {/* <SidebarItem
          icon={Layers2}
          title="Layers"
          height={!toolbarVisible ? "full" : "45%"}
          visible={layersVisible}
          onChange={(val) => setLayerVisible(val)}
        >
          <div className="">
            <Layers expandRootOnLoad={true} />
          </div>
        </SidebarItem> */}
      </div>
    </SidebarDiv>
  );
};
