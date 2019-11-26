import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Text } from "react-native-elements";

export default function GameScreen() {
  return (
    <View style={styles.container}>
      <Text h1>Game</Text>
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
