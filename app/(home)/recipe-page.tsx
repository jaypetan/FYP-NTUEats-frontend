import carbonaraImage from "@/assets/sample-data/cook/carbonara.jpeg";
import { useState } from "react";
import { View } from "react-native";
import RecipeAbout from "../components/Recipe/RecipeAbout";
import RecipeComments from "../components/Recipe/RecipeComments";
import RecipeHeader from "../components/Recipe/RecipeHeader";
import RecipeSteps from "../components/Recipe/RecipeSteps";

export default function RecipePage() {
  const [page, setPage] = useState("about");
  const sampleData = {
    desc: "Classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    ingredients: [
      "200g spaghetti",
      "100g pancetta",
      "2 large eggs",
      "50g pecorino cheese",
      "50g parmesan cheese",
      "Freshly ground black pepper",
      "Salt",
    ],
    steps: [
      "Cook spaghetti in salted boiling water until al dente.",
      "Fry pancetta until crispy.",
      "Beat eggs and mix with grated cheeses.",
      "Drain pasta and combine with pancetta.",
      "Remove from heat and stir in egg and cheese mixture.",
      "Serve immediately with extra cheese and pepper.",
    ],
  };
  return (
    <View className="mt-4 flex-col">
      <RecipeHeader
        recipeImage={carbonaraImage}
        recipeName="carbonara"
        page={page}
        setPage={setPage}
      />
      {page === "about" ? (
        <RecipeAbout
          desc={sampleData.desc}
          ingredients={sampleData.ingredients}
        />
      ) : page === "steps" ? (
        <RecipeSteps steps={sampleData.steps} />
      ) : page === "comments" ? (
        <RecipeComments comments="carbonara" />
      ) : null}
    </View>
  );
}
