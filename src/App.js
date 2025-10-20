import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

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

    const finalDelimiters = new RegExp(
      `[${baseDelimiters}${escapedDelimiter}]`
    );

    const numbers = numbersString.split(finalDelimiters);
    let result = 0;

    for (const num of numbers) {
      if (num) {
        result += parseInt(num, 10);
      }
    }

    Console.print(`결과 : ${result}`);
  }
}

export default App;
