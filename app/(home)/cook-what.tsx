import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import HomeNav from "../components/HomeNav";

interface CookWhatProps {
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  backgroundColor: string;
  backgroundColorHex: string;
}

export default function CookWhat({
  currentPage,
  setCurrentPage,
  backgroundColor,
  backgroundColorHex,
}: CookWhatProps) {
  return (
    <View className="h-full w-full flex flex-col">
      <HomeNav
        backgroundColor={backgroundColor}
        backgroundColorHex={backgroundColorHex}
        text="CookWHAT"
        setCurrentPage={setCurrentPage}
        desiredPage="cook-what"
      />
      {currentPage !== "cook-what" ? (
        <View
          className={`bg-${backgroundColor} min-h-[80vh] rounded-tl-3xl w-full`}
        />
      ) : (
        <ScrollView
          className={`bg-${backgroundColor} min-h-[80vh] rounded-b-3xl`}
        >
          <Text className="text-6xl">CookWHAT 1</Text>
        </ScrollView>
      )}
    </View>
  );
}
