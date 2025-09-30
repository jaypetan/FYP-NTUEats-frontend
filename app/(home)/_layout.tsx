import { Stack } from "expo-router/stack";
import { AppProvider } from "../components/AppContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <AppProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </AppProvider>
    </GestureHandlerRootView>
  );
}
