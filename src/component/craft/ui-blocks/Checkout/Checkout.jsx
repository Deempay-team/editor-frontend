import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Element, useNode} from '@craftjs/core';
import {Input} from '@/components/ui/input';
import productImage from '../../../../assets/img/img.png';
import {useViewport} from "../../../../Context/ViewportContext.jsx";
import {Container_2} from "../../user/Container_2.jsx";
import {Text} from "../../user/Text/index.js";
import {Button} from "../../user/Button.jsx";
import RadioButton from "../RadioButton.jsx";
import {Textarea} from "../../../../components/ui/textarea.jsx";
import {IconElement} from "../../../../section/IconElement.jsx";
import Modal from "../Modal.jsx";
import RectangleImage from "../../../../assets/icons/Rectangle 62.svg";
import {CheckoutRenderSettings} from "./CheckoutRenderSettings.jsx";

const defaultProduct = {
    name: 'Feroglobin Liquid plus',
    type: 'Syrup',
    quantity: '200ML',
    price: 120000,
    image: productImage,
};

const defaultUserAddress = {
    firstName: 'Peter',
    lastName: 'Godwin',
    addressLine1: 'Yaba, Lagos',
    aptSuite: 'Bariga',
    addressLine2: '',
    city: 'Lagos',
    country: 'Nigeria',
    stateProvince: '',
    postalCode: '0111101',
};

