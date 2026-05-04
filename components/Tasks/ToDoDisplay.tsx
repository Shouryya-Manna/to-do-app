import { View, Text, Pressable } from "react-native";
import React from "react";
import { ToDo } from "@/data/mock-todo-data";
import { Checkbox } from "../ui/checkbox";

interface ToDoDisplayProps {
  item: ToDo;
  handleToDoCheck: (id: string) => void;
}
function ToDoDisplay({ item, handleToDoCheck }: ToDoDisplayProps) {
  return (
    <Pressable
      key={item.id}
      className="border border-muted-foreground/20 selected:border-muted-foreground/50 selected:bg-gray-300 transition-all duration-300 rounded-md h-10 flex  justify-center mb-2 bg-white"
    >
      <View className="flex flex-row items-center pl-3">
        <Checkbox
          checked={item.completed}
          onCheckedChange={() => handleToDoCheck(item.id)}
        />
        <Text className="text-sm pl-2">{item.text}</Text>
      </View>
    </Pressable>
  );
}

export default ToDoDisplay;
