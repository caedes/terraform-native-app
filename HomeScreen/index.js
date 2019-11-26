import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Text } from "react-native-elements";

import BananaImage from "../assets/banana.jpg";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text h1>Tap'n'Play</Text>
      <Image
        source={BananaImage}
        style={{ width: "50%" }}
        resizeMode="contain"
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
