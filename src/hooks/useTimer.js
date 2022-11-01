import { useState, useEffect } from "react";

export function useTimer(stop = false) {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (!stop) {
      interval = setInterval(() => setTimer((prev) => prev + 1), 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [stop]);

  return timer;
}
