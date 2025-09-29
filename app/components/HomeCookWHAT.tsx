import { View, Text, Image } from "react-native";
import CookWHATLogo from "@/assets/images/logos/CookWHAT-logo.png";

export default function HomeEatWHAT() {
  return (
    <View className="mt-8">
      <View className="flex-row items-end gap-2">
        <Image
          source={CookWHATLogo}
          className="w-40 h-40"
          resizeMode="contain"
        />
        <Text className="text-4xl font-ranchers text-blue">
          I Want To Cook!
        </Text>
      </View>
    </View>
  );
}
