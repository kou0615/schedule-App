const addDate = document.getElementById("addDate");
const addText = document.getElementById("addText");
const addButton = document.getElementById("addButton");
const tableBody = document.getElementById("tableBody");

//削除ボタンの設定
const removeClick = (event) => {
  const rowToRemove = event.currentTarget.parentNode.parentNode;

  rowToRemove.remove();

  saveData();
};
const addClick = (todo) => {
  if (addDate.value === "") {
    alert("日付を入力してください");
    return;
  }
  if (addText.value === "") {
    alert("内容を入力してください");
    return;
  }
  //行tr
  const newRow = document.createElement("tr");
  //日付列
  const dateTd = document.createElement("td");
  //内容列
  const contentTd = document.createElement("td");
  //削除列
  const removeTd = document.createElement("td");
  //removeボタンの属性
  const removeButton = document.createElement("input");
  removeButton.setAttribute("type", "button");
  removeButton.value = "remove";
  removeButton.onclick = removeClick;

  //Tdの中身を設定
  dateTd.textContent = addDate.value;
  contentTd.textContent = addText.value;
  removeTd.appendChild(removeButton);
  //TrへTdを追加
  newRow.appendChild(dateTd);
  newRow.appendChild(contentTd);
  newRow.appendChild(removeTd);

  tableBody.appendChild(newRow);
  saveData();

  addDate.value = "";
  addText.value = "";
};

window.onload = (todo) => {
  addButton.onclick = addClick;
};

const saveData = () => {
  const schedules = document.querySelectorAll("td");
  let lists = [];
  schedules.forEach((td) => {
    lists.push(td.innerText);
  });
  localStorage.setItem("todos", JSON.stringify(lists));
};
