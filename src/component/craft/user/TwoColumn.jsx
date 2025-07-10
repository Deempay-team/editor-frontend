// import React from "react";
// import { useNode } from "@craftjs/core";
// import { Card, CardContent } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Slider } from "@/components/ui/slider";
// import { Select } from "@/components/ui/select";

// export const Column = ({ width, alignment, padding, margin }) => {
//   const {
//     connectors: { connect, drag },
//   } = useNode();

//   return (
//     <div
//       ref={(ref) => connect(drag(ref))}
//       style={{
//         width: alignment === "fill" ? "100%" : `${width}px`,
//         padding: `${padding}px`,
//         margin: `${margin}px`,
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       Column Content
//     </div>
//   );
// };

// export const ColumnSettings = () => {
//   const {
//     actions: { setProp },
//     props,
//   } = useNode((node) => ({
//     props: node.data.props,
//   }));

//   return (
//     <Card>
//       <CardContent className="space-y-4">
//         <Label>Width</Label>
//         <Slider defaultValue={[props.width]} min={50} max={1200} step={10} onValueChange={(value) => setProp((props) => (props.width = value[0]))} />

//         <Label>Alignment</Label>
//         <Select value={props.alignment} onChange={(e) => setProp((props) => (props.alignment = e.target.value))}>
//           <option value="left">Left</option>
//           <option value="center">Center</option>
//           <option value="right">Right</option>
//           <option value="fill">Fill Width</option>
//         </Select>

//         <Label>Padding</Label>
//         <Slider defaultValue={[props.padding]} min={0} max={50} step={1} onValueChange={(value) => setProp((props) => (props.padding = value[0]))} />

//         <Label>Margin</Label>
//         <Slider defaultValue={[props.margin]} min={0} max={50} step={1} onValueChange={(value) => setProp((props) => (props.margin = value[0]))} />
//       </CardContent>
//     </Card>
//   );
// };

// Column.craft = {
//   props: {
//     width: 300,
//     alignment: "left",
//     padding: 10,
//     margin: 10,
//   },
//   related: {
//     settings: ColumnSettings,
//   },
// };


// import React, { useState } from "react";
// import { useNode } from "@craftjs/core";
// import { Card, CardContent } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Slider } from "@/components/ui/slider";
// import { Select } from "@/components/ui/select";
// //import { ToggleGroup } from "@/components/ui/togglegroup";
// import { Button } from "@/components/ui/button";

// export const Column = ({ width, alignment, padding, margin, imageFit, imagePosition, aspectRatio }) => {
//   const {
//     connectors: { connect, drag },
//   } = useNode();

//   return (
//     <div
//       ref={(ref) => connect(drag(ref))}
//       style={{
//         width: alignment === "fill" ? "100%" : `${width}px`,
//         padding: `${padding}px`,
//         margin: `${margin}px`,
//         display: "flex",
//         flexDirection: "column",
//         objectFit: imageFit,
//         objectPosition: imagePosition,
//         aspectRatio: aspectRatio,
//       }}
//     >
//       Column Content
//     </div>
//   );
// };

// export const ColumnSettings = () => {
//   const {
//     actions: { setProp },
//     props,
//   } = useNode((node) => ({
//     props: node.data.props,
//   }));

//   const [columns, setColumns] = useState(["Column 1", "Column 2"]);

//   const addColumn = () => {
//     setColumns([...columns, `Column ${columns.length + 1}`]);
//   };

//   return (
//     <Card>
//       <CardContent className="space-y-4">
//         <Label>Column Layouts</Label>
//         <div className="grid grid-cols-3 gap-2">
//           <Button variant="outline">1/1</Button>
//           <Button variant="outline" className="bg-blue-500 text-white">1/2</Button>
//           <Button variant="outline" className="bg-blue-500 text-white">1/2</Button>
//         </div>

//         <Label>Columns</Label>
//         {columns.map((col, index) => (
//           <div key={index} className="flex items-center space-x-2 border p-2 rounded">
//             <span className="cursor-move">≡</span>
//             <Select value={col}>
//               <option>{col}</option>
//             </Select>
//           </div>
//         ))}

//         <Button onClick={addColumn} className="w-full mt-2">+ Column</Button>

//         <Label>Width</Label>
//         <Slider defaultValue={[props.width]} min={50} max={1200} step={10} onValueChange={(value) => setProp((props) => (props.width = value[0]))} />

