// import React, { useRef, useState,useEffect } from "react";
// import { useNode, Element } from "@craftjs/core";
//
// // Import your existing user components
// import { Container, ContainerSettings } from "../user/Container"; // Adjust path if needed
// import { Image, ImageSettings } from "../user/Image";             // Adjust path if needed
// import { Button, ButtonSettings } from "../user/Button";         // Adjust path if needed
// import { Text } from "../user/Text"; // Adjust path as needed
//
//
// import { Card, CardContent } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Slider } from "@/components/ui/slider";
// import { HexColorPicker as ColorPicker } from "react-colorful";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Switch } from "@/components/ui/switch"; // Assuming you have this
// import ContentEditable from "react-contenteditable";
//
// // --- Navigation Bar Component ---
//
// export const NavigationBar = ({
//                                   background,
//                                   paddingX,
//                                   paddingY,
//                                   margin,
//                                   borderRadius,
//                                   borderWidth,
//                                   borderColor,
//                                   boxShadow,
//                                   minHeight,
//                                   maxWidth,
//                                   align, // Container alignment
//                                   justifyContent, // Justify content for nav items
//                                   alignItems, // Align items for nav items
//                                   gap, // Gap between nav items
//                                   wrap, // Allow wrapping on smaller screens
//                                   logoSrc,
//                                   logoAlt,
//                                   logoWidth,
//                                   logoHeight,
//                                   logoLink,
//                                   showCtaButton,
//                                   ctaButtonText,
//                                   ctaButtonLink,
//                                   ctaOpenInNewTab,
//                               }) => {
//     const {
//         connectors: { connect, drag },
//     } = useNode();
//
//     const [isMobile, setIsMobile] = useState(false);
//
//     useEffect(() => {
//         const checkMobile = () => setIsMobile(window.innerWidth < 768);
//         checkMobile();
//         window.addEventListener("resize", checkMobile);
//         return () => window.removeEventListener("resize", checkMobile);
//     }, []);
//
//     return (
//         <Element is="div" id="navbar" canvas ref={(ref) => connect(drag(ref))}>
//             <Element id="navbar-dlogo" is={Container} canvas
//                 //   ref={(ref) => connect(drag(ref))} // Make the whole navbar draggable
//                      background={background}
//                      paddingX={paddingX}
//                      paddingY={paddingY}
//                      margin={margin}
//                      borderRadius={borderRadius}
//                      borderWidth={borderWidth}
//                      borderColor={borderColor}
//                      boxShadow={boxShadow}
//                      minHeight={minHeight}
//                      maxWidth={maxWidth}
//                      align={align} // This aligns the container itself if nested
//                 // Add flexbox styles for internal layout
//                      style={{
//                          display: 'flex',
//                          justifyContent: justifyContent,
//                          alignItems: alignItems,
//                          flexWrap: wrap ? 'wrap' : 'nowrap', // Control wrapping
//                          gap: `${gap}px`, // Gap between items
//                          width: '100%', // Ensure it takes full width available
//                          padding: `${paddingY}px ${paddingX}px`, // Padding for the container
//                      }}
//                 // style={{
//                 //     display: 'flex',
//                 //     justifyContent: isMobile ? 'center' : justifyContent,
//                 //     alignItems: alignItems,
//                 //     flexWrap: wrap ? 'wrap' : 'nowrap',
//                 //     gap: `${gap}px`,
//                 //     width: '100%',
//                 //     padding: `${paddingY}px ${paddingX}px`,
//                 //     // flexDirection: 'row',
//                 //     flexDirection: isMobile ? 'column' : 'row',
//                 //     // flexDirection: typeof window !== "undefined" && window.innerWidth < 768 ? 'column' : 'row',
//                 //     textAlign: isMobile ? 'center' : 'left',
//                 //   }}
//
//             >
//                 {/* Logo Area - Use Canvas to make Image editable */}
//                 <Element id="navbar-logo" is='div' canvas
//                          paddingX={0} paddingY={0} margin={{ top: 0, right: 0, bottom: 0, left: 0 }} background="transparent"
//                     // Add flex-shrink: 0 to prevent logo from shrinking
//                          style={{ flexShrink: 0 }}
//                 >
//                     <Image
//                         src={logoSrc}
//                         alt={logoAlt}
//                         width={logoWidth}
//                         height={logoHeight}
//                         link={logoLink}
//                         // Default image settings (can be overridden in editor)
//                         borderRadius={0}
//                         alignment="left"
//                         fit="contain"
//                         position="center"
//                         aspectRatio={logoWidth / logoHeight || 1}
//                     />
//                 </Element>
//
//                 {/* Navigation Links Area - Use Canvas to allow adding/editing Text/Button links */}
//                 {/* This inner container helps group the links */}
//                 <Element id="navbar-lindks" is='div' canvas
//                          paddingX={0} paddingY={0} margin={{ top: 0, right: 0, bottom: 0, left: 0 }} background="transparent"
//                     // Flex grow allows links to take available space
//                     // Use flexbox internally for links as well
//                          style={{
//                              display: 'flex',
//                              flexGrow: 1,
//                              justifyContent: 'flex-start', // Align links to the start by default
//                              alignItems: 'center',
//                              gap: '15px', // Default gap between links
//                              flexWrap: 'wrap', // Allow links to wrap too
//                          }}
//                     // style={{
//                     //     display: 'flex',
//                     //     flexDirection: isMobile ?  'column' : 'row',
//                     //     flexGrow: 1,
//                     //     justifyContent: isMobile ? 'center' : 'flex-start',
//                     //     alignItems: 'center',
//                     //     gap: '15px',
//                     //     flexWrap: 'wrap',
//                     //     width: '100%',
//                     //   }}
//
//                 >
//                     {/* Default Nav Links (Users can modify/add more in the editor) */}
//                     <Text text="Home" fontSize={16} textAlign="left" />
//                     <Text text="About" fontSize={16} textAlign="left" />
//                     <Text text="Contact" fontSize={16} textAlign="left" />
//                 </Element>
//
//                 //add cta button
//                 {showCtaButton && (
//                     <Element id="navbar-cta" is={Button} canvas
//                              paddingX={10} paddingY={5} margin={{ top: 0, right: 0, bottom: 0, left: 0 }} background="transparent"
//                         // Add flex-shrink: 0 to prevent logo from shrinking
//                              style={{ flexShrink: 0 }}
//                              text={ctaButtonText}
//                              link={ctaButtonLink}
//                              openInNewTab={ctaOpenInNewTab}
//                     />
//                 )}
//
//             </Element>
//         </Element>
//     );
// };
//
// // --- Navigation Bar Settings ---
//
// export const NavigationBarSettings = () => {
//     const {
//         actions: { setProp },
//         props,
//         // Destructure all props used in NavigationBar
//         background, paddingX, paddingY, margin, borderRadius, borderWidth, borderColor, boxShadow, minHeight, maxWidth, align, justifyContent, alignItems, gap, wrap, logoSrc, logoAlt, logoWidth, logoHeight, logoLink, showCtaButton, ctaButtonText, ctaButtonLink, ctaOpenInNewTab
//     } = useNode((node) => ({
//         props: node.data.props, // Get all props
//         // Explicitly list props for easier access if needed, otherwise props.* works
//         background: node.data.props.background,
//         paddingX: node.data.props.paddingX,
//         paddingY: node.data.props.paddingY,
//         margin: node.data.props.margin,
//         borderRadius: node.data.props.borderRadius,
//         borderWidth: node.data.props.borderWidth,
//         borderColor: node.data.props.borderColor,
//         boxShadow: node.data.props.boxShadow,
//         minHeight: node.data.props.minHeight,
//         maxWidth: node.data.props.maxWidth,
//         align: node.data.props.align,
//         justifyContent: node.data.props.justifyContent,
//         alignItems: node.data.props.alignItems,
//         gap: node.data.props.gap,
//         wrap: node.data.props.wrap,
//         logoSrc: node.data.props.logoSrc,
//         logoAlt: node.data.props.logoAlt,
//         logoWidth: node.data.props.logoWidth,
//         logoHeight: node.data.props.logoHeight,
//         logoLink: node.data.props.logoLink,
//         showCtaButton: node.data.props.showCtaButton,
//         ctaButtonText: node.data.props.ctaButtonText,
//         ctaButtonLink: node.data.props.ctaButtonLink,
//         ctaOpenInNewTab: node.data.props.ctaOpenInNewTab,
//     }));
//
//     // Use HexColorPicker if available, otherwise use standard color input
//     const ColorPicker = (window.ReactColorful && window.ReactColorful.HexColorPicker) || (({ color, onChange }) => <Input type="color" value={color} onChange={e => onChange(e.target.value)} />);
//
//
//     return (
//         <Card>
//             <CardContent className="space-y-4 mt-4">
//                 {/* --- Container Settings --- */}
//                 <Label className="font-semibold">Layout & Styling</Label>
//
//                 <Label>Background Color</Label>
//                 {/* Basic color input as fallback */}
//                 <Input type="color" value={background} onChange={(e) => setProp((props) => (props.background = e.target.value))} className="w-full h-10"/>
//                 {/* Uncomment if HexColorPicker is globally available or imported properly */}
//                 {/* <ColorPicker color={background} onChange={(color) => setProp((props) => (props.background = color))} /> */}
//
//
//                 <Label>Padding X (Left/Right)</Label>
//                 <Slider defaultValue={[paddingX]} min={0} max={100} step={1} onValueChange={(value) => setProp((props) => (props.paddingX = value[0]))} />
//
//                 <Label>Padding Y (Top/Bottom)</Label>
//                 <Slider defaultValue={[paddingY]} min={0} max={100} step={1} onValueChange={(value) => setProp((props) => (props.paddingY = value[0]))} />
//
//                 <Label>Gap Between Items</Label>
//                 <Slider defaultValue={[gap]} min={0} max={50} step={1} onValueChange={(value) => setProp((props) => (props.gap = value[0]))} />
//
//                 <Label>Justify Content (Main Axis)</Label>
//                 <Select onValueChange={(value) => setProp((props) => (props.justifyContent = value))} defaultValue={justifyContent}>
//                     <SelectTrigger className="w-full"><SelectValue placeholder="Flex Start" /></SelectTrigger>
//                     <SelectContent>
//                         <SelectItem value="flex-start">Start</SelectItem>
//                         <SelectItem value="center">Center</SelectItem>
//                         <SelectItem value="flex-end">End</SelectItem>
//                         <SelectItem value="space-between">Space Between</SelectItem>
//                         <SelectItem value="space-around">Space Around</SelectItem>
//                         <SelectItem value="space-evenly">Space Evenly</SelectItem>
//                     </SelectContent>
//                 </Select>
//
//                 <Label>Align Items (Cross Axis)</Label>
//                 <Select onValueChange={(value) => setProp((props) => (props.alignItems = value))} defaultValue={alignItems}>
//                     <SelectTrigger className="w-full"><SelectValue placeholder="Center" /></SelectTrigger>
//                     <SelectContent>
//                         <SelectItem value="flex-start">Start</SelectItem>
//                         <SelectItem value="center">Center</SelectItem>
//                         <SelectItem value="flex-end">End</SelectItem>
//                         <SelectItem value="stretch">Stretch</SelectItem>
//                         <SelectItem value="baseline">Baseline</SelectItem>
//                     </SelectContent>
//                 </Select>
//
//                 <div className="flex items-center justify-between">
//                     <Label htmlFor="wrap-switch">Wrap Items</Label>
//                     <Switch
//                         id="wrap-switch"
//                         checked={wrap}
//                         onCheckedChange={(checked) => setProp((props) => (props.wrap = checked))}
//                     />
//                 </div>
//
//                 <Label>Border Radius</Label>
//                 <Slider defaultValue={[borderRadius]} min={0} max={50} step={1} onValueChange={(value) => setProp((props) => (props.borderRadius = value[0]))} />
//
//                 {/* --- Logo Settings --- */}
//                 <Label className="font-semibold mt-4">Logo</Label>
//                 <Label>Logo Image URL</Label>
//                 <Input value={logoSrc} onChange={(e) => setProp((props) => (props.logoSrc = e.target.value))} placeholder="https://..." />
//                 <Label>Logo Alt Text</Label>
//                 <Input value={logoAlt} onChange={(e) => setProp((props) => (props.logoAlt = e.target.value))} placeholder="Logo Description" />
//                 <Label>Logo Width (px)</Label>
//                 <Slider defaultValue={[logoWidth]} min={20} max={300} step={5} onValueChange={(value) => setProp((props) => (props.logoWidth = value[0]))} />
//                 <Label>Logo Height (px)</Label>
//                 <Slider defaultValue={[logoHeight]} min={20} max={150} step={5} onValueChange={(value) => setProp((props) => (props.logoHeight = value[0]))} />
//                 <Label>Logo Link URL</Label>
//                 <Input value={logoLink} onChange={(e) => setProp((props) => (props.logoLink = e.target.value))} placeholder="https://..." />
//
//
//                 {/* --- CTA Button Settings --- */}
//                 <Label className="font-semibold mt-4">CTA Button</Label>
//                 <div className="flex items-center justify-between">
//                     <Label htmlFor="cta-switch">Show CTA Button</Label>
//                     <Switch
//                         id="cta-switch"
//                         checked={showCtaButton}
//                         onCheckedChange={(checked) => setProp((props) => (props.showCtaButton = checked))}
//                     />
//                 </div>
//
//                 {showCtaButton && (
//                     <>
//                         <Label>CTA Button Text</Label>
//                         <Input value={ctaButtonText} onChange={(e) => setProp((props) => (props.ctaButtonText = e.target.value))} />
//                         <Label>CTA Button Link URL</Label>
//                         <Input value={ctaButtonLink} onChange={(e) => setProp((props) => (props.ctaButtonLink = e.target.value))} placeholder="https://..." />
//                         <div className="flex items-center justify-between">
//                             <Label htmlFor="cta-tab-switch">Open Link in New Tab</Label>
//                             <Switch
//                                 id="cta-tab-switch"
//                                 checked={ctaOpenInNewTab}
//                                 onCheckedChange={(checked) => setProp((props) => (props.ctaOpenInNewTab = checked))}
//                             />
//                         </div>
//                     </>
//                 )}
//
//                 {/* Add other Container settings if needed (margin, border, shadow etc.) */}
//                 {/* These are inherited from the Container component but could be exposed here too */}
//
//             </CardContent>
//         </Card>
//     );
// };
//
// // --- Craft.js Configuration ---
//
// NavigationBar.craft = {
//     props: {
//         // Default Container Props
//         background: "#ffffff", // Default white background
//         paddingX: 4,          // Default horizontal padding
//         paddingY: 10,          // Default vertical padding
//         margin: { top: 0, right: 0, bottom: 0, left: 0 },
//         borderRadius: 0,
//         borderWidth: 0,
//         borderColor: "#000000",
//         boxShadow: "none", // Example: "0 2px 4px rgba(0,0,0,0.1)"
//         minHeight: "50px",     // Default min height
//         maxWidth: "1200px",    // Max width for content within the navbar
//         align: "center",       // Center the container itself (if needed within another container)
//
//         // Flexbox Props for internal layout
//         justifyContent: "space-between", // Pushes logo left, links middle, CTA right
//         alignItems: "center",            // Vertically center items
//         gap: 15,                         // Default gap between logo, links, cta
//         wrap: true,                      // Allow wrapping by default
//
//         // Default Logo Props
//         logoSrc: "https://placehold.co/120x50/cccccc/ffffff?text=Logo", // Placeholder logo
//         logoAlt: "Company Logo",
//         logoWidth: 120,
//         logoHeight: 50,
//         logoLink: "#", // Link to homepage usually
//         showCtaButton: true,
//         ctaButtonText : "Sign in",
//         ctaButtonLink : "#",
//         ctaOpenInNewTab : false,
//
//     },
//     related: {
//         settings: NavigationBarSettings, // Link the settings panel
//     },
//     displayName: "Navigation Bar", // Name shown in the Craft.js editor
// };



