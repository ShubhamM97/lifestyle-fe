import { Button, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Open up index.tsx to start working on your app!</Text>
      <Button
        title="Go to Login Page"
        onPress={() => router.push("/auth/login")}
      />
    </View>
  );
}
