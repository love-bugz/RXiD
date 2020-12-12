export type CaptureStackParamList = {
  CaptureScreen: undefined;
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

//each tab is a stack
//make stacks for the components, then render those as tab screens