//
// import React, { useState, useEffect } from "react";
// import { useNode } from "@craftjs/core";
// import { Card, CardContent } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Slider } from "@/components/ui/slider";
// import { Switch } from "@/components/ui/switch";
// import { Button } from "@/components/ui/button";
// import { Menu, Search, User, ShoppingCart, Trash2, Plus } from "lucide-react";
//
// export const NavigationBar = ({
//                                   logoSrc,
//                                   logoLink,
//                                   menuItems,
//                                   showSearch,
//                                   showAccount,
//                                   showCart,
//                                   cartCount,
//                                   backgroundColor,
//                                   paddingY,
//                                   paddingX,
//                               }) => {
//     const {
//         connectors: { connect, drag },
//     } = useNode();
//     const [isMobile, setIsMobile] = useState(false);
//     const [menuOpen, setMenuOpen] = useState(false);
//
//     useEffect(() => {
//         const checkMobile = () => setIsMobile(window.innerWidth < 768);
//         checkMobile();
//         window.addEventListener("resize", checkMobile);
//         return () => window.removeEventListener("resize", checkMobile);
//     }, []);
//
//     return (
//         <div
//             ref={(ref) => connect(drag(ref))}
//             className="w-full border-b"
//             style={{
//                 backgroundColor,
//                 padding: `${paddingY}px ${paddingX}px`,
//             }}
//         >
//             <div className="max-w-7xl mx-auto flex items-center justify-between">
//                 {/* Mobile: Hamburger */}
//                 {isMobile && (
//                     <button onClick={() => setMenuOpen(!menuOpen)} className="mr-2">
//                         <Menu className="w-6 h-6" />
//                     </button>
//                 )}
//
//                 {/* Logo */}
//                 <a href={logoLink} className="flex-shrink-0">
//                     <img src={logoSrc} alt="Logo" className="h-8" />
//                 </a>
//
//                 {/* Desktop Menu */}
//                 {!isMobile && (
//                     <nav className="flex space-x-6">
//                         {menuItems.map((item, i) => (
//                             <a
//                                 key={i}
//                                 href={item.link}
//                                 className={`text-sm hover:text-orange-500 ${
//                                     item.active ? "text-orange-500 font-semibold" : ""
//                                 }`}
//                             >
//                                 {item.label}
//                             </a>
//                         ))}
//                     </nav>
//                 )}
//
//                 <div className="flex items-center space-x-4">
//                     {showSearch && <Search className="w-5 h-5 cursor-pointer" />}
//                     {showAccount && <User className="w-5 h-5 cursor-pointer" />}
//                     {showCart && (
//                         <div className="relative cursor-pointer">
//                             <ShoppingCart className="w-5 h-5" />
//                             {cartCount > 0 && (
//                                 <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-1.5 rounded-full">
//                   {cartCount}
//                 </span>
//                             )}
//                         </div>
//                     )}
//                 </div>
//             </div>
//
//             {isMobile && menuOpen && (
//                 <div className="mt-4 flex flex-col space-y-3 border-t pt-3">
//                     {menuItems.map((item, i) => (
//                         <a
//                             key={i}
//                             href={item.link}
//                             className={`text-sm hover:text-orange-500 ${
//                                 item.active ? "text-orange-500 font-semibold" : ""
//                             }`}
//                         >
//                             {item.label}
//                         </a>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export const NavigationBarSettings = () => {
//     const {
//         actions: { setProp },
//         props,
//     } = useNode((node) => ({
//         props: node.data.props,
//     }));
//
//     const addMenuItem = () => {
//         setProp((p) => {
//             p.menuItems = [
//                 ...p.menuItems,
//                 { label: "New Item", link: "#", active: false },
//             ];
//         });
//     };
//
//     const updateMenuItem = (index, field, value) => {
//         setProp((p) => {
//             const newMenuItems = [...p.menuItems];
//             newMenuItems[index] = { ...newMenuItems[index], [field]: value };
//             p.menuItems = newMenuItems;
//         });
//     };
//
//     const removeMenuItem = (index) => {
//         setProp((p) => {
//             p.menuItems = p.menuItems.filter((_, i) => i !== index);
//         });
//     };
//
//     return (
//         <Card>
//             <CardContent className="space-y-4 mt-4">
//                 <Label>Logo URL</Label>
//                 <Input
//                     value={props.logoSrc}
//                     onChange={(e) => setProp((p) => (p.logoSrc = e.target.value))}
//                 />
//
//                 <Label>Logo Link</Label>
//                 <Input
//                     value={props.logoLink}
//                     onChange={(e) => setProp((p) => (p.logoLink = e.target.value))}
//                 />
//
//                 <Label>Background Color</Label>
//                 <Input
//                     type="color"
//                     value={props.backgroundColor}
//                     onChange={(e) => setProp((p) => (p.backgroundColor = e.target.value))}
//                 />
//
//                 <Label>Padding X</Label>
//                 <Slider
//                     defaultValue={[props.paddingX]}
//                     min={0}
//                     max={50}
//                     step={1}
//                     onValueChange={(v) => setProp((p) => (p.paddingX = v[0]))}
//                 />
//
//                 <Label>Padding Y</Label>
//                 <Slider
//                     defaultValue={[props.paddingY]}
//                     min={0}
//                     max={50}
//                     step={1}
//                     onValueChange={(v) => setProp((p) => (p.paddingY = v[0]))}
//                 />
//
//                 <div className="flex items-center justify-between">
//                     <Label>Show Search</Label>
//                     <Switch
//                         checked={props.showSearch}
//                         onCheckedChange={(v) => setProp((p) => (p.showSearch = v))}
//                     />
//                 </div>
//
//                 <div className="flex items-center justify-between">
//                     <Label>Show Account</Label>
//                     <Switch
//                         checked={props.showAccount}
//                         onCheckedChange={(v) => setProp((p) => (p.showAccount = v))}
//                     />
//                 </div>
//
//                 <div className="flex items-center justify-between">
//                     <Label>Show Cart</Label>
//                     <Switch
//                         checked={props.showCart}
//                         onCheckedChange={(v) => setProp((p) => (p.showCart = v))}
//                     />
//                 </div>
//
//                 <Label>Cart Count</Label>
//                 <Slider
//                     defaultValue={[props.cartCount]}
//                     min={0}
//                     max={20}
//                     step={1}
//                     onValueChange={(v) => setProp((p) => (p.cartCount = v[0]))}
//                 />
//
//                 <div className="space-y-2">
//                     <div className="flex justify-between items-center">
//                         <Label>Menu Items</Label>
//                         <Button size="sm" onClick={addMenuItem}>
//                             <Plus className="w-4 h-4 mr-1" /> Add Item
//                         </Button>
//                     </div>
//                     {props.menuItems.map((item, index) => (
//                         <div key={index} className="border p-3 rounded-md space-y-2">
//                             <div className="flex justify-between items-center">
//                                 <Label>Menu Item {index + 1}</Label>
//                                 <Button
//                                     variant="ghost"
//                                     size="sm"
//                                     onClick={() => removeMenuItem(index)}
//                                 >
//                                     <Trash2 className="w-4 h-4 text-red-500" />
//                                 </Button>
//                             </div>
//                             <Label>Label</Label>
//                             <Input
//                                 value={item.label}
//                                 onChange={(e) => updateMenuItem(index, "label", e.target.value)}
//                             />
//                             <Label>Link</Label>
//                             <Input
//                                 value={item.link}
//                                 onChange={(e) => updateMenuItem(index, "link", e.target.value)}
//                             />
//                             <div className="flex items-center justify-between">
//                                 <Label>Active</Label>
//                                 <Switch
//                                     checked={item.active}
//                                     onCheckedChange={(v) => updateMenuItem(index, "active", v)}
//                                 />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </CardContent>
//         </Card>
//     );
// };
//
// NavigationBar.craft = {
//     props: {
//         logoSrc: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Coca-Cola_logo.svg",
//         logoLink: "#",
//         menuItems: [
//             { label: "Home", link: "#", active: true },
//             { label: "Products", link: "#", active: false },
//             { label: "Contact", link: "#", active: false },
//             { label: "About us", link: "#", active: false },
//         ],
//         showSearch: true,
//         showAccount: true,
//         showCart: true,
//         cartCount: 1,
//         backgroundColor: "#ffffff",
//         paddingX: 20,
//         paddingY: 10,
//     },
//     related: {
//         settings: NavigationBarSettings,
//     },
// };


