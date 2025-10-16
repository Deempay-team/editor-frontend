'use client';

import {Element, useNode} from "@craftjs/core";
import {useViewport} from "../../../../Context/ViewportContext.jsx";
import MissionImage from "../../../../assets/img/mssion.jpg"
import AboutUsImage from "../../../../assets/img/aboutus.jpg"
import {Container_2} from "../../user/Container_2.jsx";
import {Text} from "../../user/Text/index.js";
import React from "react";
import {Image} from "../../user/Image.jsx"
import {Button} from "../../user/Button.jsx";
import {AboutPageRenderSettings} from "./AboutRenderSettings.jsx";

export function AboutPageRender({
                                    heroTitle = 'About Us',
                                    heroSubtitle = 'We are passionate about delivering quality products that enhance your health and wellness.',
                                    heroImage = AboutUsImage,
                                    missionTitle = 'Our Mission',
                                    missionText = 'Our mission is to provide accessible, high-quality health products that empower our customers to live their best lives. We strive to combine innovation with care, ensuring every product meets the highest standards.',
                                    missionImage = MissionImage,
                                    buttonText = 'Shop Now',
                                    containerPadding = 64,
                                    containerPaddingMobile = 16,
                                    sectionPaddingY = 80,
                                    sectionPaddingYMobile = 48,
                                    backgroundColor = '#F9FAFB',
                                    heroSectionBg = '#FFFFFF',
                                    missionSectionBg = '#F3F4F6',
                                }) {
    const {
        connectors: {connect, drag},
    } = useNode();

    const {viewport} = useViewport();
    const isMobile = viewport === 'mobile' || viewport.width < 768;

    return (
        <div
            ref={(ref) => connect(drag(ref))}
            className="w-full min-h-screen"
            style={{backgroundColor}}
        >
            <section
                className="relative"
                style={{
                    backgroundColor: heroSectionBg,
                    paddingTop: isMobile ? `${sectionPaddingYMobile}px` : `${sectionPaddingY}px`,
                    paddingBottom: isMobile ? `${sectionPaddingYMobile}px` : `${sectionPaddingY}px`,
                }}
            >
                <div
                    className="max-w-7xl mx-auto"
                    style={{
                        paddingLeft: isMobile ? `${containerPaddingMobile}px` : `${containerPadding}px`,
                        paddingRight: isMobile ? `${containerPaddingMobile}px` : `${containerPadding}px`,
                    }}
                >
                    <div className="text-center">
                        <Element is={Container_2} id="title-container" canvas>
                            <Element
                                is={Text}
                                id="title"
                                text={heroTitle}
                                fontWeight="600"
                                color="#1F2937"
                                fontSizeDesktop={48}
                                fontSizeMobile={30}
                                canvas
                            />
                        </Element>
                        <Element is={Container_2} id="sub-container" canvas>
                            <Element
                                is={Text}
                                id="subtitletext"
                                text={heroSubtitle}
                                fontWeight="400"
                                color="#6B7280"
                                fontSizeDesktop={20}
                                fontSizeMobile={16}
                                className="mt-4 max-w-3xl mx-auto"
                                canvas
                            />
                        </Element>
                    </div>
                    <div className={`${isMobile ? 'mt-8' : 'mt-12'} flex justify-center`}>
                        <Element
                            is={Container_2}
                            id="hero-image-container"
                            canvas
                        >
                            <Element
                                is={Image}
                                id="about-image"
                                src={heroImage.src}
                                alt="About Image"
                                widthMode="custom"
                                width="600"
                                widthModeMobile="custom"
                                widthMobile="350"
                                heightMode="custom"
                                height="400"
                                borderRadius={4}
                                heightModeMobile="custom"
                                heightMobile="250"
                            />
                        </Element>
                    </div>
                </div>
            </section>

            <section
                style={{
                    backgroundColor: missionSectionBg,
                    paddingTop: isMobile ? `${sectionPaddingYMobile}px` : `${sectionPaddingY}px`,
                    paddingBottom: isMobile ? `${sectionPaddingYMobile}px` : `${sectionPaddingY}px`,
                }}
            >
                <div
                    className="max-w-7xl mx-auto"
                    style={{
                        paddingLeft: isMobile ? `${containerPaddingMobile}px` : `${containerPadding}px`,
                        paddingRight: isMobile ? `${containerPaddingMobile}px` : `${containerPadding}px`,
                    }}
                >
                    <div
                        className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'} ${isMobile ? 'gap-8' : 'gap-12'}`}>
                        <div>
                            <Element is={Container_2} id="mission-container" canvas>
                                <Element
                                    is={Text}
                                    id="mission-title"
                                    text={missionTitle}
                                    fontWeight="600"
                                    color="#1F2937"
                                    fontSizeDesktop={30}
                                    fontSizeMobile={24}
                                    canvas
                                />
                            </Element>
                            <Element is={Container_2} id="mission-text-container" canvas>
                                <Element
                                    is={Text}
                                    id="mission-text"
                                    text={missionText}
                                    fontWeight="400"
                                    color="#4B5563"
                                    fontSizeDesktop={16}
                                    fontSizeMobile={14}
                                    className="mt-4 "
                                    canvas
                                />
                            </Element>
                            <Element
                                is={Container_2}
                                id="hero-button-container"
                                className="mt-6 "
                                canvas
                            >
                                <Element
                                    is={Button}
                                    id="hero-button"
                                    children={buttonText}
                                    backgroundColor="#FF4D00"
                                    textColor="#FFFFFF"
                                    width={100}
                                    height={45}
                                    heightMobile={40}
                                    widthMoile={50}
                                    className="flex items-center justify-start rounded-md transition-colors"
                                    canvas
                                />
                            </Element>

                        </div>
                        <div className="flex justify-center">
                            <Element
                                is={Container_2}
                                id="mission-image-container"
                                canvas
                            >
                                <Element
                                    is={Image}
                                    id="mission-image"
                                    src={missionImage.src}
                                    alt="Mission Image"
                                    widthMode="custom"
                                    width="400"
                                    widthModeMobile="custom"
                                    widthMobile="350"
                                    heightMode="custom"
                                    height="300"
                                    borderRadius={4}
                                    heightModeMobile="custom"
                                    heightMobile="250"
                                />
                            </Element>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

AboutPageRender.craft = {
    displayName: 'About Page',
    props: {
        heroTitle: 'About Us',
        heroSubtitle: 'We are passionate about delivering quality products that enhance your health and wellness.',
        missionTitle: 'Our Mission',
        missionText: 'Our mission is to provide accessible, high-quality health products that empower our customers to live their best lives. We strive to combine innovation with care, ensuring every product meets the highest standards.',
        heroImage: AboutUsImage,
        buttonText: 'Shop Now',
        containerPadding: 64,
        containerPaddingMobile: 16,
        sectionPaddingY: 80,
        sectionPaddingYMobile: 48,
        backgroundColor: '#F9FAFB',
        heroSectionBg: '#FFFFFF',
        missionSectionBg: '#F3F4F6',
    },
    related: {
        settings: AboutPageRenderSettings,
    },
    rules: {
        canDrag: () => true,
        canMoveIn: () => false,
        canMoveOut: () => true,
    },
};