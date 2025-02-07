import { useFullscreenCanvas } from "@/hooks/useFullscreenCanvas";
import { Canvas, Rect } from "@shopify/react-native-skia";
import { Screen } from "@/components/Screen";

const Route = () => {
  const { width, height } = useFullscreenCanvas();

  return (
    <Screen title="This is a template">
      <Canvas
        style={{
          width,
          height,
          borderWidth: 1,
          borderColor: "red",
        }}
      >
        <Rect x={0} y={0} width={width} height={height} color="red" />
      </Canvas>
    </Screen>
  );
};

export default Route;
