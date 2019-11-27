import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { node, string } from "prop-types";
import Constants from "expo-constants";

export default function Screen({ title, children }) {
  return (
    <View style={styles.container}>
      {title !== "" && <Text h1>{title}</Text>}
      {children}
    </View>
  );
}

Screen.propTypes = {
  title: string,
  children: node
};

Screen.defaultProps = {
  title: "",
  children: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    paddingTop: Constants.statusBarHeight
  }
});
