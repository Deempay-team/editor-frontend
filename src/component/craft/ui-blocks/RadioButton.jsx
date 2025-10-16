import { useViewport } from "../../../Context/ViewportContext.jsx";
import {RadioButtonSettings} from "./RadioButtonSettings.jsx";
import {useNode} from "@craftjs/core";
import {clsx} from "clsx";

const RadioButton = ({
                         option,
                         radioSize,
                         radioColor,
                         radioTextColor,
                         radioTextSize,
                         radioTextSizeMobile,
                         name,
                         className = "",
                         checked,
                         onChange,
                     }) => {
    const {
        connectors: {connect, drag},
    } = useNode();
    const { viewport } = useViewport();

    return (
        <label
            ref={(ref) => connect(drag(ref))}
            key={option}
            className={clsx("flex items-center space-x-2 cursor-pointer", className)}
        >
            <input
                type="radio"
                name={name}
                value={option}
                checked={checked}
                onChange={(e) => {
                    console.log('RadioButton changed:', e.target.value);
                    if (onChange) {
                        onChange(e.target.value);
                    }
                }}
                style={{
                    width: `${radioSize}px`,
                    height: `${radioSize}px`,
                    accentColor: radioColor,
                }}
                className="rounded-full border-2 border-gray-300"
            />
            {option && <span
                className="font-[Poppins] font-normal"
                style={{
                    color: radioTextColor,
                    fontSize: `${viewport === 'mobile' ? radioTextSizeMobile : radioTextSize}px`,
                }}
            >
        {option}
      </span>}
        </label>
    );
};

RadioButton.craft = {
    displayName: "Radio Button",
    props: {
        radioSize: 20,
        radioColor: "#000000",
        radioTextColor: "#000000",
        radioTextSize: 16,
        radioTextSizeMobile: 14,
        name: "radio",
        option: "Option",
        className: "",
    },
    related: {
        settings: RadioButtonSettings,
    },
    rules: {
        canDrag: () => true,
        canMoveIn: () => false,
        canMoveOut: () => true,
    },
};

export default RadioButton;
