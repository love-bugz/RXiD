import React from "react";

// Library Components
import { View, SafeAreaView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// Custom Components
import Button from "../customComponents/Button";
import Text from "../customComponents/Text";
import FullPageView from "../customComponents/FullPageView";

// EXPORTED COMPONENT
export default function LoginScreen() {
    const icon = <MaterialIcons name="person" size={24} color="white" />;

    return (
        <FullPageView>
            <Text type="title3">LOGIN PAGE</Text>
            <Button
                label="Press Me"
                icon={icon}
                onPress={() => {
                    console.log("pressed");
                }}
            />
        </FullPageView>
    );
}
