import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

export const useSplashScreen = () => {
  const [isLoaded, error] = useFonts({
    Funnel: require("../assets/fonts/FunnelDisplay-Regular.ttf"),
    FunnelBold: require("../assets/fonts/FunnelDisplay-Bold.ttf"),

    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  useEffect(() => {
    if (isLoaded) {
      SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  return {
    isLoaded,
  };
};
