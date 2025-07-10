import React from "react";
import { useNode, Element } from "@craftjs/core";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "../user/Container";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input"; // Added for gap input if preferred over slider

// --- The Grid Component ---
export const Grid = ({ numberOfColumns, gap, padding, children, backgroundColor, minHeight }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      ref={(ref) => connect(drag(ref))} // Connect to Craft.js drag & drop system
      style={{
        display: "grid",
        // Creates equal width columns based on the numberOfColumns prop
        gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)`,
        gap: `${gap}px`,         // Gap between grid items
        padding: `${padding}px`, // Padding inside the grid container
        backgroundColor: backgroundColor, // Background color of the grid container
        minHeight: `${minHeight}px`, // Minimum height to ensure it's visible even when empty
        // Add some visual indication in the editor when empty (optional)
        border: '1px dashed #e2e8f0' // Light dashed border for visual aid in editor
      }}
      // data-cy="grid-cols-container" // Optional: for end-to-end testing
    >
      {/* Children elements dropped via Craft.js will render here */}
      {/* {children} */}
      <Element is={Container} canvas id="grid-conmtainer">
  {/* {children || <div />}  */}
</Element>
<Element is={Container} canvas id="grid-container">
  {/* //{children || <div />} */}
</Element>
{children}
    </div>
  );
};

// --- The Settings Panel for the Grid Component ---
export const GridSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <Card className="">
      <CardContent className="space-y-4 pt-4"> {/* Added pt-4 for spacing */}

        <div className="flex flex-col space-y-2">
          <Label htmlFor="numberOfColumns">Number of Columns</Label>
          <Slider
            id="numberOfColumns"
            defaultValue={[props.numberOfColumns]}
            min={1}
            max={12} // Sensible max columns, adjust if needed
            step={1}
            onValueChange={(value) =>
              setProp((props) => (props.numberOfColumns = value[0]))
            }
          />
          <span className="text-sm text-muted-foreground text-right">
            {props.numberOfColumns} column{props.numberOfColumns > 1 ? 's' : ''}
          </span>
        </div>

        <div className="flex flex-col space-y-2">
          <Label htmlFor="gap">Gap (px)</Label>
          <Slider
            id="gap"
            defaultValue={[props.gap]}
            min={0}
            max={50} // Adjust max gap as needed
            step={1}
            onValueChange={(value) => setProp((props) => (props.gap = value[0]))}
          />
           <span className="text-sm text-muted-foreground text-right">
             {props.gap}px
           </span>
        </div>

        <div className="flex flex-col space-y-2">
            <Label htmlFor="padding">Padding (px)</Label>
            <Slider
                id="padding"
                defaultValue={[props.padding]}
                min={0}
                max={100} // Adjust max padding as needed
                step={1}
                onValueChange={(value) => setProp((props) => (props.padding = value[0]))}
            />
             <span className="text-sm text-muted-foreground text-right">
               {props.padding}px
             </span>
        </div>

        <div className="flex flex-col space-y-2">
            <Label htmlFor="minHeight">Minimum Height (px)</Label>
            <Slider
                id="minHeight"
                defaultValue={[props.minHeight]}
                min={20} // Minimum sensible height
                max={500} // Adjust max height as needed
                step={5}
                onValueChange={(value) => setProp((props) => (props.minHeight = value[0]))}
            />
             <span className="text-sm text-muted-foreground text-right">
               {props.minHeight}px
             </span>
        </div>

         {/* Optional: Background Color Picker - Uncomment if you have react-colorful */}
         {/*
         <div className="flex flex-col space-y-2">
            <Label>Background Color</Label>
            <ColorPicker
              value={props.backgroundColor}
              onChange={(value) => setProp((props) => (props.backgroundColor = value))}
            />
         </div>
         */}

         {/* Basic Background Color Input (if no ColorPicker) */}
         <div className="flex flex-col space-y-2">
           <Label htmlFor="backgroundColor">Background Color</Label>
           <Input
             id="backgroundColor"
             type="color" // Use HTML5 color input
             value={props.backgroundColor || '#ffffff'} // Provide a default value if null/undefined
             onChange={(e) => setProp((props) => (props.backgroundColor = e.target.value))}
           />
         </div>

      </CardContent>
    </Card>
  );
};

// --- Craft.js Configuration for the Grid Component ---
Grid.craft = {
  displayName: "Grid Columns", // Name displayed in the Craft.js editor layers/components panel
  props: { // Default properties when the component is dragged onto the canvas
    numberOfColumns: 2,
    gap: 16,          // Default gap in pixels
    padding: 10,       // Default padding in pixels
    backgroundColor: 'red', // Default background
    minHeight: 50,     // Default minimum height
    // props that are not directly style-related but important for Craft
    isCanvas: true, // Crucial: Marks this component as a droppable container
  },
  related: {
    settings: GridSettings, // Link the settings panel component
  },
  // Optional: Rules can define where this component can be dragged or what can be dropped inside
  // rules: {
  //   canDrag: () => true,
    canDrop: () => true,
  //   canMoveIn: (incomingNodes) => incomingNodes.every(node => node.data.type !== GridCols), // Prevent nesting grids inside grids?
  //   canMoveOut: () => true,
  // },
};

// import React from "react";
// import { useNode, Element } from "@craftjs/core";
// import { Card, CardContent } from "@/components/ui/card";
// import { Text } from "../user/Text";
// import { Label } from "@/components/ui/label";
// import { Slider } from "@/components/ui/slider";
// import { Input } from "@/components/ui/input"; // Added for gap input if preferred over slider

// // --- The Grid Component ---
// export const Grid = ({ numberOfColumns, gap, padding, children, backgroundColor, minHeight }) => {
//   const {
//     connectors: { connect, drag },
//   } = useNode();

//   return (
//     <div ref={(ref) => connect(drag(ref))}>
//     <Element
//         is="div" // Specify the component type for Craft.js
//         canvas
//         id="grid-cols-container" // Unique ID for the grid container
//     //   ref={(ref) => connect(drag(ref))} // Connect to Craft.js drag & drop system
//       style={{
//         display: "grid",
//         // Creates equal width columns based on the numberOfColumns prop
//         gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)`,
//         gap: `${gap}px`,         // Gap between grid items
//         padding: `${padding}px`, // Padding inside the grid container
//         backgroundColor: backgroundColor, // Background color of the grid container
//         minHeight: `${minHeight}px`, // Minimum height to ensure it's visible even when empty
//         // Add some visual indication in the editor when empty (optional)
//         border: '1px dashed #e2e8f0' // Light dashed border for visual aid in editor
//       }}
//       // data-cy="grid-cols-container" // Optional: for end-to-end testing
//     >
//       {/* Children elements dropped via Craft.js will render here */}
//       {children}
//       <Text text="Home" fontSize={16} textAlign="left" />
//       <Text text="About" fontSize={16} textAlign="left" />
//       <Text text="Contact" fontSize={16} textAlign="left" />
//     </Element>
//     </div>
//   );
// };

// // --- The Settings Panel for the Grid Component ---
// export const GridSettings = () => {
//   const {
//     actions: { setProp },
//     props,
//   } = useNode((node) => ({
//     props: node.data.props,
//   }));

//   return (
//     <Card className="">
//       <CardContent className="space-y-4 pt-4"> {/* Added pt-4 for spacing */}

//         <div className="flex flex-col space-y-2">
//           <Label htmlFor="numberOfColumns">Number of Columns</Label>
//           <Slider
//             id="numberOfColumns"
//             defaultValue={[props.numberOfColumns]}
//             min={1}
//             max={12} // Sensible max columns, adjust if needed
//             step={1}
//             onValueChange={(value) =>
//               setProp((props) => (props.numberOfColumns = value[0]))
//             }
//           />
//           <span className="text-sm text-muted-foreground text-right">
//             {props.numberOfColumns} column{props.numberOfColumns > 1 ? 's' : ''}
//           </span>
//         </div>

//         <div className="flex flex-col space-y-2">
//           <Label htmlFor="gap">Gap (px)</Label>
//           <Slider
//             id="gap"
//             defaultValue={[props.gap]}
//             min={0}
//             max={50} // Adjust max gap as needed
//             step={1}
//             onValueChange={(value) => setProp((props) => (props.gap = value[0]))}
//           />
//            <span className="text-sm text-muted-foreground text-right">
//              {props.gap}px
//            </span>
//         </div>

//         <div className="flex flex-col space-y-2">
//             <Label htmlFor="padding">Padding (px)</Label>
//             <Slider
//                 id="padding"
//                 defaultValue={[props.padding]}
//                 min={0}
//                 max={100} // Adjust max padding as needed
//                 step={1}
//                 onValueChange={(value) => setProp((props) => (props.padding = value[0]))}
//             />
//              <span className="text-sm text-muted-foreground text-right">
//                {props.padding}px
//              </span>
//         </div>

//         <div className="flex flex-col space-y-2">
//             <Label htmlFor="minHeight">Minimum Height (px)</Label>
//             <Slider
//                 id="minHeight"
//                 defaultValue={[props.minHeight]}
//                 min={20} // Minimum sensible height
//                 max={500} // Adjust max height as needed
//                 step={5}
//                 onValueChange={(value) => setProp((props) => (props.minHeight = value[0]))}
//             />
//              <span className="text-sm text-muted-foreground text-right">
//                {props.minHeight}px
//              </span>
//         </div>

//          {/* Optional: Background Color Picker - Uncomment if you have react-colorful */}
//          {/*
//          <div className="flex flex-col space-y-2">
//             <Label>Background Color</Label>
//             <ColorPicker
//               value={props.backgroundColor}
//               onChange={(value) => setProp((props) => (props.backgroundColor = value))}
//             />
//          </div>
//          */}

//          {/* Basic Background Color Input (if no ColorPicker) */}
//          <div className="flex flex-col space-y-2">
//            <Label htmlFor="backgroundColor">Background Color</Label>
//            <Input
//              id="backgroundColor"
//              type="color" // Use HTML5 color input
//              value={props.backgroundColor || '#ffffff'} // Provide a default value if null/undefined
//              onChange={(e) => setProp((props) => (props.backgroundColor = e.target.value))}
//            />
//          </div>

//       </CardContent>
//     </Card>
//   );
// };

// // --- Craft.js Configuration for the Grid Component ---
// Grid.craft = {
//   displayName: "Grid Columns", // Name displayed in the Craft.js editor layers/components panel
//   props: { // Default properties when the component is dragged onto the canvas
//     numberOfColumns: 5,
//     gap: 16,          // Default gap in pixels
//     padding: 10,       // Default padding in pixels
//     backgroundColor: 'red', // Default background
//     minHeight: 50,     // Default minimum height
//     // props that are not directly style-related but important for Craft
//     //isCanvas: true, // Crucial: Marks this component as a droppable container
//   },
//   related: {
//     settings: GridSettings, // Link the settings panel component
//   },
//   // Optional: Rules can define where this component can be dragged or what can be dropped inside
//   // rules: {
//     canDrag: () => true,
//     canDrop: () => true,
//     canMoveIn: (incomingNodes) => incomingNodes.every(node => node.data.type !== GridCols), // Prevent nesting grids inside grids?
//     canMoveOut: () => true,
//   // },
// };

