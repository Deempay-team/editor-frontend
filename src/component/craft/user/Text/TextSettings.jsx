import { useNode } from "@craftjs/core";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TextEditor } from "@/components/text-editor/TextEditor.js";
import React from "react";

const Section = ({ title, children }) => (
  <div className="space-y-3 border-b border-gray-200 pb-4">
    <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
    <div className="space-y-3">{children}</div>
  </div>
);

export const TextSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="space-y-6">
      <Section title="Text">
        <Label>Text</Label>
        <TextEditor
          value={props.text || ""}
          onChange={(html) => setProp((props) => (props.text = html))}
        />
        <Label>Link</Label>
        <Input
          placeholder="Paste a link or search"
          value={props.link || ""}
          onChange={(e) => setProp((props) => (props.link = e.target.value))}
        />
      </Section>

      <Section title="Typography">
        <Label>Font</Label>
        <Select
          onValueChange={(value) => setProp((props) => (props.font = value))}
          defaultValue={props.font || "Heading"}
        >
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Heading">Heading</SelectItem>
            <SelectItem value="Body">Body</SelectItem>
          </SelectContent>
        </Select>

        <Label>Size</Label>
        <Select
          onValueChange={(value) =>
            setProp((props) => (props.fontSize = parseInt(value)))
          }
          defaultValue={props.fontSize?.toString() || "16"}
        >
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10px</SelectItem>
            <SelectItem value="12">12px</SelectItem>
            <SelectItem value="14">14px</SelectItem>
            <SelectItem value="16">16px</SelectItem>
            <SelectItem value="18">18px</SelectItem>
            <SelectItem value="20">20px</SelectItem>
            <SelectItem value="24">24px</SelectItem>
            <SelectItem value="32">32px</SelectItem>
            <SelectItem value="40">40px</SelectItem>
            <SelectItem value="48">48px</SelectItem>
            <SelectItem value="56">56px</SelectItem>
            <SelectItem value="72">72px</SelectItem>
            <SelectItem value="78">78px</SelectItem>
            <SelectItem value="88">88px</SelectItem>
            <SelectItem value="120">120px</SelectItem>
            <SelectItem value="152">152px</SelectItem>
            <SelectItem value="184">184px</SelectItem>
          </SelectContent>
        </Select>

        <Label>Weight</Label>
        <Select
          onValueChange={(value) =>
            setProp((props) => (props.fontWeight = value))
          }
          defaultValue={props.fontWeight || "300"}
        >
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="300">Light</SelectItem>
            <SelectItem value="400">Regular</SelectItem>
            <SelectItem value="600">Semibold</SelectItem>
            <SelectItem value="700">Bold</SelectItem>
          </SelectContent>
        </Select>

        <Label>Letter Spacing</Label>
        <Select
          onValueChange={(value) =>
            setProp((props) => (props.charSpacing = value))
          }
          defaultValue={props.charSpacing || "Normal"}
        >
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Tight">Tight</SelectItem>
            <SelectItem value="Normal">Normal</SelectItem>
            <SelectItem value="Loose">Loose</SelectItem>
          </SelectContent>
        </Select>

        <Label>Case</Label>
        <Select
          onValueChange={(value) => setProp((props) => (props.case = value))}
          defaultValue={props.case || "Default"}
        >
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Default">Default</SelectItem>
            <SelectItem value="Uppercase">Uppercase</SelectItem>
          </SelectContent>
        </Select>

        <Label>Text Color</Label>
        <Input
          type="color"
          value={props.color || "#000000"}
          onChange={(e) => setProp((props) => (props.color = e.target.value))}
        />
      </Section>
    </div>
  );
};
