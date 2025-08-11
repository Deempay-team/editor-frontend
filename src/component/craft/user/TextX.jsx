import React, { useEffect, useState } from "react";
import { useNode } from "@craftjs/core";
import ContentEditable from "react-contenteditable";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTheme } from "@/Context/ThemeContext"

export const TextX = ({ text,
  fontSize,
  fontSizeMobile,
  textAlign,
  textAlignMobile,
  fontWeight,
  fontWeightMobile,
  color,
  colorMobile,
  lineHeight,
  charSpacing,
  margin,
  padding,
  width, }) => {
  const { connectors: { connect, drag }, hasSelectedNode, actions: { setProp } } = useNode((state) => ({
    hasSelectedNode: state.events.selected,
  }));

  const { theme } = useTheme(); 
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    if (!hasSelectedNode) setEditable(false);
  }, [hasSelectedNode]);

  return (
    <>
    {/* <style>
        {`
          .responsive-text {
            font-size: var(--font-size, 16px);
            text-align: var(--text-align, left);
            font-weight: var(--font-weight, 400);
            color: var(--color, #000);
          }

          @media (max-width: 600px) {
            .responsive-text {
              font-size: var(--font-size-mobile, var(--font-size));
              text-align: var(--text-align-mobile, var(--text-align));
              font-weight: var(--font-weight-mobile, var(--font-weight));
              color: var(--color-mobile, var(--color));
            }
          }
        `}
      </style> */}
       <style>
        {`
          .responsive-text {
            font-size: var(--font-size, 16px);
            text-align: var(--text-align, left);
            font-weight: var(--font-weight, 400);
            color: var(--color, #000);
            font-family: var(--font-family, sans-serif);
          }

          @media (max-width: 600px) {
            .responsive-text {
              font-size: var(--font-size-mobile, var(--font-size));
              text-align: var(--text-align-mobile, var(--text-align));
              font-weight: var(--font-weight-mobile, var(--font-weight));
              color: var(--color-mobile, var(--color));
            }
          }
        `}
      </style>

      <div
        ref={(ref) => connect(drag(ref))}
        onClick={() => setEditable(true)}
        className="responsive-text"
        style={{
          '--font-size': `${fontSize}px`,
          '--font-size-mobile': fontSizeMobile ? `${fontSizeMobile}px` : undefined,
          '--text-align': textAlign,
          '--text-align-mobile': textAlignMobile || undefined,
          '--font-weight': fontWeight,
          '--font-weight-mobile': fontWeightMobile || undefined,
          "--font-family":  theme.font.heading.family, 
          "--color": color || theme.colors.primary.hex,
          '--color-mobile': colorMobile || undefined,
          lineHeight,
          letterSpacing: `${charSpacing}px`,
          margin: `${margin}px`,
          padding: `${padding}px`,
          width: `${width}%`,
        }}
      >
      {/* <ContentEditable
        html={text}
        disabled={false}
        onChange={e => 
           setProp(props => 
             props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")  
           )
         } 
        tagName="p"
        // style={{
        //   width, // Apply the width prop here
        // }}
        className=" mx-autos"
      /> */}
      <p>{text}</p>
    </div>
    </>
  );
};

