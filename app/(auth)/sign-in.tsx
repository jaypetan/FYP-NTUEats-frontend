import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import NTUEatsLogo from "@/assets/images/NTUeats-logo.png";

export default function SignInScreen() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  // Handle the submission of the sign-in form
  const onSignInPress = async () => {
    if (!isLoaded) return;

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        // If the status isn't complete, check why. User might need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <View className="flex flex-col items-center justify-center gap-4 px-8 h-full bg-cream text-blue">
      <Image source={NTUEatsLogo} className="h-96" resizeMode="contain"/>
      <View className="w-72">
        <Text className="text-left text-xl font-bold text-blue">Email</Text>
        <TextInput
          className="bg-green rounded-full px-4 py-2 text-md"
          autoCapitalize="none"
          value={emailAddress}
          placeholder="example@email.com"
          onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
        />
      </View>
      <View className="w-72">
        <Text className="text-left text-xl font-bold text-blue">Password</Text>
        <TextInput
          className="bg-green rounded-full px-4 py-2 text-md"
          autoCapitalize="none"
          value={password}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View className="w-72 flex flex-row justify-between items-center mt-4">
        <TouchableOpacity onPress={() => router.push('/sign-up')}>
          <Text className="text-blue text-lg font-semibold text-center py-2 bg-red rounded-full w-28">
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSignInPress}>
          <Text className="text-blue text-lg font-semibold border-2 border-blue text-center py-2 rounded-full w-40">
            Log In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
