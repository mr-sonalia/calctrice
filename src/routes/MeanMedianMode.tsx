import { useRef } from "react";
import { Calculator } from "../models/MeanMedianMode";

const MeanMedianMode = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const getResults = (): void => {
    const values = inputRef.current!.value;
    const calculator: Calculator = new Calculator(values);

    console.log(calculator.getBasicResult());
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={getResults}>Show Result</button>
    </div>
  );
};

export default MeanMedianMode;
