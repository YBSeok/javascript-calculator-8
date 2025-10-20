import ErrorHandler from "./error/ErrorHandler.js";

export default class Calculator {
  constructor(input) {
    this.input = input;
  }

  calculate() {
    let numbersString = this.input;
    let baseDelimiters = ",:";
    let customDelimiter = "";

    const customDelimiterRegex = /\/\/(.*?)\\n/;
    const match = this.input.match(customDelimiterRegex);
    const parts = this.input.split(customDelimiterRegex);

    ErrorHandler.validateInput(parts);

    if (match) {
      customDelimiter = match[1];
      numbersString = this.input.substring(match[0].length);
    }

    const escapedDelimiter = customDelimiter.replace(
      /[-\/\\^$*+?.()|[\]{}]/g,
      "\\$&"
    );
    const finalDelimiters = new RegExp(
      `[${baseDelimiters}${escapedDelimiter}]`
    );

    const numbers = numbersString.split(finalDelimiters);

    let result = 0;
    for (const numStr of numbers) {
      if (numStr) {
        const parsedNum = parseInt(numStr, 10);
        ErrorHandler.validateNumber(parsedNum);
        result += parsedNum;
      }
    }

    return result;
  }
}
