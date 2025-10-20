const ErrorHandler = {
  validateInput(input) {},

  validateNumber(number) {
    if (number < 0) {
      throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
    }
  },
};

export default ErrorHandler;
