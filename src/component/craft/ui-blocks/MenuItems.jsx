'use client';

import React, { useState } from 'react';
import { useNode } from '@craftjs/core';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useViewport } from '../../../Context/ViewportContext.jsx';
import BurgerMenuIcon from '../../../assets/icons/Frame.svg';

import { Plus, Trash2, GripVertical, MoreHorizontal, Pencil } from 'lucide-react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from "../../../components/ui/tabs.jsx";
import {Label} from "../../../components/ui/label.jsx";
import {Button} from "../../../components/ui/button.jsx";
import {Input} from "../../../components/ui/input.jsx";
import {Switch} from "../../../components/ui/switch.jsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "../../../components/ui/dropdown-menu.jsx";
import ColorPicker from "../../../components/ui/ColorPicker.jsx";
import {Slider} from "../../../components/ui/slider.jsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "../../../components/ui/select.jsx";
import {Card, CardContent} from "../../../components/ui/card.jsx";
import SlideSidebar from "./SlideSidebar.jsx";

export const MenuItems = ({
                              burgerMenuSrc = BurgerMenuIcon,
                              navLinks = [
                                  { name: 'Home', path: '/', active: true, visible: true },
                                  { name: 'Products', path: '/products', active: false, visible: true },
                                  { name: 'Contacts', path: '/contacts', active: false, visible: true },
                                  { name: 'About', path: '/about', active: false, visible: true },
                              ],
                              menuItemColor = '#212121',
                              menuItemHoverColor = '#898484',
                              activeItemColor = '#FF4D00',
                              itemSpacing = 24,
                              textTransform = 'default',
                              textAlign = 'left',
                              fontWeight = 'normal',
                              verticalAlign = 'middle',
                              fontSize = '14px',
                              sidebarFontSize = '20px',
                              underlineStyle = 'underline',
                          }) => {
    const {
        connectors: { connect, drag },
    } = useNode();
    const { viewport } = useViewport();
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="flex items-center gap-3">
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={viewport === 'mobile' ? '' : 'hidden'}
                aria-label="Toggle menu"
            >
                <Image
                    src={burgerMenuSrc}
                    alt="Menu"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                />
            </button>
            <nav
                ref={(ref) => connect(drag(ref))}
                className={`gap-6 text-sm font-medium ${viewport === 'desktop' ? 'flex' : 'hidden'}`}
                style={{
                    flexWrap: 'wrap',
                    justifyContent:
                        textAlign === 'left' ? 'flex-start' : textAlign === 'center' ? 'center' : 'flex-end',
                    alignItems:
                        verticalAlign === 'top' ? 'flex-start' : verticalAlign === 'middle' ? 'center' : 'flex-end',
                }}
            >
                {navLinks.map(
                    (link, i) =>
                        link.visible && (
                            <Link
                                key={i}
                                href={link.path}
                                className={`transition-colors ${
                                    pathname === link.path ||
                                    (pathname.startsWith(link.path) && link.path !== '/')
                                        ? `font-semibold ${underlineStyle === 'underline' ? 'underline' : ''}`
                                        : underlineStyle === 'hover'
                                            ? 'hover:underline'
                                            : ''
                                }`}
                                style={{
                                    color: pathname === link.path ? activeItemColor : menuItemColor,
                                    fontWeight:
                                        fontWeight === 'normal' ? '400' : fontWeight === 'medium' ? '500' : '700',
                                    fontSize: fontSize,
                                    marginRight: i === navLinks.length - 1 ? '0px' : `${itemSpacing}px`,
                                    textTransform: textTransform === 'default' ? 'none' : textTransform,
                                }}
                                onMouseEnter={(e) => (e.target.style.color = menuItemHoverColor)}
                                onMouseLeave={(e) =>
                                    (e.target.style.color = pathname === link.path ? activeItemColor : menuItemColor)
                                }
                            >
                                {link.name}
                            </Link>
                        )
                )}
            </nav>
            <SlideSidebar
                isOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
                title="Menu"
                width="95%"
                maxWidth="max-w-sm"
            >
                <nav className="flex flex-col gap-4">
                    {navLinks.map(
                        (link, i) =>
                            link.visible && (
                                <Link
                                    key={i}
                                    href={link.path}
                                    className={`text-sm font-medium transition-colors  ${
                                        pathname === link.path ||
                                        (pathname.startsWith(link.path) && link.path !== '/')
                                            ? `font-semibold ${underlineStyle === 'underline' ? 'underline' : ''}`
                                            : underlineStyle === 'hover'
                                                ? 'hover:underline'
                                                : ''
                                    }`}
                                    style={{
                                        color: pathname === link.path ? activeItemColor : menuItemColor,
                                        fontWeight:
                                            fontWeight === 'normal' ? '400' : fontWeight === 'medium' ? '500' : '700',
                                        fontSize: sidebarFontSize,
                                        textTransform: textTransform === 'default' ? 'none' : textTransform,
                                    }}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            )
                    )}
                </nav>
            </SlideSidebar>
        </div>
    );
};

