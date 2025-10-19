import { View, Text, TouchableOpacity } from "react-native";

export default function NavButton() {
  return (
    <View
      collapsable={false}
      className="bg-green/50 w-16 aspect-square rounded-full flex justify-center items-center"
    >
      <Text>Nav</Text>
    </View>
  );
}
