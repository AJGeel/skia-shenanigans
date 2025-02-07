import { Link } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { Screen } from "@/components/Screen";

const NotFoundScreen = () => {
  return (
    <Screen title="Oops!" containerStyle={styles.container}>
      <Text style={styles.title}>This screen doesn't exist.</Text>

      <Link href="/" style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </Link>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});

export default NotFoundScreen;
