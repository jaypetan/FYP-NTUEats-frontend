import { ScrollView, Text, View } from "react-native";
import { useAppContext } from "../AppContext";
import HomeNav from "../Home/HomeNav";

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
        <View className={`bg-${backgroundColor} pt-8 rounded-tl-3xl`}>
          <ScrollView className={`bg-${backgroundColor} min-h-[80vh] px-8`}>
            <Text className="text-6xl">CookWHAT 1</Text>
          </ScrollView>
        </View>
      )}
    </View>
  );
}
