let inputNum = prompt(`숫자를 입력해주세요.`);

function factorial(inputNum) {
  if (inputNum == 1) {
    return 1;
  } else {
    return factorial(inputNum - 1) * inputNum;
  }
}
alert(`${inputNum}팩토리얼 값 : ${factorial(inputNum)}`);

function pibonachi(inputNum) {
  if (inputNum == 1) {
    return 1;
  } else if (inputNum == 2) {
    return 1;
  } else if (inputNum == 3) {
    return 1 + pibonachi(inputNum - 1);
  } else {
    return pibonachi(inputNum - 1) + pibonachi(inputNum - 2);
  }
}
alert(`${inputNum}번째 피보나치 값 : ${pibonachi(inputNum)}`);
