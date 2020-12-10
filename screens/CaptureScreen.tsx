import React from "react";
import { View, Text } from "react-native";
import { colors, layout, font } from "../styles/Constants";

export default function CaptureScreen() {
    return (
        <View style={{ ...layout.fullPage }}>
            <Text style={{ ...font.largeTitleBold, color: colors.primary }}>
                Hello World
            </Text>
        </View>
    );
}
