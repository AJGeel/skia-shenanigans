/** Based on: https://shopify.github.io/react-native-skia/docs/shapes/atlas */

import { Screen } from "@/components/Screen";
import { useFullscreenCanvas } from "@/hooks/useFullscreenCanvas";
import { black, white } from "@/theme/colors";

import {
  Canvas,
  Group,
  rect,
  Rect,
  Atlas,
  useTexture,
  useRSXformBuffer,
} from "@shopify/react-native-skia";

import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";

const SIZE = { width: 25, height: 12 };

const STROKE_WIDTH = 2;

const TEXTURE_SIZE = {
  width: SIZE.width + STROKE_WIDTH,
  height: SIZE.height + STROKE_WIDTH,
};

const Route = () => {
  const { width, height } = useFullscreenCanvas();

  const pos = useSharedValue({ x: 0, y: 0 });

  const texture = useTexture(
    <Group>
      <Rect
        rect={rect(STROKE_WIDTH / 2, STROKE_WIDTH / 2, SIZE.width, SIZE.height)}
        color={white}
      />
      <Rect
        rect={rect(STROKE_WIDTH / 2, STROKE_WIDTH / 2, SIZE.width, SIZE.height)}
        color={black}
        style="stroke"
        strokeWidth={STROKE_WIDTH}
      />
    </Group>,
    TEXTURE_SIZE
  );

  const numberOfBoxes = height;

  const sprites = new Array(numberOfBoxes)
    .fill(null)
    .map(() => rect(0, 0, TEXTURE_SIZE.width, TEXTURE_SIZE.height));

  const transforms = useRSXformBuffer(numberOfBoxes, (val, i) => {
    "worklet";
    const translateX = 5 + ((i * SIZE.width) % width);
    const translateY = 25 + Math.floor(i / (width / SIZE.width)) * SIZE.width;

    const r = Math.atan2(pos.value.y - translateY, pos.value.x - translateX);
    val.set(Math.cos(r), Math.sin(r), translateX, translateY);
  });

  const panGesture = Gesture.Pan().onChange((e) => (pos.value = e));

  return (
    <Screen title="Atlas Instances">
      <GestureDetector gesture={panGesture}>
        <Canvas style={{ height, width }}>
          <Atlas image={texture} sprites={sprites} transforms={transforms} />
        </Canvas>
      </GestureDetector>
    </Screen>
  );
};

export default Route;
