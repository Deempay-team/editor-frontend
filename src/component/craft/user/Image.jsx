// import React from "react";
// import { useNode } from "@craftjs/core";
// import { Button as ShadButton } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Slider } from "@/components/ui/slider";
// import { HexColorPicker as ColorPicker } from "react-colorful";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


// export const Image = ({ src, alt, width, height, borderRadius, alignment, fit, position, aspectRatio, link }) => {
//   const {
//     connectors: { connect, drag },
//   } = useNode();

//   // <a href={link} target="_blank" rel="noopener noreferrer"> href={link || "#"}
//   return (
//     <a  target="_blank" rel="noopener noreferrer"> 
//       <img
//         ref={(ref) => connect(drag(ref))}
//         src={src}
//         alt={alt}
//         style={{
//           width: alignment === "fill" ? "100%" : `${width}px`,
//           height: `${height}px`,
//           borderRadius: `${borderRadius}px`,
//           objectFit: fit,
//           objectPosition: position,
//           aspectRatio,
//           display: "block",
//           margin: alignment === "center" ? "0 auto" : alignment === "right" ? "0 0 0 auto" : "0",
//         }}
//       />
//     </a>
//   );
// };

// export const ImageSettings = () => {
//   const {
//     actions: { setProp },
//     props,
//   } = useNode((node) => ({
//     props: node.data.props,
//   }));

//   return (
//     <Card>
//       <CardContent className="space-y-4">
//         <Label>Image URL</Label>
//         <Input value={props.src} onChange={(e) => setProp((props) => (props.src = e.target.value))} />

//         <Label>Alt Text</Label>
//         <Input value={props.alt} onChange={(e) => setProp((props) => (props.alt = e.target.value))} />

//         <Label>Width</Label>
//         <Slider defaultValue={[props.width]} min={50} max={800} step={10} onValueChange={(value) => setProp((props) => (props.width = value[0]))} />

//         <Label>Height</Label>
//         <Slider defaultValue={[props.height]} min={50} max={800} step={10} onValueChange={(value) => setProp((props) => (props.height = value[0]))} />

//         <Label>Border Radius</Label>
//         <Slider defaultValue={[props.borderRadius]} min={0} max={100} step={1} onValueChange={(value) => setProp((props) => (props.borderRadius = value[0]))} />

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

//         {/* <Label>Image Fit</Label>
//         <Select value={props.fit} onChange={(e) => setProp((props) => (props.fit = e.target.value))}>
//           <option value="cover">Cover</option>
//           <option value="contain">Contain</option>
//           <option value="fill">Fill</option>
//           <option value="none">None</option>
//         </Select> */}

//         <Label>Image Fit</Label>
//         <Select onValueChange={(value) => setProp((props) => (props.fit = value))} defaultValue={props.fit} >
//           <SelectTrigger className="w-full">
//             <SelectValue placeholder="Cover" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="cover">Cover</SelectItem>
//             <SelectItem value="contain">Contain</SelectItem>
//             <SelectItem value="fill">Fill</SelectItem>
//             <SelectItem value="none">None</SelectItem>
//           </SelectContent>
//         </Select>

//         {/* <Label>Image Position</Label>
//         <Select value={props.position} onChange={(e) => setProp((props) => (props.position = e.target.value))}>
//           <option value="top left">Top Left</option>
//           <option value="top center">Top Center</option>
//           <option value="top right">Top Right</option>
//           <option value="center left">Center Left</option>

//           <option value="center">Center</option>
//           <option value="center right">Center Right</option>
//           <option value="bottom left">Bottom Left</option>
//           <option value="bottom center">Bottom Center</option>
//           <option value="bottom right">Bottom Right</option>
//         </Select> */}

//         <Label>Image Position</Label>
//         <Select onValueChange={(value) => setProp((props) => (props.position = value))} defaultValue={props.position} >
//           <SelectTrigger className="w-full">
//             <SelectValue placeholder="Top Left" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="top left">Top Left</SelectItem>
//             <SelectItem value="top center">Top Center</SelectItem>
//             <SelectItem value="top right">Top Right</SelectItem>
//             <SelectItem value="center left">Center Left</SelectItem>
//             <SelectItem value="center">Center</SelectItem>
//             <SelectItem value="center right">Center Right</SelectItem>
//             <SelectItem value="bottom left">Bottom Left</SelectItem>
//             <SelectItem value="bottom center">Bottom Center</SelectItem>
//             <SelectItem value="bottom right">Bottom Right</SelectItem>


//           </SelectContent>
//         </Select>

//         <Label>Aspect Ratio</Label>
//         <Slider defaultValue={[props.aspectRatio]} min={0.5} max={2} step={0.01} onValueChange={(value) => setProp((props) => (props.aspectRatio = value[0]))} />

//         <Label>Link URL</Label>
//         <Input value={props.link} onChange={(e) => setProp((props) => (props.link = e.target.value))} />
//       </CardContent>
//     </Card>
//   );
// };

