import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { WebView } from "react-native-webview";

export default function CdiscountScreen() {
  return <WebView source={{ uri: "https://cdiscount.com" }} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
