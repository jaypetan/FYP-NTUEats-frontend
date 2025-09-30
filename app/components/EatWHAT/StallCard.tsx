import React from "react";
import { View, Text, Image } from "react-native";

interface StallCardProps {
  imageSource: any; // Image source (e.g., require or URI)
  title: string; // Title of the food stall
  location: string; // Location (e.g., CAN 11)
  description: string; // Food description
  priceSymbol: string; // Price symbol (e.g., "$")
}

const StallCard: React.FC<StallCardProps> = ({
  imageSource,
  title,
  location,
  description,
  priceSymbol,
}) => {
  return (
    <View className="mt-8">
      <Image
        source={imageSource}
        resizeMode="cover"
        className="w-full h-48 rounded-2xl"
      />
      <View className="absolute bottom-0 w-full px-4 pt-2 bg-green/90 rounded-b-2xl flex-col justify-end">
        <View className="flex-row justify-between">
          <Text className="text-3xl font-koulen text-blue leading-10 -mb-[1rem]">
            {title}
          </Text>
          <Text className="text-xl font-koulen font-bold text-blue">
            {location}
          </Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-base font-inter font-semibold text-blue">
            {description}
          </Text>
          <Text className="text-2xl font-koulen text-blue">{priceSymbol}</Text>
        </View>
      </View>
    </View>
  );
};

export default StallCard;
