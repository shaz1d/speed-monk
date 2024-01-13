type Props = {
  userInput: string;
};

const UserTypings = ({ userInput }: Props) => {
  const typedCharacters = userInput.split("");
  return (
    <div className="absolute inset-0">
      {typedCharacters.map((char, index) => {
        return <Character key={`${char}_${index}`} char={char} />;
      })}
    </div>
  );
};

const Character = ({ char }: { char: string }) => {
  return <span className="text-primary-500">{char}</span>;
};

export default UserTypings;
