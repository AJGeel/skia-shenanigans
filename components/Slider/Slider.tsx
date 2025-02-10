import { black } from "@/theme/colors";
import { StyleSheet, View } from "react-native";
import Text from "../Text";
import { SliderButton } from "./partials/SliderButton";
import { SliderBar } from "./partials/SliderBar";

type SliderProps = {
  label: string;
  value: number;
  setValue: (value: number) => void;
  min?: number;
  max: number;
  increment?: number;
};

export const Slider = ({
  label,
  value,
  setValue,
  min = 0,
  max,
  increment = 1,
}: SliderProps) => {
  const percentage = Math.floor((value / (max - min)) * 100);

  const handleIncrement = () => {
    const newValue = value + increment;
    setValue(newValue);

    if (newValue > max) {
      setValue(max);
    }
  };

  const handleDecrement = () => {
    const newValue = value - increment;
    setValue(newValue);

    if (newValue < min) {
      setValue(min);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <SliderButton iconName="minus" onPress={handleDecrement} />
      <SliderBar percentage={percentage} />
      <SliderButton iconName="plus" onPress={handleIncrement} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
    gap: 16,
    alignItems: "center",
  },
  label: {
    fontFamily: "FunnelBold",
    fontSize: 14,
    width: 100,
  },
});
