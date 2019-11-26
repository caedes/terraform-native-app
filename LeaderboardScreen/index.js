import React from "react";
import { Button } from "react-native-elements";
import { StyleSheet, View, Image } from "react-native";
import { Text } from "react-native-elements";
import { CDISCOUNT } from "../routes";

export default function LeaderboardScreen({ navigation }) {
  const goToCdiscountScreen = () => {
    navigation.navigate(CDISCOUNT);
  };

  return (
    <View style={styles.container}>
      <Text h1>Leaderboard</Text>
      <Button
        title="Go to Cdiscount.com"
        raised
        onPress={goToCdiscountScreen}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
