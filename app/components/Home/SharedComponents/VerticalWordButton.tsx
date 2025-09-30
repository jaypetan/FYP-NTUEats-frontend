import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface VerticalWordButtonProps {
  text: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  desiredPage: string;
}
const VerticalWordButton: React.FC<VerticalWordButtonProps> = ({
  text,
  setCurrentPage,
  desiredPage,
}) => {
  return (
    <TouchableOpacity
      onPress={() => setCurrentPage(desiredPage)}
      className="bg-green/50 px-4 py-2 rounded-2xl flex-col justify-center"
    >
      {text.split("").map((char, index) => (
        <Text
          key={index}
          className="font-inter font-bold text-blue text-lg leading-[16px] text-center"
        >
          {char.toUpperCase()}
        </Text>
      ))}
    </TouchableOpacity>
  );
};

export default VerticalWordButton;
