import { Button, Text } from "react-native-elements";
import { FlatList, Platform, ActivityIndicator } from "react-native";
import { ListItem } from "react-native-elements";
import capitalize from "capitalize";
import React from "react";
import useFetchData from "use-fetch-data";
import { fetchLeaderboard } from "terraform-http-client";
import { splitAt } from "ramda";
import { isNilOrEmpty, isNotNilOrEmpty } from "ramda-adjunct";

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

  const renderLeaderboardList = () => (
    <>
      {isNotNilOrEmpty(leader) && <Leader {...leader} />}
      <FlatList
        style={{ width: "100%" }}
        data={leaderboard}
        renderItem={userScore}
        keyExtractor={extractById}
      />
    </>
  );

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
      {isNilOrEmpty(leaderboardData) ? (
        <ActivityIndicator size="large" />
      ) : (
        renderLeaderboardList()
      )}
    </Screen>
  );
}
