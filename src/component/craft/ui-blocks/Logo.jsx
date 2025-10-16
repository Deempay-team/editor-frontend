'use client';

import React from 'react';
import { useNode } from '@craftjs/core';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ColorPicker from '@/components/ui/ColorPicker.jsx';
import Image from 'next/image';
import Link from 'next/link';
import logoIcon from '../../../assets/icons/Group 247.svg';

export const Logo = ({
                         logoSrc = logoIcon,
                         logoAlt = 'Logo',
                         logoLink = '#',
                         logoText = 'My Brand',
                         logoTextColor = '#000000',
                         logoFontWeight = '700',
                         logoFontSize = '16px',
                         logoImageHeight = '32px',
                         logoImageFit = 'contain',
                         logoImageBorderRadius = 0,
                     }) => {
    const {
        connectors: { connect, drag },
    } = useNode();

    const logoContent = logoSrc ? (
        <Image
            src={logoSrc}
            alt={logoAlt}
            width={119}
            height={parseInt(logoImageHeight) || 32}
            style={{
                height: logoImageHeight,
                width: 'auto',
                objectFit: logoImageFit,
                borderRadius: `${logoImageBorderRadius}px`,
            }}
            className="max-w-[100px]"
        />
    ) : (
        <span
            style={{
                color: logoTextColor,
                fontWeight: logoFontWeight,
                fontSize: logoFontSize,
            }}
            className="inline-block"
        >
      {logoText || 'My Brand'}
    </span>
    );

    return (
        <div
            ref={(ref) => ref && connect(drag(ref))}
            className="logo inline-block"
        >
            {logoLink ? (
                <Link href={logoLink} className="inline-block">
                    {logoContent}
                </Link>
            ) : (
                logoContent
            )}
        </div>
    );
};

