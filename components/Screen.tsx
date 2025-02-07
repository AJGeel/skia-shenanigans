import { colors } from "@/theme/colors";
import { Stack } from "expo-router";
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  ScrollView,
} from "react-native";

type ScreenProps = {
  children: React.ReactNode;
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  isScrollable?: true;
};

export const Screen = ({ children, title, containerStyle }: ScreenProps) => (
  <>
    <View style={[styles.container, containerStyle]}>{children}</View>
    <Stack.Screen options={{ title }} />
  </>
);

export const ScrollableScreen = ({
  children,
  title,
  containerStyle,
}: ScreenProps) => (
  <>
    <ScrollView contentContainerStyle={[styles.container, containerStyle]}>
      {children}
    </ScrollView>
    <Stack.Screen options={{ title, headerShown: false }} />
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
