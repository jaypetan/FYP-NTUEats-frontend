// External libraries
import { useState, useEffect } from "react";
import { View } from "react-native";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";

// App Context
import { useAppContext } from "../components/AppContext";

// Internal Components
import SignInScreen from "../(auth)/sign-in";
import MainPage from "./main-page";
import StallPage from "./stall-page";

// Navigation Component
import NavButton from "@/app/components/NavButton";
import NavPage from "./nav-page";
import { useRef } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import ReanimatedDrawerLayout, {
  DrawerType,
  DrawerPosition,
  DrawerLayoutMethods,
} from "react-native-gesture-handler/ReanimatedDrawerLayout";

export default function Page() {
  const { user } = useUser();
  const { currentPage } = useAppContext();
  const [content, setContent] = useState(<MainPage />);

  const drawerRef = useRef<DrawerLayoutMethods>(null);
  const tapGesture = Gesture.Tap()
    .runOnJS(true)
    .onStart(() => {
      drawerRef.current?.openDrawer();
    });

  const closeDrawer = () => drawerRef.current?.closeDrawer();

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
          <ReanimatedDrawerLayout
            ref={drawerRef}
            renderNavigationView={() => <NavPage closeDrawer={closeDrawer} />}
            drawerPosition={DrawerPosition.LEFT}
            drawerType={DrawerType.SLIDE}
            overlayColor="rgba(0, 0, 0, 0)"
            drawerWidth={300}
          >
            <GestureDetector gesture={tapGesture}>
              <NavButton />
            </GestureDetector>
            {content}
          </ReanimatedDrawerLayout>
        </View>
      </SignedIn>

      {/* if signed out */}
      <SignedOut>
        <SignInScreen />
      </SignedOut>
    </View>
  );
}
