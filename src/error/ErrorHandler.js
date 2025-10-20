const ErrorHandler = {
  validateInput(input) {
    if (input.length > 3) {
      throw new Error("[ERROR] 커스텀 구분자는 1번만 선언될 수 있습니다.");
    }
  },

  validateNumber(number) {
    if (number < 0) {
      throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
    }
  },
};

export default ErrorHandler;
