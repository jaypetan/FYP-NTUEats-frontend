// External libraries
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { useEffect, useState } from "react";
import { View } from "react-native";

// App Context
import { useAppContext } from "../components/AppContext";

// Internal Components
import SignInScreen from "../(auth)/sign-in";
import MainPage from "./main-page";
import StallPage from "./stall-page";

// Navigation Component
import NavButton from "@/app/components/NavButton";
import { useRef } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import ReanimatedDrawerLayout, {
  DrawerLayoutMethods,
  DrawerPosition,
  DrawerType,
} from "react-native-gesture-handler/ReanimatedDrawerLayout";
import NavPage from "./nav-page";

import Animated, { SlideInDown, SlideOutRight } from "react-native-reanimated";

export default function Page() {
  const { user } = useUser();
  const { currentPage } = useAppContext();
  const [content, setContent] = useState(<MainPage />);
  const [page, setPage] = useState(1);

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
        setPage(2);
        break;
      case "home-page":
        setContent(<MainPage />);
        setPage(1);
        break;
      default:
        // home-page, eat-what, and cook-what will set to default
        setContent(<MainPage />);
        setPage(1);
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
            <Animated.View
              key={page}
              entering={SlideInDown.duration(500)}
              exiting={SlideOutRight.duration(500)}
            >
              {content}
            </Animated.View>
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
