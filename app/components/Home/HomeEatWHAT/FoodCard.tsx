import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useAppContext } from "../../AppContext";
import TouchableScale from "@/app/components/TouchableScale";

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
  const { setCurrentPage } = useAppContext();

  return (
    <View className="mr-4 relative w-44 h-64 rounded-2xl overflow-hidden bg-green/50">
      <TouchableScale onPress={() => setCurrentPage("stall-page")}>
        <Image
          source={imageSource}
          className="w-full h-full rounded-2xl p-2"
          resizeMode="cover"
        />
        <View className="absolute h-full w-full  py-6 px-4 flex-col justify-end">
          <Text className="text-2xl font-ranchers tracking-wider text-white bg-red/80 px-2">
            {foodName}
          </Text>
          <Text className="text-xl font-ranchers text-white bg-black/50">
            @ {canteenName}
          </Text>
        </View>
      </TouchableScale>
    </View>
  );
};

export default FoodCard;
