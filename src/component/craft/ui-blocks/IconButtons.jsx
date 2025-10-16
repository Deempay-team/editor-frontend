'use client';

import React, {useEffect, useState} from 'react';
import {useNode} from '@craftjs/core';
import {Card, CardContent} from '@/components/ui/card';
import {Label} from '@/components/ui/label';
import {Slider} from '@/components/ui/slider';
import {Switch} from '@/components/ui/switch';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {Search, User, ShoppingCart} from 'lucide-react';
import ColorPicker from '@/components/ui/ColorPicker.jsx';
import {Input} from '@/components/ui/input.jsx';
import Image from 'next/image';
import Link from 'next/link';
import {useViewport} from '../../../Context/ViewportContext.jsx';
import searchIcon from '../../../assets/icons/search-normal.svg';
import ProfileIcon from '../../../assets/icons/user.svg';
import CartIcon from '../../../assets/icons/shopping-cart.svg';
import {createPortal} from "react-dom";
import CartSidebar from "./CartSidebar.jsx";

export const IconButtons = ({
                                searchIconSrc = searchIcon,
                                profileIconSrc = ProfileIcon,
                                cartIconSrc = CartIcon,
                                showSearch = true,
                                showAccount = true,
                                showCart = true,
                                cartCount = 1,
                                iconColor = '#000000',
                                iconHoverColor = '#F56565',
                                iconSize = '24px',
                                useLucideIcons = false,
                                onSearchActiveChange = () => {
                                },
                            }) => {
    const {
        connectors: {connect, drag},
    } = useNode();
    const {viewport} = useViewport();
    const [searchActive, setSearchActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [cartOpen, setCartOpen] = useState(false);
    const [isHoveringSearch, setIsHoveringSearch] = useState(false);
    const [isHoveringProfile, setIsHoveringProfile] = useState(false);
    const [isHoveringCart, setIsHoveringCart] = useState(false);
    const [headerElement, setHeaderElement] = useState(null);

    const iconSizeValue = parseInt(iconSize);

    useEffect(() => {
        const header = document.querySelector('header');
        if (header) {
            setHeaderElement(header);
        }
    }, []);

    const handleSearchActive = (active) => {
        setSearchActive(active);
        onSearchActiveChange(active);
    };

    const searchBar = searchActive && headerElement ? createPortal(
        <div
            className={`${
                viewport === 'mobile' ? 'w-[295px]' : 'w-[500px]'
            } absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center h-[52px] bg-gray-100 rounded-full px-6 gap-2 z-30`}
        >
            {useLucideIcons ? (
                <Search
                    style={{
                        color: iconColor,
                        width: `${iconSizeValue}px`,
                        height: `${iconSizeValue}px`,
                        pointerEvents: 'none',
                    }}
                />
            ) : (
                <Image
                    src={searchIconSrc}
                    alt="Search Icon"
                    width={iconSizeValue}
                    height={iconSizeValue}
                    style={{pointerEvents: 'none'}}
                />
            )}
            <input
                type="text"
                placeholder="Search products..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full bg-transparent text-black focus:outline-none text-sm"
                autoFocus
            />
            <button
                onClick={() => {
                    handleSearchActive(false);
                    setSearchValue('');
                }}
                className="text-gray-500 hover:text-black text-sm font-bold flex-shrink-0"
            >
                ✕
            </button>
        </div>,
        headerElement
    ) : null;

    return (
        <>
            {searchBar}
            <div
                ref={(ref) => connect(drag(ref))}
                className="flex items-center gap-3 md:gap-4 z-20"
            >
                {showSearch && !searchActive && (
                    useLucideIcons ? (
                        <Search
                            className="cursor-pointer transition-colors duration-200"
                            style={{
                                color: isHoveringSearch ? iconHoverColor : iconColor,
                                width: `${iconSizeValue}px`,
                                height: `${iconSizeValue}px`,
                            }}
                            onClick={() => handleSearchActive(true)}
                            onMouseEnter={() => setIsHoveringSearch(true)}
                            onMouseLeave={() => setIsHoveringSearch(false)}
                        />
                    ) : (
                        <Image
                            src={searchIconSrc}
                            alt="Search"
                            width={iconSizeValue}
                            height={iconSizeValue}
                            className="cursor-pointer transition-colors duration-200"
                            style={{
                                filter: isHoveringSearch
                                    ? 'invert(40%) sepia(93%) saturate(1000%) hue-rotate(320deg) brightness(100%) contrast(100%)' 
                                    : 'brightness(0) saturate(100%)',
                            }}
                            onClick={() => handleSearchActive(true)}
                            onMouseEnter={() => setIsHoveringSearch(true)}
                            onMouseLeave={() => setIsHoveringSearch(false)}
                        />
                    )
                )}

                {showAccount &&
                    (useLucideIcons ? (
                        <Link href="/profile">
                            <User
                                className="cursor-pointer transition-colors duration-200"
                                style={{
                                    color: isHoveringProfile ? iconHoverColor : iconColor,
                                    width: `${iconSizeValue}px`,
                                    height: `${iconSizeValue}px`,
                                }}
                                onMouseEnter={() => setIsHoveringProfile(true)}
                                onMouseLeave={() => setIsHoveringProfile(false)}
                            />
                        </Link>
                    ) : (
                        <Link href="/profile">
                            <Image
                                src={profileIconSrc}
                                alt="Profile"
                                width={iconSizeValue}
                                height={iconSizeValue}
                                className={`cursor-pointer transition-colors duration-200`}
                                style={{
                                    filter: isHoveringProfile
                                        ? 'invert(40%) sepia(93%) saturate(1000%) hue-rotate(320deg) brightness(100%) contrast(100%)' 
                                        : 'brightness(0) saturate(100%)',
                                }}
                                onMouseEnter={() => setIsHoveringProfile(true)}
                                onMouseLeave={() => setIsHoveringProfile(false)}
                            />
                        </Link>
                    ))}

                {showCart &&
                    (useLucideIcons ? (
                        <div className="relative">
                            <button
                                onClick={() => setCartOpen(true)}
                                className="flex items-center"
                            >
                                <ShoppingCart
                                    className="cursor-pointer transition-colors duration-200"
                                    style={{
                                        color: isHoveringCart ? iconHoverColor : iconColor,
                                        width: `${iconSizeValue}px`,
                                        height: `${iconSizeValue}px`,
                                    }}
                                    onMouseEnter={() => setIsHoveringCart(true)}
                                    onMouseLeave={() => setIsHoveringCart(false)}
                                />
                                {cartCount > 0 && (
                                    <span
                                        className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold leading-none">
                  {cartCount}
                </span>
                                )}
                            </button>
                        </div>
                    ) : (
                        <div className="relative">
                            <button
                                onClick={() => setCartOpen(true)}
                                className="flex items-center"
                            >
                                <Image
                                    src={cartIconSrc}
                                    alt="Cart"
                                    width={iconSizeValue}
                                    height={iconSizeValue}
                                    className={`cursor-pointer transition-colors duration-200`}
                                    style={{
                                        filter: isHoveringCart
                                            ? 'invert(40%) sepia(93%) saturate(1000%) hue-rotate(320deg) brightness(100%) contrast(100%)' 
                                            : 'brightness(0) saturate(100%)',
                                    }}
                                    onMouseEnter={() => setIsHoveringCart(true)}
                                    onMouseLeave={() => setIsHoveringCart(false)}
                                />
                                {cartCount > 0 && (
                                    <span
                                        className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold leading-none">
                  {cartCount}
                </span>
                                )}
                            </button>
                        </div>
                    ))}
                <CartSidebar
                    isOpen={cartOpen}
                    onClose={() => setCartOpen(false)}
                    viewport={viewport}
                />
            </div>
        </>
    );
};

export const IconButtonsSettings = () => {
    const {
        actions: {setProp},
        props,
    } = useNode((node) => ({
        props: node.data.props,
    }));

    return (
        <Card>
            <CardContent className="space-y-4 mt-4">
                <Tabs defaultValue="visibility" className="w-full">
                    <TabsList className="w-full grid grid-cols-2">
                        <TabsTrigger value="visibility">Visibility</TabsTrigger>
                        <TabsTrigger value="style">Style</TabsTrigger>
                    </TabsList>
                    <TabsContent value="visibility" className="space-y-4 mt-4">
                        <div className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50">
                            <Label>Show Search</Label>
                            <Switch
                                checked={props.showSearch}
                                onCheckedChange={(v) => setProp((p) => (p.showSearch = v))}
                            />
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50">
                            <Label>Show Account</Label>
                            <Switch
                                checked={props.showAccount}
                                onCheckedChange={(v) => setProp((p) => (p.showAccount = v))}
                            />
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50">
                            <Label>Show Cart</Label>
                            <Switch
                                checked={props.showCart}
                                onCheckedChange={(v) => setProp((p) => (p.showCart = v))}
                            />
                        </div>
                        <div className="space-y-2 pt-2">
                            <Label>Cart Count</Label>
                            <div className="flex items-center gap-2">
                                <Slider
                                    value={[props.cartCount]}
                                    min={0}
                                    max={50}
                                    step={1}
                                    onValueChange={(v) => setProp((p) => (p.cartCount = v[0]))}
                                />
                                <Input
                                    type="number"
                                    min={0}
                                    max={50}
                                    className="w-20 h-8 text-right"
                                    value={props.cartCount}
                                    onChange={(e) =>
                                        setProp((p) => (p.cartCount = parseInt(e.target.value) || 0))
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50">
                            <Label>Use Lucide Icons</Label>
                            <Switch
                                checked={props.useLucideIcons}
                                onCheckedChange={(v) => setProp((p) => (p.useLucideIcons = v))}
                            />
                        </div>
                    </TabsContent>
                    <TabsContent value="style" className="space-y-4 mt-4">
                        <div className="space-y-2">
                            <Label>Search Icon Source</Label>
                            <Input
                                value={props.searchIconSrc}
                                onChange={(e) => setProp((p) => (p.searchIconSrc = e.target.value))}
                                placeholder="Search icon path"
                                disabled={props.useLucideIcons}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Profile Icon Source</Label>
                            <Input
                                value={props.profileIconSrc}
                                onChange={(e) => setProp((p) => (p.profileIconSrc = e.target.value))}
                                placeholder="Profile icon path"
                                disabled={props.useLucideIcons}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Cart Icon Source</Label>
                            <Input
                                value={props.cartIconSrc}
                                onChange={(e) => setProp((p) => (p.cartIconSrc = e.target.value))}
                                placeholder="Cart icon path"
                                disabled={props.useLucideIcons}
                            />
                        </div>
                        <ColorPicker
                            label="Icon Color"
                            value={props.iconColor}
                            onChange={(val) => setProp((p) => (p.iconColor = val))}
                        />
                        <ColorPicker
                            label="Hover Color"
                            value={props.iconHoverColor}
                            onChange={(val) => setProp((p) => (p.iconHoverColor = val))}
                        />
                        <div className="space-y-2">
                            <Label>Icon Size</Label>
                            <div className="flex items-center gap-2">
                                <Slider
                                    value={[parseInt(props.iconSize)]}
                                    min={10}
                                    max={30}
                                    step={1}
                                    onValueChange={(v) =>
                                        setProp((p) => (p.iconSize = `${v[0]}px`))
                                    }
                                />
                                <Input
                                    type="number"
                                    min={10}
                                    max={30}
                                    className="w-20 h-8 text-right"
                                    value={parseInt(props.iconSize)}
                                    onChange={(e) =>
                                        setProp((p) => (p.iconSize = `${parseInt(e.target.value) || 10}px`))
                                    }
                                />
                                <span className="text-sm text-gray-500">{props.iconSize}</span>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
};

IconButtons.craft = {
    displayName: 'IconButtons',
    props: {
        searchIconSrc: searchIcon,
        profileIconSrc: ProfileIcon,
        cartIconSrc: CartIcon,
        showSearch: true,
        showAccount: true,
        showCart: true,
        cartCount: 1,
        iconColor: '#000000',
        iconHoverColor: '#F56565',
        iconSize: '24px',
        useLucideIcons: false,
    },
    related: {
        settings: IconButtonsSettings,
    },
    rules: {
        canDrag: () => true,
        canMoveIn: () => false,
        canMoveOut: () => true,
    },
};