import Button from "@/components/Button";
import { ScrollableScreen } from "@/components/Screen";
import Text from "@/components/Text";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const links = [
  { title: "1. Canvas with Blending Modes", href: "/(skia)/hello-world" },
] as const;

const Index = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollableScreen
      title="Skia Shenanigans"
      containerStyle={[styles.container, { paddingTop: insets.top + 12 }]}
    >
      <Text>
        This is a React Native app to explore the Skia Graphics Library. In
        here, you'll find a collection of experiments and prototypes.
      </Text>

      {links.map(({ title, href }) => (
        <Link key={href} href={href} asChild>
          <Button title={title} />
        </Link>
      ))}
    </ScrollableScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 24,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  header: { fontSize: 24, fontFamily: "FunnelBold" },
});

export default Index;
