import "./global.css";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack screenOptions={{ title: "Lifestyle" }}>
        <Stack.Screen name="home" options={{ title: "Home" }} />
        <Stack.Screen name="auth" options={{ title: "Login" }} />
      </Stack>
    </>
  );
}
