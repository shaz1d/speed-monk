import { useState } from "react";
import useWords from "./useWords";
import useCountdownTimer from "./useCountdownTimer";
import useTyping from "./useTyping";

export type State = "start" | "run" | "finish";
const NUMBER_OF_WORDS = 12;
const COUNTDOWN_SECONDS = 30;
const useEngine = () => {
  const [state, setState] = useState<State>("start");
  const { words, updateWords } = useWords(NUMBER_OF_WORDS);
  const { timeLeft, startCountdown, resetCountdown } =
    useCountdownTimer(COUNTDOWN_SECONDS);
  const { cursor, typed, clearTyped, totalTyped, resetTotalTyped } = useTyping(
    state !== "finish"
  );

  return { state, words, timeLeft, totalTyped, typed };
};

export default useEngine;
