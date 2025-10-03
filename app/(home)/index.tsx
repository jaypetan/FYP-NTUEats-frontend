// External libraries
import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";

// App Context
import { useAppContext } from "../components/AppContext";

// Internal components
import SignInScreen from "../(auth)/sign-in";
import SignOutButton from "@/app/components/SignOutButton";
import MainPage from "./main-page";
import StallPage from "./stall-page";

export default function Page() {
  const { user } = useUser();
  const { currentPage } = useAppContext();
  const [content, setContent] = useState(<MainPage />);

  useEffect(() => {
    switch (currentPage) {
      case "stall-page":
        setContent(<StallPage />);
        break;
      case "home-page":
        setContent(<MainPage />);
        break;
      default:
        // home-page, eat-what, and cook-what will set to default
        setContent(<MainPage />);
    }
  }, [currentPage]);

  return (
    <View>
      {/* if signed in */}
      <SignedIn>
        <View className="bg-red h-screen realtive pt-8">
          <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
          <SignOutButton />
          {content}
        </View>
      </SignedIn>

      {/* if signed out */}
      <SignedOut>
        <SignInScreen />
      </SignedOut>
    </View>
  );
}
