import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Text } from "react-native-elements";

export default function LeaderboardScreen() {
  return (
    <View style={styles.container}>
      <Text h1>Cdiscount</Text>
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
