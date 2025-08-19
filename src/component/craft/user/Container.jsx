// import React from "react";
// import { useNode } from "@craftjs/core";
// import { Card, CardContent } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Slider } from "@/components/ui/slider";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { HexColorPicker } from "react-colorful";
// import { Button as ShadButton } from "@/components/ui/button";

// export const Container = ({ background, paddingX, paddingY , margin = {}, borderRadius, borderWidth, borderColor, boxShadow, children, minHeight = "auto", maxWidth = "none", align }) => {
//   const { id, connectors: { connect, drag } } = useNode();

//   return (
//     <div
//       ref={(ref) => connect(drag(ref))}
//       style={{
//         background,
//         padding: `${paddingY}px ${paddingX}px`, // Fixed paddingX and paddingY
//         //padding: `${padding}px`,
//         //padding: `${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px`,
//         margin: `${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px`,
//         borderRadius: `${borderRadius}px`,
//         borderWidth: `${borderWidth}px`,
//         borderColor,
//         borderStyle: "solid",
//         boxShadow,
//         minHeight,
//         maxWidth,

//         justifyContent: align,
//       }}
//       className=" "
//     >
//       {children}
//     </div>
//   );
// };

// export const ContainerSettings = () => {
//   const { id, background, padding, margin, borderRadius, borderWidth, borderColor, boxShadow, minHeight, maxWidth, align,props, paddingX = 20, paddingY = 20, actions: { setProp } } = useNode(node => ({
//     background: node.data.props.background,
//     padding: node.data.props.padding,
//     margin: node.data.props.margin,
//     borderRadius: node.data.props.borderRadius,
//     borderWidth: node.data.props.borderWidth,
//     borderColor: node.data.props.borderColor,
//     boxShadow: node.data.props.boxShadow,
//     minHeight: node.data.props.minHeight,
//     maxWidth: node.data.props.maxWidth,
//     align: node.data.props.align,
//     props: node.data.props,
//     pad: node.data.props.padding,
//     paddingX: node.data.props.paddingX ,
//     paddingY: node.data.props.paddingY ,
//   }));

//   return (
//     <Card>
//       <CardContent className="space-y-4">
//         <Label>Background</Label>
//         <HexColorPicker color={background} onChange={(color) => setProp((props) => (props.background = color))} />

//         {/* <Label>Padding</Label>
//         <Slider defaultValue={[padding]} min={0} max={50} step={1} onValueChange={(value) => setProp((props) => (props.padding = value[0]))} /> */}

//         {/* <Label>Margin</Label>
//         <Slider defaultValue={[margin]} min={0} max={50} step={1} onValueChange={(value) => setProp((props) => (props.margin = value[0]))} /> */}

//         <Label>Padding X (Left & Right)</Label>
//         <Input
//           type="number"
//           value={paddingX}
//           onChange={(e) => setProp((props) => (props.paddingX = Number(e.target.value)))}
//           placeholder="Padding X"
//         />

//         <Label>Padding Y (Top & Bottom)</Label>
//         <Input
//           type="number"
//           value={paddingY}
//           onChange={(e) => setProp((props) => (props.paddingY = Number(e.target.value)))}
//           placeholder="Padding Y"
//         />

//         <Label>Margin</Label>
//         {["top", "right", "bottom", "left"].map((side) => (
//           <Input
//             key={side}
//             type="number"
//             value={props.margin[side]}
//             onChange={(e) => setProp((props) => (props.margin[side] = Number(e.target.value)))}
//             placeholder={`${side} margin`}
//           />
//         ))}

// {/* <Label>Padding</Label>
// {["top", "right", "bottom", "left"].map((side) => (
//   <Input
//     key={side}
//     type="number"
//     value={padding[side]} // Ensure props.padding is an object
//     onChange={(e) => setProp((props) => (props.padding[side] = Number(e.target.value)))}
//     placeholder={`${side} padding`}
//   />
// ))} */}

//         <Label>Min Height</Label>
//         <Input
//           value={minHeight}
//           onChange={(e) => setProp((props) => (props.minHeight = e.target.value))}
//         />

//         <Label>Max Width</Label>
//         <Select
//           onValueChange={(value) => setProp((props) => (props.maxWidth = value))}
//           defaultValue={maxWidth}
//         >
//           <SelectTrigger className="w-full">
//             <SelectValue placeholder="none" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="none">None</SelectItem>
//             <SelectItem value="auto">Auto</SelectItem>
//             <SelectItem value="100%">100%</SelectItem>
//             <SelectItem value="1200px">1200px</SelectItem>
//           </SelectContent>
//         </Select>

//         <Label>Alignment</Label>
//         <Select onValueChange={(value) => setProp((props) => (props.align = value))} defaultValue={align}>
//           <SelectTrigger className="w-full">
//             <SelectValue placeholder="Left" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="flex-start">Left</SelectItem>
//             <SelectItem value="center">Center</SelectItem>
//             <SelectItem value="flex-end">Right</SelectItem>
//           </SelectContent>
//         </Select>

//         <Label>Border Radius</Label>
//         <Slider defaultValue={[borderRadius]} min={0} max={50} step={1} onValueChange={(value) => setProp((props) => (props.borderRadius = value[0]))} />

//         <Label>Border Width</Label>
//         <Slider defaultValue={[borderWidth]} min={0} max={10} step={1} onValueChange={(value) => setProp((props) => (props.borderWidth = value[0]))} />

//         <Label>Border Color</Label>
//         <HexColorPicker color={borderColor} onChange={(color) => setProp((props) => (props.borderColor = color))} />

//         <Label>Box Shadow</Label>
//         <Input value={boxShadow} onChange={(e) => setProp((props) => (props.boxShadow = e.target.value))} placeholder="e.g., 0px 4px 6px rgba(0,0,0,0.1)" />

//         <ShadButton
//                               variant="contained"
//                               color="default"
//                               className="bg-red-500 text-white hover:bg-red-600 mt-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//                               onClick={() => {
//                                 //actions.delete(selected.id);
//                                 //console.log("selected id", selected.id)
//                                 console.log("id", id)
//                               }}
//                             >
//                               node-id
//                             </ShadButton>
//       </CardContent>
//     </Card>
//   );
// };

// Container.craft = {
//   props: {
//     background: "#ffffff",
//     padding: 0,
//     paddingX: 10,
//     paddingY: 10,
//     // margin: 0,
//     margin: { top: 0, right: 0, bottom: 0, left: 0 }, // Fixed defaults
//     //padding: { top: 20, right: 20, bottom: 20, left: 20 }, // Fixed defaults
//     borderRadius: 0,
//     borderWidth: 0,
//     borderColor: "#000000",
//     boxShadow: "none",
//     minHeight: "100px",
//     maxWidth: "none",
//   },
//   related: {
//     settings: ContainerSettings,
//   },
// };

// export const ContainerDefaultProps = {
//   background: "#ffffff",
//   padding: 5,
//   margin: 0,
//   borderRadius: 0,
//   borderWidth: 0,
//   borderColor: "#000000",
//   boxShadow: "none"
// };

