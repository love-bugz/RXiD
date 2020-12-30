import * as React from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Fonts to be loaded
import {
  Inter_300Light,
  Inter_100Thin,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

// EXPORTED HOOK COMPONENT ------------------------------------
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
          'Inter-Thin': Inter_100Thin,
          'Inter-Light': Inter_300Light,
          Inter: Inter_400Regular,
          'Inter-Medium': Inter_500Medium,
          'Inter-Bold': Inter_700Bold,
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
