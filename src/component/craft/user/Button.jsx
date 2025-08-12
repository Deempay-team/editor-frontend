// import React from "react";
// import { useNode } from "@craftjs/core";
// import { Button as ShadButton } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Slider } from "@/components/ui/slider";
// import { HexColorPicker as ColorPicker } from "react-colorful";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"

// export const Button = ({ size, variant, color, children, link, openInNewTab, fontSize, fontWeight, lineHeight, textAlign, textDecoration, fontStyle, backgroundColor, padding, borderRadius, border, alignment }) => {
//   const {
//     connectors: { connect, drag },
//   } = useNode();

//   const buttonElement = (
//     <div ref={(ref) => connect(drag(ref))}>
//       <ShadButton
//         size={size}
//         variant={variant}
//         className={`bg-${color}`}
//         style={{
//           fontSize: `${fontSize}px`,
//           fontWeight,
//           lineHeight: `${lineHeight}px`,
//           textAlign,
//           textDecoration,
//           fontStyle,
//           backgroundColor,
//           padding: `${padding}px`,
//           borderRadius: `${borderRadius}px`,
//           border,
//           //width: alignment === "fill" ? "100%" : `${width}px`,
//           width: alignment === "fill" ? "100%" : `auto`,
//           display: "block",
//           margin: alignment === "center" ? "0 auto" : alignment === "right" ? "0 0 0 auto" : "0",

//         }}
//       >
//         {children}
//       </ShadButton>
//     </div>
//   );

//   return link ? (
//     <a href={link} target={openInNewTab ? "_blank" : "_self"} rel="noopener noreferrer">
//       {buttonElement}
//     </a>
//   ) : (
//     buttonElement
//   );
// };

// export const ButtonSettings = () => {
//   const {
//     actions: { setProp },
//     props,
//   } = useNode((node) => ({
//     props: node.data.props,
//   }));

//   return (
//     <Card className="" >
//       <CardContent className="space-y-4">
//         <Label>Button Text</Label>
//         <Input value={props.children} onChange={(e) => setProp((props) => (props.children = e.target.value))} />

//         <Label>Link</Label>
//         <Input value={props.link} onChange={(e) => setProp((props) => (props.link = e.target.value))} />

//         {/* <Label>Open in New Tab</Label>
//         <input
//           type="checkbox"
//           checked={props.openInNewTab}
//           onChange={(e) => setProp((props) => (props.openInNewTab = e.target.checked))}
//         />  */}

//         <div className="flex items-center gap-2 justify-between my-8">
//           <Label>Open in New Tab</Label>
//           <input
//             type="checkbox"
//             checked={props.openInNewTab}
//             onChange={(e) => setProp((props) => (props.openInNewTab = e.target.checked))}
//           />
//         </div>

//         {/* <Accordion type="single" collapsible>
//           <AccordionItem value="item-1">
//             <AccordionTrigger>Topography</AccordionTrigger>
//             <AccordionContent className="mt-4 space-y-4">

//             </AccordionContent>
//           </AccordionItem>
//           <AccordionItem value="item-2">
//             <AccordionTrigger>Is it accessible?</AccordionTrigger>
//             <AccordionContent>
//               Yes. It adheres to the WAI-ARIA design pattern.
//             </AccordionContent>
//           </AccordionItem>
//         </Accordion> */}

//         <Label>Font Size</Label>
//         <Slider defaultValue={[props.fontSize]} min={10} max={50} step={1} onValueChange={(value) => setProp((props) => (props.fontSize = value[0]))} />

//         <Label>Font Weight</Label>
//         <Select onValueChange={(value) => setProp((props) => (props.fontWeight = value))} defaultValue={props.fontWeight} >
//           <SelectTrigger className="w-full">
//             <SelectValue placeholder="Normal" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="lighter">Lighter</SelectItem>
//             <SelectItem value="normal">Normal</SelectItem>
//             <SelectItem value="bold">Bold</SelectItem>
//           </SelectContent>
//         </Select>

//         <Label>Line Height</Label>
//         <Slider defaultValue={[props.lineHeight]} min={10} max={50} step={1} onValueChange={(value) => setProp((props) => (props.lineHeight = value[0]))} />

