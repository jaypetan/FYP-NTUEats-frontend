import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

export default function HomeProfile() {
  return (
    <View className="flex-row h-64 rounded-2xl p-4 bg-green/50 mt-8">
      <View className="flex-col pb-2 p-4 h-full w-full justify-between">
        <Text
          className="font-koulen font-bold text-blue text-3xl leading-10"
          style={{ includeFontPadding: false }}
        >
          Hello, Jun Peng!
        </Text>
        <Text className="font-inter text-blue text-lg">Notifications:</Text>
        <ScrollView className="rounded-xl p-2  bg-cream">
          <Text
            className="bg-red/50 font-inter text-center text-blue text-base border-2 border-blue rounded-xl px-2 w-full mb-2"
            numberOfLines={1}
          >
            2 new likes on your review!
          </Text>
          <Text
            className="bg-red/50 font-inter text-center text-blue text-base border-2 border-blue rounded-xl px-2 w-full mb-2"
            numberOfLines={1}
          >
            1 new likes on Carbona recipe!
          </Text>
          <Text
            className="bg-red/50 font-inter text-center text-blue text-base border-2 border-blue rounded-xl px-2 w-full mb-2"
            numberOfLines={1}
          >
            1 new comment on Japanese Curry Rice recipe!
          </Text>
          <Text
            className="bg-red/50 font-inter text-center text-blue text-base border-2 border-blue rounded-xl px-2 w-full mb-2"
            numberOfLines={1}
          >
            2 new likes on your review!
          </Text>
        </ScrollView>
        <TouchableOpacity className="self-end mt-4">
          <Text className="font-inter text-blue text-lg">
            Go To Profile &gt;
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
