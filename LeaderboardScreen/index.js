import React from "react";
import { Button, Text } from "react-native-elements";
import { Platform } from "react-native";
import capitalize from "capitalize";

import { CDISCOUNT } from "../routes";
import Screen from "../Screen";
import { LeaderboardHeader } from "./styles";

export default function LeaderboardScreen({ navigation }) {
  const goToCdiscountScreen = () => {
    navigation.navigate(CDISCOUNT);
  };

  const deviceVersion = `${capitalize(Platform.OS)} v${Platform.Version}`;

  return (
    <Screen title="Leaderboard">
      <LeaderboardHeader>
        <Text>{deviceVersion}</Text>
        <Button
          title="Go to Cdiscount.com"
          raised
          onPress={goToCdiscountScreen}
        />
      </LeaderboardHeader>
    </Screen>
  );
}
