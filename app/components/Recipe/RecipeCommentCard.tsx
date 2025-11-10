import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface RecipeCommentCardProps {
  comment: {
    user: string;
    content: string;
    likes: number;
    content_pic: { uri: string } | number | null; // Updated type
  };
}

const RecipeCommentCard: React.FC<RecipeCommentCardProps> = ({ comment }) => {
  const [like, setLike] = useState(false);
  return (
    <View className="mb-4 border-b border-blue pb-2">
      <View className="flex-row items-center justify-between">
        <Text className="text-2xl pt-2 text-blue font-koulen">
          {comment.user}:
        </Text>
        <View>
          <View className="flex-row gap-2 items-center justify-end">
            <Text className="font-inter text-lg font-semibold text-blue">
              {comment.likes}
            </Text>
            <TouchableOpacity onPress={() => setLike(!like)}>
              {like ? (
                <FontAwesome name="heart" size={20} color="red" />
              ) : (
                <FontAwesome name="heart-o" size={20} color="black" />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text className="text-xl text-blue">{comment.content}</Text>
      <View className="flex-row py-4">
        {comment.content_pic && (
          <Image
            source={comment.content_pic}
            resizeMode="cover"
            className="h-64 w-64 rounded-[2rem]"
          />
        )}
      </View>
    </View>
  );
};

export default RecipeCommentCard;
