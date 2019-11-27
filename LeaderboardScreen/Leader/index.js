import React from "react";
import { ListItem } from "react-native-elements";
import { merge } from "ramda";
import { string, number } from "prop-types";

const fontStyle = { color: "white" };
const emFontStyle = merge(fontStyle, { fontWeight: "bold" });

export default function Leader({ avatar, name, score }) {
  return (
    <ListItem
      linearGradientProps={{
        colors: ["#FF9800", "#F44336"],
        start: [1, 0],
        end: [0.2, 0]
      }}
      leftAvatar={{ source: { uri: avatar } }}
      title={name}
      titleStyle={emFontStyle}
      rightTitle={String(score)}
      rightTitleStyle={emFontStyle}
      subtitleStyle={fontStyle}
      subtitle="Leader"
      style={{ width: "100%" }}
    />
  );
}

Leader.propTypes = {
  avatar: string,
  name: string.isRequired,
  score: number.isRequired
};

Leader.defaultProps = {
  avatar: null
};
