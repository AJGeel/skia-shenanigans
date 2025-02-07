import { useSplashScreen } from "@/hooks/useSplashScreen";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
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
    <Stack
      screenOptions={{
        headerShown: true,
        headerTintColor: "black",
        headerTitleStyle: { fontFamily: "FunnelBold" },
        headerBackButtonDisplayMode: "minimal",
        headerStyle: { backgroundColor: "#fefae0" },
      }}
    />
  );
};

export default RootLayout;
