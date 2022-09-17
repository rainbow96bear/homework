const sBtn = document.getElementById("sBtn");
const rBtn = document.getElementById("rBtn");
const pBtn = document.getElementById("pBtn");
const startBtn = document.getElementById("startBtn");
const coinAmount = document.getElementById(`coinAmount`);
const insertCoin = document.getElementById("insertCoin");
const gameScreen = document.getElementById("gameScreen");
const win = document.getElementById("win");
const lose = document.getElementById("lose");
const draw = document.getElementById("draw");
let checkCount = 0;
let myChoice = 100;
let comChoice = 100;
let insertCheck = 1;
let coin = 1000;
let gameResult = 100;
let test = 0;
const rewardArr = [1, 2, 7, 3, 2, 4, 1, 20, 2, 6, 1, 3, 2, 1, 3];
const rewardTest = [
  {
    rate: 1,
    color: "#808080",
    start: 0,
    end: 1,
  },
  {
    rate: 2,
    color: "#00aa00",
    start: 1,
    end: 2,
  },
  {
    rate: 7,
    color: "#000f0f",
    start: 2,
    end: 3,
  },
  {
    rate: 3,
    color: "#808080",
    start: 3,
    end: 4,
  },
  {
    rate: 2,
    color: "#00aa00",
    start: 4,
    end: 5,
  },
  {
    rate: 4,
    color: "#000f0f",
    start: 5,
    end: 6,
  },
  {
    rate: 1,
    color: "#808080",
    start: 6,
    end: 7,
  },
  {
    rate: 20,
    color: "#00aa00",
    start: 7,
    end: 8,
  },
  {
    rate: 2,
    color: "#000f0f",
    start: 8,
    end: 9,
  },
  {
    rate: 6,
    color: "#808080",
    start: 9,
    end: 10,
  },
  {
    rate: 1,
    color: "#00aa00",
    start: 10,
    end: 11,
  },
  {
    rate: 3,
    color: "#000f0f",
    start: 11,
    end: 12,
  },
  {
    rate: 2,
    color: "#808080",
    start: 12,
    end: 13,
  },
  {
    rate: 1,
    color: "#00aa00",
    start: 13,
    end: 14,
  },
  {
    rate: 3,
    color: "#000f0f",
    start: 14,
    end: 15,
  },
];

// 가위바위보 돌리기 함수
function changeRSP() {
  test = parseInt(Math.random() * 3);
  if (test == 0) {
    gameScreen.style.backgroundImage = "url(./scissors.png)";
  } else if (test == 1) {
    gameScreen.style.backgroundImage = "url(./rock.png)";
  } else {
    gameScreen.style.backgroundImage = "url(./paper.png)";
  }
}

let playing = setInterval(() => changeRSP(), 1000);

// 게임 시작
startBtn.onclick = () => {
  if (coin >= 100) {
    if (gameResult != 100) {
      resetting();
    }
    if (insertCheck) {
      clearInterval(playing);
      playing = setInterval(() => changeRSP(), 200);
      insertCheck = 0;
      comChoice = parseInt(Math.random() * 3);
      coin -= 100;
      coinAmount.innerText = coin;
    } else {
      alert(`이미 게임 시작되었습니다. 무엇을 낼지 선택해주세요.`);
    }
  } else {
    alert(`돈없어`);
  }
};

// 가위 바위 보 선택
sBtn.onclick = () => select(0);
rBtn.onclick = () => select(1);
pBtn.onclick = () => select(2);
function select(choice) {
  if (comChoice == 100) {
    alert(`게임 시작을 눌러주세요.`);
  } else {
    if (checkCount) {
      alert(`이미 선택하셨습니다.`);
    } else {
      switch (choice) {
        case 0:
          sBtn.style.border = "3px solid red";
          break;
        case 1:
          rBtn.style.border = "3px solid red";
          break;
        case 2:
          pBtn.style.border = "3px solid red";
          break;
      }
      checkCount++;
      myChoice = choice;
      setTimeout(() => {
        clearInterval(playing);
        gameScreen.style.backgroundColor = "pink";
        if (comChoice == 0) {
          gameScreen.style.backgroundImage = "url(./scissors.png)";
        } else if (comChoice == 1) {
          gameScreen.style.backgroundImage = "url(./rock.png)";
        } else {
          gameScreen.style.backgroundImage = "url(./paper.png)";
        }
        result();
      }, 2000);
    }
  }
}

// 게임 결과 확인후  시작시 재설정 함수
function resetting() {
  switch (myChoice) {
    case 0:
      sBtn.style.border = "none";
      break;
    case 1:
      rBtn.style.border = "none";
      break;
    case 2:
      pBtn.style.border = "none";
      break;
  }
  checkCount = 0;
  myChoice = 100;
  comChoice = 100;
  insertCheck = 1;
  gameResult = 100;
  gameScreen.style.backgroundColor = "";
  draw.style.backgroundColor = "";
  win.style.backgroundColor = "";
  lose.style.backgroundColor = "";
}

function drawResult() {
  coin += 100;
  draw.style.backgroundColor = "lightblue";
}

function loseResult() {
  lose.style.backgroundColor = "lightblue";
}

function winResult() {
  let reward = parseInt(Math.random() * 15);
  coin += rewardArr[reward] * 100;
  win.style.backgroundColor = "lightblue";
}
function result() {
  if (myChoice == comChoice) {
    drawResult();
  } else if (myChoice - comChoice == -1 || myChoice - comChoice == 2) {
    loseResult();
  } else {
    winResult();
  }
  coinAmount.innerText = coin;
  gameResult = 1;
}

const roulet1 = document.getElementById("roulet1");
const ctx = roulet1.getContext("2d");

ctx.translate(150, 150);

rewardTest.forEach((e) => {
  ctx.beginPath();
  ctx.arc(
    0,
    0,
    150,
    -Math.PI / 15 - Math.PI / 2 + ((2 * Math.PI) / 15) * e.start,
    -Math.PI / 15 - Math.PI / 2 + ((2 * Math.PI) / 15) * e.end,
    false
  );
  ctx.lineTo(0, 0);
  ctx.stroke();
  ctx.fillStyle = e.color;
  ctx.fill();
  ctx.closePath();
});

// const test = document.getElementById("test");
// const ctx = test.getContext("2d");

// ctx.beginPath();

// // 4. 원 모양 설정
// ctx.arc(100, 100, 50, 0, Math.PI);

// // 5. 그리기
// ctx.stroke();

// // 6. 원 내부 색 채우기
// ctx.fillStyle = "blue";
// ctx.fill();
// ctx.closePath();
// ctx.beginPath();

// // 4. 원 모양 설정
// ctx.arc(100, 100, 50, Math.PI, 2 * Math.PI);

// // 5. 그리기
// ctx.stroke();

// // 6. 원 내부 색 채우기
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.closePath();
