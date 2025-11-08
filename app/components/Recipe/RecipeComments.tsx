import React from "react";
import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

interface RecipeCommentsProps {
  comments: string;
}

const RecipeComments: React.FC<RecipeCommentsProps> = ({ comments }) => {
  return (
    <ScrollView className="px-8 mt-4 mb-24 h-[60vh] w-full bg-cream">
      <Text className="text-lg text-black">comments</Text>
    </ScrollView>
  );
};

export default RecipeComments;
