/**
 * TYPES AND INTERFACES
 */
type validation = [number[] | null, null | Error];
/**
 * REGEX
 */

const commaSeparatedNumbersRegex = /(-?\d+(\.\d*)*)(,\s*(-?\d+(\.\d*)*))*/;
const hasAlphaRegex: RegExp = /[a-zA-Z]/g;

/**
 * FUNCTIONS
 */

const validateInput = (input: string): validation => {
  let values: number[];

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

const formatOutput = (value: number): number => {
  let [integer, decimal]: string[] = value.toString().split(".");
  const frac: number = 4;
  const dec: string = decimal ? decimal.padEnd(frac, "0").slice(0, frac) : "".padEnd(frac, "0");

  return Number([integer, dec].join("."));
};

export { commaSeparatedNumbersRegex, hasAlphaRegex, validateInput, formatOutput };
