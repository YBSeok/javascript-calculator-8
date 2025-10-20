# javascript-calculator-precourse

## Functional requirements

### 입력한 문자열에서 숫자를 추출하여 더하는 계산기를 구현한다.
- 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환한다.
예: "" => 0, "1,2" => 3, "1,2,3" => 6, "1,2:3" => 6

- 앞의 기본 구분자(쉼표, 콜론) 외에 커스텀 구분자를 지정할 수 있다. 커스텀 구분자는 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용한다.
예를 들어 "//;\n1;2;3"과 같이 값을 입력할 경우 커스텀 구분자는 세미콜론(;)이며, 결과 값은 6이 반환되어야 한다.

- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

### 구현할 기능
1. 입력 및 출력
- @woowacourse/mission-utils에서 제공하는 Console API를 사용
- Console.readLineAsync(), Console.print() 이용

2. 쉼표 또는 콜론으로 숫자 분리 후 합 반환

3. 커스텀 구분자 지정

4. 에러 핸들러

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


