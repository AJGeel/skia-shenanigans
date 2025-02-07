import { Screen } from "@/components/Screen";
import Text from "@/components/Text";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

const Index = () => (
  <Screen title="Home screen" containerStyle={styles.container}>
    <Text style={styles.header}>Skia Shenanigans</Text>

    <Link href="/(skia)/hello-world">
      <Text style={{ textDecorationLine: "underline" }}>1.: Hello World</Text>
    </Link>
  </Screen>
);

const styles = StyleSheet.create({
  container: {
    gap: 10,
    padding: 24,
  },
  header: { fontSize: 24, fontFamily: "FunnelBold" },
});

export default Index;
