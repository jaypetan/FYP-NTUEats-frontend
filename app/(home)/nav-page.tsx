import { View, Text, TouchableOpacity } from "react-native";
import SignOutButton from "@/app/components/SignOutButton";
import { useAppContext } from "@/app/components/AppContext";
import ReanimatedDrawerLayout from "react-native-gesture-handler/ReanimatedDrawerLayout";

interface NavPageProps {
  closeDrawer: () => void;
}

export default function NavPage({ closeDrawer }: NavPageProps) {
  const appContext = useAppContext();

  const NavButton = (page: string, text: string) => {
    return (
      <TouchableOpacity
        onPress={() => {
          appContext.setCurrentPage(page);
          closeDrawer();
        }}
      >
        <Text className="font-koulen font-bold text-blue text-4xl pt-4">
          {text}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View className="h-full w-full flex-col px-8 gap-4 pt-24">
      <Text className="font-ranchers text-2xl text-blue mb-4">
        What are you looking for?
      </Text>

      {NavButton("home-page", "Home")}
      {NavButton("eat-what", "EatWHAT")}
      {NavButton("cook-what", "CookWHAT")}

      <SignOutButton />
    </View>
  );
}
