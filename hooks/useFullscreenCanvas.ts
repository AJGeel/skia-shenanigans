import { Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const useFullscreenCanvas = () => {
  const insets = useSafeAreaInsets();

  const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

  const width = screenWidth;
  const height = screenHeight - insets.top - insets.bottom;

  return {
    width,
    height,
  };
};
