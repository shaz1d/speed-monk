import { useCallback, useEffect, useRef, useState } from "react";
const useCountdownTimer = (seconds: number) => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  const intervalRef = useRef<NodeJS.Timer | null>(null);
  const hasTimerEnded = timeLeft <= 0;
  const isRunning = intervalRef.current != null;

  const startCountdown = useCallback(() => {
    console.log("starting countdown..");
    if (!hasTimerEnded && !isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    }
  }, [setTimeLeft, hasTimerEnded, isRunning]);

  const resetCountdown = useCallback(() => {
    console.log("resetting countdown....");
    clearInterval(intervalRef.current! as any);
    intervalRef.current = null;
    setTimeLeft(seconds);
  }, [seconds]);

  // when the countdown reaches 0, clear the countdown interval
  useEffect(() => {
    if (hasTimerEnded) {
      clearInterval(intervalRef.current! as any);
      intervalRef.current = null;
    }
  }, [hasTimerEnded]);

  // clear interval when component unmounts
  useEffect(() => {
    return () => clearInterval(intervalRef.current! as any);
  }, []);

  return { timeLeft, startCountdown, resetCountdown };
};

export default useCountdownTimer;
