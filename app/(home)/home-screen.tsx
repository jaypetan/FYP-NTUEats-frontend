import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import HomeNav from "../components/Home/HomeNav";
import HomeProfile from "../components/Home/HomeProfile";
import HomeEatWHAT from "../components/Home/HomeEatWHAT";
import HomeCookWHAT from "../components/Home/HomeCookWHAT";

interface HomeScreenProps {
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  backgroundColor: string;
  backgroundColorHex: string;
  widthClass: string;
}

export default function HomeScreen({
  currentPage,
  setCurrentPage,
  backgroundColor,
  backgroundColorHex,
  widthClass,
}: HomeScreenProps) {
  return (
    <View className="h-full w-full flex-col">
      <HomeNav
        backgroundColor={backgroundColor}
        backgroundColorHex={backgroundColorHex}
        text="Home"
        setCurrentPage={setCurrentPage}
        desiredPage="home-screen"
        widthClass={widthClass}
      />
      {currentPage !== "home-screen" ? (
        <View
          className={`bg-${backgroundColor} min-h-[80vh] rounded-tl-3xl w-full`}
        />
      ) : (
        <ScrollView
          className={`bg-${backgroundColor} min-h-[80vh] rounded-b-3xl p-8`}
        >
          <HomeProfile />
          <HomeEatWHAT />
          <HomeCookWHAT />
          <Text className="p-16" />
        </ScrollView>
      )}
    </View>
  );
}
