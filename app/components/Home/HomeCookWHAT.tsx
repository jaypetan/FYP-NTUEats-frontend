import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import CookWHATLogo from "@/assets/images/logos/CookWHAT-logo.png";
import FoodCard from "./HomeCookWHAT/FoodCard";
import VerticalWordButton from "./SharedComponents/VerticalWordButton";
import { useAppContext } from "../AppContext";
import Recipe1 from "@/assets/sample-data/cook/carbonara.jpeg";
import Recipe2 from "@/assets/sample-data/cook/mushroomrisotto.jpeg";
import Recipe3 from "@/assets/sample-data/cook/friednoodles.jpeg";
import Recipe4 from "@/assets/sample-data/cook/japanesecurryrice.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function HomeEatWHAT() {
  const { setCurrentPage } = useAppContext();

  // TODO: Sample data to adjsut with proper algorithm next time
  const foodCards = [
    {
      id: 1,
      imageSource: Recipe1,
      foodName: "Carbonara",
    },
    {
      id: 2,
      imageSource: Recipe2,
      foodName: "Mushroom Risotto",
      halal: true,
      vegetarian: true,
    },
    {
      id: 3,
      imageSource: Recipe3,
      foodName: "Fried Noodles",
      halal: true,
    },
    {
      id: 4,
      imageSource: Recipe4,
      foodName: "Japanese Curry Rice",
      spicy: true,
    },
  ];
  return (
    <View className="mt-2">
      <View className="flex-row items-end gap-2">
        <Image
          source={CookWHATLogo}
          className="w-40 h-40"
          resizeMode="contain"
        />
        <Text className="text-4xl font-ranchers text-blue">
          I Want To Cook!
        </Text>
      </View>
      <ScrollView
        className="w-full mt-4"
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        {foodCards.map((card) => (
          <FoodCard
            key={card.id}
            imageSource={card.imageSource}
            foodName={card.foodName}
            halal={card.halal}
            vegetarian={card.vegetarian}
            spicy={card.spicy}
          />
        ))}
        <VerticalWordButton
          text="More Options"
          setCurrentPage={setCurrentPage}
          desiredPage={"cook-what"}
        />
      </ScrollView>
      <View className="self-end mt-2 flex-row gap-2">
        <Text className="font-inter text-blue text-sm">
          Swipe for more options
        </Text>
        <MaterialCommunityIcons
          name="gesture-swipe-right"
          size={24}
          color={"gray"}
        />
      </View>
    </View>
  );
}
