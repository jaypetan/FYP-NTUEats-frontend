import React from "react";
import { Text, View } from "react-native";
import RecipeCommentCard from "./RecipeCommentCard";

interface RecipeCommentsProps {
  comments: object[];
}

const RecipeComments: React.FC<RecipeCommentsProps> = ({ comments }) => {
  return (
    <>
      <Text className="text-3xl pt-2 font-koulen text-blue mt-4 border-b border-blue mb-4">
        Comments:
      </Text>
      <View className="px-2">
        {comments.length === 0 ? (
          <Text className="text-xl text-blue">No comments yet.</Text>
        ) : (
          comments.map((comment: any, index: number) => (
            <RecipeCommentCard key={index} comment={comment} />
          ))
        )}
      </View>
    </>
  );
};

export default RecipeComments;
