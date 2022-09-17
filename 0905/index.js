let comNum = [];
let randomNum;
let myNum = [];
let strike = 0;
let ball = 0;
let count = 0;
let numError;
let result = "";
let a = ``;
function gameStart() {
  result = ``;
  document.getElementById("resultScreen").innerHTML = `${result}`;
  comNum = [];
  while (comNum.length != 3) {
    randomNum = parseInt(Math.random() * 10);
    comNum.push(randomNum);
    comNum = [...new Set(comNum)];
  }
  console.log(comNum);
}
function inputNum(num) {
  if (a.length >= 3) {
    alert(`입력을 초과하셨습니다.`);
  } else {
    a = a + num;
    document.getElementById("inputNum").innerHTML = `${a}`;
  }
}
function reset() {
  a = ``;
  document.getElementById("inputNum").innerHTML = `입력된 숫자`;
}
function check() {
  a.split("");
  myNum = [...new Set(a)];
  if (comNum.length == 0) {
    alert(`게임을 시작해주세요.`);
    a = ``;
    document.getElementById("inputNum").innerHTML = `입력된 숫자`;
    return;
  }
  if (myNum.length != 3) {
    alert(`중복된 숫자를 입력하셨습니다. 다시 입력해주세요.`);
    a = ``;
    document.getElementById("inputNum").innerHTML = `입력된 숫자`;
    numError = true;
  } else {
    numError = false;
    count++;
    for (let i = 0; i < 3; i++) {
      if (myNum[i] == comNum[i]) {
        strike++;
      } else if (
        myNum[i] == comNum[(i + 1) % 3] ||
        myNum[i] == comNum[(i + 2) % 3]
      ) {
        ball++;
      }
    }
  }
  if (numError) {
  } else {
    if (strike == 3) {
      result += `정답입니다. ${count}번만에 맞추셨습니다.`;
      document.getElementById("resultScreen").innerHTML = `${result}`;
      strike = 0;
      ball = 0;
      count = 0;
      result = "";
      document.getElementById("inputNum").innerHTML = `입력된 숫자`;
      a = "";
    } else if (strike == 0 && ball == 0) {
      result += `${myNum[0]},${myNum[1]},${myNum[2]}의 결과는 아웃입니다.<br/>`;
      document.getElementById("resultScreen").innerHTML = `${result}`;
      strike = 0;
      ball = 0;
      count = 0;
      document.getElementById("inputNum").innerHTML = `입력된 숫자`;
      a = "";
    } else {
      result += `${myNum[0]},${myNum[1]},${myNum[2]}의 결과는 ${strike}스트라이크, ${ball}볼입니다.<br/>`;
      document.getElementById("resultScreen").innerHTML = `${result}`;
      strike = 0;
      ball = 0;
      count = 0;
      document.getElementById("inputNum").innerHTML = `입력된 숫자`;
      a = "";
    }
  }
}
