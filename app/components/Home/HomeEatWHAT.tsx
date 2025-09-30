import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import EatWHATLogo from "@/assets/images/logos/EatWHAT-logo.png";
import Review1 from "@/assets/sample-data/eat/review-can11-malayfood-3.jpeg";
import Review2 from "@/assets/sample-data/eat/review-can9-jiulixiang.jpeg";
import Review3 from "@/assets/sample-data/eat/review-can11-sichuanmeishi.jpeg";
import Review4 from "@/assets/sample-data/eat/review-can11-japanese-2.jpeg";
import FoodCard from "./HomeEatWHAT/FoodCard";
import VerticalWordButton from "./SharedComponents/VerticalWordButton";
import { useAppContext } from "../AppContext";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import Animated, { FadeOut } from "react-native-reanimated";

export default function HomeEatWHAT() {
  const { setCurrentPage } = useAppContext();
  const [swiped, setSwiped] = useState(false); // To remove instructions after swipe

  // TODO: Sample data to adjsut with proper algorithm next time
  const foodCards = [
    {
      id: 1,
      imageSource: Review1,
      foodName: "Malay Food",
      canteenName: "Can 11",
    },
    {
      id: 2,
      imageSource: Review2,
      foodName: "Jiu Li Xiang",
      canteenName: "Can 9",
    },
    {
      id: 3,
      imageSource: Review3,
      foodName: "Sichuan Meishi",
      canteenName: "Can 11",
    },
    {
      id: 4,
      imageSource: Review4,
      foodName: "Japanese Food",
      canteenName: "Can 11",
    },
  ];

  return (
    <View className="mt-8">
      <View className="flex-row items-end gap-4">
        <Text className="text-4xl font-ranchers text-blue">What To Eat?</Text>
        <Image
          source={EatWHATLogo}
          className="w-48 h-40"
          resizeMode="contain"
        />
      </View>
      <ScrollView
        className="w-full mt-4"
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        onScroll={() => setSwiped(true)}
      >
        {foodCards.map((card) => (
          <FoodCard
            key={card.id}
            imageSource={card.imageSource}
            foodName={card.foodName}
            canteenName={card.canteenName}
          />
        ))}
        <VerticalWordButton
          text="More Options"
          setCurrentPage={setCurrentPage}
          desiredPage={"eat-what"}
        />
      </ScrollView>
      {!swiped && (
        <Animated.View
          className="absolute -bottom-8 right-0 flex-row items-center"
          exiting={FadeOut.duration(1000)}
        >
          <Text className="font-inter text-blue text-sm">
            Swipe for more options
          </Text>
          <MaterialCommunityIcons
            name="gesture-swipe-right"
            size={24}
            color={"gray"}
          />
        </Animated.View>
      )}
    </View>
  );
}
