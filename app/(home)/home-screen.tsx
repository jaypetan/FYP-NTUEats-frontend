import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import HomeNav from "../components/HomeNav";

interface HomeScreenProps {
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  backgroundColor: string;
  backgroundColorHex: string;
}

export default function HomeScreen({
  currentPage,
  setCurrentPage,
  backgroundColor,
  backgroundColorHex,
}: HomeScreenProps) {
  return (
    <View className="h-full w-full flex flex-col">
      <HomeNav
        backgroundColor={backgroundColor}
        backgroundColorHex={backgroundColorHex}
        text="Home"
        setCurrentPage={setCurrentPage}
        desiredPage="home-screen"
      />
      {currentPage !== "home-screen" ? (
        <View
          className={`bg-${backgroundColor} min-h-[80vh] rounded-tl-3xl w-full`}
        />
      ) : (
        <ScrollView
          className={`bg-${backgroundColor} min-h-[80vh] rounded-b-3xl`}
        >
          <Text className="text-6xl">Home Screen 1</Text>
        </ScrollView>
      )}
    </View>
  );
}
