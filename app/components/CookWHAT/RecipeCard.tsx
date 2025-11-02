import { View, Image, Text } from "react-native";
import { useAppContext } from "../AppContext";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import TouchableScale from "@/app/components/TouchableScale";

interface RecipeCardProps {
  foodImage: any;
  foodName: string;
  chefName: string;
  duration: string;
  likes: number;
  halal?: boolean;
  vegetarian?: boolean;
  spicy?: boolean;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  foodImage,
  foodName,
  chefName,
  duration,
  likes,
  halal,
  vegetarian,
  spicy,
}) => {
  const { setCurrentPage } = useAppContext();
  const [isLiked, setIsLiked] = useState(false);

  return (
    <View className="mt-8">
      <TouchableScale
        onPress={() => setCurrentPage("recipe-page")}
        className="w-full rounded-2xl bg-green/50 flex-row items-center p-4"
      >
        <View className="relative">
          <Image
            source={foodImage}
            resizeMode="cover"
            className="w-32 h-32 rounded-2xl"
          />
          <View className="absolute bottom-2 right-2 flex-row gap-2">
            {spicy && (
              <MaterialCommunityIcons
                name="fire"
                size={16}
                color="white"
                className="p-2 rounded-full bg-red/80"
              />
            )}
            {vegetarian && (
              <FontAwesome
                name="leaf"
                size={16}
                color="white"
                className="p-2 rounded-full bg-green/80"
              />
            )}
            {halal && (
              <MaterialCommunityIcons
                name="food-halal"
                size={16}
                color="white"
                className="p-2 rounded-full bg-green/80"
              />
            )}
          </View>
        </View>

        <View className="flex-1 flex-col px-4 py-2 justify-between h-32">
          <View className="flex-row justify-between items-center">
            <View className="flex-col">
              <Text className="text-2xl font-koulen -mb-[0.5rem]">
                {foodName}
              </Text>
              <Text className="text-xl">By {chefName}</Text>
            </View>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-xl text-blue">{duration}</Text>
            <View className="flex-row items-center gap-1">
              <Text className="text-xl">{likes}</Text>
              <FontAwesome
                name={isLiked ? "heart" : "heart-o"} // Toggle between filled and empty heart
                size={20}
                color={isLiked ? "red" : "gray"} // Change color based on state
              />
            </View>
          </View>
        </View>
      </TouchableScale>
    </View>
  );
};

export default RecipeCard;
