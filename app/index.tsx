import { Screen } from "@/components/Screen";
import { Text } from "react-native";
import { Link } from "expo-router";

const Index = () => (
  <Screen title="Home screen">
    <Text>You are on the Home Screen</Text>

    <Link href="/(skia)/sample">Go to the sample canvas</Link>
  </Screen>
);

export default Index;
