import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { cn } from "@/lib/utils";

interface InfoGraphicsProps {
  iconName: keyof typeof Ionicons.glyphMap;
  text: string;
  color?: string;
  className?: string;
}

function InfoGraphics({ iconName, text, color, className }: InfoGraphicsProps) {
  return (
    <View className={cn("border border-gray-300 rounded-lg p-3", className)}>
      <View className="flex items-center justify-center">
        <Ionicons name={iconName} size={26} color={color} />

        <Text className="text-xs font-medium">{text}</Text>
      </View>
    </View>
  );
}

export default InfoGraphics;
