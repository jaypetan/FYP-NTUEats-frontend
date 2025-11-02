import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useAppContext } from "../../AppContext";
import TouchableScale from "@/app/components/TouchableScale";

interface FoodCardProps {
  imageSource: any;
  foodName: string;
  halal?: boolean;
  vegetarian?: boolean;
  spicy?: boolean;
}

const FoodCard: React.FC<FoodCardProps> = ({
  imageSource,
  foodName,
  halal,
  vegetarian,
  spicy,
}) => {
  const { setCurrentPage } = useAppContext();

  return (
    <View className="mr-4 relative w-44 h-64 rounded-2xl bg-green/50">
      <TouchableScale onPress={() => setCurrentPage("recipe-page")}>
        <Image
          source={imageSource}
          className="w-full h-full rounded-2xl p-2"
          resizeMode="cover"
        />
        <View className="absolute p-4 h-full w-full flex-col justify-between">
          <View className="flex-row justify-end gap-1">
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
          <Text className="text-2xl font-ranchers tracking-wider text-white bg-red/80 px-2">
            {foodName}
          </Text>
        </View>
      </TouchableScale>
    </View>
  );
};

export default FoodCard;
