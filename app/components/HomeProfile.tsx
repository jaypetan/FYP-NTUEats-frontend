import { View, Text, Image, TouchableOpacity } from "react-native";
import ProfileLogo from "@/assets/images/logos/Profile-logo.png";
export default function HomeProfile() {
  return (
    <View className="flex-row h-64 rounded-2xl p-4 bg-green mt-8">
      <Image
        source={ProfileLogo}
        className="w-32 h-full p-4 rounded-2xl bg-gray-200"
        resizeMode="contain"
      />
      <View className="flex-col pb-2 p-4 h-full justify-between">
        <Text className="font-koulen text-blue text-3xl leading-10">
          Hello, User!
        </Text>
        <View className="flex-col gap-2">
          <Text className="font-inter text-center text-blue text-base border-2 border-blue rounded-xl px-2 w-52">
            Notifications...
          </Text>
          <Text className="font-inter text-center text-blue text-base border-2 border-blue rounded-xl px-2 w-52">
            Notifications...
          </Text>
          <Text className="font-inter text-center text-blue text-base border-2 border-blue rounded-xl px-2 w-52">
            Notifications...
          </Text>
        </View>
        <TouchableOpacity className="self-end mt-4">
          <Text className="font-inter text-blue text-lg">
            Go To Profile &gt;
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
