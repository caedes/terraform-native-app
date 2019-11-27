import React from "react";
import { Button } from "react-native-elements";

import { CDISCOUNT } from "../routes";
import Screen from "../Screen";

export default function LeaderboardScreen({ navigation }) {
  const goToCdiscountScreen = () => {
    navigation.navigate(CDISCOUNT);
  };

  return (
    <Screen title="Leaderboard">
      <Button
        title="Go to Cdiscount.com"
        raised
        onPress={goToCdiscountScreen}
      />
    </Screen>
  );
}
