import React, {useState} from 'react';
import {Element, useNode} from '@craftjs/core';
import {Card, CardContent} from '@/components/ui/card';
import {Label} from '@/components/ui/label';
import {Input} from '@/components/ui/input';
import {Slider} from '@/components/ui/slider';
import ColorPicker from '@/components/ui/ColorPicker';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {SliderControl} from "../SliderControl.jsx";

export function CheckoutRenderSettings() {
    const {
        actions: {setProp},
        props,
    } = useNode((node) => ({
        props: node.data.props,
    }));

    return (
        <Card>
            <CardContent className="space-y-4 mt-4">
                <Tabs defaultValue="layout">
                    <TabsList className="w-full grid grid-cols-2">
                        <TabsTrigger value="layout">Layout</TabsTrigger>
                        <TabsTrigger value="style">Style</TabsTrigger>
                    </TabsList>
                    <TabsContent value="layout" className="">
                        <div className="rounded-md border bg-gray-50 p-3 space-y-3">
                            <SliderControl label="Container Padding" value={props.containerPadding} onChange={(v) => setProp((p) => (p.containerPadding = v))} stack={true} />
                            <SliderControl label="Section Gap" value={props.sectionGap} onChange={(v) => setProp((p) => (p.sectionGap = v))} stack={true} />
                            <SliderControl label="Section Padding Y" value={props.sectionPaddingY} onChange={(v) => setProp((p) => (p.sectionPaddingY = v))} stack={true} />
                            {/*<SliderControl label="Section Padding X" value={props.sectionPaddingX} onChange={(v) => setProp((p) => (p.sectionPaddingX = v))} stack={true} />*/}
                            <SliderControl label="Section Border Radius" value={props.sectionBorderRadius} onChange={(v) => setProp((p) => (p.sectionBorderRadius = v))} stack={true} />
                            <SliderControl label="Summary Width" value={props.summaryWidth} onChange={(v) => setProp((p) => (p.summaryWidth = v))} stack={true} />
                            <SliderControl label="Summary Border Radius" value={props.summaryBorderRadius} onChange={(v) => setProp((p) => (p.summaryBorderRadius = v))} stack={true} />
                        </div>
                    </TabsContent>
                    <TabsContent value="style" className="space-y-4">
                        <div className="rounded-md border bg-gray-50 p-3 space-y-4">
                        <ColorPicker
                            label="Section Background"
                            value={props.sectionBgColor}
                            onChange={(val) => setProp((p) => (p.sectionBgColor = val))}
                        />
                        <ColorPicker
                            label="Section Border"
                            value={props.sectionBorderColor}
                            onChange={(val) => setProp((p) => (p.sectionBorderColor = val))}
                        />
                        <ColorPicker
                            label="Summary Background"
                            value={props.summaryBgColor}
                            onChange={(val) => setProp((p) => (p.summaryBgColor = val))}
                        />
                        <ColorPicker
                            label="Summary Border"
                            value={props.summaryBorderColor}
                            onChange={(val) => setProp((p) => (p.summaryBorderColor = val))}
                        />
                        <ColorPicker
                            label="Button Background"
                            value={props.buttonBgColor}
                            onChange={(val) => setProp((p) => (p.buttonBgColor = val))}
                        />
                        <ColorPicker
                            label="Button Text"
                            value={props.buttonTextColor}
                            onChange={(val) => setProp((p) => (p.buttonTextColor = val))}
                        />
                        <div className="space-y-2">
                            <Label>Input Height</Label>
                            <Slider
                                value={[props.inputHeight]}
                                min={30}
                                max={60}
                                step={2}
                                onValueChange={(v) => setProp((p) => (p.inputHeight = v[0]))}
                            />
                            <span className="text-sm text-gray-500">{props.inputHeight}px</span>
                        </div>
                        <div className="space-y-2">
                            <Label>Input Border Radius</Label>
                            <Slider
                                value={[props.inputBorderRadius]}
                                min={0}
                                max={30}
                                step={2}
                                onValueChange={(v) => setProp((p) => (p.inputBorderRadius = v[0]))}
                            />
                            <span className="text-sm text-gray-500">{props.inputBorderRadius}px</span>
                        </div>
                        <ColorPicker
                            label="Input Background"
                            value={props.inputBgColor}
                            onChange={(val) => setProp((p) => (p.inputBgColor = val))}
                        />
                        <ColorPicker
                            label="Input Border"
                            value={props.inputBorderColor}
                            onChange={(val) => setProp((p) => (p.inputBorderColor = val))}
                        />
                        <ColorPicker
                            label="Input Text Color"
                            value={props.inputTextColor}
                            onChange={(val) => setProp((p) => (p.inputTextColor = val))}
                        />
                        <ColorPicker
                            label="Input Placeholder Color"
                            value={props.inputPlaceholderColor}
                            onChange={(val) => setProp((p) => (p.inputPlaceholderColor = val))}
                        />
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
}