// import React from "react";
// import { Element } from "@craftjs/core"; // Only Element is needed here now

// // Adjust paths as necessary
// import { Container, ContainerSettings, ContainerDefaultProps } from "../user/Container";
// import { Text } from "../user/Text";

// // Revised AnnouncementBar - Renders Container directly, similar to Card
// export const AnnouncementBar = (props) => {
//   // We don't need useNode here. We rely on the Container's connectors
//   // and Craft.js managing this component via its registration.

//   // Destructure props to pass them cleanly to Container.
//   // We get props from AnnouncementBar.craft.props initially.
//   const {
//     background, paddingX, paddingY, maxWidth, minHeight, align,
//     margin, borderRadius, borderWidth, borderColor, boxShadow,
//     children, // Capture any children passed directly (though unlikely needed here)
//     ...rest // Capture any other potential props
//   } = props;

//   return (
//     // Render the Container, passing down the props.
//     // The Container component itself should handle its ref and connectors.
//     <Container
//       // Pass all relevant props down to the actual Container component
//       background={background}
//       paddingX={paddingX}
//       paddingY={paddingY}
//       maxWidth={maxWidth}
//       minHeight={minHeight}
//       align={align}
//       margin={margin}
//       borderRadius={borderRadius}
//       borderWidth={borderWidth}
//       borderColor={borderColor}
//       boxShadow={boxShadow}
//       {...rest} // Pass any remaining props
//     >
//       {/*
//        * Define the initial Text content *inside* the Container
//        * using the Element component. This tells Craft.js to create
//        * this Text node when AnnouncementBar is dropped.
//        */}
//       <Element
//         is={Text}
//         id="announcementText" // Unique ID for the default text node
//         // canvas // Usually not needed for a simple text element unless you want to drop things next to it
//         // --- Default Props for the Text ---
//         text="📢 Special Announcement! Check out our new features! 📢" // Default message
//         fontSize={14}
//         textAlign="center" // Center the text itself
//         fontWeight="400"
//         color="#ffffff"     // Default white text (contrasting with dark background)
//         lineHeight={1.4}
//         charSpacing={0}
//         margin={0}          // Ensure no extra margin on the text itself
//         padding={0}         // Ensure no extra padding on the text itself
//         width="auto"        // Allow text to wrap naturally
//       />

//       {/* Render any explicitly passed children AFTER the default Element */}
//       {/* This is usually empty when dragging from the toolbox */}
//       {children}
//     </Container>
//   );
// };

// // --- Craft.js Configuration for AnnouncementBar ---
// AnnouncementBar.craft = {
//   displayName: "Announcement Bar",
//   // Define the default props for the AnnouncementBar itself.
//   // These will be passed to the Container it renders.
//   props: {
//     ...ContainerDefaultProps, // Start with base Container defaults
//     // --- Override defaults specifically for Announcement Bar styling ---
//     background: "#333333",      // Example dark background
//     paddingX: 15,               // Horizontal padding
//     paddingY: 10,               // Vertical padding
//     maxWidth: "100%",           // Crucial for full-width responsiveness
//     minHeight: "auto",          // Height based on content
//     align: "center",            // Center content within the container (e.g., if text doesn't fill width)
//     margin: { top: 0, right: 0, bottom: 0, left: 0 }, // Reset margin
//     borderRadius: 0,            // No rounded corners by default
//     borderWidth: 0,             // No border by default
//     // NOTE: The text color itself is set in the <Element is={Text}> defaults above
//   },
//   // Reuse ContainerSettings because the AnnouncementBar *is* essentially a Container
//   // Selecting the AnnouncementBar in the editor should allow editing container properties.
//   related: {
//     settings: ContainerSettings,
//   },
//   // Optional: Add rules if needed (e.g., where it can be dropped)
//   rules: {
//     // Example: Only allow dropping directly into the ROOT node
//     // canMoveIn: (incoming, self, helpers) => helpers(self.data.parent).isROOT(),
//   }
// };



import React from "react";
import { useNode, Element } from "@craftjs/core";
import { Container } from "../user/Container"; // Adjust path as needed
import { Text } from "../user/Text"; // Adjust path as needed

// The AnnouncementBar component itself is simple.
// It primarily acts as a draggable wrapper and uses <Element>
// to define its initial child structure (a Container with Text inside).
export const AnnouncementBar = ({ children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div ref={(ref) => connect(drag(ref))}>
       {/*
        * We use the Element canvas here to define the *initial* structure
        * when this component is dragged onto the editor.
        * The user can then modify the inner Container and Text using their
        * respective settings panels.
        */}
      <Element
        is={Container}
        id="announcementContainer" // Optional unique ID for the inner container
        canvaes // Make the inner container a canvas node itself if needed
        // --- Default Props for the Container (Announcement Bar Styling) ---
        background="#333333" // Default dark background
        paddingX={15}          // Horizontal padding
        paddingY={1}          // Vertical padding
        maxWidth="100%"        // Make it full-width
        minHeight="auto"       // Height adjusts to content
        align="center"         // Center content horizontally if container is wider
        // Reset other container defaults if needed
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        borderRadius={0}
        borderWidth={0}
        borderColor="#000000"
        boxShadow="none"
      >
        <Element
            is={Text}
            id="announcementText" // Optional unique ID for the inner text
            // --- Default Props for the Text ---
            text="📢 Special Announcement! Check out our new features! 📢"
            fontSize={14}
            textAlign="center"
            fontWeight="400"
            color="#ffffff"     // White text for contrast
            lineHeight={1.4}
            charSpacing={0}
            margin={0}
            padding={0}
            width="auto"        // Let text wrap naturally
        />
         {/* You could potentially add a default button here too if desired */}
         {/* <Element is={Button} ... /> */}
      </Element>
      {/* Render any children passed directly to AnnouncementBar (though usually none) */}
      {children}
    </div>
  );
};

// --- Craft.js Configuration for AnnouncementBar ---
AnnouncementBar.craft = {
  displayName: "Announcement Bar",
  // We don't need complex props directly on AnnouncementBar itself,
  // as styling is controlled by the inner Container and Text elements.
  props: {},
  // No custom settings needed here - users will edit the inner Container/Text
  related: {},
  // Rules can be added if needed, e.g., where it can be dropped
  rules: {
    // Example: can only be placed directly inside the main Frame/ROOT
    // canMoveIn: (incomingNodes, self, helper) => {
    //   return helper(self.data.parent).isROOT();
    // }
    //canDrag: () => true,
    canMoveIn: () => false,
  }
};