// import React from "react";
// import { useNode } from "@craftjs/core";
// import { Card, CardContent } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Slider } from "@/components/ui/slider";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { HexColorPicker } from "react-colorful";
// import { Button as ShadButton } from "@/components/ui/button";
// import PropTypes from "prop-types";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// const BREAKPOINT = 640;

// export const Container = ({
//   background,
//   backgroundMobile,
//   paddingX,
//   paddingXMobile,
//   paddingY,
//   paddingYMobile,
//   margin,
//   marginMobile,
//   borderRadius,
//   borderRadiusMobile,
//   borderWidth,
//   borderWidthMobile,
//   borderColor,
//   borderColorMobile,
//   boxShadow,
//   boxShadowMobile,
//   minHeight,
//   minHeightMobile,
//   maxWidth,
//   maxWidthMobile,
//   align,
//   alignMobile,
//   children,
// }) => {
//   const { id, connectors: { connect, drag } } = useNode();

//   return (
//     <>
//       <style>
//         {`
//           .responsive-container {
//             background: var(--background, #ffffff);
//             padding: var(--padding-y, 10px) var(--padding-x, 10px);
//             margin: var(--margin-top, 0px) var(--margin-right, 0px) var(--margin-bottom, 0px) var(--margin-left, 0px);
//             border-radius: var(--border-radius, 0px);
//             border-width: var(--border-width, 0px);
//             border-color: var(--border-color, #000000);
//             border-style: solid;
//             box-shadow: var(--box-shadow, none);
//             min-height: var(--min-height, 100px);
//             max-width: var(--max-width, none);
//             display: block;
//             justify-content: var(--align, flex-start);
//           }

//           @media (max-width: ${BREAKPOINT}px) {
//             .responsive-container {
//               background: var(--background-mobile, var(--background));
//               padding: var(--padding-y-mobile, var(--padding-y)) var(--padding-x-mobile, var(--padding-x));
//               margin: var(--margin-top-mobile, var(--margin-top)) var(--margin-right-mobile, var(--margin-right)) var(--margin-bottom-mobile, var(--margin-bottom)) var(--margin-left-mobile, var(--margin-left));
//               border-radius: var(--border-radius-mobile, var(--border-radius));
//               border-width: var(--border-width-mobile, var(--border-width));
//               border-color: var(--border-color-mobile, var(--border-color));
//               box-shadow: var(--box-shadow-mobile, var(--box-shadow));
//               min-height: var(--min-height-mobile, var(--min-height));
//               max-width: var(--max-width-mobile, var(--max-width));
//               justify-content: var(--align-mobile, var(--align));
//             }
//           }
//         `}
//       </style>
//       <div
//         ref={(ref) => connect(drag(ref))}
//         className="responsive-container"
//         role="region"
//         aria-label="Container"
//         style={{
//           "--background": background,
//           "--background-mobile": backgroundMobile || undefined,
//           "--padding-x": `${paddingX}px`,
//           "--padding-x-mobile": paddingXMobile ? `${paddingXMobile}px` : undefined,
//           "--padding-y": `${paddingY}px`,
//           "--padding-y-mobile": paddingYMobile ? `${paddingYMobile}px` : undefined,
//           "--margin-top": `${margin.top}px`,
//           "--margin-right": `${margin.right}px`,
//           "--margin-bottom": `${margin.bottom}px`,
//           "--margin-left": `${margin.left}px`,
//           "--margin-top-mobile": marginMobile ? `${marginMobile.top}px` : undefined,
//           "--margin-right-mobile": marginMobile ? `${marginMobile.right}px` : undefined,
//           "--margin-bottom-mobile": marginMobile ? `${marginMobile.bottom}px` : undefined,
//           "--margin-left-mobile": marginMobile ? `${marginMobile.left}px` : undefined,
//           "--border-radius": `${borderRadius}px`,
//           "--border-radius-mobile": borderRadiusMobile ? `${borderRadiusMobile}px` : undefined,
//           "--border-width": `${borderWidth}px`,
//           "--border-width-mobile": borderWidthMobile ? `${borderWidthMobile}px` : undefined,
//           "--border-color": borderColor,
//           "--border-color-mobile": borderColorMobile || undefined,
//           "--box-shadow": boxShadow,
//           "--box-shadow-mobile": boxShadowMobile || undefined,
//           "--min-height": minHeight,
//           "--min-height-mobile": minHeightMobile || undefined,
//           "--max-width": maxWidth,
//           "--max-width-mobile": maxWidthMobile || undefined,
//           "--align": align,
//           "--align-mobile": alignMobile || undefined,
//         }}
//       >
//         {children}
//       </div>
//     </>
//   );
// };

// export const ContainerSettings = () => {
//   const {
//     id,
//     props,
//     actions: { setProp },
//   } = useNode((node) => ({
//     id: node.id,
//     props: node.data.props,
//   }));

//   return (
//     <Card>
//       <CardContent className="space-y-4">
//         <Accordion type="single" collapsible>
//           <AccordionItem value="desktop">
//             <AccordionTrigger>Desktop Settings</AccordionTrigger>
//             <AccordionContent className="space-y-4">
//               <Label>Background</Label>
//               <HexColorPicker
//                 color={props.background}
//                 onChange={(color) => setProp((props) => (props.background = color))}
//               />

//               <Label>Padding X (Left & Right)</Label>
//               <Input
//                 type="number"
//                 value={props.paddingX}
//                 onChange={(e) =>
//                   setProp((props) => (props.paddingX = Number(e.target.value)))
//                 }
//                 placeholder="Padding X"
//               />

//               <Label>Padding Y (Top & Bottom)</Label>
//               <Input
//                 type="number"
//                 value={props.paddingY}
//                 onChange={(e) =>
//                   setProp((props) => (props.paddingY = Number(e.target.value)))
//                 }
//                 placeholder="Padding Y"
//               />

//               <Label>Margin</Label>
//               {["top", "right", "bottom", "left"].map((side) => (
//                 <Input
//                   key={side}
//                   type="number"
//                   value={props.margin[side]}
//                   onChange={(e) =>
//                     setProp((props) => (props.margin[side] = Number(e.target.value)))
//                   }
//                   placeholder={`${side} margin`}
//                 />
//               ))}

//               <Label>Border Radius</Label>
//               <Slider
//                 defaultValue={[props.borderRadius]}
//                 min={0}
//                 max={50}
//                 step={1}
//                 onValueChange={(value) =>
//                   setProp((props) => (props.borderRadius = value[0]))
//                 }
//               />

//               <Label>Border Width</Label>
//               <Slider
//                 defaultValue={[props.borderWidth]}
//                 min={0}
//                 max={10}
//                 step={1}
//                 onValueChange={(value) =>
//                   setProp((props) => (props.borderWidth = value[0]))
//                 }
//               />

//               <Label>Border Color</Label>
//               <HexColorPicker
//                 color={props.borderColor}
//                 onChange={(color) => setProp((props) => (props.borderColor = color))}
//               />

//               <Label>Box Shadow</Label>
//               <Input
//                 value={props.boxShadow}
//                 onChange={(e) =>
//                   setProp((props) => (props.boxShadow = e.target.value))
//                 }
//                 placeholder="e.g., 0px 4px 6px rgba(0,0,0,0.1)"
//               />

