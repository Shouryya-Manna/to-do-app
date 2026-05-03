import React from "react";
import { Text, View } from "react-native";

const Home = () => {
  const user = "User";
  return (
    <View className="flex justify-center items-center">
      <View className="w-1/2 bg-slate-600">
        <Text className="font-semibold">
          Good Morning {user ? user : "User"}
        </Text>
      </View>
    </View>
  );
};

export default Home;
