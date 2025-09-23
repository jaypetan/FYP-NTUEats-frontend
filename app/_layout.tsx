import { ClerkProvider } from "@clerk/clerk-expo";
import SafeScreen from "./components/SafeScreen";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { Slot } from "expo-router";
import "./global.css";

import { useFonts } from "expo-font";
import { ActivityIndicator, View } from "react-native";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Inter-Italic": require("../assets/fonts/Inter/Inter-Italic-VariableFont_opsz,wght.ttf"),
    "Inter": require("../assets/fonts/Inter/Inter-VariableFont_opsz,wght.ttf"),
    "Koulen-Regular": require("../assets/fonts/Koulen/Koulen-Regular.ttf"),
    "Ranchers-Regular": require("../assets/fonts/Ranchers/Ranchers-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SafeScreen>
        <Slot />
      </SafeScreen>
    </ClerkProvider>
  );
}
