import { faker } from "@faker-js/faker";
import ResetButton from "./components/ResetButton";
import Results from "./components/Results";

const words = faker.word.words(10);

function App() {
  return (
    <>
      <CountdownTimer timeLeft={30} />
      <GeneratedWords words={words} />
      <ResetButton
        className="mx-auto mt-10 text-slate-500"
        onReset={() => null}
      />
      <Results accuracyPercentage={90} errors={20} total={80} />
    </>
  );
}

const GeneratedWords = ({ words }: { words: string }) => {
  return (
    <div className="text-4xl text-justify text-slate-500 max-w-4xl">
      {words}
    </div>
  );
};

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-primary-500 font-medium">Time:{timeLeft}</h2>;
};

export default App;