// Image.craft = {
//   props: {
//     src: "https://firebasestorage.googleapis.com/v0/b/ksworks-55fe9.appspot.com/o/love.jpg?alt=media&token=2229889b-52aa-499c-88af-82c881fa6fee",
//     alt: "Placeholder Image",
//     width: 150,
//     height: 150,
//     borderRadius: 0,
//     alignment: "left",
//     fit: "cover",
//     position: "center",
//     aspectRatio: 1,
//     link: "",
//   },
//   related: {
//     settings: ImageSettings,
//   },
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PropTypes from "prop-types";

const BREAKPOINT = 640;

export const Image = ({
  src,
  alt,
  width,
  widthMobile,
  height,
  heightMobile,
  borderRadius,
  borderRadiusMobile,
  alignment,
  alignmentMobile,
  fit,
  fitMobile,
  position,
  positionMobile,
  aspectRatio,
  link,
  openInNewTab,
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  const imageElement = (
    <>
      <style>
        {`
          .responsive-image {
            width: var(--width, 150px);
            height: var(--height, 150px);
            border-radius: var(--border-radius, 0px);
            object-fit: var(--fit, cover);
            object-position: var(--position, center);
            aspect-ratio: var(--aspect-ratio, 1);
            display: block;
            margin: var(--margin, 0);
          }

          @media (max-width: ${BREAKPOINT}px) {
            .responsive-image {
              width: var(--width-mobile, var(--width));
              height: var(--height-mobile, var(--height));
              border-radius: var(--border-radius-mobile, var(--border-radius));
              object-fit: var(--fit-mobile, var(--fit));
              object-position: var(--position-mobile, var(--position));
              margin: var(--margin-mobile, var(--margin));
            }
          }
        `}
      </style>
      <img
        ref={(ref) => connect(drag(ref))}
        src={src}
        alt={alt}
        className="responsive-image"
        style={{
          "--width": alignment === "fill" ? "100%" : `${width}px`,
          "--width-mobile":
            alignmentMobile === "fill" ? "100%" : widthMobile ? `${widthMobile}px` : undefined,
          "--height": `${height}px`,
          "--height-mobile": heightMobile ? `${heightMobile}px` : undefined,
          "--border-radius": `${borderRadius}px`,
          "--border-radius-mobile": borderRadiusMobile ? `${borderRadiusMobile}px` : undefined,
          "--fit": fit,
          "--fit-mobile": fitMobile || undefined,
          "--position": position,
          "--position-mobile": positionMobile || undefined,
          "--aspect-ratio": aspectRatio,
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
        }}
      />
    </>
  );

  return link ? (
    <a
      href={link || "#"}
      target={openInNewTab ? "_blank" : "_self"}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      aria-label={`Link to ${alt}`}
    >
      {imageElement}
    </a>
  ) : (
    imageElement
  );
};

export const ImageSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <Card>
      <CardContent className="space-y-4">
        <Label>Image URL</Label>
        <Input
          value={props.src}
          onChange={(e) => setProp((props) => (props.src = e.target.value))}
        />

        <Label>Alt Text</Label>
        <Input
          value={props.alt}
          onChange={(e) => setProp((props) => (props.alt = e.target.value))}
        />

        <Label>Link URL</Label>
        <Input
          value={props.link}
          onChange={(e) => setProp((props) => (props.link = e.target.value))}
        />

        <div className="flex items-center gap-2 justify-between">
          <Label>Open in New Tab</Label>
          <input
            type="checkbox"
            checked={props.openInNewTab}
            onChange={(e) => setProp((props) => (props.openInNewTab = e.target.checked))}
          />
        </div>

        <Accordion type="single" collapsible>
          <AccordionItem value="desktop">
            <AccordionTrigger>Desktop Settings</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <Label>Width</Label>
              <Slider
                defaultValue={[props.width]}
                min={50}
                max={800}
                step={10}
                onValueChange={(value) => setProp((props) => (props.width = value[0]))}
              />

              <Label>Height</Label>
              <Slider
                defaultValue={[props.height]}
                min={50}
                max={800}
                step={10}
                onValueChange={(value) => setProp((props) => (props.height = value[0]))}
              />

              <Label>Border Radius</Label>
              <Slider
                defaultValue={[props.borderRadius]}
                min={0}
                max={100}
                step={1}
                onValueChange={(value) => setProp((props) => (props.borderRadius = value[0]))}
              />

              <Label>Alignment</Label>
              <Select
                onValueChange={(value) => setProp((props) => (props.alignment = value))}
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

              <Label>Image Fit</Label>
              <Select
                onValueChange={(value) => setProp((props) => (props.fit = value))}
                defaultValue={props.fit}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Cover" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cover">Cover</SelectItem>
                  <SelectItem value="contain">Contain</SelectItem>
                  <SelectItem value="fill">Fill</SelectItem>
                  <SelectItem value="none">None</SelectItem>
                </SelectContent>
              </Select>

              <Label>Image Position</Label>
              <Select
                onValueChange={(value) => setProp((props) => (props.position = value))}
                defaultValue={props.position}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Center" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="top left">Top Left</SelectItem>
                  <SelectItem value="top center">Top Center</SelectItem>
                  <SelectItem value="top right">Top Right</SelectItem>
                  <SelectItem value="center left">Center Left</SelectItem>
                  <SelectItem value="center">Center</SelectItem>
                  <SelectItem value="center right">Center Right</SelectItem>
                  <SelectItem value="bottom left">Bottom Left</SelectItem>
                  <SelectItem value="bottom center">Bottom Center</SelectItem>
                  <SelectItem value="bottom right">Bottom Right</SelectItem>
                </SelectContent>
              </Select>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="mobile">
            <AccordionTrigger>Mobile Settings</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <Label>Width</Label>
              <Slider
                defaultValue={[props.widthMobile || props.width]}
                min={50}
                max={800}
                step={10}
                onValueChange={(value) =>
                  setProp((props) => (props.widthMobile = value[0]))
                }
              />

              <Label>Height</Label>
              <Slider
                defaultValue={[props.heightMobile || props.height]}
                min={50}
                max={800}
                step={10}
                onValueChange={(value) =>
                  setProp((props) => (props.heightMobile = value[0]))
                }
              />

              <Label>Border Radius</Label>
              <Slider
                defaultValue={[props.borderRadiusMobile || props.borderRadius]}
                min={0}
                max={100}
                step={1}
                onValueChange={(value) =>
                  setProp((props) => (props.borderRadiusMobile = value[0]))
                }
              />

              <Label>Alignment</Label>
              <Select
                onValueChange={(value) => setProp((props) => (props.alignmentMobile = value))}
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

              <Label>Image Fit</Label>
              <Select
                onValueChange={(value) => setProp((props) => (props.fitMobile = value))}
                defaultValue={props.fitMobile || props.fit}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Cover" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cover">Cover</SelectItem>
                  <SelectItem value="contain">Contain</SelectItem>
                  <SelectItem value="fill">Fill</SelectItem>
                  <SelectItem value="none">None</SelectItem>
                </SelectContent>
              </Select>

              <Label>Image Position</Label>
              <Select
                onValueChange={(value) => setProp((props) => (props.positionMobile = value))}
                defaultValue={props.positionMobile || props.position}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Center" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="top left">Top Left</SelectItem>
                  <SelectItem value="top center">Top Center</SelectItem>
                  <SelectItem value="top right">Top Right</SelectItem>
                  <SelectItem value="center left">Center Left</SelectItem>
                  <SelectItem value="center">Center</SelectItem>
                  <SelectItem value="center right">Center Right</SelectItem>
                  <SelectItem value="bottom left">Bottom Left</SelectItem>
                  <SelectItem value="bottom center">Bottom Center</SelectItem>
                  <SelectItem value="bottom right">Bottom Right</SelectItem>
                </SelectContent>
              </Select>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Label>Aspect Ratio</Label>
        <Slider
          defaultValue={[props.aspectRatio]}
          min={0.5}
          max={2}
          step={0.01}
          onValueChange={(value) => setProp((props) => (props.aspectRatio = value[0]))}
        />
      </CardContent>
    </Card>
  );
};

