import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./HomeScreen";
import LeaderboardScreen from "./LeaderboardScreen";
import GameScreen from "./GameScreen";

const HOME = "Home";
const LEADERBOARD = "Leaderboard";
const GAME = "Game";

const TabNavigator = createBottomTabNavigator(
  {
    [HOME]: HomeScreen,
    [GAME]: GameScreen,
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
            : routeName === GAME
            ? "logo-game-controller-b"
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
