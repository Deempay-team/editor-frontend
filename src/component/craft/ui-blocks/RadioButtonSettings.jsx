import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import ColorPicker from '@/components/ui/ColorPicker';
import { useNode } from '@craftjs/core';

export function RadioButtonSettings() {
    const {
        actions: { setProp },
        props,
    } = useNode((node) => ({
        props: node.data.props,
    }));

    return (
        <Card>
            <CardContent className="space-y-4 mt-4">
                <div className="space-y-2">
                    <Label>Radio Button Size</Label>
                    <Slider
                        value={[props.radioSize]}
                        min={12}
                        max={30}
                        step={2}
                        onValueChange={(v) => setProp((p) => (p.radioSize = v[0]))}
                    />
                    <span className="text-sm text-gray-500">{props.radioSize}px</span>
                </div>
                <ColorPicker
                    label="Radio Button Color"
                    value={props.radioColor}
                    onChange={(val) => setProp((p) => (p.radioColor = val))}
                />
                <ColorPicker
                    label="Radio Text Color"
                    value={props.radioTextColor}
                    onChange={(val) => setProp((p) => (p.radioTextColor = val))}
                />
                <div className="space-y-2">
                    <Label>Radio Text Size</Label>
                    <Slider
                        value={[props.radioTextSize]}
                        min={12}
                        max={24}
                        step={1}
                        onValueChange={(v) => setProp((p) => (p.radioTextSize = v[0]))}
                    />
                    <span className="text-sm text-gray-500">{props.radioTextSize}px</span>
                </div>
                <div className="space-y-2">
                    <Label>Radio Text Size Mobile</Label>
                    <Slider
                        value={[props.radioTextSizeMobile]}
                        min={12}
                        max={24}
                        step={1}
                        onValueChange={(v) => setProp((p) => (p.radioTextSizeMobile = v[0]))}
                    />
                    <span className="text-sm text-gray-500">{props.radioTextSizeMobile}px</span>
                </div>
            </CardContent>
        </Card>
    );
}
