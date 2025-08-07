"use client";

import React from "react";
import * as ReactDOM from "react-dom";
import { ROOT_NODE, useEditor, useNode } from "@craftjs/core";
import { HoverIconBox } from "./HoverIconBox";
import { motion, AnimatePresence } from "framer-motion";

export const RenderNode = ({ render }) => {
  const { id } = useNode();
  const { actions, query, isActive } = useEditor((_, query) => ({
    isActive: query.getEvent("selected").contains(id),
  }));

  const {
    isHover,
    dom,
    name,
    moveable,
    deletable,
    connectors: { drag },
    parent,
  } = useNode((node) => ({
    isHover: node.events.hovered,
    dom: node.dom,
    name: node.data.custom.displayName || node.data.displayName,
    moveable: query.node(node.id).isDraggable(),
    deletable: query.node(node.id).isDeletable(),
    parent: node.data.parent,
    props: node.data.props,
  }));

  const currentRef = React.useRef(null);

  React.useEffect(() => {
    if (dom) {
      if (isHover) dom.classList.add("component-selected");
      else dom.classList.remove("component-selected");
    }

    if (dom) {
      if (isActive) {
        dom.classList.add("component-active");
        dom.classList.remove("component-selected");
      } else dom.classList.remove("component-active");
    }
  }, [dom, isActive, isHover]);

  const getPos = React.useCallback((dom) => {
    const { top, left, bottom } = dom
      ? dom.getBoundingClientRect()
      : { top: 0, left: 0, bottom: 0 };
    return {
      top: `${top > 0 ? top : bottom}px`,
      bottom: `${bottom}px`,
      left: `${left}px`,
    };
  }, []);

  const scroll = React.useCallback(() => {
    const { current: currentDom } = currentRef;

    if (!currentDom) return;

    const { top, left } = getPos(dom);
    currentDom.style.top = top;
    currentDom.style.left = left;
  }, [dom, getPos]);

  React.useEffect(() => {
    const renderer = document.querySelector(".craftjs-renderer");
    if (!renderer) return;

    renderer.addEventListener("scroll", scroll);

    return () => {
      renderer.removeEventListener("scroll", scroll);
    };
  }, [scroll]);

  return (
    <>
      {(isHover || isActive) &&
        ReactDOM.createPortal(
          <>
            {/* AnimatePresence handles the animation of components entering/exiting the DOM */}
            <AnimatePresence>
              {isHover && (
                <motion.div
                  ref={currentRef}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="px-2 h-[20px] -mt-[19px] text-white bg-primary fixed flex items-center rounded-t-[4px] shadow-md"
                  style={{
                    left: getPos(dom).left,
                    top: getPos(dom).top,
                    zIndex: 50,
                  }}
                >
                  <h2 className="text-xs">{name}</h2>
                </motion.div>
              )}
            </AnimatePresence>

            <HoverIconBox
              isActive={isActive}
              isHover={isHover}
              id={id}
              ROOT_NODE={ROOT_NODE}
              dom={dom}
              getPos={getPos}
              moveable={moveable}
              drag={drag}
              parent={parent}
              deletable={deletable}
              actions={actions}
              query={query}
            />
          </>,
          document.querySelector(".page-container")
        )}
      {render}
    </>
  );
};
