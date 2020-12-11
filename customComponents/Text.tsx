import React, { ReactNode } from "react";
import { TextProps as OriginalTextProps, Text as RNText } from "react-native";

import { typeography, colors } from "../styles/Constants";

export interface TextProps extends OriginalTextProps {
    white?: boolean;
    type?: keyof typeof typeography;
    children?: ReactNode;
}

const Text = ({ white, type, style, children }: TextProps) => {
    const color = white ? colors.contrastText : colors.text;
    return (
        <RNText style={[typeography[type || "body"], { color }, style]}>
            {children}
        </RNText>
    );
};

export default Text;
