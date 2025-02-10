import Button from "@/components/Button";
import { ScrollableScreen } from "@/components/Screen";
import Text from "@/components/Text";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const links = [
  { title: "1. Circles and Blending Modes", href: "/(skia)/1-blending-modes" },
  { title: "2. Atlas Instances", href: "/(skia)/2-atlas" },
  { title: "3. Remote Image", href: "/(skia)/3-remote-image" },
] as const;

const Index = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollableScreen
      title="Skia Shenanigans"
      containerStyle={[styles.container, { paddingTop: insets.top + 12 }]}
    >
      <Text style={{ paddingBottom: 12 }}>
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
