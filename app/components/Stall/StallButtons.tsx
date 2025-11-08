import { FontAwesome } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

const StallButtons = () => {
  return (
    <View className="flex-col justify-between w-full gap-4">
      <View className="flex-row justify-between">
        <View className="flex-row gap-4">
          <TouchableOpacity className="flex-row items-center bg-red/80 px-8 py-2 rounded-lg">
            <Text className="text-2xl font-koulen pt-3 text-black">Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center bg-red/80 px-4 rounded-lg">
            <FontAwesome name="image" size={24} color="#323232" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="flex-row items-center bg-green/50 px-8 py-2 rounded-lg">
          <Text className="text-2xl font-koulen pt-3 text-black">
            Add Review
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StallButtons;