//               <Label>Min Height</Label>
//               <Input
//                 value={props.minHeight}
//                 onChange={(e) =>
//                   setProp((props) => (props.minHeight = e.target.value))
//                 }
//                 placeholder="e.g., 100px"
//               />

//               <Label>Max Width</Label>
//               <Select
//                 onValueChange={(value) => setProp((props) => (props.maxWidth = value))}
//                 defaultValue={props.maxWidth}
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder="None" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="none">None</SelectItem>
//                   <SelectItem value="auto">Auto</SelectItem>
//                   <SelectItem value="100%">100%</SelectItem>
//                   <SelectItem value="1200px">1200px</SelectItem>
//                 </SelectContent>
//               </Select>

//               <Label>Alignment</Label>
//               <Select
//                 onValueChange={(value) => setProp((props) => (props.align = value))}
//                 defaultValue={props.align}
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder="Left" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="flex-start">Left</SelectItem>
//                   <SelectItem value="center">Center</SelectItem>
//                   <SelectItem value="flex-end">Right</SelectItem>
//                 </SelectContent>
//               </Select>
//             </AccordionContent>
//           </AccordionItem>

//           <AccordionItem value="mobile">
//             <AccordionTrigger>Mobile Settings</AccordionTrigger>
//             <AccordionContent className="space-y-4">
//               <Label>Background</Label>
//               <HexColorPicker
//                 color={props.backgroundMobile || props.background}
//                 onChange={(color) =>
//                   setProp((props) => (props.backgroundMobile = color))
//                 }
//               />

//               <Label>Padding X (Left & Right)</Label>
//               <Input
//                 type="number"
//                 value={props.paddingXMobile || props.paddingX}
//                 onChange={(e) =>
//                   setProp((props) => (props.paddingXMobile = Number(e.target.value)))
//                 }
//                 placeholder="Padding X"
//               />

//               <Label>Padding Y (Top & Bottom)</Label>
//               <Input
//                 type="number"
//                 value={props.paddingYMobile || props.paddingY}
//                 onChange={(e) =>
//                   setProp((props) => (props.paddingYMobile = Number(e.target.value)))
//                 }
//                 placeholder="Padding Y"
//               />

//               <Label>Margin</Label>
//               {["top", "right", "bottom", "left"].map((side) => (
//                 <Input
//                   key={side}
//                   type="number"
//                   value={props.marginMobile ? props.marginMobile[side] : props.margin[side]}
//                   onChange={(e) =>
//                     setProp((props) => {
//                       props.marginMobile = {
//                         ...props.marginMobile,
//                         [side]: Number(e.target.value),
//                       };
//                     })
//                   }
//                   placeholder={`${side} margin`}
//                 />
//               ))}

//               <Label>Border Radius</Label>
//               <Slider
//                 defaultValue={[props.borderRadiusMobile || props.borderRadius]}
//                 min={0}
//                 max={50}
//                 step={1}
//                 onValueChange={(value) =>
//                   setProp((props) => (props.borderRadiusMobile = value[0]))
//                 }
//               />

//               <Label>Border Width</Label>
//               <Slider
//                 defaultValue={[props.borderWidthMobile || props.borderWidth]}
//                 min={0}
//                 max={10}
//                 step={1}
//                 onValueChange={(value) =>
//                   setProp((props) => (props.borderWidthMobile = value[0]))
//                 }
//               />

//               <Label>Border Color</Label>
//               <HexColorPicker
//                 color={props.borderColorMobile || props.borderColor}
//                 onChange={(color) =>
//                   setProp((props) => (props.borderColorMobile = color))
//                 }
//               />

//               <Label>Box Shadow</Label>
//               <Input
//                 value={props.boxShadowMobile || props.boxShadow}
//                 onChange={(e) =>
//                   setProp((props) => (props.boxShadowMobile = e.target.value))
//                 }
//                 placeholder="e.g., 0px 4px 6px rgba(0,0,0,0.1)"
//               />

//               <Label>Min Height</Label>
//               <Input
//                 value={props.minHeightMobile || props.minHeight}
//                 onChange={(e) =>
//                   setProp((props) => (props.minHeightMobile = e.target.value))
//                 }
//                 placeholder="e.g., 100px"
//               />

//               <Label>Max Width</Label>
//               <Select
//                 onValueChange={(value) =>
//                   setProp((props) => (props.maxWidthMobile = value))
//                 }
//                 defaultValue={props.maxWidthMobile || props.maxWidth}
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder="None" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="none">None</SelectItem>
//                   <SelectItem value="auto">Auto</SelectItem>
//                   <SelectItem value="100%">100%</SelectItem>
//                   <SelectItem value="1200px">1200px</SelectItem>
//                 </SelectContent>
//               </Select>

//               <Label>Alignment</Label>
//               <Select
//                 onValueChange={(value) =>
//                   setProp((props) => (props.alignMobile = value))
//                 }
//                 defaultValue={props.alignMobile || props.align}
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder="Left" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="flex-start">Left</SelectItem>
//                   <SelectItem value="center">Center</SelectItem>
//                   <SelectItem value="flex-end">Right</SelectItem>
//                 </SelectContent>
//               </Select>
//             </AccordionContent>
//           </AccordionItem>
//         </Accordion>

//         <ShadButton
//           variant="contained"
//           className="bg-red-500 text-white hover:bg-red-600 mt-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//           onClick={() => console.log("Container ID:", id)}
//         >
//           Log Node ID
//         </ShadButton>
//       </CardContent>
//     </Card>
//   );
// };

// Container.craft = {
//   props: {
//     background: "#ffffff",
//     backgroundMobile: null,
//     paddingX: 10,
//     paddingXMobile: null,
//     paddingY: 10,
//     paddingYMobile: null,
//     margin: { top: 0, right: 0, bottom: 0, left: 0 },
//     marginMobile: null,
//     borderRadius: 0,
//     borderRadiusMobile: null,
//     borderWidth: 0,
//     borderWidthMobile: null,
//     borderColor: "#000000",
//     borderColorMobile: null,
//     boxShadow: "none",
//     boxShadowMobile: null,
//     minHeight: "100px",
//     minHeightMobile: null,
//     maxWidth: "none",
//     maxWidthMobile: null,
//     align: "flex-start",
//     alignMobile: null,
//   },
//   related: {
//     settings: ContainerSettings,
//   },
// };

// Container.propTypes = {
//   background: PropTypes.string,
//   backgroundMobile: PropTypes.string,
//   paddingX: PropTypes.number,
//   paddingXMobile: PropTypes.number,
//   paddingY: PropTypes.number,
//   paddingYMobile: PropTypes.number,
//   margin: PropTypes.shape({
//     top: PropTypes.number,
//     right: PropTypes.number,
//     bottom: PropTypes.number,
//     left: PropTypes.number,
//   }),
//   marginMobile: PropTypes.shape({
//     top: PropTypes.number,
//     right: PropTypes.number,
//     bottom: PropTypes.number,
//     left: PropTypes.number,
//   }),
//   borderRadius: PropTypes.number,
//   borderRadiusMobile: PropTypes.number,
//   borderWidth: PropTypes.number,
//   borderWidthMobile: PropTypes.number,
//   borderColor: PropTypes.string,
//   borderColorMobile: PropTypes.string,
//   boxShadow: PropTypes.string,
//   boxShadowMobile: PropTypes.string,
//   minHeight: PropTypes.string,
//   minHeightMobile: PropTypes.string,
//   maxWidth: PropTypes.string,
//   maxWidthMobile: PropTypes.string,
//   align: PropTypes.oneOf(["flex-start", "center", "flex-end"]),
//   alignMobile: PropTypes.oneOf(["flex-start", "center", "flex-end"]),
//   children: PropTypes.node,
// };

