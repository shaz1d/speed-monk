import ResetButton from "./components/ResetButton";
import Results from "./components/Results";
import UserTypings from "./components/UserTypings";
import useEngine from "./hooks/useEngine";

function App() {
  const { words, timeLeft, typed } = useEngine();
  return (
    <>
      <CountdownTimer timeLeft={timeLeft} />
      <div className="relative text-3xl text-justify max-w-4xl mt-3  leading-relaxed">
        <GeneratedWords words={words} />
        <UserTypings userInput={typed} />
      </div>

      <ResetButton
        className="mx-auto mt-10 text-slate-500"
        onReset={() => null}
      />
      <Results accuracyPercentage={90} errors={20} total={80} />
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
