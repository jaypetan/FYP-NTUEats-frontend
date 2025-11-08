import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useAppContext } from "../AppContext";

interface RecipeStepsProps {
  steps: string[];
}

const RecipeSteps: React.FC<RecipeStepsProps> = ({ steps }) => {
  const { returnToPreviousPage } = useAppContext();
  return (
    <ScrollView className="px-8 py-4 mb-24 min-h-[60vh] w-full bg-darkcream rounded-t-2xl">
      <Text className="text-3xl pt-2 font-koulen text-blue mt-4">
        Instructions ({steps.length} Steps):
      </Text>
      {steps.map((steps, index) => (
        <View key={index} className="flex-row items-start mb-2">
          <Text className="text-xl text-blue mr-2">Step {index + 1}:</Text>
          <Text className="text-xl text-blue flex-1">{steps}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default RecipeSteps;
