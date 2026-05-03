import { SignInForm } from "@/components/sign-in-form";
import { Colors } from "@/constants/Theme";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInScreen() {
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
          <SignInForm />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