//         <Label>Text Align</Label>
//         <Select onValueChange={(value) => setProp((props) => (props.textAlign = value))} defaultValue={props.textAlign} >
//           <SelectTrigger className="w-full">
//             <SelectValue placeholder="Left" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="left">Left</SelectItem>
//             <SelectItem value="center">Center</SelectItem>
//             <SelectItem value="right">Right</SelectItem>
//           </SelectContent>
//         </Select>

//         <Label>Text Decoration</Label>
//         <Select onValueChange={(value) => setProp((props) => (props.textDecoration = value))} defaultValue={props.textDecoration} >
//           <SelectTrigger className="w-full">
//             <SelectValue placeholder="None" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="none">None</SelectItem>
//             <SelectItem value="underline">Underline</SelectItem>
//             <SelectItem value="line-through">Line Through</SelectItem>
//           </SelectContent>
//         </Select>

//         <Label>Font Style</Label>
//         <Select onValueChange={(value) => setProp((props) => (props.fontStyle = value))} defaultValue={props.fontStyle} >
//           <SelectTrigger className="w-full">
//             <SelectValue placeholder="Normal" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="normal">Normal</SelectItem>
//             <SelectItem value="italic">Italic</SelectItem>
//           </SelectContent>
//         </Select>

//         <Label>Alignment</Label>
//         <Select onValueChange={(value) => setProp((props) => (props.alignment = value))} defaultValue={props.alignment} >
//           <SelectTrigger className="w-full">
//             <SelectValue placeholder="Left" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="left">Left</SelectItem>
//             <SelectItem value="center">Center</SelectItem>
//             <SelectItem value="right">Right</SelectItem>
//             <SelectItem value="fill">Fill Width</SelectItem>
//           </SelectContent>
//         </Select>

//         <Label>Background Color</Label>
//         <ColorPicker value={props.backgroundColor} onChange={(value) => setProp((props) => (props.backgroundColor = value))} />

//         <Label>Padding</Label>
//         <Slider defaultValue={[props.padding]} min={0} max={50} step={1} onValueChange={(value) => setProp((props) => (props.padding = value[0]))} />

//         <Label>Border Radius</Label>
//         <Slider defaultValue={[props.borderRadius]} min={0} max={50} step={1} onValueChange={(value) => setProp((props) => (props.borderRadius = value[0]))} />

//         <Label>Border</Label>
//         <Select onValueChange={(value) => setProp((props) => (props.border = value))} defaultValue={props.border} >
//           <SelectTrigger className="w-full">
//             <SelectValue placeholder="none" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="none">None</SelectItem>
//             <SelectItem value="solid">Solid</SelectItem>
//             <SelectItem value="dotted">Dotted</SelectItem>
//             <SelectItem value="dashed">Dashed</SelectItem>
//             {/* <SelectItem value="double">Double</SelectItem>
//             <SelectItem value="groove">Groove</SelectItem>
//             <SelectItem value="ridge">Ridge</SelectItem>
//             <SelectItem value="inset">Inset</SelectItem>
//             <SelectItem value="outset">Outset</SelectItem>
//             <SelectItem value="hidden">Hidden</SelectItem> */}
//           </SelectContent>
//         </Select>
//       </CardContent>
//     </Card>
//   );
// };

// Button.craft = {
//   props: {
//     size: "small",
//     variant: "contained",
//     color: "primary",
//     children: "Click me",
//     link: "",
//     openInNewTab: false,
//     fontSize: 16,
//     fontWeight: "normal",
//     lineHeight: 20,
//     textAlign: "center",
//     textDecoration: "none",
//     fontStyle: "normal",
//     backgroundColor: "#007bff",
//     padding: 10,
//     borderRadius: 5,
//     border: "none",
//     alignment: "left",
//   },
//   related: {
//     settings: ButtonSettings,
//   },
// };

import React from "react";
import { useEditor, useNode } from "@craftjs/core";
import { Button as ShadButton } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { HexColorPicker as ColorPicker } from "react-colorful";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PropTypes from "prop-types";

const BREAKPOINT = 640;

