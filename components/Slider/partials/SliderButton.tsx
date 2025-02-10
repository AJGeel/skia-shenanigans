import useBouncyPress from "@/hooks/useBouncyButton";
import { black, white } from "@/theme/colors";
import { AntDesign } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type SliderButtonProps = {
  iconName: "plus" | "minus";
  onPress: VoidFunction;
};

export const SliderButton = ({ iconName, onPress }: SliderButtonProps) => {
  const { animatedStyle, onPressHandlers } = useBouncyPress({});

  return (
    <AnimatedPressable
      {...onPressHandlers}
      onPress={onPress}
      style={[animatedStyle, styles.button]}
    >
      <AntDesign name={iconName} size={16} color={white} />
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  button: { padding: 12, backgroundColor: black, borderRadius: 4 },
});