export const LogoSettings = () => {
    const {
        actions: { setProp },
        props,
    } = useNode((node) => ({
        props: node.data.props,
    }));

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProp((p) => {
                    p.logoSrc = reader.result;
                });
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please upload a valid image file.');
        }
    };

    const handleClearImage = () => {
        setProp((p) => {
            p.logoSrc = '';
        });
    };

    return (
        <Card>
            <CardContent className="space-y-4 mt-4">
                <Tabs defaultValue="content" className="w-full">
                    <TabsList className="w-full grid grid-cols-2">
                        <TabsTrigger value="content">Content</TabsTrigger>
                        <TabsTrigger value="style">Style</TabsTrigger>
                    </TabsList>

                    <TabsContent value="content" className="space-y-4 mt-4">
                        <div className="flex flex-col space-y-2">
                            <Label>Logo Text</Label>
                            <Input
                                value={props.logoText}
                                onChange={(e) => setProp((p) => (p.logoText = e.target.value))}
                                placeholder="Enter text or upload an image"
                                disabled={!!props.logoSrc}
                            />
                        </div>
                        <hr />
                        <div className="flex flex-col space-y-2">
                            <Label>Logo Alt Text</Label>
                            <Input
                                value={props.logoAlt}
                                onChange={(e) => setProp((p) => (p.logoAlt = e.target.value))}
                                placeholder="Enter logo alt text"
                                disabled={!props.logoSrc}
                            />
                        </div>
                        <hr />
                        <div className="flex flex-col space-y-2">
                            <Label>Upload Logo Image</Label>
                            <Input type="file" accept="image/*" onChange={handleFileUpload} />
                            {props.logoSrc && (
                                <div className="flex items-center gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={handleClearImage}
                                        className="text-red-500 border-red-300"
                                    >
                                        Clear Image
                                    </Button>
                                </div>
                            )}
                        </div>
                        <hr />
                        <div className="flex flex-col space-y-2">
                            <Label>Logo Link</Label>
                            <Input
                                value={props.logoLink}
                                onChange={(e) => setProp((p) => (p.logoLink = e.target.value))}
                                placeholder="Enter link URL"
                            />
                        </div>
                    </TabsContent>

                    <TabsContent value="style" className="space-y-4 mt-4">
                        <div className="space-y-2">
                            <Label>Font Size</Label>
                            <Select
                                value={props.logoFontSize}
                                onValueChange={(val) => setProp((p) => (p.logoFontSize = val))}
                                disabled={!!props.logoSrc}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="14px">14px</SelectItem>
                                    <SelectItem value="16px">16px</SelectItem>
                                    <SelectItem value="18px">18px</SelectItem>
                                    <SelectItem value="20px">20px</SelectItem>
                                    <SelectItem value="24px">24px</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <ColorPicker
                            label="Logo Text Color"
                            value={props.logoTextColor}
                            onChange={(val) => setProp((p) => (p.logoTextColor = val))}
                            disabled={!!props.logoSrc}
                        />
                        <div className="space-y-2">
                            <Label>Font Weight</Label>
                            <Select
                                value={props.logoFontWeight}
                                onValueChange={(val) => setProp((p) => (p.logoFontWeight = val))}
                                disabled={!!props.logoSrc}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="400">Normal</SelectItem>
                                    <SelectItem value="500">Medium</SelectItem>
                                    <SelectItem value="700">Bold</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <hr />
                        <div className="space-y-2">
                            <Label>Image Height</Label>
                            <div className="flex items-center gap-2">
                                <Slider
                                    value={[parseInt(props.logoImageHeight) || 32]}
                                    min={10}
                                    max={60}
                                    step={1}
                                    onValueChange={(v) =>
                                        setProp((p) => (p.logoImageHeight = `${v[0]}px`))
                                    }
                                    disabled={!props.logoSrc}
                                />
                                <Input
                                    type="number"
                                    min={10}
                                    max={60}
                                    className="w-18 h-8 text-right"
                                    value={parseInt(props.logoImageHeight) || 32}
                                    onChange={(e) =>
                                        setProp((p) => (p.logoImageHeight = `${parseInt(e.target.value)}px`))
                                    }
                                    disabled={!props.logoSrc}
                                />
                                <span className="text-sm text-gray-500">px</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label>Image Fit</Label>
                            <Select
                                value={props.logoImageFit}
                                onValueChange={(val) => setProp((p) => (p.logoImageFit = val))}
                                disabled={!props.logoSrc}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="fill">Fill</SelectItem>
                                    <SelectItem value="contain">Contain</SelectItem>
                                    <SelectItem value="cover">Cover</SelectItem>
                                    <SelectItem value="none">None</SelectItem>
                                    <SelectItem value="scale-down">Scale Down</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label>Image Corner Radius</Label>
                            <div className="flex items-center gap-2">
                                <Slider
                                    value={[props.logoImageBorderRadius || 0]}
                                    min={0}
                                    max={50}
                                    step={1}
                                    onValueChange={(v) =>
                                        setProp((p) => (p.logoImageBorderRadius = v[0]))
                                    }
                                    disabled={!props.logoSrc}
                                />
                                <Input
                                    type="number"
                                    min={0}
                                    max={50}
                                    className="w-18 h-8 text-right"
                                    value={props.logoImageBorderRadius || 0}
                                    onChange={(e) =>
                                        setProp((p) => (p.logoImageBorderRadius = parseInt(e.target.value)))
                                    }
                                    disabled={!props.logoSrc}
                                />
                                <span className="text-sm text-gray-500">px</span>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
};

Logo.craft = {
    displayName: 'Logo',
    props: {
        logoSrc: '',
        logoAlt: 'Logo',
        logoLink: '#',
        logoText: 'My Brand',
        logoTextColor: '#000000',
        logoFontWeight: '700',
        logoFontSize: '16px',
        logoImageHeight: '32px',
        logoImageFit: 'contain',
        logoImageBorderRadius: 0,
    },
    related: {
        settings: LogoSettings,
    },
    rules: {
        canDrag: () => true,
        canMoveIn: () => false,
        canMoveOut: () => true,
    },
};

