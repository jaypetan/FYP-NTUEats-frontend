import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import CookWHATLogo from "@/assets/images/logos/CookWHAT-logo.png";
import FoodCard from "./HomeCookWHAT/FoodCard";
import VerticalWordButton from "./SharedComponents/VerticalWordButton";
import { useAppContext } from "../AppContext";
import Recipe1 from "@/assets/sample-data/cook/carbonara.jpeg";
import Recipe2 from "@/assets/sample-data/cook/mushroomrisotto.jpeg";
import Recipe3 from "@/assets/sample-data/cook/friednoodles.jpeg";
import Recipe4 from "@/assets/sample-data/cook/japanesecurryrice.png";

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
    },
    {
      id: 3,
      imageSource: Recipe3,
      foodName: "Fried Noodles",
    },
    {
      id: 4,
      imageSource: Recipe4,
      foodName: "Japanese Curry Rice",
    },
  ];
  return (
    <View className="mt-8">
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
          />
        ))}
        <VerticalWordButton
          text="More Options"
          setCurrentPage={setCurrentPage}
          desiredPage={"eat-what"}
        />
      </ScrollView>
      <Text className="self-end mt-2 font-inter text-blue text-lg">
        Swipe for more options &gt;
      </Text>
    </View>
  );
}