// export const ContainerDefaultProps = {
//   background: "#ffffff",
//   padding: 5,
//   margin: 0,
//   borderRadius: 0,
//   borderWidth: 0,
//   borderColor: "#000000",
//   boxShadow: "none"
// };

export const ContainerDefaultProps = {
  background: "#ffffff",
  padding: 5,
  margin: 0,
  borderRadius: 0,
  borderWidth: 0,
  borderColor: "#000000",
  boxShadow: "none",
};

// import React from "react";
// import { useNode } from "@craftjs/core";
// import { Card, CardContent } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Slider } from "@/components/ui/slider";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { HexColorPicker } from "react-colorful";
// import { Button as ShadButton } from "@/components/ui/button";
// import PropTypes from "prop-types";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// const BREAKPOINT = 640;

// export const Container = ({
//   background,
//   backgroundMobile,
//   paddingX,
//   paddingXMobile,
//   paddingY,
//   paddingYMobile,
//   margin,
//   marginMobile,
//   borderRadius,
//   borderRadiusMobile,
//   borderWidth,
//   borderWidthMobile,
//   borderColor,
//   borderColorMobile,
//   boxShadow,
//   boxShadowMobile,
//   width,
//   widthMobile,
//   height,
//   heightMobile,
//   flexDirection,
//   flexDirectionMobile,
//   fillSpace,
//   fillSpaceMobile,
//   alignItems,
//   alignItemsMobile,
//   justifyContent,
//   justifyContentMobile,
//   children,
// }) => {
//   const { id, connectors: { connect, drag } } = useNode();

//   return (
//     <>
//       <style>
//         {`
//           .responsive-container {
//             background: var(--background, #ffffff);
//             padding: var(--padding-y, 10px) var(--padding-x, 10px);
//             margin: var(--margin-top, 0px) var(--margin-right, 0px) var(--margin-bottom, 0px) var(--margin-left, 0px);
//             border-radius: var(--border-radius, 0px);
//             border-width: var(--border-width, 0px);
//             border-color: var(--border-color, #000000);
//             border-style: solid;
//             box-shadow: var(--box-shadow, none);
//             width: var(--width, 100%);
//             height: var(--height, auto);
//             display: flex;
//             flex-direction: var(--flex-direction, row);
//             flex: var(--fill-space, auto);
//             align-items: var(--align-items, flex-start);
//             justify-content: var(--justify-content, flex-start);
//           }

//           @media (max-width: ${BREAKPOINT}px) {
//             .responsive-container {
//               background: var(--background-mobile, var(--background));
//               padding: var(--padding-y-mobile, var(--padding-y)) var(--padding-x-mobile, var(--padding-x));
//               margin: var(--margin-top-mobile, var(--margin-top)) var(--margin-right-mobile, var(--margin-right)) var(--margin-bottom-mobile, var(--margin-bottom)) var(--margin-left-mobile, var(--margin-left));
//               border-radius: var(--border-radius-mobile, var(--border-radius));
//               border-width: var(--border-width-mobile, var(--border-width));
//               border-color: var(--border-color-mobile, var(--border-color));
//               box-shadow: var(--box-shadow-mobile, var(--box-shadow));
//               width: var(--width-mobile, var(--width));
//               height: var(--height-mobile, var(--height));
//               flex-direction: var(--flex-direction-mobile, var(--flex-direction));
//               flex: var(--fill-space-mobile, var(--fill-space));
//               align-items: var(--align-items-mobile, var(--align-items));
//               justify-content: var(--justify-content-mobile, var(--justify-content));
//             }
//           }
//         `}
//       </style>
//       <div
//         ref={(ref) => connect(drag(ref))}
//         className="responsive-container"
//         role="region"
//         aria-label="Container"
//         style={{
//           "--background": background,
//           "--background-mobile": backgroundMobile || undefined,
//           "--padding-x": `${paddingX}px`,
//           "--padding-x-mobile": paddingXMobile ? `${paddingXMobile}px` : undefined,
//           "--padding-y": `${paddingY}px`,
//           "--padding-y-mobile": paddingYMobile ? `${paddingYMobile}px` : undefined,
//           "--margin-top": `${margin.top}px`,
//           "--margin-right": `${margin.right}px`,
//           "--margin-bottom": `${margin.bottom}px`,
//           "--margin-left": `${margin.left}px`,
//           "--margin-top-mobile": marginMobile ? `${marginMobile.top}px` : undefined,
//           "--margin-right-mobile": marginMobile ? `${marginMobile.right}px` : undefined,
//           "--margin-bottom-mobile": marginMobile ? `${marginMobile.bottom}px` : undefined,
//           "--margin-left-mobile": marginMobile ? `${marginMobile.left}px` : undefined,
//           "--border-radius": `${borderRadius}px`,
//           "--border-radius-mobile": borderRadiusMobile ? `${borderRadiusMobile}px` : undefined,
//           "--border-width": `${borderWidth}px`,
//           "--border-width-mobile": borderWidthMobile ? `${borderWidthMobile}px` : undefined,
//           "--border-color": borderColor,
//           "--border-color-mobile": borderColorMobile || undefined,
//           "--box-shadow": boxShadow,
//           "--box-shadow-mobile": boxShadowMobile || undefined,
//           "--width": width,
//           "--width-mobile": widthMobile || undefined,
//           "--height": height,
//           "--height-mobile": heightMobile || undefined,
//           "--flex-direction": flexDirection,
//           "--flex-direction-mobile": flexDirectionMobile || undefined,
//           "--fill-space": fillSpace ? 1 : 'auto',
//           "--fill-space-mobile": fillSpaceMobile !== null ? (fillSpaceMobile ? 1 : 'auto') : undefined,
//           "--align-items": alignItems,
//           "--align-items-mobile": alignItemsMobile || undefined,
//           "--justify-content": justifyContent,
//           "--justify-content-mobile": justifyContentMobile || undefined,
//         }}
//       >
//         {children}
//       </div>
//     </>
//   );
// };

// export const ContainerSettings = () => {
//   const {
//     id,
//     props,
//     actions: { setProp },
//   } = useNode((node) => ({
//     id: node.id,
//     props: node.data.props,
//   }));

//   return (
//     <Card>
//       <CardContent className="space-y-4">
//         <Accordion type="single" collapsible>
//           <AccordionItem value="desktop">
//             <AccordionTrigger>Desktop Settings</AccordionTrigger>
//             <AccordionContent className="space-y-4">
//               <Label>Background</Label>
//               <HexColorPicker
//                 color={props.background}
//                 onChange={(color) => setProp((props) => (props.background = color))}
//               />

