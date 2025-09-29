import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import SignInScreen from "../(auth)/sign-in";
import { Text, ScrollView, View } from "react-native";
import SignOutButton from "@/app/components/SignOutButton";
import { useState, useEffect } from "react";
import HomeScreen from "./home-screen";
import EatWhat from "./eat-what";
import CookWhat from "./cook-what";
import Animated from "react-native-reanimated";
import { SequencedTransition, ReduceMotion } from "react-native-reanimated";

export default function Page() {
  const { user } = useUser();
  const [currentPage, setCurrentPage] = useState("home-screen");

  // State to manage the order of components
  const [componentOrder, setComponentOrder] = useState([
    { id: "cook-what", component: CookWhat },
    { id: "eat-what", component: EatWhat },
    { id: "home-screen", component: HomeScreen },
  ]);

  // Ensure the currentPage is always the last item
  useEffect(() => {
    setComponentOrder((prevOrder) => {
      // Filter out the currentPage component
      const otherComponents = prevOrder.filter(
        (item) => item.id !== currentPage
      );
      // Find the currentPage component
      const currentPageComponent = prevOrder.find(
        (item) => item.id === currentPage
      );
      // Return the reordered array with currentPage as the last item
      return currentPageComponent
        ? [...otherComponents, currentPageComponent]
        : prevOrder;
    });
  }, [currentPage]);

  SequencedTransition.duration(10000)
    .delay(500)
    .reverse()
    .reduceMotion(ReduceMotion.Never);

  return (
    <View>
      {/* if signed in */}
      <SignedIn>
        <View className="bg-red h-screen relative flex flex-col pt-8">
          <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
          <SignOutButton />
          {componentOrder.map(({ id, component: Component }, index) => (
            <Animated.View
              key={id}
              className="h-14"
              layout={SequencedTransition.duration(1000)
                .delay(200)
                .reverse()
                .reduceMotion(ReduceMotion.Never)}
            >
              <Component
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                backgroundColor={index % 2 === 0 ? "darkcream" : "cream"}
                backgroundColorHex={index % 2 === 0 ? "#FFE6A7" : "#FFEFC7"}
                widthClass={
                  index === 0
                    ? "w-[14rem]"
                    : index === 1
                    ? "w-[12rem]"
                    : "w-[10rem]"
                }
              />
            </Animated.View>
          ))}
        </View>
      </SignedIn>

      {/* if signed out */}
      <SignedOut>
        <SignInScreen />
      </SignedOut>
    </View>
  );
}
