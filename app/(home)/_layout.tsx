import { Stack } from "expo-router/stack";
import { AppProvider } from "../components/AppContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView>
      {/* GestureHandlerRootView is to allow for swipe gestures */}
      <AppProvider>
        {/* AppProvider is to pass useContext to child components */}
        <Stack screenOptions={{ headerShown: false }} />
      </AppProvider>
    </GestureHandlerRootView>
  );
}
