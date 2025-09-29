import { View, Text, Image } from "react-native";
import EatWHATLogo from "@/assets/images/logos/EatWHAT-logo.png";

export default function HomeEatWHAT() {
  return (
    <View className="mt-8">
      <View className="flex-row items-end gap-4">
        <Text className="text-4xl font-ranchers text-blue">What To Eat?</Text>
        <Image
          source={EatWHATLogo}
          className="w-48 h-40"
          resizeMode="contain"
        />
      </View>
    </View>
  );
}
