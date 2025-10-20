# javascript-calculator-precourse

## Functional requirements

### 입력한 문자열에서 숫자를 추출하여 더하는 계산기를 구현한다.
- 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환한다.
예: "" => 0, "1,2" => 3, "1,2,3" => 6, "1,2:3" => 6

- 앞의 기본 구분자(쉼표, 콜론) 외에 커스텀 구분자를 지정할 수 있다. 커스텀 구분자는 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용한다.
예를 들어 "//;\n1;2;3"과 같이 값을 입력할 경우 커스텀 구분자는 세미콜론(;)이며, 결과 값은 6이 반환되어야 한다.

- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

### 구현할 기능
**1. 입력 및 출력**
- @woowacourse/mission-utils에서 제공하는 Console API를 사용
- Console.readLineAsync(), Console.print() 이용

**2. 쉼표 또는 콜론으로 숫자 분리 후 합 반환**

**3. 커스텀 구분자 지정**
---

## 에러 핸들러
### 입출력 요구 사항에서 문자열은 구분자와 양수로 구분되어야 한다.
**요구사항**
- 음수가 포함되면 error를 호출한다.
- 구분자에서는 -가 들어갈 수 있다.

**구현**
- 최종적으로 구한 number를 계산할 때, 음수값이 검출되면 error로 처리한다.
- 코드
  ErrorHandler.validateNumber(parsedNum);

### 입력값이 없으면 의도와 다르다고 가정한다.
**요구사항**
- 입력값이 없으면 error로 처리한다.

**구현**
- input의 길이가 0이면 예외처리한다.
- 코드
  ErrorHandler.validateEmptyInput(input);

### 커스텀 구분자는 1개라고 가정한다.
요구사항에는 명시되어 있지 않으나, 테스트케이스를 기준으로 커스텀 구분자는 1개라고 가정했다.

**구현**
- 커스텀 구분자 구별 정규식인 const customDelimiterRegex = /\/\/(.*?)\\n/; 로 split을 하게되면, 커스텀 선언이 2개 이상일 경우
  split의 결과가 5개의 항 이상이 된다. 이를 이용해서 예외처리를 진행한다.
- 코드
  ErrorHandler.validateInput(parts);

---

## Trouble Shooting
### 1. readLineAsync 인식 방법에 대해서 이해하지 못함
**1. 상황**
//kb\n 와 같은 커스텀 구분자가 포함된 input에서
  const customDelimiterRegex = /\/\/(.*?)\n/;
  const match = input.match(customDelimiterRegex);
와 같은 코드에서 match가 null로만 나오는 오류 발생

**2. 분석**
진짜 줄바꿈 문자인 \\n와 그냥 문자인 \n의 구분에서 오류가 발생
정규식은 진짜 줄바꿈 문자를 찾으려고 시도 -> input에는 진짜 줄바꿈 문자는 없음 -> match가 null.

**3. 해결**
정규식 코드를 수정
  const customDelimiterRegex = /\/\/(.*?)\n/; -> const customDelimiterRegex = /\/\/(.*?)\\n/;
input에는 줄바꿈의 개념이 없음, 정규식의 \n을 \\n으로 변경해서 단순한 문자인 \n을 찾는 것으로 변경.

**4. 결과**

<img width="764" height="157" alt="스크린샷 2025-10-20 오후 1 29 45" src="https://github.com/user-attachments/assets/d029f9bc-b085-4b08-b814-cc215b206262" />

---

## 결과 

1. AngularJs의 커밋 컨벤션을 참고해가면서 커밋을 올리고, 디자인을 먼저 생각하면서 코딩을 하니 좀 더 체계적이고 효과적으로 코딩이 진행됨을 느꼈다.
2. README에 정리하면서 코딩을 진행하니 프로그램이 직관적으로 와닿기는 했지만, 너무 많은 내용이 한꺼번에 보이는 문제가 있었다. README를 분할해서 보관하는 것을 추후에 고려해보고 싶다.


