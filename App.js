import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./HomeScreen";
import LeaderboardScreen from "./LeaderboardScreen";

const HOME = "Home";
const LEADERBOARD = "Leaderboard";

const TabNavigator = createBottomTabNavigator(
  {
    [HOME]: HomeScreen,
    [LEADERBOARD]: LeaderboardScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        const iconName =
          routeName === HOME
            ? "md-home"
            : routeName === LEADERBOARD
            ? "md-medal"
            : "md-more";

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

export default createAppContainer(TabNavigator);
