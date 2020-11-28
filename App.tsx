import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Colors from "./constants/Colors";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: Colors[colorScheme].safeArea }}
      >
        <Navigation colorScheme={colorScheme} />
        <StatusBar style="light" />
      </SafeAreaView>
    );
  }
}
