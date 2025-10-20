import { useAppContext } from "@/app/components/AppContext";
import SignOutButton from "@/app/components/SignOutButton";
import { Text, TouchableOpacity, View } from "react-native";
import NavImage from "../components/Nav/NavImage";

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
    <View className="h-full w-full flex-col px-8 gap-2 pt-24">
      <NavImage />
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
