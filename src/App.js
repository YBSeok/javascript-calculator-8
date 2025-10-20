import { Console } from "@woowacourse/mission-utils";
import ErrorHandler from "./error/ErrorHandler.js";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    ErrorHandler.validateInput(input);

    let numbersString = input;
    let baseDelimiters = ",:";
    let customDelimiter = "";
    console.log("Debug: input", input);
    const customDelimiterRegex = /\/\/(.*?)\\n/;
    const match = input.match(customDelimiterRegex);

    console.log("Debug: match", match);

    if (match) {
      customDelimiter = match[1];
      numbersString = input.replace(match[0], ",");
    }

    console.log("Debug: customDelimiter", customDelimiter);

    const escapedDelimiter = customDelimiter.replace(
      /[-\/\\^$*+?.()|[\]{}]/g,
      "\\$&"
    );

    console.log("Debug: numbersString", numbersString);
    console.log("Debug: escapedDelimiter", escapedDelimiter);

    const finalDelimiters = new RegExp(
      `[${baseDelimiters}${escapedDelimiter}]`
    );

    console.log("Debug: finalDelimiters", finalDelimiters);

    const numbers = numbersString.split(finalDelimiters);

    console.log("Debug: numbers", numbers);

    let result = 0;
    for (const num of numbers) {
      if (num) {
        const parsedNum = parseInt(num, 10);
        ErrorHandler.validateNumber(parsedNum);
        result += parsedNum;
      }
    }

    Console.print(`결과 : ${result}`);
  }
}

export default App;
