import { StyleSheet, Dimensions } from "react-native";

const FULL_WIDTH = Dimensions.get("window").width;
const FULL_HEIGHT = Dimensions.get("window").height;

export const colors = {
    primary: "#2d90f5",
    text: "#000",
    secondary: "#40ab47",
    contrastText: "#fff",
    accent: "#ffa500",
};

export const font = StyleSheet.create({
    largeTitle: {
        color: colors.text,
        fontSize: 36,
    },
    largeTitleBold: {
        color: colors.text,
        fontSize: 36,
        fontWeight: "800",
    },
    title: {
        color: colors.text,
        fontSize: 24,
    },
    titleBold: {
        color: colors.text,
        fontSize: 24,
        fontWeight: "800",
    },
    largeBody: {
        color: colors.text,
        fontSize: 16,
    },
    largeBodyBold: {
        color: colors.text,
        fontSize: 16,
        fontWeight: "800",
    },
    body: {
        color: colors.text,
        fontSize: 12,
    },
    bodyBold: {
        color: colors.text,
        fontSize: 12,
        fontWeight: "800",
    },
    caption: {
        color: colors.text,
        fontSize: 8,
    },
    captionBold: {
        color: colors.text,
        fontSize: 8,
        fontWeight: "800",
    },
});

const OUTER_PADDING = 10;

export const layout = StyleSheet.create({
    fullPage: {
        width: FULL_WIDTH,
        height: FULL_HEIGHT,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: OUTER_PADDING,
    },
});
