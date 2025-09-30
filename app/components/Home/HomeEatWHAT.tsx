import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import EatWHATLogo from "@/assets/images/logos/EatWHAT-logo.png";
import Review1 from "@/assets/sample-data/review-can11-malayfood-3.jpeg";
import Review2 from "@/assets/sample-data/review-can9-jiulixiang.jpeg";
import Review3 from "@/assets/sample-data/review-can11-sichuanmeishi.jpeg";
import Review4 from "@/assets/sample-data/review-can11-japanese-2.jpeg";
import FoodCard from "./HomeEatWHAT/FoodCard";
import VerticalWordButton from "./HomeEatWHAT/VerticalWordButton";

export default function HomeEatWHAT() {
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
        showsHorizontalScrollIndicator={true}
        horizontal={true}
      >
        {foodCards.map((card) => (
          <FoodCard
            key={card.id}
            imageSource={card.imageSource}
            foodName={card.foodName}
            canteenName={card.canteenName}
          />
        ))}
        <VerticalWordButton text="More Options" />
      </ScrollView>
      <Text className="self-end mt-2 font-inter text-blue text-lg">
        Swipe for more options &gt;
      </Text>
    </View>
  );
}
