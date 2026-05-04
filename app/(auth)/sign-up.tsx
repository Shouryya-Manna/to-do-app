import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { SignUpForm } from "@/components/sign-up-form";

const SignUp = () => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerClassName="flex-grow items-center justify-center"
      keyboardDismissMode="interactive"
    >
      <View className="w-full h-full">
        <SignUpForm />
      </View>
    </ScrollView>
  );
};

export default SignUp;
