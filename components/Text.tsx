import {
  Text as DefaultText,
  StyleProp,
  StyleSheet,
  TextStyle,
} from "react-native";

type TextProps = {
  children: string;
  style?: StyleProp<TextStyle>;
};

const Text = ({ children, style }: TextProps) => (
  <DefaultText style={[styles.text, style]}>{children}</DefaultText>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: "Funnel",
  },
});

export default Text;
