'use client';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Element, useNode} from '@craftjs/core';
import Link from 'next/link';
import {useViewport} from '../../../../Context/ViewportContext.jsx';
import {Container_2} from '../../user/Container_2.jsx';
import {Text} from '../../user/Text/index.js';
import {Input} from '../../../../components/ui/input.jsx';
import {Button} from '../../user/Button.jsx';
import {RegisterFormSettings} from "./SignupRenderSettings.jsx";

export const RegisterForm = ({
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
                                 linkFontSize = 14,
                                 linkFontSizeMobile = 12,
                                 dividerTextColor = '#4B5563',

                             }) => {
    const {
        connectors: {connect, drag},
    } = useNode();
    const {viewport} = useViewport();
    const isMobile = viewport === 'mobile' || viewport.width < 768;

    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        console.log('Register submitted:', data);
    };

    return (
        <div
            ref={(ref) => connect(drag(ref))}
            className="w-full overflow-x-hidden"
            style={{
                padding: isMobile ? `${containerPaddingMobile}px` : `${containerPadding}px`,
                backgroundColor: containerBgColor,
            }}
        >
            <div className="max-w-[1440px] mx-auto">
                {/*<Element is={Container_2} id="register-form-container" canvas >*/}
                <div className="w-full max-w-[400px] mx-auto">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className=""
                        style={{
                            backgroundColor: formBgColor,
                            padding: isMobile ? '16px' : '24px',
                            borderRadius: '8px',
                            boxSizing: 'border-box',
                            overflow: 'hidden',
                        }}
                        aria-label="Register form"
                    >
                        <Element
                            is={Text}
                            id="register-title"
                            text="Register"
                            fontWeight="600"
                            color="#111827"
                            fontSizeDesktop={36}
                            fontSizeMobile={24}
                            className="mb-10 flex items-center justify-center"
                            canvas
                        />
                        <Element is={Container_2} id="first-name-label-container" className="mb-2" canvas>
                            <Element
                                is={Text}
                                id="first-name-label"
                                text="First Name"
                                fontWeight="600"
                                color={labelColor}
                                fontSizeDesktop={labelFontSize}
                                fontSizeMobile={labelFontSizeMobile}
                                canvas
                            />
                        </Element>
                        <Input
                            id="firstName"
                            placeholder="John"
                            {...register('firstName', {required: 'First name is required'})}
                            className="w-full"
                        />
                        {errors.firstName && (
                            <Element is={Container_2} id="first-name-error-container" className="mt-2" canvas>
                                <Element
                                    is={Text}
                                    id="first-name-error"
                                    text={errors.firstName.message}
                                    fontWeight="400"
                                    color={errorColor}
                                    fontSizeDesktop={errorFontSize}
                                    fontSizeMobile={errorFontSizeMobile}
                                    canvas
                                />
                            </Element>
                        )}
                        <Element is={Container_2} id="last-name-label-container" className="mb-2 mt-6" canvas>
                            <Element
                                is={Text}
                                id="last-name-label"
                                text="Last Name"
                                fontWeight="600"
                                color={labelColor}
                                fontSizeDesktop={labelFontSize}
                                fontSizeMobile={labelFontSizeMobile}
                                canvas
                            />
                        </Element>
                        <Input
                            id="lastName"
                            placeholder="Doe"
                            {...register('lastName', {required: 'Last name is required'})}
                            className="w-full"
                        />
                        {errors.lastName && (
                            <Element is={Container_2} id="last-name-error-container" className="mt-2" canvas>
                                <Element
                                    is={Text}
                                    id="last-name-error"
                                    text={errors.lastName.message}
                                    fontWeight="400"
                                    color={errorColor}
                                    fontSizeDesktop={errorFontSize}
                                    fontSizeMobile={errorFontSizeMobile}
                                    canvas
                                />
                            </Element>
                        )}
                        <Element is={Container_2} id="email-label-container" className="mb-2 mt-6" canvas>
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
                        <Element is={Container_2} id="password-label-container" className="mb-2 mt-6" canvas>
                            <Element
                                is={Text}
                                id="password-label"
                                text="Password"
                                fontWeight="600"
                                color={labelColor}
                                fontSizeDesktop={labelFontSize}
                                fontSizeMobile={labelFontSizeMobile}
                                canvas
                            />
                        </Element>
                        <Input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Your password"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Password must be at least 6 characters',
                                },
                            })}
                            className="w-full"
                        />
                        {errors.password && (
                            <Element is={Container_2} id="password-error-container" className="mt-2" canvas>
                                <Element
                                    is={Text}
                                    id="password-error"
                                    text={errors.password.message}
                                    fontWeight="400"
                                    color={errorColor}
                                    fontSizeDesktop={errorFontSize}
                                    fontSizeMobile={errorFontSizeMobile}
                                    canvas
                                />
                            </Element>
                        )}
                        <Element is={Container_2} id="confirm-password-label-container" className="mb-2 mt-6" canvas>
                            <Element
                                is={Text}
                                id="confirm-password-label"
                                text="Confirm Password"
                                fontWeight="600"
                                color={labelColor}
                                fontSizeDesktop={labelFontSize}
                                fontSizeMobile={labelFontSizeMobile}
                                canvas
                            />
                        </Element>
                        <Input
                            id="confirmPassword"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Confirm your password"
                            {...register('confirmPassword', {
                                required: 'Please confirm your password',
                                validate: (val) => val === watch('password') || 'Passwords do not match',
                            })}
                            className="w-full"
                        />
                        {errors.confirmPassword && (
                            <Element is={Container_2} id="confirm-password-error-container" className="mt-2" canvas>
                                <Element
                                    is={Text}
                                    id="confirm-password-error"
                                    text={errors.confirmPassword.message}
                                    fontWeight="400"
                                    color={errorColor}
                                    fontSizeDesktop={errorFontSize}
                                    fontSizeMobile={errorFontSizeMobile}
                                    canvas
                                />
                            </Element>
                        )}

                        <Element is={Container_2} id="continue-container" className="mt-8" canvas>
                            <Element
                                is={Button}
                                id="continue-button"
                                children="Continue"
                                backgroundColor="#FF4D00"
                                fontSizeDesktop={14}
                                fontSizeMobile={12}
                                paddingX={142}
                                widthMobile={300}
                                canvas
                            />
                        </Element>
                    </form>
                    <Element
                        is={Container_2}
                        id="divider-container"
                        className="flex items-center justify-center space-x-3 "
                        canvas
                    >
                        <hr className="flex-1 border-t border-gray-200 ml-6"/>
                        <Element
                            is={Text}
                            id="divider-text"
                            text="OR"
                            fontWeight="400"
                            color={dividerTextColor}
                            fontSizeDesktop={12}
                            fontSizeMobile={10}
                            className="text-gray-500"
                            canvas
                        />
                        <hr className="flex-1 border-t border-gray-200 mr-6"/>
                    </Element>
                    <Element
                        is={Container_2}
                        id="login-wrapper"
                        className="flex flex-row items-center justify-center mt-6 space-x-1 text-sm"
                        canvas
                    >
                        <Element
                            is={Text}
                            id="login-text"
                            text="Already have an account?"
                            fontWeight="400"
                            color="#6B7280"
                            fontSizeDesktop={14}
                            fontSizeMobile={12}
                            canvas
                        />
                        <Link href="#" prefetch className="hover:underline">
                            <Element
                                is={Text}
                                id="login-link-text"
                                text="Login"
                                fontWeight="500"
                                color="#FF4D00"
                                fontSizeDesktop={linkFontSize}
                                fontSizeMobile={linkFontSizeMobile}
                                canvas
                            />
                        </Link>
                    </Element>
                </div>
            </div>
        </div>
    );
};
RegisterForm.craft = {
    displayName: 'Register Form',
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
        linkFontSize: 14,
        linkFontSizeMobile: 12,
        linkColor: '#FF4D00',
        dividerTextColor: '#4B5563',
        gap: 24,
        gapMobile: 16,
    },
    related: {
        settings: RegisterFormSettings,
    },
    rules: {
        canDrag: () => true,
        canMoveIn: () => false,
        canMoveOut: () => true,
    },
};