//               <Label>Padding X (Left & Right)</Label>
//               <Input
//                 type="number"
//                 value={props.paddingX}
//                 onChange={(e) =>
//                   setProp((props) => (props.paddingX = Number(e.target.value)))
//                 }
//                 placeholder="Padding X"
//               />

//               <Label>Padding Y (Top & Bottom)</Label>
//               <Input
//                 type="number"
//                 value={props.paddingY}
//                 onChange={(e) =>
//                   setProp((props) => (props.paddingY = Number(e.target.value)))
//                 }
//                 placeholder="Padding Y"
//               />

//               <Label>Margin</Label>
//               {["top", "right", "bottom", "left"].map((side) => (
//                 <Input
//                   key={side}
//                   type="number"
//                   value={props.margin[side]}
//                   onChange={(e) =>
//                     setProp((props) => (props.margin[side] = Number(e.target.value)))
//                   }
//                   placeholder={`${side} margin`}
//                 />
//               ))}

//               <Label>Border Radius</Label>
//               <Slider
//                 defaultValue={[props.borderRadius]}
//                 min={0}
//                 max={50}
//                 step={1}
//                 onValueChange={(value) =>
//                   setProp((props) => (props.borderRadius = value[0]))
//                 }
//               />

//               <Label>Border Width</Label>
//               <Slider
//                 defaultValue={[props.borderWidth]}
//                 min={0}
//                 max={10}
//                 step={1}
//                 onValueChange={(value) =>
//                   setProp((props) => (props.borderWidth = value[0]))
//                 }
//               />

//               <Label>Border Color</Label>
//               <HexColorPicker
//                 color={props.borderColor}
//                 onChange={(color) => setProp((props) => (props.borderColor = color))}
//               />

//               <Label>Box Shadow</Label>
//               <Input
//                 value={props.boxShadow}
//                 onChange={(e) =>
//                   setProp((props) => (props.boxShadow = e.target.value))
//                 }
//                 placeholder="e.g., 0px 4px 6px rgba(0,0,0,0.1)"
//               />

//               <Label>Width</Label>
//               <Input
//                 value={props.width}
//                 onChange={(e) =>
//                   setProp((props) => (props.width = e.target.value))
//                 }
//                 placeholder="e.g., 100% or 500px"
//               />

//               <Label>Height</Label>
//               <Input
//                 value={props.height}
//                 onChange={(e) =>
//                   setProp((props) => (props.height = e.target.value))
//                 }
//                 placeholder="e.g., auto or 300px"
//               />

//               <Label>Flex Direction</Label>
//               <Select
//                 onValueChange={(value) => setProp((props) => (props.flexDirection = value))}
//                 defaultValue={props.flexDirection}
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder="Row" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="row">Row</SelectItem>
//                   <SelectItem value="column">Column</SelectItem>
//                 </SelectContent>
//               </Select>

//               <Label>Fill Space</Label>
//               <Select
//                 onValueChange={(value) => setProp((props) => (props.fillSpace = value === 'true'))}
//                 defaultValue={props.fillSpace.toString()}
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder="No" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="true">Yes</SelectItem>
//                   <SelectItem value="false">No</SelectItem>
//                 </SelectContent>
//               </Select>

//               <Label>Align Items</Label>
//               <Select
//                 onValueChange={(value) => setProp((props) => (props.alignItems = value))}
//                 defaultValue={props.alignItems}
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder="Flex Start" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="flex-start">Flex Start</SelectItem>
//                   <SelectItem value="center">Center</SelectItem>
//                   <SelectItem value="flex-end">Flex End</SelectItem>
//                 </SelectContent>
//               </Select>

//               <Label>Justify Content</Label>
//               <Select
//                 onValueChange={(value) => setProp((props) => (props.justifyContent = value))}
//                 defaultValue={props.justifyContent}
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder="Flex Start" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="flex-start">Flex Start</SelectItem>
//                   <SelectItem value="center">Center</SelectItem>
//                   <SelectItem value="flex-end">Flex End</SelectItem>
//                 </SelectContent>
//               </Select>
//             </AccordionContent>
//           </AccordionItem>

//           <AccordionItem value="mobile">
//             <AccordionTrigger>Mobile Settings</AccordionTrigger>
//             <AccordionContent className="space-y-4">
//               <Label>Background</Label>
//               <HexColorPicker
//                 color={props.backgroundMobile || props.background}
//                 onChange={(color) =>
//                   setProp((props) => (props.backgroundMobile = color))
//                 }
//               />

//               <Label>Padding X (Left & Right)</Label>
//               <Input
//                 type="number"
//                 value={props.paddingXMobile || props.paddingX}
//                 onChange={(e) =>
//                   setProp((props) => (props.paddingXMobile = Number(e.target.value)))
//                 }
//                 placeholder="Padding X"
//               />

//               <Label>Padding Y (Top & Bottom)</Label>
//               <Input
//                 type="number"
//                 value={props.paddingYMobile || props.paddingY}
//                 onChange={(e) =>
//                   setProp((props) => (props.paddingYMobile = Number(e.target.value)))
//                 }
//                 placeholder="Padding Y"
//               />

//               <Label>Margin</Label>
//               {["top", "right", "bottom", "left"].map((side) => (
//                 <Input
//                   key={side}
//                   type="number"
//                   value={props.marginMobile ? props.marginMobile[side] : props.margin[side]}
//                   onChange={(e) =>
//                     setProp((props) => {
//                       props.marginMobile = {
//                         ...props.marginMobile,
//                         [side]: Number(e.target.value),
//                       };
//                     })
//                   }
//                   placeholder={`${side} margin`}
//                 />
//               ))}

//               <Label>Border Radius</Label>
//               <Slider
//                 defaultValue={[props.borderRadiusMobile || props.borderRadius]}
//                 min={0}
//                 max={50}
//                 step={1}
//                 onValueChange={(value) =>
//                   setProp((props) => (props.borderRadiusMobile = value[0]))
//                 }
//               />

//               <Label>Border Width</Label>
//               <Slider
//                 defaultValue={[props.borderWidthMobile || props.borderWidth]}
//                 min={0}
//                 max={10}
//                 step={1}
//                 onValueChange={(value) =>
//                   setProp((props) => (props.borderWidthMobile = value[0]))
//                 }
//               />

//               <Label>Border Color</Label>
//               <HexColorPicker
//                 color={props.borderColorMobile || props.borderColor}
//                 onChange={(color) =>
//                   setProp((props) => (props.borderColorMobile = color))
//                 }
//               />

//               <Label>Box Shadow</Label>
//               <Input
//                 value={props.boxShadowMobile || props.boxShadow}
//                 onChange={(e) =>
//                   setProp((props) => (props.boxShadowMobile = e.target.value))
//                 }
//                 placeholder="e.g., 0px 4px 6px rgba(0,0,0,0.1)"
//               />

//               <Label>Width</Label>
//               <Input
//                 value={props.widthMobile || props.width}
//                 onChange={(e) =>
//                   setProp((props) => (props.widthMobile = e.target.value))
//                 }
//                 placeholder="e.g., 100% or 500px"
//               />

