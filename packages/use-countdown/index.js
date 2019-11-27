import { useState } from "react";
import useInterval from "react-use/lib/useInterval";
import useBoolean from "react-use/lib/useBoolean";

export default function useCountdown({
  initTime,
  onComplete = Function.prototype,
  step = 1000,
  delay = 1000,
  limit = 0
}) {
  const [time, setTime] = useState(initTime);
  const [isRunning, toggleIsRunning] = useBoolean(true);

  useInterval(
    () => {
      setTime(time - step);
    },
    isRunning ? delay : null
  );
  console.log(time);

  if (time <= limit) {
    if (isRunning) toggleIsRunning();
    onComplete();
  }

  return time;
}
