import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Root() {
  return (
    <View className="flex items-center justify-start h-full p-safe">
      <Text>Open up index.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
