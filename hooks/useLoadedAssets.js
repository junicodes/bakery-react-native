import Ionicons from "@expo/vector-icons/Ionicons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import { offlineImage, onlineImage } from '../utils/images';
import { Image } from 'react-native';
import { Asset } from 'expo-asset';


const cacheImages = (images) => {

  return Object.keys(images).map((key) => {

    if (typeof images[key] === 'string') {
      return Image.prefetch(images[key]);
    } else {
      return Asset.fromModule(images[key]).downloadAsync();
    }
    
  });
}

export function useLoadedAssets() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync(Ionicons.font);

        //Load and cache asset file before app 
        const imageAssets = cacheImages({...offlineImage, ...onlineImage});

        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!

        await Promise.all([...imageAssets]);

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
