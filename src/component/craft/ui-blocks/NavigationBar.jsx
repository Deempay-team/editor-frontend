'use client';

import React, {useEffect, useState, useRef} from 'react';
import {Element, useNode} from '@craftjs/core';
import {useViewport} from '../../../Context/ViewportContext.jsx';
import {Label} from "../../../components/ui/label.jsx";
import {Input} from "../../../components/ui/input.jsx";
import ColorPicker from "../../../components/ui/ColorPicker.jsx";
import {Slider} from "../../../components/ui/slider.jsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "../../../components/ui/select.jsx";
import {MenuItems} from "./MenuItems.jsx";
import {Logo} from "./Logo.jsx";
import {Container_2} from "../user/Container_2.jsx";
import {IconButtons} from "./IconButtons.jsx";
import {Switch} from "../../../components/ui/switch.jsx";
import {Card, CardContent} from "../../../components/ui/card.jsx";

export default function Header({
                                   showBorder = true,
                                   backgroundColor = '',
                                   paddingX = 12,
                                   paddingY = 16,
                                   paddingXMobile = 12,
                                   gap = 12,
                                   stickyBehavior = 'always'
                               }) {
    const {connectors: {connect, drag}} = useNode();
    const {viewport} = useViewport();
    const [searchActive, setSearchActive] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hideOnScroll, setHideOnScroll] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const craftRenderer = document.querySelector('.craftjs-renderer');
        if (!craftRenderer) return;

        const handleScroll = () => {
            const currentScrollY = craftRenderer.scrollTop;

            setScrolled(currentScrollY > 10);

            if (stickyBehavior === 'onScrollUp') {
                if (currentScrollY > 100) {
                    if (currentScrollY > lastScrollY.current) {
                        setHideOnScroll(true);
                    }
                    else if (currentScrollY < lastScrollY.current) {
                        setHideOnScroll(false);
                    }
                } else {
                    setHideOnScroll(false);
                }
            }

            lastScrollY.current = currentScrollY;
        };

        craftRenderer.addEventListener('scroll', handleScroll, {passive: true});
        return () => craftRenderer.removeEventListener('scroll', handleScroll);
    }, [stickyBehavior]);

    const getHeaderStyle = () => {
        const horizontalPadding = viewport === 'mobile' ? paddingXMobile : paddingX;
        const baseStyle = {
            backgroundColor: backgroundColor,
            padding: `${paddingY}px ${horizontalPadding}px`,
            borderBottom: showBorder ? '1px solid #e5e7eb' : 'none',
            width: '100%',
            height: '80px',
            zIndex: 50,
        };

        if (stickyBehavior === 'none') {
            return {
                ...baseStyle,
                position: 'relative',
            };
        }

        return {
            ...baseStyle,
            position: 'sticky',
            top: 0,
            transition: stickyBehavior === 'onScrollUp' ? 'transform 0.3s ease-in-out' : 'none',
            transform: hideOnScroll ? 'translateY(-100%)' : 'translateY(0)',
        };
    };

    return (
        <header
            ref={(ref) => ref && connect(drag(ref))}
            className={`flex items-center justify-between`}
            style={getHeaderStyle()}
        >
            <div className="flex items-center"
                 style={{gap: `${gap}px ${viewport === 'mobile' ? paddingXMobile : '12px'}`}}>
                {viewport === 'mobile' && (
                    <Element id="menuitecontainer" is={Container_2} canvas>
                        <Element id="menuite" is={MenuItems} canvas/>
                    </Element>
                )}


                <Element id="lg" is={Container_2} canvas>
                    <Element id="log" is={Logo} canvas/>
                </Element>

            </div>

            {viewport === 'desktop' && !searchActive && (
                <Element id="menuitcontainer" is={Container_2} canvas>
                    <Element id="menuit" is={MenuItems} canvas/>
                </Element>
            )}

            <div className="flex items-center" style={{gap: `${gap}px`}}>
                <Element id="iconscontainer" is={Container_2} canvas>
                    <Element id="icons" is={IconButtons} canvas onSearchActiveChange={setSearchActive}/>
                </Element>
            </div>
        </header>
    );
}

