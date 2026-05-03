import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { SignUpForm } from "@/components/sign-up-form";

const SignUp = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerClassName="flex-grow items-center justify-center"
        keyboardDismissMode="interactive"
      >
        <View className="w-full">
          <SignUpForm />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