Image.craft = {
  props: {
    src: "https://firebasestorage.googleapis.com/v0/b/ksworks-55fe9.appspot.com/o/love.jpg?alt=media&token=2229889b-52aa-499c-88af-82c881fa6fee",
    alt: "Placeholder Image",
    width: 150,
    widthMobile: null,
    height: 150,
    heightMobile: null,
    borderRadius: 0,
    borderRadiusMobile: null,
    alignment: "left",
    alignmentMobile: null,
    fit: "cover",
    fitMobile: null,
    position: "center",
    positionMobile: null,
    aspectRatio: 1,
    link: "",
    openInNewTab: false,
  },
  related: {
    settings: ImageSettings,
  },
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  widthMobile: PropTypes.number,
  height: PropTypes.number,
  heightMobile: PropTypes.number,
  borderRadius: PropTypes.number,
  borderRadiusMobile: PropTypes.number,
  alignment: PropTypes.oneOf(["left", "center", "right", "fill"]),
  alignmentMobile: PropTypes.oneOf(["left", "center", "right", "fill"]),
  fit: PropTypes.oneOf(["cover", "contain", "fill", "none"]),
  fitMobile: PropTypes.oneOf(["cover", "contain", "fill", "none"]),
  position: PropTypes.oneOf([
    "top left",
    "top center",
    "top right",
    "center left",
    "center",
    "center right",
    "bottom left",
    "bottom center",
    "bottom right",
  ]),
  positionMobile: PropTypes.oneOf([
    "top left",
    "top center",
    "top right",
    "center left",
    "center",
    "center right",
    "bottom left",
    "bottom center",
    "bottom right",
  ]),
  aspectRatio: PropTypes.number,
  link: PropTypes.string,
  openInNewTab: PropTypes.bool,
};