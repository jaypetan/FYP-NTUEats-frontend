import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import HomeNav from "../components/Home/HomeNav";
import HomeProfile from "../components/Home/HomeProfile";
import HomeEatWHAT from "../components/Home/HomeEatWHAT";
import HomeCookWHAT from "../components/Home/HomeCookWHAT";
import { useAppContext } from "../components/AppContext";

interface HomeScreenProps {
  backgroundColor: string;
  backgroundColorHex: string;
  widthClass: string;
}

export default function HomeScreen({
  backgroundColor,
  backgroundColorHex,
  widthClass,
}: HomeScreenProps) {
  const { currentPage, setCurrentPage } = useAppContext();

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
        <View className={`bg-${backgroundColor} pt-8 rounded-tl-3xl`}>
          <ScrollView className={`bg-${backgroundColor} min-h-[80vh] px-8`}>
            <HomeProfile />
            <HomeEatWHAT />
            <HomeCookWHAT />
            <Text className="py-24" />
          </ScrollView>
        </View>
      )}
    </View>
  );
}
