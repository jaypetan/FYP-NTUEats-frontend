import NavigationLogo from "@/assets/images/logos/Navigation-logo.png";
import { Image, View } from "react-native";
const NavImage = () => {
  return (
    <View className="aspect-square rounded-full self-start  bg-blue/80 pt-6 px-4 overflow-hidden">
      <Image
        source={NavigationLogo}
        className="h-28 aspect-square"
        resizeMode="contain"
      />
    </View>
  );
};

export default NavImage;