export const Button = ({
  size,
  variant,
  children = "Click me",
  link,
  openInNewTab,
  fontSize,
  fontSizeMobile,
  fontWeight,
  fontWeightMobile,
  lineHeight,
  textAlign,
  textAlignMobile,
  textDecoration,
  fontStyle,
  backgroundColor,
  backgroundColorMobile,
  padding,
  paddingMobile,
  borderRadius,
  borderRadiusMobile,
  border,
  borderMobile,
  alignment,
  alignmentMobile,
}) => {
  const {
    connectors: { connect, drag },
    actions: { setProp },
  } = useNode();
  const isEditor = useEditor((state) => state.options.enabled);

  const buttonElement = (
    <>
      <style>
        {`
          .responsive-button {
            font-size: var(--font-size, 16px);
            font-weight: var(--font-weight, normal);
            text-align: var(--text-align, center);
            background-color: var(--background-color, #007bff);
            padding: var(--padding, 10px);
            border-radius: var(--border-radius, 5px);
            border: var(--border, none);
            display: block;
            margin: var(--margin, 0);
          }

          @media (max-width: ${BREAKPOINT}px) {
            .responsive-button {
              font-size: var(--font-size-mobile, var(--font-size));
              font-weight: var(--font-weight-mobile, var(--font-weight));
              text-align: var(--text-align-mobile, var(--text-align));
              background-color: var(--background-color-mobile, var(--background-color));
              padding: var(--padding-mobile, var(--padding));
              border-radius: var(--border-radius-mobile, var(--border-radius));
              border: var(--border-mobile, var(--border));
              margin: var(--margin-mobile, var(--margin));
            }
          }
        `}
      </style>
      <div ref={(ref) => connect(drag(ref))}>
        <ShadButton
          size={size}
          variant={variant}
          className="responsive-button cursor-pointer"
          style={{
            "--font-size": `${fontSize}px`,
            "--font-size-mobile": fontSizeMobile
              ? `${fontSizeMobile}px`
              : undefined,
            "--font-weight": fontWeight,
            "--font-weight-mobile": fontWeightMobile || undefined,
            "--text-align": textAlign,
            "--text-align-mobile": textAlignMobile || undefined,
            "--background-color": backgroundColor,
            "--background-color-mobile": backgroundColorMobile || undefined,
            "--padding": `${padding}px`,
            "--padding-mobile": paddingMobile
              ? `${paddingMobile}px`
              : undefined,
            "--border-radius": `${borderRadius}px`,
            "--border-radius-mobile": borderRadiusMobile
              ? `${borderRadiusMobile}px`
              : undefined,
            "--border": border,
            "--border-mobile": borderMobile || undefined,
            "--margin":
              alignment === "center"
                ? "0 auto"
                : alignment === "right"
                ? "0 0 0 auto"
                : "0",
            "--margin-mobile":
              alignmentMobile === "center"
                ? "0 auto"
                : alignmentMobile === "right"
                ? "0 0 0 auto"
                : "0",
            lineHeight: `${lineHeight}px`,
            textDecoration,
            fontStyle,
            width: alignment === "fill" ? "100%" : "auto",
          }}
          aria-label={children}
        >
          {children}
        </ShadButton>
      </div>
    </>
  );

  return link && !isEditor ? (
    <a
      ref={(ref) => connect(drag(ref))}
      href={link}
      target={openInNewTab ? "_blank" : "_self"}
    >
      {buttonElement}
    </a>
  ) : (
    <div ref={(ref) => connect(drag(ref))}>{buttonElement}</div>
  );
};

