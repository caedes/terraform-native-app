import { createStackNavigator } from "react-navigation-stack";

import LeaderboardScreen from "../LeaderboardScreen";
import CdiscountScreen from "../CdiscountScreen";
import { CDISCOUNT, LEADERBOARD_SCREEN } from "../routes";

export default createStackNavigator(
  {
    [LEADERBOARD_SCREEN]: LeaderboardScreen,
    [CDISCOUNT]: CdiscountScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state;

      return {
        headerShown: routeName !== LEADERBOARD_SCREEN
      };
    }
  }
);
