// InputField.tsx
import React from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";

interface InputFieldProps extends TextInputProps {
  label: string; // Label for the input field
  value: string; // Current value of the input
  onChangeText: (text: string) => void; // Callback for text changes
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  ...rest
}) => {
  return (
    <View>
      <Text className="mb-1 text-blue text-xl text-left font-bold">
        {label}
      </Text>
      <TextInput
        className="text-blue text-lg font-semibold border-2 border-blue leading-5 p-3 rounded-full"
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="gray"
        {...rest} // Spread additional props
      />
    </View>
  );
};

export default InputField;