import React, { useState, useEffect } from "react";
import { useNode, Canvas } from "@craftjs/core";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Menu } from "lucide-react";
import { Logo } from "./Logo";
import { MenuItems } from "./MenuItems";
import { IconButtons } from "./IconButtons";

export const NavigationBar = ({ backgroundColor, paddingY, paddingX }) => {
    const {
        connectors: { connect, drag },
    } = useNode();
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <div
            ref={(ref) => connect(drag(ref))}
            className="w-full border-b"
            style={{
                backgroundColor,
                padding: `${paddingY}px ${paddingX}px`,
            }}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Mobile: Hamburger */}
                {isMobile && (
                    <button onClick={() => setMenuOpen(!menuOpen)} className="mr-2">
                        <Menu className="w-6 h-6" />
                    </button>
                )}

                {/* Logo Area */}
                <Canvas id="logo_area" is={Logo}>
                    <Logo />
                </Canvas>

                {/* Desktop Menu */}
                {!isMobile && (
                    <Canvas id="menu_area" is={MenuItems}>
                        <MenuItems />
                    </Canvas>
                )}

                {/* Icons Area */}
                <Canvas id="icons_area" is={IconButtons}>
                    <IconButtons />
                </Canvas>
            </div>

            {isMobile && menuOpen && (
                <div className="mt-4 flex flex-col space-y-3 border-t pt-3">
                    {/* Mobile Menu */}
                    <Canvas id="mobile_menu_area" is={MenuItems} >
                        <MenuItems />
                    </Canvas>
                </div>
            )}
        </div>
    );
};

export const NavigationBarSettings = () => {
    const {
        actions: { setProp },
        props,
    } = useNode((node) => ({
        props: node.data.props,
    }));

    return (
        <Card>
            <CardContent className="space-y-4 mt-4">
                <Label>Background Color</Label>
                <Input
                    type="color"
                    value={props.backgroundColor}
                    onChange={(e) => setProp((p) => (p.backgroundColor = e.target.value))}
                />
                <Label>Padding X</Label>
                <Slider
                    defaultValue={[props.paddingX]}
                    min={0}
                    max={50}
                    step={1}
                    onValueChange={(v) => setProp((p) => (p.paddingX = v[0]))}
                />
                <Label>Padding Y</Label>
                <Slider
                    defaultValue={[props.paddingY]}
                    min={0}
                    max={50}
                    step={1}
                    onValueChange={(v) => setProp((p) => (p.paddingY = v[0]))}
                />
            </CardContent>
        </Card>
    );
};

NavigationBar.craft = {
    props: {
        backgroundColor: "#ffffff",
        paddingX: 20,
        paddingY: 10,
    },
    related: {
        settings: NavigationBarSettings,
    },
};