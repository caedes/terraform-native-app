import React from "react";
import { ListItem } from "react-native-elements";

export default function Leader({ avatar, name }) {
  return (
    <ListItem
      linearGradientProps={{
        colors: ["#FF9800", "#F44336"],
        start: [1, 0],
        end: [0.2, 0]
      }}
      leftAvatar={{ source: { uri: avatar } }}
      title={name}
      titleStyle={{ color: "white", fontWeight: "bold" }}
      subtitleStyle={{ color: "white" }}
      subtitle="Leader"
      style={{ width: "100%" }}
    />
  );
}
