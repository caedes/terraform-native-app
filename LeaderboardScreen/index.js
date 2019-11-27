import { Button, Text } from "react-native-elements";
import { FlatList, Platform, View } from "react-native";
import { ListItem } from "react-native-elements";
import capitalize from "capitalize";
import React from "react";
import useFetchData from "use-fetch-data";
import { fetchLeaderboard } from "terraform-http-client";
import { splitAt } from "ramda";

import { CDISCOUNT } from "../routes";
import Screen from "../Screen";
import { LeaderboardHeader } from "./styles";
import Leader from "./Leader";

const userScore = ({ item }) => (
  <ListItem
    leftAvatar={{ source: { uri: item.avatar } }}
    title={item.name}
    rightTitle={String(item.score)}
    bottomDivider
  />
);

const extractById = item => String(item.id);

export default function LeaderboardScreen({ navigation }) {
  const leaderboardData = useFetchData(fetchLeaderboard, []);

  const [[leader = {}], leaderboard] = splitAt(1, leaderboardData);

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
      <Leader avatar={leader.avatar} name={leader.name} />
      <FlatList
        style={{ width: "100%" }}
        data={leaderboard}
        renderItem={userScore}
        keyExtractor={extractById}
      />
    </Screen>
  );
}
