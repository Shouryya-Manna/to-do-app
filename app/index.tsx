import { Button } from "@/components/ui/button";
import { Link, useRouter } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
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
      }}
    >
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <Image source={logo} style={{ height: 200, width: 300 }} />
        <View className="flex justify-center items-center">
          <Text className="text-2xl font-semibold">Lets get you started!</Text>
          <Button
            variant={"default"}
            size={"sm"}
            className="w-11/12 mt-8 bg-black"
            onPress={() => router.push("/sign-up")}
          >
            <Text className="text-white">Sign up</Text>
          </Button>
          <Button
            variant={"outline"}
            size={"sm"}
            className="w-11/12 mt-4"
            onPress={() => router.push("/home")}
          >
            <Text className="">Guest User</Text>
          </Button>
          <View className="flex-row items-center w-full my-4">
            <View className="flex-1 border border-muted-foreground rounded-full mx-4" />
            <Text className="mx-1">Or</Text>
            <View className="flex-1 border border-muted-foreground rounded-full mx-4" />
          </View>

          <View className="flex-row items-center">
            <Text className="mr-3 ">Already a user?</Text>
            <Link href={"/sign-in"} className="underline font-medium">
              <Text>Sign in</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