export function CheckoutRender({
                                   title = 'Checkout',
                                   breadcrumb = 'HomePage / Checkout',
                                   confirmOrder = "Confirm Order",
                                   containerPadding = 40,
                                   overallBgColor = '#FFFFFF',
                                   sectionBgColor = '#FFFFFF',
                                   sectionBorderColor = '#E5E7EB',
                                   sectionBorderRadius = 16,
                                   sectionPadding = 24,
                                   sectionGap = 24,
                                   labelFontSize = 16,
                                   labelColor = '#111827',
                                   labelFontWeight = 600,
                                   inputHeight = 44,
                                   inputBorderColor = '#E5E7EB',
                                   inputBorderRadius = 12,
                                   inputBgColor = '#FFFFFF',
                                   inputTextColor = '#000000',
                                   inputPlaceholderColor = '#9CA3AF',
                                   summaryBgColor = '#FFFFFF',
                                   summaryBorderColor = '#0000001A',
                                   summaryBorderRadius = 8,
                                   summaryWidth = 505,
                                   summaryPadding = 24,
                                   productData = defaultProduct,
                                   quantity = 3,
                                   subtotal = 362000,
                                   deliveryFee = 2000,
                                   vat = 0.5,
                                   confirmLink = '/orders',
                                   apply = "Apply",
                                   userAddress = defaultUserAddress,
                                   radioSize = 20,
                                   radioColor = '#FF4D00',
                                   radioTextColor = '#000000',
                                   radioTextSize = 16,
                               }) {
    const {
        connectors: {connect, drag},
    } = useNode();
    const {viewport} = useViewport();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

    const handleConfirmOrder = () => {
        setIsModalOpen(true);
    };
    const handleAddNewAddress = () => {
        setIsAddressModalOpen(true);
    };

    const total = subtotal + deliveryFee;

    const [showAddressFields, setShowAddressFields] = useState(!userAddress.firstName);
    const [billingOption, setBillingOption] = useState('Same as shipping address');
    const [paymentMethod, setPaymentMethod] = useState('Pay with bank');

    const formatAddress = () => {
        const {
            firstName,
            lastName,
            addressLine1,
            aptSuite,
            addressLine2,
            city,
            stateProvince,
            postalCode,
            country
        } = userAddress;
        const parts = [
            `${firstName} ${lastName}`,
            addressLine1,
            aptSuite,
            addressLine2,
            `${city}, ${stateProvince} ${postalCode}`,
            country,
        ].filter(part => part);
        return parts.join(', ');
    };

    return (
        <div ref={(ref) => connect(drag(ref))} style={{backgroundColor: overallBgColor}}
             className="min-h-screen flex flex-col">
            <div style={{padding: viewport === 'mobile' ? '12px' : `${containerPadding}px`}} className="flex-grow">
                <div className="mb-6">
                    <Element is={Container_2} id="checkout-title-container" canvas>
                        <Element
                            is={Text}
                            id="title"
                            text={title}
                            fontWeight="600"
                            color="#000000"
                            fontSizeDesktop={viewport === "desktop" ? 36 : 28}
                            fontSizeMobile={viewport === "mobile" ? 28 : 28}
                            canvas
                        />
                    </Element>
                    <Element is={Container_2} id="breadcrumb-container" canvas>
                        <Element
                            is={Text}
                            id="breadcrumb"
                            text={breadcrumb}
                            fontWeight="400"
                            color="#4B5563"
                            fontSizeDesktop={16}
                            fontSizeMobile={12}
                            canvas
                            className="mt-2"
                        />
                    </Element>
                </div>

                <div className={`flex ${viewport === 'mobile' ? 'flex-col-reverse' : 'lg:flex-row'} gap-6`}>
                    <div className="flex-1 flex flex-col" style={{gap: `${sectionGap}px`}}>
                        <div
                            style={{
                                backgroundColor: sectionBgColor,
                                borderRadius: `${sectionBorderRadius}px`,
                                border: `1px solid ${sectionBorderColor}`,
                            }}
                        >
                            <div style={{padding: `${sectionPadding}px`}}
                                 className="flex items-center justify-between gap-2">
                                <div className="flex items-center space-x-2">
                                    <Element is={Container_2} id="profile-icon-container" canvas>
                                        <Element
                                            is={IconElement}
                                            id="profile-icon"
                                            iconType="profileIcon"
                                            iconSize={22}
                                            iconSizeMobile={20}
                                            iconColor="#334155"
                                            canvas
                                        />
                                    </Element>
                                    <Element is={Container_2} id="contact-inf-container" canvas className="">
                                        <Element
                                            is={Text}
                                            id="contact_info"
                                            text="CONTACT INFO"
                                            fontWeight="400"
                                            color="#4B5563"
                                            fontSizeDesktop={16}
                                            fontSizeMobile={14}
                                            canvas
                                            className=""
                                        />
                                    </Element>
                                </div>
                                <Element is={Container_2} id="edit_profile_button_container" canvas>
                                    <Element
                                        is={Button}
                                        id="edit_profile_button"
                                        children="LOGIN"
                                        fontSizeDesktop={14}
                                        fontSizeMobile={12}
                                        paddingX={0}
                                        paddingXMobile={0}
                                        paddingY={0}
                                        paddingYMobile={0}
                                        backgroundColor="#FF4D00"
                                        className="ml-auto"
                                        variant="text"
                                        canvas
                                    />
                                </Element>
                            </div>
                            <hr style={{borderColor: sectionBorderColor}}/>
                            <div style={{padding: `${sectionPadding}px`}}
                                 className={`flex ${viewport === 'mobile' ? 'flex-col' : 'flex-row'} gap-6`}>
                                <div className="flex-1">
                                    <label
                                    >
                                        <Element is={Container_2} id="your_phone_number_container" canvas
                                                 className="mb-2">
                                            <Element
                                                is={Text}
                                                id="your_phone_number"
                                                text="Your phone number"
                                                fontWeight="600"
                                                color="#111827"
                                                fontSizeDesktop={16}
                                                fontSizeMobile={14}
                                                canvas
                                            />
                                        </Element>

                                    </label>
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
                                            type="tel"
                                            placeholder="Enter phone number"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                backgroundColor: 'transparent',
                                                border: 'none',
                                                outline: 'none',
                                                color: inputTextColor,
                                            }}
                                            className={`placeholder:text-[${inputPlaceholderColor}]`}
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <label
                                    >
                                        <Element is={Container_2} id="email_address" canvas className=" mb-2">
                                            <Element
                                                is={Text}
                                                id="email_address"
                                                text="Email Address"
                                                fontWeight="600"
                                                color="#111827"
                                                fontSizeDesktop={16}
                                                fontSizeMobile={14}
                                                canvas
                                            />
                                        </Element>

                                    </label>
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
                                            placeholder="Enter email address"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                backgroundColor: 'transparent',
                                                border: 'none',
                                                outline: 'none',
                                                color: inputTextColor,
                                            }}
                                            className={`placeholder:text-[${inputPlaceholderColor}]`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            style={{
                                backgroundColor: sectionBgColor,
                                borderRadius: `${sectionBorderRadius}px`,
                                border: `1px solid ${sectionBorderColor}`,
                            }}
                        >
                            <div style={{padding: `${sectionPadding}px`}} className="flex items-center gap-2">
                                <Element is={Container_2} id="shipping-icon-container" canvas>
                                    <Element
                                        is={IconElement}
                                        id="arrow-icon"
                                        iconType="Arrow"
                                        iconSize={22}
                                        iconSizeMobile={20}
                                        iconColor="#334155"
                                        canvas
                                    />
                                </Element>
                                `<Element is={Container_2} id="shipping-container" canvas className="">
                                    <Element
                                        is={Text}
                                        id="shipping_info"
                                        text="SHIPPING ADDRESS"
                                        fontWeight="400"
                                        color="#4B5563"
                                        fontSizeDesktop={16}
                                        fontSizeMobile={14}
                                        canvas
                                    />
                                </Element>`
                            </div>
                            <hr style={{borderColor: sectionBorderColor}}/>
                            <div style={{padding: `${sectionPadding}px`}} className="flex flex-col gap-4">
                                {showAddressFields ? (
                                    <>
                                        <div className="flex flex-col sm:flex-row gap-6">
                                            {/* First name */}
                                            <div className="flex-1">
                                                <label className="font-[Poppins] mb-1 block">
                                                    <Element is={Container_2} id="first_name" canvas className="mb-2">
                                                        <Element
                                                            is={Text}
                                                            id="first_name_text"
                                                            text="First name"
                                                            fontWeight="600"
                                                            color="#111827"
                                                            fontSizeDesktop={16}
                                                            fontSizeMobile={14}
                                                            canvas
                                                        />
                                                    </Element>
                                                </label>
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
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            backgroundColor: 'transparent',
                                                            border: 'none',
                                                            outline: 'none',
                                                            color: inputTextColor,
                                                        }}
                                                        className={`placeholder:text-[${inputPlaceholderColor}]`}
                                                    />
                                                </div>
                                            </div>

                                            {/* Last name */}
                                            <div className="flex-1">
                                                <label className="font-[Poppins] mb-1 block">
                                                    <Element is={Container_2} id="last_name" canvas className="mb-2">
                                                        <Element
                                                            is={Text}
                                                            id="last_name_text"
                                                            text="Last name"
                                                            fontWeight="600"
                                                            color="#111827"
                                                            fontSizeDesktop={16}
                                                            fontSizeMobile={14}
                                                            canvas
                                                        />
                                                    </Element>
                                                </label>
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
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            backgroundColor: 'transparent',
                                                            border: 'none',
                                                            outline: 'none',
                                                            color: inputTextColor,
                                                        }}
                                                        className={`placeholder:text-[${inputPlaceholderColor}]`}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-6">
                                            <div className="flex-[2]">
                                                <label
                                                >
                                                    <Element is={Container_2} id="address_line_1_container" canvas
                                                             className="mb-2">
                                                        <Element
                                                            is={Text}
                                                            id="address_line_1"
                                                            text="Address line 1"
                                                            fontWeight="600"
                                                            color="#111827"
                                                            fontSizeDesktop={16}
                                                            fontSizeMobile={14}
                                                            canvas
                                                        />
                                                    </Element>
                                                </label>
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
                                                        placeholder="Enter address line 1"
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            backgroundColor: 'transparent',
                                                            border: 'none',
                                                            outline: 'none',
                                                            color: inputTextColor,
                                                        }}
                                                        className={`placeholder:text-[${inputPlaceholderColor}]`}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <label
                                                    className="font-[Poppins] mb-1 block"
                                                >
                                                    <Element is={Container_2} id="atp_suit" canvas className="mb-2">
                                                        <Element
                                                            is={Text}
                                                            id="apt-suit"
                                                            text="Apt, Suite"
                                                            fontWeight="600"
                                                            color="#111827"
                                                            fontSizeDesktop={16}
                                                            fontSizeMobile={14}
                                                            canvas
                                                        />
                                                    </Element>

                                                </label>
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
                                                        placeholder="Enter apt, suite"
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            backgroundColor: 'transparent',
                                                            border: 'none',
                                                            outline: 'none',
                                                            color: inputTextColor,
                                                        }}
                                                        className={`placeholder:text-[${inputPlaceholderColor}]`}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="font-[Poppins] mb-1 block">
                                                <Element is={Container_2} id="address_line_2" canvas className="mb-2">
                                                    <Element
                                                        is={Text}
                                                        id="address_line_2_text"
                                                        text="Address line 2"
                                                        fontWeight="600"
                                                        color="#111827"
                                                        fontSizeDesktop={16}
                                                        fontSizeMobile={14}
                                                        canvas
                                                    />
                                                </Element>
                                            </label>
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
                                                    placeholder="Enter address line 2"
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        backgroundColor: 'transparent',
                                                        border: 'none',
                                                        outline: 'none',
                                                        color: inputTextColor,
                                                    }}
                                                    className={`placeholder:text-[${inputPlaceholderColor}]`}
                                                />
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-6">
                                            <div className="flex-1">
                                                <label className="font-[Poppins] mb-1 block">
                                                    <Element is={Container_2} id="city" canvas className="mb-2">
                                                        <Element
                                                            is={Text}
                                                            id="city_text"
                                                            text="City"
                                                            fontWeight="600"
                                                            color="#111827"
                                                            fontSizeDesktop={16}
                                                            fontSizeMobile={14}
                                                            canvas
                                                        />
                                                    </Element>
                                                </label>
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
                                                        placeholder="Enter city"
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            backgroundColor: 'transparent',
                                                            border: 'none',
                                                            outline: 'none',
                                                            color: inputTextColor,
                                                        }}
                                                        className={`placeholder:text-[${inputPlaceholderColor}]`}
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex-1">
                                                <label className="font-[Poppins] mb-1 block">
                                                    <Element is={Container_2} id="country" canvas className="mb-2">
                                                        <Element
                                                            is={Text}
                                                            id="country_text"
                                                            text="Country"
                                                            fontWeight="600"
                                                            color="#111827"
                                                            fontSizeDesktop={16}
                                                            fontSizeMobile={14}
                                                            canvas
                                                        />
                                                    </Element>
                                                </label>
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
                                                        placeholder="Enter country"
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            backgroundColor: 'transparent',
                                                            border: 'none',
                                                            outline: 'none',
                                                            color: inputTextColor,
                                                        }}
                                                        className={`placeholder:text-[${inputPlaceholderColor}]`}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-6">
                                            <div className="flex-1">
                                                <label className="font-[Poppins] mb-1 block">
                                                    <Element is={Container_2} id="state_province" canvas
                                                             className="mb-2">
                                                        <Element
                                                            is={Text}
                                                            id="state_province_text"
                                                            text="State/Province"
                                                            fontWeight="600"
                                                            color="#111827"
                                                            fontSizeDesktop={16}
                                                            fontSizeMobile={14}
                                                            canvas
                                                        />
                                                    </Element>
                                                </label>
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
                                                        placeholder="Enter state/province"
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            backgroundColor: 'transparent',
                                                            border: 'none',
                                                            outline: 'none',
                                                            color: inputTextColor,
                                                        }}
                                                        className={`placeholder:text-[${inputPlaceholderColor}]`}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <label className="font-[Poppins] mb-1 block">
                                                    <Element is={Container_2} id="postal_code" canvas className="mb-2">
                                                        <Element
                                                            is={Text}
                                                            id="postal_code_text"
                                                            text="Postal code"
                                                            fontWeight="600"
                                                            color="#111827"
                                                            fontSizeDesktop={16}
                                                            fontSizeMobile={14}
                                                            canvas
                                                        />
                                                    </Element>
                                                </label>
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
                                                        placeholder="Enter postal code"
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            backgroundColor: 'transparent',
                                                            border: 'none',
                                                            outline: 'none',
                                                            color: inputTextColor,
                                                        }}
                                                        className={`placeholder:text-[${inputPlaceholderColor}]`}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                height: '94px',
                                                border: `1px solid ${inputBorderColor}`,
                                                borderRadius: `${inputBorderRadius}px`,
                                                backgroundColor: inputBgColor,
                                            }}
                                            className=""
                                        >
                                            <Textarea
                                                placeholder="Enter your custom note here"
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    backgroundColor: 'transparent',
                                                    border: 'none',
                                                    outline: 'none',
                                                    color: inputTextColor,
                                                    resize: 'none',
                                                }}
                                                className={`placeholder:text-[${inputPlaceholderColor}] font-[Poppins]`}
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex flex-col gap-4">
                                        <Element is={Container_2} id="saved-address-container" canvas>
                                            <Element
                                                is={Text}
                                                id="saved-address"
                                                text={formatAddress()}
                                                fontWeight="400"
                                                color="#111827"
                                                fontSizeDesktop={16}
                                                fontSizeMobile={14}
                                                canvas
                                            />
                                        </Element>
                                        <div onClick={handleAddNewAddress}>
                                            <Element is={Container_2} id="add-new-address-button-container" canvas>
                                                <Element
                                                    is={Button}
                                                    id="add-new-address-button"
                                                    children="+ Add New Address"
                                                    fontSizeDesktop={9}
                                                    fontSizeMobile={15}
                                                    paddingX={0}
                                                    paddingXMobile={0}
                                                    paddingY={0}
                                                    paddingYMobile={0}
                                                    backgroundColor="#FF4D00"
                                                    variant="text"
                                                    className="font-[Poppins]"
                                                    canvas
                                                    onClick={() => setShowAddressFields(true)}
                                                />
                                            </Element>
                                            <Modal
                                                isOpen={isAddressModalOpen}
                                                onClose={() => setIsAddressModalOpen(false)}
                                                title="Add address"
                                                maxWidth="max-w-lg"
                                                overlayClassName="bg-black/70"
                                                showCloseButton={true}
                                            >
                                                <div className="flex flex-col gap-6 mt-4">
                                                    <div className="flex flex-col sm:flex-row gap-6">
                                                        <div className="flex-1">
                                                            <label className="font-[Poppins] mb-1 block">
                                                                <Element is={Container_2} id="billing_first_name" canvas
                                                                         className="mb-2">
                                                                    <Element
                                                                        is={Text}
                                                                        id="billing_first_name_text"
                                                                        text="First name"
                                                                        fontWeight="400"
                                                                        color="#111827"
                                                                        fontSizeDesktop={16}
                                                                        fontSizeMobile={14}
                                                                        canvas
                                                                    />
                                                                </Element>
                                                            </label>
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
                                                        </div>

                                                        <div className="flex-1">
                                                            <label className="font-[Poppins] mb-1 block">
                                                                <Element is={Container_2} id="billing_last_name" canvas
                                                                         className="mb-2">
                                                                    <Element
                                                                        is={Text}
                                                                        id="billing_last_name_text"
                                                                        text="Last name"
                                                                        fontWeight="400"
                                                                        color="#111827"
                                                                        fontSizeDesktop={16}
                                                                        fontSizeMobile={14}
                                                                        canvas
                                                                    />
                                                                </Element>
                                                            </label>
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
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col sm:flex-row gap-6">
                                                        <div className="flex-1">
                                                            <label className="font-[Poppins] mb-1 block">
                                                                <Element is={Container_2} id="billing_address_line_1"
                                                                         canvas className="mb-2">
                                                                    <Element
                                                                        is={Text}
                                                                        id="billing_address_line_1_text"
                                                                        text="Address line 1"
                                                                        fontWeight="400"
                                                                        color="#111827"
                                                                        fontSizeDesktop={16}
                                                                        fontSizeMobile={14}
                                                                        canvas
                                                                    />
                                                                </Element>
                                                            </label>
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
                                                                    placeholder="Enter address line 1"
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
                                                        </div>
                                                        <div className="flex-1">
                                                            <label className="font-[Poppins] mb-1 block">
                                                                <Element is={Container_2} id="billing_apt_suite" canvas
                                                                         className="mb-2">
                                                                    <Element
                                                                        is={Text}
                                                                        id="billing_apt_suite_text"
                                                                        text="Apt, Suite"
                                                                        fontWeight="400"
                                                                        color="#111827"
                                                                        fontSizeDesktop={16}
                                                                        fontSizeMobile={14}
                                                                        canvas
                                                                    />
                                                                </Element>
                                                            </label>
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
                                                                    placeholder="Enter apt, suite"
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
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className="font-[Poppins] mb-1 block">
                                                            <Element is={Container_2} id="billing_address_line_2" canvas
                                                                     className="mb-2">
                                                                <Element
                                                                    is={Text}
                                                                    id="billing_address_line_2_text"
                                                                    text="Address line 2"
                                                                    fontWeight="400"
                                                                    color="#111827"
                                                                    fontSizeDesktop={16}
                                                                    fontSizeMobile={14}
                                                                    canvas
                                                                />
                                                            </Element>
                                                        </label>
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
                                                                placeholder="Enter address line 2"
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
                                                    </div>
                                                    <div className="flex flex-col sm:flex-row gap-6">
                                                        <div className="flex-1">
                                                            <label className="font-[Poppins] mb-1 block">
                                                                <Element is={Container_2} id="billing_city" canvas
                                                                         className="mb-2">
                                                                    <Element
                                                                        is={Text}
                                                                        id="billing_city_text"
                                                                        text="City"
                                                                        fontWeight="400"
                                                                        color="#111827"
                                                                        fontSizeDesktop={16}
                                                                        fontSizeMobile={14}
                                                                        canvas
                                                                    />
                                                                </Element>
                                                            </label>
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
                                                                    placeholder="Enter city"
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
                                                        </div>

                                                        <div className="flex-1">
                                                            <label className="font-[Poppins] mb-1 block">
                                                                <Element is={Container_2} id="billing_country" canvas
                                                                         className="mb-2">
                                                                    <Element
                                                                        is={Text}
                                                                        id="billing_country_text"
                                                                        text="Country"
                                                                        fontWeight="400"
                                                                        color="#111827"
                                                                        fontSizeDesktop={16}
                                                                        fontSizeMobile={14}
                                                                        canvas
                                                                    />
                                                                </Element>
                                                            </label>
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
                                                                    placeholder="Enter country"
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
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col sm:flex-row gap-6">
                                                        <div className="flex-1">
                                                            <label className="font-[Poppins] mb-1 block">
                                                                <Element is={Container_2} id="billing_state_province"
                                                                         canvas className="mb-2">
                                                                    <Element
                                                                        is={Text}
                                                                        id="billing_state_province_text"
                                                                        text="State/Province"
                                                                        fontWeight="400"
                                                                        color="#111827"
                                                                        fontSizeDesktop={16}
                                                                        fontSizeMobile={14}
                                                                        canvas
                                                                    />
                                                                </Element>
                                                            </label>
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
                                                                    placeholder="Enter state/province"
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
                                                        </div>

                                                        <div className="flex-1">
                                                            <label className="font-[Poppins] mb-1 block">
                                                                <Element is={Container_2} id="billing_postal_code"
                                                                         canvas className="mb-2">
                                                                    <Element
                                                                        is={Text}
                                                                        id="billing_postal_code_text"
                                                                        text="Postal code"
                                                                        fontWeight="400"
                                                                        color="#111827"
                                                                        fontSizeDesktop={16}
                                                                        fontSizeMobile={14}
                                                                        canvas
                                                                    />
                                                                </Element>
                                                            </label>
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
                                                                    placeholder="Enter postal code"
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

                                                        </div>

                                                    </div>
                                                    <div className="flex flex-row gap-4 justify-end">
                                                        <Element is={Container_2} id="cancel-button-container"
                                                                 className=" flex items-center justify-center font-[Poppins]"
                                                                 canvas>
                                                            <Element
                                                                is={Button}
                                                                id="cancel-button"
                                                                children="Cancel"
                                                                backgroundColor="#FF4D00"
                                                                variant="text"
                                                                fontSizeDesktop={14}
                                                                fontSizeMobile={12}
                                                                paddingX={0}
                                                                paddingXMobile={0}
                                                                canvas
                                                            />
                                                        </Element>
                                                        <Element is={Container_2} id="save-button-container"
                                                                 className=" flex items-center justify-center font-[Poppins]"
                                                                 canvas>
                                                            <Element
                                                                is={Button}
                                                                id="save-button"
                                                                children="Save"
                                                                backgroundColor="#FF4D00"
                                                                fontSizeDesktop={14}
                                                                fontSizeMobile={12}
                                                                paddingX={15}
                                                                paddingXMobile={12}
                                                                canvas
                                                            />
                                                        </Element>
                                                    </div>
                                                </div>
                                            </Modal>

                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div
                            style={{
                                backgroundColor: sectionBgColor,
                                borderRadius: `${sectionBorderRadius}px`,
                                border: `1px solid ${sectionBorderColor}`,
                            }}
                        >
                            <div style={{padding: `${sectionPadding}px`}} className="flex items-center gap-2">
                                <Element is={Container_2} id="Shipping-icon-container" canvas>
                                    <Element
                                        is={IconElement}
                                        id="shipping-icon"
                                        iconType="ShippingIcon"
                                        iconSize={22}
                                        iconSizeMobile={20}
                                        iconColor="#444444"
                                        canvas
                                    />
                                </Element>
                                <Element is={Container_2} id="billing-inf-container" canvas className="">
                                    <Element
                                        is={Text}
                                        id="billing_info"
                                        text="BILLING INFO"
                                        fontWeight="400"
                                        color="#4B5563"
                                        fontSizeDesktop={16}
                                        fontSizeMobile={14}
                                        canvas
                                        className=""
                                    />
                                </Element>
                            </div>
                            <div style={{padding: `${sectionPadding / 1}px`}} className="">
                                {/*<Element is={Container_2} id="billing_address_options" canvas>*/}
                                {['Same as shipping address', 'Use a different billing address'].map((option) => (
                                    <RadioButton
                                        key={option}
                                        option={option}
                                        radioSize={radioSize}
                                        radioColor="#FF4D00"
                                        radioTextColor={radioTextColor}
                                        radioTextSize={viewport === "mobile" ? 12 : 16}
                                        name="billingAddress"
                                        className="p-1"
                                        checked={billingOption === option}
                                        onChange={() => setBillingOption(option)}
                                    />
                                ))}
                                {/*</Element>*/}

                                {billingOption === 'Use a different billing address' && (
                                    <div style={{padding: `${sectionPadding / 4}px`}}
                                         className="flex flex-col gap-4 mt-4">
                                        <div className="flex flex-col sm:flex-row gap-6">
                                            <div className="flex-1">
                                                <label className="font-[Poppins] mb-1 block">
                                                    <Element is={Container_2} id="billing_first_name" canvas
                                                             className="mb-2">
                                                        <Element
                                                            is={Text}
                                                            id="billing_first_name_text"
                                                            text="First name"
                                                            fontWeight="600"
                                                            color="#111827"
                                                            fontSizeDesktop={16}
                                                            fontSizeMobile={14}
                                                            canvas
                                                        />
                                                    </Element>
                                                </label>
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
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            backgroundColor: 'transparent',
                                                            border: 'none',
                                                            outline: 'none',
                                                            color: inputTextColor,
                                                        }}
                                                        className={`placeholder:text-[${inputPlaceholderColor}]`}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <label className="font-[Poppins] mb-1 block">
                                                    <Element is={Container_2} id="billing_last_name" canvas
                                                             className="mb-2">
                                                        <Element
                                                            is={Text}
                                                            id="billing_last_name_text"
                                                            text="Last name"
                                                            fontWeight="600"
                                                            color="#111827"
                                                            fontSizeDesktop={16}
                                                            fontSizeMobile={14}
                                                            canvas
                                                        />
                                                    </Element>
                                                </label>
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
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            backgroundColor: 'transparent',
                                                            border: 'none',
                                                            outline: 'none',
                                                            color: inputTextColor,
                                                        }}
                                                        className={`placeholder:text-[${inputPlaceholderColor}]`}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-6">
                                            <div className="flex-1">
                                                <label className="font-[Poppins] mb-1 block">
                                                    <Element is={Container_2} id="billing_address_line_1" canvas
                                                             className="mb-2">
                                                        <Element
                                                            is={Text}
                                                            id="billing_address_line_1_text"
                                                            text="Address line 1"
                                                            fontWeight="600"
                                                            color="#111827"
                                                            fontSizeDesktop={16}
                                                            fontSizeMobile={14}
                                                            canvas
                                                        />
                                                    </Element>
                                                </label>
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
                                                        placeholder="Enter address line 1"
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            backgroundColor: 'transparent',
                                                            border: 'none',
                                                            outline: 'none',
                                                            color: inputTextColor,
                                                        }}
                                                        className={`placeholder:text-[${inputPlaceholderColor}]`}
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex-1">
                                                <label className="font-[Poppins] mb-1 block">
                                                    <Element is={Container_2} id="billing_apt_suite" canvas
                                                             className="mb-2">
                                                        <Element
                                                            is={Text}
                                                            id="billing_apt_suite_text"
                                                            text="Apt, Suite"
                                                            fontWeight="600"
                                                            color="#111827"
                                                            fontSizeDesktop={16}
                                                            fontSizeMobile={14}
                                                            canvas
                                                        />
                                                    </Element>
                                                </label>
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
                                                        placeholder="Enter apt, suite"
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            backgroundColor: 'transparent',
                                                            border: 'none',
                                                            outline: 'none',
                                                            color: inputTextColor,
                                                        }}
                                                        className={`placeholder:text-[${inputPlaceholderColor}]`}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="font-[Poppins] mb-1 block">
                                                <Element is={Container_2} id="billing_address_line_2" canvas
                                                         className="mb-2">
                                                    <Element
                                                        is={Text}
                                                        id="billing_address_line_2_text"
                                                        text="Address line 2"
                                                        fontWeight="600"
                                                        color="#111827"
                                                        fontSizeDesktop={16}
                                                        fontSizeMobile={14}
                                                        canvas
                                                    />
                                                </Element>
                                            </label>
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
                                                    placeholder="Enter address line 2"
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        backgroundColor: 'transparent',
                                                        border: 'none',
                                                        outline: 'none',
                                                        color: inputTextColor,
                                                    }}
                                                    className={`placeholder:text-[${inputPlaceholderColor}]`}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-6">
                                            <div className="flex-1">
                                                <label className="font-[Poppins] mb-1 block">
                                                    <Element is={Container_2} id="billing_city" canvas className="mb-2">
                                                        <Element
                                                            is={Text}
                                                            id="billing_city_text"
                                                            text="City"
                                                            fontWeight="600"
                                                            color="#111827"
                                                            fontSizeDesktop={16}
                                                            fontSizeMobile={14}
                                                            canvas
                                                        />
                                                    </Element>
                                                </label>
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
                                                        placeholder="Enter city"
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            backgroundColor: 'transparent',
                                                            border: 'none',
                                                            outline: 'none',
                                                            color: inputTextColor,
                                                        }}
                                                        className={`placeholder:text-[${inputPlaceholderColor}]`}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <label className="font-[Poppins] mb-1 block">
                                                    <Element is={Container_2} id="billing_country" canvas
                                                             className="mb-2">
                                                        <Element
                                                            is={Text}
                                                            id="billing_country_text"
                                                            text="Country"
                                                            fontWeight="600"
                                                            color="#111827"
                                                            fontSizeDesktop={16}
                                                            fontSizeMobile={14}
                                                            canvas
                                                        />
                                                    </Element>
                                                </label>
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
                                                        placeholder="Enter country"
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            backgroundColor: 'transparent',
                                                            border: 'none',
                                                            outline: 'none',
                                                            color: inputTextColor,
                                                        }}
                                                        className={`placeholder:text-[${inputPlaceholderColor}]`}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-6">
                                            <div className="flex-1">
                                                <label className="font-[Poppins] mb-1 block">
                                                    <Element is={Container_2} id="billing_state_province" canvas
                                                             className="mb-2">
                                                        <Element
                                                            is={Text}
                                                            id="billing_state_province_text"
                                                            text="State/Province"
                                                            fontWeight="600"
                                                            color="#111827"
                                                            fontSizeDesktop={16}
                                                            fontSizeMobile={14}
                                                            canvas
                                                        />
                                                    </Element>
                                                </label>
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
                                                        placeholder="Enter state/province"
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            backgroundColor: 'transparent',
                                                            border: 'none',
                                                            outline: 'none',
                                                            color: inputTextColor,
                                                        }}
                                                        className={`placeholder:text-[${inputPlaceholderColor}]`}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <label className="font-[Poppins] mb-1 block">
                                                    <Element is={Container_2} id="billing_postal_code" canvas
                                                             className="mb-2">
                                                        <Element
                                                            is={Text}
                                                            id="billing_postal_code_text"
                                                            text="Postal code"
                                                            fontWeight="600"
                                                            color="#111827"
                                                            fontSizeDesktop={16}
                                                            fontSizeMobile={14}
                                                            canvas
                                                        />
                                                    </Element>
                                                </label>
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
                                                        placeholder="Enter postal code"
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            backgroundColor: 'transparent',
                                                            border: 'none',
                                                            outline: 'none',
                                                            color: inputTextColor,
                                                        }}
                                                        className={`placeholder:text-[${inputPlaceholderColor}]`}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div
                            style={{
                                backgroundColor: sectionBgColor,
                                borderRadius: `${sectionBorderRadius}px`,
                                border: `1px solid ${sectionBorderColor}`,
                            }}
                        >
                            <div style={{padding: `${sectionPadding}px`}} className="flex items-center gap-2">
                                <Element is={Container_2} id="payment-icon-container" canvas>
                                    <Element
                                        is={IconElement}
                                        id="payment-icon"
                                        iconType="PaymentIcon"
                                        iconSize={22}
                                        iconSizeMobile={20}
                                        iconColor="#444444"
                                        canvas
                                    />
                                </Element>
                                <Element is={Container_2} id="payment-inf-container" canvas className="">
                                    <Element
                                        is={Text}
                                        id="payment_info"
                                        text="PAYMENT"
                                        fontWeight="400"
                                        color="#4B5563"
                                        fontSizeDesktop={16}
                                        fontSizeMobile={14}
                                        canvas
                                    />
                                </Element>
                            </div>
                            <div style={{padding: `${sectionPadding}px`}} className="flex flex-col gap-2">
                                {/*<Element is={Container_2} id="payment_method_options" canvas className="gap-4">*/}
                                {['Pay with bank', 'Paystack', 'Deempay'].map((option) => (
                                    <RadioButton
                                        key={option}
                                        option={option}
                                        radioSize={radioSize}
                                        radioColor="#FF4D00"
                                        radioTextColor={radioTextColor}
                                        radioTextSize={viewport === "mobile" ? 12 : 16}
                                        name="paymentMethod"
                                        className="p-1"
                                        checked={paymentMethod === option}
                                        onChange={() => setPaymentMethod(option)}
                                    />
                                ))}
                                {/*</Element>*/}
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            backgroundColor: summaryBgColor,
                            border: `1px solid ${summaryBorderColor}`,
                            padding: `${summaryPadding}px`,
                            maxWidth: `${summaryWidth}px`,
                            borderRadius: `${summaryBorderRadius}px`,
                        }}
                        className="w-full h-fit flex flex-col"
                    >
                        <Element is={Container_2} id="order-summary-container" canvas>
                            <Element
                                is={Text}
                                id="order_summary_title"
                                text="Order Summary"
                                fontWeight="600"
                                color="#000000"
                                fontSizeDesktop={viewport === "desktop" ? 22 : 30}
                                canvas
                            />
                        </Element>
                        <div className="flex gap-4 mt-4">
                            <Image
                                src={productData.image}
                                alt="Product"
                                width={100}
                                height={100}
                                className="rounded-md"
                            />
                            <div className="flex flex-col gap-1 mt-1">
                                <Element is={Container_2} id="name-container" canvas>
                                    <Element
                                        is={Text}
                                        id="name"
                                        text={productData.name}
                                        fontWeight="700"
                                        color="#000000"
                                        fontSizeDesktop={20}
                                        fontSizeMobile={12}
                                        canvas
                                    />
                                </Element>
                                <div className="flex gap-1 mt-1">
                                    <Element is={Container_2} id="type-container" canvas>
                                        <Element
                                            is={Text}
                                            id="type"
                                            text="Type:"
                                            fontWeight="400"
                                            color="#000000"
                                            fontSizeDesktop={14}
                                            fontSizeMobile={10}
                                            canvas
                                        />
                                    </Element>
                                    <Element is={Container_2} id="-typecontainer" canvas>
                                        <Element
                                            is={Text}
                                            id="type_title"
                                            text={productData.type}
                                            fontWeight="400"
                                            color="#00000099"
                                            fontSizeDesktop={14}
                                            fontSizeMobile={10}
                                            canvas
                                        />
                                    </Element>
                                </div>
                                <div className="flex gap-1 mt-1">
                                    <Element is={Container_2} id="quantity-container" canvas>
                                        <Element
                                            is={Text}
                                            id="quantity"
                                            text="Quantity:"
                                            fontWeight="400"
                                            color="#000000"
                                            fontSizeDesktop={14}
                                            fontSizeMobile={10}
                                            canvas
                                        />
                                    </Element>
                                    <Element is={Container_2} id="-quantitycontainer" canvas>
                                        <Element
                                            is={Text}
                                            id="quantity_title"
                                            text={productData.quantity}
                                            fontWeight="400"
                                            color="#00000099"
                                            fontSizeDesktop={14}
                                            fontSizeMobile={10}
                                            canvas
                                        />
                                    </Element>
                                </div>
                                <div className="mt-1">
                                    <Element is={Container_2} id="price-container" canvas>
                                        <Element
                                            is={Text}
                                            id="price"
                                            text={`₦${productData.price.toLocaleString()}`}
                                            fontWeight="500"
                                            color="#000000"
                                            fontSizeDesktop={24}
                                            fontSizeMobile={14}
                                            canvas
                                        />
                                    </Element>
                                </div>
                            </div>
                        </div>
                        <hr className="mt-4"/>
                        <div className="flex justify-between mt-4">
                            <Element is={Container_2} id="qty-container" canvas>
                                <Element
                                    is={Text}
                                    id="qty_title"
                                    text="Quantity"
                                    fontWeight="500"
                                    color="#00000099"
                                    fontSizeDesktop={16}
                                    fontSizeMobile={13}
                                    canvas
                                />
                            </Element>
                            <Element is={Container_2} id="qt-container" canvas>
                                <Element
                                    is={Text}
                                    id="qty"
                                    text={`${quantity}`}
                                    fontWeight="500"
                                    color="#000000"
                                    fontSizeDesktop={16}
                                    fontSizeMobile={13}
                                    canvas
                                />
                            </Element>
                        </div>
                        <div className="flex justify-between mt-5">
                            <Element is={Container_2} id="prd-container" canvas>
                                <Element
                                    is={Text}
                                    id="prd"
                                    text="Product"
                                    fontWeight="500"
                                    color="#00000099"
                                    fontSizeDesktop={16}
                                    fontSizeMobile={13}
                                    canvas
                                />
                            </Element>
                            <Element is={Container_2} id="pd-container" canvas>
                                <Element
                                    is={Text}
                                    id="pd"
                                    text={`₦${productData.price.toLocaleString()}`}
                                    fontWeight="500"
                                    color="#000000"
                                    fontSizeDesktop={16}
                                    fontSizeMobile={13}
                                    canvas
                                />
                            </Element>
                        </div>
                        <div className="flex gap-4 mt-4 pb-4">
                            <div className="h-11 bg-[#F0F0F0] rounded-md flex items-center flex-1">
                                <Input
                                    type="text"
                                    placeholder="Add promo code"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        outline: 'none',
                                        color: inputTextColor,
                                    }}
                                    className={`placeholder:text-[${inputPlaceholderColor}] font-[Poppins]`}
                                />
                            </div>
                            <Element is={Container_2} id="apply-container" canvas>
                                <Element
                                    is={Button}
                                    id="apply"
                                    children={apply}
                                    backgroundColor="#FF4D00"
                                    fontSizeDesktop={14}
                                    fontSizeMobile={12}
                                    paddingX={40}
                                    paddingXMobile={30}
                                    canvas
                                />
                            </Element>
                        </div>
                        <hr className="my-4"/>
                        <div className="flex justify-between">
                            <Element is={Container_2} id="subtotal-container" canvas>
                                <Element
                                    is={Text}
                                    id="subtotal"
                                    text="Subtotal"
                                    fontWeight="400"
                                    color="#000000"
                                    fontSizeDesktop={16}
                                    fontSizeMobile={13}
                                    canvas
                                />
                            </Element>
                            <Element is={Container_2} id="subprice-container" canvas>
                                <Element
                                    is={Text}
                                    id="subprice"
                                    text={`₦${subtotal.toLocaleString()}`}
                                    fontWeight="500"
                                    color="#000000"
                                    fontSizeDesktop={16}
                                    fontSizeMobile={13}
                                    canvas
                                />
                            </Element>
                        </div>
                        <div className="flex justify-between mt-6">
                            <Element is={Container_2} id="delivery-fee-container" canvas>
                                <Element
                                    is={Text}
                                    id="delivery_fee"
                                    text="Delivery Fee"
                                    fontWeight="400"
                                    color="#000000"
                                    fontSizeDesktop={16}
                                    fontSizeMobile={13}
                                    canvas
                                />
                            </Element>
                            <Element is={Container_2} id="delivery-container" canvas>
                                <Element
                                    is={Text}
                                    id="delivery"
                                    text={`₦${deliveryFee.toLocaleString()}`}
                                    fontWeight="500"
                                    color="#000000"
                                    fontSizeDesktop={16}
                                    fontSizeMobile={13}
                                    canvas
                                />
                            </Element>
                        </div>
                        <div className="flex justify-between mt-6">
                            <Element is={Container_2} id="-vat-container" canvas>
                                <Element
                                    is={Text}
                                    id="vat-"
                                    text={`VAT(${vat}%)`}
                                    fontWeight="400"
                                    color="#000000"
                                    fontSizeDesktop={16}
                                    fontSizeMobile={13}
                                    canvas
                                />
                            </Element>
                            <Element is={Container_2} id="vat-container" canvas>
                                <Element
                                    is={Text}
                                    id="vat"
                                    text={`₦${subtotal.toLocaleString()}`}
                                    fontWeight="500"
                                    color="#000000"
                                    fontSizeDesktop={16}
                                    fontSizeMobile={13}
                                    canvas
                                />
                            </Element>
                        </div>
                        <div className="flex-1 mt-6">
                            <Element is={Container_2} id="tax-container" canvas>
                                <Element
                                    is={Text}
                                    id="vat-"
                                    text=" Note: VAT (Value Added Tax) is the tax added only on the value of the product purchased and not on the shipping fee."
                                    fontWeight="400"
                                    color="#000000"
                                    fontSizeDesktop={12}
                                    fontSizeMobile={10}
                                    canvas
                                />
                            </Element>
                        </div>
                        <hr className="my-4"/>
                        <div className="flex justify-between mt-3">
                            <Element is={Container_2} id="-total-container" canvas>
                                <Element
                                    is={Text}
                                    id="total-"
                                    text="Total"
                                    fontWeight="400"
                                    color="#000000"
                                    fontSizeDesktop={16}
                                    fontSizeMobile={13}
                                    canvas
                                />
                            </Element>
                            <Element is={Container_2} id="total-container" canvas>
                                <Element
                                    is={Text}
                                    id="total"
                                    text={`₦${total.toLocaleString()}`}
                                    fontWeight="500"
                                    color="#000000"
                                    fontSizeDesktop={16}
                                    fontSizeMobile={13}
                                    canvas
                                />
                            </Element>
                        </div>
                        <div onClick={handleConfirmOrder}>
                            <Element is={Container_2} id="product-buynow-container"
                                     className="mt-14 flex items-center justify-center font-[Poppins]" canvas>
                                <Element
                                    is={Button}
                                    id="proceed"
                                    children={confirmOrder}
                                    backgroundColor="#FF4D00"
                                    fontSizeDesktop={14}
                                    fontSizeMobile={12}
                                    paddingX={180}
                                    paddingXMobile={100}
                                    canvas
                                />
                            </Element>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                closeOnOverlayClick={true}
                title=""
                maxWidth="max-w-md"
                className="scrollbar-hide"
                overlayClassName="bg-black/70"
                closeOnEscape={true}
            >
                <div className="flex flex-col items-center gap-4">
                    <Image
                        src={RectangleImage}
                        alt="image"
                        width={223}
                        height={223}
                        className="rounded-md"
                    />
                    <Element is={Container_2} id="order-confirm-container" canvas>
                        <Element
                            is={Text}
                            id="order_confirm_title"
                            text="Order Confirmed"
                            fontWeight="700"
                            color="#212121"
                            fontSizeDesktop={24}
                            fontSizeMobile={20}
                            canvas
                        />
                    </Element>
                    <Element is={Container_2} id="order-confirm-text-container"
                             className="flex items-center justify-center ml-3"
                             canvas>
                        <Element
                            is={Text}
                            id="order_confirm_text"
                            text={`Lorem ipsum ipsum lorem Lorem ipsum ipsum  <br><span style="display: block; text-align: center;">ipsum ipsum loremLorem ipsum ipsum</span>`}
                            fontWeight="400"
                            color="#212121B2"
                            fontSizeDesktop={16}
                            fontSizeMobile={12}
                            canvas
                        />

                    </Element>
                    <div className="flex flex-col items-center gap-1">
                        <Element is={Container_2} id="continue-shop-container"
                                 className=" flex items-center justify-center font-[Poppins]" canvas>
                            <Element
                                is={Button}
                                id="continue-shop"
                                children="Continue Shopping"
                                backgroundColor="#FF4D00"
                                fontSizeDesktop={14}
                                fontSizeMobile={12}
                                paddingX={100}
                                paddingXMobile={100}
                                canvas
                            />
                        </Element>
                        <Element is={Container_2} id="go-to-home-container"
                                 className=" flex items-center justify-center font-[Poppins]" canvas>
                            <Element
                                is={Button}
                                id="go-to-home"
                                children="Go to Home"
                                backgroundColor="#FF4D00"
                                variant="outline"
                                fontSizeDesktop={14}
                                fontSizeMobile={12}
                                paddingX={128}
                                paddingXMobile={120}
                                canvas
                            />
                        </Element>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