export const NavigationBarSettings = () => {
    const {
        actions: {setProp},
        props,
    } = useNode((node) => ({
        props: node.data.props,
    }));

    return (
        <Card>
            <CardContent className="space-y-6 mt-4">
                <div className="space-y-4 p-3 rounded-md border bg-gray-50">
                    <div className="flex items-center justify-between">
                        <Label>Show Bottom Border</Label>
                        <Switch
                            checked={props.showBorder}
                            onCheckedChange={(v) => setProp((p) => (p.showBorder = v))}
                        />
                    </div>
                    <ColorPicker
                        label="Background Color"
                        value={props.backgroundColor}
                        onChange={(val) => setProp((p) => (p.backgroundColor = val))}
                    />
                </div>

                <div className="space-y-4 p-3 rounded-md border bg-gray-50">
                    <Label className="block mb-2 font-medium">Sticky Behavior</Label>
                    <Select
                        value={props.stickyBehavior}
                        onValueChange={(val) => setProp((p) => (p.stickyBehavior = val))}
                    >
                        <SelectTrigger>
                            <SelectValue/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="none">Not Sticky</SelectItem>
                            <SelectItem value="always">Always Sticky</SelectItem>
                            <SelectItem value="onScrollUp">Show on Scroll Up</SelectItem>
                        </SelectContent>
                    </Select>
                    <p className="text-xs text-gray-500 mt-1">
                        {props.stickyBehavior === 'none' && 'Header scrolls normally with content'}
                        {props.stickyBehavior === 'always' && 'Header stays fixed at top'}
                        {props.stickyBehavior === 'onScrollUp' && 'Header hides on scroll down, shows on scroll up'}
                    </p>
                </div>

                <div className="space-y-4 p-3 rounded-md border bg-gray-50">
                    <Label className="block mb-2 font-medium">Spacing</Label>

                    <div className="space-y-2">
                        <Label>Horizontal Padding</Label>
                        <div className="flex items-center gap-2">
                            <Slider
                                value={[props.paddingX]}
                                min={0}
                                max={100}
                                step={4}
                                onValueChange={(v) => setProp((p) => (p.paddingX = v[0]))}
                            />
                            <Input
                                type="number"
                                min={0}
                                max={100}
                                className="w-20 h-8 text-right"
                                value={props.paddingX}
                                onChange={(e) => setProp((p) => (p.paddingX = parseInt(e.target.value) || 0))}
                            />
                            <span className="text-sm text-gray-500">px</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>Mobile Horizontal Padding</Label>
                        <div className="flex items-center gap-2">
                            <Slider
                                value={[props.paddingXMobile]}
                                min={0}
                                max={100}
                                step={4}
                                onValueChange={(v) => setProp((p) => (p.paddingXMobile = v[0]))}
                            />
                            <Input
                                type="number"
                                min={0}
                                max={100}
                                className="w-20 h-8 text-right"
                                value={props.paddingXMobile}
                                onChange={(e) => setProp((p) => (p.paddingXMobile = parseInt(e.target.value) || 0))}
                            />
                            <span className="text-sm text-gray-500">px</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>Vertical Padding</Label>
                        <div className="flex items-center gap-2">
                            <Slider
                                value={[props.paddingY]}
                                min={0}
                                max={50}
                                step={2}
                                onValueChange={(v) => setProp((p) => (p.paddingY = v[0]))}
                            />
                            <Input
                                type="number"
                                min={0}
                                max={50}
                                className="w-20 h-8 text-right"
                                value={props.paddingY}
                                onChange={(e) => setProp((p) => (p.paddingY = parseInt(e.target.value) || 0))}
                            />
                            <span className="text-sm text-gray-500">px</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>Element Gap</Label>
                        <div className="flex items-center gap-2">
                            <Slider
                                value={[props.gap]}
                                min={0}
                                max={50}
                                step={2}
                                onValueChange={(v) => setProp((p) => (p.gap = v[0]))}
                            />
                            <Input
                                type="number"
                                min={0}
                                max={50}
                                className="w-20 h-8 text-right"
                                value={props.gap}
                                onChange={(e) => setProp((p) => (p.gap = parseInt(e.target.value) || 0))}
                            />
                            <span className="text-sm text-gray-500">px</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

Header.craft = {
    displayName: 'NavigationBar',
    props: {
        showBorder: true,
        backgroundColor: '',
        paddingX: 48,
        paddingXMobile: 12,
        paddingY: 16,
        gap: 12,
        stickyBehavior: 'always',
    },
    related: {
        settings: NavigationBarSettings,
    },
    rules: {
        canDrag: () => true,
        canMoveIn: () => true,
        canMoveOut: () => true,
    },
};
