import * as React from "react";
import {
    StyleSheet,
    StyleProp,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
    View,
} from "react-native";

import { colors, PADDING } from "../styles/Constants";
import Text from "./Text";

interface ButtonProps {
    label: string;
    secondary?: boolean;
    danger?: boolean;
    block?: boolean;
    icon?: JSX.Element;
    buttonStyle?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
    onPress: () => void;
}

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: PADDING,
        paddingHorizontal: PADDING * 2,
        borderRadius: 5,
    },
    label: {
        color: colors.contrastText,
        textAlign: "center",
    },
});

const Button = ({
    label,
    secondary,
    danger,
    block,
    icon,
    buttonStyle,
    labelStyle,
    onPress,
}: ButtonProps) => {
    const BUTTON_COLOR = secondary
        ? colors.secondary
        : danger
        ? colors.danger
        : colors.primary;

    const blockButton = (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.button,
                buttonStyle,
                { backgroundColor: BUTTON_COLOR, width: "80%" },
            ]}>
            {icon && icon}
            <Text
                type="headline"
                style={[
                    styles.label,
                    labelStyle,
                    icon && { marginLeft: PADDING },
                ]}>
                {label}
            </Text>
        </TouchableOpacity>
    );

    const fitButton = (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity
                onPress={onPress}
                style={[
                    styles.button,
                    buttonStyle,
                    { backgroundColor: BUTTON_COLOR },
                ]}>
                {icon && icon}
                <Text
                    type="headline"
                    style={[
                        styles.label,
                        labelStyle,
                        icon && { marginLeft: PADDING },
                    ]}>
                    {label}
                </Text>
            </TouchableOpacity>
        </View>
    );

    if (block) return blockButton;
    else return fitButton;
};

export default Button;