//               <Label>Height</Label>
//               <Input
//                 value={props.heightMobile || props.height}
//                 onChange={(e) =>
//                   setProp((props) => (props.heightMobile = e.target.value))
//                 }
//                 placeholder="e.g., auto or 300px"
//               />

//               <Label>Flex Direction</Label>
//               <Select
//                 onValueChange={(value) => setProp((props) => (props.flexDirectionMobile = value))}
//                 defaultValue={props.flexDirectionMobile || props.flexDirection}
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder="Row" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="row">Row</SelectItem>
//                   <SelectItem value="column">Column</SelectItem>
//                 </SelectContent>
//               </Select>

//               <Label>Fill Space</Label>
//               <Select
//                 onValueChange={(value) => setProp((props) => (props.fillSpaceMobile = value === 'true'))}
//                 defaultValue={(props.fillSpaceMobile !== null ? props.fillSpaceMobile : props.fillSpace).toString()}
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder="No" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="true">Yes</SelectItem>
//                   <SelectItem value="false">No</SelectItem>
//                 </SelectContent>
//               </Select>

//               <Label>Align Items</Label>
//               <Select
//                 onValueChange={(value) => setProp((props) => (props.alignItemsMobile = value))}
//                 defaultValue={props.alignItemsMobile || props.alignItems}
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder="Flex Start" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="flex-start">Flex Start</SelectItem>
//                   <SelectItem value="center">Center</SelectItem>
//                   Gottlieb
//                   <SelectItem value="flex-end">Flex End</SelectItem>
//                 </SelectContent>
//               </Select>

//               <Label>Justify Content</Label>
//               <Select
//                 onValueChange={(value) => setProp((props) => (props.justifyContentMobile = value))}
//                 defaultValue={props.justifyContentMobile || props.justifyContent}
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder="Flex Start" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="flex-start">Flex Start</SelectItem>
//                   <SelectItem value="center">Center</SelectItem>
//                   <SelectItem value="flex-end">Flex End</SelectItem>
//                 </SelectContent>
//               </Select>
//             </AccordionContent>
//           </AccordionItem>
//         </Accordion>

//         <ShadButton
//           variant="contained"
//           className="bg-red-500 text-white hover:bg-red-600 mt-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//           onClick={() => console.log("Container ID:", id)}
//         >
//           Log Node ID
//         </ShadButton>
//       </CardContent>
//     </Card>
//   );
// };

// Container.craft = {
//   props: {
//     background: "#ffffff",
//     backgroundMobile: null,
//     paddingX: 10,
//     paddingXMobile: null,
//     paddingY: 10,
//     paddingYMobile: null,
//     margin: { top: 0, right: 0, bottom: 0, left: 0 },
//     marginMobile: null,
//     borderRadius: 0,
//     borderRadiusMobile: null,
//     borderWidth: 0,
//     borderWidthMobile: null,
//     borderColor: "#000000",
//     borderColorMobile: null,
//     boxShadow: "none",
//     boxShadowMobile: null,
//     width: "100%",
//     widthMobile: null,
//     height: "auto",
//     heightMobile: null,
//     flexDirection: "row",
//     flexDirectionMobile: null,
//     fillSpace: false,
//     fillSpaceMobile: null,
//     alignItems: "flex-start",
//     alignItemsMobile: null,
//     justifyContent: "flex-start",
//     justifyContentMobile: null,
//   },
//   related: {
//     settings: ContainerSettings,
//   },
// };

// Container.propTypes = {
//   background: PropTypes.string,
//   backgroundMobile: PropTypes.string,
//   paddingX: PropTypes.number,
//   paddingXMobile: PropTypes.number,
//   paddingY: PropTypes.number,
//   paddingYMobile: PropTypes.number,
//   margin: PropTypes.shape({
//     top: PropTypes.number,
//     right: PropTypes.number,
//     bottom: PropTypes.number,
//     left: PropTypes.number,
//   }),
//   marginMobile: PropTypes.shape({
//     top: PropTypes.number,
//     right: PropTypes.number,
//     bottom: PropTypes.number,
//     left: PropTypes.number,
//   }),
//   borderRadius: PropTypes.number,
//   borderRadiusMobile: PropTypes.number,
//   borderWidth: PropTypes.number,
//   borderWidthMobile: PropTypes.number,
//   borderColor: PropTypes.string,
//   borderColorMobile: PropTypes.string,
//   boxShadow: PropTypes.string,
//   boxShadowMobile: PropTypes.string,
//   width: PropTypes.string,
//   widthMobile: PropTypes.string,
//   height: PropTypes.string,
//   heightMobile: PropTypes.string,
//   flexDirection: PropTypes.oneOf(["row", "column"]),
//   flexDirectionMobile: PropTypes.oneOf(["row", "column"]),
//   fillSpace: PropTypes.bool,
//   fillSpaceMobile: PropTypes.bool,
//   alignItems: PropTypes.oneOf(["flex-start", "center", "flex-end"]),
//   alignItemsMobile: PropTypes.oneOf(["flex-start", "center", "flex-end"]),
//   justifyContent: PropTypes.oneOf(["flex-start", "center", "flex-end"]),
//   justifyContentMobile: PropTypes.oneOf(["flex-start", "center", "flex-end"]),
//   children: PropTypes.node,
// };

import React from "react";
import { useNode } from "@craftjs/core";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HexColorPicker } from "react-colorful";
import { Button as ShadButton } from "@/components/ui/button";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BREAKPOINT = 640;

