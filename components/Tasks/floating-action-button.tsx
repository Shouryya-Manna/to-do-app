import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable } from "react-native";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Textarea } from "../ui/textarea";

interface FloatingActionButtonProps {
  handleToDoCreate: (text: string) => void;
}

export default function FloatingActionButton({
  handleToDoCreate,
}: FloatingActionButtonProps) {
  const [expanded, setExpanded] = useState(false);
  const [task, setTask] = useState("");

  const width = useSharedValue(60);
  const height = useSharedValue(60);
  const opacity = useSharedValue(0);

  function handleExpand() {
    setExpanded(true);

    width.value = withSpring(320);
    height.value = withSpring(200);
    opacity.value = withTiming(1, {
      duration: 250,
    });
  }

  function handleClose() {
    width.value = withSpring(60);
    height.value = withSpring(60);
    opacity.value = withTiming(0, {
      duration: 150,
    });

    setTimeout(() => {
      setExpanded(false);
    }, 200);
  }

  function handleInput(text: string) {
    setTask(text);
  }

  const containerStyle = useAnimatedStyle(() => {
    return {
      width: width.value,
      height: height.value,
    };
  });

  const inputStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          bottom: 30,
          right: 20,
          height: 60,
          backgroundColor: "#000000",
          borderRadius: 30,
          flexDirection: "row",
          alignItems: "center",
          overflow: "hidden",
          paddingHorizontal: 20,
        },
        containerStyle,
      ]}
    >
      {!expanded ? (
        <Pressable
          onPress={handleExpand}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="add" size={20} color={"white"} />
        </Pressable>
      ) : (
        <>
          <Animated.View
            style={[
              {
                flex: 1,
                alignSelf: "stretch",
              },
              inputStyle,
            ]}
          >
            <Textarea
              value={task}
              onChangeText={(text) => handleInput(text)}
              keyboardType={"default"}
              placeholder="Enter task..."
              style={
                {
                  flex: 1,
                  color: "white",
                  fontSize: 16,
                  borderWidth: 0,
                  outline: "none",
                  backgroundColor: "transparent",
                  resize: "none",
                } as any
              }
              className="h-full placeholder:text-gray-400 focus-visible:border-none focus-visible:ring-0 mt-4"
              autoFocus
            />
          </Animated.View>

          <Animated.View
            style={[inputStyle, { height: "100%", justifyContent: "flex-end" }]}
          >
            <Pressable
              onPress={() => {
                console.log(task);
                handleToDoCreate(task);
                setTask("");
                handleClose();
              }}
              className="pb-5 pr-1.5"
            >
              <Ionicons name="send" color={"white"} size={18} />
            </Pressable>
          </Animated.View>
        </>
      )}
    </Animated.View>
  );
}
