import { ScrollView, Text, View } from "react-native";
import StallButtons from "../components/Stall/StallButtons";
import StallHeader from "../components/Stall/StallHeader";
import StallReviews from "../components/Stall/StallReviews";

import jiulixiang from "@/assets/sample-data/eat/stall-can9-jiulixiang.jpeg";

export default function StallPage() {
  return (
    <View>
      <StallHeader
        stallImage={jiulixiang}
        stallName="Jiu Li Xiang"
        stallLocation="Can 9"
      />
      <View className="h-[55vh] w-full bg-cream pt-4 px-8">
        <ScrollView showsVerticalScrollIndicator={false}>
          <StallButtons />
          <StallReviews />
          <Text className="py-8" />
        </ScrollView>
      </View>
    </View>
  );
}
