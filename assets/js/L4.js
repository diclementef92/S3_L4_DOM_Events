document.addEventListener("DOMContentLoaded", (event) => {
  const button = document.querySelector(".add-task");

  //bottone aggiungi
  button.onclick = function () {
    const task = document.querySelector(".input-task");
    addTask(task.value.trim());
    task.value = "";
  };

  const addTask = function (text) {
    if (text) {
      const listArea = document.querySelector(".list");

      let item = document.createElement("li");
      item.classList.add("list-item");

      let square = document.createElement("i");
      square.classList.add("fa-regular", "fa-square");
      square.onclick = toggleTask;

      let task = document.createElement("label");
      task.classList.add("task");
      task.textContent = text;

      //cambia colore ad ogni click
      colors = [
        "rgba(255, 66, 66, 0.89)",
        "orange",
        "yellow",
        "lightblue",
        "none",
      ];
      index = 0;
      task.onclick = changeTaskColor;

      // <i class="fa-solid fa-trash-can"></i>
      let buttonRemove = document.createElement("i");
      buttonRemove.classList.add("fa-solid");
      buttonRemove.classList.add("fa-trash-can");
      buttonRemove.classList.add("buttonRemove");

      buttonRemove.onclick = function (e) {
        e.currentTarget.parentNode.remove();
      };

      item.appendChild(square);
      item.appendChild(task);
      item.appendChild(buttonRemove);
      listArea.appendChild(item);
    }
  };

  const toggleTask = function (e) {
    if (e.currentTarget.parentNode.classList.contains("done")) {
      // se precedentemente clicckato rimuovo il check
      e.currentTarget.parentNode.classList.remove("done");
      e.currentTarget.parentNode
        .querySelector("i")
        .classList.remove("fa-square-check"); //<i class="fa-regular fa-square-check"></i>
      e.currentTarget.parentNode.querySelector("i").classList.add("fa-square");
    } else {
      //altrimenti lo aggiungo il check
      e.currentTarget.parentNode.classList.add("done");
      e.currentTarget.parentNode
        .querySelector("i")
        .classList.add("fa-square-check");
      e.currentTarget.parentNode
        .querySelector("i")
        .classList.remove("fa-square");
    }
  };

  const changeTaskColor = function (e) {
    console.log(e.currentTarget.parentNode.style.backgroundColor);
    e.currentTarget.parentNode.style =
      "background-color: " + colors[index] + ";";
    index++;
    if (index === colors.length) {
      index = 0;
    }
  };

  window.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      // evita che la pagina si aggiorni premendo invio
      e.preventDefault();
      //ed esegue metodo onclick sul bottone aggiungi task
      const button = document.querySelector(".add-task");
      button.onclick();
    }
  });
});

// const colors = ["red", "green", "blue", "yellow", "purple"];
// const h1ChangeColor = function () {
//   randomIndex = Math.floor(Math.random() * colors.length)
//   myHeading.style.color = colors[randomIndex];
// }
