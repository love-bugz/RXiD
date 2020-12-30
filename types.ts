import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

//Home is a tab navigator with Capture and Reminder, nested inside a Stack (Root)
export type CaptureStackParamList = {
  CaptureScreen: undefined;
  SearchResultsScreen: undefined;
};

export type ReminderStackParamList = {
  ReminderScreen: undefined;
};

export type HomeTabsParamList = {
  Capture: undefined; //this is CaptureScreenStack
  Reminder: undefined; //this is ReminderScreenStack
};

export type IndexStackParamList = {
  AppLoading: undefined; //screen
  Login: undefined; //screen
  Home: undefined; //Home is a bottom tab navigator
};

// Navigation prop type for each stack screen of index
export type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<HomeTabsParamList, 'Capture'>,
  StackNavigationProp<IndexStackParamList>
>;

// Navigation prop type for each screen within the capture stack
export type CaptureScreenNavigationProp = StackNavigationProp<
  CaptureStackParamList,
  'CaptureScreen'
>;
