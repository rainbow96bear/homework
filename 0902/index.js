// 기본 과제
// 숫자 야구 게임
// 컴퓨터가 숫자 3개를 고른다
// 사람이 숫자 3개를 입력한다.
// 숫자가 같고 위치가 같으면 스트라이크
// 숫자만 같으면 위치가 다르면 볼
// 같은 숫자가 없으면 아웃
// 입력해서 몇번만에 맞추는지
let count = 0;
let num;
function inputNum() {
  num = prompt(`숫자를 입력해주세요`);
}
let from = 1;
let to = 3;
function Hanoi(num, from, to) {
  if (num >= 1) {
    Hanoi(num - 1, from, 6 - (from + to));
    console.log(
      `${num}번링을 ${from}에서 ${to}로 옮긴다. 움직인 횟수 : ${++count}`
    );
    Hanoi(num - 1, 6 - (from + to), to);
  }
}

let comFirstNum;
let comSecondNum;
let comThirdNum;
let gameNum;
let gameNum1;
let gameNum2;
let gameNum3;
let tryCount = 0;
let strike = 0;
let ball = 0;
let out = 0;
function gameStart() {
  comFirstNum = parseInt(Math.random() * 10);
  do {
    comSecondNum = parseInt(Math.random() * 10);
  } while (comFirstNum == comSecondNum);
  do {
    comThirdNum = parseInt(Math.random() * 10);
  } while (comFirstNum == comThirdNum || comSecondNum == comThirdNum);
  do {
    do {
      gameNum = prompt(`세자리 숫자를 입력하세요 ex)123`);
      gameNum.split("");
      if (gameNum.length != 3) {
        alert(`입력하신 숫자가 범위를 벗어났습니다.`);
      } else if (
        gameNum[0] == gameNum[1] ||
        gameNum[1] == gameNum[2] ||
        gameNum[0] == gameNum[2]
      ) {
        alert(`중복된 숫자를 입력하셨습니다. 각각 다른 숫자를 입력해주세요`);
      } else {
        console.log(comFirstNum, comSecondNum, comThirdNum);
      }
    } while (
      gameNum[0] == gameNum[1] ||
      gameNum[1] == gameNum[2] ||
      gameNum[0] == gameNum[2] ||
      gameNum.length != 3
    );
    tryCount++;
    if (gameNum[0] == comFirstNum) {
      strike++;
    } else if (gameNum[0] == comSecondNum || gameNum[0] == comThirdNum) {
      ball++;
    }
    if (gameNum[1] == comSecondNum) {
      strike++;
    } else if (gameNum[1] == comFirstNum || gameNum[1] == comThirdNum) {
      ball++;
    }
    if (gameNum[2] == comThirdNum) {
      strike++;
    } else if (gameNum[2] == comFirstNum || gameNum[2] == comSecondNum) {
      ball++;
    }
    if (strike == 3) {
      alert(`정답입니다.`);
      console.log(`정답입니다.`);

      return alert(`${tryCount}번 만에 맞추셨습니다.`);
    }
    if (strike == 0 && ball == 0) {
      alert(`${gameNum[0]},${gameNum[1]},${gameNum[2]}의 결과는 : 아웃입니다.`);
      console.log(
        `${gameNum[0]},${gameNum[1]},${gameNum[2]}의 결과는 : 아웃입니다.`
      );
    } else {
      console.log(
        `${gameNum[0]},${gameNum[1]},${gameNum[2]}의 결과는 : ${strike}strike ${ball}ball`
      );
      alert(
        `${gameNum[0]},${gameNum[1]},${gameNum[2]}의 결과는 : ${strike}strike ${ball}ball`
      );
    }
    strike = 0;
    ball = 0;
  } while (true);
}
