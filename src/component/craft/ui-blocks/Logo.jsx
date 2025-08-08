// // components/Logo.js
// import React from "react";
// import { useNode } from "@craftjs/core";
// import { Card, CardContent } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
//
// export const Logo = ({ logoSrc, logoLink, logoText, logoTextColor, logoFontWeight }) => {
//     const { connectors: { connect, drag } } = useNode();
//
//     const renderLogoContent = () => {
//         if (logoText) {
//             return (
//                 <span style={{ color: logoTextColor, fontWeight: logoFontWeight }}>
//                     {logoText}
//                 </span>
//             );
//         } else if (logoSrc) {
//             return <img src={logoSrc} alt="Logo" className="h-8" />;
//         }
//         return (
//             <span style={{ color: "#000000", fontWeight: 700 }}>Logo</span>
//         );
//     };
//
//     return (
//         <a ref={ref => connect(drag(ref))} href={logoLink} className="flex-shrink-0">
//             {renderLogoContent()}
//         </a>
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
//     // This function simulates a file upload by setting a data URL.
//     // In a real application, you would upload the file to a server and get a public URL.
//     const handleFileUpload = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setProp((p) => (p.logoSrc = reader.result));
//             };
//             reader.readAsDataURL(file);
//         }
//     };
//
//     return (
//         <Card>
//             <CardContent className="space-y-4 mt-4">
//                 <Label>Logo Text</Label>
//                 <Input
//                     value={props.logoText}
//                     onChange={(e) => setProp((p) => (p.logoText = e.target.value))}
//                 />
//                 <div className="flex items-center justify-between">
//                     <Label>Logo Text Color</Label>
//                     <Input
//                         type="color"
//                         className="w-24"
//                         value={props.logoTextColor}
//                         onChange={(e) => setProp((p) => (p.logoTextColor = e.target.value))}
//                     />
//                 </div>
//                 <Label>Font Weight</Label>
//                 <Input
//                     type="number"
//                     value={props.logoFontWeight}
//                     min={100}
//                     max={900}
//                     step={100}
//                     onChange={(e) => setProp((p) => (p.logoFontWeight = Number(e.target.value)))}
//                 />
//                 <hr />
//                 <Label>Logo Image</Label>
//                 <Input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleFileUpload}
//                 />
//                 {props.logoSrc && (
//                     <div className="text-sm text-gray-500">
//                         Image uploaded. You can clear this by uploading a new one.
//                     </div>
//                 )}
//                 <Label>Logo Link</Label>
//                 <Input
//                     value={props.logoLink}
//                     onChange={(e) => setProp((p) => (p.logoLink = e.target.value))}
//                 />
//             </CardContent>
//         </Card>
//     );
// };
//
// Logo.craft = {
//     props: {
//         logoSrc: "", // Default to empty string for image
//         logoLink: "#",
//         logoText: "My Brand", // Default to text
//         logoTextColor: "#000000",
//         logoFontWeight: 700,
//     },
//     related: {
//         settings: LogoSettings,
//     },
// };

import React from "react";
import {useNode} from "@craftjs/core";
import {Card, CardContent} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export const Logo = ({
                         logoSrc,
                         logoLink,
                         logoText,
                         logoTextColor,
                         logoFontWeight,
                     }) => {
    const {
        connectors: {connect, drag},
    } = useNode();

    const renderLogoContent = () => {
        if (logoSrc) {
            return <img src={logoSrc} alt="Logo" className="h-8"/>;
        } else if (logoText) {
            return (
                <span style={{color: logoTextColor, fontWeight: logoFontWeight}}>
          {logoText}
        </span>
            );
        }
        return <span style={{color: "#000000", fontWeight: 700}}>Logo</span>;
    };

    return (
        <a
            ref={(ref) => connect(drag(ref))}
            href={logoLink}
            className="flex-shrink-0"
        >
            {renderLogoContent()}
        </a>
    );
};

export const LogoSettings = () => {
    const {
        actions: {setProp},
        props,
    } = useNode((node) => ({
        props: node.data.props,
    }));

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProp((p) => {
                    p.logoSrc = reader.result;
                    p.logoText = "";
                });
            };
            reader.readAsDataURL(file);
        } else {
            alert("Please upload a valid image file.");
        }
    };

    const handleClearImage = () => {
        setProp((p) => {
            p.logoSrc = "";
        });
    };

    return (
        <Card>
            <CardContent className="space-y-4 mt-4">
                <Label>Logo Text</Label>
                <Input
                    value={props.logoText}
                    onChange={(e) => setProp((p) => (p.logoText = e.target.value))}
                    placeholder="Leave empty to use image"
                />

                <div className="flex items-center justify-between">
                    <Label>Logo Text Color</Label>
                    <Input
                        type="color"
                        className="w-24"
                        value={props.logoTextColor}
                        onChange={(e) => setProp((p) => (p.logoTextColor = e.target.value))}
                    />
                </div>

                <Label>Font Weight</Label>
                <Input
                    type="text"
                    value={props.logoFontWeight}
                    min={100}
                    max={900}
                    step={100}
                    onChange={(e) =>
                        setProp((p) => (p.logoFontWeight = Number(e.target.value)))
                    }
                />

                <hr/>

                <Label>Upload Logo Image</Label>
                <Input type="file" accept="image/*" onChange={handleFileUpload}/>

                {props.logoSrc && (
                    <div className="space-y-2">
                        <img
                            src={props.logoSrc}
                            alt="Preview"
                            className="h-12 rounded border"
                        />
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

                <Label>Logo Link</Label>
                <Input
                    value={props.logoLink}
                    onChange={(e) => setProp((p) => (p.logoLink = e.target.value))}
                />
            </CardContent>
        </Card>
    );
};

Logo.craft = {
    props: {
        logoSrc: "",
        logoLink: "#",
        logoText: "My Brand",
        logoTextColor: "#000000",
        logoFontWeight: 700,
    },
    related: {
        settings: LogoSettings,
    },
};
