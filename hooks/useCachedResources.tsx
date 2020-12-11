import * as React from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Arimo_400Regular, Arimo_700Bold } from "@expo-google-fonts/arimo";

export default function useCachedResources() {
    // State Constants
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);

    // Load any resources or data that we need prior to rendering the app
    React.useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHideAsync();

                // Load fonts
                await Font.loadAsync({
                    "Arimo-regular": Arimo_400Regular,
                    "Arimo-bold": Arimo_700Bold,
                });
            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hideAsync();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    return isLoadingComplete;
}
