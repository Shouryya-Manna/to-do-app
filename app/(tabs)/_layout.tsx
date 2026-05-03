import { Colors } from "@/constants/Theme";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

<MaterialIcons name="menu" size={28} color="blue" />;

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary[400],
        tabBarInactiveTintColor: Colors.dark.muted,
        tabBarStyle: {
          backgroundColor: Colors.secondary[100],
          borderTopColor: Colors.light.border,
          paddingBottom: 14,
          paddingTop: 10,
          height: 75,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontFamily: "Inter-Medium",
          fontWeight: "700",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tasks"
        options={{
          title: "Tasks",
          tabBarIcon: ({ color }) => (
            <Ionicons name="list-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
