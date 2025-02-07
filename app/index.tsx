import Button from "@/components/Button";
import { Screen } from "@/components/Screen";
import Text from "@/components/Text";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

const Index = () => {
  const links = [
    { title: "1. Canvas with Blending Modes", href: "/(skia)/hello-world" },
  ] as const;

  return (
    <Screen title="Skia Shenanigans" containerStyle={styles.container}>
      <Text>
        This is a React Native app to explore the Skia Graphics Library. In
        here, you'll find a collection of experiments and prototypes.
      </Text>

      {links.map(({ title, href }) => (
        <Link key={href} href={href} asChild>
          <Button title={title} />
        </Link>
      ))}
    </Screen>
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