export const MenuItemsSettings = () => {
    const {
        actions: { setProp },
        props,
    } = useNode((node) => ({
        props: node.data.props,
    }));

    const [editingItemIndex, setEditingItemIndex] = useState(null);

    const addMenuItem = () => {
        setProp((p) => {
            p.navLinks = [
                ...p.navLinks,
                { name: 'New Item', path: '#', active: false, visible: true },
            ];
        });
    };

    const updateMenuItem = (index, field, value) => {
        setProp((p) => {
            const newNavLinks = [...p.navLinks];
            newNavLinks[index] = { ...newNavLinks[index], [field]: value };
            p.navLinks = newNavLinks;
        });
    };

    const removeMenuItem = (index) => {
        setProp((p) => {
            p.navLinks = p.navLinks.filter((_, i) => i !== index);
        });
    };

    const handleRename = (index, newName) => {
        updateMenuItem(index, 'name', newName);
        setEditingItemIndex(null);
    };

    return (
        <Card>
            <CardContent className="space-y-4">
                <Tabs defaultValue="content" className="w-full">
                    <TabsList className="w-full grid grid-cols-2">
                        <TabsTrigger value="content">Content</TabsTrigger>
                        <TabsTrigger value="style">Style</TabsTrigger>
                    </TabsList>

                    <TabsContent value="content" className="space-y-4 mt-4">
                        <div className="space-y-2">
                            <div className="flex justify-between items-center mb-4">
                                <Label className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                                    Menu Items
                                </Label>
                                <Button
                                    size="sm"
                                    className="flex items-center gap-1"
                                    onClick={addMenuItem}
                                >
                                    <Plus className="w-4 h-4" /> Add Item
                                </Button>
                            </div>
                            {props.navLinks.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center gap-3 p-3 rounded-md transition-colors duration-200 cursor-pointer ${
                                        item.active
                                            ? 'bg-blue-100 border border-blue-400'
                                            : 'bg-gray-100 border border-gray-200 hover:bg-gray-50'
                                    }`}
                                    onClick={() =>
                                        setProp((p) => {
                                            p.navLinks = p.navLinks.map((mi, i) => ({
                                                ...mi,
                                                active: i === index,
                                            }));
                                        })
                                    }
                                >
                                    <div className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                                        <GripVertical className="w-4 h-4" />
                                    </div>
                                    {editingItemIndex === index ? (
                                        <Input
                                            value={item.name}
                                            onChange={(e) => updateMenuItem(index, 'name', e.target.value)}
                                            onBlur={(e) => handleRename(index, e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    handleRename(index, e.target.value);
                                                }
                                            }}
                                            className="flex-1 bg-transparent border-none p-0 text-sm focus-visible:ring-0"
                                            autoFocus
                                        />
                                    ) : (
                                        <span
                                            className={`flex-1 text-sm ${
                                                item.active ? 'font-medium text-blue-600' : 'text-gray-800'
                                            }`}
                                        >
                      {item.name}
                    </span>
                                    )}
                                    <Input
                                        value={item.path}
                                        onChange={(e) => updateMenuItem(index, 'path', e.target.value)}
                                        placeholder="Link Path"
                                        className="flex-1 text-sm"
                                    />
                                    <div className="flex items-center gap-2">
                                        <Switch
                                            checked={item.visible}
                                            onCheckedChange={(v) => updateMenuItem(index, 'visible', v)}
                                            onClick={(e) => e.stopPropagation()}
                                            title={item.visible ? 'Hide' : 'Show'}
                                        />
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className={`rounded-full ${
                                                        item.active ? 'text-blue-600' : 'text-gray-500'
                                                    }`}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <MoreHorizontal className="w-4 h-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuItem onClick={() => setEditingItemIndex(index)}>
                                                    <Pencil className="w-4 h-4 mr-2" />
                                                    Edit
                                                </DropdownMenuItem>
                                                <DropdownMenuItem
                                                    className="text-red-500"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        removeMenuItem(index);
                                                    }}
                                                >
                                                    <Trash2 className="w-4 h-4 mr-2" />
                                                    Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="style" className="space-y-4 mt-4">
                        <div className="space-y-2">
                            <Label>Underline Style</Label>
                            <Select
                                value={props.underlineStyle}
                                onValueChange={(val) => setProp((p) => (p.underlineStyle = val))}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="none">None</SelectItem>
                                    <SelectItem value="underline">Always</SelectItem>
                                    <SelectItem value="hover">On Hover</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <ColorPicker
                            label="Menu Item Color"
                            value={props.menuItemColor}
                            onChange={(val) => setProp((p) => (p.menuItemColor = val))}
                        />
                        <ColorPicker
                            label="Hover Color"
                            value={props.menuItemHoverColor}
                            onChange={(val) => setProp((p) => (p.menuItemHoverColor = val))}
                        />
                        <ColorPicker
                            label="Active Item Color"
                            value={props.activeItemColor}
                            onChange={(val) => setProp((p) => (p.activeItemColor = val))}
                        />
                        <div className="space-y-2">
                            <Label>Item Spacing</Label>
                            <div className="flex items-center gap-2">
                                <Slider
                                    value={[props.itemSpacing]}
                                    min={0}
                                    max={50}
                                    step={1}
                                    onValueChange={(v) => setProp((p) => (p.itemSpacing = v[0]))}
                                />
                                <Input
                                    type="number"
                                    min={0}
                                    max={50}
                                    className="w-20 h-8 text-right"
                                    value={props.itemSpacing}
                                    onChange={(e) =>
                                        setProp((p) => (p.itemSpacing = parseInt(e.target.value)))
                                    }
                                />
                                <span className="text-sm text-gray-500">px</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label>Font Size</Label>
                            <Select
                                value={props.fontSize}
                                onValueChange={(val) => setProp((p) => (p.fontSize = val))}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="12px">12px</SelectItem>
                                    <SelectItem value="14px">14px</SelectItem>
                                    <SelectItem value="16px">16px</SelectItem>
                                    <SelectItem value="18px">18px</SelectItem>
                                    <SelectItem value="20px">20px</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label>Sidebar Font Size</Label>
                            <Select
                                value={props.sidebarFontSize}
                                onValueChange={(val) => setProp((p) => (p.sidebarFontSize = val))}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="12px">12px</SelectItem>
                                    <SelectItem value="14px">14px</SelectItem>
                                    <SelectItem value="16px">16px</SelectItem>
                                    <SelectItem value="18px">18px</SelectItem>
                                    <SelectItem value="20px">20px</SelectItem>
                                    <SelectItem value="24px">24px</SelectItem>
                                    <SelectItem value="28px">28px</SelectItem>
                                    <SelectItem value="32px">32px</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                            <Label className="block mb-2 font-medium">Text Case</Label>
                            <Tabs
                                value={props.textTransform}
                                onValueChange={(val) => setProp((p) => (p.textTransform = val))}
                            >
                                <TabsList className="w-full grid grid-cols-2">
                                    <TabsTrigger value="default">Default</TabsTrigger>
                                    <TabsTrigger value="uppercase">Uppercase</TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                            <Label className="block mb-2 font-medium">Horizontal Alignment</Label>
                            <Tabs
                                value={props.textAlign}
                                onValueChange={(val) => setProp((p) => (p.textAlign = val))}
                            >
                                <TabsList className="w-full grid grid-cols-3">
                                    <TabsTrigger value="left">Left</TabsTrigger>
                                    <TabsTrigger value="center">Center</TabsTrigger>
                                    <TabsTrigger value="right">Right</TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                            <Label className="block mb-2 font-medium">Vertical Alignment</Label>
                            <Tabs
                                value={props.verticalAlign}
                                onValueChange={(val) => setProp((p) => (p.verticalAlign = val))}
                            >
                                <TabsList className="w-full grid grid-cols-3">
                                    <TabsTrigger value="top">Top</TabsTrigger>
                                    <TabsTrigger value="middle">Middle</TabsTrigger>
                                    <TabsTrigger value="bottom">Bottom</TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                            <Label className="block mb-2 font-medium">Font Weight</Label>
                            <Tabs
                                value={props.fontWeight}
                                onValueChange={(val) => setProp((p) => (p.fontWeight = val))}
                            >
                                <TabsList className="w-full grid grid-cols-3">
                                    <TabsTrigger value="normal">Normal</TabsTrigger>
                                    <TabsTrigger value="medium">Medium</TabsTrigger>
                                    <TabsTrigger value="bold">Bold</TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
};

MenuItems.craft = {
    displayName: 'MenuItems',
    props: {
        burgerMenuSrc: BurgerMenuIcon,
        navLinks: [
            { name: 'Home', path: '/', active: true, visible: true },
            { name: 'Products', path: '/products', active: false, visible: true },
            { name: 'Contacts', path: '/contacts', active: false, visible: true },
            { name: 'About', path: '/about', active: false, visible: true },
        ],
        menuItemColor: '#212121',
        menuItemHoverColor: '#898484',
        activeItemColor: '#FF4D00',
        itemSpacing: 24,
        textTransform: 'default',
        textAlign: 'left',
        fontWeight: 'normal',
        verticalAlign: 'middle',
        fontSize: '14px',
        sidebarFontSize: '20px',
        underlineStyle: 'underline',
    },
    related: {
        settings: MenuItemsSettings,
    },
    rules: {
        canDrag: () => true,
        canMoveIn: () => false,
        canMoveOut: () => true,
    },
};