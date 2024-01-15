import ResetButton from "./components/ResetButton";
import Results from "./components/Results";
import UserTypings from "./components/UserTypings";
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage } from "./utils/helpers";

function App() {
  const { state, words, timeLeft, typed, errors, restart, totalTyped } =
    useEngine();
  return (
    <>
      <CountdownTimer timeLeft={timeLeft} />
      <div className="relative text-3xl break-all max-w-4xl mt-3 leading-relaxed">
        <GeneratedWords words={words} />
        <UserTypings userInput={typed} words={words} />
      </div>

      <ResetButton className="mx-auto mt-10 text-slate-500" onReset={restart} />
      <Results
        state={state}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        errors={errors}
        total={totalTyped}
      />
    </>
  );
}

const GeneratedWords = ({ words }: { words: string }) => {
  return <div className=" text-slate-500">{words}</div>;
};

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-primary-500 font-medium">Time:{timeLeft}</h2>;
};

export default App;
