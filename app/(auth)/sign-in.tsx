import { SignInForm } from "@/components/sign-in-form";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInScreen() {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerClassName="w-full h-full flex-grow justify-center items-center"
      keyboardDismissMode="interactive"
    >
      <View className="w-full h-full">
        <SignInForm />
      </View>
    </ScrollView>
  );
}
