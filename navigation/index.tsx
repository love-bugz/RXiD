import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { IndexStackParamList } from "../types";
import LoginScreen from "../screens/LoginScreen";
import AppLoadingScreen from "../screens/AppLoadingScreen";
import HomeTabNavigator from "./HomeTabNavigator";

//use IndexStackParamList
const RootStack = createStackNavigator<IndexStackParamList>();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="Login">
                <RootStack.Screen
                    name="AppLoading"
                    component={AppLoadingScreen}
                />
                <RootStack.Screen name="Login" component={LoginScreen} />
                <RootStack.Screen name="Home" component={HomeTabNavigator} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
