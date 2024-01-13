import { ArrowClockwise } from "@phosphor-icons/react";
import { useRef } from "react";
type Props = {
  className?: string;
  onReset: () => void;
};

const ResetButton = ({ className, onReset: handleReset }: Props) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleClick = () => {
    buttonRef.current?.blur();
    handleReset();
  };
  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={`block rounded px-8 py-4 hover:bg-slate-700/50 ${className}`}
    >
      <ArrowClockwise size={24} weight="bold" />
    </button>
  );
};

export default ResetButton;
