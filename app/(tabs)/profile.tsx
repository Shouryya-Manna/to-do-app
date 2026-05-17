import { View, Text } from "react-native";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import InfoGraphics from "@/components/Profile/InfoGraphics";

const Profile = () => {
  return (
    <View className="flex justify-center items-center">
      <View className="w-3/4 flex flex-col justify-center items-center mt-20">
        <Avatar alt="Zach Nugent's Avatar" className="size-20">
          <AvatarImage
            className=""
            source={{ uri: "https://github.com/mrzachnugent.png" }}
          />
          <AvatarFallback>
            <Text>ZN</Text>
          </AvatarFallback>
        </Avatar>
        <Text className="font-semibold text-3xl mt-4">John Doe</Text>
        <Text className=" text-xs mt-2 text-muted-foreground border border-gray-300 rounded-full px-2 py-1 bg-gray-50">
          Productive Rookie
        </Text>
        <View className="mt-6 flex items-center justify-center">
          <Text className="text-sm font-semibold text-muted-foreground">
            Badges
          </Text>
          <View className="mt-3 flex-row justify-center items-center gap-3">
            <InfoGraphics
              iconName="checkmark"
              text="Consistent"
              color="blue"
              className="border-blue-600"
            />
            <InfoGraphics
              iconName="star"
              text="Rookie"
              color="#EFBF04"
              className="border-[#EFBF04]"
            />
            <InfoGraphics
              iconName="calendar-outline"
              text="Daily"
              color="green"
              className="border-green-800"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
