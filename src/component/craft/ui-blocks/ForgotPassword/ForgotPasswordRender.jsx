'use client';

import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Element, useNode} from '@craftjs/core';
import {useViewport} from '../../../../Context/ViewportContext.jsx';
import {Container_2} from '../../user/Container_2.jsx';
import {Text} from '../../user/Text/index.js';
import {Input} from '../../../../components/ui/input.jsx';
import {Button} from '../../user/Button.jsx';
import {clsx} from "clsx";
import {ForgotPasswordFormSettings} from "./ForgotPasswordRenderSettings.jsx";

export const ForgotPasswordForm = ({
                                       containerPadding = 40,
                                       containerPaddingMobile = 16,
                                       containerBgColor = '#FFFFFF',
                                       formBgColor = '#FFFFFF',
                                       labelFontSize = 14,
                                       labelFontSizeMobile = 12,
                                       labelColor = '#000000',
                                       errorFontSize = 12,
                                       errorFontSizeMobile = 10,
                                       errorColor = '#EF4444',
                                   }) => {
    const {
        connectors: {connect, drag},
    } = useNode();
    const {viewport} = useViewport();
    const isMobile = viewport === 'mobile' || viewport.width < 768;

    const {register, handleSubmit, formState: {errors}} = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {
        setLoading(true);
        setTimeout(() => setLoading(false), 1500);
    };

    return (
        <div
            ref={(ref) => connect(drag(ref))}
            className="w-full min-h-[82vh] overflow-x-hidden"
            style={{
                padding: isMobile ? `${containerPaddingMobile}px` : `${containerPadding}px`,
                backgroundColor: containerBgColor,
            }}
        >
            <div
                className={clsx("flex items-center justify-center  w-full max-w-[400px] mx-auto", {"mt-10 ": isMobile})}>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    style={{
                        backgroundColor: formBgColor,
                        padding: isMobile ? '16px' : '24px',
                        borderRadius: '8px',
                        boxSizing: 'border-box',
                        overflow: 'hidden',
                    }}
                >
                    <Element is={Container_2} id="forgot-password-container" canvas>
                        <Element
                            is={Text}
                            id="forgot-password-title"
                            text="Forgot Password"
                            fontWeight="600"
                            color="#111827"
                            fontSizeDesktop={32}
                            fontSizeMobile={24}
                            className="mb-6 flex items-center justify-center"
                            canvas
                        />
                    </Element>
                    <Element is={Container_2} id="description-container" canvas>
                        <Element
                            is={Text}
                            id="forgot-password-description"
                            text="To reset your password, enter the email registered with your account."
                            fontWeight="400"
                            color="#212121"
                            charSpacing="Tight"
                            fontSizeDesktop={16}
                            fontSizeMobile={14}
                            className="text-start mb-6 mt-15"
                            canvas
                        />
                    </Element>
                    <Element is={Container_2} id="email-label-container" className="mb-2" canvas>
                        <Element
                            is={Text}
                            id="email-label"
                            text="Email"
                            fontWeight="600"
                            color={labelColor}
                            fontSizeDesktop={labelFontSize}
                            fontSizeMobile={labelFontSizeMobile}
                            canvas
                        />
                    </Element>

                    <Input
                        id="email"
                        type="email"
                        placeholder="example@example.com"
                        autoComplete="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
                                message: 'Enter a valid email address',
                            },
                        })}
                        className="w-full"
                    />
                    {errors.email && (
                        <Element is={Container_2} id="email-error-container" className="mt-2" canvas>
                            <Element
                                is={Text}
                                id="email-error"
                                text={errors.email.message}
                                fontWeight="400"
                                color={errorColor}
                                fontSizeDesktop={errorFontSize}
                                fontSizeMobile={errorFontSizeMobile}
                                canvas
                            />
                        </Element>
                    )}

                    <Element is={Container_2} id="continue-container" className="mt-6" canvas>
                        <Element
                            is={Button}
                            id="continue-button"
                            children={loading ? 'Sending email...' : 'Continue'}
                            backgroundColor="#FF4D00"
                            fontSizeDesktop={14}
                            fontSizeMobile={12}
                            paddingX={142}
                            widthMobile={310}
                            disabled={loading}
                            canvas
                        />
                    </Element>
                </form>
            </div>
        </div>
    );
};

ForgotPasswordForm.craft = {
    displayName: 'Forgot Password Form',
    props: {
        containerPadding: 40,
        containerPaddingMobile: 16,
        containerBgColor: '#FFFFFF',
        formMaxWidth: 400,
        formBgColor: '#FFFFFF',
        labelFontSize: 14,
        labelFontSizeMobile: 12,
        labelColor: '#000000',
        errorFontSize: 12,
        errorFontSizeMobile: 10,
        errorColor: '#EF4444',
        gap: 24,
        gapMobile: 16,
    },
    related: {
        settings: ForgotPasswordFormSettings,
    },
    rules: {
        canDrag: () => true,
        canMoveIn: () => false,
        canMoveOut: () => true,
    },
};
