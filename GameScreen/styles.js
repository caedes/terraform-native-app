import styled from "styled-components/native";
import { Text } from "react-native-elements";

export const BigButton = styled.TouchableHighlight({
  width: "100%",
  height: "100%",
  backgroundColor: "#fda221",
  justifyContent: "center",
  alignItems: "center"
});

export const BigButtonText = styled(Text)({
  color: "white"
});
