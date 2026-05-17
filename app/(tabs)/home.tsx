import { Card } from "@/components/ui/card";
import { TODO_DATA } from "@/data/mock-todo-data";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const Home = () => {
  const user = "User";
  const upcomingData = [TODO_DATA[0], TODO_DATA[1], TODO_DATA[2]];
  return (
    <ScrollView className="flex-1" contentContainerClassName="">
      <View className="flex justify-center items-center">
        <View className="w-3/4 flex flex-col mt-20">
          <Text className="font-semibold text-3xl">Good Morning,</Text>
          <Text className="font-semibold text-3xl">{user ? user : "User"}</Text>
        </View>
        <View className="w-3/4 flex flex-col justify-center mt-8">
          <Text className="text-muted-foreground text-lg font-semibold ">
            Your upcoming tasks are -
          </Text>

          {upcomingData.map((item) => {
            return (
              <Card className="mt-2 w-full px-6" key={item.id}>
                <View className="flex-row gap-2">
                  <Text className="text-4xl font-semibold">
                    {item.id + "."}
                  </Text>
                  <View className="flex-1 justify-end ml-2">
                    <Text className="text-base text-gray-400">{item.text}</Text>
                  </View>
                </View>
              </Card>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
