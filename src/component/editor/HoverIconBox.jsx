import { useRef, useEffect, useState } from "react";
import { Trash2, ChevronRight, ChevronLeft } from "lucide-react";
import styled from "styled-components";
import { TooltipIcon } from "../Tooltip";
import { cx } from "class-variance-authority";

const Btn = styled.a`
  padding: 0 0px;
  opacity: 0.9;
  display: flex;
  align-items: center;
  > div {
    position: relative;
    top: -50%;
    left: -50%;
  }
`;

const HOVER_HIDE_DELAY = 300;

export const HoverIconBox = ({
  isActive,
  isHover,
  id,
  ROOT_NODE,
  dom,
  getPos,
  moveable,
  drag,
  parent,
  deletable,
  actions,
  query,
}) => {
  const currentRef = useRef(null);
  const isMounted = useRef(false);
  const [show, setShow] = useState(false);
  const [toolbarHover, setToolbarHover] = useState(false);

  // Track mount state
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  // Detect flex direction from parent node
  const parentNode = parent ? query.node(parent).get() : null;
  const layoutDirection =
    parentNode?.data?.props?.flexDirection ||
    parentNode?.data?.custom?.flexDirection ||
    "column";

  const isHorizontal = layoutDirection === "row";

  // Combine visibility logic
  const visible = isActive && (isHover || toolbarHover) && id !== ROOT_NODE;

  // Delayed visibility effect
  useEffect(() => {
    let timeout;

    if (visible) {
      if (isMounted.current) setShow(true);
    } else {
      timeout = setTimeout(() => {
        if (!toolbarHover && !isHover && isMounted.current) {
          setShow(false);
        }
      }, HOVER_HIDE_DELAY);
    }

    return () => clearTimeout(timeout);
  }, [visible, isHover, toolbarHover]);

  // Update position on scroll
  useEffect(() => {
    const scroll = () => {
      const { current: currentDom } = currentRef;
      if (!currentDom || !dom) return;

      const { top, left } = getPos(dom);
      currentDom.style.top = top;
      currentDom.style.left = left;
    };

    const renderer = document.querySelector(".craftjs-renderer");
    if (!renderer) return;
    renderer.addEventListener("scroll", scroll);
    return () => renderer.removeEventListener("scroll", scroll);
  }, [dom, getPos]);

  const siblings = parent ? query.node(parent).childNodes() : null;
  const currentIndex = siblings?.indexOf(id);
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === siblings?.length - 1;

  const moveNode = (direction) => {
    if (!parent) {
      console.warn("No parent available");
      return;
    }

    const siblings = parent ? query.node(parent).childNodes() : null;
    const currentIndex = siblings?.indexOf(id);

    if (currentIndex === -1) {
      console.warn("Node is not a direct child of parent");
      return;
    }

    if ((direction === "left" || direction === "up") && currentIndex > 0) {
      actions.move(id, parent, currentIndex - 1);
    }

    if (
      (direction === "right" || direction === "down") &&
      currentIndex < siblings.length - 1
    ) {
      actions.move(id, parent, currentIndex + 2);
    }
  };

  if (!show) return null;

  return (
    <div
      ref={currentRef}
      className="fixed flex items-center justify-center bg-zinc-900 rounded-[8px] px-4 py-2 shadow-xl"
      onMouseEnter={() => setToolbarHover(true)}
      onMouseLeave={() => setToolbarHover(false)}
      style={{
        left: getPos(dom).left,
        top: `calc(${getPos(dom).bottom} + 8px)`,
        zIndex: 9999,
      }}
    >
      {/* Move Left/Right or Up/Down based on layout */}
      {moveable && isHorizontal && (
        <>
          <TooltipIcon disabled={isFirst} text={"Move to previous position"}>
            <Btn
              className="mr-2 cursor-pointer"
              onClick={() => moveNode("left")}
              disabled={isFirst}
            >
              <ChevronLeft
                className={cx(
                  "w-5 h-5",
                  isFirst ? "text-[#404344]" : "text-gray-300"
                )}
              />
            </Btn>
          </TooltipIcon>

          <TooltipIcon disabled={isLast} text={"Move to next position"}>
            <Btn
              className="mr-2 cursor-pointer"
              onClick={() => moveNode("right")}
              disabled={isLast}
            >
              <ChevronRight
                className={cx(
                  "w-5 h-5",
                  isLast ? "text-[#404344]" : "text-gray-300"
                )}
              />
            </Btn>
          </TooltipIcon>
        </>
      )}

      {moveable && !isHorizontal && (
        <>
          <TooltipIcon disabled={isFirst} text={"Move to previous position"}>
            <Btn
              className="mr-2 cursor-pointer"
              onClick={() => moveNode("up")}
              disabled={isFirst}
            >
              <ChevronLeft
                className={cx(
                  "w-5 h-5",
                  isFirst ? "text-[#404344]" : "text-gray-300"
                )}
              />
            </Btn>
          </TooltipIcon>

          <TooltipIcon disabled={isLast} text={"Move to next position"}>
            <Btn
              className="mr-2 cursor-pointer"
              onClick={() => moveNode("down")}
              disabled={isLast}
            >
              <ChevronRight
                className={cx(
                  "w-5 h-5",
                  isLast ? "text-[#404344]" : "text-gray-300"
                )}
              />
            </Btn>
          </TooltipIcon>
        </>
      )}

      {/* Delete node */}
      {deletable && (
        <TooltipIcon text={"Delete Element"}>
          <Btn
            className="cursor-pointer"
            onMouseDown={(e) => {
              e.stopPropagation();
              actions.delete(id);
            }}
          >
            <Trash2 className="w-4 h-4 text-red-400" />
          </Btn>
        </TooltipIcon>
      )}
    </div>
  );
};
