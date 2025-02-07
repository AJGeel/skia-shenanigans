import { Screen } from "@/components/Screen";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Canvas, Circle, Group } from "@shopify/react-native-skia";
import { useEffect } from "react";

import { Dimensions } from "react-native";
import {
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
} from "react-native-reanimated";

const ANIMATION_TIMING = 3000;

const SPRING_CONFIG = {
  duration: ANIMATION_TIMING / 2,
  dampingRatio: 0.6,
  stiffness: 500,
};

const OPACITY_SPRING_CONFIG = {
  ...SPRING_CONFIG,
  dampingRatio: 1,
  stiffness: 1000,
};

const Route = () => {
  const { colors } = useColorScheme(ANIMATION_TIMING);

  const padding = 60;

  const size = Dimensions.get("screen").width - padding;
  const radius = useSharedValue(0);
  const c = useDerivedValue(() => size - radius.value);

  const opacity = useSharedValue(1);

  useEffect(() => {
    radius.value = withRepeat(
      withSequence(
        withSpring(size * 0.33, OPACITY_SPRING_CONFIG),
        withSpring(size * 0, OPACITY_SPRING_CONFIG)
      ),
      -1,
      true
    );
  }, [radius, size]);

  useEffect(() => {
    opacity.value = withRepeat(
      withSequence(withSpring(1, SPRING_CONFIG), withSpring(0, SPRING_CONFIG)),
      -1,
      true
    );
  }, []);

  return (
    <Screen title="Circles and Blending Modes">
      <Canvas style={{ width: size, height: size }}>
        <Group blendMode="multiply" opacity={opacity}>
          <Circle cx={radius} cy={radius} r={radius} color={colors[0]} />
          <Circle cx={c} cy={radius} r={radius} color={colors[1]} />
          <Circle cx={size / 2} cy={c} r={radius} color={colors[2]} />
        </Group>
      </Canvas>
    </Screen>
  );
};

export default Route;
