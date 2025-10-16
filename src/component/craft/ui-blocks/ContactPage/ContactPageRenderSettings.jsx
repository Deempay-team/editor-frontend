'use client';
import {useNode} from "@craftjs/core";
import {Card, CardContent} from '@/components/ui/card';
import ColorPicker from '@/components/ui/ColorPicker';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {SliderControl} from "../SliderControl.jsx";

export function ContactPageRenderSettings() {
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
                        <TabsTrigger value="colors">Colors</TabsTrigger>
                    </TabsList>

                    <TabsContent value="layout" className="space-y-4 mt-2 bg-gray-50 p-3 rounded-md border border-gray-200">
                        <SliderControl
                            label="Container Padding"
                            value={props.containerPadding}
                            onChange={(val) => setProp((p) => (p.containerPadding = val))}
                            min={0}
                            max={100}
                            step={4}
                            stack={true}
                        />
                    </TabsContent>

                    <TabsContent value="colors" className="space-y-4 mt-2 bg-gray-50 p-2 rounded-md border border-gray-200">
                        <ColorPicker
                            label="Background Color"
                            value={props.backgroundColor}
                            onChange={(val) => setProp((p) => (p.backgroundColor = val))}
                        />

                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
}
