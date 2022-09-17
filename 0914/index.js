const addTaskBtn = document.getElementById("addTaskBtn");
const addTaskBox = document.getElementById("addTaskBox");
const acceptBtn = document.getElementById("acceptBtn");
const cancleBtn = document.getElementById("cancleBtn");
const textInput = document.getElementById("textInput");
const taskList = document.getElementById("taskList");
const editBox = document.getElementById("editBox");
const goBack = document.getElementById("goBack");
const editText = document.getElementById("editText");
const taskDelete = document.getElementById("taskDelete");
const taskComplete = document.getElementById("taskComplete");

let checkNum = 0;
let taskArr = [];
addTaskBtn.onclick = () => {
  addTaskBox.classList.toggle("addTaskBoxShow");
  if (addTaskBox.classList.contains("addTaskBoxShow")) {
    taskList.innerHTML = "";
    taskArr.forEach((item, index) => {
      taskList.innerHTML += `<div id="task${index}" onclick="editTask(${index})">${item}</div>`;
    });
    addTaskBtn.innerHTML = "할 일 추가";
  } else {
    addTaskBtn.innerHTML = "할 일 보기";
  }
};

acceptBtn.onclick = () => {
  if (textInput.value == "") {
    alert(`할 일을 입력해주세요`);
  } else {
    taskArr.push(textInput.value);
  }
  textInput.value = null;
};
cancleBtn.onclick = () => {
  taskList.innerHTML = "";
  taskArr.forEach((item, index) => {
    taskList.innerHTML += `<div id="task${index}" onclick="editTask(${index})">${item}</div>`;
  });
  if (addTaskBox.classList.contains("addTaskBoxShow")) {
    addTaskBtn.innerHTML = "할 일 추가";
  } else {
    addTaskBtn.innerHTML = "할 일 보기";
  }
  addTaskBox.classList.toggle("addTaskBoxShow");
  textInput.value = null;
};

function editTask(num) {
  checkNum = num;
  editBox.classList.toggle("editBoxShow");
  editText.value = taskArr[num];
  console.log(num);
}

goBack.onclick = () => {
  editBox.classList.toggle("editBoxShow");
};

taskChange.onclick = () => {
  taskArr[checkNum] = editText.value;
  document.getElementById(`task${checkNum}`).innerText = taskArr[checkNum];
  editBox.classList.toggle("editBoxShow");
};

taskDelete.onclick = () => {
  taskArr[checkNum] = null;
  taskArr = taskArr.filter((item) => {
    return item != null;
  });
  taskList.innerHTML = "";
  taskArr.forEach((item, index) => {
    taskList.innerHTML += `<div id="task${index}" onclick="editTask(${index})">${item}</div>`;
  });
  // document.getElementById(`task${checkNum}`).style.display = "none";
  editBox.classList.toggle("editBoxShow");
};
// taskComplete.onclick = () => {
//   document.getElementById(`task${checkNum}`).classList.add("complete");
//   editBox.classList.toggle("editBoxShow");
// };
