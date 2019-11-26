import { createStackNavigator } from "react-navigation-stack";

import LeaderboardScreen from "../LeaderboardScreen";
import CdiscountScreen from "../CdiscountScreen";
import { CDISCOUNT } from "../routes";

export default createStackNavigator({
  LeaderboardScreen,
  [CDISCOUNT]: CdiscountScreen
});
