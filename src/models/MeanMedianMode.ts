const commaSeparatedNumbersRegex = /(-?\d+(\.\d*)*)(,\s*(-?\d+(\.\d*)*))*/;
type validation = [number[] | null, null | Error];
const hasAlphaRegex: RegExp = /[a-zA-Z]/g;

const inputFormatter = (input: string): validation => {
  let values: number[];

  // if (!hasAlphaRegex.test(input)) {
  if (commaSeparatedNumbersRegex.test(input) && !hasAlphaRegex.test(input)) {
    values = input
      .split(",")
      .map((value) => Number(value.trim()))
      .sort((a: number, b: number) => a - b);

    return [values, null];
  } else {
    return [null, new Error("Please enter valid values!")];
  }
};

class Calculator {
  input: string;

  constructor(input: string) {
    this.input = input;
  }

  private formatOutput(value: number) {
    let [integer, decimal]: string[] = value.toString().split(".");

    const frac: number = 4;
    const dec: string = decimal ? decimal.padEnd(frac, "0").slice(0, frac) : "".padEnd(frac, "0");

    return Number([new Intl.NumberFormat("en-IN").format(Number(integer)), dec].join("."));
  }

  getBasicResult(): object {
    const [values, error]: [null | number[], null | Error] = inputFormatter(this.input);

    let mean: number = 0;
    let median: number = 0;
    let mode: number = 0;

    if (error) {
      return { error: error.message };
    }

    if (values) {
      const setLength: number = values.length;
      const mid: number = Math.floor(setLength / 2);

      mean = this.formatOutput(values.reduce((curr, acc) => curr + acc) / setLength);
      median = this.formatOutput(values.length % 2 ? values[mid] : (values[mid - 1] + values[mid]) / 2.0);
      mode = 3 * median - 2 * mean;
    }
    return { mean, median, mode };
  }
}

// console.log(new Calculator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).getBasicResult());
export { Calculator };