export const ButtonSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="space-y-4">
      <Label>Button Text</Label>
      <Input
        value={props.children}
        onChange={(e) => setProp((props) => (props.children = e.target.value))}
      />

      <Label>Link</Label>
      <Input
        value={props.link}
        onChange={(e) => setProp((props) => (props.link = e.target.value))}
      />

      <div className="flex items-center gap-2 justify-between">
        <Label>Open in New Tab</Label>
        <input
          type="checkbox"
          checked={props.openInNewTab}
          onChange={(e) =>
            setProp((props) => (props.openInNewTab = e.target.checked))
          }
        />
      </div>

      <Accordion type="single" collapsible>
        <AccordionItem value="desktop">
          <AccordionTrigger className="flex items-center justify-between w-full pb-3">
            <span>Desktop Settings</span>
          </AccordionTrigger>
          <AccordionContent className="space-y-4">
            <Label>Font Size</Label>
            <Slider
              defaultValue={[props.fontSize]}
              min={10}
              max={50}
              step={1}
              onValueChange={(value) =>
                setProp((props) => (props.fontSize = value[0]))
              }
            />

            <Label>Font Weight</Label>
            <Select
              onValueChange={(value) =>
                setProp((props) => (props.fontWeight = value))
              }
              defaultValue={props.fontWeight}
            >
              <SelectTrigger>
                <SelectValue placeholder="Normal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lighter">Lighter</SelectItem>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="bold">Bold</SelectItem>
              </SelectContent>
            </Select>

            <Label>Text Align</Label>
            <Select
              onValueChange={(value) =>
                setProp((props) => (props.textAlign = value))
              }
              defaultValue={props.textAlign}
            >
              <SelectTrigger>
                <SelectValue placeholder="Center" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="left">Left</SelectItem>
                <SelectItem value="center">Center</SelectItem>
                <SelectItem value="right">Right</SelectItem>
              </SelectContent>
            </Select>

            <Label>Background Color</Label>
            <ColorPicker
              value={props.backgroundColor}
              onChange={(value) =>
                setProp((props) => (props.backgroundColor = value))
              }
            />

            <Label>Padding</Label>
            <Slider
              defaultValue={[props.padding]}
              min={0}
              max={50}
              step={1}
              onValueChange={(value) =>
                setProp((props) => (props.padding = value[0]))
              }
            />

            <Label>Border Radius</Label>
            <Slider
              defaultValue={[props.borderRadius]}
              min={0}
              max={50}
              step={1}
              onValueChange={(value) =>
                setProp((props) => (props.borderRadius = value[0]))
              }
            />

            <Label>Border</Label>
            <Select
              onValueChange={(value) =>
                setProp((props) => (props.border = value))
              }
              defaultValue={props.border}
            >
              <SelectTrigger>
                <SelectValue placeholder="None" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="1px solid #000">Solid</SelectItem>
                <SelectItem value="1px dotted #000">Dotted</SelectItem>
                <SelectItem value="1px dashed #000">Dashed</SelectItem>
              </SelectContent>
            </Select>

            <Label>Alignment</Label>
            <Select
              onValueChange={(value) =>
                setProp((props) => (props.alignment = value))
              }
              defaultValue={props.alignment}
            >
              <SelectTrigger>
                <SelectValue placeholder="Left" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="left">Left</SelectItem>
                <SelectItem value="center">Center</SelectItem>
                <SelectItem value="right">Right</SelectItem>
                <SelectItem value="fill">Fill Width</SelectItem>
              </SelectContent>
            </Select>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="mobile">
          <AccordionTrigger className="flex items-center justify-between w-full pt-3">
            <span>Mobile Settings</span>
          </AccordionTrigger>
          <AccordionContent className="space-y-4">
            <Label>Font Size</Label>
            <Slider
              defaultValue={[props.fontSizeMobile || props.fontSize]}
              min={10}
              max={50}
              step={1}
              onValueChange={(value) =>
                setProp((props) => (props.fontSizeMobile = value[0]))
              }
            />

            <Label>Font Weight</Label>
            <Select
              onValueChange={(value) =>
                setProp((props) => (props.fontWeightMobile = value))
              }
              defaultValue={props.fontWeightMobile || props.fontWeight}
            >
              <SelectTrigger>
                <SelectValue placeholder="Normal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lighter">Lighter</SelectItem>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="bold">Bold</SelectItem>
              </SelectContent>
            </Select>

            <Label>Text Align</Label>
            <Select
              onValueChange={(value) =>
                setProp((props) => (props.textAlignMobile = value))
              }
              defaultValue={props.textAlignMobile || props.textAlign}
            >
              <SelectTrigger>
                <SelectValue placeholder="Center" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="left">Left</SelectItem>
                <SelectItem value="center">Center</SelectItem>
                <SelectItem value="right">Right</SelectItem>
              </SelectContent>
            </Select>

            <Label>Background Color</Label>
            <ColorPicker
              value={props.backgroundColorMobile || props.backgroundColor}
              onChange={(value) =>
                setProp((props) => (props.backgroundColorMobile = value))
              }
            />

            <Label>Padding</Label>
            <Slider
              defaultValue={[props.paddingMobile || props.padding]}
              min={0}
              max={50}
              step={1}
              onValueChange={(value) =>
                setProp((props) => (props.paddingMobile = value[0]))
              }
            />

            <Label>Border Radius</Label>
            <Slider
              defaultValue={[props.borderRadiusMobile || props.borderRadius]}
              min={0}
              max={50}
              step={1}
              onValueChange={(value) =>
                setProp((props) => (props.borderRadiusMobile = value[0]))
              }
            />

            <Label>Border</Label>
            <Select
              onValueChange={(value) =>
                setProp((props) => (props.borderMobile = value))
              }
              defaultValue={props.borderMobile || props.border}
            >
              <SelectTrigger>
                <SelectValue placeholder="None" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="1px solid #000">Solid</SelectItem>
                <SelectItem value="1px dotted #000">Dotted</SelectItem>
                <SelectItem value="1px dashed #000">Dashed</SelectItem>
              </SelectContent>
            </Select>

            <Label>Alignment</Label>
            <Select
              onValueChange={(value) =>
                setProp((props) => (props.alignmentMobile = value))
              }
              defaultValue={props.alignmentMobile || props.alignment}
            >
              <SelectTrigger>
                <SelectValue placeholder="Left" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="left">Left</SelectItem>
                <SelectItem value="center">Center</SelectItem>
                <SelectItem value="right">Right</SelectItem>
                <SelectItem value="fill">Fill Width</SelectItem>
              </SelectContent>
            </Select>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Label>Line Height</Label>
      <Slider
        defaultValue={[props.lineHeight]}
        min={10}
        max={50}
        step={1}
        onValueChange={(value) =>
          setProp((props) => (props.lineHeight = value[0]))
        }
      />

      <Label>Text Decoration</Label>
      <Select
        onValueChange={(value) =>
          setProp((props) => (props.textDecoration = value))
        }
        defaultValue={props.textDecoration}
      >
        <SelectTrigger>
          <SelectValue placeholder="None" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="none">None</SelectItem>
          <SelectItem value="underline">Underline</SelectItem>
          <SelectItem value="line-through">Line Through</SelectItem>
        </SelectContent>
      </Select>

      <Label>Font Style</Label>
      <Select
        onValueChange={(value) => setProp((props) => (props.fontStyle = value))}
        defaultValue={props.fontStyle}
      >
        <SelectTrigger>
          <SelectValue placeholder="Normal" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="normal">Normal</SelectItem>
          <SelectItem value="italic">Italic</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

