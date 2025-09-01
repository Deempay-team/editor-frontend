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
import { SliderControl } from "../../ui-blocks/SliderControl";
import { useViewport } from "@/Context/ViewportContext";

const Section = ({ title, children }) => (
  <div className="space-y-3 border-b border-gray-200 pb-4">
    <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
    <div className="space-y-3">{children}</div>
  </div>
);

export const TextSettings = () => {
  const { isDesktop } = useViewport();

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

        <SliderControl
          value={isDesktop ? props.fontSizeDesktop : props.fontSizeMobile}
          label="Size"
          onChange={(val) =>
            setProp((p) =>
              isDesktop ? (p.fontSizeDesktop = val) : (p.fontSizeMobile = val)
            )
          }
        />

        <SliderControl
          value={isDesktop ? props.widthDesktop : props.widthMobile}
          min={10}
          max={100}
          step={10}
          label="Width"
          onChange={(val) =>
            setProp((p) =>
              isDesktop ? (p.widthDesktop = val) : (p.widthMobile = val)
            )
          }
        />

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
