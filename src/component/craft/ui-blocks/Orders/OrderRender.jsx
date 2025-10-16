import React from 'react';
import Link from 'next/link';
import {Element, useNode} from '@craftjs/core';
import {useViewport} from '../../../../Context/ViewportContext.jsx';
import orderImage from '../../../../assets/img/img.png';
import {Container_2} from '../../user/Container_2.jsx';
import {Text} from "../../user/Text/Text.jsx";
import {Image} from "../../user/Image.jsx";
import {OrderRenderSettings} from "./OrderRenderSettings.jsx";


const defaultOrders = [
    {
        id: 1,
        name: 'Feroglobin Liquid Plus...',
        orderNo: '298993899',
        seller: 'DeemPay',
        status: 'Delivered',
        date: '04 - June - 2020',
        image: orderImage,
    },
    {
        id: 2,
        name: 'Paracetamol 500mg',
        orderNo: '198223456',
        seller: 'PharmaFast',
        status: 'Delivered',
        date: '12 - July - 2021',
        image: orderImage,
    },
    {
        id: 3,
        name: 'Vitamin C Tablets',
        orderNo: '984561238',
        seller: 'HealthMart',
        status: 'Delivered',
        date: '30 - Aug - 2021',
        image: orderImage,
    },
    {
        id: 4,
        name: 'Cough Syrup Max',
        orderNo: '182736451',
        seller: 'MediPlus',
        status: 'Delivered',
        date: '15 - Sep - 2021',
        image: orderImage,
    },
    {
        id: 5,
        name: 'Cough Syrup Max',
        orderNo: '182736451',
        seller: 'MediPlus',
        status: 'Delivered',
        date: '15 - Sep - 2021',
        image: orderImage,
    },
    {
        id: 6,
        name: 'Cough Syrup Max',
        orderNo: '182736451',
        seller: 'MediPlus',
        status: 'Delivered',
        date: '15 - Sep - 2021',
        image: orderImage,
    },
    {
        id: 7,
        name: 'Cough Syrup Max',
        orderNo: '182736451',
        seller: 'MediPlus',
        status: 'Delivered',
        date: '15 - Sep - 2021',
        image: orderImage,
    },
    {
        id: 8,
        name: 'Cough Syrup Max',
        orderNo: '182736451',
        seller: 'MediPlus',
        status: 'Delivered',
        date: '15 - Sep - 2021',
        image: orderImage,
    },
];

