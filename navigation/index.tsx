import React from 'react';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Navigation Types
import { IndexStackParamList } from '../types';

// Screen & Navigation Components
import LoginScreen from '../screens/LoginScreen';
import AppLoadingScreen from '../screens/AppLoadingScreen';
import HomeTabNavigator from './HomeTabNavigator';

//use IndexStackParamList
const RootStack = createStackNavigator<IndexStackParamList>();

// EXPORT NAVIGATION STACK
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen
          name="AppLoading"
          component={AppLoadingScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <RootStack.Screen
          name="Home"
          component={HomeTabNavigator}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
