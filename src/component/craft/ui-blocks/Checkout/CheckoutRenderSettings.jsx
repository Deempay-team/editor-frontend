import React, {useState} from 'react';
import {Element, useNode} from '@craftjs/core';
import {Card, CardContent} from '@/components/ui/card';
import {Label} from '@/components/ui/label';
import {Input} from '@/components/ui/input';
import {Slider} from '@/components/ui/slider';
import ColorPicker from '@/components/ui/ColorPicker';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';

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
                    <TabsContent value="general" className="space-y-4">
                        <div className="space-y-2">
                            <Label>Page Title</Label>
                            <Input
                                value={props.title}
                                onChange={(e) => setProp((p) => (p.title = e.target.value))}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Breadcrumb</Label>
                            <Input
                                value={props.breadcrumb}
                                onChange={(e) => setProp((p) => (p.breadcrumb = e.target.value))}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Confirm Order Link</Label>
                            <Input
                                value={props.confirmLink}
                                onChange={(e) => setProp((p) => (p.confirmLink = e.target.value))}
                            />
                        </div>
                        <ColorPicker
                            label="Title Color"
                            value={props.titleColor}
                            onChange={(val) => setProp((p) => (p.titleColor = val))}
                        />
                        <ColorPicker
                            label="Breadcrumb Color"
                            value={props.breadcrumbColor}
                            onChange={(val) => setProp((p) => (p.breadcrumbColor = val))}
                        />
                        <ColorPicker
                            label="Overall Background Color"
                            value={props.overallBgColor}
                            onChange={(val) => setProp((p) => (p.overallBgColor = val))}
                        />
                    </TabsContent>
                    <TabsContent value="layout" className="space-y-4">
                        <div className="rounded-md border bg-gray-50 p-3">
                        <div className="space-y-2 ">
                            <Label>Container Padding</Label>
                            <Slider
                                value={[props.containerPadding]}
                                min={0}
                                max={100}
                                step={4}
                                onValueChange={(v) => setProp((p) => (p.containerPadding = v[0]))}
                            />
                            <span className="text-sm text-gray-500">{props.containerPadding}px</span>
                        </div>
                        <div className="space-y-2">
                            <Label>Section Gap</Label>
                            <Slider
                                value={[props.sectionGap]}
                                min={0}
                                max={50}
                                step={2}
                                onValueChange={(v) => setProp((p) => (p.sectionGap = v[0]))}
                            />
                            <span className="text-sm text-gray-500">{props.sectionGap}px</span>
                        </div>
                        <div className="space-y-2">
                            <Label>Section Padding</Label>
                            <Slider
                                value={[props.sectionPadding]}
                                min={0}
                                max={50}
                                step={2}
                                onValueChange={(v) => setProp((p) => (p.sectionPadding = v[0]))}
                            />
                            <span className="text-sm text-gray-500">{props.sectionPadding}px</span>
                        </div>
                        <div className="space-y-2">
                            <Label>Section Border Radius</Label>
                            <Slider
                                value={[props.sectionBorderRadius]}
                                min={0}
                                max={50}
                                step={2}
                                onValueChange={(v) => setProp((p) => (p.sectionBorderRadius = v[0]))}
                            />
                            <span className="text-sm text-gray-500">{props.sectionBorderRadius}px</span>
                        </div>
                        <div className="space-y-2">
                            <Label>Summary Width</Label>
                            <Slider
                                value={[props.summaryWidth]}
                                min={300}
                                max={700}
                                step={10}
                                onValueChange={(v) => setProp((p) => (p.summaryWidth = v[0]))}
                            />
                            <span className="text-sm text-gray-500">{props.summaryWidth}px</span>
                        </div>
                        <div className="space-y-2">
                            <Label>Summary Border Radius</Label>
                            <Slider
                                value={[props.summaryBorderRadius]}
                                min={0}
                                max={50}
                                step={2}
                                onValueChange={(v) => setProp((p) => (p.summaryBorderRadius = v[0]))}
                            />
                            <span className="text-sm text-gray-500">{props.summaryBorderRadius}px</span>
                        </div>
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