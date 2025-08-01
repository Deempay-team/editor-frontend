import React from "react";
import { useNode } from "@craftjs/core";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const ToolbarSection = ({ title, props, summary, children }) => {
  const { nodeProps } = useNode((node) => ({
    nodeProps:
      props &&
      props.reduce((res, key) => {
        res[key] = node.data.props[key] || null;
        return res;
      }, {}),
  }));

  const renderSummary = () => {
    if (!summary || !props) return null;
    const values = props.reduce((acc, key) => {
      acc[key] = nodeProps[key];
      return acc;
    }, {});
    return summary(values);
  };

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border-b border-muted"
    >
      <AccordionItem value={title}>
        <AccordionTrigger className="px-6 py-2 min-h-[36px] hover:no-underline focus:outline-none">
          <div className="w-full flex items-center justify-between">
            <div className="w-1/2">
              <h5 className="text-sm text-muted-foreground font-medium">
                {title}
              </h5>
            </div>
            {summary && props && (
              <div className="w-1/2 text-right">
                <h5 className="text-sm text-primary font-medium">
                  {renderSummary()}
                </h5>
              </div>
            )}
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-5">
          <div className="grid gap-2">{children}</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
