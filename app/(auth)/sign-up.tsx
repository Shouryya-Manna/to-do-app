import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { SignUpForm } from "@/components/sign-up-form";
import { Colors } from "@/constants/Theme";

const SignUp = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.light.primary,
        flex: 1,
      }}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerClassName="flex-grow"
        keyboardDismissMode="interactive"
      >
        <View className="flex-1">
          <SignUpForm />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
