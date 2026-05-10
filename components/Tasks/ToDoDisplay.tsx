import { ToDo } from "@/data/mock-todo-data";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { Checkbox } from "../ui/checkbox";
import { Ionicons } from "@expo/vector-icons";

interface ToDoDisplayProps {
  item: ToDo;
  handleToDoCheck: (id: string) => void;
  handleToDoDelete: (id: string) => void;
}
function ToDoDisplay({
  item,
  handleToDoCheck,
  handleToDoDelete,
}: ToDoDisplayProps) {
  return (
    <Pressable
      key={item.id}
      onPress={() => handleToDoCheck(item.id)}
      className="border border-muted-foreground/20 selected:border-muted-foreground/50 selected:bg-gray-300 transition-all duration-300 rounded-md h-10 flex  justify-center mb-2 bg-white"
    >
      <View className="flex flex-row items-center  w-full justify-between">
        <View className="flex flex-row items-center pl-3">
          <Checkbox
            className=" cursor-pointer"
            checked={item.completed}
            onCheckedChange={() => handleToDoCheck(item.id)}
          />
          <Text className="text-sm pl-2">{item.text}</Text>
        </View>
        <Pressable className="pr-3" onPress={() => handleToDoDelete(item.id)}>
          <Ionicons name="trash" size={20} className="text-red-600" />
        </Pressable>
      </View>
    </Pressable>
  );
}

export default ToDoDisplay;
