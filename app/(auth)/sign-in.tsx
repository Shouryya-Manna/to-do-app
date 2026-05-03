import { SignInForm } from "@/components/sign-in-form";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerClassName="flex-grow justify-center items-center"
        keyboardDismissMode="interactive"
      >
        <View className="w-full">
          <SignInForm />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
