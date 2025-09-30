import { View, Text, ScrollView, Image, TextInput } from "react-native";
import HomeNav from "../components/Home/HomeNav";
import { useAppContext } from "../components/AppContext";
import EatWHATLogo from "@/assets/images/logos/EatWHAT-logo.png";
import SearchBar from "../components/EatWHAT/SearchBar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Stall1 from "@/assets/sample-data/eat/stall-can11-sichuanmeishi.jpeg";
import Stall2 from "@/assets/sample-data/eat/stall-can9-jiuluxiang.jpeg";
import Stall3 from "@/assets/sample-data/eat/stall-can11-malayfood.jpeg";
import Stall4 from "@/assets/sample-data/eat/stall-can9-localspecialties.jpeg";
import StallCard from "../components/EatWHAT/StallCard";

interface EatWhatProps {
  backgroundColor: string;
  backgroundColorHex: string;
  widthClass: string;
}

export default function EatWhat({
  backgroundColor,
  backgroundColorHex,
  widthClass,
}: EatWhatProps) {
  const { currentPage, setCurrentPage } = useAppContext();

  // TODO: Add search bar functionality

  // TODO: Replace with actual data
  const stalls = [
    {
      imageSource: Stall1,
      title: "Si Chuan Mei Shi",
      location: "CAN 11",
      description: "sour fish soup, double cooked pork ...",
      priceSymbol: "$$",
    },
    {
      imageSource: Stall2,
      title: "Jiu Li Xiang",
      location: "CAN 9",
      description: "braised pork rice, oyster omelette ...",
      priceSymbol: "$$",
    },
    {
      imageSource: Stall3,
      title: "Malay Food",
      location: "CAN 11",
      description: "nasi lemak, mee goreng ...",
      priceSymbol: "$",
    },
    {
      imageSource: Stall4,
      title: "Local Specialties",
      location: "CAN 9",
      description: "cai fan, fried rice ...",
      priceSymbol: "$",
    },
  ];

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
        <View className={`bg-${backgroundColor} pt-8 rounded-tl-3xl`}>
          <ScrollView className={`bg-${backgroundColor} min-h-[80vh] px-8`}>
            <Text className="text-4xl font-koulen pt-8 text-blue">
              What are we eating today?
            </Text>
            <SearchBar />
            {stalls.map((stall, index) => (
              <StallCard
                key={index}
                imageSource={stall.imageSource}
                title={stall.title}
                location={stall.location}
                description={stall.description}
                priceSymbol={stall.priceSymbol}
              />
            ))}
            <Text className="py-24" />
          </ScrollView>
        </View>
      )}
    </View>
  );
}