//         <Label>Alignment</Label>
//         <Select value={props.alignment} onChange={(e) => setProp((props) => (props.alignment = e.target.value))}>
//           <option value="left">Left</option>
//           <option value="center">Center</option>
//           <option value="right">Right</option>
//           <option value="fill">Fill Width</option>
//         </Select>

//         <Label>Image Fit</Label>
//         <Select value={props.imageFit} onChange={(e) => setProp((props) => (props.imageFit = e.target.value))}>
//           <option value="cover">Cover</option>
//           <option value="contain">Contain</option>
//           <option value="fill">Fill</option>
//         </Select>

//         <Label>Image Position</Label>
//         <Select value={props.imagePosition} onChange={(e) => setProp((props) => (props.imagePosition = e.target.value))}>
//           <option value="top left">Top Left</option>
//           <option value="top center">Top Center</option>
//           <option value="top right">Top Right</option>
//           <option value="center left">Center Left</option>
//           <option value="center">Center</option>
//           <option value="center right">Center Right</option>
//           <option value="bottom left">Bottom Left</option>
//           <option value="bottom center">Bottom Center</option>
//           <option value="bottom right">Bottom Right</option>
//         </Select>

//         <Label>Aspect Ratio</Label>
//         <Slider defaultValue={[props.aspectRatio]} min={0.5} max={2} step={0.01} onValueChange={(value) => setProp((props) => (props.aspectRatio = value[0]))} />

//         <Label>Padding</Label>
//         <Slider defaultValue={[props.padding]} min={0} max={50} step={1} onValueChange={(value) => setProp((props) => (props.padding = value[0]))} />

//         <Label>Margin</Label>
//         <Slider defaultValue={[props.margin]} min={0} max={50} step={1} onValueChange={(value) => setProp((props) => (props.margin = value[0]))} />
//       </CardContent>
//     </Card>
//   );
// };

// Column.craft = {
//   props: {
//     width: 300,
//     alignment: "left",
//     padding: 10,
//     margin: 10,
//     imageFit: "cover",
//     imagePosition: "center",
//     aspectRatio: 1,
//   },
//   related: {
//     settings: ColumnSettings,
//   },
// };






// import React, { useState } from "react";
// import { useNode, Element } from "@craftjs/core";
// import { Card, CardContent } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Slider } from "@/components/ui/slider";
// import { Select } from "@/components/ui/select";
// // import { ToggleGroup } from "@/components/ui/togglegroup";
// import { Button } from "@/components/ui/button";
// import { Container, ContainerSettings, ContainerDefaultProps } from "./Container";

// import { Text } from "./Text";  


// export const Column = ({ width, alignment, padding = 0 , margin, imageFit, imagePosition, aspectRatio, children, background }) => {
//   const {
//     connectors: { connect, drag },
//   } = useNode();

//   //<Element id="div" is={Container} canvas>
//   //  <div
//   //    ref={(ref) => connect(drag(ref))}
//   //    style={{
//   //      width: alignment === "fill" ? "100%" : `${width}px`,
//   //      padding: `${padding}px`,
//   //      margin: `${margin}px`,
//   //      display: "flex",
//   //      flexDirection: "column",
//   //      objectFit: imageFit,
//   //      objectPosition: imagePosition,
//   //      aspectRatio: aspectRatio,
//   //      background,
//   //    }}
//   //  >
//   //      
//   //          {children}
//   //      
//   //  </div>
//   //</Element>

//   //<Container background={background} padding={padding}>
//   //        <Element id="div" is={Container} canvas>
//   //          {/* <Button size="small" variant="contained"> Learn more </Button> */}
//   //        </Element>
//   //</Container>
//   return (
//    //<div
//    //  ref={(ref) => connect(drag(ref))}
//    //  style={{
//    //    width: alignment === "fill" ? "100%" : `${width}px`,
//    //    padding: `${padding}px`,
//    //    margin: `${margin}px`,
//    //    display: "flex",
//    //    flexDirection: "column",
//    //    objectFit: imageFit,
//    //    objectPosition: imagePosition,
//    //    aspectRatio: aspectRatio,
//    //    background,
//    //  }}
//    //>
//    //    <Element id="div" is={Container} canvas></Element>
//    //           {children}
//    //    
//    //</div>

