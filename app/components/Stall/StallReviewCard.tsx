import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface StallReviewCardProps {
  reviewImage?: any;
  reviewTitle: string;
  reviewDescription: string;
  reviewName: string;
  reviewLikes: number;
}
const StallReviewCard = ({
  reviewImage,
  reviewTitle,
  reviewDescription,
  reviewName,
  reviewLikes,
}: StallReviewCardProps) => {
  return (
    <View
      className={`bg-green/50 rounded-xl p-4 flex-row gap-4
      }`}
    >
      {reviewImage && (
        <Image
          source={reviewImage}
          resizeMode="cover"
          className="w-28 rounded-2xl h-48"
        />
      )}
      <View
        className={`flex-col ${
          reviewImage ? "w-60" : " w-full"
        } justify-between gap-4`}
      >
        <View>
          <Text className="text-blue font-inter font-bold text-lg">
            {reviewTitle}
          </Text>
          <Text
            className="text-blue font-inter text-sm"
            numberOfLines={reviewImage ? 4 : 3}
          >
            "{reviewDescription}""
          </Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="font-inter text-lg font-semibold text-blue">
            {reviewName}
          </Text>
          <View className="flex-row gap-2 items-center">
            <Text className="font-inter text-lg font-semibold text-blue">
              {reviewLikes}
            </Text>
            <TouchableOpacity>
              <FontAwesome name="heart-o" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StallReviewCard;
