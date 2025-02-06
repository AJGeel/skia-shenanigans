import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Link href="/modal">Open modal</Link>
    </View>
  );
}
