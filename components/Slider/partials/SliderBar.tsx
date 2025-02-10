import { black } from "@/theme/colors";
import { View, StyleSheet } from "react-native";

export const SliderBar = ({ percentage }: { percentage: number }) => (
  <View testID="Visualisation" style={styles.barContainer}>
    <View
      style={[
        styles.barFilled,
        {
          width: `${percentage}%`,
        },
      ]}
    />
    <View testID="blank" style={styles.barEmpty} />
  </View>
);

const styles = StyleSheet.create({
  barContainer: {
    flexDirection: "row",
    height: 10,
    flex: 1,
    borderRadius: 4,
    overflow: "hidden",
  },
  barFilled: {
    backgroundColor: black,
    flexShrink: 1,
  },
  barEmpty: {
    backgroundColor: black,
    opacity: 0.2,
    flexGrow: 1,
  },
});
