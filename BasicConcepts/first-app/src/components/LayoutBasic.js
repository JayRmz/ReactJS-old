import React from "react";

export default function LayoutBasic(props) {
    const {children} = props;
    return (
        <div>
            <div>Menu Top</div>
            <div>{children}</div>
        </div>
    )
}