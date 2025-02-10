import { Screen } from "@/components/Screen";
import { useFullscreenCanvas } from "@/hooks/useFullscreenCanvas";
import { useWithInterval } from "@/hooks/useWithInterval";
import {
  Canvas,
  Group,
  useImage,
  Image,
  Turbulence,
  DisplacementMap,
} from "@shopify/react-native-skia";
import { useState } from "react";
import { ActivityIndicator } from "react-native";

const Route = () => {
  const { width, height } = useFullscreenCanvas();

  const remoteImage = useImage(`https://picsum.photos/${width}/${height}`);

  const [seed, setSeed] = useState(0);

  useWithInterval({ callback: () => setSeed((prevSeed) => prevSeed + 1) });

  return (
    <Screen title="Remote Image">
      {remoteImage ? (
        <Canvas style={{ width, height }}>
          <Group>
            <Image
              image={remoteImage}
              blendMode="multiply"
              opacity={0.5}
              fit="cover"
              x={-25}
              y={-25}
              width={width}
              height={height}
            >
              <DisplacementMap channelX="g" channelY="a" scale={100}>
                <Turbulence freqX={0.01} freqY={0.05} octaves={2} seed={seed} />
              </DisplacementMap>
            </Image>
          </Group>
        </Canvas>
      ) : (
        <ActivityIndicator />
      )}
    </Screen>
  );
};

export default Route;
