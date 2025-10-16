'use client';

import {Element, useNode} from "@craftjs/core";
import {useForm} from 'react-hook-form';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import {Input} from "../../../../components/ui/input.jsx";
import {Card, CardContent} from '@/components/ui/card';
import {Label} from '@/components/ui/label';
import ColorPicker from '@/components/ui/ColorPicker';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {useViewport} from '../../../../Context/ViewportContext.jsx';
import {SliderControl} from "../SliderControl.jsx";
import {Container_2} from "../../user/Container_2.jsx";
import {IconElement} from "../../../../section/IconElement.jsx";
import UserImage from "../../../../assets/img/Avatar.png"
import {Text} from "../../user/Text/index.js";
import {Button} from "../../user/Button.jsx";
import RadioButton from "../RadioButton.jsx";
import {Image} from "../../user/Image.jsx"

export function ProfileRender({
                                  title = 'Profile',
                                  breadcrumb = 'HomePage / Profile',
                                  userName = 'Craft',
                                  userEmail = 'craft@gmail.com',
                                  userImage = UserImage,
                                  containerPadding = 40,
                                  containerPaddingMobile = 16,
                                  sidebarWidth = 315,
                                  sidebarWidthMobile = '100%',
                                  sidebarBgColor = '#FAFAFA',
                                  formBgColor = '#FFFFFF',
                                  formBorderColor = '#E5E7EB',
                                  textColor = '#000000',
                                  backgroundColor = '#FFFFFF',
                                  inputHeight = 40,
                                  inputBorderColor = "#E5E7EB",
                                  inputBorderRadius = 8,
                                  inputBgColor = "#FFFFFF",
                                  inputTextColor = "#000000",
                                  inputPlaceholderColor = "#9CA3AF",
                              }) {
    const {
        connectors: {connect, drag},
    } = useNode();

    const {viewport} = useViewport();
    const isMobile = viewport === 'mobile' || viewport.width < 768;
    const [selectedGender, setSelectedGender] = useState('');

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNo: '',
            gender: undefined,
        },
    });

    useEffect(() => {
        const mockData = {
            firstName: 'Craft',
            lastName: 'JS',
            email: 'craft.js@example.com',
            phoneNo: '+2348123456789',
            gender: 'MALE',
        };
        reset(mockData);
    }, [reset]);

    const onSubmit = (data) => {
        console.log('Form Submitted:', data);
    };

    const sidebarLinks = [
        {label: 'My order', href: '#'},
        {label: 'My address', href: '#'},
        {label: 'Change Password ', href: '#'},
        {label: 'Log out', href: '#'},
    ];

    return (
        <div
            ref={(ref) => connect(drag(ref))}
            className="w-full overflow-hidden"
            style={{backgroundColor}}
        >
            <div
                style={{
                    padding: isMobile ? `${containerPaddingMobile}px` : `${containerPadding}px`,
                    maxWidth: '1440px',
                    margin: 'auto',
                }}
            >
                <div className="mb-6">
                    <Element is={Container_2} id="title-container" canvas className="">
                        <Element
                            is={Text}
                            id="title_info"
                            text={title}
                            fontWeight="600"
                            color="#111827"
                            fontSizeDesktop={36}
                            fontSizeMobile={24}
                            canvas
                        />
                    </Element>

                    <Element is={Container_2} id="breadcrumb-container" canvas className="mt-3 mb-3">
                        <Element
                            is={Text}
                            id="breadcrumb"
                            text={breadcrumb}
                            fontWeight="500"
                            color="#4B5563"
                            fontSizeDesktop={16}
                            fontSizeMobile={12}
                            canvas
                        />
                    </Element>
                </div>
                <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} ${isMobile ? 'gap-6' : 'gap-10'} w-full`}>
                    <div
                        className="p-[20px] sm:p-[24px] gap-6 rounded flex-shrink-0"
                        style={{
                            width: isMobile ? sidebarWidthMobile : `${sidebarWidth}px`,
                            border: `1px solid ${formBorderColor}`,
                            backgroundColor: formBgColor
                        }}
                    >
                        <div
                            className="w-full rounded-[10px] flex flex-col items-center pt-6 gap-6 pb-6"
                            style={{backgroundColor: sidebarBgColor}}
                        >
                            <div
                                className="w-full flex items-center justify-center"
                            >
                                <Element
                                    is={Container_2}
                                    id="profile-imae-container"
                                    className=""
                                    canvas
                                >
                                <Element
                                    is={Image}
                                    id={`profile-image`}
                                    src={userImage.src}
                                    alt={`profile image`}
                                    fit="contain"
                                    widthMode="custom"
                                    width="220"
                                    widthModeMobile="custom"
                                    widthMobile="180"
                                    heightMode="custom"
                                    height="220"
                                    heightModeMobile="custom"
                                    heightMobile="180"
                                    className="w-full h-full rounded-lg"
                                />
                            </Element>

                            </div>
                            <div className="text-center">
                                <Element is={Container_2} id="userName-container" canvas className="">
                                    <Element
                                        is={Text}
                                        id="userName"
                                        text={userName}
                                        fontWeight="700"
                                        color="#000000"
                                        fontSizeDesktop={24}
                                        fontSizeMobile={20}
                                        canvas
                                    />
                                </Element>
                                <Element is={Container_2} id="userEmail-container" canvas className="mt-2">
                                    <Element
                                        is={Text}
                                        id="userEmail"
                                        text={userEmail}
                                        fontWeight="400"
                                        color="#666666"
                                        fontSizeDesktop={16}
                                        fontSizeMobile={12}
                                        canvas
                                    />
                                </Element>
                            </div>
                            <div className="flex flex-col gap-3 w-full items-center">
                                <Element
                                    is={Container_2}
                                    id="account-info-button-container"
                                    className=""
                                    canvas
                                >
                                    <Element
                                        is={Button}
                                        id="account-info-button"
                                        backgroundColor="#FF4D00"
                                        fontSizeDesktop={14}
                                        width={210}
                                        widthMobile={200}
                                        // fontSizeMobile={12}
                                        // paddingX={18}
                                        // paddingXMobile={30}
                                        className="flex items-center justify-between"
                                        canvas
                                    >
                                        <Element
                                            is={Text}
                                            id="account-info"
                                            text="Account Info"
                                            fontWeight="400"
                                            color="#ffffff"
                                            fontSizeDesktop={14}
                                            fontSizeMobile={12}
                                            // className="mr-20"
                                        />
                                        <Element
                                            is={IconElement}
                                            id="arrow-right-icon"
                                            iconType="ArrowRightIcon"
                                            iconSize={20}
                                            iconSizeMobile={18}
                                            iconColor="#FFFFFF"
                                            className=" flex items-center justify-between mt-1"
                                        />
                                    </Element>
                                </Element>
                                {sidebarLinks.map(({label, href}, index) => (
                                    <Element
                                        key={index}
                                        is={Container_2}
                                        id={`sidebar-item-${index}`}
                                        canvas
                                    >
                                        <Link href={href} className="">

                                            <Element
                                                is={Container_2}
                                                id="account-info-button-container"
                                                className=""
                                                canvas
                                            >
                                                <Element
                                                    is={Button}
                                                    id={`sidebar-button-${index}`}
                                                    backgroundColor="#FFFFFF"
                                                    className="flex items-center justify-between gap-2 px-4"
                                                    width={210}
                                                    widthMobile={200}
                                                    // paddingX={50}
                                                    // paddingXMobile={50}
                                                    canvas
                                                >
                                                    <Element
                                                        is={Text}
                                                        id={`sidebar-text-${index}`}
                                                        text={label}
                                                        fontWeight="500"
                                                        fontSizeDesktop={14}
                                                        fontSizeMobile={12}
                                                        color="#111111"
                                                        // className="mr-20"
                                                    />

                                                    {/* Icon */}
                                                    <Element
                                                        is={IconElement}
                                                        id={`arrow-ri-icon-${index}`}
                                                        iconType="ArrowRightIcon"
                                                        iconSize={20}
                                                        iconSizeMobile={17}
                                                        iconColor="#111111"
                                                        className="ml-5 flex items-center justify-between mt-1"

                                                    />
                                                </Element>
                                            </Element>
                                        </Link>
                                    </Element>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div
                        className="flex-1 min-w-0 rounded-[10px]"
                        style={{
                            border: `1px solid ${formBorderColor}`,
                            backgroundColor: formBgColor
                        }}
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                            <div className={`flex items-center gap-2 pt-5 ${isMobile ? 'px-4' : 'px-6'}`}>
                                <Element is={Container_2} id="profile-icon-container" className="mt-1" canvas>
                                    <Element
                                        is={IconElement}
                                        id="profile-icon"
                                        iconType="profileIcon"
                                        iconSize={22}
                                        iconSizeMobile={20}
                                        iconColor="#444444"
                                        canvas
                                    />
                                </Element>
                                <Element is={Container_2} id="shipping-container" canvas className="">
                                    <Element
                                        is={Text}
                                        id="shipping_info"
                                        text="ACCOUNT INFO"
                                        fontWeight="400"
                                        color="#4B5563"
                                        fontSizeDesktop={16}
                                        fontSizeMobile={14}
                                        canvas
                                    />
                                </Element>
                            </div>
                            <hr style={{borderColor: formBorderColor}} className="mt-2"/>
                            <div
                                className={`flex ${isMobile ? 'flex-col gap-4' : 'flex-row gap-[32px]'} ${isMobile ? 'px-4' : 'px-6'} pt-4`}>
                                <div className="flex-1 min-w-0">
                                    <Element is={Container_2} id="first-name-label-container" canvas className="mb-2">
                                        <Element
                                            is={Text}
                                            id="first-name-label"
                                            text="First Name"
                                            fontWeight="600"
                                            color="#111827"
                                            fontSizeDesktop={16}
                                            fontSizeMobile={14}
                                            canvas
                                        />
                                    </Element>
                                    <div
                                        style={{
                                            height: `${inputHeight}px`,
                                            border: `1px solid ${inputBorderColor}`,
                                            borderRadius: `${inputBorderRadius}px`,
                                            backgroundColor: inputBgColor,
                                        }}
                                        className="w-full"
                                    >
                                        <Input
                                            type="text"
                                            placeholder="Enter first name"
                                            {...register('firstName', {required: 'First name is required'})}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                backgroundColor: "transparent",
                                                border: "none",
                                                outline: "none",
                                                color: inputTextColor,
                                            }}
                                            className={`placeholder:text-[${inputPlaceholderColor}]`}
                                        />
                                    </div>
                                    {errors.firstName && (
                                        <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <Element is={Container_2} id="last-name-label-container" canvas className="mb-2">
                                        <Element
                                            is={Text}
                                            id="last-name-label"
                                            text="Last Name"
                                            fontWeight="600"
                                            color="#111827"
                                            fontSizeDesktop={16}
                                            fontSizeMobile={14}
                                            canvas
                                        />
                                    </Element>
                                    <div
                                        style={{
                                            height: `${inputHeight}px`,
                                            border: `1px solid ${inputBorderColor}`,
                                            borderRadius: `${inputBorderRadius}px`,
                                            backgroundColor: inputBgColor,
                                        }}
                                        className="w-full"
                                    >
                                        <Input
                                            type="text"
                                            placeholder="Enter last name"
                                            {...register('lastName', {required: 'Last name is required'})}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                backgroundColor: "transparent",
                                                border: "none",
                                                outline: "none",
                                                color: inputTextColor,
                                            }}
                                            className={`placeholder:text-[${inputPlaceholderColor}]`}
                                        />
                                    </div>
                                    {errors.lastName && (
                                        <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className={`${isMobile ? 'px-4' : 'px-6'} pt-4`}>
                                <Element is={Container_2} id="email-label-container" canvas className="mb-2">
                                    <Element
                                        is={Text}
                                        id="email-label"
                                        text="Email Address"
                                        fontWeight="600"
                                        color="#111827"
                                        fontSizeDesktop={16}
                                        fontSizeMobile={14}
                                        canvas
                                    />
                                </Element>
                                <div
                                    style={{
                                        height: `${inputHeight}px`,
                                        border: `1px solid ${inputBorderColor}`,
                                        borderRadius: `${inputBorderRadius}px`,
                                        backgroundColor: inputBgColor,
                                    }}
                                    className="w-full"
                                >
                                    <Input
                                        type="email"
                                        placeholder="Enter email"
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /\S+@\S+\.\S+/,
                                                message: 'Invalid email address',
                                            },
                                        })}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            backgroundColor: "transparent",
                                            border: "none",
                                            outline: "none",
                                            color: inputTextColor,
                                        }}
                                        className={`placeholder:text-[${inputPlaceholderColor}]`}
                                    />
                                </div>
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                )}
                            </div>

                            <div className={`${isMobile ? 'px-4' : 'px-6'} pt-4`}>
                                <Element is={Container_2} id="phone-label-container" canvas className="mb-2">
                                    <Element
                                        is={Text}
                                        id="phone-label"
                                        text="Phone Number"
                                        fontWeight="600"
                                        color="#111827"
                                        fontSizeDesktop={16}
                                        fontSizeMobile={14}
                                        canvas
                                    />
                                </Element>
                                <div
                                    style={{
                                        height: `${inputHeight}px`,
                                        border: `1px solid ${inputBorderColor}`,
                                        borderRadius: `${inputBorderRadius}px`,
                                        backgroundColor: inputBgColor,
                                    }}
                                    className="w-full"
                                >
                                    <Input
                                        type="text"
                                        placeholder="Enter phone number"
                                        {...register('phoneNo', {
                                            required: 'Phone number is required',
                                            pattern: {
                                                value: /^\+?\d{10,15}$/,
                                                message: 'Invalid phone number',
                                            },
                                        })}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            backgroundColor: "transparent",
                                            border: "none",
                                            outline: "none",
                                            color: inputTextColor,
                                        }}
                                        className={`placeholder:text-[${inputPlaceholderColor}]`}
                                    />
                                </div>
                                {errors.phoneNo && (
                                    <p className="text-red-500 text-sm mt-1">{errors.phoneNo.message}</p>
                                )}
                            </div>
                            <div
                                className={`${isMobile ? 'px-4' : 'px-6'} pt-6 flex ${
                                    isMobile ? 'flex-col gap-4' : 'flex-row gap-8'
                                }`}
                            >
                                {['MALE', 'FEMALE'].map((value) => (
                                    <Element
                                        key={value}
                                        is={Container_2}
                                        id={`gender-option-${value}`}
                                        className="flex flex-col gap-2 flex-1"
                                        canvas
                                    >
                                        <Element
                                            is={Container_2}
                                            id={`gender-label-container-${value}`}
                                            className="flex items-center justify-between"
                                            style={{ color: textColor }}
                                        >
                                            <Element
                                                is={Text}
                                                id={`gender-text-${value}`}
                                                text={value === 'MALE' ? 'MALE' : 'FEMALE'}
                                                fontWeight={400}
                                                fontSizeDesktop={16}
                                                fontSizeMobile={14}
                                                color={textColor}
                                                className="select-none"
                                            />
                                            <Element
                                                is={RadioButton}
                                                id={`gender-radio-${value}`}
                                                name="gender"
                                                option=""
                                                value={value}
                                                radioSize={20}
                                                radioColor="#FF4D00"
                                                className="p-1"
                                                checked={selectedGender === value}
                                                onChange={() => setSelectedGender(value)}
                                            />
                                        </Element>

                                        <hr style={{ borderColor: formBorderColor }} />
                                    </Element>
                                ))}
                            </div>


                            {errors.gender && (
                                <p className={`text-red-500 text-sm ${isMobile ? 'px-4' : 'px-6'} pt-2`}>{errors.gender.message}</p>
                            )}
                            <div className={`${isMobile ? 'px-4' : 'px-6'} pb-6 mt-3`}>
                                <Element is={Container_2} id="save-container" canvas>
                                    <Element
                                        is={Button}
                                        id="save"
                                        children="Save"
                                        backgroundColor="#FF4D00"
                                        fontSizeDesktop={14}
                                        fontSizeMobile={12}
                                        paddingX={175}
                                        paddingXMobile={136}
                                        canvas
                                    />
                                </Element>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function ProfileRenderSettings() {
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
                    <TabsContent value="layout" className="space-y-4 mt-2 rounded-md border bg-gray-50 p-3">
                        <SliderControl
                            label="Container Padding"
                            value={props.containerPadding}
                            onChange={(val) => setProp((p) => (p.containerPadding = val))}
                            min={0}
                            max={100}
                            step={4}
                            stack={true}
                        />

                        <SliderControl
                            label="Sidebar Width"
                            value={props.sidebarWidth}
                            onChange={(val) => setProp((p) => (p.sidebarWidth = val))}
                            min={250}
                            max={400}
                            step={5}
                            stack={true}
                        />
                        <SliderControl
                            label="Input Border Radius"
                            value={props.inputBorderRadius}
                            onChange={(val) => setProp((p) => (p.inputBorderRadius = val))}
                            min={0}
                            max={20}
                            step={1}
                            stack={true}
                        />
                        <SliderControl
                            label="Input Height"
                            value={props.inputHeight}
                            onChange={(val) => setProp((p) => (p.inputHeight = val))}
                            min={30}
                            max={60}
                            step={1}
                            stack={true}
                        />
                    </TabsContent>

                    <TabsContent value="colors" className="space-y-4 mt-2 rounded-md border bg-gray-50 p-2">
                        <ColorPicker
                            label="Background Color"
                            value={props.backgroundColor}
                            onChange={(val) => setProp((p) => (p.backgroundColor = val))}
                        />

                        <ColorPicker
                            label="Sidebar Background"
                            value={props.sidebarBgColor}
                            onChange={(val) => setProp((p) => (p.sidebarBgColor = val))}
                        />

                        <ColorPicker
                            label="Form Background"
                            value={props.formBgColor}
                            onChange={(val) => setProp((p) => (p.formBgColor = val))}
                        />

                        <ColorPicker
                            label="Border Color"
                            value={props.formBorderColor}
                            onChange={(val) => setProp((p) => (p.formBorderColor = val))}
                        />

                        <ColorPicker
                            label="Input Border Color"
                            value={props.inputBorderColor}
                            onChange={(val) => setProp((p) => (p.inputBorderColor = val))}
                        />

                        <ColorPicker
                            label="Input Background Color"
                            value={props.inputBgColor}
                            onChange={(val) => setProp((p) => (p.inputBgColor = val))}
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
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
}

ProfileRender.craft = {
    displayName: 'Profile',
    props: {
        title: 'Profile',
        breadcrumb: 'HomePage / Profile',
        userName: 'Craft Js',
        userEmail: 'craft@gmail.com',
        userImage: UserImage,
        containerPadding: 40,
        containerPaddingMobile: 16,
        sidebarWidth: 315,
        sidebarWidthMobile: '100%',
        profileImageSize: 220,
        profileImageSizeMobile: 160,
        sidebarBgColor: '#FAFAFA',
        sidebarBorderColor: '#E5E7EB',
        formBgColor: '#FFFFFF',
        formBorderColor: '#E5E7EB',
        primaryColor: '#FF4D00',
        textColor: '#000000',
        secondaryTextColor: '#4B5563',
        backgroundColor: '#FFFFFF',
        inputHeight: 40,
        inputBorderColor: "#E5E7EB",
        inputBorderRadius: 8,
        inputBgColor: "#FFFFFF",
        inputTextColor: "#000000",
        inputPlaceholderColor: "#9CA3AF",
    },
    related: {
        settings: ProfileRenderSettings,
    },
    rules: {
        canDrag: () => true,
        canMoveIn: () => false,
        canMoveOut: () => true,
    },
};