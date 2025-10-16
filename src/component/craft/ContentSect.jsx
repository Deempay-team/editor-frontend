import React from "react";
import {Frame, Element, useEditor} from "@craftjs/core";
import cx from "classnames";
import {Container} from "./user/Container";
import {useViewport} from "../../Context/ViewportContext";
import {LoginForm} from "./ui-blocks/Login/LoginRender.jsx";
import {RegisterForm} from "./ui-blocks/SignUp/SignupRender.jsx";
import {ResetPasswordCode} from "./ui-blocks/ResetPassword/ResetPasswordRender.jsx";
import {ForgotPasswordForm} from "./ui-blocks/ForgotPassword/ForgotPasswordRender.jsx";

function ContentSectionSect() {
    const {viewport} = useViewport();

    const {enabled, connectors} = useEditor((state) => ({
        enabled: state.options.enabled,
    }));
    const getViewportWidth = () => {
        switch (viewport) {
            case "mobile":
                return "375px";
            case "tablet":
                return "768px";
            default:
                return "100%";
        }
    };

    return (
        <main className="viewport page-container bg-[#F6F6F6] flex justify-center pt-4 px-8 pb-25 min-h-screen"
              style={{
                  height: "100vh",
                  overflow: "hidden",
              }}>

            <div
                className={cx([
                    "craftjs-renderer bg-white relative overflow-hidden",
                    {
                        "bg-renderer-gray": enabled,
                    },
                ])}
                ref={(ref) => {
                    connectors.select(connectors.hover(ref), null);
                }}
                style={{
                    width: getViewportWidth(),
                    boxSizing: "border-box",
                    overflowY: "auto",
                }}
            >
                <Frame>
                    <Element
                        is={Container}
                        id="main-frame"
                        background="transparent"
                        width="100%"
                        height="auto"
                        flexDirection="column"
                        fillSpace={false}
                        alignItems="stretch"
                        justifyContent="flex-start"
                        canvas
                        custom={{displayName: "App"}}
                    >
                        {/*<Element id="Fo" is={LoginForm}/>*/}
                        {/*<Element id="Reg" is={RegisterForm}/>*/}
                        {/*<Element id="Res" is={ResetPasswordCode}/>*/}
                        {/*<Element id="fog" is={ForgotPasswordForm}/>*/}
                    </Element>
                </Frame>
            </div>
        </main>
    );
}

export {ContentSectionSect};
