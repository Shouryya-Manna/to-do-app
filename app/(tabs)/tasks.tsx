import ToDoDisplay from "@/components/Tasks/ToDoDisplay";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TODO_DATA, ToDoData } from "@/data/mock-todo-data";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TextInputChangeEvent,
  View,
} from "react-native";

function Tasks() {
  /**
   * =======================================================
   *                       States
   * =======================================================
   */
  const [data, setData] = useState<ToDoData>(TODO_DATA);
  const [input, setInput] = useState("");
  const filteredTodos = data.filter((data) =>
    data.text.toLowerCase().includes(input),
  );

  /**
   * =======================================================
   *                       Functions
   * =======================================================
   */

  function handleInput(e: TextInputChangeEvent) {
    setInput(e.nativeEvent.text);
  }

  function handleToDoCheck(id: string) {
    setData((prevTodo) => {
      return prevTodo.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      });
    });
  }

  function handleToDoDelete(id: string) {
    setData((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <View className="relative w-full h-full flex flex-col">
      <ScrollView className="flex-1" contentContainerClassName="items-center">
        <View className="w-3/4 mt-16">
          <Text className="text-2xl font-semibold">Today's tasks</Text>
        </View>

        <View className="w-3/4 mt-12">
          {/* Input for a task  */}
          <View className="flex flex-row items-center gap-2 mb-2">
            <Input
              keyboardType={"default"}
              placeholder="Search..."
              className="w-full"
              onChange={(e) => handleInput(e)}
            />
          </View>

          {/* Tasks Display Area  */}

          {/* Pending Tasks */}

          <Text className="text-muted-foreground text-lg font-semibold">
            Pending -
          </Text>

          <View className="w-full">
            <FlatList
              data={filteredTodos}
              scrollEnabled={false}
              renderItem={({ item }) => {
                return (
                  <>
                    {!item.completed && (
                      <ToDoDisplay
                        item={item}
                        handleToDoCheck={handleToDoCheck}
                        handleToDoDelete={handleToDoDelete}
                      />
                    )}
                  </>
                );
              }}
              keyExtractor={(todo) => todo.id}
            />
          </View>

          {/* Completed Tasks */}

          <Text className="text-muted-foreground text-lg font-semibold">
            Completed -
          </Text>

          <View className="w-full">
            <FlatList
              data={filteredTodos}
              scrollEnabled={false}
              renderItem={({ item }) => {
                return (
                  <>
                    {item.completed && (
                      <ToDoDisplay
                        item={item}
                        handleToDoCheck={handleToDoCheck}
                        handleToDoDelete={handleToDoDelete}
                      />
                    )}
                  </>
                );
              }}
              keyExtractor={(todo) => todo.id}
            />
          </View>
        </View>
      </ScrollView>

      {/* Add Task Button */}
      <View className="absolute bottom-2 right-9">
        <Button className="size-12 bg-black ">
          <Ionicons name="add" size={28} color={"white"} />
        </Button>
      </View>
    </View>
  );
}

export default Tasks;
