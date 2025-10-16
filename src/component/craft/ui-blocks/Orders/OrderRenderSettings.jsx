import {useNode} from "@craftjs/core";
import React from "react";
import {Card, CardContent} from '@/components/ui/card';
import {Label} from '@/components/ui/label';
import {Slider} from '@/components/ui/slider';
import ColorPicker from '@/components/ui/ColorPicker';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {Input} from "@/components/ui/input.jsx";

export function OrderRenderSettings() {
    const {
        actions: {setProp},
        props,
    } = useNode((node) => ({
        props: node.data.props,
    }));

    return (
        <Card>
            <CardContent className="space-y-4 mt-4 ">
                <Tabs defaultValue="layout">
                    <TabsList className="w-full grid grid-cols-2">
                        <TabsTrigger value="layout">Layout</TabsTrigger>
                        <TabsTrigger value="card">Card</TabsTrigger>
                    </TabsList>
                    <TabsContent value="layout" className="space-y-4 mt-2">
                        <div className="rounded-md border bg-gray-50 p-3">
                            <div className="space-y-2">
                                <Label className="mb-3">Container Padding</Label>
                                <div className="flex items-center space-x-2">
                                    <Slider
                                        value={[props.containerPadding]}
                                        min={0}
                                        max={100}
                                        step={4}
                                        onValueChange={(v) => setProp((p) => (p.containerPadding = v[0]))}
                                    />
                                    <Input
                                        type="number"
                                        min={0}
                                        max={100}
                                        className="w-20 h-8 text-center no-arrows"
                                        value={props.containerPadding}
                                        onChange={(e) => setProp((p) => (p.containerPadding = parseInt(e.target.value) || ""))}
                                    />
                                    <span className="text-sm text-gray-500">px</span>
                                </div>
                            </div>
                            {/*<div className="space-y-2">*/}
                            {/*    <Label className="mb-3 mt-3">Container Padding (Mobile)</Label>*/}
                            {/*    <div className="flex items-center space-x-2">*/}
                            {/*        <Slider*/}
                            {/*            value={[props.containerPaddingMobile]}*/}
                            {/*            min={0}*/}
                            {/*            max={50}*/}
                            {/*            step={2}*/}
                            {/*            onValueChange={(v) => setProp((p) => (p.containerPaddingMobile = v[0]))}*/}
                            {/*        />*/}
                            {/*        <Input*/}
                            {/*            type="number"*/}
                            {/*            min={0}*/}
                            {/*            max={50}*/}
                            {/*            className="w-20 h-8 text-right"*/}
                            {/*            value={props.containerPaddingMobile}*/}
                            {/*            onChange={(e) => setProp((p) => (p.containerPaddingMobile = parseInt(e.target.value) || 0))}*/}
                            {/*        />*/}
                            {/*        <span className="text-sm text-gray-500">px</span>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="space-y-2">
                                <Label className="mb-3 mt-3">Column Gap</Label>
                                <div className="flex items-center space-x-2">
                                    <Slider
                                        value={[props.columnGap]}
                                        min={0}
                                        max={50}
                                        step={2}
                                        onValueChange={(v) => setProp((p) => (p.columnGap = v[0]))}
                                    />
                                    <Input
                                        type="number"
                                        min={0}
                                        max={50}
                                        className="w-20 h-8 text-center no-arrows"
                                        value={props.columnGap}
                                        onChange={(e) => setProp((p) => (p.columnGap = parseInt(e.target.value) || ""))}
                                    />
                                    <span className="text-sm text-gray-500">px</span>
                                </div>
                            </div>
                            {/*<div className="space-y-2">*/}
                            {/*    <Label className="mb-3 mt-3">Column Gap (Mobile)</Label>*/}
                            {/*    <div className="flex items-center space-x-2">*/}
                            {/*        <Slider*/}
                            {/*            value={[props.columnGapMobile]}*/}
                            {/*            min={0}*/}
                            {/*            max={30}*/}
                            {/*            step={2}*/}
                            {/*            onValueChange={(v) => setProp((p) => (p.columnGapMobile = v[0]))}*/}
                            {/*        />*/}
                            {/*        <Input*/}
                            {/*            type="number"*/}
                            {/*            min={0}*/}
                            {/*            max={30}*/}
                            {/*            className="w-20 h-8 text-right"*/}
                            {/*            value={props.columnGapMobile}*/}
                            {/*            onChange={(e) => setProp((p) => (p.columnGapMobile = parseInt(e.target.value) || 0))}*/}
                            {/*        />*/}
                            {/*        <span className="text-sm text-gray-500">px</span>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="space-y-2">
                                <Label className="mb-3 mt-3">Card Gap</Label>
                                <div className="flex items-center space-x-2">
                                    <Slider
                                        value={[props.cardGap]}
                                        min={0}
                                        max={50}
                                        step={2}
                                        onValueChange={(v) => setProp((p) => (p.cardGap = v[0]))}
                                    />
                                    <Input
                                        type="number"
                                        min={0}
                                        max={50}
                                        className="w-20 h-8 text-center no-arrows"
                                        value={props.cardGap}
                                        onChange={(e) => setProp((p) => (p.cardGap = parseInt(e.target.value) || ""))}
                                    />
                                    <span className="text-sm text-gray-500">px</span>
                                </div>
                            </div>
                            {/*<div className="space-y-2">*/}
                            {/*    <Label className="mb-3 mt-3">Card Gap (Mobile)</Label>*/}
                            {/*    <div className="flex items-center space-x-2">*/}
                            {/*        <Slider*/}
                            {/*            value={[props.cardGapMobile]}*/}
                            {/*            min={0}*/}
                            {/*            max={30}*/}
                            {/*            step={2}*/}
                            {/*            onValueChange={(v) => setProp((p) => (p.cardGapMobile = v[0]))}*/}
                            {/*        />*/}
                            {/*        <Input*/}
                            {/*            type="number"*/}
                            {/*            min={0}*/}
                            {/*            max={30}*/}
                            {/*            className="w-20 h-8 text-right"*/}
                            {/*            value={props.cardGapMobile}*/}
                            {/*            onChange={(e) => setProp((p) => (p.cardGapMobile = parseInt(e.target.value) || 0))}*/}
                            {/*        />*/}
                            {/*        <span className="text-sm text-gray-500">px</span>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                        <div className="space-y-2 rounded-md border bg-gray-50 p-2">
                            <ColorPicker
                                label="Column Background"
                                value={props.columnBgColor}
                                onChange={(val) => setProp((p) => (p.columnBgColor = val))}
                            />
                            <ColorPicker
                                label="Column Border"
                                value={props.columnBorderColor}
                                onChange={(val) => setProp((p) => (p.columnBorderColor = val))}
                            />
                            <ColorPicker
                                label="Background Color"
                                value={props.backgroundColor}
                                onChange={(val) => setProp((p) => (p.backgroundColor = val))}
                            />
                        </div>
                    </TabsContent>
                    <TabsContent value="card" className="space-y-4 mt-2">
                        <div className="rounded-md border bg-gray-50 p-3">
                            <div className="">
                                <Label className="mb-3">Card Width</Label>
                                <div className="flex items-center ">
                                    <Slider
                                        value={[props.cardWidth]}
                                        min={300}
                                        max={600}
                                        step={10}
                                        onValueChange={(v) => setProp((p) => (p.cardWidth = v[0]))}
                                    />
                                    <Input
                                        type="number"
                                        min={300}
                                        max={600}
                                        className="w-20 ml-2 mr-2 h-8 text-center no-arrows"
                                        value={props.cardWidth}
                                        onChange={(e) => setProp((p) => (p.cardWidth = parseInt(e.target.value) || ""))}
                                    />
                                    <span className="text-sm text-gray-500">px</span>
                                </div>
                            </div>
                            {/*<div className="space-y-2">*/}
                            {/*    <Label className="mb-3 mt-3">Card Width (Mobile, %)</Label>*/}
                            {/*    <div className="flex items-center space-x-2">*/}
                            {/*        <Slider*/}
                            {/*            value={[props.cardWidthMobile]}*/}
                            {/*            min={80}*/}
                            {/*            max={100}*/}
                            {/*            step={1}*/}
                            {/*            onValueChange={(v) => setProp((p) => (p.cardWidthMobile = v[0]))}*/}
                            {/*        />*/}
                            {/*        <Input*/}
                            {/*            type="number"*/}
                            {/*            min={80}*/}
                            {/*            max={100}*/}
                            {/*            className="w-20 h-8 text-right"*/}
                            {/*            value={props.cardWidthMobile}*/}
                            {/*            onChange={(e) => setProp((p) => (p.cardWidthMobile = parseInt(e.target.value) || 0))}*/}
                            {/*        />*/}
                            {/*        <span className="text-sm text-gray-500">%</span>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="space-y-2">
                                <Label className="mb-3 mt-3">Card Height</Label>
                                <div className="flex items-center space-x-2">
                                    <Slider
                                        value={[props.cardHeight]}
                                        min={100}
                                        max={300}
                                        step={10}
                                        onValueChange={(v) => setProp((p) => (p.cardHeight = v[0]))}
                                    />
                                    <Input
                                        type="number"
                                        min={100}
                                        max={300}
                                        className="w-20 h-8 text-center no-arrows"
                                        value={props.cardHeight}
                                        onChange={(e) => setProp((p) => (p.cardHeight = parseInt(e.target.value) || ""))}
                                    />
                                    <span className="text-sm text-gray-500">px</span>
                                </div>
                            </div>
                            {/*<div className="space-y-2">*/}
                            {/*    <Label className="mb-3 mt-3">Card Height (Mobile)</Label>*/}
                            {/*    <div className="flex items-center space-x-2">*/}
                            {/*        <Slider*/}
                            {/*            value={[props.cardHeightMobile]}*/}
                            {/*            min={100}*/}
                            {/*            max={300}*/}
                            {/*            step={10}*/}
                            {/*            onValueChange={(v) => setProp((p) => (p.cardHeightMobile = v[0]))}*/}
                            {/*        />*/}
                            {/*        <Input*/}
                            {/*            type="number"*/}
                            {/*            min={100}*/}
                            {/*            max={300}*/}
                            {/*            className="w-20 h-8 text-right"*/}
                            {/*            value={props.cardHeightMobile}*/}
                            {/*            onChange={(e) => setProp((p) => (p.cardHeightMobile = parseInt(e.target.value) || 0))}*/}
                            {/*        />*/}
                            {/*        <span className="text-sm text-gray-500">px</span>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="space-y-2">
                                <Label className="mb-3 mt-3">Card Padding</Label>
                                <div className="flex items-center space-x-2">
                                    <Slider
                                        value={[props.cardPadding]}
                                        min={8}
                                        max={24}
                                        step={2}
                                        onValueChange={(v) => setProp((p) => (p.cardPadding = v[0]))}
                                    />
                                    <Input
                                        type="number"
                                        min={8}
                                        max={24}
                                        className="w-20 h-8 text-center no-arrows"
                                        value={props.cardPadding}
                                        onChange={(e) => setProp((p) => (p.cardPadding = parseInt(e.target.value) || ""))}
                                    />
                                    <span className="text-sm text-gray-500">px</span>
                                </div>
                            </div>
                            {/*<div className="space-y-2">*/}
                            {/*    <Label className="mb-3 mt-3">Card Padding (Mobile)</Label>*/}
                            {/*    <div className="flex items-center space-x-2">*/}
                            {/*        <Slider*/}
                            {/*            value={[props.cardPaddingMobile]}*/}
                            {/*            min={4}*/}
                            {/*            max={16}*/}
                            {/*            step={2}*/}
                            {/*            onValueChange={(v) => setProp((p) => (p.cardPaddingMobile = v[0]))}*/}
                            {/*        />*/}
                            {/*        <Input*/}
                            {/*            type="number"*/}
                            {/*            min={4}*/}
                            {/*            max={16}*/}
                            {/*            className="w-20 h-8 text-right"*/}
                            {/*            value={props.cardPaddingMobile}*/}
                            {/*            onChange={(e) => setProp((p) => (p.cardPaddingMobile = parseInt(e.target.value) || 0))}*/}
                            {/*        />*/}
                            {/*        <span className="text-sm text-gray-500">px</span>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="space-y-2">
                                <Label className="mb-3 mt-3">Status Width</Label>
                                <div className="flex items-center space-x-2">
                                    <Slider
                                        value={[props.statusWidth]}
                                        min={70}
                                        max={120}
                                        step={5}
                                        onValueChange={(v) => setProp((p) => (p.statusWidth = v[0]))}
                                    />
                                    <Input
                                        type="number"
                                        min={70}
                                        max={120}
                                        className="w-20 h-8 text-center no-arrows"
                                        value={props.statusWidth}
                                        onChange={(e) => setProp((p) => (p.statusWidth = parseInt(e.target.value) || ""))}
                                    />
                                    <span className="text-sm text-gray-500">px</span>
                                </div>
                            </div>
                            {/*<div className="space-y-2">*/}
                            {/*    <Label className="mb-3 mt-3">Status Width (Mobile)</Label>*/}
                            {/*    <div className="flex items-center space-x-2">*/}
                            {/*        <Slider*/}
                            {/*            value={[props.statusWidthMobile]}*/}
                            {/*            min={50}*/}
                            {/*            max={80}*/}
                            {/*            step={5}*/}
                            {/*            onValueChange={(v) => setProp((p) => (p.statusWidthMobile = v[0]))}*/}
                            {/*        />*/}
                            {/*        <Input*/}
                            {/*            type="number"*/}
                            {/*            min={50}*/}
                            {/*            max={80}*/}
                            {/*            className="w-20 h-8 text-right"*/}
                            {/*            value={props.statusWidthMobile}*/}
                            {/*            onChange={(e) => setProp((p) => (p.statusWidthMobile = parseInt(e.target.value) || 0))}*/}
                            {/*        />*/}
                            {/*        <span className="text-sm text-gray-500">px</span>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="space-y-2">
                                <Label className="mb-3 mt-3">Status Height</Label>
                                <div className="flex items-center space-x-2">
                                    <Slider
                                        value={[props.statusHeight]}
                                        min={24}
                                        max={40}
                                        step={2}
                                        onValueChange={(v) => setProp((p) => (p.statusHeight = v[0]))}
                                    />
                                    <Input
                                        type="number"
                                        min={24}
                                        max={40}
                                        className="w-20 h-8 text-center no-arrows"
                                        value={props.statusHeight}
                                        onChange={(e) => setProp((p) => (p.statusHeight = parseInt(e.target.value) || ""))}
                                    />
                                    <span className="text-sm text-gray-500">px</span>
                                </div>
                            </div>
                            {/*<div className="space-y-2">*/}
                            {/*    <Label className="mb-3 mt-3">Status Height (Mobile)</Label>*/}
                            {/*    <div className="flex items-center space-x-2">*/}
                            {/*        <Slider*/}
                            {/*            value={[props.statusHeightMobile]}*/}
                            {/*            min={20}*/}
                            {/*            max={30}*/}
                            {/*            step={2}*/}
                            {/*            onValueChange={(v) => setProp((p) => (p.statusHeightMobile = v[0]))}*/}
                            {/*        />*/}
                            {/*        <Input*/}
                            {/*            type="number"*/}
                            {/*            min={20}*/}
                            {/*            max={30}*/}
                            {/*            className="w-20 h-8 text-right"*/}
                            {/*            value={props.statusHeightMobile}*/}
                            {/*            onChange={(e) => setProp((p) => (p.statusHeightMobile = parseInt(e.target.value) || 0))}*/}
                            {/*        />*/}
                            {/*        <span className="text-sm text-gray-500">px</span>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="space-y-2">
                                <Label className="mb-3 mt-3">Status Font Size</Label>
                                <div className="flex items-center space-x-2">
                                    <Slider
                                        value={[props.statusFontSize]}
                                        min={10}
                                        max={14}
                                        step={1}
                                        onValueChange={(v) => setProp((p) => (p.statusFontSize = v[0]))}
                                    />
                                    <Input
                                        type="number"
                                        min={10}
                                        max={14}
                                        className="w-20 h-8 text-center no-arrows"
                                        value={props.statusFontSize}
                                        onChange={(e) => setProp((p) => (p.statusFontSize = parseInt(e.target.value) || ""))}
                                    />
                                    <span className="text-sm text-gray-500">px</span>
                                </div>
                            </div>
                            {/*<div className="space-y-2">*/}
                            {/*    <Label className="mb-3 mt-3">Status Font Size (Mobile)</Label>*/}
                            {/*    <div className="flex items-center space-x-2">*/}
                            {/*        <Slider*/}
                            {/*            value={[props.statusFontSizeMobile]}*/}
                            {/*            min={8}*/}
                            {/*            max={12}*/}
                            {/*            step={1}*/}
                            {/*            onValueChange={(v) => setProp((p) => (p.statusFontSizeMobile = v[0]))}*/}
                            {/*        />*/}
                            {/*        <Input*/}
                            {/*            type="number"*/}
                            {/*            min={8}*/}
                            {/*            max={12}*/}
                            {/*            className="w-20 h-8 text-right"*/}
                            {/*            value={props.statusFontSizeMobile}*/}
                            {/*            onChange={(e) => setProp((p) => (p.statusFontSizeMobile = parseInt(e.target.value) || 0))}*/}
                            {/*        />*/}
                            {/*        <span className="text-sm text-gray-500">px</span>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                        <div className="space-y-2 rounded-md border bg-gray-50 p-2">
                            <ColorPicker
                                label="Card Background"
                                value={props.cardBgColor}
                                onChange={(val) => setProp((p) => (p.cardBgColor = val))}
                            />
                            <ColorPicker
                                label="Status Background"
                                value={props.statusBgColor}
                                onChange={(val) => setProp((p) => (p.statusBgColor = val))}
                            />
                            <ColorPicker
                                label="Status Text Color"
                                value={props.statusTextColor}
                                onChange={(val) => setProp((p) => (p.statusTextColor = val))}
                            />
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
}