Button.craft = {
  displayName: "Button",
  props: {
    size: "small",
    variant: "contained",
    children: "Click me",
    link: "",
    openInNewTab: false,
    fontSize: 16,
    fontSizeMobile: null,
    fontWeight: "normal",
    fontWeightMobile: null,
    lineHeight: 20,
    textAlign: "center",
    textAlignMobile: null,
    textDecoration: "none",
    fontStyle: "normal",
    backgroundColor: "#007bff",
    backgroundColorMobile: null,
    padding: 10,
    paddingMobile: null,
    borderRadius: 5,
    borderRadiusMobile: null,
    border: "none",
    borderMobile: null,
    alignment: "left",
    alignmentMobile: null,
  },
  related: {
    settings: ButtonSettings,
  },
};

Button.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  children: PropTypes.string,
  link: PropTypes.string,
  openInNewTab: PropTypes.bool,
  fontSize: PropTypes.number,
  fontSizeMobile: PropTypes.number,
  fontWeight: PropTypes.oneOf(["lighter", "normal", "bold"]),
  fontWeightMobile: PropTypes.oneOf(["lighter", "normal", "bold"]),
  lineHeight: PropTypes.number,
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
  textAlignMobile: PropTypes.oneOf(["left", "center", "right"]),
  textDecoration: PropTypes.oneOf(["none", "underline", "line-through"]),
  fontStyle: PropTypes.oneOf(["normal", "italic"]),
  backgroundColor: PropTypes.string,
  backgroundColorMobile: PropTypes.string,
  padding: PropTypes.number,
  paddingMobile: PropTypes.number,
  borderRadius: PropTypes.number,
  borderRadiusMobile: PropTypes.number,
  border: PropTypes.string,
  borderMobile: PropTypes.string,
  alignment: PropTypes.oneOf(["left", "center", "right", "fill"]),
  alignmentMobile: PropTypes.oneOf(["left", "center", "right", "fill"]),
};
