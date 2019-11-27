import { func, number } from "prop-types";
import { Text } from "react-native-elements";
import React from "react";
import useCountdown from "use-countdown";

export default function Countdown({ initTime, onComplete }) {
  const time = useCountdown({ initTime, onComplete });

  return <Text h3>{time / 1000} sec</Text>;
}

Countdown.propTypes = {
  initTime: number.isRequired,
  onComplete: func
};

Countdown.defaultProps = {
  onComplete: Function.prototype
};