//    <div ref={(ref) => connect(drag(ref))}>
//    <Container background={background} padding={padding}>
//           <Element id="div" is={Container} canvas>
//           {children}
//             {/* <Button size="small" variant="contained"> Learn more </Button> */}
//           </Element>
//    </Container>
//    </div>
//   );
// };

// export const ColumnSettings = () => {
//   const {
//     actions: { setProp },
//     props,
//   } = useNode((node) => ({
//     props: node.data.props,
//   }));

//   const [columns, setColumns] = useState(["Column 1", "Column 2"]);

//   const addColumn = () => {
//     setColumns([...columns, `Column ${columns.length + 1}`]);
//   };

//   return (
//     <Card>
//       <CardContent className="space-y-4">
//         <Label>Column Layouts</Label>
//         <div className="grid grid-cols-3 gap-2">
//           <Button variant="outline">1/1</Button>
//           <Button variant="outline" className="bg-blue-500 text-white">1/2</Button>
//           <Button variant="outline" className="bg-blue-500 text-white">1/2</Button>
//         </div>

//         <Label>Columns</Label>
//         {columns.map((col, index) => (
//           <div key={index} className="flex items-center space-x-2 border p-2 rounded">
//             <span className="cursor-move">≡</span>
//             <Select value={col}>
//               <option>{col}</option>
//             </Select>
//           </div>
//         ))}

//         <Button onClick={addColumn} className="w-full mt-2">+ Column</Button>

//         <Label>Width</Label>
//         <Slider defaultValue={[props.width]} min={50} max={1200} step={10} onValueChange={(value) => setProp((props) => (props.width = value[0]))} />

//         <Label>Alignment</Label>
//         <Select value={props.alignment} onChange={(e) => setProp((props) => (props.alignment = e.target.value))}>
//           <option value="left">Left</option>
//           <option value="center">Center</option>
//           <option value="right">Right</option>
//           <option value="fill">Fill Width</option>
//         </Select>

//         <Label>Image Fit</Label>
//         <Select value={props.imageFit} onChange={(e) => setProp((props) => (props.imageFit = e.target.value))}>
//           <option value="cover">Cover</option>
//           <option value="contain">Contain</option>
//           <option value="fill">Fill</option>
//         </Select>

//         <Label>Image Position</Label>
//         <Select value={props.imagePosition} onChange={(e) => setProp((props) => (props.imagePosition = e.target.value))}>
//           <option value="top left">Top Left</option>
//           <option value="top center">Top Center</option>
//           <option value="top right">Top Right</option>
//           <option value="center left">Center Left</option>
//           <option value="center">Center</option>
//           <option value="center right">Center Right</option>
//           <option value="bottom left">Bottom Left</option>
//           <option value="bottom center">Bottom Center</option>
//           <option value="bottom right">Bottom Right</option>
//         </Select>

//         <Label>Aspect Ratio</Label>
//         <Slider defaultValue={[props.aspectRatio]} min={0.5} max={2} step={0.01} onValueChange={(value) => setProp((props) => (props.aspectRatio = value[0]))} />

//         <Label>Padding</Label>
//         <Slider defaultValue={[props.padding]} min={0} max={50} step={1} onValueChange={(value) => setProp((props) => (props.padding = value[0]))} />

//         <Label>Margin</Label>
//         <Slider defaultValue={[props.margin]} min={0} max={50} step={1} onValueChange={(value) => setProp((props) => (props.margin = value[0]))} />
//       </CardContent>
//     </Card>
//   );
// };

// Column.craft = {
//   props: {
//     width: 300,
//     alignment: "left",
//     padding: 0,
//     margin: 10,
//     imageFit: "cover",
//     imagePosition: "center",
//     aspectRatio: 1,
//     background: "rgb(254, 149, 149)",
//   },
//   related: {
//     settings: ColumnSettings,
//   },
// };



// TwoColumnLayout.js
import React from "react";
import { Element, useNode } from "@craftjs/core";

export const Column = ({ children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className="flex gap-4 w-full"
      style={{ minHeight: "200px" }}
    >
      <Element
        is="div"
        canvas
        id="left-column"
        className="w-1/2 p-4 border border-gray-300 rounded"
      >
        {children[0]}
      </Element>
      <Element
        is="div"
        canvas
        id="right-column"
        className="w-1/2 p-4 border border-gray-300 rounded"
      >
        {children[1]}
      </Element>
    </div>
  );
};

Column.craft = {
  displayName: "Two Column Layout",
  props: {},
  related: {},
};