function OrderCard({
                       order,
                       cardWidth,
                       cardWidthMobile,
                       cardHeight,
                       cardHeightMobile,
                       cardBgColor,
                       cardPadding,
                       cardPaddingMobile,
                       cardBorderRadius,
                       statusBgColor,
                       statusTextColor,
                       statusWidth,
                       statusWidthMobile,
                       statusHeight,
                       statusHeightMobile,
                       statusFontSize,
                       statusFontSizeMobile,
                   }) {
    const {viewport} = useViewport();
    const isMobile = viewport === 'mobile' || viewport.width < 768;
    console.log('order.image', order.id, order.image);
    console.log("orderImage:", orderImage);

    return (
        <div
            className="flex cursor-pointer hover:shadow-md transition flex-shrink-0 box-border w-full"
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: isMobile ? 'flex-start' : 'center',
                width: isMobile ? `${cardWidthMobile}%` : `${cardWidth}px`,
                maxWidth: '100%',
                height: isMobile ? cardHeightMobile : `${cardHeight}px`,
                padding: isMobile ? `${cardPaddingMobile}px` : `${cardPadding}px`,
                borderRadius: `${cardBorderRadius}px`,
                backgroundColor: cardBgColor,
            }}
        >
            <div className={`${isMobile ? 'mt-1 mr-2' : ''} flex items-center `}>
                    <Element
                        is={Container_2}
                        id="order-image" canvas
                        className={`${isMobile ? 'w-full' : 'mt-2'}`}
                    >
                        <Element
                            is={Image}
                            id={`order-image-${order.id}`}
                            src={typeof order.image === 'string' ? order.image : order.image.src}
                            alt={`${order.name} image`}
                            objectFit="cover"
                            widthMode="custom"
                            width="124"
                            widthModeMobile="custom"
                            widthMobile="90"
                            heightMode="custom"
                            height="124"
                            heightModeMobile="custom"
                            heightMobile="90"
                            heightMode="full"
                            borderRadius={5}
                            className="w-full h-full rounded-lg"
                            canvas
                        />
                    </Element>
            </div>
            <div
                className={`flex flex-col justify-start flex-1 min-w-0 overflow-hidden mt-4 ${isMobile ? 'w-full' : 'px-2 mb-5'}`}>
                <div className="mb-1">
                    <Element is={Container_2} id="name-container" canvas>
                        <Element
                            is={Text}
                            id="name-text"
                            text={order.name}
                            fontWeight="600"
                            color="#000000"
                            fontSizeDesktop={20}
                            fontSizeMobile={12}
                            canvas
                        />
                    </Element>
                </div>
                <div className="mb-1 mt-1">
                    <Element is={Container_2} id="orderNo-container" canvas>
                        <Element
                            is={Text}
                            id="orderNo-text"
                            text={`Order no: ${order.orderNo}`}
                            fontWeight="400"
                            color="#000000"
                            fontSizeDesktop={14}
                            fontSizeMobile={10}
                            canvas
                        />
                    </Element>
                </div>
                <div className="mb-4 mt-1">
                    <Element is={Container_2} id="soldBy-container" canvas>
                        <Element
                            is={Text}
                            id="soldBy-text"
                            text={`Sold by: ${order.seller}`}
                            fontWeight="400"
                            color="#000000"
                            fontSizeDesktop={14}
                            fontSizeMobile={10}
                            canvas
                        />
                    </Element>
                </div>
                <div className="flex w-full flex-row items-center justify-between">
                    <div
                        className="flex items-center justify-center rounded-[4px] flex-shrink-0"
                        style={{
                            width: isMobile ? `${statusWidthMobile}px` : `${statusWidth}px`,
                            height: isMobile ? `${statusHeightMobile}px` : `${statusHeight}px`,
                            backgroundColor: statusBgColor,
                            color: statusTextColor,
                            fontSize: isMobile ? `${statusFontSizeMobile}px` : `${statusFontSize}px`,
                            fontWeight: 500,
                        }}
                    >
                        {order.status}
                    </div>
                    <div className="">
                        <Element is={Container_2} id="orderDate-container" canvas>
                            <Element
                                is={Text}
                                id="orderDate-text"
                                text={order.date}
                                fontWeight="400"
                                color="#212121B2"
                                fontSizeDesktop={12}
                                fontSizeMobile={10}
                                canvas
                            />
                        </Element>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function OrderRender({
                                title = 'Orders',
                                breadcrumb = 'HomePage / order',
                                sectionTitle = 'My Orders',
                                orders = defaultOrders,
                                containerPadding = 40,
                                containerPaddingMobile = 16,
                                columnGap = 24,
                                columnGapMobile = 12,
                                columnBgColor = '#FFFFFF',
                                columnPadding = 24,
                                columnBorderColor = '#E5E7EB',
                                columnBorderRadius = 20,
                                cardGap = 16,
                                cardGapMobile = 12,
                                cardWidth = 500,
                                cardWidthMobile = 100,
                                cardHeight = 148,
                                cardHeightMobile = 'auto',
                                cardBgColor = '#E5E7EB',
                                cardPadding = 16,
                                cardPaddingMobile = 8,
                                cardBorderRadius = 4,
                                imageSize = 120,
                                imageSizeMobile = 60,
                                cardTitleFontSize = 20,
                                cardTitleFontSizeMobile = 14,
                                cardTitleFontWeight = 700,
                                cardTitleColor = '#000000',
                                cardTextFontSize = 14,
                                cardTextFontSizeMobile = 12,
                                cardTextColor = '#000000',
                                statusBgColor = '#FF4D00',
                                statusTextColor = '#FFFFFF',
                                statusWidth = 95,
                                statusWidthMobile = 70,
                                statusHeight = 31,
                                statusHeightMobile = 24,
                                statusFontSize = 12,
                                statusFontSizeMobile = 10,
                                dateFontSize = 12,
                                dateFontSizeMobile = 10,
                                dateColor = '#000000',
                                backgroundColor = '#FFFFFF',
                            }) {
    const {
        connectors: {connect, drag},
    } = useNode();
    const {viewport} = useViewport();
    const isMobile = viewport === 'mobile' || viewport.width < 768;

    if (!orders || orders.length === 0) {
        return <div>No orders available</div>;
    }

    return (
        <div ref={(ref) => connect(drag(ref))} className="w-full overflow-hidden"
             style={{backgroundColor: backgroundColor}}>
            <div
                style={{
                    padding: isMobile ? `${containerPaddingMobile}px` : `${containerPadding}px`,
                    maxWidth: '1440px',
                    margin: 'auto',
                }}
                className="p-4 sm:p-6"
            >
                <div>
                    <div className="mb-3">
                        <Element is={Container_2} id="title-container" canvas>
                            <Element
                                is={Text}
                                id="title-text"
                                text={title}
                                fontWeight="600"
                                color="#000000"
                                fontSizeDesktop={isMobile ? 20 : 36}
                                fontSizeMobile={20}
                                canvas
                            />
                        </Element>
                    </div>
                    <div className="mb-6">
                        <Element is={Container_2} id="breadcumb-container" canvas>
                            <Element
                                is={Text}
                                id="breadcumb-text"
                                text={breadcrumb}
                                fontWeight="500"
                                color="#4B5563"
                                fontSizeDesktop={16}
                                fontSizeMobile={14}
                                canvas
                            />
                        </Element>
                    </div>
                </div>
                <div className="mb-3">
                    <Element is={Container_2} id="order-sect-title_container" canvas>
                        <Element
                            is={Text}
                            id="section_title"
                            text={sectionTitle}
                            fontWeight="600"
                            color="#000000"
                            fontSizeDesktop={18}
                            fontSizeMobile={16}
                            canvas
                        />
                    </Element>
                </div>
                <div
                    className="grid w-full"
                    style={{
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, minmax(0, 1fr))',
                        gap: isMobile ? `${columnGapMobile}px` : `${columnGap}px`,
                    }}
                >
                    {isMobile ? (
                        <div
                            className="flex flex-col w-full"
                            style={{
                                backgroundColor: columnBgColor,
                                padding: `${columnPadding}px`,
                                border: `1px solid ${columnBorderColor}`,
                                borderRadius: `${columnBorderRadius}px`,
                                gap: `${cardGapMobile}px`,
                                maxWidth: '600px',
                                margin: 'auto',
                                overflow: 'hidden',
                            }}
                        >
                            {orders.map((order) => (
                                <Link
                                    key={order.id}
                                    href={`/orders/details/${order.id}`}
                                    className="w-full block"
                                >
                                    <OrderCard
                                        order={order}
                                        cardWidth={cardWidth}
                                        cardWidthMobile={cardWidthMobile}
                                        cardHeight={cardHeight}
                                        cardHeightMobile={cardHeightMobile}
                                        cardBgColor={cardBgColor}
                                        cardPadding={cardPadding}
                                        cardPaddingMobile={cardPaddingMobile}
                                        cardBorderRadius={cardBorderRadius}
                                        imageSize={imageSize}
                                        imageSizeMobile={imageSizeMobile}
                                        titleFontSize={cardTitleFontSize}
                                        titleFontSizeMobile={cardTitleFontSizeMobile}
                                        titleFontWeight={cardTitleFontWeight}
                                        titleColor={cardTitleColor}
                                        textFontSize={cardTextFontSize}
                                        textFontSizeMobile={cardTextFontSizeMobile}
                                        textColor={cardTextColor}
                                        statusBgColor={statusBgColor}
                                        statusTextColor={statusTextColor}
                                        statusWidth={statusWidth}
                                        statusWidthMobile={statusWidthMobile}
                                        statusHeight={statusHeight}
                                        statusHeightMobile={statusHeightMobile}
                                        statusFontSize={statusFontSize}
                                        statusFontSizeMobile={statusFontSizeMobile}
                                        dateFontSize={dateFontSize}
                                        dateFontSizeMobile={dateFontSizeMobile}
                                        dateColor={dateColor}
                                    />
                                </Link>
                            ))}
                        </div>
                    ) : (
                        Array.from({length: 2}).map((_, idx) => {
                            const columnOrders = orders.filter((_, i) => i % 2 === idx);
                            return (
                                <div
                                    key={idx}
                                    className="flex flex-col w-full"
                                    style={{
                                        backgroundColor: columnBgColor,
                                        padding: `${columnPadding}px`,
                                        border: `1px solid ${columnBorderColor}`,
                                        borderRadius: `${columnBorderRadius}px`,
                                        gap: `${cardGap}px`,
                                        maxWidth: '600px',
                                        margin: 'auto',
                                        overflow: 'hidden',
                                    }}
                                >
                                    {columnOrders.map((order) => (
                                        <Link
                                            key={order.id}
                                            href={`/orders/details/${order.id}`}
                                            className="w-full block"
                                        >
                                            <OrderCard
                                                order={order}
                                                cardWidth={cardWidth}
                                                cardWidthMobile={cardWidthMobile}
                                                cardHeight={cardHeight}
                                                cardHeightMobile={cardHeightMobile}
                                                cardBgColor={cardBgColor}
                                                cardPadding={cardPadding}
                                                cardPaddingMobile={cardPaddingMobile}
                                                cardBorderRadius={cardBorderRadius}
                                                imageSize={imageSize}
                                                imageSizeMobile={imageSizeMobile}
                                                titleFontSize={cardTitleFontSize}
                                                titleFontSizeMobile={cardTitleFontSizeMobile}
                                                titleFontWeight={cardTitleFontWeight}
                                                titleColor={cardTitleColor}
                                                textFontSize={cardTextFontSize}
                                                textFontSizeMobile={cardTextFontSizeMobile}
                                                textColor={cardTextColor}
                                                statusBgColor={statusBgColor}
                                                statusTextColor={statusTextColor}
                                                statusWidth={statusWidth}
                                                statusWidthMobile={statusWidthMobile}
                                                statusHeight={statusHeight}
                                                statusHeightMobile={statusHeightMobile}
                                                statusFontSize={statusFontSize}
                                                statusFontSizeMobile={statusFontSizeMobile}
                                                dateFontSize={dateFontSize}
                                                dateFontSizeMobile={dateFontSizeMobile}
                                                dateColor={dateColor}
                                            />
                                        </Link>
                                    ))}
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
}
OrderRender.craft = {
    displayName: 'Order List',
    props: {
        title: 'Orders',
        breadcrumb: 'HomePage / order',
        sectionTitle: 'My Orders',
        orders: defaultOrders,
        containerPadding: 40,
        containerPaddingMobile: 16,
        columnGap: 24,
        columnGapMobile: 12,
        columnBgColor: '#FFFFFF',
        columnPadding: 24,
        columnBorderColor: '#E5E7EB',
        columnBorderRadius: 20,
        cardGap: 16,
        cardGapMobile: 12,
        cardWidth: 560,
        cardWidthMobile: 100,
        cardHeight: 148,
        cardHeightMobile: 130,
        cardBgColor: '#E5E7EB',
        cardPadding: 16,
        cardPaddingMobile: 8,
        cardBorderRadius: 4,
        imageSize: 120,
        imageSizeMobile: 90,
        cardTitleFontSize: 20,
        cardTitleFontSizeMobile: 14,
        cardTitleFontWeight: 700,
        cardTitleColor: '#000000',
        cardTextFontSize: 14,
        cardTextFontSizeMobile: 12,
        cardTextColor: '#000000',
        statusBgColor: '#FF4D00',
        statusTextColor: '#FFFFFF',
        statusWidth: 95,
        statusWidthMobile: 70,
        statusHeight: 31,
        statusHeightMobile: 24,
        statusFontSize: 12,
        statusFontSizeMobile: 10,
        dateFontSize: 12,
        dateFontSizeMobile: 10,
        dateColor: '#000000',
        backgroundColor: '#FFFFFF',
    },
    related: {
        settings: OrderRenderSettings,
    },
    rules: {
        canDrag: () => true,
        canMoveIn: () => false,
        canMoveOut: () => true,
    },
};