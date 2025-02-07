import { Stack } from "expo-router";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";

type ScreenProps = {
  children: React.ReactNode;
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
};

export const Screen = ({ children, title, containerStyle }: ScreenProps) => (
  <>
    <View style={[styles.container, containerStyle]}>{children}</View>
    <Stack.Screen options={{ title }} />
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fefae0",
  },
});
