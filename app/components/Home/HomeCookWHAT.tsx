import CookWHATLogo from "@/assets/images/logos/CookWHAT-logo.png";
import Recipe1 from "@/assets/sample-data/cook/carbonara.jpeg";
import Recipe3 from "@/assets/sample-data/cook/friednoodles.jpeg";
import Recipe4 from "@/assets/sample-data/cook/japanesecurryrice.png";
import Recipe2 from "@/assets/sample-data/cook/mushroomrisotto.jpeg";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import Animated, { FadeOut } from "react-native-reanimated";
import { useAppContext } from "../AppContext";
import FoodCard from "./HomeCookWHAT/FoodCard";
import VerticalWordButton from "./SharedComponents/VerticalWordButton";

const HomeEatWHAT = () => {
  const { setCurrentPage } = useAppContext();
  const [swiped, setSwiped] = useState(false); // To remove instructions after swipe

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
        onScroll={() => setSwiped(true)}
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
};

export default HomeEatWHAT;