export const Container = ({
  background,
  backgroundMobile,
  paddingX,
  paddingXMobile,
  paddingY,
  paddingYMobile,
  margin,
  marginMobile,
  borderRadius,
  borderRadiusMobile,
  borderWidth,
  borderWidthMobile,
  borderColor,
  borderColorMobile,
  boxShadow,
  boxShadowMobile,
  width,
  widthMobile,
  height,
  heightMobile,
  flexDirection,
  flexDirectionMobile,
  fillSpace,
  fillSpaceMobile,
  alignItems,
  alignItemsMobile,
  justifyContent,
  justifyContentMobile,
  children,
}) => {
  const {
    id,
    connectors: { connect, drag },
  } = useNode();

  return (
    <>
      <style>
        {`
          .responsive-container {
            box-sizing: border-box;
            background: var(--background, #ffffff);
            padding: var(--padding-y, 0px) var(--padding-x, 0px);
            margin: var(--margin-top, 0px) var(--margin-right, 0px) var(--margin-bottom, 0px) var(--margin-left, 0px);
            border-radius: var(--border-radius, 0px);
            border-width: var(--border-width, 0px);
            border-color: var(--border-color, #000000);
            border-style: solid;
            box-shadow: var(--box-shadow, none);
            width: var(--width, 100%);
            height: var(--height, auto);
            display: flex;
            flex-direction: var(--flex-direction, row);
            flex: var(--fill-space, auto);
            align-items: var(--align-items, flex-start);
            justify-content: var(--justify-content, flex-start);
            overflow: auto;
          }

          @media (max-width: ${BREAKPOINT}px) {
            .responsive-container {
              background: var(--background-mobile, var(--background));
              padding: var(--padding-y-mobile, var(--padding-y)) var(--padding-x-mobile, var(--padding-x));
              margin: var(--margin-top-mobile, var(--margin-top)) var(--margin-right-mobile, var(--margin-right)) var(--margin-bottom-mobile, var(--margin-bottom)) var(--margin-left-mobile, var(--margin-left));
              border-radius: var(--border-radius-mobile, var(--border-radius));
              border-width: var(--border-width-mobile, var(--border-width));
              border-color: var(--border-color-mobile, var(--border-color));
              box-shadow: var(--box-shadow-mobile, var(--box-shadow));
              width: var(--width-mobile, var(--width));
              height: var(--height-mobile, var(--height));
              flex-direction: var(--flex-direction-mobile, var(--flex-direction));
              flex: var(--fill-space-mobile, var(--fill-space));
              align-items: var(--align-items-mobile, var(--align-items));
              justify-content: var(--justify-content-mobile, var(--justify-content));
              overflow: auto;
            }
          }
        `}
      </style>
      <div
        ref={(ref) => connect(drag(ref))}
        className="responsive-container"
        role="region"
        aria-label="Container"
        style={{
          "--background": background,
          "--background-mobile": backgroundMobile || undefined,
          "--padding-x": `${paddingX}px`,
          "--padding-x-mobile": paddingXMobile
            ? `${paddingXMobile}px`
            : undefined,
          "--padding-y": `${paddingY}px`,
          "--padding-y-mobile": paddingYMobile
            ? `${paddingYMobile}px`
            : undefined,
          "--margin-top": `${margin?.top}px`,
          "--margin-right": `${margin?.right}px`,
          "--margin-bottom": `${margin?.bottom}px`,
          "--margin-left": `${margin?.left}px`,
          "--margin-top-mobile": marginMobile
            ? `${marginMobile.top}px`
            : undefined,
          "--margin-right-mobile": marginMobile
            ? `${marginMobile.right}px`
            : undefined,
          "--margin-bottom-mobile": marginMobile
            ? `${marginMobile.bottom}px`
            : undefined,
          "--margin-left-mobile": marginMobile
            ? `${marginMobile.left}px`
            : undefined,
          "--border-radius": `${borderRadius}px`,
          "--border-radius-mobile": borderRadiusMobile
            ? `${borderRadiusMobile}px`
            : undefined,
          "--border-width": `${borderWidth}px`,
          "--border-width-mobile": borderWidthMobile
            ? `${borderWidthMobile}px`
            : undefined,
          "--border-color": borderColor,
          "--border-color-mobile": borderColorMobile || undefined,
          "--box-shadow": boxShadow,
          "--box-shadow-mobile": boxShadowMobile || undefined,
          "--width": width,
          "--width-mobile": widthMobile || undefined,
          "--height": height,
          "--height-mobile": heightMobile || undefined,
          "--flex-direction": flexDirection,
          "--flex-direction-mobile": flexDirectionMobile || undefined,
          "--fill-space": fillSpace ? 1 : "auto",
          "--fill-space-mobile":
            fillSpaceMobile !== null
              ? fillSpaceMobile
                ? 1
                : "auto"
              : undefined,
          "--align-items": alignItems,
          "--align-items-mobile": alignItemsMobile || undefined,
          "--justify-content": justifyContent,
          "--justify-content-mobile": justifyContentMobile || undefined,
          minHeight: "150px",
        }}
      >
        {children}
      </div>
    </>
  );
};

