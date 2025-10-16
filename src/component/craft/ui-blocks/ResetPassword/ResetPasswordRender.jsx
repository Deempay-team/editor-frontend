'use client';
import React, {useState, useEffect, useRef} from 'react';
import {useForm} from 'react-hook-form';
import {Element, useNode} from '@craftjs/core';
import {useViewport} from '../../../../Context/ViewportContext.jsx';
import {Container_2} from '../../user/Container_2.jsx';
import {Text} from '../../user/Text/index.js';
import {Input} from '../../../../components/ui/input.jsx';
import {Button} from '../../user/Button.jsx';
import {clsx} from "clsx";
import {ResetPasswordCodeSettings} from "./ResetPasswordRenderSettings.jsx";

export const ResetPasswordCode = ({
                                      containerPadding = 40,
                                      containerPaddingMobile = 16,
                                      containerBgColor = '#FFFFFF',
                                      formBgColor = '#FFFFFF',
                                      inputSize = 50,
                                      inputSizeMobile = 48,
                                      inputGap = 12,
                                      inputGapMobile = 8,
                                      inputFontSize = 20,
                                      inputFontSizeMobile = 16,
                                      errorFontSize = 12,
                                      errorFontSizeMobile = 10,
                                      errorColor = '#EF4444',
                                      dividerTextColor = '#4B5563',
                                  }) => {
    const {
        connectors: {connect, drag},
    } = useNode();

    const {viewport} = useViewport();
    const isMobile = viewport === 'mobile' || viewport.width < 768;

    const inputs = useRef([]);
    const [values, setValues] = useState(Array(6).fill(''));
    const [digits, setDigits] = useState(Array(6).fill(''));
    const [error, setError] = useState('');
    const [resendTimer, setResendTimer] = useState(60);
    const [loading, setLoading] = useState(false);

    const {handleSubmit} = useForm();

    useEffect(() => {
        if (resendTimer > 0) {
            const timer = setTimeout(() => setResendTimer((prev) => prev - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [resendTimer]);

    const handleChange = (index, e) => {
        const value = e.target.value;
        if (/^[0-9]$/.test(value)) {
            const newMaskedValues = [...values];
            const newDigits = [...digits];
            newMaskedValues[index] = '•';
            newDigits[index] = value;
            setValues(newMaskedValues);
            setDigits(newDigits);
            setError('');
            if (index < 5) inputs.current[index + 1]?.focus();
        } else {
            e.target.value = '';
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace') {
            e.preventDefault();
            const newMaskedValues = [...values];
            const newDigits = [...digits];
            newMaskedValues[index] = '';
            newDigits[index] = '';
            setValues(newMaskedValues);
            setDigits(newDigits);
            if (index > 0) inputs.current[index - 1]?.focus();
        }
    };

    const onSubmit = () => {
        const code = digits.join('');
        if (code.length < 6 || digits.includes('')) {
            setError('Please enter all 6 digits.');
            return;
        }

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert('Code verified successfully!');
        }, 1000);
    };

    const currentInputSize = isMobile ? inputSizeMobile : inputSize;
    const currentInputGap = isMobile ? inputGapMobile : inputGap;
    const currentInputFontSize = isMobile ? inputFontSizeMobile : inputFontSize;

    return (
        <div
            ref={(ref) => connect(drag(ref))}
            className="w-full  min-h-[82vh] overflow-x-hidden"
            style={{
                padding: isMobile ? `${containerPaddingMobile}px` : `${containerPadding}px`,
                backgroundColor: containerBgColor,
            }}
        >
            <div>
                <div className={clsx("w-full max-w-[400px] mx-auto", {"mt-10 ": isMobile})}>
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
                        <Element
                            is={Text}
                            id="reset-code-title"
                            text="Reset Password"
                            fontWeight="600"
                            color="#111827"
                            fontSizeDesktop={36}
                            fontSizeMobile={24}
                            className="mb-10 flex items-center justify-center"
                            canvas
                        />

                        <Element
                            is={Text}
                            id="reset-code-description"
                            text="Enter the 6-digit secure code that was sent to your email."
                            fontWeight="400"
                            color="#212121"
                            fontSizeDesktop={14}
                            fontSizeMobile={12}
                            className="text-center mb-8 whitespace-nowrap"
                            canvas
                        />

                        {/* Responsive Input Grid */}
                        <div
                            className="flex justify-center flex-wrap mb-4"
                            style={{gap: `${currentInputGap}px`}}
                        >
                            {values.map((val, i) => (
                                <Input
                                    key={i}
                                    maxLength={1}
                                    value={val}
                                    placeholder="•"
                                    ref={(el) => (inputs.current[i] = el)}
                                    onChange={(e) => handleChange(i, e)}
                                    onKeyDown={(e) => handleKeyDown(i, e)}
                                    inputMode="numeric"
                                    className={`text-center font-[700] rounded-[6px] border
                    placeholder-gray-400 font-lato flex items-center justify-center
                    focus:outline-none focus:ring-2 focus:ring-[#FF4D00]
                    ${val === '' ? 'text-gray-400 border-[#FF4D00]' : 'text-[#212121] border-gray-500'}`}
                                    style={{
                                        width: `${currentInputSize}px`,
                                        height: `${currentInputSize}px`,
                                        fontSize: `${currentInputFontSize}px`,
                                        transition: 'all 0.3s ease',
                                    }}
                                />
                            ))}
                        </div>

                        {error && (
                            <Element is={Container_2} id="code-error-container" className="mt-2" canvas>
                                <Element
                                    is={Text}
                                    id="code-error"
                                    text={error}
                                    fontWeight="400"
                                    color={errorColor}
                                    fontSizeDesktop={errorFontSize}
                                    fontSizeMobile={errorFontSizeMobile}
                                    className="text-center"
                                    canvas
                                />
                            </Element>
                        )}

                        <Element is={Container_2} id="continue-container" className="mt-6 flex items-center justify-center" canvas>
                            <Element
                                is={Button}
                                id="continue-button"
                                children={loading ? 'Verifying...' : 'Continue'}
                                backgroundColor="#FF4D00"
                                fontSizeDesktop={14}
                                fontSizeMobile={12}
                                width={300}
                                widthMobile={310}
                                canvas
                            />
                        </Element>

                        <Element
                            is={Container_2}
                            id="resend-container"
                            className="mt-6 text-center text-sm text-gray-600"
                            canvas
                        >
                            <Element
                                is={Text}
                                id="resend-text"
                                text={`Didn't receive the code? ${resendTimer === 0 ? 'Resend Code' : `Resend in ${resendTimer}s`}`}
                                fontWeight="400"
                                color={dividerTextColor}
                                fontSizeDesktop={12}
                                fontSizeMobile={10}
                                className={`cursor-${resendTimer === 0 ? 'pointer' : 'not-allowed'}`}
                                canvas
                            />
                        </Element>
                    </form>
                </div>
            </div>
        </div>
    );
};


ResetPasswordCode.craft = {
    displayName: 'Reset Password',
    props: {
        containerPadding: 40,
        containerPaddingMobile: 16,
        containerBgColor: '#FFFFFF',
        formMaxWidth: 400,
        formBgColor: '#FFFFFF',
        inputSize: 48,
        inputSizeMobile: 45,
        inputGap: 12,
        inputGapMobile: 8,
        inputFontSize: 20,
        inputFontSizeMobile: 16,
        errorFontSize: 12,
        errorFontSizeMobile: 10,
        errorColor: '#EF4444',
        linkFontSize: 14,
        linkFontSizeMobile: 12,
        linkColor: '#FF4D00',
        dividerTextColor: '#4B5563',
    },
    related: {
        settings: ResetPasswordCodeSettings,
    },
    rules: {
        canDrag: () => true,
        canMoveIn: () => false,
        canMoveOut: () => true,
    },
};