// 'use client';
//
// import React from 'react';
// import { useNode } from '@craftjs/core';
// import { Card, CardContent } from '@/components/ui/card';
// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import {
//     Select,
//     SelectTrigger,
//     SelectValue,
//     SelectContent,
//     SelectItem,
// } from '@/components/ui/select';
// import { Slider } from '@/components/ui/slider';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import ColorPicker from '@/components/ui/ColorPicker.jsx';
// import Image from 'next/image';
// import Link from 'next/link';
// import logoIcon from '../../../assets/icons/Group 247.svg';
//
// export const Logo = ({
//                          logoSrc = logoIcon,
//                          logoAlt = 'Logo',
//                          logoLink = '#',
//                          logoText = 'My Brand',
//                          logoTextColor = '#000000',
//                          logoFontWeight = '700',
//                          logoFontSize = '16px',
//                          logoImageHeight = '32px',
//                          logoImageFit = 'contain',
//                          logoImageBorderRadius = 0,
//                      }) => {
//     const {
//         connectors: { connect, drag },
//     } = useNode();
//
//     // Conditionally render the logo as an image or text
//     const logoContent = logoSrc ? (
//         <Image
//             src={logoSrc}
//             alt={logoAlt}
//             width={119}
//             height={parseInt(logoImageHeight) || 32}
//             style={{
//                 height: logoImageHeight,
//                 width: 'auto',
//                 objectFit: logoImageFit,
//                 borderRadius: `${logoImageBorderRadius}px`,
//             }}
//             className="max-w-[100px] flex items-center gap-3"
//         />
//     ) : (
//         <span
//             style={{
//                 color: logoTextColor,
//                 fontWeight: logoFontWeight,
//                 fontSize: logoFontSize,
//             }}
//             className="inline-block"
//         >
//       {logoText || 'My Brand'}
//     </span>
//     );
//
//     return (
//         <div
//             ref={(ref) => ref && connect(drag(ref))}
//             className="logo inline-block"
//         >
//             {logoLink ? (
//                 <Link href={logoLink} className="inline-block">
//                     {logoContent}
//                 </Link>
//             ) : (
//                 logoContent
//             )}
//         </div>
//     );
// };
//
// export const LogoSettings = () => {
//     const {
//         actions: { setProp },
//         props,
//     } = useNode((node) => ({
//         props: node.data.props,
//     }));
//
//     const handleFileUpload = (e) => {
//         const file = e.target.files[0];
//         if (file && file.type.startsWith('image/')) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setProp((p) => {
//                     p.logoSrc = reader.result;
//                 });
//             };
//             reader.readAsDataURL(file);
//         } else {
//             alert('Please upload a valid image file.');
//         }
//     };
//
//     const handleClearImage = () => {
//         setProp((p) => {
//             p.logoSrc = '';
//         });
//     };
//
//     return (
//         <Card>
//             <CardContent className="space-y-4 mt-4">
//                 <Tabs defaultValue="content" className="w-full">
//                     <TabsList className="w-full grid grid-cols-2">
//                         <TabsTrigger value="content">Content</TabsTrigger>
//                         <TabsTrigger value="style">Style</TabsTrigger>
//                     </TabsList>
//
//                     <TabsContent value="content" className="space-y-4 mt-4">
//                         <div className="flex flex-col space-y-2">
//                             <Label>Logo Text</Label>
//                             <Input
//                                 value={props.logoText}
//                                 onChange={(e) => setProp((p) => (p.logoText = e.target.value))}
//                                 placeholder="Enter text or upload an image"
//                                 disabled={!!props.logoSrc}
//                             />
//                         </div>
//                         <hr />
//                         <div className="flex flex-col space-y-2">
//                             <Label>Logo Alt Text</Label>
//                             <Input
//                                 value={props.logoAlt}
//                                 onChange={(e) => setProp((p) => (p.logoAlt = e.target.value))}
//                                 placeholder="Enter logo alt text"
//                                 disabled={!props.logoSrc}
//                             />
//                         </div>
//                         <hr />
//                         <div className="flex flex-col space-y-2">
//                             <Label>Upload Logo Image</Label>
//                             <Input type="file" accept="image/*" onChange={handleFileUpload} />
//                             {props.logoSrc && (
//                                 <div className="flex items-center gap-2">
//                                     <Button
//                                         variant="outline"
//                                         size="sm"
//                                         onClick={handleClearImage}
//                                         className="text-red-500 border-red-300"
//                                     >
//                                         Clear Image
//                                     </Button>
//                                 </div>
//                             )}
//                         </div>
//                         <hr />
//                         <div className="flex flex-col space-y-2">
//                             <Label>Logo Link</Label>
//                             <Input
//                                 value={props.logoLink}
//                                 onChange={(e) => setProp((p) => (p.logoLink = e.target.value))}
//                                 placeholder="Enter link URL"
//                             />
//                         </div>
//                     </TabsContent>
//
//                     <TabsContent value="style" className="space-y-4 mt-4">
//                         <div className="space-y-2">
//                             <Label>Font Size</Label>
//                             <Select
//                                 value={props.logoFontSize}
//                                 onValueChange={(val) => setProp((p) => (p.logoFontSize = val))}
//                                 disabled={!!props.logoSrc}
//                             >
//                                 <SelectTrigger className="w-full">
//                                     <SelectValue placeholder="Select" />
//                                 </SelectTrigger>
//                                 <SelectContent>
//                                     <SelectItem value="14px">14px</SelectItem>
//                                     <SelectItem value="16px">16px</SelectItem>
//                                     <SelectItem value="18px">18px</SelectItem>
//                                     <SelectItem value="20px">20px</SelectItem>
//                                     <SelectItem value="24px">24px</SelectItem>
//                                 </SelectContent>
//                             </Select>
//                         </div>
//                         <ColorPicker
//                             label="Logo Text Color"
//                             value={props.logoTextColor}
//                             onChange={(val) => setProp((p) => (p.logoTextColor = val))}
//                             disabled={!!props.logoSrc}
//                         />
//                         <div className="space-y-2">
//                             <Label>Font Weight</Label>
//                             <Select
//                                 value={props.logoFontWeight}
//                                 onValueChange={(val) => setProp((p) => (p.logoFontWeight = val))}
//                                 disabled={!!props.logoSrc}
//                             >
//                                 <SelectTrigger className="w-full">
//                                     <SelectValue placeholder="Select" />
//                                 </SelectTrigger>
//                                 <SelectContent>
//                                     <SelectItem value="400">Normal</SelectItem>
//                                     <SelectItem value="500">Medium</SelectItem>
//                                     <SelectItem value="700">Bold</SelectItem>
//                                 </SelectContent>
//                             </Select>
//                         </div>
//                         <hr />
//                         <div className="space-y-2">
//                             <Label>Image Height</Label>
//                             <div className="flex items-center gap-2">
//                                 <Slider
//                                     value={[parseInt(props.logoImageHeight) || 32]}
//                                     min={10}
//                                     max={60}
//                                     step={1}
//                                     onValueChange={(v) =>
//                                         setProp((p) => (p.logoImageHeight = `${v[0]}px`))
//                                     }
//                                     disabled={!props.logoSrc}
//                                 />
//                                 <Input
//                                     type="number"
//                                     min={10}
//                                     max={60}
//                                     className="w-18 h-8 text-right"
//                                     value={parseInt(props.logoImageHeight) || 32}
//                                     onChange={(e) =>
//                                         setProp((p) => (p.logoImageHeight = `${parseInt(e.target.value)}px`))
//                                     }
//                                     disabled={!props.logoSrc}
//                                 />
//                                 <span className="text-sm text-gray-500">px</span>
//                             </div>
//                         </div>
//                         <div className="space-y-2">
//                             <Label>Image Fit</Label>
//                             <Select
//                                 value={props.logoImageFit}
//                                 onValueChange={(val) => setProp((p) => (p.logoImageFit = val))}
//                                 disabled={!props.logoSrc}
//                             >
//                                 <SelectTrigger className="w-full">
//                                     <SelectValue placeholder="Select" />
//                                 </SelectTrigger>
//                                 <SelectContent>
//                                     <SelectItem value="fill">Fill</SelectItem>
//                                     <SelectItem value="contain">Contain</SelectItem>
//                                     <SelectItem value="cover">Cover</SelectItem>
//                                     <SelectItem value="none">None</SelectItem>
//                                     <SelectItem value="scale-down">Scale Down</SelectItem>
//                                 </SelectContent>
//                             </Select>
//                         </div>
//                         <div className="space-y-2">
//                             <Label>Image Corner Radius</Label>
//                             <div className="flex items-center gap-2">
//                                 <Slider
//                                     value={[props.logoImageBorderRadius || 0]}
//                                     min={0}
//                                     max={50}
//                                     step={1}
//                                     onValueChange={(v) =>
//                                         setProp((p) => (p.logoImageBorderRadius = v[0]))
//                                     }
//                                     disabled={!props.logoSrc}
//                                 />
//                                 <Input
//                                     type="number"
//                                     min={0}
//                                     max={50}
//                                     className="w-18 h-8 text-right"
//                                     value={props.logoImageBorderRadius || 0}
//                                     onChange={(e) =>
//                                         setProp((p) => (p.logoImageBorderRadius = parseInt(e.target.value)))
//                                     }
//                                     disabled={!props.logoSrc}
//                                 />
//                                 <span className="text-sm text-gray-500">px</span>
//                             </div>
//                         </div>
//                     </TabsContent>
//                 </Tabs>
//             </CardContent>
//         </Card>
//     );
// };
//
// Logo.craft = {
//     displayName: 'Logo',
//     props: {
//         logoSrc: '',
//         logoAlt: 'Logo',
//         logoLink: '#',
//         logoText: 'My Brand',
//         logoTextColor: '#000000',
//         logoFontWeight: '700',
//         logoFontSize: '16px',
//         logoImageHeight: '32px',
//         logoImageFit: 'contain',
//         logoImageBorderRadius: 0,
//     },
//     related: {
//         settings: LogoSettings,
//     },
//     rules: {
//         canDrag: () => true,
//         canMoveIn: () => false,
//         canMoveOut: () => true,
//     },
// };


