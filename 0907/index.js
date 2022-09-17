let arr = [];
let count;
let checkArr = [];
let stay = [];
function startGame() {
  count = 0;
  arr = [];
  let check;
  let randomArr = [];
  while (randomArr.length < 16) {
    check = parseInt(Math.random() * 16);
    if (!randomArr.includes(check)) {
      randomArr.push(check);
    }
  }
  for (let i = 0; i < 8; i++) {
    arr[randomArr[2 * i]] = i + 1;
    arr[randomArr[2 * i + 1]] = i + 1;
  }
  for (let i = 0; i < 16; i++) {
    document.getElementById("card" + (i + 1)).style.backgroundColor = "black";
    document.getElementById(
      "card" + (i + 1)
    ).innerHTML = `<div class="card${i}">${arr[i]}</div>`;
  }
}
function choice(num) {
  if (count == 2) {
    document.getElementById("card" + (stay[0] + 1)).style.backgroundColor =
      "black";
    document.getElementById("card" + (stay[1] + 1)).style.backgroundColor =
      "black";
    stay = [];
    count = 0;
  }
  count++;
  stay.push(num);
  if (count == 1) {
    checkArr.push(arr[num]);
    document.getElementById("card" + (num + 1)).style.backgroundColor = "white";
  } else if (count == 2) {
    checkArr.push(arr[num]);
    document.getElementById("card" + (num + 1)).style.backgroundColor = "white";
    if (checkArr[0] == checkArr[1] && stay[0] != stay[1]) {
      count = 0;
      stay = [];
    }
    checkArr = [];
  }
}
