import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import HomeNav from "../components/Home/HomeNav";
import { useAppContext } from "../components/AppContext";

interface CookWhatProps {
  backgroundColor: string;
  backgroundColorHex: string;
  widthClass: string;
}

export default function CookWhat({
  backgroundColor,
  backgroundColorHex,
  widthClass,
}: CookWhatProps) {
  const { currentPage, setCurrentPage } = useAppContext();

  return (
    <View className="h-full w-full flex-col">
      <HomeNav
        backgroundColor={backgroundColor}
        backgroundColorHex={backgroundColorHex}
        text="CookWHAT"
        setCurrentPage={setCurrentPage}
        desiredPage="cook-what"
        widthClass={widthClass}
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