CheckoutRender.craft = {
    displayName: 'Checkout Page',
    props: {
        title: 'Checkout',
        breadcrumb: 'HomePage / Checkout',
        apply: 'Apply',
        confirmOrder: "Confirm Order",
        containerPadding: 40,
        titleFontSize: 32,
        titleColor: '#000000',
        breadcrumbFontSize: 14,
        breadcrumbColor: '#4B5563',
        overallBgColor: '#FFFFFF',
        sectionBgColor: '#FFFFFF',
        sectionBorderColor: '#E5E7EB',
        sectionBorderRadius: 16,
        sectionPadding: 24,
        sectionGap: 24,
        labelFontSize: 16,
        labelColor: '#111827',
        labelFontWeight: 600,
        inputHeight: 44,
        inputBorderColor: '#E5E7EB',
        inputBorderRadius: 12,
        inputBgColor: '#FFFFFF',
        inputTextColor: '#000000',
        inputPlaceholderColor: '#9CA3AF',
        radioSize: 20,
        radioColor: '#000000',
        radioTextColor: '#000000',
        radioTextSize: 16,
        summaryBgColor: '#FFFFFF',
        summaryBorderColor: '#0000001A',
        summaryBorderRadius: 8,
        summaryWidth: 505,
        summaryPadding: 24,
        productData: defaultProduct,
        quantity: 3,
        subtotal: 362000,
        deliveryFee: 2000,
        vat: 0.5,
        buttonBgColor: '#000000',
        buttonTextColor: '#FFFFFF',
        buttonHeight: 48,
        buttonBorderRadius: 8,
        confirmLink: '/orders',
        userAddress: defaultUserAddress,
    },
    related: {
        settings: CheckoutRenderSettings,
    },
    rules: {
        canDrag: () => true,
        canMoveIn: () => false,
        canMoveOut: () => true,
    },
};

