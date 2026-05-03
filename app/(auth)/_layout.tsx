import { Colors } from "@/constants/Theme";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="sign-up"
        options={{
          headerShown: false,
          contentStyle: { backgroundColor: Colors.light.secondary },
        }}
      />
    </Stack>
  );
}
