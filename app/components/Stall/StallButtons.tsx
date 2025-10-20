import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { useAppContext } from "../AppContext";

const StallButtons = () => {
  const { returnToPreviousPage } = useAppContext();
  return (
    <View className="flex-col justify-between w-full gap-4">
      <View>
        <TouchableOpacity
          className="flex-row items-center border-2 border-red px-2 rounded-lg gap-1 self-start"
          onPress={() => returnToPreviousPage()}
        >
          <MaterialIcons name="arrow-back" size={16} color="#323232" />
          <Text className="text-lg font-koulen pt-1 text-blue">Return</Text>
        </TouchableOpacity>
      </View>
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
