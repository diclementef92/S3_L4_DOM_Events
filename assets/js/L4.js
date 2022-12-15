document.addEventListener("DOMContentLoaded", (event) => {
  const button = document.querySelector(".add-task");

  button.onclick = function () {
    const task = document.querySelector(".input-task");
    addTask(task.value.trim());
  };
});

const addTask = function (text) {
  if (text) {
    const listArea = document.querySelector(".list");

    let item = document.createElement("li");
    item.classList.add("list-item");

    let square = document.createElement("i");
    square.classList.add("fa-regular", "fa-square");

    let task = document.createElement("label");
    task.classList.add("task");
    task.textContent = text;

    let buttonRemove = document.createElement("button");
    buttonRemove.textContent = "Rimuovi";

    buttonRemove.onclick = function name(params) {};

    item.appendChild(square);
    item.appendChild(task);
    item.appendChild(buttonRemove);

    item.onclick = function () {
      if (item.classList.contains("done")) {
        // precedentemente clicckato
        item.classList.remove("done");
        item.querySelector("i").classList.remove("fa-square-check"); //<i class="fa-regular fa-square-check"></i>
        item.querySelector("i").classList.add("fa-square");
      } else {
        //altrimenti lo rimuovo
        item.classList.add("done");
        item.querySelector("i").classList.remove("fa-square");
        item.querySelector("i").classList.add("fa-square-check");
      }
    };

    listArea.appendChild(item);
  }
};
