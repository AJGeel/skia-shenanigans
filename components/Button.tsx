import { black, white } from "@/theme/colors";
import { Pressable, PressableProps, StyleSheet, View } from "react-native";
import Text from "./Text";
import { AntDesign } from "@expo/vector-icons";
import { forwardRef } from "react";
import Animated from "react-native-reanimated";
import useBouncyPress from "@/hooks/useBouncyButton";

type ButtonProps = PressableProps & {
  title: string;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const Button = forwardRef<View, ButtonProps>(({ title, ...props }, ref) => {
  const { onPressHandlers, animatedStyle } = useBouncyPress({});

  return (
    <AnimatedPressable
      {...props}
      {...onPressHandlers}
      ref={ref}
      style={[animatedStyle, styles.container]}
    >
      <Text style={styles.title}>{title}</Text>
      <AntDesign name="right" size={16} color={white} />
    </AnimatedPressable>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
    paddingLeft: 16,
    paddingRight: 12,
    backgroundColor: black,
    justifyContent: "space-between",
    borderRadius: 10,
  },
  title: { fontSize: 16, color: white },
});

export default Button;