export const TextXSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  const { theme } = useTheme(); 

  return (
    <Card>
      <CardContent className="space-y-4">
        <Label>Text Content</Label>
        <Input
          value={props.text}
          onChange={(e) => setProp((props) => (props.text = e.target.value))}
        />

        {/* Font Size */}
        <div className="space-y-2">
          <Label>Font Size (Desktop)</Label>
          <Slider
            defaultValue={[props.fontSize]}
            min={10}
            max={50}
            step={1}
            onValueChange={(value) => setProp((props) => (props.fontSize = value[0]))}
          />
          <Label>Font Size (Mobile)</Label>
          <Slider
            defaultValue={[props.fontSizeMobile || props.fontSize]}
            min={10}
            max={50}
            step={1}
            onValueChange={(value) =>
              setProp((props) => (props.fontSizeMobile = value[0]))
            }
          />
        </div>

        {/* Text Align */}
        <div className="space-y-2">
          <Label>Text Align (Desktop)</Label>
          <Select
            onValueChange={(value) => setProp((props) => (props.textAlign = value))}
            defaultValue={props.textAlign}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Left" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="left">Left</SelectItem>
              <SelectItem value="center">Center</SelectItem>
              <SelectItem value="right">Right</SelectItem>
            </SelectContent>
          </Select>

          <Label>Text Align (Mobile)</Label>
          <Select
            onValueChange={(value) =>
              setProp((props) => (props.textAlignMobile = value))
            }
            defaultValue={props.textAlignMobile || props.textAlign}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Mobile Align" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="left">Left</SelectItem>
              <SelectItem value="center">Center</SelectItem>
              <SelectItem value="right">Right</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Font Weight */}
        <div className="space-y-2">
          <Label>Font Weight (Desktop)</Label>
          <Select
            onValueChange={(value) => setProp((props) => (props.fontWeight = value))}
            defaultValue={props.fontWeight}
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="300">Light (300)</SelectItem>
              <SelectItem value="400">Regular (400)</SelectItem>
              <SelectItem value="500">Medium (500)</SelectItem>
              <SelectItem value="600">Semi-Bold (600)</SelectItem>
              <SelectItem value="700">Bold (700)</SelectItem>
            </SelectContent>
          </Select>

          <Label>Font Weight (Mobile)</Label>
          <Select
            onValueChange={(value) =>
              setProp((props) => (props.fontWeightMobile = value))
            }
            defaultValue={props.fontWeightMobile || props.fontWeight}
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="300">Light (300)</SelectItem>
              <SelectItem value="400">Regular (400)</SelectItem>
              <SelectItem value="500">Medium (500)</SelectItem>
              <SelectItem value="600">Semi-Bold (600)</SelectItem>
              <SelectItem value="700">Bold (700)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Text Color */}
        <div className="space-y-4">
          <div className="space-y-2">
          <Label>Text Color (Desktop)</Label>
          <Input
            type="color"
            value={props.color || theme.colors.primary.hex}
            onChange={(e) => setProp((props) => (props.color = e.target.value))}
          />
          </div>
          <div className="space-y-2">
          <Label>Text Color (Mobile)</Label>
          <Input
            type="color"
            value={props.colorMobile || props.color || theme.colors.primary.hex}
            onChange={(e) =>
              setProp((props) => (props.colorMobile = e.target.value))
            }
          />
          </div>
        </div>

        {/* Other shared props */}
        <Label>Line Height</Label>
        <Slider
          defaultValue={[props.lineHeight]}
          min={1}
          max={3}
          step={0.1}
          onValueChange={(value) => setProp((props) => (props.lineHeight = value[0]))}
        />

        <Label>Character Spacing</Label>
        <Slider
          defaultValue={[props.charSpacing]}
          min={0}
          max={10}
          step={0.5}
          onValueChange={(value) => setProp((props) => (props.charSpacing = value[0]))}
        />

        <Label>Margin</Label>
        <Slider
          defaultValue={[props.margin]}
          min={0}
          max={50}
          step={1}
          onValueChange={(value) => setProp((props) => (props.margin = value[0]))}
        />

        <Label>Padding</Label>
        <Slider
          defaultValue={[props.padding]}
          min={0}
          max={50}
          step={1}
          onValueChange={(value) => setProp((props) => (props.padding = value[0]))}
        />

        <Label>Width</Label>
        <Slider
          defaultValue={[props.width]}
          min={0}
          max={100}
          step={1}
          onValueChange={(value) => setProp((props) => (props.width = value[0]))}
        />
      </CardContent>
    </Card>
  );
};


TextX.craft = {
  props: {
    text: "Hi",
    fontSize: 20,
    fontSizeMobile: null,
    textAlign: "left",
    textAlignMobile: null,
    fontWeight: "400",
    fontWeightMobile: null,
    // color: "#000000",
    colorMobile: null,
    lineHeight: 1.5,
    charSpacing: 0,
    margin: 0,
    padding: 0,
    width: "auto",
  },
  related: {
    settings: TextXSettings,
  },
};

