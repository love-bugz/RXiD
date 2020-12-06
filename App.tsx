import React from "react";
import AppNavigator from "./navigation";
import { store } from "./store";
import { Provider } from "react-redux";

export default function App() {
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    );
}
