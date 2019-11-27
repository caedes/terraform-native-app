import React from "react";

import Countdown from "./Countdown";
import Screen from "../Screen";
import { BigButton, BigButtonText } from "./styles";

const inMilliseconds = second => second * 1000;

export default function GameScreen() {
  return (
    <Screen title="Game">
      <Countdown initTime={inMilliseconds(3)} />
      <BigButton underlayColor="#59c9Da" onPress={Function.prototype}>
        <BigButtonText h1>Tap Me</BigButtonText>
      </BigButton>
    </Screen>
  );
}
