import { useFullscreenCanvas } from "@/hooks/useFullscreenCanvas";
import { Canvas, DiscretePathEffect, Path } from "@shopify/react-native-skia";
import { Screen } from "@/components/Screen";
import { black } from "@/theme/colors";
import { useState } from "react";
import { useWithInterval } from "@/hooks/useWithInterval";
import { randomInRange } from "@/utils/randomInRange";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Slider } from "@/components/Slider/Slider";

const PATH_SIZE = 24;

const ROCKET_PATH =
  "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z";

const Route = () => {
  const insets = useSafeAreaInsets();
  const { width, height } = useFullscreenCanvas();

  const [multipliers, setMultipliers] = useState({ length: 1, deviation: 1 });
  const [length, setLength] = useState(0.3);
  const [deviation, setDeviation] = useState(0.1);

  const scale = Math.min(width, height) / PATH_SIZE;

  const randomizeMultipliers = () => {
    setMultipliers({
      length: randomInRange(0.8, 1.1),
      deviation: randomInRange(0.8, 1.1),
    });
  };

  useWithInterval({ callback: randomizeMultipliers });

  return (
    <Screen title="SVG Path Effects">
      <Canvas
        style={{
          width,
          height,
        }}
      >
        <Path
          path={ROCKET_PATH}
          color={black}
          style="stroke"
          strokeWidth={0.8}
          transform={[{ scale }, { translateY: 3 }]}
        >
          <DiscretePathEffect
            length={length * multipliers.length}
            deviation={deviation * multipliers.deviation}
          />
        </Path>
      </Canvas>
      <View
        style={{ position: "absolute", bottom: insets.bottom + 16, gap: 12 }}
      >
        <Slider
          label="Path Length"
          value={length}
          setValue={setLength}
          max={2}
          increment={0.1}
        />
        <Slider
          label="Path Deviation"
          value={deviation}
          setValue={setDeviation}
          max={1}
          increment={0.05}
        />
      </View>
    </Screen>
  );
};

export default Route;
