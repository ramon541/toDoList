const plusButton = document.querySelector(".bx-plus");
const input = document.querySelector("#itemInput");
const itensList = document.querySelector("#items");

function addItem(input) {
  // Apenas JS:
  // const newItem = document.createElement("div"); /* Cria uma nova div */
  // newItem.classList.add("item"); /* Adiciona uma class item na div */
  // const newContent = document.createTextNode(input); /* Coloca o text input dentro da nova div */
  // newItem.appendChild(newContent); /* Seta o  newContent como filho de NewItem*/
  // const currentItem = document.getElementById("items"); /* Elemento que eu quero adicionar */

  // currentItem.appendChild(newItem); /* Seta o NewItem como filho de currentItem */

  // atualValue = document.querySelector("#itemInput"); /* Seleciono o input */
  // atualValue.value = ""; /* Zero ele */

  // Usando JQuery:
  $("#items").append(
    `<div class="item">
        <button class="bx bx-checkbox bx-sm"></button>
        <p>${input}</p>
        <button class="bx bx-trash bx-sm"></button>
     </div>`
  );

  $("#itemInput").val("");
}

plusButton.addEventListener("click", (evento) => {
  if (evento.isTrusted === true && input.value != "") {
    addItem(input.value);
  }
});

input.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter" && input.value != "") {
    addItem(input.value);
  }
});

itensList.addEventListener("click", (evento) => {
  const target = evento.target.className;
  const node = evento.target.parentNode;
  if (target == "bx bx-trash bx-sm") {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  } else if (target == "bx bx-checkbox bx-sm") {
    evento.target.className = "bx bx-checkbox-checked bx-sm";
    evento.target.parentNode.classList.add("lt");
  } else if (target == "bx bx-checkbox-checked bx-sm") {
    evento.target.className = "bx bx-checkbox bx-sm";
    evento.target.parentNode.classList.remove("lt");
  }
});
