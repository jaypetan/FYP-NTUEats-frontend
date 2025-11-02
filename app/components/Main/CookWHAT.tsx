import { ScrollView, Text, View } from "react-native";
import { useAppContext } from "../AppContext";
import HomeNav from "../Home/HomeNav";
import OptimizedScrollView from "../OptimizedScrollView";
import SearchBar from "../CookWHAT/SearchBar";
import RecipeCard from "../CookWHAT/RecipeCard";
import Recipe1 from "@/assets/sample-data/cook/carbonara.jpeg";
import Recipe2 from "@/assets/sample-data/cook/friednoodles.jpeg";
import Recipe3 from "@/assets/sample-data/cook/japanesecurryrice.png";
import Recipe4 from "@/assets/sample-data/cook/mushroomrisotto.jpeg";

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
  const recipes = [
    {
      foodImage: Recipe1,
      foodName: "Creamy Carbonara",
      chefName: "Chef Luigi",
      duration: "1 hour",
      likes: 120,
    },
    {
      foodImage: Recipe2,
      foodName: "Stir-Fried Noodles",
      chefName: "Chef Mei",
      duration: "20 mins",
      likes: 95,
      halal: true,
    },
    {
      foodImage: Recipe3,
      foodName: "Japanese Curry Rice",
      chefName: "Chef Sato",
      duration: "40 mins",
      likes: 150,
      spicy: true,
    },
    {
      foodImage: Recipe4,
      foodName: "Mushroom Risotto",
      chefName: "Chef Maria",
      duration: "35 mins",
      likes: 110,
      halal: true,
      vegetarian: true,
    },
  ];

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
          <OptimizedScrollView
            className={`bg-${backgroundColor} min-h-[80vh] px-8`}
          >
            <Text className="text-4xl font-koulen pt-8 text-blue">
              What are we cooking today?
            </Text>
            <SearchBar />
            {recipes.map((recipe, index) => (
              <RecipeCard
                key={index}
                foodImage={recipe.foodImage}
                foodName={recipe.foodName}
                chefName={recipe.chefName}
                duration={recipe.duration}
                likes={recipe.likes}
                halal={recipe.halal}
                vegetarian={recipe.vegetarian}
                spicy={recipe.spicy}
              />
            ))}
            <Text className="py-24" />
          </OptimizedScrollView>
        </View>
      )}
    </View>
  );
}
