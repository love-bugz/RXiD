import React from 'react';

// Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// Navigation Types
import {
  CaptureStackParamList,
  ReminderStackParamList,
  HomeTabsParamList,
  IndexStackParamList,
} from '../types';

// Screen Components
import CaptureScreen from '../screens/CaptureScreen';
import ReminderScreen from '../screens/ReminderScreen';

// Create stack navigator
const CaptureStack = createStackNavigator<CaptureStackParamList>();

function CaptureStackNavigator() {
  return (
    <CaptureStack.Navigator initialRouteName="CaptureScreen">
      <CaptureStack.Screen name="CaptureScreen" component={CaptureScreen} />
    </CaptureStack.Navigator>
  );
}

const ReminderStack = createStackNavigator<ReminderStackParamList>();

function ReminderStackNavigator() {
  return (
    <ReminderStack.Navigator initialRouteName="ReminderScreen">
      <ReminderStack.Screen name="ReminderScreen" component={ReminderScreen} />
    </ReminderStack.Navigator>
  );
}

// Create tabs navigator
const HomeTabs = createBottomTabNavigator<HomeTabsParamList>();

export default function HomeTabNavigator() {
  return (
    <HomeTabs.Navigator initialRouteName="Capture">
      <HomeTabs.Screen name="Capture" component={CaptureStackNavigator} />
      <HomeTabs.Screen name="Reminder" component={ReminderStackNavigator} />
    </HomeTabs.Navigator>
  );
}
