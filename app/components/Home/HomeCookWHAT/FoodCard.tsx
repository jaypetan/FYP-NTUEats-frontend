import React from "react";
import { View, Text, Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

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
  return (
    <View className="mr-4 relative w-44 h-64 rounded-2xl bg-green/50">
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
    </View>
  );
};

export default FoodCard;
