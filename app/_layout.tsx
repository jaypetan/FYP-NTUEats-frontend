import { ClerkProvider } from '@clerk/clerk-expo';
import SafeScreen from './components/SafeScreen';
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { Slot } from 'expo-router';
import "./global.css";


export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SafeScreen>
        <Slot />
      </SafeScreen>
    </ClerkProvider>
  );
}