export const ContainerSettings = () => {
  const {
    id,
    props,
    actions: { setProp },
  } = useNode((node) => ({
    id: node.id,
    props: node.data.props,
  }));

  return (
    <Card>
      <CardContent className="space-y-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="desktop">
            <AccordionTrigger>Desktop Settings</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <Label>Background</Label>
              <HexColorPicker
                color={props.background}
                onChange={(color) =>
                  setProp((props) => (props.background = color))
                }
              />

              <Label>Padding X (Left & Right)</Label>
              <Input
                type="number"
                value={props.paddingX}
                min={0}
                max={100}
                onChange={(e) =>
                  setProp((props) => (props.paddingX = Number(e.target.value)))
                }
                placeholder="Padding X"
              />

              <Label>Padding Y (Top & Bottom)</Label>
              <Input
                type="number"
                value={props.paddingY}
                min={0}
                max={100}
                onChange={(e) =>
                  setProp((props) => (props.paddingY = Number(e.target.value)))
                }
                placeholder="Padding Y"
              />

              <Label>Margin</Label>
              {["top", "right", "bottom", "left"].map((side) => (
                <Input
                  key={side}
                  type="number"
                  value={props.margin[side]}
                  onChange={(e) =>
                    setProp(
                      (props) => (props.margin[side] = Number(e.target.value))
                    )
                  }
                  placeholder={`${side} margin`}
                />
              ))}

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

              <Label>Border Width</Label>
              <Slider
                defaultValue={[props.borderWidth]}
                min={0}
                max={10}
                step={1}
                onValueChange={(value) =>
                  setProp((props) => (props.borderWidth = value[0]))
                }
              />

              <Label>Border Color</Label>
              <HexColorPicker
                color={props.borderColor}
                onChange={(color) =>
                  setProp((props) => (props.borderColor = color))
                }
              />

              <Label>Box Shadow</Label>
              <Input
                value={props.boxShadow}
                onChange={(e) =>
                  setProp((props) => (props.boxShadow = e.target.value))
                }
                placeholder="e.g., 0px 4px 6px rgba(0,0,0,0.1)"
              />

              <Label>Width</Label>
              <Input
                value={props.width}
                onChange={(e) =>
                  setProp((props) => (props.width = e.target.value))
                }
                placeholder="e.g., 100% or 500px"
              />

              <Label>Height</Label>
              <Input
                value={props.height}
                onChange={(e) =>
                  setProp((props) => (props.height = e.target.value))
                }
                placeholder="e.g., auto or 300px"
              />

              <Label>Flex Direction</Label>
              <Select
                onValueChange={(value) =>
                  setProp((props) => (props.flexDirection = value))
                }
                defaultValue={props.flexDirection}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Row" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="row">Row</SelectItem>
                  <SelectItem value="column">Column</SelectItem>
                </SelectContent>
              </Select>

              <Label>Fill Space</Label>
              <Select
                onValueChange={(value) =>
                  setProp((props) => (props.fillSpace = value === "true"))
                }
                defaultValue={props.fillSpace.toString()}
              >
                <SelectTrigger>
                  <SelectValue placeholder="No" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Yes</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>

              <Label>Align Items</Label>
              <Select
                onValueChange={(value) =>
                  setProp((props) => (props.alignItems = value))
                }
                defaultValue={props.alignItems}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Flex Start" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="flex-start">Flex Start</SelectItem>
                  <SelectItem value="center">Center</SelectItem>
                  <SelectItem value="flex-end">Flex End</SelectItem>
                </SelectContent>
              </Select>

              <Label>Justify Content</Label>
              <Select
                onValueChange={(value) =>
                  setProp((props) => (props.justifyContent = value))
                }
                defaultValue={props.justifyContent}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Flex Start" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="flex-start">Flex Start</SelectItem>
                  <SelectItem value="center">Center</SelectItem>
                  <SelectItem value="flex-end">Flex End</SelectItem>
                </SelectContent>
              </Select>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="mobile">
            <AccordionTrigger>Mobile Settings</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <Label>Background</Label>
              <HexColorPicker
                color={props.backgroundMobile || props.background}
                onChange={(color) =>
                  setProp((props) => (props.backgroundMobile = color))
                }
              />

              <Label>Padding X (Left & Right)</Label>
              <Input
                type="number"
                value={props.paddingXMobile || props.paddingX}
                min={0}
                max={100}
                onChange={(e) =>
                  setProp(
                    (props) => (props.paddingXMobile = Number(e.target.value))
                  )
                }
                placeholder="Padding X"
              />

              <Label>Padding Y (Top & Bottom)</Label>
              <Input
                type="number"
                value={props.paddingYMobile || props.paddingY}
                min={0}
                max={100}
                onChange={(e) =>
                  setProp(
                    (props) => (props.paddingYMobile = Number(e.target.value))
                  )
                }
                placeholder="Padding Y"
              />

              <Label>Margin</Label>
              {["top", "right", "bottom", "left"].map((side) => (
                <Input
                  key={side}
                  type="number"
                  value={
                    props.marginMobile
                      ? props.marginMobile[side]
                      : props.margin[side]
                  }
                  onChange={(e) =>
                    setProp((props) => {
                      props.marginMobile = {
                        ...props.marginMobile,
                        [side]: Number(e.target.value),
                      };
                    })
                  }
                  placeholder={`${side} margin`}
                />
              ))}

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

              <Label>Border Width</Label>
              <Slider
                defaultValue={[props.borderWidthMobile || props.borderWidth]}
                min={0}
                max={10}
                step={1}
                onValueChange={(value) =>
                  setProp((props) => (props.borderWidthMobile = value[0]))
                }
              />

              <Label>Border Color</Label>
              <HexColorPicker
                color={props.borderColorMobile || props.borderColor}
                onChange={(color) =>
                  setProp((props) => (props.borderColorMobile = color))
                }
              />

              <Label>Box Shadow</Label>
              <Input
                value={props.boxShadowMobile || props.boxShadow}
                onChange={(e) =>
                  setProp((props) => (props.boxShadowMobile = e.target.value))
                }
                placeholder="e.g., 0px 4px 6px rgba(0,0,0,0.1)"
              />

              <Label>Width</Label>
              <Input
                value={props.widthMobile || props.width}
                onChange={(e) =>
                  setProp((props) => (props.widthMobile = e.target.value))
                }
                placeholder="e.g., 100% or 500px"
              />

              <Label>Height</Label>
              <Input
                value={props.heightMobile || props.height}
                onChange={(e) =>
                  setProp((props) => (props.heightMobile = e.target.value))
                }
                placeholder="e.g., auto or 300px"
              />

              <Label>Flex Direction</Label>
              <Select
                onValueChange={(value) =>
                  setProp((props) => (props.flexDirectionMobile = value))
                }
                defaultValue={props.flexDirectionMobile || props.flexDirection}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Row" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="row">Row</SelectItem>
                  <SelectItem value="column">Column</SelectItem>
                </SelectContent>
              </Select>

              <Label>Fill Space</Label>
              <Select
                onValueChange={(value) =>
                  setProp((props) => (props.fillSpaceMobile = value === "true"))
                }
                defaultValue={(props.fillSpaceMobile !== null
                  ? props.fillSpaceMobile
                  : props.fillSpace
                ).toString()}
              >
                <SelectTrigger>
                  <SelectValue placeholder="No" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Yes</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>

              <Label>Align Items</Label>
              <Select
                onValueChange={(value) =>
                  setProp((props) => (props.alignItemsMobile = value))
                }
                defaultValue={props.alignItemsMobile || props.alignItems}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Flex Start" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="flex-start">Flex Start</SelectItem>
                  <SelectItem value="center">Center</SelectItem>
                  <SelectItem value="flex-end">Flex End</SelectItem>
                </SelectContent>
              </Select>

              <Label>Justify Content</Label>
              <Select
                onValueChange={(value) =>
                  setProp((props) => (props.justifyContentMobile = value))
                }
                defaultValue={
                  props.justifyContentMobile || props.justifyContent
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Flex Start" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="flex-start">Flex Start</SelectItem>
                  <SelectItem value="center">Center</SelectItem>
                  <SelectItem value="flex-end">Flex End</SelectItem>
                </SelectContent>
              </Select>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <ShadButton
          variant="contained"
          className="bg-red-500 text-white hover:bg-red-600 mt-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          onClick={() => console.log("Container ID:", id)}
        >
          Log Node ID
        </ShadButton>
      </CardContent>
    </Card>
  );
};

Container.craft = {
  props: {
    background: "#ffffff",
    backgroundMobile: null,
    paddingX: 0,
    paddingXMobile: null,
    paddingY: 0,
    paddingYMobile: null,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    marginMobile: null,
    borderRadius: 0,
    borderRadiusMobile: null,
    borderWidth: 0,
    borderWidthMobile: null,
    borderColor: "#000000",
    borderColorMobile: null,
    boxShadow: "none",
    boxShadowMobile: null,
    width: "100%",
    widthMobile: null,
    height: "auto",
    heightMobile: null,
    flexDirection: "row",
    flexDirectionMobile: null,
    fillSpace: false,
    fillSpaceMobile: null,
    alignItems: "flex-start",
    alignItemsMobile: null,
    justifyContent: "flex-start",
    justifyContentMobile: null,
  },
  related: {
    settings: ContainerSettings,
  },
  canvas: true,
};

Container.propTypes = {
  background: PropTypes.string,
  backgroundMobile: PropTypes.string,
  paddingX: PropTypes.number,
  paddingXMobile: PropTypes.number,
  paddingY: PropTypes.number,
  paddingYMobile: PropTypes.number,
  margin: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
  }),
  marginMobile: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
  }),
  borderRadius: PropTypes.number,
  borderRadiusMobile: PropTypes.number,
  borderWidth: PropTypes.number,
  borderWidthMobile: PropTypes.number,
  borderColor: PropTypes.string,
  borderColorMobile: PropTypes.string,
  boxShadow: PropTypes.string,
  boxShadowMobile: PropTypes.string,
  width: PropTypes.string,
  widthMobile: PropTypes.string,
  height: PropTypes.string,
  heightMobile: PropTypes.string,
  flexDirection: PropTypes.oneOf(["row", "column"]),
  flexDirectionMobile: PropTypes.oneOf(["row", "column"]),
  fillSpace: PropTypes.bool,
  fillSpaceMobile: PropTypes.bool,
  alignItems: PropTypes.oneOf(["flex-start", "center", "flex-end"]),
  alignItemsMobile: PropTypes.oneOf(["flex-start", "center", "flex-end"]),
  justifyContent: PropTypes.oneOf(["flex-start", "center", "flex-end"]),
  justifyContentMobile: PropTypes.oneOf(["flex-start", "center", "flex-end"]),
  children: PropTypes.node,
};
