import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { cn } from "@/lib/utils";

interface InfoGraphicsProps {
  iconName: keyof typeof Ionicons.glyphMap;
  text: string;
  iconClassName?: string;
}

function InfoGraphics({ iconName, text, iconClassName }: InfoGraphicsProps) {
  return (
    <View className="border border-gray-300 rounded-lg p-3">
      <View className="flex items-center justify-center">
        <Ionicons name={iconName} size={26} className={cn("", iconClassName)} />

        <Text className="text-xs font-medium">{text}</Text>
      </View>
    </View>
  );
}

export default InfoGraphics;
