import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
    CaptureStackParamList,
    ReminderStackParamList,
    HomeTabsParamList,
} from "../types";
import CaptureScreen from "../screens/CaptureScreen";
import ReminderScreen from "../screens/ReminderScreen";

const CaptureStack = createStackNavigator<CaptureStackParamList>();

function CaptureStackNavigator() {
    return (
        <CaptureStack.Navigator initialRouteName="CaptureScreen">
            <CaptureStack.Screen
                name="CaptureScreen"
                component={CaptureScreen}
            />
        </CaptureStack.Navigator>
    );
}

const ReminderStack = createStackNavigator<ReminderStackParamList>();

function ReminderStackNavigator() {
    return (
        <ReminderStack.Navigator initialRouteName="ReminderScreen">
            <ReminderStack.Screen
                name="ReminderScreen"
                component={ReminderScreen}
            />
        </ReminderStack.Navigator>
    );
}

const HomeTabs = createBottomTabNavigator<HomeTabsParamList>();

export default function HomeTabNavigator() {
    return (
        <HomeTabs.Navigator initialRouteName="Capture">
            <HomeTabs.Screen name="Capture" component={CaptureStackNavigator} />
            <HomeTabs.Screen
                name="Reminder"
                component={ReminderStackNavigator}
            />
        </HomeTabs.Navigator>
    );
}
