import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type BouncyPressProps = {
  minScale?: number;
  minOpacity?: number;
};

const SPRING_CONFIG = {
  mass: 0.5,
  damping: 2.5,
  stiffness: 500,
};

const useBouncyPress = ({
  minScale = 0.9,
  minOpacity = 0.7,
}: BouncyPressProps) => {
  const pressed = useSharedValue(false);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withSpring(pressed.value ? minScale : 1, SPRING_CONFIG),
      },
    ],
    opacity: withSpring(pressed.value ? minOpacity : 1, {
      ...SPRING_CONFIG,
      overshootClamping: true,
    }),
  }));

  const onPressIn = () => (pressed.value = true);
  const onPressOut = () => (pressed.value = false);

  return {
    animatedStyle,
    onPressHandlers: {
      onPressIn,
      onPressOut,
    },
  };
};

export default useBouncyPress;