// // src/component/craft/ui-blocks/Logo.jsx
// import React from "react";
// import {useNode} from "@craftjs/core";
// import {Card, CardContent} from "@/components/ui/card";
// import {Label} from "@/components/ui/label";
// import {Input} from "@/components/ui/input";
// import {Button} from "@/components/ui/button";
// import {
//     Select,
//     SelectTrigger,
//     SelectValue,
//     SelectContent,
//     SelectItem,
// } from "@/components/ui/select";
// import {Slider} from "@/components/ui/slider";
// import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
// import ColorPicker from "@/components/ui/ColorPicker.jsx";
// import logoIcon from "../../../assets/icons/Group 247.svg";
//
// export const Logo = ({
//                          // logoSrc,
//                          logoSrc = logoIcon,
//                          logoAlt = 'Logo',
//
//                          logoLink,
//                          logoText,
//                          logoTextColor,
//                          logoFontWeight,
//                          logoFontSize,
//                          logoImageHeight,
//                          logoImageFit,
//                          logoImageBorderRadius,
//                      }) => {
//     const {
//         connectors: {connect, drag},
//     } = useNode();
//
//     return (
//         <div className="logo">
//         <Image
//             src={logoSrc}
//             alt={logoAlt}
//             width={119}
//             height={46}
//             className="w-[100px] h-auto"
//         />
//         </div>
//     )
// };
//
// export const LogoSettings = () => {
//     const {
//         actions: {setProp},
//         props,
//     } = useNode((node) => ({
//         props: node.data.props,
//     }));
//
//     const handleFileUpload = (e) => {
//         const file = e.target.files[0];
//         if (file && file.type.startsWith("image/")) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setProp((p) => {
//                     p.logoSrc = reader.result;
//                 });
//             };
//             reader.readAsDataURL(file);
//         } else {
//             alert("Please upload a valid image file.");
//         }
//     };
//
//     const handleClearImage = () => {
//         setProp((p) => {
//             p.logoSrc = "";
//         });
//     };
//
//     return (
//         <Card>
//             <CardContent className="space-y-4 mt-4">
//                 <Tabs defaultValue="content" className="w-full">
//                     <TabsList className="w-full grid grid-cols-2">
//                         <TabsTrigger value="content">Content</TabsTrigger>
//                         <TabsTrigger value="style">Style</TabsTrigger>
//                     </TabsList>
//
//                     <TabsContent value="content" className="space-y-4 mt-4">
//                         <div className="flex flex-col space-y-2">
//                             <Label>Logo Text</Label>
//                             <Input
//                                 value={props.logoText}
//                                 onChange={(e) => setProp((p) => (p.logoText = e.target.value))}
//                                 placeholder="Enter text or upload an image"
//                                 disabled={!!props.logoSrc}
//                             />
//                         </div>
//                         <hr/>
//                         <div className="flex flex-col space-y-2">
//                             <Label>Upload Logo Image</Label>
//                             <Input type="file" accept="image/*" onChange={handleFileUpload}/>
//                             {props.logoSrc && (
//                                 <div className="flex items-center gap-2">
//                                     <Button
//                                         variant="outline"
//                                         size="sm"
//                                         onClick={handleClearImage}
//                                         className="text-red-500 border-red-300"
//                                     >
//                                         Clear Image
//                                     </Button>
//                                 </div>
//                             )}
//                         </div>
//                         <hr/>
//                         <div className="flex flex-col space-y-2">
//                             <Label>Logo Link</Label>
//                             <Input
//                                 value={props.logoLink}
//                                 onChange={(e) => setProp((p) => (p.logoLink = e.target.value))}
//                             />
//                         </div>
//                     </TabsContent>
//
//                     <TabsContent value="style" className="space-y-4 mt-4">
//                         <div className="space-y-2">
//                             <Label>Font Size</Label>
//                             <Select
//                                 value={props.logoFontSize}
//                                 onValueChange={(val) => setProp((p) => (p.logoFontSize = val))}
//                                 disabled={!!props.logoSrc}
//                             >
//                                 <SelectTrigger className="w-full">
//                                     <SelectValue placeholder="Select"/>
//                                 </SelectTrigger>
//                                 <SelectContent>
//                                     <SelectItem value="14px">14px</SelectItem>
//                                     <SelectItem value="16px">16px</SelectItem>
//                                     <SelectItem value="18px">18px</SelectItem>
//                                     <SelectItem value="20px">20px</SelectItem>
//                                     <SelectItem value="24px">24px</SelectItem>
//                                 </SelectContent>
//                             </Select>
//                         </div>
//                         <ColorPicker
//                             label="Logo Text Color"
//                             value={props.logoTextColor}
//                             onChange={(val) => setProp((p) => (p.logoTextColor = val))}
//                             disabled={!!props.logoSrc}
//                         />
//                         <div className="space-y-2">
//                             <Label>Font Weight</Label>
//                             <Select
//                                 value={props.logoFontWeight}
//                                 onValueChange={(val) =>
//                                     setProp((p) => (p.logoFontWeight = val))
//                                 }
//                                 disabled={!!props.logoSrc}
//                             >
//                                 <SelectTrigger className="w-full">
//                                     <SelectValue placeholder="Select"/>
//                                 </SelectTrigger>
//                                 <SelectContent>
//                                     <SelectItem value="400">Normal</SelectItem>
//                                     <SelectItem value="500">Medium</SelectItem>
//                                     <SelectItem value="700">Bold</SelectItem>
//                                 </SelectContent>
//                             </Select>
//                         </div>
//                         <hr/>
//                         <div className="space-y-2">
//                             <Label>Image Height</Label>
//                             <div className="flex items-center gap-2">
//                                 <Slider
//                                     defaultValue={[parseInt(props.logoImageHeight)]}
//                                     min={10}
//                                     max={60}
//                                     step={1}
//                                     onValueChange={(v) =>
//                                         setProp((p) => (p.logoImageHeight = `${v[0]}px`))
//                                     }
//                                     disabled={!props.logoSrc}
//                                 />
//                                 <Input
//                                     type="number"
//                                     min={10}
//                                     max={60}
//                                     className="w-18 h-8 text-right"
//                                     value={parseInt(props.logoImageHeight)}
//                                     onChange={(e) =>
//                                         setProp(
//                                             (p) =>
//                                                 (p.logoImageHeight = `${parseInt(e.target.value)}px`)
//                                         )
//                                     }
//                                     disabled={!props.logoSrc}
//                                 />
//                                 <span className="text-sm text-gray-500">px</span>
//                             </div>
//                         </div>
//                         <div className="space-y-2">
//                             <Label>Image Fit</Label>
//                             <Select
//                                 value={props.logoImageFit}
//                                 onValueChange={(val) => setProp((p) => (p.logoImageFit = val))}
//                                 disabled={!props.logoSrc}
//                             >
//                                 <SelectTrigger className="w-full">
//                                     <SelectValue placeholder="Select"/>
//                                 </SelectTrigger>
//                                 <SelectContent>
//                                     <SelectItem value="fill">Fill</SelectItem>
//                                     <SelectItem value="contain">Contain</SelectItem>
//                                     <SelectItem value="cover">Cover</SelectItem>
//                                     <SelectItem value="none">None</SelectItem>
//                                     <SelectItem value="scale-down">Scale Down</SelectItem>
//                                 </SelectContent>
//                             </Select>
//                         </div>
//                         <div className="space-y-2">
//                             <Label>Image Corner Radius</Label>
//                             <div className="flex items-center gap-2">
//                                 <Slider
//                                     defaultValue={[props.logoImageBorderRadius]}
//                                     min={0}
//                                     max={50}
//                                     step={1}
//                                     onValueChange={(v) =>
//                                         setProp((p) => (p.logoImageBorderRadius = v[0]))
//                                     }
//                                     disabled={!props.logoSrc}
//                                 />
//                                 <Input
//                                     type="number"
//                                     min={0}
//                                     max={50}
//                                     className="w-18 h-8 text-right"
//                                     value={props.logoImageBorderRadius}
//                                     onChange={(e) =>
//                                         setProp(
//                                             (p) =>
//                                                 (p.logoImageBorderRadius = parseInt(e.target.value))
//                                         )
//                                     }
//                                     disabled={!props.logoSrc}
//                                 />
//                                 <span className="text-sm text-gray-500">px</span>
//                             </div>
//                         </div>
//                     </TabsContent>
//                 </Tabs>
//             </CardContent>
//         </Card>
//     );
// };
//
// Logo.craft = {
//     props: {
//         logoSrc: "",
//         logoLink: "#",
//         logoText: "My Brand",
//         logoTextColor: "#000000",
//         logoFontWeight: "700",
//         logoFontSize: "16px",
//         logoImageHeight: "32px",
//         logoImageFit: "contain",
//         logoImageBorderRadius: 0,
//     },
//     related: {
//         settings: LogoSettings,
//     },
// };
