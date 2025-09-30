import { Stack } from "expo-router/stack";
import { AppProvider } from "../components/AppContext";

export default function Layout() {
  return (
    <AppProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </AppProvider>
  );
}
