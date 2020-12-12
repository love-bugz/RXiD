import React from "react";

// Hooks
import useCachedResources from "./hooks/useCachedResources";

// Navigation
import AppNavigator from "./navigation";

// Store
import { store } from "./store";
import { Provider } from "react-redux";

// Third Party Libraries
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
    const isLoadingComplete = useCachedResources();

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
