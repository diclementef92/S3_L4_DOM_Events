document.addEventListener("DOMContentLoaded", (event) => {
  const button = document.querySelector(".add-task");

  //bottone aggiungi
  button.onclick = function (event) {
    const task = document.querySelector(".input-task");
    addTask(task.value.trim());
    task.value = "";
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
    buttonRemove.classList.add("buttonRemove");
    buttonRemove.textContent = "Rimuovi";

    buttonRemove.onclick = function (e) {
      e.currentTarget.parentNode.remove();
    };

    item.appendChild(square);
    item.appendChild(task);
    item.appendChild(buttonRemove);

    item.onclick = function (e) {
      if (e.currentTarget.classList.contains("done")) {
        // precedentemente clicckato
        e.currentTarget.classList.remove("done");
        e.currentTarget.querySelector("i").classList.remove("fa-square-check"); //<i class="fa-regular fa-square-check"></i>
        e.currentTarget.querySelector("i").classList.add("fa-square");
      } else {
        //altrimenti lo rimuovo
        e.currentTarget.classList.add("done");
        e.currentTarget.querySelector("i").classList.add("fa-square-check");
        e.currentTarget.querySelector("i").classList.remove("fa-square");
      }
    };

    listArea.appendChild(item);
  }
};

// document
//   .getElementsByTagName("form")[0]
//   .addEventListener("submit", function (e) {
//     e.preventDefault();
//   });

window.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    // evita che la pagina si aggiorni premendo invio
    e.preventDefault();
    //ed esegue metodo add task
    const button = document.querySelector(".add-task");
    button.onclick();
  }
});
