import { validateInput, formatOutput } from "../helpers";

class Calculator {
  input: string;

  constructor(input: string) {
    this.input = input;
  }

  getBasicResult(): object {
    const [values, error]: [null | number[], null | Error] = validateInput(this.input);

    let mean: number = 0;
    let median: number = 0;
    let mode: number = 0;

    if (error) {
      return { error: error.message };
    }

    if (values) {
      const setLength: number = values.length;
      const mid: number = Math.floor(setLength / 2);

      mean = formatOutput(values.reduce((curr, acc) => curr + acc) / setLength);
      median = formatOutput(values.length % 2 ? values[mid] : (values[mid - 1] + values[mid]) / 2.0);
      mode = formatOutput(3 * median - 2 * mean);

      // mean = values.reduce((curr, acc) => curr + acc) / setLength;
      // median = values.length % 2 ? values[mid] : (values[mid - 1] + values[mid]) / 2.0;
      // mode = 3 * median - 2 * mean;
    }
    return { mean, median, mode };
  }
}

// console.log(new Calculator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).getBasicResult());
export { Calculator };
