import review2 from "@/assets/sample-data/eat/review-can9-jiulixiang-2.jpeg";
import review1 from "@/assets/sample-data/eat/review-can9-jiulixiang.jpeg";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import StallReviewCard from "./StallReviewCard";

const StallReview = () => {
  const [numOfReviews, setNumOfReviews] = useState(3);
  const reviews = [
    {
      reviewImage: review1,
      reviewDate: "1/1/2025",
      reviewTitle: "The best food in the world",
      reviewDescription:
        "The food was delicious and full of flavor, with fresh ingredients and perfect seasoning. The service was friendly and the cozy atmosphere made the experience even better.",
      reviewName: "Jaype",
      reviewLikes: 1000,
    },
    {
      reviewImage: review2,
      reviewDate: "1/1/2025",
      reviewTitle: "Good Food",
      reviewDescription: "Yum Yum in the Tum",
      reviewName: "Ting",
      reviewLikes: 888,
    },
    {
      reviewTitle: "Highly Recommended",
      reviewDate: "1/1/2025",
      reviewDescription:
        "The food was delicious and full of flavor, with fresh ingredients and perfect seasoning. The service was friendly and the cozy atmosphere made the experience even better.”",
      reviewName: "Joe",
      reviewLikes: 30,
    },
    {
      reviewTitle: "Test Comment",
      reviewDate: "1/1/2025",
      reviewDescription: "Yum Yum in the Tum",
      reviewName: "Joe",
      reviewLikes: 30,
    },
    {
      reviewImage: review2,
      reviewTitle: "Test Comment",
      reviewDate: "1/1/2025",
      reviewDescription: "Yum Yum in the Tum",
      reviewName: "Joe",
      reviewLikes: 30,
    },
  ];
  return (
    <View className="flex-col gap-4 mt-8">
      <Text className="text-blue font-inter font-bold text-3xl w-full text-center">
        Top Reviews
      </Text>
      <View className="flex-col gap-4">
        {reviews.slice(0, numOfReviews).map((review, index) => (
          <StallReviewCard
            key={index}
            reviewImage={review.reviewImage}
            reviewDate={review.reviewDate}
            reviewTitle={review.reviewTitle}
            reviewDescription={review.reviewDescription}
            reviewName={review.reviewName}
            reviewLikes={review.reviewLikes}
          />
        ))}
      </View>
      <TouchableOpacity
        className="border-2 border-blue rounded-2xl p-4 flex-row justify-center"
        onPress={() =>
          setNumOfReviews(
            numOfReviews + 1 < reviews.length
              ? numOfReviews + 2
              : reviews.length
          )
        }
      >
        <Text className="text-blue font-inter font-bold text-lg">
          View More Reviews
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default StallReview;
