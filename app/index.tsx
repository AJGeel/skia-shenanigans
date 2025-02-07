import { Screen } from "@/components/Screen";
import Text from "@/components/Text";
import { Link } from "expo-router";

const Index = () => (
  <Screen title="Home screen">
    <Text>You are on the Home Screen</Text>

    <Link href="/(skia)/sample">
      <Text>Go to the sample canvas</Text>
    </Link>
  </Screen>
);

export default Index;
