'use client';
import { useNode} from '@craftjs/core';
import {Card, CardContent} from '@/components/ui/card';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import ColorPicker from '@/components/ui/ColorPicker';
import {SliderControl} from "../SliderControl.jsx";


export function ResetPasswordCodeSettings() {
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
                        <TabsTrigger value="styling">Styling</TabsTrigger>
                    </TabsList>
                    <TabsContent value="layout" className="space-y-4 bg-gray-50 p-3 mt-2 rounded-md border border-gray-200">
                        <SliderControl label="Container Padding" value={props.containerPadding} onChange={(v) => setProp((p) => (p.containerPadding = v))} stack={true}  />
                    </TabsContent>

                    <TabsContent value="styling" className="space-y-4 bg-gray-50 p-2 mt-2 rounded-md border border-gray-200">
                        <ColorPicker
                            label="Background Color"
                            value={props.containerBgColor}
                            onChange={(val) => setProp((p) => (p.containerBgColor = val))}
                        />
                        <ColorPicker
                            label="Form Background"
                            value={props.formBgColor}
                            onChange={(val) => setProp((p) => (p.formBgColor = val))}
                        />
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
}
