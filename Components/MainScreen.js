import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Icon } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createAppContainer } from "react-navigation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import HomeTab from "./AppTabNavigator/HomeTab";
import SearchTab from "./AppTabNavigator/SearchTab";
import AddMediaTab from "./AppTabNavigator/AddMediaTab";
import LikesTab from "./AppTabNavigator/LikesTab";
import ProfileTab from "./AppTabNavigator/ProfileTab";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#111111",
        showIcon: true,
        showLabel: false,
      }}
      tabBarPosition={"bottom"}
    >
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchTab}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddMediaTab}
        options={{
          tabBarLabel: "Add",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Likes"
        component={LikesTab}
        options={{
          tabBarLabel: "Likes",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileTab}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function MainScreen({ navigation }) {
  const [count, setCount] = React.useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Icon
          name="ios-camera"
          onPress={() => setCount(count + 1)}
          style={{ paddingLeft: 10 }}
        />
      ),
      headerRight: () => (
        <Icon
          name="ios-send"
          onPress={() => setCount(count + 1)}
          style={{ paddingRight: 10 }}
        />
      ),
    });
  }, [count]);

  return <MyTabs></MyTabs>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
