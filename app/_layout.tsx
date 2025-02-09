import { useSplashScreen } from "@/hooks/useSplashScreen";
import { colors } from "@/theme/colors";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";

export { ErrorBoundary } from "expo-router"; // Catch any errors thrown by the Layout component.

export const unstable_settings = {
  initialRouteName: "(tabs)", // Ensure that reloading on `/modal` keeps a back button present.
};

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const { isLoaded } = useSplashScreen();

  if (!isLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <Stack
        screenOptions={{
          headerShown: true,
          headerTintColor: colors.black,
          headerTitleStyle: { fontFamily: "FunnelBold" },
          headerBackButtonDisplayMode: "minimal",
          headerStyle: { backgroundColor: colors.white },
          contentStyle: { backgroundColor: colors.white },
        }}
      />
    </GestureHandlerRootView>
  );
};

export default RootLayout;
