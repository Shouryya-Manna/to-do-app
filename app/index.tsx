import { Colors } from "@/constants/Theme";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../assets/images/logo.png";

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView
      className="h-full w-full"
      style={{
        height: "100%",
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.light.secondary,
      }}
    >
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <Image source={logo} style={{ height: 300, width: 300 }} />
        <View className="flex justify-center items-center">
          <Text>Lets get you started!</Text>

          <TouchableOpacity
            style={{ backgroundColor: Colors.secondary[300] }}
            onPress={() => router.push("/sign-up")}
            className="py-2 w-11/12 rounded-xl mt-8 flex justify-center items-center border border-[#1E293B]"
          >
            <Text style={{ color: Colors.dark.text[500] }} className="text-xl">
              Sign up
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: Colors.primary[200],
              borderColor: Colors.primary[500],
            }}
            className="py-2 w-11/12 rounded-xl mt-4 flex justify-center items-center border border-[#1E293B]"
          >
            <Text style={{ color: Colors.dark.text[500] }} className="text-xl">
              Guest User
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
