import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import HomeNav from "../components/Home/HomeNav";

interface EatWhatProps {
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  backgroundColor: string;
  backgroundColorHex: string;
  widthClass: string;
}

export default function EatWhat({
  currentPage,
  setCurrentPage,
  backgroundColor,
  backgroundColorHex,
  widthClass,
}: EatWhatProps) {
  return (
    <View className="h-full w-full flex-col">
      <HomeNav
        backgroundColor={backgroundColor}
        backgroundColorHex={backgroundColorHex}
        text="EatWHAT"
        setCurrentPage={setCurrentPage}
        desiredPage="eat-what"
        widthClass={widthClass}
      />
      {currentPage !== "eat-what" ? (
        <View
          className={`bg-${backgroundColor} min-h-[80vh] rounded-tl-3xl w-full`}
        />
      ) : (
        <ScrollView
          className={`bg-${backgroundColor} min-h-[80vh] rounded-b-3xl`}
        >
          <Text className="text-6xl">EatWHAT 1</Text>
        </ScrollView>
      )}
    </View>
  );
}
