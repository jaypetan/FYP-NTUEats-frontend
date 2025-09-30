import React from "react";
import { View, Text, Image } from "react-native";

interface FoodCardProps {
  imageSource: any;
  foodName: string;
  canteenName: string;
}

const FoodCard: React.FC<FoodCardProps> = ({
  imageSource,
  foodName,
  canteenName,
}) => {
  return (
    <View className="mr-4 relative w-44 h-64 rounded-2xl overflow-hidden p-2 bg-green/50">
      <Image
        source={imageSource}
        className="w-full h-full rounded-2xl"
        resizeMode="cover"
      />
      <View className="absolute h-full w-full  p-4 flex-col justify-end ">
        <Text className="text-2xl font-ranchers tracking-wider text-white bg-red/80 px-2">
          {foodName}
        </Text>
        <Text className="text-xl font-ranchers text-white bg-black/50">
          @ {canteenName}
        </Text>
      </View>
    </View>
  );
};

export default FoodCard;
