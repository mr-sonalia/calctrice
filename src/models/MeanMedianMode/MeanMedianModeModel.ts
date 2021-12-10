import { mean as getMean, median as getMedian } from "simple-statistics";
import { validateInput, formatOutput } from "../../helpers";

type Result = {
  mean: string;
  median: string;
  mode: string;
  range: number;
  count: number;
  sortedDataset: string;
  minMax: number[];
};

// const getFrequency = (array) => {
//   const map = {};
//   array.forEach((item) => {
//     if (map[item]) {
//       map[item]++;
//     } else {
//       map[item] = 1;
//     }
//   });
//   return map;
// };
// let entries = Object.entries(getFrequency(arr));

// let sorted = entries.sort((a, b) => a[1] - b[1]);

// const biggest = sorted[sorted.length - 1];
// const modes = [];
// modes.push(biggest[0]);

// for (let i = sorted.length - 2; i >= 0; i--) {
//   if (sorted[i][1] === biggest[1]) {
//     modes.unshift(sorted[i][0]);
//   }
// }

class Calculator {
  input: string;

  constructor(input: string) {
    this.input = input;
  }

  getModes(values: number[]): number[] {
    const map: any = {};

    values.forEach((item: number) => {
      map[item] ? map[item]++ : (map[item] = 1);
    });

    let entries = Object.entries(map);
    let sorted = entries.sort((a: any, b: any) => a[1] - b[1]);

    const biggest = sorted[sorted.length - 1];
    const modes: number[] = [];
    modes.push(Number(biggest[0]));

    for (let i = sorted.length - 2; i >= 0; i--) {
      if (sorted[i][1] === biggest[1]) {
        modes.unshift(Number(sorted[i][0]));
      }
    }

    return modes;
  }
  getBasicResult() {
    const [values, error]: [null | number[], null | Error] = validateInput(this.input);

    let mean: string = "";
    let median: string = "";
    let mode: string = "";
    let range: number = NaN;
    let count: number = NaN;
    let minMax: number[];
    let result: string | Result;

    if (error) {
      result = error.message;
      return result;
    } else if (values) {
      const { length } = values;
      const tempModes: number[] = this.getModes(values);
      mean = formatOutput(getMean(values));
      median = formatOutput(getMedian(values));

      mode =
        tempModes.length === 1
          ? tempModes.map((value) => formatOutput(value)).join("")
          : tempModes.map((value) => formatOutput(value)).join(", ");

      range = values[length - 1] - values[0];
      count = length;
      minMax = [values[0], values[length - 1]];

      result = { mean, median, mode, range, count, sortedDataset: values!.join(", "), minMax };
      return result;
    }
  }
}

export { Calculator };
