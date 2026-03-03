import { Ionicons } from "@expo/vector-icons";
import { Stack, Tabs } from "expo-router";
import React from "react";
import { PaperProvider } from "react-native-paper";
export default function RootLayout() {
  return (
    <>
      <Tabs>
      <Tabs.Screen 
        name="index" 
        options={{
        title: "home",
        tabBarIcon: ({ color }) => (
      <Ionicons name="home" size={20} color={color} />
      )
      }}/>
        <Tabs.Screen name = "quadrados" options={{title:"layout"}}></Tabs.Screen>
        <Tabs.Screen name = "clickVovo" options={{title:"Click da Vovo"}}></Tabs.Screen>
        <PaperProvider>
            <Stack />
        </PaperProvider>
      </Tabs>
    </>
);
}
