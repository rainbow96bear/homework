function odd() {
  let num = document.getElementById("oddInput").value;
  for (let i = 1; i <= num; i++) {
    if (i % 2) {
      console.log(i);
    }
  }
}
function even() {
  let num = document.getElementById("evenInput").value;
  for (let i = 1; i <= num; i++) {
    if (!(i % 2)) {
      console.log(i);
    }
  }
}
// ... 은 스프레드라고 한다 배열의 아이템을 하나하나 분리한다.
// new Set() 은 배열이지만 조금 다른 배열 중복되는 값을 제거하는 배열 느낌

function oddEven() {
  let input = prompt(
    `홀수 짝수중 원하는 것과 숫자를 입력해주세요.\nex)홀수 12`
  );
  let check = input.split("");
  check.find((item) => {
    if (item == "홀") {
      check = input.split(" ");
      for (let i = 1; i <= parseInt(check[1]); i += 2) {
        console.log(i);
      }
      return;
    } else if (item == "짝") {
      check = input.split(" ");
      for (let i = 0; i <= parseInt(check[1]); i += 2) {
        console.log(i);
      }
      return;
    }
  });
}
function check() {
  let a = prompt(`숫자를 입력하세요`);
  let check = [];
  let b = "";
  for (let i = 0; i <= a; i++) {
    let count = 0;
    b = i.toString();
    check = b.split("");
    check.map((item) => {
      if (item == 3 || item == 6 || item == 9) {
        count++;
      }
    });
    if (count) {
      console.log(`짝을 ${count}번`);
    } else {
      console.log(i);
    }
  }
}
