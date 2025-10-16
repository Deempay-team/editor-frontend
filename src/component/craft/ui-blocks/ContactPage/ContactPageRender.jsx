'use client';

import React, {useState} from 'react';
import {Element, useNode} from "@craftjs/core";
import {useViewport} from "../../../../Context/ViewportContext.jsx";
import {Container_2} from "../../user/Container_2.jsx";
import {Text} from "../../user/Text/index.js";
import {Input} from "../../../../components/ui/input.jsx";
import {Textarea} from "../../../../components/ui/textarea.jsx";
import {Button} from "../../user/Button.jsx"
import {ContactPageRenderSettings} from "./ContactPageRenderSettings.jsx";

export function ContactPageRender({
                                      title = 'Get in Touch',
                                      subtitle = "We'd love to hear from you! Fill out the form below or reach out via the contact details.",
                                      namePlaceholder = 'Name',
                                      emailPlaceholder = 'example@email.com',
                                      messagePlaceholder = 'Write your message...',
                                      buttonText = 'Send Message',
                                      contactEmail = 'support@example.com',
                                      contactPhone = '+234 800 000 0000',
                                      officeAddress1 = '123 Market Street',
                                      officeAddress2 = 'Lagos, Nigeria',
                                      officeAddress3 = 'ZIP 100001',
                                      businessHours1 = 'Monday – Friday: 9:00 AM – 5:00 PM',
                                      businessHours2 = 'Saturday & Sunday: Closed',
                                      containerPadding = 48,
                                      containerPaddingMobile = 24,
                                      backgroundColor = '#FFFFFF',
                                      inputBorderColor = '#D1D5DB',
                                      inputFocusColor = '#D1D5DB',
                                      textColor = '#374151',
                                  }) {
    const {
        connectors: {connect, drag},
    } = useNode();

    const {viewport} = useViewport();
    const isMobile = viewport === 'mobile' || viewport.width < 768;

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (field) => (e) => {
        setForm({...form, [field]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', form);
    };

    return (
        <div
            ref={(ref) => connect(drag(ref))}
            className="w-full min-h-screen"
            style={{backgroundColor}}
        >
            <main
                style={{
                    padding: isMobile
                        ? `${containerPaddingMobile}px`
                        : `${containerPadding}px ${containerPadding * 2}px`,
                    maxWidth: '1440px',
                    margin: 'auto',
                }}
            >
                <div className="text-center mb-12">
                    <Element is={Container_2} id="title-container" canvas>
                        <Element
                            is={Text}
                            id="title-text"
                            text={title}
                            fontWeight="700"
                            color="#111827"
                            fontSizeDesktop={36}
                            fontSizeMobile={30}
                            canvas
                        />
                    </Element>
                    <Element is={Container_2} id="sub-container" canvas>
                        <Element
                            is={Text}
                            id="sub-title-text"
                            text={subtitle}
                            fontWeight="400"
                            color="#4B5563"
                            fontSizeDesktop={18}
                            fontSizeMobile={16}
                            className="mt-4"
                            canvas
                        />
                    </Element>

                </div>

                <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'} gap-12`}>
                    <form onSubmit={handleSubmit} className="space-y-6 ">
                        <div className="flex flex-col gap-2 w-full">
                            <Element is={Container_2} id="name-container" canvas>
                                <Element
                                    is={Text}
                                    id="name-text"
                                    text="Name *"
                                    fontWeight="600"
                                    color="#000000"
                                    fontSizeDesktop={14}
                                    fontSizeMobile={14}
                                    className="mt-4"
                                    canvas
                                />
                            </Element>
                            <Input
                                type="text"
                                placeholder={namePlaceholder}
                                value={form.name}
                                onChange={handleChange('name')}
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <Element is={Container_2} id="email-container" canvas>
                                <Element
                                    is={Text}
                                    id="email-text"
                                    text="Email *"
                                    fontWeight="600"
                                    color="#000000"
                                    fontSizeDesktop={14}
                                    fontSizeMobile={14}
                                    canvas
                                />
                            </Element>
                            <Input
                                type="email"
                                placeholder={emailPlaceholder}
                                value={form.email}
                                onChange={handleChange('email')}
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <Element is={Container_2} id="message-container" canvas>
                                <Element
                                    is={Text}
                                    id="message-text"
                                    text="Message *"
                                    fontWeight="600"
                                    color="#000000"
                                    fontSizeDesktop={14}
                                    fontSizeMobile={14}
                                    canvas
                                />
                            </Element>
                            <Textarea
                                rows={5}
                                placeholder={messagePlaceholder}
                                value={form.message}
                                onChange={handleChange('message')}
                                required
                            />
                        </div>

                        <Element
                            is={Container_2}
                            id="submit-button-container"
                            className="mt-6"
                            canvas
                        >
                            <Element
                                is={Button}
                                id="submit-button"
                                children={buttonText}
                                type="submit"
                                backgroundColor="#FF4D00"
                                fontSizeDesktop={14}
                                textColor="#FFFFFF"
                                fontSizeMobile={12}
                                width={140}
                                widthMobile={100}
                                height={40}
                                heightMobile={36}
                                className=""
                                canvas
                            />
                        </Element>
                    </form>

                    <div
                        className="space-y-6"

                    >
                        <div>
                            <Element is={Container_2} id="contact-container" canvas className="mt-6">
                                <Element
                                    is={Text}
                                    id="contact-text"
                                    text="Contact Details"
                                    fontWeight="600"
                                    color="#000000"
                                    fontSizeDesktop={20}
                                    fontSizeMobile={18}
                                    className="mb-3"
                                    canvas
                                />
                                <Element
                                    is={Text}
                                    id="contact-email"
                                    text={`Email: ${contactEmail}`}
                                    fontWeight="400"
                                    color="#374151"
                                    fontSizeDesktop={16}
                                    fontSizeMobile={14}
                                    className="mb-2"
                                    canvas
                                />

                                <Element
                                    is={Text}
                                    id="contact-phone"
                                    text={`Phone: ${contactPhone}`}
                                    fontWeight="400"
                                    color="#374151"
                                    fontSizeDesktop={16}
                                    fontSizeMobile={14}
                                    canvas
                                    className="mb-2"
                                />
                            </Element>
                        </div>

                        <div>
                            <Element is={Container_2} id="office-location-container" canvas>
                                <Element
                                    is={Text}
                                    id="office-location-text"
                                    text="Office Location"
                                    fontWeight="600"
                                    color="#000000"
                                    fontSizeDesktop={20}
                                    fontSizeMobile={18}
                                    canvas
                                    className="mb-3"
                                />
                            </Element>
                            <Element is={Container_2} id="office-address-1-container" canvas>
                                <Element
                                    is={Text}
                                    id="office-address-1-text"
                                    text={officeAddress1}
                                    fontWeight="400"
                                    color="#374151"
                                    fontSizeDesktop={16}
                                    fontSizeMobile={14}
                                    canvas
                                    className="mb-2"

                                />
                            </Element><
                            Element is={Container_2} id="office-address-2-container" canvas>
                                <Element
                                    is={Text}
                                    id="office-address-2-text"
                                    text={officeAddress2}
                                    fontWeight="400"
                                    color="#374151"
                                    fontSizeDesktop={16}
                                    fontSizeMobile={14}
                                    canvas
                                    className="mb-2"

                                />
                            </Element>
                            <Element is={Container_2} id="office-address-3-container" canvas>
                            <Element
                                is={Text}
                                id="office-address-3-text"
                                text={officeAddress3}
                                fontWeight="400"
                                color="#374151"
                                fontSizeDesktop={16}
                                fontSizeMobile={14}
                                canvas
                                className="mb-2"

                            />
                        </Element>
                        </div>

                        <div>
                            <Element is={Container_2} id="business-hours-container" canvas>
                                <Element
                                    is={Text}
                                    id="business-hours-text"
                                    text="Business Hours"
                                    fontWeight="600"
                                    color="#000000"
                                    fontSizeDesktop={20}
                                    fontSizeMobile={18}
                                    canvas
                                    className="mb-3"

                                />
                            </Element>
                            <Element is={Container_2} id="business-hours-1-container" canvas>
                                <Element
                                    is={Text}
                                    id="business-hours-1-text"
                                    text={businessHours1}
                                    fontWeight="400"
                                    color="#374151"
                                    fontSizeDesktop={16}
                                    fontSizeMobile={14}
                                    canvas
                                    className="mb-2"

                                />
                            </Element>
                            <Element is={Container_2} id="business-hours-2-container" canvas>
                                <Element
                                    is={Text}
                                    id="business-hours-2-text"
                                    text={businessHours2}
                                    fontWeight="400"
                                    color="#374151"
                                    fontSizeDesktop={16}
                                    fontSizeMobile={14}
                                    canvas
                                    className="mb-2"

                                />
                            </Element>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

ContactPageRender.craft = {
    displayName: 'Contact Page',
    props: {
        title: 'Get in Touch',
        subtitle: "We'd love to hear from you! Fill out the form below or reach out via the contact details.",
        namePlaceholder: 'Name',
        emailPlaceholder: 'example@email.com',
        messagePlaceholder: 'Write your message...',
        buttonText: 'Send Message',
        contactEmail: 'support@example.com',
        contactPhone: '+234 800 000 0000',
        officeAddress1: '123 Market Street',
        officeAddress2: 'Lagos, Nigeria',
        officeAddress3: 'ZIP 100001',
        businessHours1: 'Monday – Friday: 9:00 AM – 5:00 PM',
        businessHours2: 'Saturday & Sunday: Closed',
        containerPadding: 48,
        containerPaddingMobile: 24,
        backgroundColor: '#FFFFFF',
        titleColor: '#111827',
        subtitleColor: '#4B5563',
        labelColor: '#1F2937',
        inputBorderColor: '#D1D5DB',
        inputFocusColor: '#D1D5DB',
        buttonBgColor: '#000000',
        buttonTextColor: '#FFFFFF',
        buttonHoverColor: '#1F2937',
        textColor: '#374151',
        linkColor: '#000000',
    },
    related: {
        settings: ContactPageRenderSettings,
    },
    rules: {
        canDrag: () => true,
        canMoveIn: () => false,
        canMoveOut: () => true,
    },
};