import { useNode } from "@craftjs/core";
import ProfileIcon from '../assets/icons/profileIcon.jsx';
import Arrow from '../assets/icons/Arrow.jsx';
import { SliderControl } from "../component/craft/ui-blocks/SliderControl.jsx";
import ColorPicker from "../components/ui/ColorPicker.jsx";
import { useViewport } from "../Context/ViewportContext.jsx";
import ShippingIcon from "../assets/icons/ShippingIcon.jsx";
import PaymentIcon from "../assets/icons/PaymentIcon.jsx";
import ArrowRightIcon from "../assets/icons/ArrowRightIcon.jsx";

export const IconElement = ({
                                iconType = "profileIcon",
                                iconSize = 17,
                                iconSizeMobile = 14,
                                iconColor = "#FF4D00",
                                className = ""
                            }) => {
    const { connectors: { connect, drag } } = useNode();
    const { viewport } = useViewport();

    const isMobile = viewport === 'mobile' || viewport.width < 768;

    const IconMap = {
        profileIcon: ProfileIcon,
        Arrow: Arrow,
        ShippingIcon: ShippingIcon,
        PaymentIcon: PaymentIcon,
        ArrowRightIcon: ArrowRightIcon,
    };

    const Icon = IconMap[iconType];

    const currentIconSize = isMobile ? iconSizeMobile : iconSize;

    return (
        <div ref={(ref) => connect(drag(ref))} className={className}>
            {Icon ? (
                <div
                    style={{
                        width: `${currentIconSize}px`,
                        height: `${currentIconSize}px`,
                        display: 'inline-block'
                    }}
                >
                    <Icon
                        width={currentIconSize}
                        height={currentIconSize}
                        color={iconColor}
                    />
                </div>
            ) : (
                <div
                    style={{
                        width: `${currentIconSize}px`,
                        height: `${currentIconSize}px`,
                        backgroundColor: '#ccc',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px'
                    }}
                >
                    ?
                </div>
            )}
        </div>
    );
};

export const IconElementSettings = () => {
    const { props, actions: { setProp } } = useNode((node) => ({ props: node.data.props }));
    const { viewport } = useViewport();

    const isMobile = viewport === 'mobile' || viewport.width < 768;

    return (
        <div className="bg-white space-y-6">
            <div className="space-y-2">
                <ColorPicker
                    label="Color"
                    value={props.iconColor}
                    onChange={(val) => setProp((p) => (p.iconColor = val))}
                />
            </div>

            {/*{isMobile ? (*/}
            {/*    <SliderControl*/}
            {/*        value={props.iconSizeMobile}*/}
            {/*        label="Icon Size (Mobile)"*/}
            {/*        stack={true}*/}
            {/*        onChange={(val) => setProp((p) => (p.iconSizeMobile = val))}*/}
            {/*        min={12}*/}
            {/*        max={64}*/}
            {/*    />*/}
            {/*) */}
            {/*     : (*/}
                 <SliderControl
                    value={props.iconSize}
                    label="Icon Size"
                    stack={true}
                    onChange={(val) => setProp((p) => (p.iconSize = val))}
                    min={12}
                    max={64}
                />
             {/*)}*/}
        </div>
    );
};

IconElement.craft = {
    displayName: "Icon Element",
    props: {
        iconType: "profileIcon",
        iconSize: 17,
        iconSizeMobile: 14,
        iconColor: "#FF4D00",
        className: "",
    },
    related: {
        settings: IconElementSettings,
    },
};