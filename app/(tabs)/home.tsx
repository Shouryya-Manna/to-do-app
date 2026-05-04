import React from "react";
import { Text, View } from "react-native";

const Home = () => {
  const user = "User";
  return (
    <View className="flex justify-center items-center">
      <View className="w-3/4 flex flex-col mt-20">
        <Text className="font-semibold text-3xl">
          Good Morning,
        </Text>
        <Text className="font-semibold text-3xl">{user ? user : "User"}</Text>
      </View>
    </View>
  );
};

export default Home;
