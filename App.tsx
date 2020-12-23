import React from 'react';

// Hooks
import useCachedResources from './hooks/useCachedResources';

// Navigation
import AppNavigator from './navigation';

// Store
import { store } from './store';
import { Provider } from 'react-redux';

// Third Party Libraries
import { SafeAreaProvider } from 'react-native-safe-area-context';

// EXPORTED APP COMPONENT --------------------------------
export default function App() {
  // Using Custom Hook
  const isLoadingComplete = useCachedResources();

  // Once resources are loaded, then the app returns
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </SafeAreaProvider>
    );
  }
}
